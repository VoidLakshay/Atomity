import { Variants } from 'framer-motion';

export const heroVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export const svgPathVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1, 
    transition: { duration: 1, ease: 'easeInOut', delay: 1.0 }
  }
};

export const dashboardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { type: 'spring', stiffness: 200, damping: 20, delay: 1.6 }
  }
};

export const nodeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5, top: "50%", left: "50%" },
  visible: (custom: { top: string, left: string, delay: number }) => ({
    opacity: 1, 
    scale: 1, 
    top: custom.top,
    left: custom.left,
    transition: { 
      opacity: { duration: 0.4, delay: 0.2 + custom.delay },
      scale: { type: "spring", stiffness: 200, damping: 15, delay: 0.2 + custom.delay },
      top: { type: "spring", stiffness: 100, damping: 18, delay: 1.0 },
      left: { type: "spring", stiffness: 100, damping: 18, delay: 1.0 }
    }
  })
};

export const kpiContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1.4,
      staggerChildren: 0.1
    }
  }
};

export const kpiItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
};
