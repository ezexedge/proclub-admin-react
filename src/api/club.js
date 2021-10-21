

export const getClubs = (token) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/clubs`,{
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

   export const deleteClub = (id,token) => {
    return fetch(`https://secure-temple-46604.herokuapp.com/api/clubs/${id}`,{
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
        .catch(err => {
            console.log(err)
        })
    }







    export const crearClub = (deporte,token) => {
        return fetch(`https://secure-temple-46604.herokuapp.com/api/clubs`,{
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(deporte)
            })
            .then(response => {
                console.log(response)
                return response.json()
            })
            .catch(err => {
                console.log(err)
            })
        }


        export const getClubID = (id,token) => {


            return fetch(`https://secure-temple-46604.herokuapp.com/api/clubs/${id}`,{
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
    

         //https://secure-temple-46604.herokuapp.com/api/filtro-usuarios/135




        export const getFiltroUsuarioXClub = (id,token) => {


            return fetch(`https://secure-temple-46604.herokuapp.com/api/filtro-usuarios/${id}`,{
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


         //https://secure-temple-46604.herokuapp.com/api/disciplina-club/135

         export const getDisciplinaXClub = (id,token) => {


            return fetch(`https://secure-temple-46604.herokuapp.com/api/disciplina-club/${id}`,{
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

    //traeme todo los usuarios de un club

    //https://secure-temple-46604.herokuapp.com/api/lista-usuarios/135
    export const getUsuariosXClub = (idClub,token) => {


        return fetch(`https://secure-temple-46604.herokuapp.com/api/lista-usuarios/${idClub}`,{
             method: "GET",
             headers: {
                Accept: 'application/json',
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`
            },
         })
         .then(response => {
             console.log('usuarioxclub',response)
             return response.json()
         })
         .catch(err => console.log(err))
    
     }

     export const getUsuariosXClubAll = (token) => {


        return fetch(`https://secure-temple-46604.herokuapp.com/api/clubxusuario`,{
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


     export const getClubXUsuarioById = (id,token) => {


        return fetch(`https://secure-temple-46604.herokuapp.com/api/clubxusuario/${id}`,{
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
//https://secure-temple-46604.herokuapp.com/api/disciplina-usuario/106
//tomo el id de clubxusurio para saber todos los deportes que tiene un usuario
export const getDeportesXUsuario = (idClubXUsuario,token) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/disciplina-usuario/${idClubXUsuario}`,{
         method: "GET",
         headers: {
            Accept: 'application/json',
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`
        },
     })
     .then(response => {
     //    console.log(response)
         return response.json()
     })
     .catch(err => console.log(err))

 }

 export const getAllDeportesXUsuario = (token) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/disciplina-usuario`,{
         method: "GET",
         headers: {
            Accept: 'application/json',
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`
        },
     })
     .then(response => {
      //   console.log(response)
         return response.json()
     })
     .catch(err => console.log(err))

 }





 export const getClubIdEstadistica = (id) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/club-estadisticas/${id}`,{
         method: "GET",
         headers: {
            Accept: 'application/json',
            "Content-type": "application/json"
        },
     })
     .then(response => {
         console.log(response)
         return response.json()
     })
     .catch(err => console.log(err))

 }



 export const agregarAdminApi = (club,usuario,token) => {
    return fetch(`https://secure-temple-46604.herokuapp.com/api/agregar-admin/${club}/${usuario}`,{
            method: "PUT", 
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
        .catch(err => {
            console.log(err)
        })
    }


    export const eliminarAdminApi = (club,usuario,token) => {
        return fetch(`https://secure-temple-46604.herokuapp.com/api/eliminar-admin/${club}/${usuario}`,{
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
            .catch(err => {
                console.log(err)
            })
        }