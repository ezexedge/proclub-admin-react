///estado/:club/:usuario/:estado'


export const cambiarEstadoAprobado = (clubId,usuarioId) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/estado/${clubId}/${usuarioId}/1'`,{
         method: "POST",
         headers: {
            Accept: "application/json"
        },
     })
     .then(response => {
         console.log(response)
         return response.json()
     })
     .catch(err => console.log(err))

 }


 export const cambiarEstadoDesaprobado = (clubId,usuarioId) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/estado/${clubId}/${usuarioId}/2'`,{
         method: "POST",
         headers: {
            Accept: "application/json"
        },
     })
     .then(response => {
         console.log(response)
         return response.json()
     })
     .catch(err => console.log(err))

 }