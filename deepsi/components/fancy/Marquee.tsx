"use client";

import type { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  items: ReactNode[];
  duration?: string;
  reverse?: boolean;
  className?: string;
  itemClassName?: string;
  plain?: boolean;
  separator?: boolean;
};

export default function Marquee({
  items,
  duration = "40s",
  reverse = false,
  className,
  itemClassName,
  plain = false,
  separator = true,
}: Props) {
  const track = clsx(
    "flex w-max shrink-0 items-center",
    reverse ? "animate-marquee-x-reverse" : "animate-marquee-x",
  );

  return (
    <div
      className={clsx("group relative flex overflow-hidden select-none", className)}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      <Track
        track={track}
        items={items}
        itemClassName={itemClassName}
        plain={plain}
        separator={separator}
      />
      <Track
        track={track}
        items={items}
        itemClassName={itemClassName}
        plain={plain}
        separator={separator}
        hidden
      />
    </div>
  );
}

function Track({
  track,
  items,
  itemClassName,
  plain = false,
  separator = true,
  hidden = false,
}: {
  track: string;
  items: ReactNode[];
  itemClassName?: string;
  plain?: boolean;
  separator?: boolean;
  hidden?: boolean;
}) {
  const inner = items.map((item, i) => (
    <Item key={i} item={item} itemClassName={itemClassName} plain={plain} separator={separator} />
  ));

  if (hidden) {
    return (
      <div className={track} aria-hidden="true" inert>
        {inner}
      </div>
    );
  }
  return <div className={track}>{inner}</div>;
}

function Item({
  item,
  itemClassName,
  plain,
  separator,
}: {
  item: ReactNode;
  itemClassName?: string;
  plain: boolean;
  separator: boolean;
}) {
  return (
    <span className={plain ? itemClassName : clsx("flex items-center gap-6 pr-6", itemClassName)}>
      <span className="shrink-0">{item}</span>
      {separator ? <Asterisk /> : null}
    </span>
  );
}

function Asterisk() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="shrink-0">
      <path d="M7 1v12M1.8 4l10.4 6M12.2 4L1.8 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
