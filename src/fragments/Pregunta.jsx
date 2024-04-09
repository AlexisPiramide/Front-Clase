import { useEffect, useState } from "react";
import "../style/Pregunta.css"

export default function preguntas ({pregunta}){
    
    const [selecionada,setSelecionada] = useState(null);

    const [resultado, setResultado] = useState(false);    

    const comprobarRespuesta = () => {
        if(selecionada){
            if(selecionada == pregunta.respuesta){
                setResultado(true)
            }else{
                setResultado(false)
            }
        }
    }

    useEffect(comprobarRespuesta, [selecionada])

    return (
        <div className="secion-pregunta">
            <h2 className="Pregunta">{pregunta.pregunta}</h2>
            <ul>
                {pregunta.opciones.map((opcion, index) => (
                    <li key={index+1}><button id={index+1} onClick={(e)=> {
                        setSelecionada(Number(e.target.id))                      
                }}>{opcion}</button></li>
                ))}
            </ul>

            <div className="seccion-resultado">
                {(!selecionada)?<div/>:(resultado)?<p>Respuesta Correcta: {pregunta.explicacion}</p>:<p>Respuesta Incorrecta, la respuesta era {pregunta.respuesta} porque {pregunta.explicacion}</p>}
            </div>
        </div>
    )


}