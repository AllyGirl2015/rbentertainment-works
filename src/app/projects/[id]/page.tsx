import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Target, Sparkles, BookOpen, Send } from "lucide-react";

import Image from "next/image";

interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string[];
  tags: string[];
  status: string;
  image?: string;
  links?: {
    website?: string;
    discord?: string;
  };
  features?: {
    category: string;
    items: string[];
  }[];
  goals?: string[];
  books?: {
    title: string;
    author: string;
    status: string;
    description: string;
    genre: string;
  }[];
}

const projectsData: Record<string, ProjectData> = {
  "realism-hit-roleplay": {
    id: "realism-hit-roleplay",
    title: "Realism Hit Roleplay",
    subtitle: "FiveM Roleplay Server",
    description: "A hyper-realistic GTA-based roleplay world featuring layered law systems, superhuman regulation, advanced aviation, and a living city infrastructure.",
    image: "/realism-hit-logo.png",
    fullDescription: [
      "Realism Hit Roleplay is an immersive FiveM-based roleplay server designed to bring cinematic realism, multi-layered storytelling, and dynamic player interaction into one persistent, evolving world.",
      "Blending real-world systems with fictional world-building, RHRP invites players to live out careers, stories, and lives across law enforcement, criminal empires, emergency services, government factions, civilian life — and even superhuman narratives.",
      "At its heart, RHRP is about giving players freedom to build, explore, and shape a fully realized society where actions matter, decisions have weight, and choices ripple across the world.",
    ],
    tags: ["GTA V", "FiveM", "QB-Core", "Roleplay", "Superhuman", "Aviation"],
    status: "Beta Development",
    links: {
      website: "https://www.realitycentral.net",
      discord: "https://discord.gg/R27pqnfp5v",
    },
    goals: [
      "Create a hyper-realistic yet accessible RP server for all roleplayer types",
      "Bridge grounded realism with immersive world-building, including supernatural and sci-fi elements",
      "Deliver a free-to-join experience that doesn't rely on paywalls or donation-based gates",
      "Build a long-term, evolving server infrastructure — supported by player input, dedicated moderation, and deep storytelling",
      "Use realitycentral.net as the central hub for news, updates, community guides, and documentation",
    ],
    features: [
      {
        category: "🌆 World Design",
        items: [
          "Expanded map zones: Sandy Shores, Paleto Bay, Liberty City, Vice City, North Yankton, and more",
          "Custom minimap and postal code systems",
          "Dynamic interiors, custom shells, and secret locations for immersive storytelling",
        ],
      },
      {
        category: "🚔 Law & Order",
        items: [
          "Multiple agencies including SSSO, LSPD, SAHP, BCSO, SGA, SHIELD, MIB, and more",
          "Realistic penal code systems by jurisdiction (city, county, state, federal)",
          "Fully detailed superhuman regulation laws (UN-MHRA) and the Super Response Protocol (SRP)",
        ],
      },
      {
        category: "🦸‍♀️ Superhuman Integration",
        items: [
          "Licensed hero/villain framework with balance, accountability, and deep lore",
          "Asset management via Humane Labs for restricted vehicles, weapons, and tech",
          "Enhanced systems for event-level powers and ethical RP control",
        ],
      },
      {
        category: "✈️ Infrastructure & Realism",
        items: [
          "Realistic aviation systems: ATC, squawk codes, flight radar, transponders",
          "Custom vehicular systems including damage, fuel, and crash logic",
          "Job systems: trucking, bus driving, towing, government roles, and more",
        ],
      },
      {
        category: "🌐 Player Interaction",
        items: [
          "vMenu and QBCore hybrid compatibility",
          "Custom door locking and property systems",
          "Discord-based permissions tied to verified roles for streamlined access",
        ],
      },
    ],
  },
  "framestate-rp": {
    id: "framestate-rp",
    title: "FrameState RP",
    subtitle: "Minecraft Roleplay Framework",
    description: "A one-of-a-kind Minecraft roleplay experience blending realistic infrastructure with fantasy elements - built as a redistributable framework.",
    image: "/framestate-rp.png",
    fullDescription: [
      "FrameState RP is not just a Minecraft RP server — it's the foundation of an entire roleplay development platform. Inspired by the modular power of FiveM, FrameState is being built as a developer-friendly RP framework.",
      "Designed for Minecraft Bedrock Edition, FrameState focuses on maximum compatibility, easy distribution, and creative depth — all with minimal external mod dependencies.",
      "It will eventually ship as a standalone installable framework with core systems, sample maps, and scripts, allowing others to build and host their own FrameState-powered servers.",
    ],
    tags: ["Minecraft", "Bedrock", "Framework", "RP Engine", "Modular"],
    status: "Early Development",
    links: {
      discord: "https://discord.gg/H8VderVNzc",
    },
    goals: [
      "Build a full RP engine inside Minecraft — inspired by FiveM but tailored for block-based creativity",
      "Develop a customizable, redistributable framework that others can install, run, and expand",
      "Maintain vanilla compatibility to keep it accessible for console and mobile players",
      "Blend real-world systems (jobs, laws, infrastructure) with creative fiction (powers, multiverses, secret factions)",
      "Provide dev tools and hooks for future communities to build their own FrameState RP networks",
    ],
    features: [
      {
        category: "🧱 Framework Capabilities",
        items: [
          "Installable core files with scripted systems and visual asset support",
          "Custom folders for jobs, districts, powers, events, factions, and vehicles",
          "Developer hooks for creating quests, player data tracking, city progression, and more",
          "Support for both online multiplayer and LAN/singleplayer usage",
        ],
      },
      {
        category: "🌍 World Building",
        items: [
          "Realistic city layout with zones for crime, commerce, housing, and schooling",
          "Planned schools like UA Academy, tech labs, and heroic institutions",
          "Metro and air traffic systems, power grids, and disaster frameworks in development",
        ],
      },
      {
        category: "🏛 Role & Power Systems",
        items: [
          "Default RP career tree: police, EMT, delivery, government, education, and black-market roles",
          "Randomized power assignment system (quirk-style) with player-driven evolution",
          "Tech-based, supernatural, and legacy-based paths for 'non-powered' characters",
          "Optional restrictions and cooldowns to encourage RP over chaos",
        ],
      },
      {
        category: "🔊 Voice Integration",
        items: [
          "Discord bot-powered voice chat systems for proximity, radio, calls, and broadcast",
          "Support for 'phone emulation,' faction channels, and secure lines",
        ],
      },
    ],
  },
  "pendant-legacy": {
    id: "pendant-legacy",
    title: "The Pendant Legacy",
    subtitle: "Book Trilogy",
    description: "A deeply emotional, transformation-centered trilogy exploring identity, self-worth, and love in a world where reality can shift with a single gift.",
    image: "/a-beautiful-deception.png",
    fullDescription: [
      "The Pendant Legacy is a groundbreaking trilogy that explores transformation, identity, and the nature of reality itself through the lens of deeply personal storytelling.",
      "Written by Alissa M.R. Eldridge, these books blend magical realism with emotional drama to create stories that resonate on multiple levels — as entertainment, as representation, and as truth.",
    ],
    tags: ["Novel", "LGBTQ+", "Transformation", "Drama", "Magical Realism"],
    status: "Book 1 Published, Book 2 In Progress",
    books: [
      {
        title: "A Beautiful Deception",
        author: "Alissa M.R. Eldridge",
        status: "Published on KDP (IngramSpark Coming Soon)",
        genre: "Transformation Drama · Magical Realism · Emotional Identity Fiction",
        description: "When Mat receives a mysterious pendant from a close friend, he's thrust into a world where reality reshapes around him — and within him. Transformed into a young Latina woman named Isabel, Mat must navigate the emotional labyrinth of identity, memory, and self-worth while the world insists she has always been this way. Only one person remembers the truth… and even that memory is beginning to fade. A Beautiful Deception is a powerful, emotionally raw story about change, love, and the price of becoming who you never expected to be.",
      },
      {
        title: "A Changed Parent",
        author: "Alissa M.R. Eldridge",
        status: "In Progress",
        genre: "Transformation Drama · Family Fiction · Emotional Realism",
        description: "Isabel never imagined parenthood would become part of her rewritten life — especially not so soon after learning how to live in her own skin. But when she becomes the mother of a newborn daughter, Rosa, she must discover how to nurture another life while still healing her own. Supported by her partner Gabriel, her loving family, and the woman whose name her daughter now carries, Isabel begins to understand the power of generational love, legacy, and chosen transformation. A Changed Parent is a heartfelt exploration of identity, family, and the quiet strength it takes to be both a daughter and a mother.",
      },
      {
        title: "Return of the Pendant",
        author: "Alissa M.R. Eldridge",
        status: "Coming Soon",
        genre: "Transformation Drama · Fantasy · Conclusion",
        description: "The final chapter in Isabel's journey. Details to be revealed.",
      },
    ],
  },
  "time-police-department": {
    id: "time-police-department",
    title: "Time Police Department",
    subtitle: "Sci-Fi Show Series",
    description: "A sci-fi drama about agents patrolling multiversal timelines, uncovering crimes and cosmic conspiracies across the multiverse.",
    image: "/time-police-department.png",
    fullDescription: [
      "Time Police Department (TPD) is a multiverse-spanning sci-fi epic built around a single impossible mission: protecting the timeline from itself.",
      "Combining the existential weight of Detroit: Become Human with the mind-bending twists of Doctor Who and Loki, TPD follows a tactical organization that monitors reality's fractures — and the unstable beings who try to break it.",
      "Each episode weaves personal struggle, paradox law, and high-stakes investigation, following field agents assigned to correct anomalies across diverging realities. But some timelines fight back. And some truths… weren't meant to be remembered.",
    ],
    tags: ["TV Series", "Sci-Fi", "Multiverse", "Time Travel", "Drama"],
    status: "Pilot Complete, Season Arcs Plotted",
    features: [
      {
        category: "🕵️‍♂️ Characters & Divisions",
        items: [
          "Agents like Jean A-2015 and Jean A-143 — reflections of morality across diverging fates",
          "TPD is split into units (Field, Observation, Reset, Blackout) each with unique duties and protocols",
          "Time travel tech includes anchor watches, temporal seals, and paradox engines",
        ],
      },
      {
        category: "⌛ Chrono Law & Universe Structure",
        items: [
          "The Prime Directive of Time: no timeline may be corrected for personal gain",
          "Temporal crimes are categorized from Class-1 to Blackout Events",
          "Paradox offenders may be wiped, sealed in chronal cells, or… recruited",
        ],
      },
      {
        category: "🌌 Narrative Format",
        items: [
          "Each episode focuses on a new temporal threat — weaving in season-long arcs",
          "Background threads explore TPD's possible corruption, rogue agents, and forgotten histories",
          "Pilot script complete with season arcs plotted through Season 7",
        ],
      },
    ],
  },
  "reality-radio-network": {
    id: "reality-radio-network",
    title: "Reality Radio Network",
    subtitle: "Internet Radio & Music Platform",
    description: "The future of music starts here. Original artists with real emotion. Discover authentic sound, unique personas, and the next generation of music at Reality Radio Network.",
    image: "/RRN_logo.jpg",
    fullDescription: [
      "The Reality Radio Network is more than a group of radio stations. It's a movement. A heartbeat. A voice for the real.",
      "Powered by RBEW. Built from Passion, Driven by Purpose.",
      "Whether it's country, rock, rap, pop, or something wildly experimental… RRN gives sound to the stories that need to be heard. From heartfelt anthems to rebellious truths, we curate what matters."
    ],
    tags: ["Music", "Radio", "AI Artists", "Streaming", "Original Content"],
    status: "Live",
    links: {
      website: "https://www.realityradionetwork.com",
    },
    features: [
      {
        category: "🎵 Core Experience",
        items: [
          "22+ original artists with unique personas and backstories",
          "9 radio stations covering diverse genres",
          "Authentic sound driven by real emotion and storytelling"
        ]
      },
      {
        category: "🚀 The Vision",
        items: [
          "Giving sound to stories that need to be heard",
          "From heartfelt anthems to rebellious truths",
          "A platform for the next generation of music"
        ]
      }
    ]
  },
  "virtual-guardians": {
    id: "virtual-guardians",
    title: "Virtual Guardians",
    subtitle: "Digital Action Series",
    description: "A reverse-Tron meets Glitch Techs world where digital warriors enter corrupted networks and battle AI-born threats.",
    fullDescription: [
      "Virtual Guardians is a groundbreaking animated series concept that explores the intersection of digital reality and human emotion.",
      "In this world, digital warriors enter corrupted networks and battle AI-born threats using powers formed from trauma, memory, and creativity.",
      "It's a psychological action series that crosses into reality like nothing else — where the digital and emotional worlds collide.",
    ],
    tags: ["Animation", "Sci-Fi", "Psychological", "Action", "Digital"],
    status: "Pre-Production",
    features: [
      {
        category: "💻 Core Concepts",
        items: [
          "Digital & emotional power systems that reflect inner struggles",
          "Themed transformation and agency identity",
          "Psychological tones meet sci-fi action",
          "Reverse-Tron aesthetic — humans entering the digital realm",
        ],
      },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(projectsData).map((id) => ({
    id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = projectsData[params.id];

  if (!project) {
    return {
      title: "Project Not Found - RBEW",
    };
  }

  return {
    title: `${project.title} - RBEW Projects`,
    description: project.description,
    openGraph: {
      title: `${project.title} - ${project.subtitle}`,
      description: project.description,
      url: `https://rbew.com/projects/${project.id}`,
      type: "website",
    },
  };
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projectsData[params.id];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center text-gray-400 hover:text-white mb-12 transition-colors group"
        >
          <span className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 mr-3 transition-colors">
            ←
          </span>
          Back to All Projects
        </Link>

        {/* Project Image Banner */}
        {project.image && (
          <div className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          </div>
        )}

        {/* Header */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-white">
                {project.title}
              </h1>
              <p className="text-2xl text-cyan-300 font-light tracking-wide">{project.subtitle}</p>
            </div>
            <span className="px-6 py-2 rounded-full text-sm font-bold bg-purple-500/10 text-purple-300 border border-purple-400/20 whitespace-nowrap self-start">
              {project.status}
            </span>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-white/5 text-gray-300 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.links && (
            <div className="flex flex-wrap gap-4">
              {project.links.website && (
                <a
                  href={project.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  🌐 Visit Website
                </a>
              )}
              {project.links.discord && (
                <a
                  href={project.links.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white/10 border border-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  💬 Join Discord
                </a>
              )}
            </div>
          )}
        </div>

        {/* Description */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 mb-12 shadow-2xl">
          <h2 className="text-3xl font-bold mb-6 text-white border-b border-white/10 pb-4">About This Project</h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
            {project.fullDescription.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Goals */}
        {project.goals && (
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-3xl p-10 border border-blue-500/20 mb-12">
            <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
              <Target className="w-7 h-7 text-blue-400" />
              Project Goals
            </h2>
            <ul className="grid md:grid-cols-2 gap-6">
              {project.goals.map((goal, index) => (
                <li key={index} className="flex items-start text-gray-300 bg-black/20 p-4 rounded-xl border border-white/5">
                  <span className="text-blue-400 mr-4 mt-1 text-xl">✓</span>
                  <span className="leading-relaxed">{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Features */}
        {project.features && (
          <div className="space-y-8 mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-8 flex items-center justify-center gap-3">
              <Sparkles className="w-8 h-8 text-yellow-400" />
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {project.features.map((featureGroup, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-colors"
                >
                  <h3 className="text-2xl font-bold mb-6 text-blue-300">{featureGroup.category}</h3>
                  <ul className="space-y-4">
                    {featureGroup.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-300">
                        <span className="text-purple-400 mr-3 mt-1.5">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Books (for Pendant Legacy) */}
        {project.books && (
          <div className="space-y-8 mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-8 flex items-center justify-center gap-3">
              <BookOpen className="w-8 h-8 text-purple-400" />
              The Trilogy
            </h2>
            <div className="grid gap-8">
              {project.books.map((book, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-3xl p-8 md:p-10 border border-purple-500/20 relative overflow-hidden group hover:border-purple-500/40 transition-colors"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-500/20 transition-colors duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">{book.title}</h3>
                        <p className="text-purple-300 font-medium">by {book.author}</p>
                      </div>
                      <span className="px-4 py-2 rounded-full text-sm font-bold bg-purple-500/20 text-purple-300 border border-purple-400/30 whitespace-nowrap self-start">
                        {book.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-6 font-mono uppercase tracking-wider">{book.genre}</p>
                    <p className="text-gray-300 leading-relaxed text-lg">{book.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl p-12 border border-blue-400/30 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:32px_32px]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Interested in This Project?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Want to learn more, contribute, or collaborate? We&apos;d love to have you on board.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              <Send className="w-5 h-5" />
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
