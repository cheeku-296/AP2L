"use client";
import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { scaledStrokeWidth } from "./types";
import { motion, useAnimate } from "framer-motion";

const SearchIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = async () => {
      await animate(
        ".search-glass",
        { scale: [1, 1.15, 1], rotate: [0, 10, 0] },
        { duration: 0.35, ease: "easeInOut" }
      );
    };

    const stop = () => {
      animate(".search-glass", { scale: 1, rotate: 0 }, { duration: 0.2 });
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
        <motion.g className="search-glass" style={{ transformOrigin: "11px 11px" }}>
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </motion.g>
      </motion.svg>
    );
  }
);

SearchIcon.displayName = "SearchIcon";

export default SearchIcon;
