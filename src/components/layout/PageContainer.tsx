import React from 'react';
import { cn } from '@/lib/utils';

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'wide' | 'narrow' | 'full';
  className?: string;
  children: React.ReactNode;
}

const sizeStyles = {
  default: 'max-w-7xl',
  wide: 'max-w-screen-2xl',
  narrow: 'max-w-4xl',
  full: 'max-w-full',
};

export const PageContainer: React.FC<PageContainerProps> = ({
  size = 'default',
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16',
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
