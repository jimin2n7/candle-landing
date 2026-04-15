import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const values = [
  {
    title: 'Thiên nhiên',
    text: 'Mỗi cây nến được làm từ 100% sáp đậu nành và tinh dầu thực vật. Không paraffin, không hoá chất độc hại.',
  },
  {
    title: 'Thủ công',
    text: 'Tất cả nến đều được đổ bằng tay trong xưởng nhỏ tại Sài Gòn. Mỗi cây nến là duy nhất.',
  },
  {
    title: 'Quê hương',
    text: 'Chúng tôi chọn những mùi hương gắn liền với ký ức Việt Nam — mùi sả sau mưa, cà phê sáng sớm, hoa bưởi đầu hè.',
  },
]

export default function Story() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="story" className="py-20 md:py-32 bg-cream-dark">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-bark mb-4">Câu chuyện</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-6 leading-tight">
              Từ một góc bếp
              <br />
              <span className="italic">tới nhà của bạn</span>
            </h2>
            <div className="space-y-4 text-charcoal-light font-light leading-relaxed">
              <p>
                Thắp bắt đầu từ niềm tin rằng những mùi hương giản dị nhất lại có sức chữa lành lớn nhất.
                Một buổi chiều mưa, mùi sả từ bếp nhà — đơn giản vậy thôi, nhưng đủ làm cả ngày mệt mỏi tan biến.
              </p>
              <p>
                Chúng tôi bắt đầu làm nến trong góc bếp nhỏ, thử hàng trăm công thức trước khi tìm ra
                sự cân bằng hoàn hảo giữa sáp đậu nành thiên nhiên và tinh dầu Việt Nam.
              </p>
              <p>
                Mỗi cây nến Thắp không chỉ là một sản phẩm — mà là một lời mời bạn chậm lại,
                hít thở sâu, và tìm về sự bình yên trong chính mình.
              </p>
            </div>
          </motion.div>

          {/* Right: values */}
          <div className="space-y-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <div className="border border-sand p-6 md:p-8 hover:border-bark/30 transition-colors duration-500">
                  <div className="flex items-start gap-4">
                    <span className="font-serif text-3xl text-bark/30 group-hover:text-bark/60 transition-colors duration-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-charcoal mb-2">{val.title}</h3>
                      <p className="text-sm text-charcoal-light font-light leading-relaxed">{val.text}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
