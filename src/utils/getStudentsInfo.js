const API = 'https://bootcamp-2024-2d43236510d5.herokuapp.com'

const getInfo = async()=>{
    try {
        const students = await fetch(`${API}/alumnos`);
        const exams = await fetch(`${API}/examenes`);
        const answers = await fetch(`${API}/respuestas`);

        const promises = [students, exams, answers];
        const promisesJson = promises.map(result => result.json());
        const data = await Promise.all(promisesJson);
        return data;
    } catch (error) {
        console.error(error);
    }
}

const getExamInfo = (idAlumno, answers, exams) => {
    const respuestas = answers.data.filter(respuesta => respuesta.idAlumno == idAlumno);
    const examenesResp = createArrayExamsById(respuestas, exams); 
    let examenesPuntajes =[]
    for (let i = 0; i < examenesResp.length; i++) {
        examenesPuntajes.push(getExamNote(examenesResp[i], exams))
        
    }
   return examenesPuntajes
}

const createArrayExamsById = (respuestas, exams) => {
    let misExamenes = []
    for (let i = 0; i < exams.data.length; i++) {
        const unExamen = []
        for (let j = 0; j < respuestas.length; j++) {
            if (exams.data[i].id  === respuestas[j].idExamen) {
                unExamen.push(respuestas[j]);
            }
        }
        misExamenes.push(unExamen);
    }
    return misExamenes;
}

const getExamNote = (examenResp, exams) =>
{  
    const examen = exams.data.filter((examen) => {
        return  examenResp[0]? examen.id == examenResp[0].idExamen : []
    });
    if (!examen.length) {
        return
    }
    const valorDeUnPunto = 10/ examen[0].preguntas.length;
    let puntaje = 0;
    for (let i = 0; i < examen[0].preguntas.length; i++) {
       for (let k = 0; k < examenResp.length; k++) {
        const respuesta = examenResp[k];
        if(examen[0].preguntas[i].id == respuesta.idPregunta){
            for (let j = 0; j < examen[0].preguntas[i].opciones.length; j++) {
                const respuestaOpc = examen[0].preguntas[i].opciones[j]
                if (respuestaOpc.esCorrecta) {
                    if (respuestaOpc.id == respuesta.idRespuesta){
                        puntaje += valorDeUnPunto;
                    } 
                }
            }
        }
        
       }
    }
    return {
        tema: examen[0].tema,
        puntaje
    };
}

 export const getStudentsJson = async() => {
    const [studentsData, examsData, answersData] = await getInfo();
    const alumnos = studentsData.data.map( alumno =>{
        let miObj = {
            id: alumno.id,
              nombre: alumno.nombre,
              apellido: alumno.apellido,
              edad: alumno.edad,
            };
        miObj.examenes = getExamInfo(alumno.id, answersData, examsData)
        return miObj;
    })
    console.log(alumnos);
    return alumnos
}