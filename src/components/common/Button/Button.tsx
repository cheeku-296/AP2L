"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={twMerge(
          clsx(
            "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 cursor-pointer outline-none",
            "focus-visible:ring-2 focus-visible:ring-cyan-400",
            "disabled:opacity-60 disabled:pointer-events-none",

            variant === "primary" &&
              "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg hover:scale-105 hover:shadow-cyan-500/30",

            variant === "secondary" &&
              "border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10",

            variant === "ghost" &&
              "text-white hover:bg-white/5"
          ),
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;