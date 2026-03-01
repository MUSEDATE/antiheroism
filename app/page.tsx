export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            ANTIHEROISM
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12">
            We build products that challenge conventions and empower individuals.
          </p>
          <div className="w-24 h-px bg-white mx-auto"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">About</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Antiheroism is a technology company focused on creating products that reject traditional narratives 
            and put power back in the hands of users.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            We believe in building tools that are honest, transparent, and designed for real people—not heroes.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Products</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
              <h3 className="text-2xl font-bold mb-4">atpify</h3>
              <p className="text-gray-400">
                Coming soon. A platform that redefines connection.
              </p>
            </div>
            <div className="border border-gray-800 p-8 hover:border-gray-600 transition-colors opacity-50">
              <h3 className="text-2xl font-bold mb-4">More to come</h3>
              <p className="text-gray-400">
                We're building the future, one product at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg text-gray-400 mb-8">
            Interested in what we're building? Let's talk.
          </p>
          <a 
            href="mailto:hello@antiheroism.com" 
            className="inline-block border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2026 Antiheroism. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="https://github.com/MUSEDATE" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
