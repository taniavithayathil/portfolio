'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const ScrollIndicator: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const handleScrollClick = () => {
    window.scrollTo({
      top: window.innerHeight * 0.95,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={handleScrollClick}
      type="button"
      className="group flex flex-col items-start gap-1 cursor-pointer select-none"
      style={{
        background: 'transparent',
        border: 'none',
        outline: 'none',
        padding: 0,
        margin: 0,
        boxShadow: 'none',
      }}
      aria-label="Scroll downward"
    >
      <div className="flex items-center gap-2">
        <span
          className="text-[10px] tracking-widest uppercase transition-colors duration-300"
          style={{
            fontFamily: 'var(--font-dm-mono), "DM Mono", monospace',
            color: '#5C4B49',
            letterSpacing: '0.2em',
          }}
        >
          Scroll
        </span>
        <motion.span
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, 4, 0],
                }
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="inline-block text-xs transition-colors duration-300 group-hover:text-[#5A0D1A]"
          style={{
            fontFamily: 'var(--font-dm-mono), "DM Mono", monospace',
            color: '#5A0D1A',
          }}
        >
          &darr;
        </motion.span>
      </div>

      <span
        className="text-[9px] tracking-wider opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          fontFamily: 'var(--font-dm-mono), "DM Mono", monospace',
          color: '#8E7C7A',
          letterSpacing: '0.15em',
        }}
      >
        01 / 08
      </span>
    </button>
  );
};
