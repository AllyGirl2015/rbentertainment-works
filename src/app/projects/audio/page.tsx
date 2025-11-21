import { Headphones, ArrowLeft, Mic2, Music, Radio } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Audio | RB Entertainment Works',
  description: 'Listen to our audio dramas and soundscapes.',
};

export default function AudioPage() {
  return (
    <main className="min-h-screen text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link href="/#projects" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
          <h1 className="text-5xl font-bold mb-6 flex items-center gap-4">
            <Headphones className="w-12 h-12 text-cyan-500" />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Sonic Landscapes
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Close your eyes and let the sound take you there. Audio dramas, podcasts, and immersive soundscapes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Reality Radio Network */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
            <div className="h-48 bg-gradient-to-br from-pink-900 to-black rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
              <Image
                src="/RRN_logo.jpg"
                alt="Reality Radio Network"
                fill
                className="object-cover object-center opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Reality Radio Network</h3>
            <p className="text-gray-400 mb-6">
              The future of music starts here. Original artists with real emotion. Discover authentic sound, unique personas, and the next generation of music.
            </p>
            <div className="flex gap-4 mb-4">
              <a href="https://www.realityradionetwork.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-bold transition-colors flex items-center gap-2 text-sm">
                <Radio className="w-4 h-4" /> Listen Now
              </a>
            </div>
            <span className="inline-block px-4 py-2 bg-pink-500/20 text-pink-300 rounded-full text-sm font-medium border border-pink-500/30">
              Live
            </span>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
            <div className="h-48 bg-gradient-to-br from-cyan-900 to-black rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
              <Mic2 className="w-16 h-16 text-white/20 group-hover:text-white/40 transition-colors relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Audio Sight</h3>
            <p className="text-gray-400 mb-6">
              The rebirth of auditory cinema—radio drama reimagined. Building emotion, world, and character using nothing but voice, music, and atmosphere.
            </p>
            <span className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/30">
              Upcoming Initiative
            </span>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
            <div className="h-48 bg-gradient-to-br from-blue-900 to-black rounded-xl mb-6 flex items-center justify-center">
              <Music className="w-16 h-16 text-white/20 group-hover:text-white/40 transition-colors" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">RBEW Music Collective</h3>
            <p className="text-gray-400 mb-6">
              Composers, theme songs, and immersive scores. Creating the sonic identity for our worlds.
            </p>
            <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
              In Development
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}