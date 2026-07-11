import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import type { Project } from '@/types';
import { Badge } from './Badge';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      className="group rounded-2xl border border-border bg-surface hover:border-border-light transition-all duration-300 overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {/* Project Image Area */}
      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_70%)]" />
        <div className="relative z-10 text-4xl font-bold gradient-text">{project.title.charAt(0)}</div>
        {project.featured && (
          <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-semibold bg-primary text-white">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="primary">{`+${project.technologies.length - 4}`}</Badge>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-border">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              <FiGithub className="w-4 h-4" />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              <FiExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          <a
            href={`/project/${project.id}`}
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-light transition-colors ml-auto"
          >
            Details
            <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
