import { motion } from 'framer-motion';
import {
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  // GitHub,
  // Certificates,
  TimelineSection,
  Contact,
} from '@/components/sections';

export function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      {/* <GitHub /> */}
      {/* <Certificates /> */}
      <TimelineSection />
      <Contact />
    </motion.div>
  );
}
