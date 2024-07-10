import CardContainer from "../components/cardContainer/CardContainer"
import { useEffect, useState } from "react"
import { getStudentsJson } from "./getStudentsInfo";
import Table from "../components/table/Table";

import { calcularPromedios} from "./obtenerPromedios";

export default function Home() {
    const [isTable, setIsTable] = useState(true)
    const [alumnos, setAlumnos] = useState();
    useEffect(()=> {
        getStudentsJson()
        .then(students=>{
            const alumnosProm = calcularPromedios(students)
            setAlumnos(alumnosProm)
        })
        .catch(e=>console.error(e))
    },[])

    


    return(
        <main >
            <h1 style={{textAlign:"center",
                margin:"2em"
            }}>Listado de alumnos</h1>
            <div style={{display:"flex",
                justifyContent:"space-around"
            }} >

            <button style={{padding:"1em",
                borderRadius:".5em",
                border:"1px solid rgba(0, 0, 0, 0.192)"
            }}  onClick={()=>{setIsTable(!isTable)}}>Cambiar vista</button>
            </div>
           { isTable ? 
            <Table users={alumnos}/> 
           : <CardContainer alumnos={alumnos}/>
            }
        </main>
    )
}