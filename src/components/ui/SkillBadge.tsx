import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  index?: number;
}

export function SkillBadge({ name, index = 0 }: SkillBadgeProps) {
  return (
    <motion.span
      className="inline-flex items-center px-4 py-2 rounded-xl bg-surface border border-border text-sm font-medium text-text-secondary hover:text-text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 cursor-default"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
    >
      {name}
    </motion.span>
  );
}
