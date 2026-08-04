import React from 'react';

type StatCardProps = {
  title: string;
  value: string;
};

export function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="rounded-lg border border-border bg-background p-5 shadow-sm">
      <dt className="text-[11px] font-medium text-muted uppercase tracking-wider">{title}</dt>
      <dd className="mt-1 text-2xl font-semibold tracking-tight text-foreground">{value}</dd>
    </div>
  );
}
