import { motion } from 'framer-motion';
import type { Experience } from '@/types';
import { Badge } from './Badge';

interface TimelineItemProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

export function TimelineItem({ experience, index, isLast }: TimelineItemProps) {
  return (
    <motion.div
      className="relative pl-12 pb-12 group"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {/* Line */}
      {!isLast && (
        <div className="absolute left-[11px] top-12 bottom-0 w-[2px] bg-border group-hover:bg-primary/30 transition-colors" />
      )}

      {/* Dot */}
      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-border bg-surface flex items-center justify-center group-hover:border-primary transition-colors">
        <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="glass rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
          <div>
            <h3 className="text-lg font-bold text-text-primary">{experience.role}</h3>
            <p className="text-primary font-medium">{experience.company}</p>
          </div>
          <span className="text-sm text-text-muted whitespace-nowrap font-medium">
            {experience.period}
          </span>
        </div>

        <p className="text-text-secondary text-sm leading-relaxed mb-4">
          {experience.description}
        </p>

        {experience.highlights.length > 0 && (
          <ul className="space-y-1.5 mb-4">
            {experience.highlights.map((highlight, i) => (
              <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <Badge key={tech} variant="primary">{tech}</Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
