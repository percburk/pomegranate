import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { api } from './api/api'

function App() {
  const [count, setCount] = useState(0)
  const [serverString, setServerString] = useState('')

  const fetchServerString = async () => {
    const response = await api.get<{ response: string }>('/')
    setServerString(response.response)
  }

  useEffect(() => {
    fetchServerString()
  }, [])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>{serverString}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default App
