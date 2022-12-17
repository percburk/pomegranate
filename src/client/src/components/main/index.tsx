import { useState } from 'react'
import { styled } from '@linaria/react'
import { useFetchServerString } from 'src/api/example'
import reactLogo from 'src/assets/react.svg'
import './main.css'

const Title = styled.h1`
  font-size: 5rem;
`

export const Main = () => {
  const [count, setCount] = useState(0)
  const { data } = useFetchServerString()

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
      <Title>Vite + React</Title>
      <h2>{data?.response}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  )
}
