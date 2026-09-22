import React from 'react';
import { cn } from '@/lib/utils';

type BodySize = 'lg' | 'base' | 'sm' | 'xs';

interface BodyTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: BodySize;
  muted?: boolean;
  light?: boolean;
  className?: string;
  children: React.ReactNode;
}

const sizeStyles: Record<BodySize, string> = {
  lg: 'text-lg sm:text-xl leading-relaxed',
  base: 'text-base sm:text-lg leading-relaxed',
  sm: 'text-sm sm:text-base leading-normal',
  xs: 'text-xs sm:text-sm leading-normal',
};

export const BodyText: React.FC<BodyTextProps> = ({
  size = 'base',
  muted = false,
  light = false,
  className,
  children,
  ...props
}) => {
  return (
    <p
      className={cn(
        'font-body font-normal',
        light ? 'text-espresso-light' : muted ? 'text-espresso-muted' : 'text-espresso',
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};
