interface BadgeProps {
  children: string;
  variant?: 'default' | 'primary' | 'success';
}

const variantClasses = {
  default: 'bg-surface-light text-text-secondary border-border',
  primary: 'bg-primary/10 text-primary border-primary/20',
  success: 'bg-success/10 text-success border-success/20',
};

export function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-colors ${variantClasses[variant]}`}
    >
      {children}
    </span>
  );
}
