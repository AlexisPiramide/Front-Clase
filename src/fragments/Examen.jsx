import React, { useEffect, useState } from 'react'
import Pregunta from './Pregunta'

import { postRespuestas } from '../services/services.examenes'

export default function Examen({ examen, usuario }) {
    const [respuestas, setRespuestas] = useState([])
    const [validar, setValidar] = useState(false)

    const enviarRespuestas = async (e) => {
        e.preventDefault()
        const result = await postRespuestas(respuestas, examen.id, usuario)
        setValidar(!validar)
    }

    return (
        <>
            {examen != undefined ? examen.preguntas.map((pregunta, index) => (
                <Pregunta pregunta={pregunta} validar={validar} respuestas={respuestas} setRespuestas={setRespuestas} numeroPregunta={index} key={index} />
            )) : ''}
            {examen != undefined ? (respuestas.length !== examen.preguntas.length) ? <button style={{ backgroundColor: 'gray' }}>Enviar Respuestas</button> : <button onClick={(e) => enviarRespuestas(e)} disabled={validar} style={{ backgroundColor: validar ? 'gray' : '#007bff' }}>Enviar Respuestas</button> : ''}

        </>
    )
}