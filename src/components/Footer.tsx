import Container from './Container'

export default function Footer() {
  return (
    <footer className='mt-16 border-t border-white/10 bg-slate-950'>
      <Container className='py-8 text-sm text-white/70'>
        <div className='flex flex-col gap-2 md:flex-row md:items-center md:justify-between'>
          <p>© {new Date().getFullYear()} Consegne Express • VAT 12388820014</p>
          <p>
            Site developed by{' '}
            <a
              href='https://www.linkedin.com/in/hidranarias'
              target='_blank'
              rel='noreferrer'
              className='text-amber-400'
            >
              Hidran Arias
            </a>
          </p>
        </div>
      </Container>
    </footer>
  )
}
