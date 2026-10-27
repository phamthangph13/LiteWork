# SEO skills đã cài cho agent

## Nguồn

| Skill | Repo | Phiên bản | License |
|---|---|---|---|
| `seo` (26 sub-skills) | [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | v2.5.0 | MIT |
| `ai-seo` | [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | main (10/2026) | MIT |

## Cách dùng nhanh

Từ thư mục gốc repo:

```bash
# Kiểm tra runtime
.agents/skills/seo/scripts/claude-seo doctor

# Phân tích một trang
.agents/skills/seo/scripts/claude-seo run parse_html.py --url https://deepsi.space/ --json

# Kiểm tra sitemap
.agents/skills/seo/scripts/claude-seo run sitemap_discovery.py https://deepsi.space/ --json
```

Audit site local cần khai báo target:

```bash
CLAUDE_SEO_LOCAL_TARGETS="localhost:4321" \
  .agents/skills/seo/scripts/claude-seo run parse_html.py --url http://localhost:4321/ --json
```

## Ghi chú cài đặt

- Đã đổi các đường dẫn `${CLAUDE_PLUGIN_ROOT}` trong tài liệu skill sang `.agents/skills/seo/...`.
- Runtime Python được tạo bằng `claude-seo setup --skip-browser`; môi trường ảo nằm ngoài repo.
- Chromium/Playwright chưa cài; các script không cần render vẫn chạy bình thường.
- Các sub-skill nằm trong `subskills/`, agents trong `agents/`, schema mẫu trong `schema/`.
