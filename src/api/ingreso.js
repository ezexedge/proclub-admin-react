export const getIngresoByEspacio = (id,token) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/ingreso/espacio/${id}`,{
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


 export const getIngresoByUser = (id,token) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/ingreso/usuario/${id}`,{
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
