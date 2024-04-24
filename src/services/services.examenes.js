import URL from "./constante.js";

const getExamenes = async (token) => {
    console.log(token)
    const data = await fetch(URL+"/api/examenes", {
        headers: {
            Authorization: `Bearer ${token.token}`
        }
    });
   
    const json = await data.json();
    return json;
};

const getExamen = async (id, token) => {
    console.log(token)
    const data = await fetch(URL+"/api/examenes/"+id, {
        headers: {
            Authorization: `Bearer ${token.token}`
        }
    });
    
    const json = await data.json();
    return json;
}


  
export { getExamenes, getExamen};