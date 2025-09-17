import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Container from '../components/Container'

export default function SiteLayout() {
  return (
    <div className='min-h-dvh bg-slate-950 text-white'>
      <Navbar />
      <main>
        <Container className='py-10'>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  )
}
