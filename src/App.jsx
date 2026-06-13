import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Home from './components/pages/Home'

export default function AppRoutes() {
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
      duration: 700,
      easing: 'ease-out-cubic',
      offset: 80,
    })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}