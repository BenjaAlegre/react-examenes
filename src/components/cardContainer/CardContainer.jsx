
import styles from "./CardContainer.module.css"
import Card from "../card/Card";

const CardContainer = ({alumnos})=> {

    return(
        <section className={styles.container} >
            {alumnos ? alumnos.map((alumno, i)=> (
                <Card alumno={alumno} key={i}/>
            )): "no hay alumnnos para mostrar"}
        </section>
    )
}

export default CardContainer;