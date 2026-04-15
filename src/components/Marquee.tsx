export default function Marquee() {
  const items = [
    'Sáp đậu nành',
    'Tinh dầu thiên nhiên',
    'Thủ công Sài Gòn',
    'Không paraffin',
    'Bấc cotton hữu cơ',
    'Mùi hương Việt Nam',
  ]

  return (
    <div className="py-6 md:py-8 bg-bark-dark overflow-hidden border-y border-warm/20">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="mx-6 md:mx-10 text-xs md:text-sm tracking-[0.3em] uppercase text-cream/40 flex items-center gap-6 md:gap-10">
            {item}
            <span className="text-amber/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
