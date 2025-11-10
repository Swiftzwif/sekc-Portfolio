"use client";

import { motion } from "framer-motion";
import { ReactNode, MouseEvent } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
}: ButtonProps) {
  const baseStyles = "inline-block font-semibold transition-colors cursor-pointer";

  const variantStyles = {
    primary: "bg-[#00D9FF] text-black hover:bg-[#00B8D4]",
    secondary: "bg-[#1A1A1A] text-white hover:bg-[#2A2A2A]",
    outline: "bg-transparent text-[#00D9FF] border-2 border-[#00D9FF] hover:bg-[#00D9FF] hover:text-black",
  };

  const sizeStyles = {
    sm: "px-6 py-2 text-sm",
    md: "px-12 py-4 text-lg",
    lg: "px-16 py-5 text-xl",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={combinedClassName}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={combinedClassName}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
}

// Icon Button variant for social links
interface IconButtonProps {
  href: string;
  ariaLabel: string;
  children: ReactNode;
  className?: string;
}

export function IconButton({
  href,
  ariaLabel,
  children,
  className = "",
}: IconButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1A1A1A] text-[#00D9FF] hover:bg-[#00D9FF] hover:text-black transition-colors ${className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.a>
  );
}