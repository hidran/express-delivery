import type { ReactNode } from 'react'
import { clsx } from 'clsx'

type Props = { title?: string; children: ReactNode; className?: string }
export default function Card({ title, children, className }: Props) {
  return (
    <div className={clsx('rounded-2xl bg-white/5 p-5 shadow-lg ring-1 ring-white/10', className)}>
      {title && <h3 className='mb-2 text-lg font-bold'>{title}</h3>}
      {children}
    </div>
  )
}
