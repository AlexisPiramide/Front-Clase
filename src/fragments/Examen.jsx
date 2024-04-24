import React, {useState} from 'react'
import Pregunta from './Pregunta'
export default function Examen({examen}) {
    const [respuestas, setRespuestas]=useState([])
    const [validar, setValidar]= useState(false)

    return (
        <> 
            {examen!= undefined ? examen.preguntas.map((pregunta, index) => (
                <Pregunta pregunta={pregunta} validar={validar} respuestas={respuestas} setRespuestas={setRespuestas} numeroPregunta={index} key={index} />
            )): '' }
            {examen!= undefined ? (respuestas.length !== examen.preguntas.length) ? <button style={{ backgroundColor: 'gray' }}>Enviar Respuestas</button> : <button onClick={() => setValidar(!validar)} disabled={validar} style={{ backgroundColor: validar ? 'gray' : '#007bff' }}>Enviar Respuestas</button> : ''}
        
        </>
    )
}  