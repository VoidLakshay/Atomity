"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { kpiItemVariants } from '../animations';

type StatCardProps = {
  title: string;
  value: string;
};

export function StatCard({ title, value }: StatCardProps) {
  return (
    <motion.div variants={kpiItemVariants} className="rounded-lg border border-border bg-background p-5 shadow-sm">
      <dt className="text-[11px] font-medium text-muted uppercase tracking-wider">{title}</dt>
      <dd className="mt-1 text-2xl font-semibold tracking-tight text-foreground">{value}</dd>
    </motion.div>
  );
}
