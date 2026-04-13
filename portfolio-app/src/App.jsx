import { useState } from 'react'
import './App.css'
import Counter from './Counter.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">

        <div>
          <h3>Count is <Counter /></h3>
          
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          {count}
        </button>
      </section>

      <section id="spacer"></section>
    </>
  )
}

export default App
