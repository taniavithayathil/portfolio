import React from 'react';
import { cn } from '@/lib/utils';

interface EditorialStatementProps extends React.HTMLAttributes<HTMLParagraphElement> {
  italic?: boolean;
  accent?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const EditorialStatement: React.FC<EditorialStatementProps> = ({
  italic = true,
  accent = false,
  className,
  children,
  ...props
}) => {
  return (
    <p
      className={cn(
        'font-display text-2xl sm:text-3xl md:text-4xl font-normal leading-relaxed tracking-tight',
        italic && 'italic',
        accent ? 'text-burgundy' : 'text-espresso',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};
