"use client";
import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { scaledStrokeWidth } from "./types";
import { motion, useAnimate } from "framer-motion";

const MenuIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = async () => {
      await Promise.all([
        animate(".line-top", { x: [0, 2, 0] }, { duration: 0.25 }),
        animate(".line-mid", { x: [0, -2, 0] }, { duration: 0.25, delay: 0.05 }),
        animate(".line-bot", { x: [0, 2, 0] }, { duration: 0.25, delay: 0.1 }),
      ]);
    };

    const stop = () => {
      animate(".line-top, .line-mid, .line-bot", { x: 0 }, { duration: 0.2 });
    };

    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));

    return (
      <motion.svg
        ref={scope}
        onHoverStart={start}
        onHoverEnd={stop}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={scaledStrokeWidth(strokeWidth, 24)}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`cursor-pointer ${className}`}
      >
        <motion.line className="line-top" x1="4" x2="20" y1="12" y2="12" />
        <motion.line className="line-mid" x1="4" x2="20" y1="6" y2="6" />
        <motion.line className="line-bot" x1="4" x2="20" y1="18" y2="18" />
      </motion.svg>
    );
  }
);

MenuIcon.displayName = "MenuIcon";

export default MenuIcon;
