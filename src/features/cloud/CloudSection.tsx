"use client";

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CloudNode } from './components/CloudNode';
import { DashboardCard } from './components/DashboardCard';
import { StatCard } from './components/StatCard';
import { useCloudMetrics } from '../../hooks/useCloudMetrics';
import { heroVariants, svgPathVariants, kpiContainerVariants } from './animations';
import { ShiningText } from '../../components/ui/shining-text';

const GlobeIcon = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>;
const ZapIcon = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const ShieldIcon = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;

export function CloudSection() {
  const { data, isLoading, isError } = useCloudMetrics();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section 
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative w-full bg-background text-foreground py-24 sm:py-32 font-['Geist',_sans-serif] overflow-hidden"
    >
      {/* Cloud Image Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/clouds.jpg")' }}
      />
      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/25 z-0" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 z-10">
        <motion.div variants={heroVariants} className="mb-20 max-w-5xl mx-auto text-center flex flex-col items-center">
          <ShiningText 
            text="Multi-Cloud Control Plane"
            className="font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] whitespace-nowrap"
          />
          <p className="font-mono mt-3 max-w-[650px] text-base sm:text-lg text-black/80 font-semibold leading-[1.6]">
            Monitor, orchestrate, and scale your cloud infrastructure across AWS, Azure, Google Cloud, and Kubernetes from a single intelligent platform.
          </p>
        </motion.div>

        <div className="relative w-full h-[550px] sm:h-[650px] rounded-2xl overflow-hidden mb-20 flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_0_12px_rgba(59,130,246,0.3)] z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path 
              variants={svgPathVariants}
              d="M 50 50 L 15 50 M 50 50 L 50 15 M 50 50 L 85 50 M 50 50 L 50 85" 
              stroke="#2563eb" 
              strokeOpacity="0.4"
              strokeWidth="2" 
              fill="none" 
              vectorEffect="non-scaling-stroke" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
            {!shouldReduceMotion && (
              <>
                <circle r="0.5" fill="#60a5fa" filter="drop-shadow(0 0 2px #60a5fa)">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M 50 50 L 15 50" />
                </circle>
                <circle r="0.5" fill="#60a5fa" filter="drop-shadow(0 0 2px #60a5fa)">
                  <animateMotion dur="4s" repeatCount="indefinite" path="M 50 50 L 50 15" />
                </circle>
                <circle r="0.5" fill="#60a5fa" filter="drop-shadow(0 0 2px #60a5fa)">
                  <animateMotion dur="3.5s" repeatCount="indefinite" path="M 50 50 L 85 50" />
                </circle>
                <circle r="0.5" fill="#60a5fa" filter="drop-shadow(0 0 2px #60a5fa)">
                  <animateMotion dur="4.5s" repeatCount="indefinite" path="M 50 50 L 50 85" />
                </circle>
              </>
            )}
          </svg>
          
          <CloudNode provider="aws" label="AWS" top="50%" left="15%" index={0} />
          <CloudNode provider="azure" label="Azure" top="15%" left="50%" index={1} />
          <CloudNode provider="gcp" label="Google Cloud" top="50%" left="85%" index={2} />
          <CloudNode provider="kubernetes" label="Kubernetes" top="85%" left="50%" index={3} />
          
          <DashboardCard />
        </div>

        <motion.dl variants={kpiContainerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {isLoading ? (
            <div className="col-span-1 md:col-span-3 flex items-center justify-center p-8 rounded-2xl border border-border bg-background shadow-sm">
              <span className="text-sm font-medium text-muted">Loading metrics...</span>
            </div>
          ) : isError ? (
            <div className="col-span-1 md:col-span-3 flex items-center justify-center p-8 rounded-2xl border border-border bg-background shadow-sm">
              <span className="text-sm font-medium text-red-500">Failed to load metrics.</span>
            </div>
          ) : data ? (
            <>
              <StatCard title="Global Nodes" value={data.resources} description="Distributed across 24+ regions worldwide." icon={GlobeIcon} />
              <StatCard title="P99 Latency" value={data.latency} description="Consistently lightning fast responses globally." icon={ZapIcon} />
              <StatCard title="Uptime SLA" value={data.availability} description="Financially backed guarantees for peace of mind." icon={ShieldIcon} />
            </>
          ) : null}
        </motion.dl>
      </div>
    </motion.section>
  );
}
