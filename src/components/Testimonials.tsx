import { motion, useInView, useScroll, useTransform } from 'framer-motion'
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
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const x = useTransform(scrollYProgress, [0, 1], ['3%', '-3%'])

  return (
    <section id="testimonials" ref={sectionRef} className="relative py-24 md:py-40 bg-soot overflow-hidden">
      {/* Background */}
      <motion.span
        style={{ x }}
        className="absolute top-10 left-0 font-serif text-[20rem] md:text-[30rem] leading-none text-cream/[0.015] select-none pointer-events-none"
      >
        04
      </motion.span>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.span
              initial={{ width: 0 }}
              animate={isInView ? { width: 48 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-px bg-amber/40"
            />
            <span className="text-[10px] tracking-[0.4em] uppercase text-amber/40">Cảm nhận</span>
          </div>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-cream leading-[1.05]">
            Khách hàng<br />
            <span className="italic text-amber">nói gì</span>
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative border border-cream/5 hover:border-amber/15 p-8 md:p-10 lg:p-12 flex flex-col justify-between bg-soot hover:bg-cream/[0.02] transition-all duration-700"
            >
              {/* Quote number */}
              <span className="absolute top-6 right-8 font-serif text-6xl md:text-7xl text-cream/[0.04] group-hover:text-amber/10 transition-colors duration-700 leading-none select-none">
                &ldquo;
              </span>

              <p className="text-cream/50 font-light leading-relaxed text-sm md:text-base mb-10 flex-1 relative z-10 group-hover:text-cream/70 transition-colors duration-500">
                {t.quote}
              </p>

              <footer className="relative z-10">
                <div className="w-8 h-px bg-amber/30 mb-4 group-hover:w-12 transition-all duration-500" />
                <p className="font-serif text-xl text-cream group-hover:text-amber transition-colors duration-500">
                  {t.name}
                </p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-cream/20 mt-1">
                  {t.title}
                </p>
              </footer>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-amber/0 group-hover:border-amber/30 transition-all duration-700" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-amber/0 group-hover:border-amber/30 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
