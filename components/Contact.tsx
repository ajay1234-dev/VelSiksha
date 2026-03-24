"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  User,
  Send,
  CheckCircle,
  XCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // EmailJS configuration - Get keys from environment variables
      // Create .env.local file with your actual keys (see .env.local.example)
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";
      const contactEmail =
        process.env.NEXT_PUBLIC_CONTACT_EMAIL || "velsiksha@gmail.com";

      // Validate that keys are configured
      if (!serviceID || !templateID || !publicKey) {
        throw new Error(
          "EmailJS not configured. Please set up environment variables in .env.local"
        );
      }

      // Prepare email parameters
      const templateParams = {
        from_name: formData.name,
        student_class: formData.class,
        phone_number: formData.phone,
        subject_details: formData.subject || "Not specified",
        message: formData.message || "No message provided",
        to_email: contactEmail,
      };

      // Send email via EmailJS
      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      // Success
      setStatus("success");
      setFormData({ name: "", class: "", phone: "", subject: "", message: "" });

      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("error");

      // Fallback to mailto if EmailJS fails or not configured
      const contactEmail =
        process.env.NEXT_PUBLIC_CONTACT_EMAIL || "velsiksha@gmail.com";
      setTimeout(() => {
        const mailtoLink = `mailto:${contactEmail}?subject=Enquiry from ${formData.name}&body=Name: ${formData.name}%0D%0AClass: ${formData.class}%0D%0APhone: ${formData.phone}%0D%0ASubject: ${formData.subject}%0D%0AMessage: ${formData.message}`;
        window.location.href = mailtoLink;
      }, 1000);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin size={28} />,
      title: "Address",
      content:
        "No: 5/1, Sakthi Nagar, 4th Street,\nChoolaimedu, Chennai – 600094",
    },
    {
      icon: <Phone size={28} />,
      title: "Phone",
      content: "+91 6369259646",
      href: "tel:+916369259646",
    },
    {
      icon: <Mail size={28} />,
      title: "Email",
      content: "velsiksha@gmail.com",
      href: "mailto:velsiksha@gmail.com",
    },
    {
      icon: <User size={28} />,
      title: "Instructor",
      content: "Madhumitha R",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="container mx-auto px-3 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block text-primary-green font-semibold uppercase tracking-wider text-xs md:text-sm mb-2">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-primary-blue mb-3 md:mb-4">
            Contact & Enquiry
          </h2>
          <div className="w-16 h-1 bg-primary-green mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex gap-3 md:gap-5 items-start"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-light-green text-primary-green rounded-full flex items-center justify-center flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-base md:text-xl font-bold font-heading text-primary-blue mb-1">
                    {info.title}
                  </h4>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-soft-gray hover:text-primary-blue transition-colors whitespace-pre-line font-medium text-sm md:text-base"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-soft-gray whitespace-pre-line font-medium text-sm md:text-base">
                      {info.content}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white p-5 md:p-8 rounded-xl md:rounded-2xl shadow-2xl"
          >
            <div className="mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-bold font-heading text-primary-blue mb-2">
                Send an Enquiry
              </h3>
              <p className="text-soft-gray text-sm md:text-base">
                Fill out the form below and we'll get back to you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block font-medium text-primary-blue mb-2 text-sm md:text-base"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter student's name"
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent bg-white text-soft-gray transition-all text-sm md:text-base"
                />
              </div>

              {/* Class & Phone */}
              <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label
                    htmlFor="class"
                    className="block font-medium text-primary-blue mb-2 text-sm md:text-base"
                  >
                    Class *
                  </label>
                  <select
                    id="class"
                    name="class"
                    value={formData.class}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent bg-white text-soft-gray transition-all text-sm md:text-base"
                  >
                    <option value="" disabled>
                      Select Class
                    </option>
                    <option value="6">Class 6</option>
                    <option value="7">Class 7</option>
                    <option value="8">Class 8</option>
                    <option value="9">Class 9</option>
                    <option value="10">Class 10</option>
                    <option value="11">Class 11</option>
                    <option value="12">Class 12</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-medium text-primary-blue mb-2 text-sm md:text-base"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="10-digit number"
                    pattern="[0-9]{10}"
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent bg-white text-soft-gray transition-all text-sm md:text-base"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block font-medium text-primary-blue mb-2"
                >
                  Subject(s) Details
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Mathematics, Science"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent bg-white text-soft-gray transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block font-medium text-primary-blue mb-2"
                >
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Any specific requirements..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent bg-white text-soft-gray transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-gradient-blue text-white font-semibold py-3 md:py-4 px-4 md:px-6 rounded-lg hover:shadow-glow-blue transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 text-sm md:text-base"
              >
                {status === "submitting" ? (
                  <>
                    <span className="animate-spin">⏳</span> Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle size={20} /> Sent Successfully!
                  </>
                ) : (
                  <>
                    <Send size={20} /> Submit Enquiry
                  </>
                )}
              </button>

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
                  <XCircle size={20} />
                  <p>Failed to send. Please try again or call us directly.</p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
