'use client';

import { Headphones, Heart, Ear, Sparkles, Mic2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AudioSight() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-cyan-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Icon */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-3xl mb-8 md:mb-10 shadow-[0_0_30px_rgba(147,51,234,0.3)] hover:rotate-0 transition-transform duration-500"
          >
            <Headphones className="w-10 h-10 md:w-12 md:h-12 text-white" />
          </motion.div>

          {/* Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
              Audio Sight
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl font-semibold text-white mb-8 tracking-wide"
          >
            Cinema for the Mind
          </motion.p>

          {/* Main Content */}
          <div className="max-w-5xl mx-auto">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-16"
            >
              At RBEW, we don&apos;t just <span className="font-bold text-purple-400 border-b border-purple-500/50">see</span> stories—
              we <span className="font-bold text-cyan-400 border-b border-cyan-500/50">hear</span> them into being.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-16 shadow-2xl relative overflow-hidden group"
            >
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="flex-1 text-left">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <Mic2 className="w-6 h-6 text-purple-400" />
                      The Art of Sound
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                      <span className="font-bold text-purple-400">Audiosight</span> is our 
                      signature method of storytelling through sound. It&apos;s the art of building emotion, world, and character using 
                      nothing but voice, music, and atmosphere.
                    </p>
                    
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Before visuals ever form, we&apos;re already painting scenes in your mind—with tones, rhythms, 
                      whispers, and heartbeats.
                    </p>
                  </div>

                  <div className="flex-1 w-full">
                    <div className="grid grid-cols-1 gap-4">
                      {[
                        {
                          icon: Heart,
                          text: 'With your heart',
                          color: 'text-red-400',
                          bg: 'bg-red-500/10',
                          border: 'border-red-500/20'
                        },
                        {
                          icon: Ear,
                          text: 'With your ears',
                          color: 'text-cyan-400',
                          bg: 'bg-cyan-500/10',
                          border: 'border-cyan-500/20'
                        },
                        {
                          icon: Sparkles,
                          text: 'With your imagination',
                          color: 'text-yellow-400',
                          bg: 'bg-yellow-500/10',
                          border: 'border-yellow-500/20'
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={item.text}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }}
                          className={`flex items-center gap-6 p-4 rounded-2xl bg-black/40 border ${item.border} hover:bg-white/5 transition-colors duration-300`}
                        >
                          <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center shadow-lg`}>
                            <item.icon className={`w-6 h-6 ${item.color}`} />
                          </div>
                          <p className="text-lg font-bold text-white">{item.text}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
