"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-light-blue text-primary-blue">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Admissions open for Classes 6 to 12
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-medium opacity-95">
            Only one batch with limited seats. Don't miss out on quality
            education.
          </p>
          <Link
            href="https://wa.me/916369259646?text=Hello%20Madhumitha%20R%2C%20I%20want%20to%20enroll%20my%20child%20at%20VelSiksha%20Tuition%20Centre.%20Please%20help%20me%20secure%20a%20seat."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-blue text-white font-semibold py-4 px-10 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-lg"
          >
            Enroll Today →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
