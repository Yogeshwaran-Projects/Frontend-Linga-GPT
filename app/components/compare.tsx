import React from "react";
import { Compare } from "@/components/ui/compare";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function CompareDemo() {
  const words = [
    { text: "Compare" },
    { text: "your  " },
    { text: "old  " },
    { text: "code " },
    { text: "with AI-generated " },
    { text: "code " },
    { text: "for " },
    { text: " reference." },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white p-8">
      {/* Compare Component on the Left */}
      <div className="flex-1 flex items-center justify-center">
        <div className="p-4 border rounded-3xl dark:bg-transparent bg-transparent border-neutral-200 dark:border-neutral-800">
          <Compare
            firstImage="https://assets.aceternity.com/code-problem.png"
            secondImage="https://assets.aceternity.com/code-solution.png"
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-top"
            className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
            slideMode="hover"
          />
        </div>
      </div>

      {/* Typing Animation on the Right */}
      <div className="flex-1 flex flex-col justify-center items-start p-8">
        <h1 className="text-3xl font-bold mb-8">New Features</h1>
        <p className="text-neutral-600 dark:text-neutral-200 text-lg md:text-xl lg:text-2xl xl:text-3xl mb-8">
          Your personal AI coding assistant
        </p>
        <TypewriterEffect words={words} className="mb-8" />
      </div>
    </div>
  );
}
