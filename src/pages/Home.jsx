import CardContainer from "../components/cardContainer/CardContainer"
import { useEffect, useState } from "react"
import { getStudentsJson } from "./getStudentsInfo";
import Table from "../components/table/Table";

export default function Home() {
    const [isTable, setIsTable] = useState(true)
    const [alumnos, setAlumnos] = useState();
    useEffect(()=> {
        getStudentsJson()
        .then(students=>setAlumnos(students))
        .catch(e=>console.error(e))
    },[])

    return(
        <main>
            <h1>Listado de alumnos</h1>
            <button onClick={()=>{setIsTable(!isTable)}}>Cambiar vista</button>
           { isTable ? 
            <Table users={alumnos}/> 
           : <CardContainer alumnos={alumnos}/>
            }
        </main>
    )
}