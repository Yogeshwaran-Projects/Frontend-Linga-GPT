"use client";
import { SparklesCore } from "@/components/ui/sparkles";
import React from "react";

export function SparklesPreview() {
  return (
    <div className="h-[60rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md pb-20">
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={1.0} // Increase the minimum size
          maxSize={2.5} // Increase the maximum size
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="relative z-20 flex flex-col items-center space-y-4">
        <h1 className="md:text-7xl text-5xl font-bold text-center text-white">
          Welcome to LINGA-AI
        </h1>
        <h2 className="md:text-4xl text-3xl font-semibold text-center text-white">
          - Yogeshwaran and Sabarinathan
        </h2>
      </div>
    </div>
  );
}
