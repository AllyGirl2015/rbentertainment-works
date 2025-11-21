import { Gamepad2, ArrowLeft, Globe, Server, Box } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Games | RB Entertainment Works',
  description: 'Explore our immersive gaming experiences.',
};

export default function GamesPage() {
  return (
    <main className="min-h-screen text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link href="/#projects" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
          <h1 className="text-5xl font-bold mb-6 flex items-center gap-4">
            <Gamepad2 className="w-12 h-12 text-purple-500" />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Interactive Experiences
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Dive into worlds where your choices matter. Our games blend rich storytelling with immersive gameplay mechanics.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {/* Realism Hit Roleplay */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3 h-64 bg-gradient-to-br from-purple-900 to-black rounded-xl flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/realism-hit-logo.png"
                  alt="Realism Hit Roleplay"
                  fill
                  className="object-cover object-center opacity-60 group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-3xl font-bold text-white">Realism Hit Roleplay (FiveM)</h3>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-bold border border-green-500/30">
                    BETA
                  </span>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  A hyper-realistic GTA-based roleplay world featuring layered law systems, superhuman regulation, advanced aviation, and a living city infrastructure. Custom agencies, lore, and map expansions give this server its own nation—The Unified Nation.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-gray-400 text-sm">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>GTA V + FiveM Framework (QB-Core)</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>Superpower conduct system</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>Unique factions (SGA, SHIELD, MIB)</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>Custom vehicles & cities</li>
                </ul>
                <div className="flex gap-4">
                  <a href="https://www.realitycentral.net" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold transition-colors flex items-center gap-2">
                    <Globe className="w-4 h-4" /> Visit Website
                  </a>
                  <a href="https://discord.gg/R27pqnfp5v" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-lg font-bold transition-colors flex items-center gap-2">
                    <Server className="w-4 h-4" /> Join Discord
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FrameState RP */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3 h-64 bg-gradient-to-br from-green-900 to-black rounded-xl flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/framestate-rp.png"
                  alt="FrameState RP"
                  fill
                  className="object-cover object-center opacity-60 group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-3xl font-bold text-white">FrameState RP (Minecraft)</h3>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs font-bold border border-yellow-500/30">
                    IN DEVELOPMENT
                  </span>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  A one-of-a-kind Minecraft roleplay experience blending realistic infrastructure with fantasy elements. Players can experience power systems, city growth, NPC interactions, and choose between tech advancement or magical abilities.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-gray-400 text-sm">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>Vanilla-Compatible RP Framework</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>Realistic vehicles & power grid</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>Superpower training schools</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>Cinematic roleplay experiences</li>
                </ul>
                <div className="flex gap-4">
                  <a href="https://discord.gg/H8VderVNzc" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-lg font-bold transition-colors flex items-center gap-2">
                    <Server className="w-4 h-4" /> Join Discord
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}