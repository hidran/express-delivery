const images = [
  '/gallery/1.jpg','/gallery/2.jpg','/gallery/3.jpg',
  '/gallery/4.jpg','/gallery/5.jpg','/gallery/6.jpg',
  '/gallery/7.jpg','/gallery/8.jpg','/gallery/9.jpg',
  '/gallery/10.jpg','/gallery/11.jpg','/gallery/12.jpg',
]

export default function Gallery() {
  return (
    <div>
      <h1 className='mb-4 text-3xl font-bold'>Gallery</h1>
      <p className='mb-6 text-white/70'>Click an image to open it.</p>
      <div className='grid grid-cols-2 gap-3 md:grid-cols-4'>
        {images.map((src, i) => (
          <a key={i} href={src} target='_blank' rel='noreferrer'>
            <img src={src} alt={`Photo ${i + 1}`} className='aspect-square w-full rounded-xl object-cover ring-1 ring-white/10' />
          </a>
        ))}
      </div>
    </div>
  )
}
