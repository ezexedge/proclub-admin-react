export const getClubs = () => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/clubs`,{
         method: "GET"
     })
     .then(response => {
         return response.json()
     })
     .catch(err => console.log(err))

 
   }

   export const deleteClub = (id) => {
    return fetch(`https://secure-temple-46604.herokuapp.com/api/clubs/${id} `,{
            method: "DELETE",
            headers: {
                Accept: 'application/json'
            }
        })
        .then(response => {
            console.log(response)
            return response.json()
        })
        .catch(err => {
            console.log(err)
        })
    }



    export const crearClub = (deporte) => {
        return fetch(`https://secure-temple-46604.herokuapp.com/api/clubs`,{
                method: "POST",
                headers: {
                    Accept: 'application/json',
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


        export const getClubID = (id) => {


            return fetch(`https://secure-temple-46604.herokuapp.com/api/clubs/${id}`,{
                 method: "GET",
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
    



         //https://secure-temple-46604.herokuapp.com/api/disciplina-club/135

         export const getDisciplinaXClub = (id) => {


            return fetch(`https://secure-temple-46604.herokuapp.com/api/disciplina-club/${id}`,{
                 method: "GET",
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

    //traeme todo los usuarios de un club

    //https://secure-temple-46604.herokuapp.com/api/lista-usuarios/135
    export const getUsuariosXClub = (idClub) => {


        return fetch(`https://secure-temple-46604.herokuapp.com/api/lista-usuarios/${idClub}`,{
             method: "GET",
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

     export const getUsuariosXClubAll = () => {


        return fetch(`https://secure-temple-46604.herokuapp.com/api/clubxusuario`,{
             method: "GET",
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


     export const getClubXUsuarioById = (id) => {


        return fetch(`https://secure-temple-46604.herokuapp.com/api/clubxusuario/${id}`,{
             method: "GET",
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
//https://secure-temple-46604.herokuapp.com/api/disciplina-usuario/106
//tomo el id de clubxusurio para saber todos los deportes que tiene un usuario
export const getDeportesXUsuario = (idClubXUsuario) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/disciplina-usuario/${idClubXUsuario}`,{
         method: "GET",
         headers: {
            Accept: "application/json"
        },
     })
     .then(response => {
     //    console.log(response)
         return response.json()
     })
     .catch(err => console.log(err))

 }

 export const getAllDeportesXUsuario = () => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/disciplina-usuario`,{
         method: "GET",
         headers: {
            Accept: "application/json"
        },
     })
     .then(response => {
      //   console.log(response)
         return response.json()
     })
     .catch(err => console.log(err))

 }