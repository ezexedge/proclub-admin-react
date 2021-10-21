export const crearNotificacionSuperAdmin = (notificacion,token) => {
   
    console.log('notifiacion',notificacion)

    return fetch(`https://secure-temple-46604.herokuapp.com/api/notificacion/crear`,{
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`
            },

            body: JSON.stringify(notificacion)
        })
        .then(response => {
            console.log(response)
            return response.json()
        })
        .catch(err => {
            console.log(err)
        })
    }



    export const resetPassword = (email) => {
        return fetch(`https://secure-temple-46604.herokuapp.com/api/reset-password`,{
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    "Content-type": "application/json"
                },
                body: JSON.stringify(email)
            })
            .then(response => {
                return response.json()
            })
            .catch(err => {
                console.log(err)
            })
        }

    //notificacion-clubxusuario/:notificacion

    export const getNotificacionById = (id,token) => {


        return fetch(`https://secure-temple-46604.herokuapp.com/api/notificacion-clubxusuario/${id}`,{
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


     export const getNotificacionSingleById = (id,token) => {


        return fetch(`https://secure-temple-46604.herokuapp.com/api/notificacion/${id}`,{
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


     export const getNotificacionByUsers = (id,token) => {


        return fetch(`https://secure-temple-46604.herokuapp.com/api/notificacion-clubxusuario/${id}`,{
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



     export const getNotificacion = (token) => {


        return fetch('https://secure-temple-46604.herokuapp.com/api/notificacion', {
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

    export const getNotificacionByClub = (club,token) => {

      return fetch(`https://secure-temple-46604.herokuapp.com/api/notificacion/club/${club}`, {
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

    export const getNotificacionDeUnUsuario = (club,token) => {

        return fetch(`https://secure-temple-46604.herokuapp.com/api/notificacion/usuario/${club}`, {
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



      export const getNotificacionDeUnUsuarioByClub = (club,usuario,token) => {

        return fetch(`https://secure-temple-46604.herokuapp.com/api/notificacion/usuario/${club}/${usuario}`, {
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

      //notificacion-usuario


      export const getNotificacionAllByUser = (usuario,token) => {

        return fetch(`https://secure-temple-46604.herokuapp.com/api/notificacion-all/usuario/${usuario}`, {
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