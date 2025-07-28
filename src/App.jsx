import { useState } from 'react'
import ColorPalette from './colors'
import profile from "./assets/william.jpg"

function App() {
  const [count, setCount] = useState(0)

  return (
      <main>
        <div className="navbar bg-base-100">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
      </main>
  )
}

export default App