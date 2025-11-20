import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          404
        </h1>
        <h2 className="text-3xl font-bold mb-4 text-white">
          Reality Not Found
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
          Looks like this timeline doesn&apos;t exist... yet. Let&apos;s get you back to a reality we&apos;ve already built.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
          >
            Return Home
          </Link>
          <Link
            href="/projects"
            className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
