import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Story from './components/Story'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import Marquee from './components/Marquee'

function App() {
  return (
    <div className="min-h-screen bg-soot noise-overlay">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Marquee />
      <Products />
      <Story />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
