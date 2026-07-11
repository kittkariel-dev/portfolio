import { forwardRef, type InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...rest }, ref) => {
    return (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-text-primary">{label}</label>
        <input
          ref={ref}
          className={`w-full px-4 py-3 rounded-xl bg-surface border text-text-primary placeholder:text-text-muted transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
            error ? 'border-red-500' : 'border-border hover:border-border-light'
          } ${className}`}
          {...rest}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
