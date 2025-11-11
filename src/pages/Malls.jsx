import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Malls() {
  const [space, setSpace] = useState(2000)

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <Navbar />
      <main className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold">Partner With IMMERZO</h1>
        <p className="text-gray-300 mt-2">Zero-risk revenue share model. We invest, you grow footfall.</p>

        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold">Partnership Model</h2>
              <ul className="text-gray-300 mt-2 space-y-1 list-disc pl-5">
                <li>No setup cost for malls (IMMERZO invests in CAVE infrastructure)</li>
                <li>Revenue share: 70% IMMERZO, 30% Mall</li>
                <li>Minimum space requirement: 1,500–2,500 sq ft</li>
                <li>Average 3–5 year lease term</li>
                <li>Footfall guarantee clause: Minimum 10K visitors/month or reduced revenue share</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Footfall Impact</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <Impact label="Weekend footlift in 3 months" value="+22%" />
                <Impact label="Avg. dwell time increase" value="+45 min" />
                <Impact label="Entertainment zone heat" value="High" />
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Technical Requirements</h3>
              <ul className="text-gray-300 space-y-1 list-disc pl-5">
                <li>Height: 12 ft clear</li>
                <li>Power: 25 kW with dedicated breakers</li>
                <li>Ventilation: HVAC with fresh air</li>
                <li>Floor load: Standard retail acceptable</li>
                <li>Installation timeline: 45–60 days</li>
              </ul>
            </div>
          </div>

          <aside className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="font-semibold">Share Your Space</h3>
            <form action={`${import.meta.env.VITE_BACKEND_URL || ''}/api/mall`} method="POST" encType="multipart/form-data" className="space-y-3">
              <input name="contact_name" placeholder="Contact name" className="w-full bg-black/50 border border-white/10 rounded p-2" required />
              <input type="email" name="email" placeholder="Email" className="w-full bg-black/50 border border-white/10 rounded p-2" required />
              <input name="phone" placeholder="Phone (+91...)" className="w-full bg-black/50 border border-white/10 rounded p-2" required />
              <input name="mall_name" placeholder="Mall name" className="w-full bg-black/50 border border-white/10 rounded p-2" required />
              <input name="location_city" placeholder="City" className="w-full bg-black/50 border border-white/10 rounded p-2" required />
              <div>
                <label className="block text-sm text-gray-300 mb-1">Available space (sq ft)</label>
                <input type="number" name="available_space_sqft" value={space} onChange={(e) => setSpace(Number(e.target.value))} className="w-full bg-black/50 border border-white/10 rounded p-2" />
              </div>
              <textarea name="message" placeholder="Notes" className="w-full bg-black/50 border border-white/10 rounded p-2" rows="3" />
              <div>
                <label className="block text-sm text-gray-300 mb-1">Upload floor plan (PDF/Image)</label>
                <input type="file" name="floorplan" className="w-full" />
              </div>
              <button className="w-full bg-cyan-400 text-black font-semibold rounded p-2">Schedule Site Visit</button>
            </form>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function Impact({ label, value }) {
  return (
    <div className="bg-white/5 rounded-md p-4 border border-white/10">
      <div className="text-xs uppercase tracking-wider text-gray-400">{label}</div>
      <div className="text-lg font-semibold text-white">{value}</div>
    </div>
  )
}
