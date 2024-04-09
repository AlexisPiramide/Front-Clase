import { useEffect, useState } from 'react'
//import './App.css'
import Pregunta from './fragments/Pregunta'
import PreguntaEstilos from './fragments/PreguntaEstilos'
import {getPregunta} from './services/services.preguntas'

function App() {
  const [preguntas, setPreguntas]=useState([])

  useEffect(()=> recogerPreguntas,[])

  const recogerPreguntas = async () => {
     const result = await getPregunta()
     setPreguntas(result)
  }

  return (
    <>
      <p>Estas son sin estilos</p>
      {preguntas.map((pregunta,index) => (
        <Pregunta pregunta={pregunta} key={index} />
      ))}
      <p>Estas son con estilos</p>
      {preguntas.map((pregunta,index) => (
        <PreguntaEstilos pregunta={pregunta} key={index+3} />
      ))}
    </>
  )
}

export default App
