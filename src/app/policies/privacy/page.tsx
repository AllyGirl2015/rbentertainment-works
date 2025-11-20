import { Lock, ArrowLeft, FileSignature, EyeOff } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy & Internal Conduct | RB Entertainment Works',
  description: 'Internal Conduct, NDAs, and Privacy Policy.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen text-white pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link href="/policies" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Policies
          </Link>
          <h1 className="text-4xl font-bold mb-6 flex items-center gap-4">
            <Lock className="w-10 h-10 text-cyan-500" />
            Privacy & Internal Conduct
          </h1>
        </div>

        <div className="space-y-12">
          {/* Internal Conduct */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                <FileSignature className="w-6 h-6 text-cyan-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Internal Conduct & NDAs</h2>
            </div>
            <div className="prose prose-invert max-w-none text-gray-300">
              <p className="mb-4">
                Trust is the currency of collaboration. To protect our stories and our team, we maintain strict internal conduct guidelines.
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong>Non-Disclosure Agreement (NDA):</strong> All active contributors are required to sign a lightweight NDA covering confidential materials, unreleased works, and team discussions.
                </li>
                <li>
                  <strong>Trusted Sharing:</strong> You may discuss projects with trusted friends or family, as long as it does not lead to leaks, reposting, or derivative projects.
                </li>
              </ul>
            </div>
          </section>

          {/* General Privacy */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <EyeOff className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">General Privacy Policy</h2>
            </div>
            <div className="prose prose-invert max-w-none text-gray-300">
              <p className="mb-4">
                We respect your digital privacy. When you visit our site or join our community:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We do not sell your personal data to third parties.</li>
                <li>Any information collected (email, discord ID) is used solely for communication and project coordination.</li>
                <li>We use standard cookies to ensure the website functions correctly.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}