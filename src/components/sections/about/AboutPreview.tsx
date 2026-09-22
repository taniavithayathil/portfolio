'use client';

import React from 'react';
import Image from 'next/image';

export const AboutPreview: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-[100svh] flex items-center justify-center bg-[#F6F1E8] text-[#241817] px-6 sm:px-12 md:px-16 lg:px-20 py-16 sm:py-24"
    >
      <div className="w-full max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Editorial Portrait Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div
              className="relative w-full max-w-[360px] sm:max-w-[390px] aspect-[4/5] overflow-hidden"
              style={{
                backgroundColor: '#EDE4D5',
              }}
            >
              <Image
                src="/Picture.jpeg"
                alt="Tania Vithayathil"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 390px"
                className="object-cover object-center grayscale-[15%] contrast-[1.03] transition-all duration-700 hover:grayscale-0"
              />
            </div>
          </div>

          {/* RIGHT: Restrained Editorial About Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Understated Section Label */}
            <div className="mb-6 sm:mb-8 flex items-center gap-3">
              <span
                className="text-xs font-mono uppercase tracking-[0.25em]"
                style={{
                  fontFamily: 'var(--font-dm-mono), "DM Mono", monospace',
                  color: '#8E7C7A',
                  letterSpacing: '0.22em',
                }}
              >
                01 / About
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-rose/60" />
            </div>

            {/* Single Editorial Paragraph */}
            <div className="max-w-xl">
              <p
                className="text-2xl sm:text-3xl md:text-[2rem] lg:text-[2.15rem] font-light tracking-tight text-espresso"
                style={{
                  fontFamily: 'var(--font-cormorant-garamond), "Cormorant Garamond", Georgia, serif',
                  color: '#241817',
                  lineHeight: 1.45,
                  letterSpacing: '-0.015em',
                }}
              >
                I work with data, machine learning, and analytical systems, building practical software around complex technical problems. My work spans predictive modelling, anomaly detection, behavioural analysis, and data-driven decision support, with a focus on turning rigorous technical ideas into systems that are useful, understandable, and built to work beyond the notebook.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
