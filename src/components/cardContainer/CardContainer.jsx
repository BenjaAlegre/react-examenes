import styles from "./CardContainer.module.css"

const CardContainer = ({children})=> {
    
    return(
        <div className={styles.container} >
            {children}
        </div>
    )
}

export default CardContainer;