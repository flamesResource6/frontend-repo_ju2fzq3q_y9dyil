import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Contact() {
  const [purpose, setPurpose] = useState('franchise')
  const [otpSent, setOtpSent] = useState(false)
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')

  const backend = import.meta.env.VITE_BACKEND_URL || ''

  async function sendOTP(e) {
    e.preventDefault()
    const res = await fetch(`${backend}/api/otp/start`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ phone, purpose }) })
    const data = await res.json()
    if (data.success) setOtpSent(true)
    alert(data.message + (data.demo_code ? ` (demo OTP: ${data.demo_code})` : ''))
  }

  async function submit(e) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const path = purpose === 'mall' ? '/api/mall' : '/api/franchise'
    let res
    if (purpose === 'mall') {
      res = await fetch(`${backend}${path}`, { method: 'POST', body: fd })
    } else {
      const body = Object.fromEntries(fd.entries())
      res = await fetch(`${backend}${path}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
        full_name: body.full_name,
        email: body.email,
        phone: body.phone,
        investment_capacity_lakhs: Number(body.investment_capacity_lakhs || 0),
        preferred_cities: body.preferred_cities,
        city_tier: body.city_tier,
        message: body.message,
        otp_code: code || undefined,
      }) })
    }
    const json = await res.json()
    if (json.success) alert('Submitted successfully!')
  }

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <Navbar />
      <main className="pt-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h1 className="text-3xl font-semibold">Contact Us</h1>
        <p className="text-gray-300">Schedule a site visit to our working model in Bengaluru, or request the Franchise Kit. WhatsApp: +91-90XXXXXX00</p>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <div className="flex gap-4 mb-4">
            <button onClick={() => setPurpose('franchise')} className={`px-3 py-2 rounded ${purpose==='franchise' ? 'bg-cyan-400 text-black' : 'bg-white/10'}`}>Franchise Inquiry</button>
            <button onClick={() => setPurpose('mall')} className={`px-3 py-2 rounded ${purpose==='mall' ? 'bg-cyan-400 text-black' : 'bg-white/10'}`}>Mall Partnership</button>
          </div>

          <form onSubmit={submit} className="space-y-3" encType="multipart/form-data">
            {purpose === 'franchise' ? (
              <>
                <input name="full_name" placeholder="Full name" className="w-full bg-black/50 border border-white/10 rounded p-2" required />
                <input type="email" name="email" placeholder="Email" className="w-full bg-black/50 border border-white/10 rounded p-2" required />
                <input name="phone" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Phone (+91...)" className="w-full bg-black/50 border border-white/10 rounded p-2" required />
                <input name="investment_capacity_lakhs" placeholder="Investment capacity (₹ lakhs)" className="w-full bg-black/50 border border-white/10 rounded p-2" />
                <input name="preferred_cities" placeholder="Preferred cities (Mumbai, Delhi, Pune...)" className="w-full bg-black/50 border border-white/10 rounded p-2" />
                <select name="city_tier" className="w-full bg-black/50 border border-white/10 rounded p-2">
                  <option>Tier 1</option>
                  <option>Tier 2</option>
                </select>
              </>
            ) : (
              <>
                <input name="contact_name" placeholder="Contact name" className="w-full bg-black/50 border border-white/10 rounded p-2" required />
                <input type="email" name="email" placeholder="Email" className="w-full bg-black/50 border border-white/10 rounded p-2" required />
                <input name="phone" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Phone (+91...)" className="w-full bg-black/50 border border-white/10 rounded p-2" required />
                <input name="mall_name" placeholder="Mall name" className="w-full bg-black/50 border border-white/10 rounded p-2" required />
                <input name="location_city" placeholder="City" className="w-full bg-black/50 border border-white/10 rounded p-2" required />
                <input type="number" name="available_space_sqft" placeholder="Available space (sq ft)" className="w-full bg-black/50 border border-white/10 rounded p-2" />
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Upload floor plan (PDF/Image)</label>
                  <input type="file" name="floorplan" className="w-full" />
                </div>
              </>
            )}

            <div className="flex gap-2 items-end">
              <div className="flex-1">
                <label className="block text-sm text-gray-300 mb-1">OTP</label>
                <input value={code} onChange={e=>setCode(e.target.value)} placeholder="Enter OTP" className="w-full bg-black/50 border border-white/10 rounded p-2" />
              </div>
              <button onClick={sendOTP} className="px-3 py-2 rounded bg-white/10 border border-white/20">Send OTP</button>
            </div>

            <button className="w-full bg-cyan-400 text-black font-semibold rounded p-2">Submit</button>
          </form>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Office Location</h2>
          <div className="aspect-video bg-white/10 border border-white/10 rounded flex items-center justify-center">Map Embed</div>
          <div className="text-gray-300 mt-2">HQ: Bengaluru, India</div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
