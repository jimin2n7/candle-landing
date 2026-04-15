import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-soot">
      {/* Background image with parallax */}
      <motion.div style={{ scale, y: imgY }} className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Nến thủ công Thắp"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-soot/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-soot/50 via-transparent to-soot" />
      </motion.div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-amber/20"
          style={{
            width: Math.random() * 3 + 2,
            height: Math.random() * 3 + 2,
            left: `${15 + Math.random() * 70}%`,
            top: `${15 + Math.random() * 70}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.15, 0.5, 0.15],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'easeInOut',
          }}
        />
      ))}

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Small label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-8 md:mb-12"
        >
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-px bg-amber/60"
          />
          <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-amber/60">
            Nến thủ công · Mùi hương Việt Nam
          </span>
        </motion.div>

        {/* Main headline */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[clamp(3rem,10vw,9rem)] font-light leading-[0.95] text-cream tracking-tight"
          >
            Thắp sáng
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[clamp(3rem,10vw,9rem)] font-light leading-[0.95] text-cream tracking-tight"
          >
            <span className="italic text-amber">khoảnh khắc</span>
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[clamp(3rem,10vw,9rem)] font-light leading-[0.95] text-cream tracking-tight"
          >
            bình yên
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="text-sm md:text-base text-cream/40 max-w-md leading-relaxed mt-8 md:mt-12 font-light"
        >
          Từng cây nến được làm bằng tay từ sáp đậu nành thiên nhiên,
          mang hương thơm đặc trưng của quê hương Việt Nam.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-5 mt-10 md:mt-14"
        >
          <a
            href="#products"
            className="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden"
          >
            <span className="absolute inset-0 bg-amber translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            <span className="relative text-sm tracking-[0.2em] uppercase text-cream group-hover:text-soot transition-colors duration-500">
              Khám phá bộ sưu tập
            </span>
            <span className="relative text-cream group-hover:text-soot transition-colors duration-500">→</span>
          </a>
          <a
            href="#story"
            className="inline-flex items-center gap-3 px-8 py-4 text-sm tracking-[0.2em] uppercase text-cream/40 hover:text-cream border border-cream/10 hover:border-cream/30 transition-all duration-500"
          >
            Câu chuyện
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-cream/20">Scroll</span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }}
          className="w-px h-12 bg-gradient-to-b from-cream/30 to-transparent"
        />
      </motion.div>

      {/* Side text */}
      <div className="hidden lg:block absolute left-12 top-1/2 -translate-y-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col gap-3 items-center"
        >
          {['Fb', 'Ig', 'Tk'].map((s) => (
            <a key={s} href="#" className="text-[9px] tracking-[0.15em] text-cream/20 hover:text-cream/60 transition-colors duration-500 uppercase">
              {s}
            </a>
          ))}
          <div className="w-px h-16 bg-cream/10 mt-2" />
        </motion.div>
      </div>

      <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-[9px] tracking-[0.2em] text-cream/20 uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          Sài Gòn · 2026
        </motion.span>
      </div>
    </section>
  )
}
