export const paises = (token) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/pais`,{
         method: "GET",
         headers: {
            Accept: 'application/json',
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`
        },
     })
     .then(response => {
         return response.json()
     })
     .catch(err => console.log(err))

 }


 export const provincias = (token) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/provincias`,{
         method: "GET",
         headers: {
            Accept: 'application/json',
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`
        },
     })
     .then(response => {
         return response.json()
     })
     .catch(err => console.log(err))

 }

 //https://secure-temple-46604.herokuapp.com/api/roles

 export const roles = (token) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/roles`,{
         method: "GET",
         headers: {
            Accept: 'application/json',
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`
        },
     })
     .then(response => {
         return response.json()
     })
     .catch(err => console.log(err))

 }

 //https://secure-temple-46604.herokuapp.com/api/tipo-documento
 export const documento = (token) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/tipo-documento`,{
         method: "GET",
         headers: {
            Accept: 'application/json',
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`
        },
     })
     .then(response => {
         return response.json()
     })
     .catch(err => console.log(err))

 }