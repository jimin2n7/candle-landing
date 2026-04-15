import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const ctaRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ['start end', 'end start'],
  })
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3])

  return (
    <>
      {/* CTA Banner */}
      <section ref={ctaRef} className="relative py-28 md:py-40 bg-bark-dark overflow-hidden">
        {/* Animated glow */}
        <motion.div
          style={{ scale, opacity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-amber/5 blur-[120px] animate-glow" />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[10px] tracking-[0.5em] uppercase text-cream/20 mb-8">Bắt đầu</p>

            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-cream leading-[1.05] mb-8">
              Thắp một cây nến,
              <br />
              <span className="italic text-amber">chậm lại một chút</span>
            </h2>

            <p className="text-cream/30 font-light max-w-md mx-auto mb-12 text-sm md:text-base leading-relaxed">
              Đặt hàng ngay hôm nay và nhận ưu đãi miễn phí vận chuyển cho đơn hàng đầu tiên.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://shopee.vn"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-4 bg-cream text-soot text-xs tracking-[0.25em] uppercase hover:bg-amber transition-colors duration-500"
              >
                Mua trên Shopee
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-4 border border-cream/15 text-cream/60 text-xs tracking-[0.25em] uppercase hover:border-amber/40 hover:text-amber transition-all duration-500"
              >
                Instagram
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative py-16 md:py-24 bg-soot border-t border-cream/5">
        <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8"
          >
            {/* Brand — takes more space */}
            <div className="md:col-span-5">
              <p className="font-serif text-4xl md:text-5xl text-cream mb-4 tracking-wider">Thắp</p>
              <p className="text-sm font-light leading-relaxed text-cream/25 max-w-xs">
                Nến thủ công mùi hương Việt Nam.
                <br />
                Làm bằng tay tại Sài Gòn.
              </p>
            </div>

            {/* Contact */}
            <div className="md:col-span-3 md:col-start-7">
              <p className="text-[9px] tracking-[0.4em] uppercase text-cream/15 mb-6">Liên hệ</p>
              <div className="space-y-3 text-sm font-light text-cream/30">
                <p className="hover:text-cream/60 transition-colors duration-300">hello@thap.vn</p>
                <p className="hover:text-cream/60 transition-colors duration-300">+84 901 234 567</p>
                <p className="hover:text-cream/60 transition-colors duration-300">Quận 1, TP.HCM</p>
              </div>
            </div>

            {/* Social */}
            <div className="md:col-span-3">
              <p className="text-[9px] tracking-[0.4em] uppercase text-cream/15 mb-6">Theo dõi</p>
              <div className="space-y-3">
                {['Instagram', 'Facebook', 'TikTok'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="group flex items-center gap-2 text-sm font-light text-cream/30 hover:text-cream/60 transition-colors duration-300"
                  >
                    <span className="w-0 h-px bg-amber group-hover:w-4 transition-all duration-500" />
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="border-t border-cream/5 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          >
            <p className="text-[10px] tracking-[0.15em] text-cream/15">
              © 2026 Thắp. Tất cả quyền được bảo lưu.
            </p>
            <p className="text-[10px] tracking-[0.15em] text-cream/10">
              Sáp đậu nành · Tinh dầu thiên nhiên · Bấc cotton
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  )
}
