"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "If you need help, contact us at support@example.com",
    "How can we assist you today?",
    "Looking for help? Reach out to us.",
    "Need assistance? Contact support.",
    "We're here to help! Get in touch with us."
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="h-[40rem] flex flex-col justify-center items-center px-4 bg-black text-[#00B0B3]">
      <h2 className="mb-4 text-2xl text-center sm:text-4xl">
        Send an email if you need help or to report an issue
      </h2>
      <p className="mb-8 text-lg text-center">
        We're here to assist you with any questions or concerns you may have. Reach out to us anytime.
      </p>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
