import { forwardRef, type TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, className = '', ...rest }, ref) => {
    return (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-text-primary">{label}</label>
        <textarea
          ref={ref}
          rows={5}
          className={`w-full px-4 py-3 rounded-xl bg-surface border text-text-primary placeholder:text-text-muted transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none ${
            error ? 'border-red-500' : 'border-border hover:border-border-light'
          } ${className}`}
          {...rest}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';
