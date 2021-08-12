export const getPosicionFiltro = (id) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/filtro-posicion/${id}`,{
         method: "GET",
         headers: {
            Accept: "application/json"
        },
     })
     .then(response => {
     //    console.log(response)
         return response.json()
     })
     .catch(err => console.log(err))

 }

 ///posiciones/:disciplina

 export const getPosicionDisciplina = (disciplina) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/filtro-posicion/nuevo/${disciplina}`,{
         method: "GET",
         headers: {
            Accept: "application/json"
        },
     })
     .then(response => {
     //    console.log(response)
         return response.json()
     })
     .catch(err => console.log(err))

 }