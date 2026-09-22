'use client';

import React from 'react';

export const HeroNavigation: React.FC = () => {
  return (
    <header className="w-full pt-6 sm:pt-8 pb-4 relative z-30">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16">
        <div
          className="flex items-center justify-between pb-5"
          style={{ borderBottom: '1px solid rgba(36, 24, 23, 0.12)' }}
        >
          {/* Brand & Portfolio Meta */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="flex flex-col group cursor-pointer"
              style={{ textDecoration: 'none', color: '#241817' }}
              aria-label="Tania Vithayathil Home"
            >
              <span
                className="font-display tracking-tight transition-colors duration-300 group-hover:text-burgundy"
                style={{
                  fontFamily: 'var(--font-bodoni-moda), "Bodoni MT", Didot, serif',
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                  color: '#241817',
                }}
              >
                Tania Vithayathil
              </span>
              <span
                className="font-mono text-[10px] tracking-widest uppercase mt-0.5"
                style={{
                  fontFamily: 'var(--font-dm-mono), "DM Mono", monospace',
                  color: '#5C4B49',
                  letterSpacing: '0.18em',
                }}
              >
                Portfolio / 2026
              </span>
            </a>
          </div>

          {/* Center Section Indicator */}
          <div className="hidden sm:flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: '#5A0D1A' }}
            />
            <span
              className="font-mono text-[11px] tracking-widest uppercase"
              style={{
                fontFamily: 'var(--font-dm-mono), "DM Mono", monospace',
                color: '#5C4B49',
                letterSpacing: '0.15em',
              }}
            >
              01 / 08 &mdash; Index
            </span>
          </div>

          {/* Right Navigation Links */}
          <nav className="flex items-center gap-6 sm:gap-10" aria-label="Main Navigation">
            <a
              href="#work"
              className="group relative py-1 text-xs sm:text-sm tracking-wide transition-colors duration-300"
              style={{
                fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
                color: '#5C4B49',
                textDecoration: 'none',
              }}
            >
              <span className="group-hover:text-[#5A0D1A] transition-colors duration-300">Work</span>
              <span
                className="absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: '#5A0D1A' }}
              />
            </a>
            <a
              href="#about"
              className="group relative py-1 text-xs sm:text-sm tracking-wide transition-colors duration-300"
              style={{
                fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
                color: '#5C4B49',
                textDecoration: 'none',
              }}
            >
              <span className="group-hover:text-[#5A0D1A] transition-colors duration-300">About</span>
              <span
                className="absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: '#5A0D1A' }}
              />
            </a>
            <a
              href="#contact"
              className="group relative py-1 text-xs sm:text-sm tracking-wide font-medium transition-colors duration-300"
              style={{
                fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
                color: '#241817',
                textDecoration: 'none',
              }}
            >
              <span className="group-hover:text-[#5A0D1A] transition-colors duration-300">Contact</span>
              <span
                className="absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: '#5A0D1A' }}
              />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
