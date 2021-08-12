export const paises = () => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/pais`,{
         method: "GET",
         headers: {
            Accept: "application/json"
        },
     })
     .then(response => {
         return response.json()
     })
     .catch(err => console.log(err))

 }


 export const provincias = () => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/provincias`,{
         method: "GET",
         headers: {
            Accept: "application/json"
        },
     })
     .then(response => {
         return response.json()
     })
     .catch(err => console.log(err))

 }

 //https://secure-temple-46604.herokuapp.com/api/roles

 export const roles = () => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/roles`,{
         method: "GET",
         headers: {
            Accept: "application/json"
        },
     })
     .then(response => {
         return response.json()
     })
     .catch(err => console.log(err))

 }

 //https://secure-temple-46604.herokuapp.com/api/tipo-documento
 export const documento = () => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/tipo-documento`,{
         method: "GET",
         headers: {
            Accept: "application/json"
        },
     })
     .then(response => {
         return response.json()
     })
     .catch(err => console.log(err))

 }