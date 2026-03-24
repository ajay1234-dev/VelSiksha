"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-light-blue text-primary-blue py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Logo & Tagline */}
          <div className="text-center">
            <h3 className="text-2xl font-bold font-heading mb-2">
              VelSiksha Tuition Centre
            </h3>
            <p className="text-primary-green font-semibold">
              Learn. Grow. Excel.
            </p>
          </div>

          {/* Copyright */}
          <div className="border-t border-primary-blue/20 pt-6 w-full text-center text-sm text-primary-blue/80">
            <p>
              &copy; {new Date().getFullYear()} VelSiksha Tuition Centre. All
              Rights Reserved.
            </p>
            <p className="mt-1">Managed by Madhumitha R</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
