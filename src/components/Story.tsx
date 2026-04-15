import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const values = [
  {
    number: '01',
    title: 'Thiên nhiên',
    text: 'Mỗi cây nến được làm từ 100% sáp đậu nành và tinh dầu thực vật. Không paraffin, không hoá chất độc hại.',
  },
  {
    number: '02',
    title: 'Thủ công',
    text: 'Tất cả nến đều được đổ bằng tay trong xưởng nhỏ tại Sài Gòn. Mỗi cây nến là duy nhất.',
  },
  {
    number: '03',
    title: 'Quê hương',
    text: 'Chúng tôi chọn những mùi hương gắn liền với ký ức Việt Nam — mùi sả sau mưa, cà phê sáng sớm, hoa bưởi đầu hè.',
  },
]

export default function Story() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const y1 = useTransform(scrollYProgress, [0, 1], ['10%', '-10%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

  return (
    <section id="story" ref={sectionRef} className="relative py-24 md:py-40 bg-cream overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 right-0 w-72 h-72 md:w-96 md:h-96 rounded-full bg-amber/5 blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 left-0 w-60 h-60 md:w-80 md:h-80 rounded-full bg-sage/10 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="flex items-center gap-4 mb-12 md:mb-20"
        >
          <motion.span
            initial={{ width: 0 }}
            animate={isInView ? { width: 48 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-px bg-bark/40"
          />
          <span className="text-[10px] tracking-[0.4em] uppercase text-bark/50">Câu chuyện</span>
          <span className="text-[10px] tracking-[0.2em] text-bark/20 ml-auto hidden md:block">03</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: big heading */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-charcoal leading-[1.05] mb-10">
              Từ một góc bếp
              <br />
              <span className="italic text-bark-dark">tới nhà của bạn</span>
            </h2>

            <div className="space-y-5 text-charcoal-light/70 font-light leading-relaxed text-sm md:text-base">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Thắp bắt đầu từ niềm tin rằng những mùi hương giản dị nhất lại có sức chữa lành lớn nhất.
                Một buổi chiều mưa, mùi sả từ bếp nhà — đơn giản vậy thôi, nhưng đủ làm cả ngày mệt mỏi tan biến.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.35 }}
              >
                Chúng tôi bắt đầu làm nến trong góc bếp nhỏ, thử hàng trăm công thức trước khi tìm ra
                sự cân bằng hoàn hảo giữa sáp đậu nành thiên nhiên và tinh dầu Việt Nam.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Mỗi cây nến Thắp không chỉ là một sản phẩm — mà là một lời mời bạn chậm lại,
                hít thở sâu, và tìm về sự bình yên trong chính mình.
              </motion.p>
            </div>
          </motion.div>

          {/* Right: values */}
          <div className="space-y-1">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group relative border-t border-charcoal/10 pt-8 pb-10 hover:bg-bark/[0.03] transition-colors duration-700 px-4 md:px-8 -mx-4 md:-mx-8"
              >
                <div className="flex items-start gap-6 md:gap-10">
                  <span className="font-serif text-5xl md:text-6xl text-charcoal/10 group-hover:text-bark/30 transition-colors duration-700 shrink-0 leading-none">
                    {val.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl text-charcoal mb-3 group-hover:text-bark-dark transition-colors duration-500">
                      {val.title}
                    </h3>
                    <p className="text-sm text-charcoal-light/60 font-light leading-relaxed max-w-sm">
                      {val.text}
                    </p>
                  </div>
                </div>
                {/* Hover accent */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  className="absolute bottom-0 left-0 right-0 h-px bg-bark/20 origin-left"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
