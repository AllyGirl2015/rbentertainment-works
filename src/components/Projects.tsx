'use client';

import Link from 'next/link';
import { ArrowRight, ExternalLink, Gamepad2, Book, Tv, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: 'Realism Hit Roleplay',
      description: 'A hyper-realistic GTA-based roleplay world featuring layered law systems, superhuman regulation, advanced aviation, and a living city infrastructure.',
      platform: 'FiveM',
      status: 'Active Development',
      link: '#',
      icon: Gamepad2,
      color: 'from-green-500 to-emerald-700'
    },
    {
      title: 'FrameState RP',
      description: 'A one-of-a-kind Minecraft roleplay experience blending realistic infrastructure with fantasy elements.',
      platform: 'Minecraft',
      status: 'Beta',
      link: '#',
      icon: Monitor,
      color: 'from-blue-500 to-cyan-700'
    },
    {
      title: 'The Pendant Legacy',
      description: 'A deeply emotional, transformation-centered trilogy exploring identity, self-worth, and love in a world where reality can shift with a single gift.',
      platform: 'Novel Series',
      status: 'Book 1 Published',
      link: '#',
      icon: Book,
      color: 'from-purple-500 to-pink-700'
    },
    {
      title: 'Time Police Department',
      description: 'A sci-fi drama about agents patrolling multiversal timelines, uncovering crimes and cosmic conspiracies across the multiverse.',
      platform: 'TV Series',
      status: 'In Development',
      link: '#',
      icon: Tv,
      color: 'from-orange-500 to-red-700'
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white">
              Our Projects
            </h2>
            <p className="text-xl text-gray-400">
              We don't just tell stories—we build realities. Explore our diverse portfolio of immersive experiences.
            </p>
          </div>
          <Link href="#contact" className="hidden md:flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold group">
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={project.link}
                className="group relative bg-black/40 border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-1 block h-full"
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors`}>
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-white/5 text-white/70 rounded-full text-xs font-medium border border-white/10 uppercase tracking-wider">
                      {project.status}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <span className="text-sm font-medium text-gray-500 group-hover:text-gray-400 transition-colors">
                      {project.platform}
                    </span>
                    <div className="flex items-center gap-2 text-sm font-bold text-white opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                      Learn More <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 md:hidden"
        >
          <Link href="#contact" className="btn-neon-cyan inline-flex items-center gap-2">
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
