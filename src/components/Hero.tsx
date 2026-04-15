import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.06 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-[15%] right-[10%] w-64 h-64 md:w-96 md:h-96 rounded-full bg-sage"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.04 }}
          transition={{ duration: 2, delay: 0.8 }}
          className="absolute bottom-[20%] left-[5%] w-48 h-48 md:w-72 md:h-72 rounded-full bg-terracotta"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center">
        {/* Small tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xs md:text-sm tracking-[0.3em] uppercase text-bark mb-6 md:mb-8"
        >
          Nến thủ công · Mùi hương Việt Nam
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.1] text-charcoal mb-6 md:mb-8"
        >
          Thắp sáng
          <br />
          <span className="italic text-bark-dark">khoảnh khắc</span>
          <br />
          bình yên
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-base md:text-lg text-charcoal-light max-w-lg mx-auto leading-relaxed mb-10 md:mb-14 font-light"
        >
          Từng cây nến được làm bằng tay từ sáp đậu nành thiên nhiên,
          mang hương thơm đặc trưng của quê hương Việt Nam.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#products"
            className="px-8 py-3.5 bg-bark-dark text-cream text-sm tracking-widest uppercase hover:bg-charcoal transition-colors duration-300"
          >
            Khám phá bộ sưu tập
          </a>
          <a
            href="#story"
            className="px-8 py-3.5 border border-bark text-bark text-sm tracking-widest uppercase hover:bg-bark hover:text-cream transition-all duration-300"
          >
            Câu chuyện của chúng tôi
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase text-bark/50">Cuộn xuống</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-bark/30"
          />
        </motion.div>
      </div>
    </section>
  )
}
