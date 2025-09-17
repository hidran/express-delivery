import Container from './Container'
import Button from './Button'

type Cta = { to: string; label: string }
type Props = { title: string; subtitle?: string; cta1?: Cta; cta2?: Cta; imageUrl?: string }

export default function Header({ title, subtitle, cta1, cta2, imageUrl = '/hero.jpg' }: Props) {
    return (
        <div className='relative isolate'>
            <div className="absolute inset-0 -z-10 bg-cover bg-center opacity-35" style={{ backgroundImage: `url(${imageUrl})` }} />

            <div className='relative isolate'>
      <div className="absolute inset-0 -z-10 bg-[url('/hero.jpg')] bg-cover bg-center opacity-35" />
      <Container className='py-16'>
        <h1 className='text-3xl font-extrabold md:text-5xl'>{title}</h1>
        {subtitle && <p className='mt-3 max-w-2xl text-white/80'>{subtitle}</p>}
        <div className='mt-6 flex gap-3'>
          {cta1 && (
            <a href={cta1.to}>
              <Button>{cta1.label}</Button>
            </a>
          )}
          {cta2 && (
            <a href={cta2.to}>
              <Button variant='ghost'>{cta2.label}</Button>
            </a>
          )}
        </div>

      </Container>
    </div>
        </div>
  )
}
