import React from 'react';
import { IntroSequence } from '@/components/intro';
import { AboutPreview } from '@/components/sections';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#F6F1E8] text-[#241817]">
      {/* 1. Fullscreen Black Multilingual Opening Sequence */}
      <IntroSequence />

      {/* 2. Revealed Quiet Editorial About Page Underneath */}
      <main className="flex-1 flex flex-col justify-center">
        <AboutPreview />
      </main>
    </div>
  );
}
