import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [like, setLike] = useState(0)
  function darLike() {
    setLike(like + 1)
  }
useEffect(() => {
  console.log('useEffect rodou')
})
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
