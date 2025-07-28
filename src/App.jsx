import { useState } from 'react'
import ColorPalette from './colors'
import metersLogo  from './assets/Sneda Smart Meter Logo-01[1].png'
import meter from "./assets/meter.png"
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