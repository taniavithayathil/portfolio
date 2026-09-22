import React from 'react';
import { cn } from '@/lib/utils';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
type HeadingSize = 'display' | 'title' | 'section' | 'subheading' | 'sm';

interface DisplayHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  size?: HeadingSize;
  altFont?: boolean;
  italic?: boolean;
  className?: string;
  children: React.ReactNode;
}

const sizeStyles: Record<HeadingSize, string> = {
  display: 'text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight leading-[0.95]',
  title: 'text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-[1.05]',
  section: 'text-2xl sm:text-3xl md:text-4xl font-normal tracking-normal leading-snug',
  subheading: 'text-xl sm:text-2xl font-normal leading-relaxed',
  sm: 'text-lg sm:text-xl font-normal leading-normal',
};

export const DisplayHeading: React.FC<DisplayHeadingProps> = ({
  as: Component = 'h1',
  size = 'title',
  altFont = false,
  italic = false,
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={cn(
        altFont ? 'font-display-alt' : 'font-display',
        'text-espresso antialiased',
        italic && 'italic',
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
