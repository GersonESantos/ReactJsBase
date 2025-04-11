function App() {


  let likes = 0
  function darLike() {
      likes++
    }

  return (
    
      <div>
        <p>Quantidade de like: {likes}</p>
        <button onClick={darLike}>Dar like</button>
        

      </div>
    
  )}
export default App
