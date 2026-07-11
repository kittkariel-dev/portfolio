import { motion } from 'framer-motion';
import { FiHome } from 'react-icons/fi';
import { Button } from '@/components/ui';

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-8xl font-extrabold gradient-text mb-4">404</p>
        </motion.div>
        <motion.h1
          className="text-2xl font-bold text-text-primary mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Page Not Found
        </motion.h1>
        <motion.p
          className="text-text-secondary mb-8 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Button href="/">
            <FiHome className="w-4 h-4" />
            Back to Home
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
