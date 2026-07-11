import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { SOCIAL_LINKS } from '@/constants';

const iconMap: Record<string, React.ReactNode> = {
  FaGithub: <FiGithub className="w-5 h-5" />,
  FaLinkedin: <FiLinkedin className="w-5 h-5" />,
  FaEnvelope: <FiMail className="w-5 h-5" />,
};

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-lg font-bold gradient-text">
              Portfolio
            </a>
            <p className="text-sm text-text-muted mt-1">
              &copy; {new Date().getFullYear()} Software Engineer. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl text-text-secondary hover:text-primary hover:bg-primary/10 transition-all duration-200"
                aria-label={link.label}
              >
                {iconMap[link.icon]}
              </a>
            ))}
          </div>

          {/* Made with love */}
          <p className="text-sm text-text-muted flex items-center gap-1">
            Built with <FiHeart className="w-4 h-4 text-red-500" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
