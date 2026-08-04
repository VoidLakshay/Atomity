"use client" 

import * as React from "react"
import { motion } from "framer-motion";
 
interface ShiningTextProps {
  text: string;
  className?: string;
}

export function ShiningText({ text, className }: ShiningTextProps) {
  return (
    <motion.h2
      className={`bg-[linear-gradient(110deg,#171717,35%,#737373,50%,#171717,75%,#171717)] bg-[length:200%_100%] bg-clip-text text-transparent ${className || ""}`}
      initial={{ backgroundPosition: "200% 0" }}
      animate={{ backgroundPosition: "-200% 0" }}
      transition={{
        repeat: Infinity,
        duration: 3,
        ease: "linear",
      }}
    >
      {text}
    </motion.h2>
  );
}
