"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-transparent items-center justify-start pt-4 relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    "quote": "We built this application with dedication and passion. We are developers who strive to create innovative solutions.",
    "name": "Yogeshwaran and Sabarinathan",
    "title": "Developers"
  },
  {
    "quote": "Our mission is to turn great ideas into reality. We are developers committed to excellence.",
    "name": "Yogeshwaran and Sabarinathan",
    "title": "Developers"
  },
  {
    "quote": "Innovation and creativity drive us to build remarkable applications. We are developers with a vision.",
    "name": "Yogeshwaran and Sabarinathan",
    "title": "Developers"
  },
  {
    "quote": "We transform concepts into seamless user experiences. We are developers with a passion for technology.",
    "name": "Yogeshwaran and Sabarinathan",
    "title": "Developers"
  },
  {
    "quote": "Every line of code is written with precision and care. We are developers dedicated to making a difference.",
    "name": "Yogeshwaran and Sabarinathan",
    "title": "Developers"
  },
];
