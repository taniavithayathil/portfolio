import React from 'react';
import { cn } from '@/lib/utils';

type MetadataVariant = 'default' | 'accent' | 'muted' | 'rose' | 'olive';

interface MetadataTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  as?: 'span' | 'p' | 'div' | 'time';
  variant?: MetadataVariant;
  uppercase?: boolean;
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<MetadataVariant, string> = {
  default: 'text-espresso',
  accent: 'text-burgundy',
  muted: 'text-espresso-muted',
  rose: 'text-rose',
  olive: 'text-olive',
};

export const MetadataText: React.FC<MetadataTextProps> = ({
  as: Component = 'span',
  variant = 'muted',
  uppercase = false,
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={cn(
        'font-mono text-xs sm:text-sm tracking-wider',
        uppercase && 'uppercase tracking-widest',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
