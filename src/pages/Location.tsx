import Card from '../components/Card'

export default function Location() {
  return (
    <Card title='Our Location'>
      <p className='text-white/80'>Via Moretta, 68 – 10139 Torino (TO)</p>
      <div className='mt-3 aspect-video w-full overflow-hidden rounded-xl'>
        <iframe
          className='h-full w-full'
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          src='https://maps.google.com/maps?q=Via%20Moretta%2068%20Torino&t=&z=15&ie=UTF8&iwloc=&output=embed'
          title='Google Map'
        />
      </div>
      <div className='mt-3 flex gap-3'>
        <a className='underline' href='https://maps.google.com/?q=Via%20Moretta%2068%20Torino' target='_blank' rel='noreferrer'>
          Open in Google Maps
        </a>
        <a className='underline' href='https://www.google.com/maps/dir/?api=1&destination=Via%20Moretta%2068%20Torino' target='_blank' rel='noreferrer'>
          Directions
        </a>
      </div>
    </Card>
  )
}
