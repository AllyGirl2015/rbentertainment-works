import { Scale, ArrowLeft, Bot, PenTool } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms & Copyright | RB Entertainment Works',
  description: 'Our Copyright & Ownership Policy (C.O.P.) and AI Exception Policy (A.E.P.).',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen text-white pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link href="/policies" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Policies
          </Link>
          <h1 className="text-4xl font-bold mb-6 flex items-center gap-4">
            <Scale className="w-10 h-10 text-purple-500" />
            Terms & Ownership
          </h1>
        </div>

        <div className="space-y-12">
          {/* C.O.P. */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <PenTool className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">C.O.P. – Copyright & Ownership Policy</h2>
            </div>
            <div className="prose prose-invert max-w-none text-gray-300">
              <p className="mb-4">
                RBEW supports the creative rights of every contributor. We believe in ethical collaboration — not creative theft, exploitation, or silence.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>You own what you create.</strong> All contributors retain the rights to their respective work. RBEW does not claim sole ownership unless a separate agreement is made.</li>
                <li><strong>Removal rights are respected.</strong> If you ask for your content to be removed from a project, RBEW will make strong efforts to do so at the safest possible time to avoid disruption or harm to others involved.</li>
                <li><strong>You will be credited.</strong> Every meaningful contribution will be properly attributed, unless anonymity is requested.</li>
                <li><strong>You will be fairly compensated.</strong> In the event of project monetization, contributors will receive a percentage appropriate to the size and impact of their input.</li>
                <li><strong>Plagiarism is not tolerated.</strong> Any stolen, uncredited, or dishonestly claimed work will result in removal from the project and public disassociation from the offending material.</li>
              </ul>
            </div>
          </section>

          {/* A.E.P. */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                <Bot className="w-6 h-6 text-cyan-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">A.E.P. – AI Exception Policy</h2>
            </div>
            <div className="prose prose-invert max-w-none text-gray-300">
              <p className="mb-4">
                AI can be a tool — but it cannot replace genuine creativity. AI-generated content is not accepted as sole creative work unless:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>It is clearly labeled as AI-generated.</li>
                <li>It is not passed off as original human work.</li>
                <li>Credit is given to the AI tool used (e.g., ChatGPT, MidJourney, etc.).</li>
                <li>AI content is not protected under C.O.P. Any AI-assisted material cannot be claimed as owned unless it’s paired with a human-made creative layer (e.g., voice acting, editing, interpretation).</li>
              </ul>
              <p className="mt-4 font-medium text-white">
                RBEW does not accept copyright claims based solely on AI output.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}