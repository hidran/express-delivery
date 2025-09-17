import { Link, NavLink } from 'react-router-dom'
import Container from './Container'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/quote', label: 'Quote' },
  { to: '/location', label: 'Location' },
  { to: '/contact', label: 'Contact' },
  { to: '/gallery', label: 'Gallery' },
]

export default function Navbar() {
  return (
    <header className='sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur'>
      <Container className='flex h-14 items-center justify-between'>
        <Link to='/' className='font-extrabold text-white'>
          consegne<strong className='text-amber-400'>express</strong>.it
        </Link>
        <nav className='hidden gap-5 md:flex'>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm ${isActive ? 'text-amber-400' : 'text-white/80 hover:text-white'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </Container>
    </header>
  )
}
