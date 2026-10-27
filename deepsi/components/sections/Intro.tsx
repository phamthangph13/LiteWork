"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Sticker } from "@/components/ui/Stickers";

const STORE_KEY = "deepsi-intro";

type Phase = "hidden" | "launch" | "exit";

export default function Intro() {
  const [phase, setPhase] = useState<Phase>("hidden");
  const armed = useRef(false);

  useEffect(() => {
    if (armed.current) return;
    armed.current = true;
    let shown = false;
    try {
      shown = sessionStorage.getItem(STORE_KEY) === "1";
    } catch {}
    if (shown) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      try {
        sessionStorage.setItem(STORE_KEY, "1");
      } catch {}
      return;
    }
    const start = window.setTimeout(() => setPhase("launch"), 0);
    return () => window.clearTimeout(start);
  }, []);

  useEffect(() => {
    if (phase === "hidden") return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  const finish = () => {
    setPhase("exit");
    window.setTimeout(() => {
      try {
        sessionStorage.setItem(STORE_KEY, "1");
      } catch {}
      setPhase("hidden");
    }, 640);
  };

  useEffect(() => {
    if (phase !== "launch") return;
    const done = window.setTimeout(finish, 2350);
    const skip = () => finish();
    window.addEventListener("keydown", skip);
    window.addEventListener("pointerdown", skip);
    return () => {
      window.clearTimeout(done);
      window.removeEventListener("keydown", skip);
      window.removeEventListener("pointerdown", skip);
    };
  }, [phase]);

  if (phase === "hidden") return null;

  const exiting = phase === "exit";

  return (
    <AnimatePresence>
      <motion.div
        key="intro"
        className="fixed inset-0 z-[100]"
        initial={{ opacity: 1 }}
        animate={{ opacity: exiting ? 0 : 1 }}
        transition={{ duration: 0.45, ease: "easeIn" }}
        style={{ pointerEvents: exiting ? "none" : "auto" }}
        onClick={finish}
      >
        <div className="absolute inset-0 bg-paper pattern-dots opacity-60" />

        {(["top", "bottom"] as const).map((half) => (
          <motion.div
            key={half}
            className={
              half === "top"
                ? "absolute inset-x-0 top-0 h-1/2 bg-paper"
                : "absolute inset-x-0 bottom-0 h-1/2 bg-paper"
            }
            initial={{ y: 0 }}
            animate={{ y: exiting ? (half === "top" ? "-101%" : "101%") : 0 }}
            transition={{ duration: 0.58, ease: [0.76, 0, 0.24, 1] }}
            style={{ zIndex: 3 }}
          />
        ))}

        <div
          className="relative z-20 flex h-full flex-col items-center justify-center overflow-hidden"
          aria-hidden
        >
          <motion.div
            className="w-28 sm:w-32"
            initial={{ y: "70vh", scale: 0.85, rotate: -6 }}
            animate={{
              y: exiting ? "-130%" : ["70vh", "0vh", "0vh", "-6vh"],
              rotate: exiting ? -14 : [-6, -6, -8, -8],
            }}
            transition={{
              duration: exiting ? 1.2 : 1.35,
              times: exiting ? undefined : [0, 0.28, 0.6, 1],
              ease: "easeOut",
            }}
          >
            <Sticker kind="rocket" rot={-8} float="none" className="w-full" />
          </motion.div>

          <motion.div
            className="mt-7 flex flex-col items-center px-6 text-center"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: exiting ? 0 : 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex font-display text-4xl font-bold tracking-tight sm:text-6xl">
              {"DEEPSI".split("").map((ch, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 24, rotate: -8 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ delay: 0.5 + i * 0.055, type: "spring", stiffness: 380, damping: 24 }}
                  className="inline-block"
                >
                  {ch}
                </motion.span>
              ))}
            </div>
            <motion.div
              className="mt-3 h-1 w-24 origin-left bg-accent sm:w-32"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.95, duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
            />
            <motion.p
              className="mt-3 font-mono text-[11px] uppercase tracking-[0.3em] text-ink-soft sm:text-xs"
              initial={{ y: 8 }}
              animate={{ y: 0 }}
              transition={{ delay: 1.05, duration: 0.4 }}
            >
              AI Agent Solutions
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
