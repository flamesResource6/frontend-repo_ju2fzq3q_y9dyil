import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Tech() {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <Navbar />
      <main className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h1 className="text-3xl font-semibold">Technology</h1>

        <section className="grid md:grid-cols-3 gap-6">
          <Spec title="CAVE System" points={[
            '4K projection mapping on 3 walls + floor',
            '360° motion tracking with sub-5ms latency',
            'Haptic feedback integration',
            'Multi-sensory (wind, scent, temperature)'
          ]} />
          <Spec title="IMMERZO OS" points={[
            'Proprietary control software',
            '12+ experiences with quarterly updates',
            'Remote monitoring & diagnostics',
            'India-optimized content pipeline'
          ]} />
          <Spec title="Competitive Advantage" points={[
            'vs VR Arcades: Social, immersive, no headsets',
            'vs 4DX Cinema: Interactive, repeatable, higher ticket value',
            'vs International Players: India-optimized, local support'
          ]} />
        </section>

        <section className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h2 className="text-xl font-semibold">Experience Library</h2>
          <p className="text-gray-300">Space exploration, underwater, fantasy, and more. New content added quarterly at no extra cost.</p>
          <div className="mt-4 grid sm:grid-cols-3 gap-4">
            {['Space Odyssey','Atlantis Dive','Dragon Run'].map(name => (
              <div key={name} className="aspect-video bg-white/10 border border-white/10 rounded flex items-center justify-center">{name}</div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function Spec({ title, points }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <ul className="text-gray-300 space-y-1 list-disc pl-5">
        {points.map(p => <li key={p}>{p}</li>)}
      </ul>
    </div>
  )
}
