import { createBrowserRouter } from 'react-router-dom'
import SiteLayout from '../layouts/SiteLayout'
import Home from '../pages/Home'
import Services from '../pages/Services'
import About from '../pages/About'
import Quote from '../pages/Quote'
import Location from '../pages/Location'
import Contact from '../pages/Contact'
import Gallery from '../pages/Gallery'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SiteLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'about', element: <About /> },
      { path: 'quote', element: <Quote /> },
      { path: 'location', element: <Location /> },
      { path: 'contact', element: <Contact /> },
      { path: 'gallery', element: <Gallery /> },
    ],
  },
])
