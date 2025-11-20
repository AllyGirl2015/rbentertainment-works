export default function Team() {
  return (
    <section id="team" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Meet the People
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            "We don't work for the future. We work with the people shaping it."
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-black/40 border border-purple-500/30 rounded-3xl p-8 md:p-12 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
            <div className="text-center mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-6xl">
                👤
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                Alissa M.R. Eldridge
              </h3>
              <p className="text-cyan-400 font-medium">
                Founder • Visionary Creator • Storyteller
              </p>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Alissa M.R. Eldridge is the founder and soul behind Reality Builders Entertainment Works—a creative force 
                dedicated to crafting transformative stories across mediums: books, games, audio, and screen.
              </p>
              <p>
                She is also a transgender woman on a journey of personal truth. Her name honors each part of that path: 
                Michael, carried forward as a core part of who she is. Robbin, a soft derivation of Robert, giving flight 
                to her legacy. Alissa, chosen as her true name—the beginning of her real story.
              </p>
              <blockquote className="border-l-4 border-cyan-500 pl-4 italic text-lg">
                "My name is a story. One of survival, rebirth, and becoming who I was always meant to be."
              </blockquote>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              Join the Builders of Reality
            </h3>
            <p className="text-gray-300 mb-8">
              Whether you're a writer, builder, coder, artist, voice talent, or visionary — we believe great stories 
              come from shared dreams, not top-down commands.
            </p>
            <a href="#contact" className="btn-neon-purple inline-flex items-center gap-2">
              Apply to Join
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
