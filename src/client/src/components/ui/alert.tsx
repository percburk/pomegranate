import { ReactNode } from 'react'
import cn from 'classnames'

interface AlertProps {
  colorScheme?: 'red' | 'green' | 'yellow' | 'blue'
  fadeIn?: boolean
  children: ReactNode
  className?: string
}

export function Alert({
  colorScheme = 'blue',
  fadeIn,
  children,
  className,
}: AlertProps) {
  const colorOptions: Record<typeof colorScheme, string> = {
    red: 'bg-red-100 border-red-900 text-red-900',
    green: 'bg-emerald-100 border-emerald-900 text-emerald-900',
    yellow: 'bg-yellow-100 border-yellow-900 text-yellow-900',
    blue: 'bg-cyan-100 border-cyan-900 text-cyan-900',
  }

  return (
    <div
      className={cn(
        'flex rounded-md border p-3 align-middle',
        colorOptions[colorScheme],
        fadeIn && 'animate-fade-in',
        className
      )}
    >
      {children}
    </div>
  )
}
