

export const getPersonas = () => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/personas`,{
         method: "GET",
         headers: {
            Accept: "application/json"
        },
     })
     .then(response => {
         return response.json()
     })
     .catch(err => console.log(err))

 }

 export const deleteUsuario = (clubId,usuarioId) => {
    return fetch(`https://secure-temple-46604.herokuapp.com/api/usuario/${clubId}/${usuarioId} `,{
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


    //getUsuariosXClub

    export const getUsuariosXClub = (idClub,idUsuario) => {


        return fetch(`https://secure-temple-46604.herokuapp.com/api/usuario-club/${idClub}/${idUsuario}`,{
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
    

     export const getUsuario = (id) => {


        return fetch(`https://secure-temple-46604.herokuapp.com/api/usuario/${id}`,{
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



     export const getUsuarios = () => {


        return fetch(`https://secure-temple-46604.herokuapp.com/api/usuarios`,{
             method: "GET",
             headers: {
                Accept: "application/json"
            },
         })
         .then(response => {
             return response.json()
         })
         .catch(err => console.log(err))
    
     }
    //https://secure-temple-46604.herokuapp.com/api/usuarios

    // https://secure-temple-46604.herokuapp.com/api/usuarios/ezeedge@gmail.com/aaaaaa



    export const actualizarUsuario = (email,firebase) => {
        return fetch(`https://secure-temple-46604.herokuapp.com/api/usuarios/${email}/${firebase}`,{
                method: "PUT",
                headers: {
                    Accept: 'application/json',
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


        export const getFiltroUsuario = (disxclubxpos,disxclubxdiv) => {


            return fetch(`https://secure-temple-46604.herokuapp.com/api/filtro-usuario/${disxclubxpos}/${disxclubxdiv}`,{
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
        