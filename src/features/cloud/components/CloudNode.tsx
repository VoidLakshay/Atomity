"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { nodeVariants } from '../animations';

type CloudNodeProps = {
  label: React.ReactNode;
  position: string;
  size?: string;
  index: number;
};

export function CloudNode({ label, position, size = "w-16 h-16 sm:w-20 sm:h-20", index }: CloudNodeProps) {
  return (
    <motion.div 
      custom={index}
      variants={nodeVariants}
      className={`absolute ${position} ${size} rounded-full border border-border-subtle bg-secondary flex items-center justify-center -translate-x-1/2 -translate-y-1/2 z-10 shadow-sm`}
    >
      <span className="text-[10px] sm:text-xs font-medium text-muted text-center leading-tight px-1">
        {label}
      </span>
    </motion.div>
  );
}
