import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Invest from './pages/Invest'
import Malls from './pages/Malls'
import Tech from './pages/Tech'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/invest" element={<Invest />} />
      <Route path="/malls" element={<Malls />} />
      <Route path="/tech" element={<Tech />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
