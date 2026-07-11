import { motion } from 'framer-motion';
import { FiBriefcase, FiBookOpen } from 'react-icons/fi';
import { SectionHeader } from '@/components/ui';
import { TIMELINE_ITEMS } from '@/constants';

const typeMeta = {
  work: { icon: <FiBriefcase className="w-4 h-4" />, color: 'bg-primary/10 text-primary border-primary/20' },
  education: { icon: <FiBookOpen className="w-4 h-4" />, color: 'bg-purple-500/10 text-purple-500 border-purple-500/20' },
  certification: { icon: <FiBookOpen className="w-4 h-4" />, color: 'bg-success/10 text-success border-success/20' },
};

export function TimelineSection() {
  return (
    <section id="timeline" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Timeline"
          title="My Journey"
          description="The path that shaped my career in software engineering."
        />

        <div className="max-w-3xl mx-auto">
          {TIMELINE_ITEMS.map((item, index) => {
            const meta = typeMeta[item.type];
            return (
              <motion.div
                key={item.id}
                className="relative pl-12 pb-10 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Line */}
                {index < TIMELINE_ITEMS.length - 1 && (
                  <div className="absolute left-[15px] top-10 bottom-0 w-[2px] bg-border group-hover:bg-primary/30 transition-colors" />
                )}

                {/* Icon */}
                <div
                  className={`absolute left-0 top-1 w-8 h-8 rounded-full border flex items-center justify-center ${meta.color}`}
                >
                  {meta.icon}
                </div>

                {/* Content */}
                <div className="pb-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="text-lg font-bold text-text-primary">{item.title}</h3>
                    <span className="text-sm text-text-muted font-medium">{item.period}</span>
                  </div>
                  <p className="text-sm text-primary font-medium mb-1">{item.organization}</p>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
