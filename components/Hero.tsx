"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle, Star, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-light-blue"
    >
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-green/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-10 w-72 h-72 bg-primary-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-3 md:px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-light-green text-primary-green font-semibold rounded-full text-xs md:text-sm mb-4 md:mb-6">
              Guided by Madhumitha R
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-primary-blue leading-tight mb-3 md:mb-4">
              VelSiksha Tuition Centre
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-soft-gray mb-4 md:mb-6">
              Learn. <span className="text-gradient-blue">Grow.</span> Excel.
            </h2>

            <p className="text-base md:text-lg text-soft-gray mb-6 md:mb-8 max-w-xl mx-auto md:mx-0 px-2">
              Providing structured academic support for students from Classes 6
              to 12 with focus on concept clarity and consistent improvement at
              affordable fees.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start mb-6 md:mb-8">
              <Link
                href="https://wa.me/916369259646?text=Hello%20Madhumitha%20R%2C%20I'm%20interested%20in%20enrolling%20my%20child%20in%20VelSiksha%20Tuition%20Centre.%20Please%20provide%20more%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-blue text-white font-semibold rounded-lg hover:shadow-glow-blue transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
              >
                Enroll Now <ArrowRight size={18} />
              </Link>
              <Link
                href="tel:+916369259646"
                className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 border-2 border-primary-blue text-primary-blue font-semibold rounded-lg hover:bg-light-blue transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
              >
                <Phone size={18} /> Call Now
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start pt-4 md:pt-6 border-t border-gray-300">
              <div className="flex items-center gap-1.5 md:gap-2 text-primary-blue font-medium text-sm md:text-base">
                <CheckCircle
                  className="text-primary-green flex-shrink-0"
                  size={18}
                />
                <span>Classes 6 to 12</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 text-primary-blue font-medium text-sm md:text-base">
                <CheckCircle
                  className="text-primary-green flex-shrink-0"
                  size={18}
                />
                <span>Affordable Fees</span>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-8 md:mt-0"
          >
            <div className="relative bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Students learning"
                className="rounded-lg md:rounded-xl w-full object-cover"
              />

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-3 -left-3 md:-top-4 md:-left-4 bg-white px-4 py-2 md:px-5 md:py-3 rounded-lg md:rounded-xl shadow-lg font-semibold flex items-center gap-1.5 md:gap-2 text-xs md:text-sm"
              >
                <Star
                  className="text-yellow-500 flex-shrink-0"
                  size={16}
                  fill="currentColor"
                />
                <span className="hidden sm:inline">Concept Clarity</span>
                <span className="sm:hidden">Clarity</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute -bottom-4 -right-3 md:-bottom-6 md:-right-4 bg-white px-4 py-2 md:px-5 md:py-3 rounded-lg md:rounded-xl shadow-lg font-semibold flex items-center gap-1.5 md:gap-2 text-xs md:text-sm"
              >
                <TrendingUp
                  className="text-primary-green flex-shrink-0"
                  size={16}
                />
                <span className="hidden sm:inline">Best Results</span>
                <span className="sm:hidden">Results</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
