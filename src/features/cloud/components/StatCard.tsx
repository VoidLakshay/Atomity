"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { kpiItemVariants } from '../animations';

type StatCardProps = {
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
};

export function StatCard({ title, value, description, icon }: StatCardProps) {
  const isNodes = title.includes('Nodes');
  const isLatency = title.includes('Latency');

  return (
    <motion.div 
      variants={kpiItemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-xl border border-white/30 bg-white/10 backdrop-blur-md p-5 shadow-sm flex items-center justify-between hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div className="flex items-center justify-center w-12 h-12 rounded-full border bg-white/30 border-white/40 shadow-sm text-black/80 flex-shrink-0">
          {icon}
        </div>
        
        {/* Text */}
        <div className="flex flex-col">
          <div className="text-2xl sm:text-3xl font-bold tracking-tight text-black leading-none mb-1">{value}</div>
          <span className="text-[13px] font-semibold text-black/80">{title}</span>
          <p className="mt-1.5 text-[10px] sm:text-[11px] text-black/60 leading-[1.3] max-w-[130px]">{description}</p>
        </div>
      </div>

      {/* Sparklines */}
      <div className="hidden sm:flex flex-shrink-0 h-10 w-24 ml-2 items-center">
        {isNodes && (
          <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
            <path d="M0,35 L10,35 L20,25 L30,30 L40,15 L50,20 L60,10 L70,15 L80,5 L90,10 L100,0" fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M0,35 L10,35 L20,25 L30,30 L40,15 L50,20 L60,10 L70,15 L80,5 L90,10 L100,0 L100,40 L0,40 Z" fill="url(#grad-nodes)" opacity="0.1" />
            <defs>
              <linearGradient id="grad-nodes" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#000000" stopOpacity="1" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        )}
        {isLatency && (
          <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
            <path d="M0,25 L10,30 L20,15 L30,25 L40,10 L50,35 L60,15 L70,25 L80,20 L90,30 L100,20" fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M0,25 L10,30 L20,15 L30,25 L40,10 L50,35 L60,15 L70,25 L80,20 L90,30 L100,20 L100,40 L0,40 Z" fill="url(#grad-latency)" opacity="0.1" />
            <defs>
              <linearGradient id="grad-latency" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#000000" stopOpacity="1" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        )}
        {!isNodes && !isLatency && (
          <div className="flex items-end h-full w-full gap-[2px]">
            {[30, 40, 20, 50, 40, 70, 50, 90, 60, 80, 100, 70, 90].map((h, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-black/10 to-black/30 rounded-[1px]" style={{ height: `${h}%` }} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
