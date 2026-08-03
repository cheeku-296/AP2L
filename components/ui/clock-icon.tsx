"use client";
import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { scaledStrokeWidth } from "./types";
import { motion, useAnimate } from "framer-motion";

const ClockIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = async () => {
      await animate(
        ".clock-hands",
        { rotate: [0, 360] },
        { duration: 0.6, ease: "easeInOut" }
      );
    };

    const stop = () => {
      animate(".clock-hands", { rotate: 0 }, { duration: 0.2 });
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
        <motion.g className="clock-hands" style={{ transformOrigin: "12px 12px" }}>
          <path d="M12 6v6l4 2" />
        </motion.g>
      </motion.svg>
    );
  }
);

ClockIcon.displayName = "ClockIcon";

export default ClockIcon;
