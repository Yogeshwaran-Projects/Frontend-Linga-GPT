"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { useRouter } from "next/navigation";

const loadingStates = [
  { text: "Initializing analysis" },
  { text: "Scanning codebase" },
  { text: "Identifying patterns" },
  { text: "Extracting style metrics" },
  { text: "Comparing with best practices" },
  { text: "Generating insights" },
  { text: "Formulating recommendations" },
  { text: "Style analysis complete" },
];

const CodingStylePage = () => {
  const [username, setUsername] = useState("");
  const [codingStyle1, setCodingStyle1] = useState("");
  const [codingStyle2, setCodingStyle2] = useState("");
  const [codingStyle3, setCodingStyle3] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = { username, codingStyle1, codingStyle2, codingStyle3 };
    console.log("Form Data:", data);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("http://localhost:4321/");
    }, loadingStates.length * 2000);
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: { duration: 3, ease: "easeInOut", repeat: Infinity },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        {/* Background Component */}
      </div>
      <div className="relative z-10 max-w-6xl w-full p-10">
        {loading ? (
          <Loader loadingStates={loadingStates} loading={loading} duration={2000} />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="p-12 rounded-3xl shadow-2xl bg-black bg-opacity-70"
          >
            <h2 className="text-4xl font-bold mb-10 text-center text-teal-400">
              Share Your Coding Style
            </h2>
            <form onSubmit={handleSubmit} className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={floatAnimation}
                className="relative flex justify-center mb-10"
              >
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-1/2 px-6 py-4 bg-black bg-opacity-70 border-2 border-teal-600 rounded-lg text-white font-mono text-xl focus:outline-none focus:border-teal-500 transition duration-300 peer"
                  placeholder=" "
                  required
                />
                <label className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-teal-400 transition-all duration-300 pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:-translate-x-1/2 peer-placeholder-shown:text-teal-400 peer-focus:top-0 peer-focus:-translate-y-full peer-focus:-translate-x-1/2 peer-focus:text-teal-500">
                  Username
                </label>
              </motion.div>
              <div className="flex justify-between space-x-8 mb-10">
                {[codingStyle1, codingStyle2, codingStyle3].map((style, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                    whileHover={floatAnimation}
                    className="relative w-1/3"
                  >
                    <textarea
                      value={style}
                      onChange={(e) => {
                        const setters = [setCodingStyle1, setCodingStyle2, setCodingStyle3];
                        setters[index](e.target.value);
                      }}
                      className="block w-full px-6 py-6 bg-black bg-opacity-70 border-2 border-teal-600 rounded-lg text-white font-mono text-lg focus:outline-none focus:border-teal-500 transition duration-300 peer"
                      placeholder=" "
                      rows={8}
                      required
                    />
                    <label className="absolute top-1/2 left-4 transform -translate-y-1/2 text-teal-400 transition-all duration-300 pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-teal-400 peer-focus:top-0 peer-focus:-translate-y-full peer-focus:text-teal-500">
                      Coding Style {index + 1}
                    </label>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={floatAnimation}
                className="relative flex justify-center mt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-1/2 py-4 bg-teal-500 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-600 transition duration-300 ease-in-out"
                >
                  Submit
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CodingStylePage;
