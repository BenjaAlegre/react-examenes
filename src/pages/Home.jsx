import CardContainer from "../components/cardContainer/CardContainer"
import { useEffect, useState } from "react"
import { getStudentsJson } from "./getStudentsInfo";

export default function Home() {
    const [alumnos, setAlumnos] = useState();
    useEffect(()=> {
        getStudentsJson()
        .then(students=>setAlumnos(students))
        .catch(e=>console.error(e))
    },[])

    return(
        <main>
            <CardContainer alumnos={alumnos}/>
        </main>
    )
}