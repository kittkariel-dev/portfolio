import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import { SectionHeader, Card } from '@/components/ui';
import { CERTIFICATES } from '@/constants';

export function Certificates() {
  return (
    <section id="certificates" className="py-24 md:py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Certificates"
          title="Professional Certifications"
          description="Continuous learning and professional development credentials."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATES.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
            >
              <Card className="h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-purple-600/20 text-primary flex items-center justify-center mb-4">
                  <FiAward className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-text-primary mb-1 flex-1">{cert.title}</h3>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <span className="text-sm text-text-secondary">{cert.issuer}</span>
                  <span className="text-xs text-text-muted">{cert.date}</span>
                </div>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-sm text-primary hover:text-primary-light transition-colors"
                  >
                    View <FiExternalLink className="w-3 h-3" />
                  </a>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
