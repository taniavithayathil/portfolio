'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const GREETINGS = [
  'Olá',
  'Bonjour',
  'Ciao',
  'Hallo',
  'Hola',
  'Namaste',
  'Hello',
];

interface IntroSequenceProps {
  onComplete?: () => void;
}

export const IntroSequence: React.FC<IntroSequenceProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const svgPathRef = useRef<SVGPathElement>(null);
  const [currentGreeting, setCurrentGreeting] = useState(GREETINGS[0]);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check if intro has already run in this session or prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Lock body scroll during intro
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    if (prefersReducedMotion) {
      setCurrentGreeting('Hello');
      const timer = setTimeout(() => {
        if (containerRef.current) {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
              document.documentElement.style.overflow = '';
              document.body.style.overflow = '';
              setIsDone(true);
              onComplete?.();
            },
          });
        }
      }, 300);
      return () => clearTimeout(timer);
    }

    const container = containerRef.current;
    const textEl = textRef.current;
    const pathEl = svgPathRef.current;
    if (!container || !textEl) return;

    // Master GSAP Timeline
    const tl = gsap.timeline({
      onComplete: () => {
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        setIsDone(true);
        onComplete?.();
      },
    });

    // Snappy, rhythmic greeting sequence (~20% faster, catchy & fluid)
    GREETINGS.forEach((greeting, i) => {
      const isLast = i === GREETINGS.length - 1;
      const duration = isLast ? 0.22 : 0.16;

      tl.to({}, {
        duration: 0.005,
        onStart: () => {
          setCurrentGreeting(greeting);
        },
      });

      tl.fromTo(
        textEl,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.06, ease: 'power2.out' }
      );

      tl.to({}, { duration });

      if (!isLast) {
        tl.to(textEl, {
          opacity: 0,
          y: -7,
          duration: 0.055,
          ease: 'power2.in',
        });
      }
    });

    // Hold final "Hello" briefly before swift upward sweep
    tl.to(textEl, {
      opacity: 0,
      y: -10,
      duration: 0.09,
      delay: 0.13,
      ease: 'power3.in',
    });

    // Upward Curtain Sweep (~16-17% faster: 0.75s, elegant power4.inOut)
    const windowHeight = window.innerHeight;
    const initialCurve = `M0 0 L${window.innerWidth} 0 L${window.innerWidth} ${windowHeight} Q${window.innerWidth / 2} ${windowHeight + 300} 0 ${windowHeight} Z`;
    const targetCurve = `M0 0 L${window.innerWidth} 0 L${window.innerWidth} ${windowHeight} Q${window.innerWidth / 2} ${windowHeight} 0 ${windowHeight} Z`;

    if (pathEl) {
      tl.to(
        pathEl,
        {
          attr: { d: initialCurve },
          duration: 0.32,
          ease: 'power2.in',
        },
        '-=0.03'
      );
      tl.to(
        pathEl,
        {
          attr: { d: targetCurve },
          duration: 0.40,
          ease: 'power3.out',
        }
      );
    }

    tl.to(
      container,
      {
        yPercent: -100,
        duration: 0.75,
        ease: 'power4.inOut',
      },
      '-=0.68'
    );

    return () => {
      tl.kill();
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  if (isDone) return null;

  return (
    <aside
      ref={containerRef}
      aria-label="Opening sequence"
      className="fixed inset-0 z-[9999] w-screen h-[100svh] bg-black text-[#F6F1E8] flex items-center justify-center pointer-events-none select-none overflow-hidden"
      style={{
        backgroundColor: '#000000',
        willChange: 'transform',
      }}
    >
      {/* Centered Greeting */}
      <div
        ref={textRef}
        className="relative z-20 flex items-center gap-3 px-6"
      >
        <span
          className="w-2.5 h-2.5 rounded-full inline-block"
          style={{
            backgroundColor: '#C99FA5',
          }}
        />
        <span
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight font-display"
          style={{
            fontFamily: 'var(--font-bodoni-moda), "Bodoni MT", Didot, serif',
            color: '#F6F1E8',
            letterSpacing: '-0.02em',
          }}
        >
          {currentGreeting}
        </span>
      </div>

      {/* Dennis Snellenberg organic SVG bottom curve extension */}
      <svg
        className="absolute top-0 left-0 w-full h-[calc(100%+300px)] pointer-events-none -z-10"
        style={{ fill: '#000000' }}
      >
        <path ref={svgPathRef} />
      </svg>
    </aside>
  );
};
