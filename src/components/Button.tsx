import type { ButtonHTMLAttributes } from 'react'
import { clsx } from 'clsx'
type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost'
}

export default function Button({ variant = 'primary', className, ...props }: Props) {
  return (
    <button
      {...props}
      className={clsx(
        'rounded-xl px-4 py-2 text-sm font-semibold transition',
        variant === 'primary' && 'bg-amber-400 text-black hover:opacity-90',
        variant === 'ghost' && 'border border-white/20 text-white hover:bg-white/10',
        className,
      )}
    />
  )
}
