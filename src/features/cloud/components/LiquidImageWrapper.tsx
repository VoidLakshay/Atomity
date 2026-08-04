"use client";

import React, { useEffect, useState } from 'react';

// Client-side wrapper to dynamically load Framer ES modules
// without relying on Next.js urlImports, which currently crashes Turbopack.
export function LiquidImageWrapper(props: any) {
  const [FramerComponent, setFramerComponent] = useState<any>(null);

  useEffect(() => {
    // Dynamic import to fetch the module directly in the browser
    import(/* webpackIgnore: true */ "https://framer.com/m/LiquidImage-DMcO.js@BzHG0pe3fwejvzhuvfLr")
      .then((module) => {
        setFramerComponent(() => module.default);
      })
      .catch((err) => {
        console.error("Failed to load Framer LiquidImage component:", err);
      });
  }, []);

  if (!FramerComponent) {
    // Return an invisible placeholder while it loads
    return <div style={props.style} className={props.className} />;
  }

  return <FramerComponent {...props} />;
}
