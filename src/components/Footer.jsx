export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid gap-4 md:flex md:items-center md:justify-between">
        <div className="text-sm">
          <span className="text-white font-semibold">IMMERZO</span> © {new Date().getFullYear()} • GSTIN: 29ABCDE1234F1Z5 • Make in India 🇮🇳
        </div>
        <div className="text-sm">Only 3 franchise slots available for 2025 • Early bird: Zero royalty for first 6 months</div>
      </div>
    </footer>
  )
}
