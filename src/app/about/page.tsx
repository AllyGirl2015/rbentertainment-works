import { Metadata } from "next";
import { Calendar, Flag, Rocket, Users, Globe, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | RBEW",
  description: "The history and journey of Reality Builders Entertainment Works from 2015 to today.",
};

const timelineEvents = [
  {
    year: "2015",
    title: "The Foundation",
    description: "Reality Builders Entertainment Works (RBEW) is founded by Alissa M.R. Eldridge. The journey begins with a vision to create immersive worlds where stories aren't just told, but lived.",
    icon: Flag,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20"
  },
  {
    year: "2016-2018",
    title: "Early Experiments",
    description: "Initial forays into game modification and community building. The team begins to experiment with Minecraft server hosting and custom roleplay scripts, laying the groundwork for future frameworks.",
    icon: Globe,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
  {
    year: "2019",
    title: "The Shift to Narrative",
    description: "RBEW expands its focus from pure gameplay to narrative-driven experiences. Concepts for original universes and lore-heavy servers begin to take shape.",
    icon: Users,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20"
  },
  {
    year: "2021",
    title: "Realism Hit Roleplay",
    description: "Development begins on our flagship FiveM server. The goal: to create a hyper-realistic simulation of life, law, and society within the GTA V engine.",
    icon: Rocket,
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20"
  },
  {
    year: "2023",
    title: "Literary Expansion",
    description: "The studio branches into literature with 'The Pendant Legacy'. 'A Beautiful Deception' is published, marking RBEW's official entry into the world of novels and LGBTQ+ fiction.",
    icon: Award,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20"
  },
  {
    year: "2024",
    title: "FrameState & RRN",
    description: "A year of massive growth. FrameState RP enters development for Minecraft Bedrock, and the Reality Radio Network launches, bringing original music and audio dramas to the forefront.",
    icon: Calendar,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20"
  },
  {
    year: "2025",
    title: "The Future is Now",
    description: "With multiple projects in active development—including the Time Police Department series and the expansion of the RBEW Music Collective—we continue to push the boundaries of digital entertainment.",
    icon: Rocket,
    color: "text-white",
    bg: "bg-white/10",
    border: "border-white/20"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 text-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Journey</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            From a single idea in 2015 to a multimedia studio spanning games, books, and audio. This is the story of Reality Builders.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent md:-translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-24">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Date Bubble (Mobile: Left, Desktop: Center) */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-black shadow-[0_0_10px_rgba(168,85,247,0.5)] md:-translate-x-1/2 z-10 mt-1.5 md:mt-0"></div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                  <div className={`p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${event.bg} ${event.border}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-black/40 ${event.color}`}>
                        <event.icon className="w-6 h-6" />
                      </div>
                      <span className={`text-2xl font-bold ${event.color}`}>{event.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{event.description}</p>
                  </div>
                </div>

                {/* Empty Space for alternating layout */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
