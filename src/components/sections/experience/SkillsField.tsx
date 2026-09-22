'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, SkillItem } from './data';

interface SkillsFieldProps {
  activeTags: string[] | null;
}

export const SkillsField: React.FC<SkillsFieldProps> = ({ activeTags }) => {
  const isHighlighted = (item: SkillItem) => {
    if (!activeTags) return false;
    return activeTags.includes(item.id);
  };

  const isDimmed = (item: SkillItem) => {
    if (!activeTags) return false;
    return !activeTags.includes(item.id);
  };

  return (
    <div className="relative w-full flex flex-col justify-start pt-2">
      {/* Floating Typographic Field — fills the full width of its column, no independent cap */}
      <div className="relative flex flex-wrap items-baseline gap-x-8 gap-y-7 sm:gap-x-10 sm:gap-y-9 lg:gap-x-11 lg:gap-y-10 w-full">
        {SKILLS.map((skill) => {
          const highlighted = isHighlighted(skill);
          const dimmed = isDimmed(skill);

          // Dynamic typographic sizing and styling
          let sizeClass = 'text-lg sm:text-xl';
          let fontStyle = 'var(--font-dm-sans), sans-serif';
          let fontClass = 'font-normal';

          if (skill.scale === 'large') {
            sizeClass = 'text-2xl sm:text-3xl md:text-[2.25rem]';
          } else if (skill.scale === 'medium') {
            sizeClass = 'text-xl sm:text-2xl';
          } else {
            sizeClass = 'text-base sm:text-lg';
          }

          if (skill.fontStyle === 'serif-italic') {
            fontStyle = 'var(--font-cormorant-garamond), Georgia, serif';
            fontClass = 'italic font-normal';
          } else if (skill.fontStyle === 'serif') {
            fontStyle = 'var(--font-bodoni-moda), Didot, serif';
            fontClass = 'font-normal';
          } else if (skill.fontStyle === 'mono') {
            fontStyle = 'var(--font-dm-mono), monospace';
            fontClass = 'font-mono font-medium text-sm sm:text-base';
          } else {
            fontClass = 'font-normal';
          }

          return (
            <motion.span
              key={skill.id}
              layout
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={`inline-block transition-all duration-500 select-none cursor-default ${sizeClass} ${fontClass}`}
              style={{
                fontFamily: fontStyle,
                color: highlighted
                  ? '#5A0D1A'
                  : '#241817',
                opacity: dimmed ? 0.22 : highlighted ? 1 : skill.scale === 'large' ? 0.95 : 0.72,
                transform: highlighted ? 'translateY(-2px)' : 'translateY(0px)',
              }}
            >
              {skill.name}
              {highlighted && (
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="block h-[1.5px] bg-[#5A0D1A]/60 mt-0.5 origin-left"
                />
              )}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
};