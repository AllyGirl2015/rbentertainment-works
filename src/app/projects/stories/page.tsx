import { BookOpen, ArrowLeft, Clock, Shield } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Stories | RB Entertainment Works',
  description: 'Read our original stories and narratives.',
};

export default function StoriesPage() {
  return (
    <main className="min-h-screen text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link href="/#projects" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
          <h1 className="text-5xl font-bold mb-6 flex items-center gap-4">
            <BookOpen className="w-12 h-12 text-pink-500" />
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Written Worlds
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Immerse yourself in our collection of short stories, novellas, and lore archives.
          </p>
        </div>

        <div className="space-y-16">
          {/* The Pendant Legacy */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">The Pendant Legacy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
                <div className="h-48 bg-gradient-to-br from-pink-900 to-black rounded-xl mb-6 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white/20 group-hover:text-white/40 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">A Beautiful Deception</h3>
                <p className="text-sm text-pink-400 mb-4 font-mono">Book 1 • Available Now</p>
                <p className="text-gray-400 mb-6">
                  When Mat receives a mysterious pendant, he&apos;s thrust into a world where reality reshapes around him. Transformed into Isabel, she must navigate identity, memory, and self-worth.
                </p>
                <span className="inline-block px-4 py-2 bg-pink-500/20 text-pink-300 rounded-full text-sm font-medium border border-pink-500/30">
                  Published on KDP
                </span>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
                <div className="h-48 bg-gradient-to-br from-purple-900 to-black rounded-xl mb-6 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white/20 group-hover:text-white/40 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">A Changed Parent</h3>
                <p className="text-sm text-purple-400 mb-4 font-mono">Book 2 • In Progress</p>
                <p className="text-gray-400 mb-6">
                  Isabel navigates motherhood and healing. Supported by her partner Gabriel, she begins to understand the power of generational love and chosen transformation.
                </p>
                <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                  Coming Soon
                </span>
              </div>
            </div>
          </section>

          {/* Show Series */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">Show Series Concepts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
                <div className="h-48 bg-gradient-to-br from-blue-900 to-black rounded-xl mb-6 flex items-center justify-center">
                  <Clock className="w-16 h-16 text-white/20 group-hover:text-white/40 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Time Police Department (TPD)</h3>
                <p className="text-gray-400 mb-6">
                  A sci-fi drama about agents patrolling multiversal timelines. Protecting the timeline from itself, one paradox at a time.
                </p>
                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                  <li>• Pilot script complete</li>
                  <li>• Season arcs plotted</li>
                  <li>• Tie-in lore integration</li>
                </ul>
                <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                  In Development
                </span>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
                <div className="h-48 bg-gradient-to-br from-cyan-900 to-black rounded-xl mb-6 flex items-center justify-center">
                  <Shield className="w-16 h-16 text-white/20 group-hover:text-white/40 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Virtual Guardians</h3>
                <p className="text-gray-400 mb-6">
                  Digital warriors enter corrupted networks to battle AI-born threats using powers formed from trauma, memory, and creativity.
                </p>
                <span className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/30">
                  Concept Phase
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}