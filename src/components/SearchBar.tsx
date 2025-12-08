'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X, Music2, Disc, User, Gamepad2, Globe, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface SearchResult {
  id: string;
  title: string;
  subtitle: string;
  type: 'album' | 'single' | 'artist' | 'project' | 'page';
  href: string;
  image?: string;
  isExternal?: boolean;
}

// Static data - moved outside component to prevent re-creation
const rrnData: SearchResult[] = [
  // Albums
  { id: 'rrn-1', title: "America's Changed", subtitle: 'Johnathan Gold', type: 'album', href: 'https://www.realityradionetwork.com/store/albums/americas-changed', image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=200&h=200&fit=crop', isExternal: true },
  { id: 'rrn-2', title: 'Heartfelt Rebellion', subtitle: 'Johnathan Gold', type: 'album', href: 'https://www.realityradionetwork.com/store/albums/heartfelt-rebellion', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop', isExternal: true },
  { id: 'rrn-3', title: 'Shattered Peaces', subtitle: 'Mathew Cage', type: 'album', href: 'https://www.realityradionetwork.com/store/albums/shattered-peaces', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=200&h=200&fit=crop', isExternal: true },
  { id: 'rrn-4', title: 'Barefoot Supernova', subtitle: 'Kaira Heartfelt', type: 'album', href: 'https://www.realityradionetwork.com/store/albums/barefoot-supernova', image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=200&h=200&fit=crop', isExternal: true },
  { id: 'rrn-14', title: 'Descend', subtitle: 'Chronix', type: 'album', href: 'https://www.realityradionetwork.com/store/albums/descend', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop', isExternal: true },
  // Singles
  { id: 'rrn-5', title: 'Chaos Country', subtitle: 'Johnathan Gold', type: 'single', href: 'https://www.realityradionetwork.com/store/singles/chaos-country', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop', isExternal: true },
  { id: 'rrn-6', title: "America's Changed", subtitle: 'Johnathan Gold', type: 'single', href: 'https://www.realityradionetwork.com/store/singles/americas-changed', image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=200&h=200&fit=crop', isExternal: true },
  { id: 'rrn-7', title: 'Heartfelt Rebellion', subtitle: 'Johnathan Gold', type: 'single', href: 'https://www.realityradionetwork.com/store/singles/heartfelt-rebellion', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop', isExternal: true },
  { id: 'rrn-8', title: 'World of Gold', subtitle: 'Mathew Cage', type: 'single', href: 'https://www.realityradionetwork.com/store/singles/world-of-gold', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=200&h=200&fit=crop', isExternal: true },
  { id: 'rrn-9', title: 'Fallen Flag', subtitle: 'Mathew Cage', type: 'single', href: 'https://www.realityradionetwork.com/store/singles/fallen-flag', image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=200&h=200&fit=crop', isExternal: true },
  { id: 'rrn-10', title: 'Evil Love', subtitle: 'Kaira Heartfelt', type: 'single', href: 'https://www.realityradionetwork.com/store/singles/evil-love', image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=200&h=200&fit=crop', isExternal: true },
  // Artists
  { id: 'rrn-11', title: 'Johnathan Gold & Guilded Hearts', subtitle: 'Country / Americana', type: 'artist', href: 'https://www.realityradionetwork.com/talent/johnathan-gold', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200&h=200&fit=crop', isExternal: true },
  { id: 'rrn-12', title: 'Mathew Cage', subtitle: 'Alt Rock / Emotional Rock', type: 'artist', href: 'https://www.realityradionetwork.com/talent/mathew-cage', image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=200&h=200&fit=crop', isExternal: true },
  { id: 'rrn-13', title: 'Kaira Heartfelt', subtitle: 'Country-Pop', type: 'artist', href: 'https://www.realityradionetwork.com/talent/kaira-heartfelt', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop', isExternal: true },
  { id: 'rrn-15', title: 'Chronix', subtitle: 'Electronic / Synthwave', type: 'artist', href: 'https://www.realityradionetwork.com/talent/chronix', image: '/Chronix.svg', isExternal: true },
];

const localData: SearchResult[] = [
  { id: 'local-1', title: 'Realism Hit Roleplay', subtitle: 'FiveM Server', type: 'project', href: '/projects/realism-hit-roleplay', image: '/realism-hit-logo.png' },
  { id: 'local-2', title: 'FrameState RP', subtitle: 'Minecraft Framework', type: 'project', href: '/projects/framestate-rp', image: '/framestate-rp.png' },
  { id: 'local-3', title: 'The Pendant Legacy', subtitle: 'Book Trilogy', type: 'project', href: '/projects/pendant-legacy', image: '/a-beautiful-deception.png' },
  { id: 'local-4', title: 'Reality Radio Network', subtitle: 'Music Platform', type: 'project', href: '/projects/reality-radio-network', image: '/RRN_logo.jpg' },
  { id: 'local-5', title: 'Time Police Department', subtitle: 'TV Series Concept', type: 'project', href: '/projects/time-police-department', image: '/time-police-department.png' },
  { id: 'local-6', title: 'About Us', subtitle: 'Our History', type: 'page', href: '/about' },
  { id: 'local-7', title: 'Contact', subtitle: 'Get in Touch', type: 'page', href: '/contact' },
  { id: 'local-8', title: 'Team', subtitle: 'Meet the Creators', type: 'page', href: '/team' },
];

const allSearchData = [...localData, ...rrnData];

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close on outside click  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Filter and search
  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const searchTerm = query.toLowerCase();
    const filtered = allSearchData.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchTerm) ||
        item.subtitle.toLowerCase().includes(searchTerm)
      );
    });

    setResults(filtered.slice(0, 8)); // Limit results
  }, [query]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'album': return <Disc className="w-4 h-4" />;
      case 'single': return <Music2 className="w-4 h-4" />;
      case 'artist': return <User className="w-4 h-4" />;
      case 'project': return <Gamepad2 className="w-4 h-4" />;
      case 'page': return <Globe className="w-4 h-4" />;
      default: return <Search className="w-4 h-4" />;
    }
  };

  const handleSelect = (result: SearchResult) => {
    setIsOpen(false);
    setQuery('');
    if (result.isExternal) {
      window.open(result.href, '_blank');
    } else {
      router.push(result.href);
    }
  };

  return (
    <div ref={searchRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
        aria-label="Search"
      >
        <Search className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-4 w-80 md:w-96 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
          <div className="p-4 border-b border-white/10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects, music, artists..."
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                autoFocus
              />
            </div>
          </div>

          <div className="max-h-[60vh] overflow-y-auto">
            {query.trim() === '' ? (
              <div className="p-8 text-center text-gray-500 text-sm">
                <p>Type to search across RBEW & Reality Radio Network</p>
              </div>
            ) : results.length === 0 ? (
              <div className="p-8 text-center text-gray-500 text-sm">
                <p>No results found</p>
              </div>
            ) : (
              <div className="divide-y divide-white/5">
                {results.map((result) => (
                  <button
                    key={result.id}
                    onClick={() => handleSelect(result)}
                    className="w-full flex items-center gap-3 p-3 hover:bg-white/5 transition-colors text-left group"
                  >
                    <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white/5 flex-shrink-0 flex items-center justify-center">
                      {result.image && !result.image.endsWith('.svg') ? (
                        <Image
                          src={result.image}
                          alt={result.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        getTypeIcon(result.type)
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-medium text-white truncate group-hover:text-cyan-400 transition-colors">
                          {result.title}
                        </h4>
                        {result.isExternal && <ExternalLink className="w-3 h-3 text-gray-500" />}
                      </div>
                      <p className="text-xs text-gray-400 truncate">{result.subtitle}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
