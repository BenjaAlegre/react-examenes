import styles from "./Card.module.css"

const Card = ()=> {
    return(
    <div className={styles.card}  >
        
        <div>
        <h2>Apellido:</h2>
        <p>Nombre:</p>
        </div>
        <p>Edad:</p>
        <p>Promedio:</p>

    </div>
    )
}
export default Card;