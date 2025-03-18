import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Vite + React</h1>
      <img src={reactLogo} alt="react logo" />
      <img src={viteLogo} alt="vite logo" />
      <h2>Counter</h2>
      <p>{count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </>
  )
}

export default App
