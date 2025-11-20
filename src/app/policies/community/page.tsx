import { Heart, ArrowLeft, Users, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Community Standards | RB Entertainment Works',
  description: 'Our Mental Health Policy (M.H.P.) and Non-Discrimination Policy (N.D.P.).',
};

export default function CommunityPage() {
  return (
    <main className="min-h-screen text-white pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link href="/policies" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Policies
          </Link>
          <h1 className="text-4xl font-bold mb-6 flex items-center gap-4">
            <Users className="w-10 h-10 text-pink-500" />
            Community Standards
          </h1>
        </div>

        <div className="space-y-12">
          {/* M.H.P. */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-pink-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">M.H.P. – Mental Health Policy</h2>
            </div>
            <div className="prose prose-invert max-w-none text-gray-300">
              <p className="mb-4">
                We prioritize the well-being of every contributor. We know that creativity doesn’t happen in a vacuum — and that mental health matters.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">VML – Voluntary Mental Health Leave</h3>
                  <p>If you’re struggling, overwhelmed, or need space, you can step back for the rest of the day (minimum) with no judgment.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Extended Leave Recommendations</h3>
                  <p>If your teammates notice you’re struggling, they may recommend a 1–2 day mental health break. This is never a punishment — it’s support.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Return When Ready</h3>
                  <p>If you take leave by your own request, you can return anytime after the minimum rest period, when you feel well enough.</p>
                </div>
              </div>
            </div>
          </section>

          {/* N.D.P. */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-yellow-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">N.D.P. – Non-Discrimination Policy</h2>
            </div>
            <div className="prose prose-invert max-w-none text-gray-300">
              <p className="mb-4">
                RBEW is an inclusive space. No one will be treated unfairly or excluded for who they are — only for how they act.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-black/20 p-4 rounded-xl">
                  <h3 className="font-bold text-white mb-2">Protected Traits</h3>
                  <ul className="list-disc pl-4 space-y-1 text-sm">
                    <li>Gender identity</li>
                    <li>Sexual orientation</li>
                    <li>Race or ethnicity</li>
                    <li>Disability or neurodiversity</li>
                    <li>Religion or cultural background</li>
                  </ul>
                </div>
                <div className="bg-black/20 p-4 rounded-xl">
                  <h3 className="font-bold text-white mb-2">Mutual Respect</h3>
                  <p className="text-sm">
                    Identity should never be used as a weapon in arguments, power struggles, or superiority claims. Disrespect from any side will be addressed fairly.
                  </p>
                </div>
              </div>
              <p className="font-medium text-white italic">
                &ldquo;RBEW is not a space where diversity is tolerated — it is celebrated, as long as it is paired with respect.&rdquo;
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}