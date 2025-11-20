'use client';

import { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, MessageCircle, Book, Layers, Sparkles, Zap } from "lucide-react";

const projects = [
  {
    id: "realism-hit-roleplay",
    title: "Realism Hit Roleplay",
    subtitle: "FiveM Roleplay Server",
    description: "A hyper-realistic GTA-based roleplay world featuring layered law systems, superhuman regulation, advanced aviation, and a living city infrastructure.",
    tags: ["GTA V", "FiveM", "QB-Core", "Roleplay"],
    status: "Beta Development",
    links: {
      website: "https://www.realitycentral.net",
      discord: "https://discord.gg/R27pqnfp5v",
    },
  },
  {
    id: "framestate-rp",
    title: "FrameState RP",
    subtitle: "Minecraft Roleplay Framework",
    description: "A one-of-a-kind Minecraft roleplay experience blending realistic infrastructure with fantasy elements - built as a redistributable framework.",
    tags: ["Minecraft", "Bedrock", "Framework", "RP Engine"],
    status: "Early Development",
    links: {
      discord: "https://discord.gg/H8VderVNzc",
    },
  },
  {
    id: "pendant-legacy",
    title: "The Pendant Legacy",
    subtitle: "Book Trilogy",
    description: "A deeply emotional, transformation-centered trilogy exploring identity, self-worth, and love in a world where reality can shift with a single gift.",
    tags: ["Novel", "LGBTQ+", "Transformation", "Drama"],
    status: "Book 1 Published",
    books: [
      { title: "A Beautiful Deception", status: "Published" },
      { title: "A Changed Parent", status: "In Progress" },
      { title: "Return of the Pendant", status: "Coming Soon" },
    ],
  },
  {
    id: "time-police-department",
    title: "Time Police Department",
    subtitle: "Sci-Fi Show Series",
    description: "A sci-fi drama about agents patrolling multiversal timelines, uncovering crimes and cosmic conspiracies across the multiverse.",
    tags: ["TV Series", "Sci-Fi", "Multiverse", "Time Travel"],
    status: "Pilot Complete",
  },
  {
    id: "virtual-guardians",
    title: "Virtual Guardians",
    subtitle: "Digital Action Series",
    description: "A reverse-Tron meets Glitch Techs world where digital warriors enter corrupted networks and battle AI-born threats.",
    tags: ["Animation", "Sci-Fi", "Psychological", "Action"],
    status: "Pre-Production",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight flex flex-col md:block items-center justify-center gap-4">
            <span className="flex items-center justify-center gap-4">
              <Layers className="w-12 h-12 md:w-16 md:h-16 text-white" />
              Explore
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 pb-2">
              Our Projects
            </span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-light italic mb-6">
            &ldquo;We don&apos;t just tell stories—we build realities.&rdquo;
          </p>
          <p className="text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Welcome to the world of RBEW Projects—a creative frontier where stories, technologies, and dreams collide. 
            Each project represents a distinct vision, hand-crafted from concept to execution.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/projects/${project.id}`}
                className="group block h-full bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-colors duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-blue-300 text-sm font-medium tracking-wider uppercase">{project.subtitle}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                      {project.status}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-400/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between mt-auto">
                    <div className="flex gap-4">
                      {project.links?.website && (
                        <span className="text-gray-400 group-hover:text-blue-400 transition-colors flex items-center gap-1 text-sm">
                          <GlobeIcon className="w-4 h-4" /> Website
                        </span>
                      )}
                      {project.links?.discord && (
                        <span className="text-gray-400 group-hover:text-indigo-400 transition-colors flex items-center gap-1 text-sm">
                          <MessageCircle className="w-4 h-4" /> Discord
                        </span>
                      )}
                    </div>
                    
                    <span className="text-blue-400 text-sm font-bold group-hover:translate-x-2 transition-transform flex items-center gap-2">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Upcoming Initiatives */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-3xl p-10 border border-purple-400/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:32px_32px]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
              <span className="p-2 bg-purple-500/20 rounded-lg"><Zap className="w-6 h-6 text-purple-400" /></span>
              Upcoming Initiatives
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Audio Sight", desc: "The rebirth of auditory cinema—radio drama reimagined.", color: "text-pink-400" },
                { title: "RBEW Music Collective", desc: "Composers, theme songs, and immersive scores.", color: "text-cyan-400" },
                { title: "Visual Novel Engine", desc: "A possible future tool for storytelling across mediums.", color: "text-purple-400" }
              ].map((item, i) => (
                <div key={i} className="bg-black/40 rounded-xl p-6 border border-white/5 hover:border-white/20 transition-colors">
                  <h3 className={`text-xl font-bold ${item.color} mb-3`}>{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <h2 className="text-4xl font-bold mb-6 text-white flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-yellow-400" />
            Want to Collaborate?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Are you a developer, writer, musician, or creative visionary? We&apos;re always looking for new talent.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}
