import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export function Card({ children, className = '', hover = true, glass: isGlass = false, ...rest }: CardProps) {
  return (
    <motion.div
      className={`rounded-2xl border border-border p-6 md:p-8 transition-colors duration-200 ${
        isGlass ? 'glass' : 'bg-surface'
      } ${hover ? 'hover:border-border-light' : ''} ${className}`}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.2 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
