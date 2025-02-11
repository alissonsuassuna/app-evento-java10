import { useState } from "react"

const GetNome = ({ onBuscar }) => {

    const [nomeBuscar, setNomeBuscar] = useState('')
   
    const handleSubmit = (e) => {
        e.preventDefault()
        if(nomeBuscar.trim() !== '') {
            onBuscar(nomeBuscar)
        }
    }

    return (
        <>
            <header>
                <div className="logo">Eventos <span>online</span></div>

                <div className="search-bar">
                    <form onSubmit={handleSubmit} className="form-buscar-name">
                        <input type="text"
                        placeholder="Buscar por nome"
                        value={nomeBuscar} 
                        onChange={(e) => setNomeBuscar(e.target.value)}/>

                        <button type="submit">Buscar</button>
                    </form>

                </div>

                <div className="icons">
                    <span><img src="/img/casa.png" alt="" /></span>
                    <span><img src="/img/heart1.png" alt="" /></span>
                    <span><img src="/img/notification.png" alt="" /></span>
                    <span><img src="/img/usuario.png" alt="" /></span>
                </div>
            </header>
        </>
    )
}

export default GetNome