import URL from "./constante.js";

const iniciarSesion = async (alias,password) => {
    const data = await fetch(URL+"/api/usuario/login",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({alias:alias,password:password})
    })
    if(data.ok){
        const json = await data.json();
        return json;
    }else{
        console.log(1)
        throw new Error('Usuario o contraseña incorrectos');
    }

};
  
export { iniciarSesion };