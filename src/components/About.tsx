'use client';

import { Gamepad2, BookOpen, Film, Music, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
              Welcome to RBEW
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            RBEW began in late 2015 as a humble Minecraft build team known as Reality Builders. 
            What started with blocks and blueprints quickly evolved into something greater—a desire to reshape entertainment itself.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="bg-gradient-to-br from-black/60 to-purple-900/20 border border-white/10 rounded-3xl p-8 md:p-16 backdrop-blur-md shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-500/20 transition-colors duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                  <Target className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Our Mission
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Now as <span className="font-bold text-cyan-400">Reality Builders Entertainment Works</span>, 
                    we're building a platform to help emerging creators thrive. We believe in lifting up the next generation 
                    of artists, writers, coders, and dreamers—giving them a foundation to rise within the industry.
                  </p>
                </div>
                <div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    We specialize in crafting stories yet untold, each world built from the ground up with purpose, passion, and 
                    limitless depth. Whether it's novels, games, mods, or cinematic creations, every experience is hand-crafted 
                    to entertain, inspire, and transform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-16"
          >
            <Zap className="w-6 h-6 text-yellow-400" />
            <h3 className="text-3xl font-bold text-white tracking-wide uppercase">
              What We Do
            </h3>
            <Zap className="w-6 h-6 text-yellow-400" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Gamepad2,
                title: 'Community Content',
                description: 'Our roots in roleplay and modding have grown into a full creative initiative. We develop content for FiveM, Minecraft, and much more.',
                color: 'text-green-400',
                bg: 'bg-green-500/10',
                border: 'border-green-500/20'
              },
              {
                icon: BookOpen,
                title: 'Written Literature',
                description: 'From deeply emotional dramas to high-concept sci-fi, our stories aim to move hearts and minds.',
                color: 'text-blue-400',
                bg: 'bg-blue-500/10',
                border: 'border-blue-500/20'
              },
              {
                icon: Film,
                title: 'Film & Animation',
                description: 'With compelling scripts and growing 3D animation skills, we create stunning visual stories that captivate the eyes and stir the soul.',
                color: 'text-red-400',
                bg: 'bg-red-500/10',
                border: 'border-red-500/20'
              },
              {
                icon: Music,
                title: 'Audio & Music',
                description: 'Our talented composers craft original music and soundscapes to support our projects—from theme songs to atmospheric scores.',
                color: 'text-purple-400',
                bg: 'bg-purple-500/10',
                border: 'border-purple-500/20'
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group bg-black/40 rounded-2xl p-8 backdrop-blur-sm border ${service.border} hover:border-opacity-50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
              >
                <div className={`w-14 h-14 ${service.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <h4 className="text-xl font-bold mb-4 text-white group-hover:text-white/90">
                  {service.title}
                </h4>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
