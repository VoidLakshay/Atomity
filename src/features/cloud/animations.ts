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
    transition: { duration: 0.8, ease: 'easeInOut', delay: 0.3 }
  }
};

export const dashboardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { type: 'spring', stiffness: 200, damping: 20, delay: 0.8 }
  }
};

export const nodeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (custom: number) => ({
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.4, ease: 'easeOut', delay: 1.0 + (custom * 0.1) }
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
