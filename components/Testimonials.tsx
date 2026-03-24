"use client";

import { motion } from "framer-motion";
import { Star, User } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: '"Good improvement in marks after joining. The tests really help in preparation."',
      author: "Class 10 Student",
    },
    {
      rating: 5,
      text: '"Clear explanations for difficult math concepts. Easily approachable for doubts."',
      author: "Class 12 Student",
    },
    {
      rating: 5,
      text: '"Very supportive teaching environment. Realized noticeable progress in science subjects."',
      author: "Parent",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-light-blue">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary-green font-semibold uppercase tracking-wider text-sm mb-2">
            Student Feedback
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary-blue mb-4">
            What They Say
          </h2>
          <div className="w-16 h-1 bg-primary-green mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6 text-yellow-500">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>

              {/* Review */}
              <p className="text-soft-gray italic mb-6 min-h-[80px]">
                {testimonial.text}
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-10 h-10 bg-light-blue text-primary-blue rounded-full flex items-center justify-center">
                  <User size={20} />
                </div>
                <div>
                  <h4 className="font-bold font-heading text-primary-blue">
                    {testimonial.author}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
