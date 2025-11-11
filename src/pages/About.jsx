import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <Navbar />
      <main className="pt-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h1 className="text-3xl font-semibold">About IMMERZO</h1>
        <p className="text-gray-300">Founded in 2022 by IIT alumni, IMMERZO builds hyperreality theaters for large-format, social immersion. Our vision is to scale to 10 locations by 2026.</p>

        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">Leadership</h3>
            <ul className="text-gray-300 space-y-1 list-disc pl-5">
              <li>CEO – IIT Alum, 10+ yrs immersive tech</li>
              <li>CTO – IIT Alum, realtime systems</li>
              <li>COO – Ops leader, multi-site rollouts</li>
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">Credibility</h3>
            <ul className="text-gray-300 space-y-1 list-disc pl-5">
              <li>Patent pending on proprietary tracking system</li>
              <li>Press coverage and awards</li>
              <li>ISO certification</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
