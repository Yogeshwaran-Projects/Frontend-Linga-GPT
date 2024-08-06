import { Vortex } from "@/components/ui/vortex";
import React from "react";


export function VortexDemo() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          What the hell is this?
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
  Welcome to your personalized AI assistant! Feed your unique coding style into the AI, and it will respond in your personalized coding style, tailored just for you.
</p>

       
      </Vortex>
    </div>
  );
}
