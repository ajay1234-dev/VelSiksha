"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import ProtectedImage from "./ProtectedImage";

export default function Tutor() {
  const highlights = [
    "Individual Attention",
    "Focus on Concept Clarity",
    "Structured Practice",
  ];

  return (
    <section id="tutor" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
        >
          {/* Image */}
          <div className="relative order-2 md:order-1">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <ProtectedImage
                src="/images/tutor1.jpeg"
                alt="Tutor Madhumitha R"
                className="w-full h-auto object-cover"
                width={600}
                height={800}
              />
            </div>
            <div className="absolute -top-6 -left-6 w-full h-full bg-light-green rounded-2xl -z-10"></div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <span className="inline-block text-primary-green font-semibold uppercase tracking-wider text-sm mb-3">
              Meet Your Tutor
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-gradient-blue mb-6">
              Madhumitha R
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Provides subject guidance with emphasis on clarity, practice, and
              individual attention to support students in improving their
              academic performance.
            </p>

            <ul className="space-y-4">
              {highlights.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-lg font-medium"
                >
                  <CheckCircle
                    className="text-primary-green bg-light-green rounded-full p-1"
                    size={24}
                  />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
