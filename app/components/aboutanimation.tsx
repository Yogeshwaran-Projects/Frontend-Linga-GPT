"use client";

import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";

export function TabsDemo() {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Product Tab</p>
          <div className="relative w-full h-[calc(100%-2rem)] overflow-hidden">
            <Image
              src="/images/sattur.jpg"
              alt="Product image"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services Tab</p>
          <div className="relative w-full h-[calc(100%-2rem)] overflow-hidden">
            <Image
              src="/images/sattur.jpg"
              alt="Services image"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Playground Tab</p>
          <div className="relative w-full h-[calc(100%-2rem)] overflow-hidden">
            <Image
              src="/images/wel.jpg"
              alt="Playground image"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content Tab</p>
          <div className="relative w-full h-[calc(100%-2rem)] overflow-hidden">
            <Image
              src="/images/sattur.jpg"
              alt="Content image"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Random Tab</p>
          <div className="relative w-full h-[calc(100%-2rem)] overflow-hidden">
            <Image
              src="/images/wel.jpg"
              alt="Random image"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}
