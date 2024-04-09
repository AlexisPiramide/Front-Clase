import { useEffect, useState } from 'react'
//import './App.css'
import Pregunta from './fragments/Pregunta'
import PreguntaEstilos from './fragments/PreguntaEstilos'
import {getPregunta} from './services/services.preguntas'

function App() {
  const [count, setCount] = useState(0)
  const [preguntas, setPreguntas]=useState([])


  const [pregunta, setPregunta] = useState({
    "id": 1,
    "pregunta": "¿Qué indica la señal de tráfico triangular con un borde rojo y un dibujo de una flecha hacia abajo?",
    "opciones": [
      "Prohibición de paso",
      "Obligación de ceder el paso",
      "Dirección obligatoria",
      "Calle sin salida"
    ],
    "respuesta": 2,
    "explicacion": "La señal triangular sginifica x, la flecha para abajo significa y",
    "categoria": "Señales de Tráfico"
  })

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
        <Pregunta pregunta={pregunta} key={index+3} />
      ))}
    </>
  )
}

export default App
