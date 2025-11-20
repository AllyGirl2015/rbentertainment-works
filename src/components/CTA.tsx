'use client';

import { Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 text-white tracking-tight"
          >
            Ready to Build Reality?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto font-light"
          >
            Whether you're a creator looking to collaborate or someone who wants to experience our worlds, 
            we'd love to hear from you.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          >
            <a 
              href="mailto:alissarobbin2015@gmail.com" 
              className="group px-8 py-4 bg-white text-black rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105 flex items-center gap-3"
            >
              <Mail className="w-5 h-5" />
              <span>Contact Us</span>
            </a>
            
            <a 
              href="#projects" 
              className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-xl font-bold hover:bg-white/10 transition-all duration-300 hover:border-white/40 hover:scale-105 flex items-center gap-3"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl"
          >
            <h3 className="text-white font-bold mb-6 text-lg uppercase tracking-wider flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              Approved Contacts
            </h3>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <span className="text-gray-300 font-medium">Alissa M.R. Eldridge</span>
                <a href="mailto:alissarobbin2015@gmail.com" className="text-cyan-400 hover:text-cyan-300 font-mono text-sm mt-2 md:mt-0">
                  alissarobbin2015@gmail.com
                </a>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <span className="text-gray-300 font-medium">General Inquiries</span>
                <a href="mailto:mikey033098@gmail.com" className="text-cyan-400 hover:text-cyan-300 font-mono text-sm mt-2 md:mt-0">
                  mikey033098@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
