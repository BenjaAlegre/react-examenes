import styles from "./Card.module.css"

const Card = ({alumno})=> {
    const {nombre, apellido, id, edad, promedio} = alumno;
    return(
    <div className={styles.card}  >
        
     
        <h2> {apellido} {nombre}</h2>


        <p>Edad:{edad}</p>
        <p>Promedio:{promedio}</p>

    </div>
    )
}
export default Card;