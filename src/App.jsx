import { useEffect, useState } from 'react'
//import './App.css'
import Pregunta from './fragments/Pregunta'
import {getPregunta} from './services/services.preguntas'

function App() {
  const [preguntas, setPreguntas]=useState([])
  const [respuestas, setRespuestas]=useState([])
  const [validar, setValidar]= useState(false)
  

  useEffect(()=> recogerPreguntas,[])

  const recogerPreguntas = async () => {
     const result = await getPregunta()
     setPreguntas(result)
  }



  return (
    <>
      {preguntas.map((pregunta,index) => (
        <Pregunta pregunta={pregunta} validar={validar} respuestas={respuestas} setRespuestas={setRespuestas} numeroPregunta={index} key={index} />
      ))}
      {(respuestas.length !== preguntas.length) ? <button style={{backgroundColor: 'gray'}}>Enviar Respuestas</button> : <button onClick={() => setValidar(!validar)} disabled={validar} style={{backgroundColor: validar?'gray':'#007bff'}}>Enviar Respuestas</button>}
    </>
  )
}

export default App
