import Card from '../components/Card'
import Header from '../components/Header.tsx';

export default function Services() {
  return (

    <div className='space-y-6'>
      <h1 className='text-3xl font-bold'>Services</h1>
        <Header title='Services' subtitle='Urgent • Economy • Scheduled' imageUrl='/bg-services.jpg' />

        <div className='grid gap-4 md:grid-cols-2'>
        <Card title='Urgent (≈30 min)'>
          <ul className='list-disc space-y-1 pl-5 text-white/80'>
            <li>Pickup and home delivery</li>
            <li>Tracking and direct contact</li>
            <li>Immediate availability</li>
          </ul>
        </Card>
        <Card title='Economy (time window)'>
          <ul className='list-disc space-y-1 pl-5 text-white/80'>
            <li>Agreed time window</li>
            <li>Competitive pricing</li>
            <li>Same care and reliability</li>
          </ul>
        </Card>
      </div>
    </div>
  )
}
