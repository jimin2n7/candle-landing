import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const products = [
  {
    name: 'Sả Chanh',
    english: 'Lemongrass',
    description: 'Hương thơm tươi mát, giúp thanh lọc không khí và xoa dịu tinh thần sau một ngày dài.',
    notes: 'Sả · Chanh · Gừng nhẹ',
    burnTime: '40-45 giờ',
    price: '285.000',
    emoji: '🌿',
    accent: 'bg-sage/20',
    borderAccent: 'border-sage/30',
  },
  {
    name: 'Cà Phê Buôn Mê',
    english: 'Highland Coffee',
    description: 'Mùi cà phê đậm đà, ấm áp như sáng sớm tại một quán cóc ở Buôn Ma Thuột.',
    notes: 'Robusta · Sô-cô-la đen · Vanilla',
    burnTime: '40-45 giờ',
    price: '315.000',
    emoji: '☕',
    accent: 'bg-terracotta/10',
    borderAccent: 'border-terracotta/20',
  },
  {
    name: 'Bưởi & Bạc Hà',
    english: 'Pomelo & Mint',
    description: 'Sự kết hợp bất ngờ giữa vị ngọt thanh của bưởi và sự tươi mát của bạc hà vườn nhà.',
    notes: 'Bưởi hồng · Bạc hà · Lá chanh',
    burnTime: '40-45 giờ',
    price: '285.000',
    emoji: '🍃',
    accent: 'bg-blush/15',
    borderAccent: 'border-blush/30',
  },
]

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className={`relative ${product.accent} aspect-[3/4] flex items-center justify-center mb-6 border ${product.borderAccent} transition-all duration-500 group-hover:shadow-lg`}>
        <motion.span
          className="text-6xl md:text-7xl select-none"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {product.emoji}
        </motion.span>
        {/* Subtle corner detail */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-bark/20" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-bark/20" />
      </div>

      <div className="px-1">
        <h3 className="font-serif text-2xl md:text-3xl font-normal text-charcoal mb-0.5">
          {product.name}
        </h3>
        <p className="text-xs tracking-[0.15em] uppercase text-bark/60 mb-3">
          {product.english}
        </p>
        <p className="text-sm text-charcoal-light leading-relaxed mb-4 font-light">
          {product.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {product.notes.split(' · ').map((note) => (
            <span key={note} className="text-xs px-2.5 py-1 bg-cream-dark text-bark/70 tracking-wide">
              {note}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-charcoal-light/60 mb-0.5">Thời gian cháy</p>
            <p className="text-sm text-charcoal">{product.burnTime}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-charcoal-light/60 mb-0.5">Giá</p>
            <p className="text-lg font-serif text-bark-dark">{product.price}đ</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Products() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="products" className="py-20 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-bark mb-4">Bộ sưu tập</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-charcoal mb-4">
            Mùi hương <span className="italic">quê nhà</span>
          </h2>
          <p className="text-charcoal-light font-light max-w-md mx-auto">
            Mỗi cây nến kể một câu chuyện về Việt Nam — từ vườn sả sau nhà đến quán cà phê góc phố.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>

        {/* Material note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 md:mt-24 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-6 md:gap-10 text-xs tracking-[0.15em] uppercase text-bark/50">
            <span>100% sáp đậu nành</span>
            <span className="hidden sm:inline">·</span>
            <span>Tinh dầu thiên nhiên</span>
            <span className="hidden sm:inline">·</span>
            <span>Bấc cotton hữu cơ</span>
            <span className="hidden sm:inline">·</span>
            <span>Không paraffin</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
