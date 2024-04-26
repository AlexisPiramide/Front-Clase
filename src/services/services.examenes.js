import URL from "./constante.js";

const getExamenes = async (token) => {
    const data = await fetch(URL+"/api/examenes", {
        headers: {
            Authorization: `Bearer ${token.token}`
        }
    });
    const json = await data.json();
    return json;
};

const getExamen = async (id, token) => {
    const data = await fetch(URL+"/api/examenes/"+id, {
        headers: {
            Authorization: `Bearer ${token.token}`
        }
    });
  
    const json = await data.json();
    return json;
}

const postRespuestas = async (respuestas,id,token) => {
    console.log(respuestas, 'respuestas')
    const data = await fetch(URL+"/api/examenes/respuestas/"+id, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token.token}`
        },
        body: JSON.stringify({respuestas})
    });
    const json = await data.json();
    return json;
}


  
export { getExamenes, getExamen, postRespuestas};