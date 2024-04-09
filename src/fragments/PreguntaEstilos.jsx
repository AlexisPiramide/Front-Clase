import { useEffect, useState } from "react";
import "../style/Pregunta.css"

export default function preguntas ({pregunta}){
    
    const [selecionada,setSelecionada] = useState(null);

    const [resultado, setResultado] = useState(false);    

    const comprobarRespuesta = () => {
        if(selecionada){
            if(selecionada == pregunta.respuesta){
                setResultado(true)
                document.querySelector(".respuesta-correcta").style.visibility = "visible";
                document.querySelector(".respuesta-incorrecta").style.visibility = "hidden";
            }else{
                document.querySelector(".respuesta-incorrecta").style.visibility = "visible";
                document.querySelector(".respuesta-correcta").style.visibility = "hidden";
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
                <div className="respuesta-correcta">Respuesta Correcta: {pregunta.explicacion}</div>
                <div className="respuesta-incorrecta">Respuesta Incorrecta, la respuesta era {pregunta.respuesta} porque {pregunta.explicacion}</div>
            </div>
        </div>
    )
}