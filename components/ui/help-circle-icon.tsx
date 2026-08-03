"use client";
import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { scaledStrokeWidth } from "./types";
import { motion, useAnimate } from "framer-motion";

const HelpCircleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = async () => {
      await animate(
        ".question-mark",
        { scale: [1, 1.2, 1], rotate: [0, 10, 0] },
        { duration: 0.35, ease: "easeInOut" }
      );
    };

    const stop = () => {
      animate(".question-mark", { scale: 1, rotate: 0 }, { duration: 0.2 });
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
        <circle cx="12" cy="12" r="10" />
        <motion.path
          className="question-mark"
          style={{ transformOrigin: "12px 12px" }}
          d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"
        />
      </motion.svg>
    );
  }
);

HelpCircleIcon.displayName = "HelpCircleIcon";

export default HelpCircleIcon;
