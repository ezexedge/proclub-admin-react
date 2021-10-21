//https://secure-temple-46604.herokuapp.com/api/filtro-usuarios/135/265


export const getFiltroUsuarioXclubXDeporte = (club,deporte,token) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/filtro-usuarios/${club}/${deporte}`,{
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




export const getFiltroUsuarioXclubXDeporteXDiv = (club,deporte,div,token) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/filtro-usuarios/${club}/${deporte}/${div}`,{
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



 export const getFiltroUsuarioXclubXDeporteXDivXPos = (club,deporte,div,pos,token) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/filtro-usuarios/${club}/${deporte}/${div}/${pos}`,{
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