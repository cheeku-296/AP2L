"use client";
import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { scaledStrokeWidth } from "./types";
import { motion, useAnimate } from "framer-motion";

const ArrowRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = async () => {
      await animate(
        ".arrow-line, .arrow-head",
        { x: [0, 5, 0] },
        { duration: 0.35, ease: "easeInOut" }
      );
    };

    const stop = () => {
      animate(".arrow-line, .arrow-head", { x: 0 }, { duration: 0.2 });
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
        <motion.path className="arrow-line" d="M5 12h14" />
        <motion.path className="arrow-head" d="m12 5 7 7-7 7" />
      </motion.svg>
    );
  }
);

ArrowRightIcon.displayName = "ArrowRightIcon";

export default ArrowRightIcon;
