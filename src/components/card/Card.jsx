import styles from "./Card.module.css"

const Card = ({alumno})=> {
    const {nombre, apellido, id, edad, examenes} = alumno;
    return(
    <div className={styles.card}  >
        
     
        <h2>Apellido: {apellido}</h2>
        <p>Nombre:{nombre}</p>

        <p>Edad:{edad}</p>
        <p>Promedio:9</p>

    </div>
    )
}
export default Card;