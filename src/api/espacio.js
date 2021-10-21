
        export const getEspacioByClub = (club,token) => {


            return fetch(`https://secure-temple-46604.herokuapp.com/api/espacio/club/${club}`,{
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
    


         export const getEspacioById = (id,token) => {


            return fetch(`https://secure-temple-46604.herokuapp.com/api/espacio/${id}`,{
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
    

         export const getEspacioByDisciplinaXClub = (espacio,club,token) => {


            return fetch(`https://secure-temple-46604.herokuapp.com/api/espacio/disciplina/${espacio}/${club}`,{
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
    //https://secure-temple-46604.herokuapp.com/api/espacio/disciplina/115/73


    export const agregarDisciplina = (param1,param2,token) => {


        return fetch(`https://secure-temple-46604.herokuapp.com/api/espacio/disciplina/${param1}/${param2}`,{
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





     export const modificarEspacio = (id,obj,token) => {
        return fetch(`https://secure-temple-46604.herokuapp.com/api/espacio/${id}`,{
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
    


   

        export const getConfiguracionByEspacio = (espacio,token) => {


            return fetch(`https://secure-temple-46604.herokuapp.com/api/configuracion/${espacio}`,{
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




         export const eliminarEspacio = (id,token) => {
            return fetch(`https://secure-temple-46604.herokuapp.com/api/espacio/${id}`,{
                method: "DELETE",
                headers: {
                    Accept: 'application/json',
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`
                }
                })
                .then(response => {
                    return response.json()
                })
                .catch(err => {
                    console.log(err)
                })
            }



            export const eliminarDisciplinaxEspacio = (id,token) => {
                return fetch(`https://secure-temple-46604.herokuapp.com/api/eliminar/disciplina-espacio/${id}`,{
                    method: "DELETE",
                    headers: {
                        Accept: 'application/json',
                        "Content-type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                    })
                    .then(response => {
                        return response.json()
                    })
                    .catch(err => {
                        console.log(err)
                    })
                }

            //https://secure-temple-46604.herokuapp.com/api/eliminar/disciplina-espacio/365



            export const modificarNombreEspacio = (id,obj,token) => {
                return fetch(`https://secure-temple-46604.herokuapp.com/api/update-nombre/${id}`,{
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




                //https://secure-temple-46604.herokuapp.com/api/espacio-reservas/205



                export const getReservasByEspacio = (id,token) => {


                    return fetch(`https://secure-temple-46604.herokuapp.com/api/espacio-reservas/${id}`,{
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



                 ///update-imagen/club/:id



            export const modificarImagenEspacio = (id,obj,token) => {
                return fetch(`https://secure-temple-46604.herokuapp.com/api/update-imagen/club/${id}`,{
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