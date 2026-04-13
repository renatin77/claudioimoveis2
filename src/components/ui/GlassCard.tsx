"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: string;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className = "",
  hover = false,
  padding = "p-6",
  onClick,
}: GlassCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`glass rounded-2xl ${padding} ${hover ? "glass-hover gold-glow-hover cursor-pointer" : ""} ${className}`}
      whileTap={hover && !shouldReduceMotion ? { scale: 0.98 } : undefined}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
