"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
}

export default function CTAButton({
  href,
  onClick,
  children,
  icon: Icon,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
  type = "button",
}: CTAButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all ease-out-expo font-sans";

  const sizeStyles = {
    sm: "text-sm px-4 py-2 h-9",
    md: "text-base px-6 py-3 h-12",
    lg: "text-lg px-8 py-4 h-14",
  };

  const variantStyles = {
    primary:
      "bg-gold text-white hover:bg-gold-dark gold-glow gold-glow-hover border border-gold/20",
    outline:
      "bg-transparent border border-gold/40 text-gold hover:bg-gold/10 gold-glow-hover",
  };

  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {Icon && <Icon className="w-4 h-4" />}
      <span>{children}</span>
    </>
  );

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
          transition={{ duration: 0.1 }}
        >
          {content}
        </motion.a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
      transition={{ duration: 0.1 }}
    >
      {content}
    </motion.button>
  );
}
