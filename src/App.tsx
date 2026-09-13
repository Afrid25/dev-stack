import './App.css'
import NavBar from './components/Navbar/NavBar'
import Hero from './components/Hero'
import TechnologySection from './components/TechnologySection'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'

function App() {
 

  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 2200 }} />
      <NavBar />
      <Hero />
      <TechnologySection />
      <Footer />
    </>
  )
}

export default App
