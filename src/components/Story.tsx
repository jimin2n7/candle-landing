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
  const imgY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%'])

  return (
    <section id="story" ref={sectionRef} className="relative py-24 md:py-40 bg-cream overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 right-0 w-72 h-72 md:w-96 md:h-96 rounded-full bg-amber/5 blur-3xl"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: image with parallax */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <motion.img
                style={{ y: imgY }}
                src="/images/story.jpg"
                alt="Qu trình làm nến thủ công"
                className="w-full h-[120%] object-cover -top-[10%] absolute"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-cream/30 via-transparent to-transparent" />
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-bark/20" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-bark/20" />
            </div>
          </motion.div>

          {/* Right: text & values */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-charcoal leading-[1.05] mb-8">
              Từ một góc bếp
              <br />
              <span className="italic text-bark-dark">tới nhà của bạn</span>
            </h2>

            <div className="space-y-4 text-charcoal-light/70 font-light leading-relaxed text-sm md:text-base mb-10">
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

            {/* Values */}
            <div className="space-y-1">
              {values.map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.12 }}
                  className="group border-t border-charcoal/10 pt-5 pb-6 hover:bg-bark/[0.03] transition-colors duration-700 px-4 -mx-4"
                >
                  <div className="flex items-start gap-5">
                    <span className="font-serif text-3xl text-charcoal/10 group-hover:text-bark/30 transition-colors duration-700 shrink-0 leading-none">
                      {val.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-charcoal mb-1.5 group-hover:text-bark-dark transition-colors duration-500">
                        {val.title}
                      </h3>
                      <p className="text-xs md:text-sm text-charcoal-light/60 font-light leading-relaxed">
                        {val.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
