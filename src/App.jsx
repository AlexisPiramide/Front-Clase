import { useEffect, useState } from 'react'
//import './App.css'
import Pregunta from './fragments/Pregunta'
import PreguntaEstilos from './fragments/PreguntaEstilos'
import {getPregunta} from './services/services.preguntas'

function App() {
  const [count, setCount] = useState(0)

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
  

  return (
    <>  
      <Pregunta pregunta={pregunta}/>
      <PreguntaEstilos pregunta={pregunta}/>
    </>
  )
}

export default App
