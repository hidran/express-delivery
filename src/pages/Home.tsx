import Header from '../components/Header'
import Card from '../components/Card'

export default function Home() {
  // replace the phone number in cta2 if needed
  return (
    <>
      <Header
        title='Fast deliveries in Turin and Province'
        subtitle='Urgent (where possible) or Economy within a time window.'
        cta1={{ to: '/quote', label: 'Request a Quote' }}
        cta2={{ to: 'tel:+39000000000', label: 'Call' }}
      />
      <section className='mt-8 grid gap-4 md:grid-cols-3'>
        <Card title='City Express'>
          <p>Pickup and immediate delivery within Turin.</p>
        </Card>
        <Card title='Province'>
          <p>Planned deliveries across the Turin province.</p>
        </Card>
        <Card title='Scheduled'>
          <p>Dedicated time slots and WhatsApp communication.</p>
        </Card>
      </section>
    </>
  )
}
