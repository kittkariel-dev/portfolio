import { motion } from 'framer-motion';
import { FiCode, FiServer, FiCpu, FiBookOpen } from 'react-icons/fi';
import { SectionHeader, Card } from '@/components/ui';
import { useInView } from '@/hooks';

const highlights = [
  {
    icon: <FiCode className="w-6 h-6" />,
    title: 'Clean Code',
    description: 'I believe in writing clean, maintainable, and well-documented code that stands the test of time.',
  },
  {
    icon: <FiServer className="w-6 h-6" />,
    title: 'Scalable Architecture',
    description: 'Designing systems that scale gracefully from hundreds to millions of users using proven patterns.',
  },
  {
    icon: <FiCpu className="w-6 h-6" />,
    title: 'Problem Solving',
    description: 'Breaking down complex problems into elegant, efficient solutions is what drives me every day.',
  },
  {
    icon: <FiBookOpen className="w-6 h-6" />,
    title: 'Continuous Learning',
    description: 'Always exploring new technologies and best practices to stay at the cutting edge of software engineering.',
  },
];

export function About() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="About Me"
          title="Passionate About Building Great Software"
          description="I'm a software engineer who loves turning complex problems into simple, beautiful, and intuitive solutions."
        />

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Summary paragraph */}
        <motion.div
          className="mt-16 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-text-secondary leading-relaxed text-lg">
            With a strong foundation in <span className="text-text-primary font-medium">backend development</span> and
            a keen eye for <span className="text-text-primary font-medium">frontend excellence</span>,
            I specialize in building full-stack applications using{' '}
            <span className="text-primary font-medium">.NET</span>,{' '}
            <span className="text-primary font-medium">React</span>, and{' '}
            <span className="text-primary font-medium">modern cloud technologies</span>.
            My approach combines clean architecture principles with pragmatic problem-solving
            to deliver software that is both robust and maintainable.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
