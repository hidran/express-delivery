import Card from '../components/Card'
import Button from '../components/Button'
import { useState } from 'react'

export default function Quote() {
  const [form, setForm] = useState({
    type: 'Economy',
    name: '',
    phone: '',
    email: '',
    pickup: '',
    dropoff: '',
    notes: '',
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const payload = `
Type: ${form.type}
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Pickup: ${form.pickup}
Dropoff: ${form.dropoff}
Notes: ${form.notes}
  `.trim()

  const whatsappHref = `https://wa.me/393000000000?text=${encodeURIComponent(payload)}` // replace number
  const mailHref = `mailto:quotes@consegneexpress.it?subject=${encodeURIComponent('Quote request')}&body=${encodeURIComponent(payload)}`

  return (
    <Card title='Request a Quote'>
      <div className='grid gap-3'>
        <select name='type' className='rounded-lg bg-white/5 p-2' value={form.type} onChange={onChange}>
          <option>Economy</option>
          <option>Urgent</option>
        </select>
        <input name='name' placeholder='Full name' className='rounded-lg bg-white/5 p-2' onChange={onChange} />
        <input name='phone' placeholder='Phone' className='rounded-lg bg-white/5 p-2' onChange={onChange} />
        <input name='email' placeholder='Email (optional)' className='rounded-lg bg-white/5 p-2' onChange={onChange} />
        <input name='pickup' placeholder='Pickup address' className='rounded-lg bg-white/5 p-2' onChange={onChange} />
        <input name='dropoff' placeholder='Dropoff address' className='rounded-lg bg-white/5 p-2' onChange={onChange} />
        <textarea name='notes' placeholder='Dimensions/weight, urgency, useful notes' className='rounded-lg bg-white/5 p-2' onChange={onChange} />
        <div className='flex gap-3'>
          <a href={whatsappHref} target='_blank'><Button>Send via WhatsApp</Button></a>
          <a href={mailHref}><Button variant='ghost'>Send via Email</Button></a>
        </div>
      </div>
    </Card>
  )
}
