

export const getReservaBloqueadoByEspacio = (id,token) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/reserva/bloqueado/${id}`,{
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
 //https://secure-temple-46604.herokuapp.com/api/reserva/355


 export const eliminarReserva = (id,token) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/reserva/${id}`,{
         method: "DELETE",
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





 //osea la reserva ya es el turno
export const getReservaPorUsuario = (id,token) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/reserva/usuario/${id}`,{
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