import { Shield, Scale, Heart, Users, Lock, FileText } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Policies | RB Entertainment Works',
  description: 'Our commitment to ethical creativity, mutual respect, and human-centered development.',
};

export default function PoliciesPage() {
  return (
    <main className="min-h-screen text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Organization Policies
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Welcome to the foundation of how we operate. RBEW is committed to ethical creativity, mutual respect, and human-centered development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/policies/terms" className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors">
              <Scale className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Copyright & Ownership</h3>
            <p className="text-gray-400">
              We believe in ethical collaboration. You own what you create. Learn about our C.O.P. and AI Exception Policy.
            </p>
          </Link>

          <Link href="/policies/community" className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-pink-500/30 transition-colors">
              <Heart className="w-6 h-6 text-pink-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Mental Health & Conduct</h3>
            <p className="text-gray-400">
              We prioritize well-being. Explore our Mental Health Policy (M.H.P.) and Non-Discrimination Policy (N.D.P.).
            </p>
          </Link>

          <Link href="/policies/privacy" className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/30 transition-colors">
              <Lock className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Privacy & Internal</h3>
            <p className="text-gray-400">
              Details on our Internal Conduct, NDAs, and how we handle your data.
            </p>
          </Link>
        </div>

        <div className="mt-16 p-8 bg-white/5 border border-white/10 rounded-2xl text-center">
          <p className="text-lg text-gray-300 italic">
            "These policies aren’t just paperwork — they are guidelines for trust. We are a builder's network — creative, human, and rooted in values."
          </p>
        </div>
      </div>
    </main>
  );
}