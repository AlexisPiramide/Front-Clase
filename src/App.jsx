import { useEffect, useState } from 'react'
//import './App.css'
import Pregunta from './fragments/Pregunta'
import ExamenBoton from './fragments/ExamenBoton'
import { getExamenes, getExamen } from './services/services.examenes'
import LogIn from './fragments/LogIn'
import Examen from './fragments/Examen'

function App() {

  const [usuario, setUsuario]=useState()
  const [error, setError]=useState()

  const [examenes, setExamenes] = useState([])
  const [examen, setExamen] = useState()
  
  useEffect(() => {
    recogeExamenes(usuario)
  }, [usuario])

  const recogeExamenes = async () => {
    const result = await getExamenes(usuario)
    setExamenes(result)
  }

  useEffect(() => {
    console.log(examen)
  }, [examen])
  /*
  useEffect(()=> recogerPreguntas,[])

  const recogerPreguntas = async () => {
     const result = await getPregunta()
     setPreguntas(result)
  }
  */


  return (
    <>
      <h1>{usuario ? usuario.token : '' }</h1>
      {usuario ? examenes.map((examenDibujar, index) => (
          <ExamenBoton  key={index} examenDibujar={examenDibujar} setExamen={setExamen} usuario={usuario}/>
      )) : (error ? <LogIn setError={setError} error={error} setUsuario={setUsuario}/> : <LogIn setError={setError} setUsuario={setUsuario}/>)}
       <Examen examen={examen}/>
    </>
   
  )
}

export default App
