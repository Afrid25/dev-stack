import { Suspense } from 'react'
import './App.css'
import NavBar from './components/Navbar/NavBar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
import TechnologySection, { TechnologyFallback } from './components/TechnologySection'

function App() {
  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 2200 }} />
      <NavBar />
      <Hero />
      <Suspense fallback={<TechnologyFallback />}>
        <TechnologySection />
      </Suspense>
      <Footer />
    </>
  )
}

export default App
