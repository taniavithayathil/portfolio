import React from 'react';
import { IntroSequence } from '@/components/intro';
import { AboutPreview, ExperienceSection } from '@/components/sections';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col bg-[#F6F1E8] text-[#241817]">
      {/* 1. Fullscreen Black Multilingual Opening Sequence */}
      <IntroSequence />

      {/* 2. Main Editorial Page Content */}
      <main className="w-full flex-1 flex flex-col">
        {/* About Section */}
        <AboutPreview />

        {/* Experience & Skills Section */}
        <ExperienceSection />
      </main>
    </div>
  );
}
