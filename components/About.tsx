"use client";

import { motion } from "framer-motion";
import { Target, Users } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Target size={32} />,
      title: "Our Mission",
      description:
        "VelSiksha Tuition Centre is guided by Madhumitha R and focuses on helping students build strong academic foundations through clear explanations and regular practice.",
    },
    {
      icon: <Users size={32} />,
      title: "Our Approach",
      description:
        "The teaching approach is structured and student-focused, ensuring better understanding and steady academic progress.",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-light-blue">
      <div className="container mx-auto px-3 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block text-primary-green font-semibold uppercase tracking-wider text-xs md:text-sm mb-2">
            Who We Are
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-primary-blue mb-3 md:mb-4">
            About VelSiksha
          </h2>
          <div className="w-16 h-1 bg-primary-green mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 md:p-10 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-light-blue text-primary-blue rounded-full flex items-center justify-center mb-4 md:mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-heading text-primary-blue mb-3 md:mb-4">
                {feature.title}
              </h3>
              <p className="text-soft-gray leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
