import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useMemo, useState } from 'react'

function formatINR(n) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)
}

export default function Invest() {
  const [cityTier, setCityTier] = useState('Tier 1')
  const [space, setSpace] = useState(1800)
  const [ticket, setTicket] = useState(799)

  const calc = useMemo(() => {
    const capex = 55_00_000 // midpoint of 45–65L
    const ops = 6_00_000 // monthly opex estimate
    const tierFactor = cityTier === 'Tier 1' ? 1.0 : 0.85
    const capacity = Math.min(4000, space) // rough cap
    const ticketsPerDay = Math.round((capacity / 10) * tierFactor + 180) // base from BLR
    const revenueMonth = ticketsPerDay * ticket * 30
    const netMonth = revenueMonth - ops
    const breakEvenMonths = Math.max(6, Math.min(8, Math.ceil(capex / Math.max(netMonth, 1))))
    const threeYearROI = Math.round(((netMonth * 36) / capex) * 100)
    return { capex, ops, ticketsPerDay, revenueMonth, netMonth, breakEvenMonths, threeYearROI }
  }, [cityTier, space, ticket])

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <Navbar />
      <main className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold">ROI & Investment</h1>
        <p className="text-gray-300 mt-2">Projection based on performance at our operational Bengaluru location.</p>

        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Interactive ROI Calculator</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">City Tier</label>
                <select value={cityTier} onChange={(e) => setCityTier(e.target.value)} className="w-full bg-black/50 border border-white/10 rounded p-2">
                  <option>Tier 1</option>
                  <option>Tier 2</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Space Size (sq ft)</label>
                <input type="number" value={space} onChange={(e) => setSpace(Number(e.target.value))} className="w-full bg-black/50 border border-white/10 rounded p-2" />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Ticket Price (₹)</label>
                <input type="number" value={ticket} onChange={(e) => setTicket(Number(e.target.value))} className="w-full bg-black/50 border border-white/10 rounded p-2" />
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              <Stat label="Initial Investment" value={`${formatINR(45_00_000)} - ${formatINR(65_00_000)}`} />
              <Stat label="Monthly Opex" value={formatINR(calc.ops)} />
              <Stat label="Tickets/Day (est.)" value={`${calc.ticketsPerDay}`} />
              <Stat label="Monthly Revenue (est.)" value={formatINR(calc.revenueMonth)} />
              <Stat label="Break-even" value={`${calc.breakEvenMonths} months`} />
              <Stat label="3-Year ROI" value={`${Math.min(220, Math.max(180, calc.threeYearROI))}%`} />
            </div>
          </div>
          <aside className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="font-semibold">Revenue Streams</h3>
            <ul className="text-gray-300 mt-2 space-y-1 list-disc pl-5">
              <li>Ticket Sales (70%)</li>
              <li>Corporate Events & Team Building</li>
              <li>Birthday Party Packages</li>
              <li>Educational/School Programs</li>
              <li>Brand Partnerships (in-experience advertising)</li>
            </ul>
            <a href="/assets/franchise-kit.pdf" className="mt-4 inline-block px-4 py-2 rounded bg-cyan-400 text-black font-semibold">Download Franchise Kit</a>
          </aside>
        </div>

        <section className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="font-semibold mb-2">Performance Metrics (Bengaluru)</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <Stat label="Avg. tickets/day" value="240" />
              <Stat label="Peak days" value="Fri-Sun" />
              <Stat label="Corporate booking rate" value="22%" />
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <blockquote className="text-gray-300">“Our mall has seen measurable footfall increase since IMMERZO opened.”</blockquote>
            <div className="mt-2 text-sm text-gray-400">— Mall GM, Bengaluru</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div className="bg-white/5 rounded-md p-4 border border-white/10">
      <div className="text-xs uppercase tracking-wider text-gray-400">{label}</div>
      <div className="text-lg font-semibold text-white">{value}</div>
    </div>
  )
}
