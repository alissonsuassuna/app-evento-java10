import { useState, useEffect } from 'react'
import PostEvento from './components/PostEvento'

import './App.css'
import GetEvento from './components/GetEvento'

function App() {
    const [eventos, setEventos] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true);


    const buscarTodosOsDados = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/eventos/todos')
        if(!response.ok) {
          throw new Error('Erro ao buscar os dados')
        }
        const data = await response.json()
        setEventos(data)
      } catch (error) {
        setError('Erro ao buscar os dados')
      } finally {
        setLoading(false)
      }
    }

    useEffect( () => {
      buscarTodosOsDados()
  }, [] )

  const handleEventoCreated = () => {
    buscarTodosOsDados()
  }

  if(loading) return <p>Carregando</p>
  if(error) return <p>{error}</p>

  return (
    <>
     <h1>java10x</h1>
  
     <PostEvento onEventCreated={handleEventoCreated} />
     <GetEvento eventos={eventos} />
    </>
  )
}

export default App
