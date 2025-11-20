import { Metadata } from "next";
import Link from "next/link";
import { ShoppingBag, ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Store - RBEW | Official Merchandise & Digital Goods",
  description: "Coming Soon: The official RBEW Store. Get exclusive merchandise, digital assets, and support our creative projects.",
};

export default function StorePage() {
  return (
    <div className="min-h-screen pt-32 pb-20 text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10 mb-8 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
          <ShoppingBag className="w-10 h-10 text-white" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
          RBEW <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 pb-2">Store</span>
        </h1>
        
        <p className="text-2xl text-gray-300 mb-4 font-light">
          Something amazing is being built.
        </p>
        
        <p className="text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          We are preparing a collection of exclusive merchandise, digital assets, and limited edition items to support our projects. From apparel to digital collectibles, the RBEW Store will be the hub for fans and creators.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { title: "Official Merch", desc: "Apparel, accessories, and physical goods." },
            { title: "Digital Assets", desc: "Scripts, models, and creative tools." },
            { title: "Support Us", desc: "Directly fund future RBEW projects." }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
              <h3 className="font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/projects"
            className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all hover:scale-105 flex items-center gap-2"
          >
            Explore Projects <ArrowRight className="w-5 h-5" />
          </Link>
          <Link 
            href="/contact"
            className="px-8 py-4 bg-white/5 text-white font-bold rounded-full border border-white/10 hover:bg-white/10 transition-all hover:scale-105"
          >
            Contact for Pre-orders
          </Link>
        </div>

        <div className="mt-16 flex items-center justify-center gap-2 text-sm text-gray-500 uppercase tracking-widest">
          <Clock className="w-4 h-4" />
          <span>Launching Soon</span>
        </div>
      </div>
    </div>
  );
}
