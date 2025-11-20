import { Sparkles, Mic2, PenTool, Code, Palette } from 'lucide-react';
import { Metadata } from "next";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Team - RBEW | Reality Builders Entertainment Works",
  description: "Meet the people shaping the future of storytelling at Reality Builders Entertainment Works.",
  openGraph: {
    title: "Team - RBEW",
    description: "From humble Minecraft builds to transformative entertainment - discover our story.",
    url: "https://rbew.com/team",
    type: "website",
  },
};

export default function TeamPage() {
  return (
    <main className="min-h-screen text-white pt-32 pb-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Builders</span>
          </h1>
          <p className="text-2xl text-gray-300 font-light italic mb-12">
            &ldquo;We don&apos;t work for the future. We work with the people shaping it.&rdquo;
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-bold uppercase tracking-wider text-gray-500">
            <span className="px-4 py-2 border border-white/10 rounded-full">Writers</span>
            <span className="px-4 py-2 border border-white/10 rounded-full">Coders</span>
            <span className="px-4 py-2 border border-white/10 rounded-full">Builders</span>
            <span className="px-4 py-2 border border-white/10 rounded-full">Artists</span>
            <span className="px-4 py-2 border border-white/10 rounded-full">Voice Talent</span>
            <span className="px-4 py-2 border border-white/10 rounded-full">Dreamers</span>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20 border border-white/10 rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row gap-12 items-start relative z-10">
            <div className="w-full max-w-sm mx-auto md:max-w-none md:w-1/3">
              <div className="aspect-[3/4] bg-gray-800 rounded-2xl overflow-hidden relative shadow-2xl border border-white/10">
                 <Image 
                   src="/alissa.jpg" 
                   alt="Alissa M.R. Eldridge - Founder & Visionary Creator" 
                   width={400}
                   height={533}
                   className="w-full h-full object-cover"
                 />
              </div>
              <div className="mt-6 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white">Alissa M.R. Eldridge</h3>
                <p className="text-purple-400 font-medium">Founder & Visionary Creator</p>
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">The Soul Behind RBEW</h2>
              <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
                <p>
                  Alissa M.R. Eldridge is the creative force dedicated to crafting transformative stories across mediums: books, games, audio, and screen.
                </p>
                <p>
                  She is also a transgender woman on a journey of personal truth. Born as Michael Robert Eldridge, Alissa chose to step into her fullest identity. Her name honors each part of that path:
                </p>
                <ul className="list-disc pl-6 space-y-2 border-l-2 border-purple-500/30 ml-4">
                  <li><strong>Michael</strong>, carried forward as a core part of who she is.</li>
                  <li><strong>Robbin</strong>, a soft derivation of Robert, giving flight to her legacy.</li>
                  <li><strong>Alissa</strong>, chosen as her true name—the beginning of her real story.</li>
                </ul>
                <blockquote className="text-xl font-light italic text-white border-l-4 border-cyan-500 pl-6 py-2 my-8 bg-white/5 rounded-r-xl">
                  &ldquo;My name is a story. One of survival, rebirth, and becoming who I was always meant to be.&rdquo;
                </blockquote>
                
                <h3 className="text-xl font-bold text-white mt-8 mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                  A Mind Shaped by Wonder
                </h3>
                <p>
                  With a genius-level IQ, Alissa has a mind wired for innovation, layering logical frameworks, emotional storytelling, and deep introspection into everything she creates. But she never leads with ego—only with purpose.
                </p>

                <h3 className="text-xl font-bold text-white mt-8 mb-4 flex items-center gap-2">
                  <Mic2 className="w-5 h-5 text-pink-400" />
                  Voice & Performance
                </h3>
                <p>
                  Alissa is also a passionate actor and voice actor, channeling emotional depth into compelling performances. From dramatic monologues to character-driven animation, she brings authentic trans representation and dynamic range to every role.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">Join the Builders of Reality</h2>
        <p className="text-xl text-gray-300 mb-12">
          Whether you’re a writer, builder, coder, artist, voice talent, or visionary — we believe great stories come from shared dreams, not top-down commands.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            <Code className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="font-bold text-white">Developers</h3>
          </div>
          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            <PenTool className="w-8 h-8 text-purple-400 mx-auto mb-4" />
            <h3 className="font-bold text-white">Writers</h3>
          </div>
          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            <Palette className="w-8 h-8 text-pink-400 mx-auto mb-4" />
            <h3 className="font-bold text-white">Artists</h3>
          </div>
        </div>

        <a 
          href="mailto:alissarobbin2015@gmail.com" 
          className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        >
          Apply to Join
        </a>
      </section>
    </main>
  );
}