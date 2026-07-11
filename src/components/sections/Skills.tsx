import { motion } from 'framer-motion';
import { FiServer, FiLayout, FiDatabase, FiCloud, FiTool } from 'react-icons/fi';
import { SectionHeader, SkillBadge, Card } from '@/components/ui';
import { SKILL_GROUPS } from '@/constants';
import type { SkillCategory } from '@/types';

const categoryMeta: Record<SkillCategory, { icon: React.ReactNode; color: string }> = {
  backend: {
    icon: <FiServer className="w-5 h-5" />,
    color: 'from-blue-500/20 to-blue-600/10',
  },
  frontend: {
    icon: <FiLayout className="w-5 h-5" />,
    color: 'from-purple-500/20 to-purple-600/10',
  },
  database: {
    icon: <FiDatabase className="w-5 h-5" />,
    color: 'from-emerald-500/20 to-emerald-600/10',
  },
  cloud: {
    icon: <FiCloud className="w-5 h-5" />,
    color: 'from-orange-500/20 to-orange-600/10',
  },
  tools: {
    icon: <FiTool className="w-5 h-5" />,
    color: 'from-pink-500/20 to-pink-600/10',
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Skills"
          title="Technologies I Work With"
          description="A comprehensive overview of the tools, languages, and frameworks I use to build modern applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, groupIndex) => {
            const meta = categoryMeta[group.category];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: groupIndex * 0.1 }}
              >
                <Card className="h-full">
                  {/* Header with gradient */}
                  <div className={`flex items-center gap-3 mb-5 p-3 rounded-xl bg-gradient-to-r ${meta.color}`}>
                    <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-primary">
                      {meta.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-text-primary">{group.label}</h3>
                      <p className="text-xs text-text-muted">{group.skills.length} technologies</p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, i) => (
                      <SkillBadge key={skill} name={skill} index={i} />
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
