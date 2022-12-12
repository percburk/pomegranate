import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Main from './components/main'
import './app.css'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  )
}
