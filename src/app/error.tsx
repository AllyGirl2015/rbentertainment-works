'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 text-transparent bg-clip-text">
          Timeline Paradox Detected
        </h1>
        <h2 className="text-2xl font-bold mb-4 text-white">
          Something went wrong in this reality
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Our Time Police are investigating the anomaly. In the meantime, you can try to reset this timeline or return to a stable reality.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
          >
            Reset Timeline
          </button>
          <Link
            href="/"
            className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Return Home
          </Link>
        </div>
        {error.digest && (
          <p className="text-sm text-gray-500 mt-8">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
