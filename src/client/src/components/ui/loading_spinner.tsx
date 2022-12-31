import cn from 'classnames'

interface LoadingSpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  fadeIn?: boolean
}

export const LoadingSpinner = ({ size = 'md', fadeIn }: LoadingSpinnerProps) => {
  const sizeOptions: Record<typeof size, string> = {
    xs: 'h-4 w-4 border-2',
    sm: 'w-6 h-6 border-[3px]',
    md: 'w-8 h-8 border-4',
    lg: 'w-10 h-10 border-[5px]',
    xl: 'w-12 h-12 border-[6px]',
  }

  return (
    <div
      className={cn(
        'inline-block rounded-full border-indigo-600 border-r-indigo-100',
        sizeOptions[size],
        fadeIn ? 'animate-spinner-fade-in' : 'animate-spin'
      )}
    />
  )
}
