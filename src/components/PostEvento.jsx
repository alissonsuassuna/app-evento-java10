import { useState } from 'react';

const PostEvento = ({ onEventCreated }) => {

    const [eventName, setEventName] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [eventLocation, setEventLocation] = useState("");
    const [eventCapacity, setEventCapacity] = useState("");
    const [eventStart, setEventStart] = useState("");
    const [eventEnd, setEventEnd] = useState("");
    const [eventImage, setEventImage] = useState("");
    const [eventType, setEventType] = useState("WORKSHOP");

   const handleSubmit = async (event) =>{
        event.preventDefault()
        
        const eventDate = {
            nome: eventName,
            descricao: eventDescription,
            identificador: `D-${Date.now()}`,
            dataInicio: eventStart,
            dataFim: eventEnd,
            localEvento: eventLocation,
            capacidade: parseInt(eventCapacity),
            imgUrl: eventImage,
            tipo: eventType.toUpperCase(),

        }
        try {
            
            const response = await fetch('http://localhost:8080/api/v1/eventos/criarevento', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(eventDate)
            })

            if(!response.ok) {
                throw new Error(`Erro ao cadastrar evento, ${response.statusText}`)
            }

            alert('Evento cadastrado com sucesso')

            onEventCreated() // Atualizado dados

        } catch (error) {
            console.error('Erro ao cadastrar', error)
        }
    }

    return (
        <>
            <div className='form-section'>
                <form onSubmit={handleSubmit} className="form-post">
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Nome do Evento"
                            value={eventName}
                            onChange={(e) => setEventName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Descrição"
                            value={eventDescription}
                            onChange={(e) => setEventDescription(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Local do Evento"
                            value={eventLocation}
                            onChange={(e) => setEventLocation(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="number"
                            placeholder="Capacidade"
                            value={eventCapacity}
                            onChange={(e) => setEventCapacity(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="datetime-local"
                            placeholder="Data de Início"
                            value={eventStart}
                            onChange={(e) => setEventStart(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="datetime-local"
                            placeholder="Data de Fim"
                            value={eventEnd}
                            onChange={(e) => setEventEnd(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Imagem URL"
                            value={eventImage}
                            onChange={(e) => setEventImage(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
                            <option value="WORKSHOP">Workshop</option>
                            <option value="SEMINARIO">Seminário</option>
                            <option value="CONFERENCIA">Conferência</option>
                        </select>
                    </div>

                    <button type="submit">Cadastrar Evento</button>
                </form>
            </div>
        </>
    )
}

export default PostEvento