import { useEffect, useState } from 'react'
//import './App.css'
import Pregunta from './fragments/Pregunta'
import ExamenBoton from './fragments/ExamenBoton'
import { getExamenes, getExamen } from './services/services.examenes'
import LogIn from './fragments/LogIn'
import Examen from './fragments/Examen'
import ListaExamenes from './fragments/ListaExamenes'
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

  return (
    <>
      <h1>{usuario ? usuario.token : '' }</h1>
      {usuario && examen== undefined ?  <ListaExamenes usuario={usuario} examenes={examenes} setExamen={setExamen} /> : (error ? <LogIn setError={setError} error={error} setUsuario={setUsuario}/> : <LogIn setError={setError} setUsuario={setUsuario}/>)}
       <Examen examen={examen} usuario={usuario}/>
    </>
   
  )
}

export default App
