import { iniciarSesion } from "../services/services.usuarios.js";
import { useState } from "react";
import '../style/LogIn.css'

export default function LogIn({setUsuario, error, setError}) {
    
    const [alias, setAlias] = useState("");
    const [password, setPassword] = useState("");
    

    const validar = async (e) => {
        e.preventDefault();
        
        if(alias != '' && password != ''){
            try {
                const data = await iniciarSesion(alias, password);
                if (data) {
                    setUsuario(data);
                } 
            } catch (error) {
                setError(error);
            }
        }
    }

    
    return (
        <div>
            <h1>Iniciar Sesion</h1>
            <form>
                <label>Email</label>
                <input type="alias" onChange={(e)=>setAlias(e.target.value)} id="alias" name="alias" required></input>
                <label>Password</label>
                <input type="password" onChange={(e)=> setPassword(e.target.value)} id="password" name="password" required></input>
                <button onClick={(e)=> validar(e)}>LogIn</button>
            </form>
            {error ? <h3>{error.message}</h3> : ''}
        </div>
        
    )
    
}