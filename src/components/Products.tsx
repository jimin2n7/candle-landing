import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const products = [
  {
    name: 'Sả Chanh',
    english: 'Lemongrass',
    description: 'Hương thơm tươi mát, giúp thanh lọc không khí và xoa dịu tinh thần sau một ngày dài.',
    notes: ['Sả', 'Chanh', 'Gừng nhẹ'],
    burnTime: '40-45 giờ',
    price: '285.000',
    number: '01',
  },
  {
    name: 'Cà Phê Buôn Mê',
    english: 'Highland Coffee',
    description: 'Mùi cà phê đậm đà, ấm áp như sáng sớm tại một quán cóc ở Buôn Ma Thuột.',
    notes: ['Robusta', 'Sô-cô-la đen', 'Vanilla'],
    burnTime: '40-45 giờ',
    price: '315.000',
    number: '02',
  },
  {
    name: 'Bưởi & Bạc Hà',
    english: 'Pomelo & Mint',
    description: 'Sự kết hợp bất ngờ giữa vị ngọt thanh của bưởi và sự tươi mát của bạc hà vườn nhà.',
    notes: ['Bưởi hồng', 'Bạc hà', 'Lá chanh'],
    burnTime: '40-45 giờ',
    price: '285.000',
    number: '03',
  },
]

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      {/* Number */}
      <motion.span
        className="font-serif text-[8rem] md:text-[12rem] leading-none text-cream/[0.03] absolute -top-8 md:-top-12 -left-2 md:-left-4 select-none pointer-events-none group-hover:text-amber/10 transition-colors duration-1000"
      >
        {product.number}
      </motion.span>

      {/* Card */}
      <div className="relative border border-cream/5 hover:border-amber/20 transition-all duration-700 p-6 md:p-8 lg:p-10 bg-soot hover:bg-cream/[0.02]">
        {/* Top accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: index * 0.2 + 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber/40 to-transparent origin-left"
        />

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-10">
          <div className="flex-1">
            <p className="text-[10px] tracking-[0.4em] uppercase text-amber/40 mb-4">
              {product.english}
            </p>
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-cream mb-4 group-hover:text-amber transition-colors duration-700">
              {product.name}
            </h3>
            <p className="text-sm text-cream/30 leading-relaxed max-w-sm font-light mb-6">
              {product.description}
            </p>

            {/* Notes */}
            <div className="flex flex-wrap gap-2">
              {product.notes.map((note) => (
                <span
                  key={note}
                  className="text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 border border-cream/10 text-cream/30 group-hover:border-amber/20 group-hover:text-amber/50 transition-all duration-500"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>

          {/* Right side — price & burn time */}
          <div className="flex md:flex-col gap-8 md:gap-6 md:items-end md:text-right shrink-0">
            <div>
              <p className="text-[9px] tracking-[0.3em] uppercase text-cream/20 mb-1">Thời gian cháy</p>
              <p className="text-sm text-cream/50 font-light">{product.burnTime}</p>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.3em] uppercase text-cream/20 mb-1">Giá</p>
              <p className="font-serif text-3xl md:text-4xl text-cream group-hover:text-amber transition-colors duration-500">
                {product.price}<span className="text-lg text-cream/20">đ</span>
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-auto text-[10px] tracking-[0.3em] uppercase px-6 py-3 border border-amber/30 text-amber/60 hover:bg-amber hover:text-soot transition-all duration-500"
            >
              Đặt mua
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Products() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const x = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

  return (
    <section id="products" ref={sectionRef} className="relative py-24 md:py-40 bg-soot overflow-hidden">
      {/* Background number */}
      <motion.span
        style={{ x }}
        className="absolute top-10 right-0 font-serif text-[20rem] md:text-[30rem] leading-none text-cream/[0.015] select-none pointer-events-none"
      >
        02
      </motion.span>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
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
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="h-px bg-amber/40"
            />
            <span className="text-[10px] tracking-[0.4em] uppercase text-amber/40">Bộ sưu tập</span>
          </div>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-cream leading-[1.05]">
            Mùi hương<br />
            <span className="italic text-amber">quê nhà</span>
          </h2>
          <p className="text-sm text-cream/30 max-w-sm mt-6 font-light leading-relaxed">
            Mỗi cây nến kể một câu chuyện về Việt Nam — từ vườn sả sau nhà đến quán cà phê góc phố.
          </p>
        </motion.div>

        {/* Products */}
        <div className="space-y-6 md:space-y-8">
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>

        {/* Material badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-20 md:mt-32 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[10px] tracking-[0.25em] uppercase text-cream/15"
        >
          {['100% sáp đậu nành', 'Tinh dầu thiên nhiên', 'Bấc cotton hữu cơ', 'Không paraffin', 'Handmade Sài Gòn'].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
