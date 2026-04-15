import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Sản phẩm', href: '#products' },
  { label: 'Câu chuyện', href: '#story' },
  { label: 'Đánh giá', href: '#testimonials' },
  { label: 'Liên hệ', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-soot/90 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <a href="#" className="relative group">
            <span className="font-serif text-2xl md:text-3xl font-light text-cream tracking-wider">
              Thắp
            </span>
            <motion.span
              className="absolute -bottom-1 left-0 h-px bg-amber w-0 group-hover:w-full transition-all duration-500"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                className="relative group text-xs tracking-[0.25em] uppercase text-cream/50 hover:text-cream transition-colors duration-500"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber group-hover:w-full transition-all duration-500" />
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-xs tracking-[0.25em] uppercase px-6 py-2.5 border border-cream/20 text-cream/70 hover:border-amber hover:text-amber transition-all duration-500"
            >
              Đặt hàng
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-2 p-2 -mr-2 relative w-10 h-10 items-center justify-center"
            aria-label="Menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-7 h-px bg-cream origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              className="block w-7 h-px bg-cream"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-7 h-px bg-cream origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-soot flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-5xl text-cream/80 hover:text-amber transition-colors duration-500"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-4 text-sm tracking-[0.3em] uppercase px-10 py-4 border border-amber/40 text-amber hover:bg-amber hover:text-soot transition-all duration-500"
            >
              Đặt hàng
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
