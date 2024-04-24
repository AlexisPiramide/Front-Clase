import '../style/ExamenBoton.css';
import { getExamen } from '../services/services.examenes';

export default function ExamenBoton({ examenDibujar, setExamen, usuario }) {

    const abrirExamen = async (e) => {
        e.preventDefault();
        const examenFetch = await getExamen(e.target.id,usuario);
        setExamen(examenFetch)
    }

    return (
        <div className={examenDibujar.fecha_fin ? 'acabado' : 'nuevo'}>
            <h1>Examen {examenDibujar.id}</h1>
            <h2>Fecha Creacion {new Date(examenDibujar.fecha_inicio).toLocaleString()}</h2>
            {examenDibujar.fecha_fin ? <h2>{new Date(examenDibujar.fecha_fin).toLocaleString()}</h2> : ''}
            <button id={examenDibujar.id} onClick={(e) => abrirExamen(e)}>Ver examen</button>
        </div>
    );
}