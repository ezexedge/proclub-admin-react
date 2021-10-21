export const getTematica = (token) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/tematicas`,{
         method: "GET",
         headers: {
            Accept: 'application/json',
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`
        },
     })
     .then(response => {
         console.log(response)
         return response.json()
     })
     .catch(err => console.log(err))

 }

 export const getTematicaByNotificacion = (id,token) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/tematicas/${id}`,{
         method: "GET",
         headers: {
            Accept: 'application/json',
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`
        },
     })
     .then(response => {
         console.log(response)
         return response.json()
     })
     .catch(err => console.log(err))

 }