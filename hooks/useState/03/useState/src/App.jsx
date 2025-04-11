import { useState } from 'react'
import './App.css'

function App() {
  const [like, setLike] = useState(0)
  function darLike() {
    setLike(like + 1)
  }

  return (
    <>
      <div>
        <p>Quantidade de like</p>
        <button onClick={darLike}>Dar like</button>
        <p>{like}</p>

      </div>
    </>
  )
}

export default App
