import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div>
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs sm:text-sm mb-4">India's First Hyperreality Theater</p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight max-w-4xl">
            Proven Concept, Ready to Scale
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl">
            Cinematic, social, headset-free immersion powered by our CAVE system. Operating successfully in Bengaluru.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/invest" className="bg-cyan-400 hover:bg-cyan-300 text-black font-semibold px-5 py-3 rounded-md">Invest in First Franchise</Link>
            <Link to="/malls" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-md border border-white/20">Partner Your Mall</Link>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-gray-200">
            <Stat label="Operational Since" value="June, 2023" />
            <Stat label="Current Location" value="Phoenix Marketcity, Bengaluru" />
            <Stat label="Avg. Daily Footfall" value="1,800" />
            <Stat label="MoM Growth" value="18%" />
          </div>
        </div>
      </div>
    </section>
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
