"use client";

import { useState } from "react";
import { Metadata } from "next";
import { motion } from "framer-motion";
import { Mail, Send, User, MessageSquare, CheckCircle, AlertCircle, Lock } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/manadbny", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch (error) {
      setFormState("error");
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 pb-2">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Have a question, collaboration idea, or just want to say hello? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            
            <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
              <MessageSquare className="w-8 h-8 text-blue-400" />
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300 ml-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-4 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="Collaboration Opportunity"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-4 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={formState === "submitting"}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {formState === "submitting" ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              {formState === "success" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <p>Message sent successfully! We&apos;ll get back to you soon.</p>
                </motion.div>
              )}

              {formState === "error" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p>Something went wrong. Please try again or email us directly.</p>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-3xl p-8 border border-blue-500/20 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-8 text-white">Official Contacts</h2>
              <div className="space-y-8">
                <div className="group">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">Alissa M.R. Eldridge</h3>
                  <p className="text-purple-400 text-sm mb-3 font-medium uppercase tracking-wider">Founder & Creative Director</p>
                  <div className="space-y-2">
                    <a
                      href="mailto:alissarobbin2015@gmail.com"
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors p-3 bg-black/20 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10"
                    >
                      <Mail className="w-4 h-4 text-blue-400" />
                      alissarobbin2015@gmail.com
                    </a>
                    <a
                      href="mailto:mikey033098@gmail.com"
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors p-3 bg-black/20 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10"
                    >
                      <Mail className="w-4 h-4 text-blue-400" />
                      mikey033098@gmail.com
                    </a>
                  </div>
                </div>

                <div className="group">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">ReyAnne</h3>
                  <p className="text-purple-400 text-sm mb-3 font-medium uppercase tracking-wider">Audio Director</p>
                  <a
                    href="mailto:reyannaudio@gmail.com"
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors p-3 bg-black/20 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10"
                  >
                    <Mail className="w-4 h-4 text-blue-400" />
                    reyannaudio@gmail.com
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs text-gray-500 flex items-center gap-2">
                  <Lock className="w-3 h-3" />
                  Only these contacts are authorized to represent RBEW.
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-6 text-white">What We&apos;re Looking For</h3>
              <ul className="space-y-4">
                {[
                  "Writers • Coders • Builders",
                  "Artists • Voice Talent",
                  "Musicians • Composers",
                  "Creative Visionaries • Dreamers"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 bg-black/20 p-3 rounded-xl border border-white/5">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 text-xs">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
