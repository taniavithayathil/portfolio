'use client';

import React from 'react';
import { EXPERIENCES, ExperienceItem } from './data';

interface ExperienceTimelineProps {
  activeId: string | null;
  onHover: (item: ExperienceItem | null) => void;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  activeId,
  onHover,
}) => {
  return (
    <div className="w-full flex flex-col">
      {/* Timeline Entries with Enhanced Vertical Breathing Room (~35% increase) */}
      <div className="flex flex-col space-y-40 sm:space-y-44 lg:space-y-48 xl:space-y-52">
        {EXPERIENCES.map((item, index) => {
          const isActive = activeId === item.id;

          return (
            <div
              key={item.id}
              onMouseEnter={() => onHover(item)}
              onMouseLeave={() => onHover(null)}
              className="group relative cursor-default transition-all duration-300"
            >
              {/* Divider rule between experience entries with balanced margins */}
              {index > 0 && (
                <div
                  className="w-full h-[1px] mb-14 sm:mb-16 lg:mb-20 transition-colors duration-500"
                  style={{
                    backgroundColor: isActive
                      ? 'rgba(90, 13, 26, 0.45)'
                      : 'rgba(36, 24, 23, 0.12)',
                  }}
                />
              )}

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-baseline">
                {/* Year / Period */}
                <div className="sm:col-span-3">
                  <span
                    className="text-sm sm:text-base font-mono font-medium tracking-widest block transition-colors duration-300"
                    style={{
                      fontFamily: 'var(--font-dm-mono), monospace',
                      color: isActive ? '#5A0D1A' : '#8E7C7A',
                    }}
                  >
                    {item.year}
                  </span>
                </div>

                {/* Main Content Area */}
                <div className="sm:col-span-9 flex flex-col space-y-4">
                  {/* Company & Role Header */}
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3
                      className="text-2xl sm:text-3xl lg:text-[2rem] font-normal tracking-tight transition-colors duration-300"
                      style={{
                        fontFamily: 'var(--font-bodoni-moda), "Bodoni MT", serif',
                        color: isActive ? '#5A0D1A' : '#241817',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {item.company}
                    </h3>

                    <span
                      className="text-xs sm:text-sm font-sans font-medium tracking-wide uppercase"
                      style={{
                        fontFamily: 'var(--font-dm-sans), sans-serif',
                        color: '#747849',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {item.role}
                    </span>
                  </div>

                  {/* Focus Sub-headline */}
                  <h4
                    className="text-base sm:text-lg font-normal italic"
                    style={{
                      fontFamily: 'var(--font-cormorant-garamond), Georgia, serif',
                      color: '#5C4B49',
                    }}
                  >
                    {item.focusTitle}
                  </h4>

                  {/* Body Description */}
                  <p
                    className="text-sm sm:text-base leading-relaxed max-w-xl pt-1 font-normal"
                    style={{
                      fontFamily: 'var(--font-dm-sans), sans-serif',
                      color: '#241817',
                      lineHeight: 1.75,
                      opacity: 0.9,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};