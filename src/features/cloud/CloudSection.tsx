import React from 'react';
import { CloudNode } from './components/CloudNode';
import { DashboardCard } from './components/DashboardCard';
import { StatCard } from './components/StatCard';

export function CloudSection() {
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
          <div className="absolute top-1/2 left-[20%] right-[20%] h-px bg-border -translate-y-1/2" />
          <div className="absolute top-[20%] bottom-[20%] left-1/2 w-px bg-border -translate-x-1/2" />
          
          <CloudNode label="AWS" position="top-1/2 left-[20%]" />
          <CloudNode label="Azure" position="top-[20%] left-1/2" />
          <CloudNode label={<>Google<br/>Cloud</>} position="top-1/2 left-[80%]" />
          <CloudNode label="Kubernetes" position="top-[80%] left-1/2" />
          
          <DashboardCard />
        </div>

        <dl className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard title="Global Nodes" value="245+" />
          <StatCard title="P99 Latency" value="12ms" />
          <StatCard title="Uptime SLA" value="99.999%" />
        </dl>
      </div>
    </section>
  );
}
