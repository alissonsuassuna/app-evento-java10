import { useState, useEffect } from 'react'
import PostEvento from './components/PostEvento'

import './App.css'
import GetEvento from './components/GetEvento'
import GetNome from './components/GetNome'

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

  const buscarEventoPorNome = async (nomeEvento) => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/eventos/nome/${nomeEvento}`)
        if(!response.ok) {
          throw new Error('Erro ao buscar os dados')
        }

        const evento = await response.json()
        setEventos([evento])
    } catch (error) {
      console.error('Error', error.message)
      setEventos([])
    }
  }

  const handleEventoCreated = () => {
    buscarTodosOsDados()
  }

  if(loading) return <p>Carregando</p>
  if(error) return <p>{error}</p>

  return (
    <>
      <GetNome onBuscar={buscarEventoPorNome}/>
      <div className='container'>
        <div className="events-list">
          <div class="event">
            <img src="/img/gato-preto.png" alt="Evento"/>
            <div>
              <h4>Nome do evento</h4>
              <span>15/02/2025 - 18:00 - 23:00</span>
              <p>Blumenau, Santa Catarina</p>
            </div>
            
          </div>
          <div class="event">
            <img src="/img/gato-preto.png" alt="Evento"/>
            <div>
              <h4>Nome do evento</h4>
              <span>15/02/2025 - 18:00 - 23:00</span>
              <p>Blumenau, Santa Catarina</p>
            </div>
          </div>
          <div class="event">
            <img src="/img/gato-preto.png" alt="Evento"/>
            <div>
              <h4>Nome do evento</h4>
              <span>15/02/2025 - 18:00 - 23:00</span>
              <p>Blumenau, Santa Catarina</p>
            </div>
          </div>
        </div>
        <PostEvento onEventCreated={handleEventoCreated} />
      </div>

      <GetEvento eventos={eventos} />

      <footer>
        <p>&copy; 2025 Todos os direitos reservados - Eventos<b>Online</b></p>
      </footer>
    </>
  
  )
}

export default App
