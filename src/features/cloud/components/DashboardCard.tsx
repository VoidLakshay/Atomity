"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { dashboardVariants } from '../animations';
import { Server, Activity, ShieldCheck } from 'lucide-react';
import { LiquidMetalCard } from '../../../components/ui/liquid-metal-card';

export function DashboardCard() {
  return (
    <motion.div variants={dashboardVariants} className="absolute top-1/2 left-1/2 w-[360px] sm:w-[400px] -translate-x-1/2 -translate-y-1/2 z-20">
      <LiquidMetalCard width="100%" height="100%" className="w-full">
        <div className="flex flex-col gap-6 p-6 sm:p-7 w-full h-full">
          <div className="relative z-10 flex items-center justify-between">
        <span className="text-base font-bold text-black tracking-tight">Cloud Health</span>
        <div className="flex items-center gap-2 bg-black/5 px-2.5 py-1 rounded-full border border-black/10">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)] animate-pulse" />
          <span className="text-[10px] font-bold text-black/70 uppercase tracking-widest">Healthy</span>
        </div>
      </div>
      
      <div className="relative z-10 flex flex-col gap-5 mt-2">
        {/* Resources */}
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 border border-white/30 backdrop-blur-md shadow-sm">
            <Server size={18} className="text-black/80" />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex justify-between items-center text-sm"><span className="text-black/70 font-medium tracking-wide">Resources</span><span className="text-black font-semibold">245 <span className="text-black/40 font-normal text-xs">/ 300</span></span></div>
            <div className="h-2 w-full bg-black/10 rounded-full shadow-inner"><div className="h-full w-[85%] bg-white/50 backdrop-blur-md border border-white/60 shadow-sm rounded-full" /></div>
          </div>
        </div>
        
        {/* Latency */}
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 border border-white/30 backdrop-blur-md shadow-sm">
            <Activity size={18} className="text-black/80" />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex justify-between items-center text-sm"><span className="text-black/70 font-medium tracking-wide">P99 Latency</span><span className="text-black font-semibold">12ms <span className="text-black/40 font-normal text-xs">/ 50ms</span></span></div>
            <div className="h-2 w-full bg-black/10 rounded-full shadow-inner"><div className="h-full w-[30%] bg-white/50 backdrop-blur-md border border-white/60 shadow-sm rounded-full" /></div>
          </div>
        </div>
        
        {/* Availability */}
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 border border-white/30 backdrop-blur-md shadow-sm">
            <ShieldCheck size={18} className="text-black/80" />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex justify-between items-center text-sm"><span className="text-black/70 font-medium tracking-wide">Availability</span><span className="text-black font-semibold">99.9% <span className="text-black/40 font-normal text-xs">/ 100%</span></span></div>
            <div className="h-2 w-full bg-black/10 rounded-full shadow-inner"><div className="h-full w-[99%] bg-white/50 backdrop-blur-md border border-white/60 shadow-sm rounded-full" /></div>
          </div>
        </div>
        </div>
        </div>
      </LiquidMetalCard>
    </motion.div>
  );
}
