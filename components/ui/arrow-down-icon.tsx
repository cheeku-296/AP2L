"use client";

import React, { forwardRef, useImperativeHandle } from "react";
import { motion, useAnimate } from "framer-motion";
import { AnimatedIconHandle, AnimatedIconProps } from "./types";

const ArrowDownIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        scope.current,
        { y: [0, 4, 0] },
        { duration: 0.5, ease: "easeInOut" }
      );
    };

    const stopAnimation = () => {
      animate(scope.current, { y: 0 }, { duration: 0.2 });
    };

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    return (
      <div
        className={`inline-flex items-center justify-center cursor-pointer ${className}`}
        onMouseEnter={startAnimation}
        onMouseLeave={stopAnimation}
      >
        <motion.svg
          ref={scope}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </motion.svg>
      </div>
    );
  }
);

ArrowDownIcon.displayName = "ArrowDownIcon";

export default ArrowDownIcon;
