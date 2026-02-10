import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Hero />
      <Skills />

      {/* Contact Section Placeholder */}
      <section id="contact" className="py-24 bg-slate-900 border-t border-slate-800 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-display text-white font-bold mb-4">Get In Touch</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Whether you need a content expert, a data analyst, or a full-stack developer,
            I am ready to deliver excellence.
          </p>
          <a href="mailto:kialofrances@gmail.com" className="inline-block px-8 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-full text-white font-semibold transition-colors shadow-lg shadow-cyan-900/20">
            Contact Me
          </a>
        </div>
      </section>

      <footer className="py-8 bg-slate-950 text-center text-slate-600 text-sm border-t border-slate-900/50">
        <p>&copy; {new Date().getFullYear()} Francis Kialo. All rights reserved.</p>
      </footer>
    </main>
  );
}
