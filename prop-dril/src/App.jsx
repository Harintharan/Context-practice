import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Grandparent from './Components/Grandparent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><Grandparent/>
    </>
  )
}

export default App
