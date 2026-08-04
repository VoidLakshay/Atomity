"use client";

import React from 'react';
import { CloudNode } from './components/CloudNode';
import { DashboardCard } from './components/DashboardCard';
import { StatCard } from './components/StatCard';
import { useCloudMetrics } from '../../hooks/useCloudMetrics';

export function CloudSection() {
  const { data, isLoading, isError } = useCloudMetrics();

  return (
    <section className="w-full bg-background text-foreground py-16 sm:py-20 font-['Geist',_sans-serif]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-lg">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground leading-tight">
            Multi-Cloud Control Plane
          </h2>
          <p className="mt-3 text-sm text-muted leading-relaxed">
            Manage AWS, Azure and Google Cloud infrastructure from one platform.
          </p>
        </div>

        <div className="relative w-full h-[400px] border border-border rounded-lg bg-background overflow-hidden mb-8">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path 
              d="M 50 50 L 20 50 M 50 50 L 50 20 M 50 50 L 80 50 M 50 50 L 50 80" 
              stroke="var(--color-border)" 
              strokeWidth="1.5" 
              fill="none" 
              vectorEffect="non-scaling-stroke" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
          </svg>
          
          <CloudNode label="AWS" position="top-1/2 left-[20%]" />
          <CloudNode label="Azure" position="top-[20%] left-1/2" />
          <CloudNode label={<>Google<br/>Cloud</>} position="top-1/2 left-[80%]" />
          <CloudNode label="Kubernetes" position="top-[80%] left-1/2" />
          
          <DashboardCard />
        </div>

        <dl className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {isLoading ? (
            <div className="col-span-1 md:col-span-3 flex items-center justify-center p-8 rounded-lg border border-border bg-background shadow-sm">
              <span className="text-sm font-medium text-muted">Loading metrics...</span>
            </div>
          ) : isError ? (
            <div className="col-span-1 md:col-span-3 flex items-center justify-center p-8 rounded-lg border border-border bg-background shadow-sm">
              <span className="text-sm font-medium text-red-500">Failed to load metrics.</span>
            </div>
          ) : data ? (
            <>
              <StatCard title="Global Nodes" value={data.resources} />
              <StatCard title="P99 Latency" value={data.latency} />
              <StatCard title="Uptime SLA" value={data.availability} />
            </>
          ) : null}
        </dl>
      </div>
    </section>
  );
}
