import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="navbar bg-base-100" data-theme="khaki">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
    </>
  )
}

export default App
