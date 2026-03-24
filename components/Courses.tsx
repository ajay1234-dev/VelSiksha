"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Atom,
  FlaskConical,
  Laptop,
  Calculator,
  Globe,
} from "lucide-react";

export default function Courses() {
  const courses = [
    {
      title: "Classes 6 – 10",
      gradient: "from-primary-blue to-secondary-blue",
      subjects: [
        { name: "Tamil", icon: <BookOpen size={22} /> },
        { name: "English", icon: <Globe size={22} /> },
        { name: "Mathematics", icon: <Calculator size={22} /> },
        { name: "Science", icon: <Atom size={22} /> },
        { name: "Social Science", icon: <Globe size={22} /> },
      ],
    },
    {
      title: "Classes 11 – 12",
      gradient: "from-primary-green to-green-600",
      subjects: [
        { name: "General Mathematics", icon: <Calculator size={22} /> },
        { name: "Physics", icon: <Atom size={22} /> },
        { name: "Chemistry", icon: <FlaskConical size={22} /> },
        { name: "Computer Science", icon: <Laptop size={22} /> },
      ],
    },
  ];

  return (
    <section id="courses" className="py-16 md:py-20 bg-warm-beige">
      <div className="container mx-auto px-3 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block text-primary-green font-semibold uppercase tracking-wider text-xs md:text-sm mb-2">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-primary-blue mb-3 md:mb-4">
            Our Courses
          </h2>
          <div className="w-12 md:w-16 h-1 bg-primary-green mx-auto rounded-full mb-3 md:mb-4"></div>
          <p className="text-soft-gray text-sm md:text-lg max-w-2xl mx-auto px-2">
            Mode: Offline Classes | Note: Fees are affordable and reasonable
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl md:rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className={`bg-gradient-to-br ${course.gradient} p-6 md:p-8 text-white text-center`}
              >
                <h3 className="text-2xl md:text-3xl font-bold font-heading">
                  {course.title}
                </h3>
              </div>
              <div className="p-5 md:p-8">
                <ul className="space-y-3 md:space-y-4">
                  {course.subjects.map((subject, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 md:gap-4 text-sm md:text-lg font-medium text-soft-gray pb-2 md:pb-3 border-b border-gray-200 last:border-0"
                    >
                      <span className="text-primary-blue">{subject.icon}</span>
                      {subject.name}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
