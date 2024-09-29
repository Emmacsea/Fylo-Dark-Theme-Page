import { useState } from 'react'
import { Fylo } from './Components/Fylodark'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Fylo/>
    </>
  )
}

export default App
