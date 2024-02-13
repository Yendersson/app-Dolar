
const Reservas = ({datos}) => {
    return (
        <div>
            <h2>Reservas Internacionales</h2>
            <p>{datos[datos.length-1]['v']}M USD</p>
            <span>Last update: {datos[datos.length-1]['d']}</span>
        </div>
    )
}

export default Reservas;