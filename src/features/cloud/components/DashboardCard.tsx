"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { dashboardVariants } from '../animations';

export function DashboardCard() {
  return (
    <motion.div variants={dashboardVariants} className="absolute top-1/2 left-1/2 w-48 sm:w-56 p-4 rounded-xl border border-border-strong bg-background flex flex-col gap-3 -translate-x-1/2 -translate-y-1/2 z-20 shadow-lg">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-foreground">Cloud Health</span>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
          <span className="text-[10px] font-medium text-[#10b981]">Healthy</span>
        </div>
      </div>
      
      <div className="flex flex-col gap-2.5 mt-1">
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between text-[10px] leading-none"><span className="text-muted">Resources</span><span className="text-foreground font-medium">245</span></div>
          <div className="h-1 w-full bg-border-subtle rounded-full"><div className="h-full w-[85%] bg-foreground rounded-full" /></div>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between text-[10px] leading-none"><span className="text-muted">Latency</span><span className="text-foreground font-medium">12ms</span></div>
          <div className="h-1 w-full bg-border-subtle rounded-full"><div className="h-full w-[30%] bg-foreground rounded-full" /></div>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between text-[10px] leading-none"><span className="text-muted">Availability</span><span className="text-foreground font-medium">99.9%</span></div>
          <div className="h-1 w-full bg-border-subtle rounded-full"><div className="h-full w-[99%] bg-foreground rounded-full" /></div>
        </div>
      </div>
    </motion.div>
  );
}
