export const crearDeporte = (deporte,token) => {
    return fetch(`https://secure-temple-46604.herokuapp.com/api/disciplina`,{
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

    export const getDeportes = (token) => {


        return fetch(`https://secure-temple-46604.herokuapp.com/api/disciplina`,{
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


     export const deleteDeportes = (id,token) => {
        return fetch(`https://secure-temple-46604.herokuapp.com/api/disciplina/${id} `,{
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


        export const getDeporteID = (id,token) => {


            return fetch(`https://secure-temple-46604.herokuapp.com/api/disciplina/${id}`,{
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
    
    

         export const getDeportesXClub = (id,token) => {


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
    
         export const getDeportesIDXClubID = (clubId,deporteId,token) => {


            return fetch(`https://secure-temple-46604.herokuapp.com/api/disciplina-club/${clubId}/${deporteId}`,{
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
    



export const crearDivisionPosicion = (club,disciplina,obj,token) => {
    return fetch(`https://secure-temple-46604.herokuapp.com/api/div/${club}/${disciplina}`,{
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(obj)
        })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            console.log(err)
        })
    }




    export const getDeporteAdmin = (club,disciplina,token) => {


        return fetch(`https://secure-temple-46604.herokuapp.com/api/disciplina/admin/${club}/${disciplina}`,{
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


     export const eliminarClubXDisciplina = (clubId,deporteId,token) => {


        return fetch(`https://secure-temple-46604.herokuapp.com/api/disciplina-club/${clubId}/${deporteId}`,{
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

export const crearDivision = (club,disciplina,obj,token) => {
    return fetch(`https://secure-temple-46604.herokuapp.com/api/crear-division/${club}/${disciplina}`,{
            method: "POST",
                headers: {
            Accept: 'application/json',
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`
        },
            body: JSON.stringify(obj)
        })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            console.log(err)
        })
    }


    export const updateDisciplina = (id,obj,token) => {
        return fetch(`https://secure-temple-46604.herokuapp.com/api/disciplina/${id}`,{
                method: "PUT",
                    headers: {
                Accept: 'application/json',
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`
            },
                body: JSON.stringify(obj)
            })
            .then(response => {
                return response.json()
            })
            .catch(err => {
                console.log(err)
            })
        }

    
        export const getDeportesEstadistica = (id) => {


            return fetch(`https://secure-temple-46604.herokuapp.com/api/deporte-estadisticas/${id}`,{
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





     export const eliminarDisiciplinaByUser = (club,usuario,idFinal,token) => {


        return fetch(`https://secure-temple-46604.herokuapp.com/api/usuario-disciplina/${club}/${usuario}/${idFinal}`,{
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


     //https://secure-temple-46604.herokuapp.com/api/admin/deportes-usuario/685


        
     export const getDeportesUsuarioAdmin = (id,token) => {


        return fetch(`https://secure-temple-46604.herokuapp.com/api/admin/deportes-usuario/${id}`,{
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