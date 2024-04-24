import ExamenBoton from "./ExamenBoton"
export default function ListaExamenes({ usuario, examenes, setExamen }) {

    return (
        <>
            {examenes.map((examenDibujar, index) => (
                <ExamenBoton key={index} examenDibujar={examenDibujar} setExamen={setExamen} usuario={usuario} />
            ))}
        </>
    )

}
