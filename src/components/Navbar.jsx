import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItem = (to, label) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-cyan-400' : 'text-gray-200 hover:text-white'}`
      }
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-gradient-to-tr from-cyan-400 to-fuchsia-500" />
            <span className="font-semibold tracking-wide text-white">IMMERZO</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {navItem('/', 'Home')}
            {navItem('/invest', 'Invest')}
            {navItem('/malls', 'Malls')}
            {navItem('/tech', 'Technology')}
            {navItem('/about', 'About')}
            {navItem('/contact', 'Contact')}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="p-2 text-white"><Menu /></button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col gap-2">
            {navItem('/', 'Home')}
            {navItem('/invest', 'Invest')}
            {navItem('/malls', 'Malls')}
            {navItem('/tech', 'Technology')}
            {navItem('/about', 'About')}
            {navItem('/contact', 'Contact')}
          </div>
        </div>
      )}
    </header>
  )
}
