import React from 'react';
import { cn } from '@/lib/utils';

interface BackgroundCanvasProps {
  children: React.ReactNode;
  className?: string;
  withGrain?: boolean;
}

export const BackgroundCanvas: React.FC<BackgroundCanvasProps> = ({
  children,
  className,
  withGrain = false,
}) => {
  return (
    <div
      className={cn(
        'relative min-h-screen w-full bg-canvas text-espresso selection:bg-rose/40 selection:text-espresso',
        className
      )}
    >
      {/* Subtle organic editorial grain overlay if enabled */}
      {withGrain && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-50 opacity-[0.035] mix-blend-multiply bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      )}

      {/* Main Continuous Canvas Container */}
      <div className="relative z-10 w-full flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  );
};
