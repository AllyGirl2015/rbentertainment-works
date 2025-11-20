'use client';

import Link from 'next/link';
import { ArrowRight, Users, Globe, Layers, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col justify-center h-full mt-8">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)] mb-8 mx-auto hover:border-cyan-400 transition-colors duration-300"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
          </span>
          <span className="text-sm font-semibold text-cyan-300 tracking-wide uppercase">
            Building realities since 2015
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-8xl font-extrabold mb-6 tracking-tight leading-tight"
        >
          <span className="text-white drop-shadow-2xl">
            Welcome to the Center
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            of Your Reality
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg sm:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Where imagination isn't just explored,{' '}
          <span className="font-bold text-cyan-400 border-b-2 border-cyan-500/50 pb-1">
            it's engineered
          </span>
          . We craft stories yet untold, each world built from the ground up with purpose, passion, and limitless depth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <Link href="/projects" className="group relative px-8 py-4 bg-cyan-500 text-black font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <div className="relative flex items-center gap-2">
              <span>Explore Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link href="/team" className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-500/50 flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-400" />
            <span>Meet the Team</span>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {[
            { label: 'Years of History', value: '9+', icon: Clock, color: 'text-cyan-400' },
            { label: 'Active Projects', value: '5+', icon: Layers, color: 'text-purple-400' },
            { label: 'Creators', value: '10+', icon: Users, color: 'text-pink-400' },
            { label: 'Worlds Built', value: '∞', icon: Globe, color: 'text-yellow-400' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="group p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mb-4 mx-auto opacity-80 group-hover:opacity-100 transition-opacity`} />
              <div className="text-4xl font-bold text-white mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
