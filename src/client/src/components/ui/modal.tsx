import { ReactNode } from 'react'
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import cn from 'classnames'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export function Modal({ isOpen, onClose, children, size = 'lg' }: ModalProps) {
  const sizeOptions: Record<typeof size, string> = {
    sm: 'max-w-md',
    md: 'max-w-xl',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  }

  return (
    <Dialog as="div" open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel
          className={cn(
            'relative h-full w-full rounded-md bg-white p-5 pt-6 shadow-xl',
            sizeOptions[size]
          )}
        >
          <button
            className="absolute top-2 right-2 flex h-8 w-8 justify-center rounded-md p-1 align-middle text-slate-500 hover:bg-slate-50 hover:text-slate-600"
            onClick={onClose}
          >
            <XMarkIcon />
          </button>
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
