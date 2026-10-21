---
name: pretext
description: Multiline text measurement and layout in pure JavaScript/TypeScript without DOM reflow. Use when measuring text height, building virtualized chat feeds, masonry layouts, canvas/SVG text, streaming LLM outputs, or eliminating browser layout shifts.
---

# Pretext Skill

A guide and reference for **Pretext** (`@chenglou/pretext`) created by Cheng Lou. Pretext provides multiline text measurement and layout in pure JavaScript/TypeScript without ever touching the DOM.

---

## 1. Why Pretext?

Reading DOM dimensions (`getBoundingClientRect()`, `offsetHeight`, `scrollHeight`) triggers **synchronous layout reflow** — one of the most expensive browser operations. In virtualized lists (like AI chat, feeds, tables) or dynamic layouts, measuring elements in the DOM causes frame drops, scroll jumping, and layout shifts.

**Pretext solves this:**
- Precomputes text measurement using Canvas `measureText` and ports of browser line-breaking algorithms (Blink, WebKit, Gecko).
- Layout calculation is **pure arithmetic** over cached numbers — zero DOM layout, zero reflow!
- Sub-millisecond layout for tens of thousands of items, enabling smooth 60fps virtualization and resize handling.

```bash
npm install @chenglou/pretext
```

---

## 2. Core Concepts & Lifecycle

### Step 1: `prepare()` (One-time Precomputation)
Normalizes whitespace, segments text at break opportunities, measures segments with canvas, and caches segment widths into an opaque handle.
> ⚠️ **Rule:** Run `prepare()` only when text content, font, or typography options change. Never run `prepare()` inside scroll or resize handlers!

### Step 2: `layout()` (Hot Path: Pure Arithmetic)
Computes wrapped line count and total block height for a given available width and line height.
> ⚡ Runs in microseconds. Rerun `layout()` freely during window resize, container width change, or virtual scroll updates.

---

## 3. Primary APIs & Usage Patterns

### A. Measuring Paragraph Height (Zero DOM Reflow)
```ts
import { prepare, layout } from '@chenglou/pretext';

// 1. Prepare once (cost: single canvas measurement batch)
const prepared = prepare(
  'Building high-performance user interfaces requires measuring text without triggering DOM reflows.',
  '16px Inter'
);

// 2. Lay out whenever container width changes (pure arithmetic)
const containerWidth = 320;
const lineHeight = 24; // px
const { height, lineCount } = layout(prepared, containerWidth, lineHeight);

console.log(`Height: ${height}px, Lines: ${lineCount}`);
```

#### Formatting Options for `prepare()`
```ts
const prepared = prepare(text, '16px "SF Pro Text", sans-serif', {
  whiteSpace: 'pre-wrap', // Preserves \n, tabs, and multiple spaces (textarea behavior)
  wordBreak: 'keep-all',  // Prevents word breaking in CJK text like CSS word-break: keep-all
  letterSpacing: 0.5,     // Matching CSS letter-spacing in px
});
```

---

### B. Extracting Exact Wrapped Lines
When you need the actual line slices (for Canvas rendering, SVG text, custom syntax highlighting, or line-by-line animations):

```ts
import { prepareWithSegments, layoutWithLines } from '@chenglou/pretext';

// Must use prepareWithSegments when text content of lines is required
const prepared = prepareWithSegments(longText, '14px JetBrains Mono');

const { lines, height } = layoutWithLines(prepared, 400, 20);

lines.forEach((line, index) => {
  console.log(`Line ${index + 1} (w: ${line.width}px): "${line.text}"`);
});
```

---

### C. Rich Inline Text (Multiple Fonts, Badges, Inline Code)
For mixed formatting within a single paragraph (bold text, code pills, inline links):

```ts
import { prepareRichInline, layoutRichInline } from '@chenglou/pretext';

// Each segment has its own font style and optional extraWidth (padding/margin)
const pieces = [
  { text: 'Run ', font: '14px Inter' },
  { text: 'npm install', font: '13px JetBrains Mono', extraWidth: 8 }, // 8px padding
  { text: ' to start the dev server.', font: '14px Inter' }
];

const prepared = prepareRichInline(pieces);
const { height, lineCount } = layoutRichInline(prepared, 280, 22);
```

