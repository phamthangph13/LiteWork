"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type Props = {
  items: string[];
  interval?: number;
  className?: string;
};

export default function TextRotate({ items, interval = 2600, className }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % items.length),
      interval,
    );
    return () => window.clearInterval(id);
  }, [items, interval]);

  return (
    <span className="relative inline-grid overflow-hidden align-bottom">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={index}
          className={className}
          initial={{ y: "75%", opacity: 0, filter: "blur(2px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-75%", opacity: 0, filter: "blur(2px)" }}
          transition={{ type: "spring", stiffness: 420, damping: 34, mass: 0.7 }}
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
