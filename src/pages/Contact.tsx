import Card from '../components/Card'
import Button from '../components/Button'

export default function Contact() {
  return (
    <div className='grid gap-4 md:grid-cols-3'>
      <Card title='Contact'>
        <div className='flex gap-3'>
          <a href='https://wa.me/393000000000' target='_blank' rel='noreferrer'><Button>WhatsApp</Button></a>
          <a href='mailto:info@consegneexpress.it'><Button variant='ghost'>Email</Button></a>
        </div>
        <p className='mt-3 text-white/70'>VAT 12388820014</p>
      </Card>
      <Card title='Service Hours'>
        <p>Mon–Fri: 08:00 – 18:00</p>
        <p>Sat: 08:00 – 13:00</p>
        <p>Sun: Closed</p>
      </Card>
      <Card title='Map'>
        <a className='underline' href='/location'>See location</a>
      </Card>
    </div>
  )
}
