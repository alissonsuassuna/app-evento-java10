const GetEvento = ({ eventos }) => {

    return (
        <>

            <ul className="space-y-3">
                {eventos.map((evento) => (
                <li key={evento.id}>
                    <h2>{evento.nome}</h2>
                    <p>{evento.descricao}</p>
                    <p>{evento.data}</p>
                    <p>{evento.localEvento}</p>
                    <p>{evento.capacidade}</p>
                    <p>{evento.tipo}</p>
                
                </li>
                ))}
            </ul>
        </>
    )
}

export default GetEvento