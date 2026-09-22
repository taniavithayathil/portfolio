'use client';

import React, { useState } from 'react';
import { ExperienceTimeline } from './ExperienceTimeline';
import { SkillsField } from './SkillsField';
import { ExperienceItem } from './data';

export const ExperienceSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<ExperienceItem | null>(null);

  return (
    <section
      id="experience"
      className="relative w-full min-h-[100svh] flex items-center justify-center py-28 sm:py-36 lg:py-44 bg-[#F6F1E8] text-[#241817] px-6 sm:px-12 md:px-16 lg:px-20 overflow-hidden"
    >
      {/* Centred Content Container */}
      <div className="w-full max-w-[1360px] mx-auto">
        {/* Balanced Two-Column Editorial Grid on Desktop (lg:grid-cols-2) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 lg:gap-24 xl:gap-32 items-start">
          {/* LEFT COLUMN: Experience */}
          <div className="w-full">
            {/* Experience Section Heading with Matching Editorial Rule */}
            <div className="mb-14 sm:mb-16 lg:mb-20">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-normal tracking-tight text-espresso"
                style={{
                  fontFamily: 'var(--font-bodoni-moda), "Bodoni MT", Didot, serif',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.15,
                  color: '#241817',
                }}
              >
                Experience
              </h2>
              {/* Matching Horizontal Rule */}
              <div className="w-full h-[1px] bg-[rgba(36,24,23,0.12)] mt-6 sm:mt-8" />
            </div>

            {/* Experience Timeline */}
            <ExperienceTimeline
              activeId={activeItem?.id || null}
              onHover={(item) => setActiveItem(item)}
            />
          </div>

          {/* RIGHT COLUMN: Skills */}
          <div className="w-full">
            {/* Skills Section Heading with Matching Editorial Rule */}
            <div className="mb-14 sm:mb-16 lg:mb-20">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-normal tracking-tight text-espresso"
                style={{
                  fontFamily: 'var(--font-bodoni-moda), "Bodoni MT", Didot, serif',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.15,
                  color: '#241817',
                }}
              >
                Skills
              </h2>
              {/* Matching Horizontal Rule */}
              <div className="w-full h-[1px] bg-[rgba(36,24,23,0.12)] mt-6 sm:mt-8" />
            </div>

            {/* Floating Typographic Skills Field */}
            <SkillsField activeTags={activeItem ? activeItem.tags : null} />
          </div>
        </div>
      </div>
    </section>
  );
};