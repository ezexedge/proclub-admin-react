///estado/:club/:usuario/:estado'


export const cambiarEstadoAprobado = (clubId,usuarioId,token) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/estado/${clubId}/${usuarioId}/1'`,{
         method: "POST",
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


 export const cambiarEstadoDesaprobado = (clubId,usuarioId,token) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/estado/${clubId}/${usuarioId}/2'`,{
         method: "POST",
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