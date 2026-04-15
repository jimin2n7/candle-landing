import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    quote: 'Mùi sả chanh khiến cả phòng khách như một góc vườn. Mỗi tối thắp nến là mình thấy bình yên hẳn.',
    name: 'Minh Anh',
    title: 'Giáo viên, TP.HCM',
  },
  {
    quote: 'Mua tặng mẹ bộ nến cà phê. Mẹ nói mùi giống hệt quán cóc hồi xưa ba hay dẫn đi. Cả nhà cười.',
    name: 'Hoàng Nam',
    title: 'Kỹ sư, Hà Nội',
  },
  {
    quote: 'Mình để nến bưởi trong phòng tắm, tắm xong thấy như vừa đi spa. Đã đặt lần thứ 3 rồi!',
    name: 'Thanh Trúc',
    title: 'Freelancer, Đà Nẵng',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-bark mb-4">Cảm nhận</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-charcoal">
            Khách hàng <span className="italic">nói gì</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="border border-sand p-6 md:p-8 flex flex-col justify-between hover:border-bark/30 transition-colors duration-500"
            >
              {/* Quote mark */}
              <div className="mb-4">
                <span className="font-serif text-5xl text-bark/15 leading-none">"</span>
              </div>
              <p className="text-charcoal font-light leading-relaxed mb-6 flex-1">
                {t.quote}
              </p>
              <footer>
                <p className="font-serif text-lg text-charcoal">{t.name}</p>
                <p className="text-xs tracking-wide text-bark/50 mt-0.5">{t.title}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
