import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SearchModal } from './components/search_modal'
import './application.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 0 },
  },
})

export function App() {
  const [searchModalIsOpen, setSearchModalIsOpen] = useState(false)

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex p-3">
        <button
          onClick={() => setSearchModalIsOpen(true)}
          className="rounded-md bg-gradient-to-r from-indigo-700 to-emerald-500 p-2 text-sm text-slate-50 shadow-md transition ease-in-out hover:from-indigo-600 hover:to-emerald-400"
        >
          Open Food Search
        </button>
      </div>
      <SearchModal
        searchModalIsOpen={searchModalIsOpen}
        setSearchModalIsOpen={setSearchModalIsOpen}
      />
    </QueryClientProvider>
  )
}
