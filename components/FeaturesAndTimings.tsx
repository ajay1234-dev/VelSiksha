"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Brain,
  FileCheck,
  MessageCircle,
  Leaf,
  Wallet,
  Clock,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

export default function FeaturesAndTimings() {
  const features = [
    {
      icon: <GraduationCap size={24} />,
      title: "Individual Attention",
      description: "Personalized focus to ensure every student understands.",
    },
    {
      icon: <Brain size={24} />,
      title: "Concept-based Teaching",
      description: "Building a strong foundation rather than rote learning.",
    },
    {
      icon: <FileCheck size={24} />,
      title: "Regular Tests",
      description: "Consistent evaluation to track and improve performance.",
    },
    {
      icon: <MessageCircle size={24} />,
      title: "Doubt Clarification",
      description: "Open environment to ask questions and clear doubts.",
    },
    {
      icon: <Leaf size={24} />,
      title: "Supportive Environment",
      description: "A positive and encouraging space for learning.",
    },
    {
      icon: <Wallet size={24} />,
      title: "Affordable Fees",
      description: "Quality education at reasonable prices.",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-20">
      <div className="container mx-auto px-3 md:px-4">
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <span className="inline-block text-primary-green font-semibold uppercase tracking-wider text-xs md:text-sm mb-2">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-primary-blue mb-3 md:mb-4">
              Key Features
            </h2>
            <div className="w-12 md:w-16 h-1 bg-primary-green rounded-full mb-6 md:mb-8"></div>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-3 md:gap-4 items-start p-3 md:p-4 rounded-lg md:rounded-xl hover:bg-light-green/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-light-blue text-primary-blue rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-blue group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-bold font-heading text-primary-blue mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-soft-gray text-xs md:text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timings Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-light-blue text-primary-blue p-5 md:p-8 rounded-xl md:rounded-2xl shadow-2xl sticky top-24 border-2 border-primary-blue/20">
              <div className="text-center">
                <Clock className="w-12 h-12 md:w-16 md:h-16 text-primary-blue mx-auto mb-4 md:mb-6" />
                <h3 className="text-xl md:text-2xl font-bold font-heading mb-4 md:mb-6">
                  Class Schedule
                </h3>

                <div className="bg-primary-green text-white py-3 md:py-4 px-4 md:px-6 rounded-lg md:rounded-xl mb-4 md:mb-6">
                  <div className="text-2xl md:text-3xl font-bold font-heading">
                    6:00 PM – 9:00 PM
                  </div>
                </div>

                <div className="bg-primary-blue/10 backdrop-blur-sm p-3 md:p-4 rounded-lg mb-4 md:mb-6 flex gap-2 md:gap-3 items-start text-left">
                  <AlertCircle
                    className="text-primary-blue flex-shrink-0 mt-0.5"
                    size={18}
                    md={20}
                  />
                  <p className="text-xs md:text-sm font-medium">
                    <strong>Note:</strong> Only one batch is conducted with
                    limited seats to ensure proper attention for each student.
                  </p>
                </div>

                <Link
                  href="https://wa.me/916369259646?text=Hello%20Madhumitha%20R%2C%20I%20want%20to%20secure%20a%20seat%20for%20my%20child%20at%20VelSiksha%20Tuition%20Centre.%20Please%20provide%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-primary-blue text-white font-semibold py-3 md:py-4 px-4 md:px-6 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center text-sm md:text-base"
                >
                  Secure Your Seat{" "}
                  <span className="inline-block ml-1 md:ml-2">→</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