---

### D. Shrink-Wrapping & Natural Width
To size a chat bubble or popover tightly around its content without overflowing:

```ts
import { prepare, layout, measureNaturalWidth } from '@chenglou/pretext';

const prepared = prepare(messageText, '15px Inter');

// Maximum width if line never wraps (unconstrained width)
const naturalWidth = measureNaturalWidth(prepared);

// Bubble width capped at maxWidth, or shrinkwrapped if shorter
const maxAllowedWidth = 480;
const bubbleContentWidth = Math.min(naturalWidth, maxAllowedWidth);
const { height } = layout(prepared, bubbleContentWidth, 20);
```

---

## 4. Production Architectural Patterns

### 1. Streaming AI / Markdown Chat
When streaming tokens from an LLM:
1. Split chat messages into paragraphs: `message.split(/(?<=\n)/)`.
2. Cache the `prepare` handle for all completed paragraphs.
3. As tokens stream in, only re-prepare the **last active paragraph**.
4. Sum the heights with `layout()`:
```ts
class StreamingMessageLayout {
  private paragraphs: string[] = [];
  private preparedHandles: any[] = [];
  private font = '15px Inter';
  private lineHeight = 22;

  appendChunk(fullText: string, width: number) {
    const rawParagraphs = fullText.split(/(?<=\n)/);
    
    // Only re-prepare paragraphs that changed (usually just the last one)
    for (let i = 0; i < rawParagraphs.length; i++) {
      if (rawParagraphs[i] !== this.paragraphs[i]) {
        this.paragraphs[i] = rawParagraphs[i];
        this.preparedHandles[i] = prepare(rawParagraphs[i], this.font, { whiteSpace: 'pre-wrap' });
      }
    }

    // Compute total message height (pure math)
    const totalHeight = this.preparedHandles.reduce(
      (sum, p) => sum + layout(p, width, this.lineHeight).height,
      0
    );

    return totalHeight;
  }
}
```

### 2. High-Performance Virtualization (100k Items at 60fps)
- **Tops Array**: Maintain `Float64Array` containing cumulative `top` offsets computed from Pretext heights.
- **Binary Search**: Use binary search over the `tops` array to determine visible `startIndex` and `endIndex` during scroll.
- **Single Read/Write Frame Loop**:
  1. In `requestAnimationFrame`, read viewport `scrollTop` and `clientHeight` once.
  2. Compute visible slice in JS memory.
  3. Update mounted DOM elements and container placeholder height in a single write batch.
  4. Never interleave DOM reads and writes!

### 3. Canvas & WebGL Text Rendering
Use `prepareWithSegments` and `layoutWithLines` to obtain exact line widths, baseline offsets, and line strings, and render them directly via `ctx.fillText(line.text, x, y)` without any DOM wrapper elements.

---

## 5. Rules: Do's and Don'ts

### DO:
- **Match font strings exactly**: Ensure canvas font string in `prepare()` (`16px Inter`) matches the CSS `font-family`, `font-size`, and `font-weight`.
- **Account for scrollbars**: Use `scrollbar-gutter: stable` on containers so scrollbars don't shrink container width unexpectedly by 15px.
- **Use integer line heights**: Prefer integer line-height values (e.g. `24px` instead of `1.5`) to eliminate floating point rounding inconsistencies between browsers.
- **Cache prepared handles**: Always store prepared handles in a `Map` or array indexed by message ID / content hash.

### DON'T:
- **Never call `prepare()` in a loop during resize or scroll**: Only call `layout()`.
- **Don't use relative font sizes in `prepare()`**: Always use explicit px units (e.g., `'16px sans-serif'`, not `'1.2rem sans-serif'`).
- **Don't apply unexpected padding inside measured widths**: If a container has `24px` padding, subtract `48px` before passing the width to `layout(prepared, width - 48, lineHeight)`.
