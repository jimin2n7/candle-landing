import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <>
      {/* CTA Banner */}
      <section className="py-20 md:py-28 bg-bark-dark text-cream">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-cream/50 mb-4">Bắt đầu</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
              Thắp một cây nến,
              <br />
              <span className="italic">chậm lại một chút</span>
            </h2>
            <p className="text-cream/60 font-light max-w-md mx-auto mb-10">
              Đặt hàng ngay hôm nay và nhận ưu đãi miễn phí vận chuyển cho đơn hàng đầu tiên.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://shopee.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-cream text-bark-dark text-sm tracking-widest uppercase hover:bg-cream-dark transition-colors duration-300"
              >
                Mua trên Shopee
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 border border-cream/30 text-cream text-sm tracking-widest uppercase hover:bg-cream/10 transition-colors duration-300"
              >
                Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 md:py-16 bg-soot text-cream/60">
        <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8"
          >
            {/* Brand */}
            <div>
              <p className="font-serif text-2xl text-cream mb-3">Thắp</p>
              <p className="text-sm font-light leading-relaxed max-w-xs">
                Nến thủ công mùi hương Việt Nam.
                <br />
                Làm bằng tay tại Sài Gòn.
              </p>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-cream/40 mb-4">Liên hệ</p>
              <div className="space-y-2 text-sm font-light">
                <p>hello@thap.vn</p>
                <p>+84 901 234 567</p>
                <p>Quận 1, TP.HCM</p>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-cream/40 mb-4">Theo dõi</p>
              <div className="flex gap-6">
                {['Instagram', 'Facebook', 'TikTok'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-sm font-light hover:text-cream transition-colors duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="border-t border-cream/10 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-cream/30">
              © 2026 Thắp. Tất cả quyền được bảo lưu.
            </p>
            <p className="text-xs text-cream/30">
              Sáp đậu nành · Tinh dầu thiên nhiên · Bấc cotton
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
