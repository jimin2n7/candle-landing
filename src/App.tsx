import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Story from './components/Story'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <Products />
      <Story />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
