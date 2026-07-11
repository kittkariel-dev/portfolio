import { motion } from 'framer-motion';
import { FiGithub, FiStar, FiUsers, FiFolder, FiGitCommit } from 'react-icons/fi';
import { SectionHeader, Card } from '@/components/ui';
import { GITHUB_STATS } from '@/constants';

const stats = [
  { icon: <FiFolder className="w-5 h-5" />, label: 'Repositories', value: GITHUB_STATS.totalRepos },
  { icon: <FiStar className="w-5 h-5" />, label: 'Stars', value: GITHUB_STATS.totalStars },
  { icon: <FiUsers className="w-5 h-5" />, label: 'Followers', value: GITHUB_STATS.followers },
  { icon: <FiGitCommit className="w-5 h-5" />, label: 'Contributions', value: GITHUB_STATS.contributions },
];

export function GitHub() {
  return (
    <section id="github" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="GitHub"
          title="Open Source Contributions"
          description="My activity and contributions in the open-source community."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="text-center" hover={false}>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-text-primary">{stat.value}</div>
                  <div className="text-sm text-text-muted mt-1">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full">
              <h3 className="font-semibold text-text-primary mb-6">Most Used Languages</h3>
              <div className="space-y-4">
                {GITHUB_STATS.topLanguages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-text-secondary">{lang.name}</span>
                      <span className="text-sm font-medium text-text-primary">{lang.percentage}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-surface-light overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: lang.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <a
                href={`https://github.com/${GITHUB_STATS.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-primary hover:text-primary-light transition-colors"
              >
                <FiGithub className="w-4 h-4" />
                View GitHub Profile
              </a>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
