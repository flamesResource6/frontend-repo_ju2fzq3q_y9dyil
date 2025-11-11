import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-6">
            <ValueCard title="For Investors" points={[
              'Ground-Floor Opportunity',
              'Proven Unit Economics',
              'Exclusive Territory Rights',
            ]} cta={<Link to="/invest" className="mt-4 inline-block px-4 py-2 rounded bg-cyan-400 text-black font-semibold">Explore ROI</Link>} />
            <ValueCard title="For Malls" points={[
              'Proven Footfall Driver',
              'Premium Anchor Tenant',
              'Zero Capex Required',
            ]} cta={<Link to="/malls" className="mt-4 inline-block px-4 py-2 rounded bg-white/10 border border-white/20">Partner With Us</Link>} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function ValueCard({ title, points, cta }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <ul className="space-y-2 text-gray-300">
        {points.map((p) => (
          <li key={p}>• {p}</li>
        ))}
      </ul>
      {cta}
    </div>
  )
}
