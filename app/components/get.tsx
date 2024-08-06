"use client";

import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { useRouter } from 'next/navigation';

export function TypewriterEffectDemo() {
  const router = useRouter();
  const words = [
    {
      text: "Personalized",
    },
    {
      text: "AI",
    },
    {
      text: "for",
    },
    {
      text: "your",
    },
    {
      text: "coding style...",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const handleContinue = () => {
    router.push('/codingstyle');
  };

  const handleSkip = () => {
    window.location.href = 'http://localhost:4321';
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-8">
      <div className="text-center">
        <p className="text-neutral-600 dark:text-neutral-200 text-lg md:text-xl lg:text-2xl xl:text-3xl mb-8">
          Your personal AI coding assistant
        </p>
        <TypewriterEffect words={words} className="mb-8" />
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-8">
        <button
          className="w-48 h-12 rounded-xl bg-black border dark:border-white border-transparent text-white text-base"
          onClick={handleSkip}
        >
          Skip
        </button>
        <button
          className="w-48 h-12 rounded-xl bg-white text-black border border-black text-base"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
