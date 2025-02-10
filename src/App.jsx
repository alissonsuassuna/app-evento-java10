import { useState } from 'react'
import Form from './components/Form'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>java10x</h1>
     <Form />
    </>
  )
}

export default App
