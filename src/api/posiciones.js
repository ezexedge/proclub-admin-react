export const getPosicionFiltro = (id,token) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/filtro-posicion/${id}`,{
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

 ///posiciones/:disciplina

 export const getPosicionDisciplina = (disciplina,token) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/filtro-posicion/nuevo/${disciplina}`,{
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


 export const crearPosicionesAdmin = (club,disciplina,division,obj,token) => {
   

    return fetch(`https://secure-temple-46604.herokuapp.com/api/posicion-admin/${club}/${disciplina}/${division}`,{
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`
            },

            body: JSON.stringify(obj)
        })
        .then(response => {
            console.log(response)
            return response.json()
        })
        .catch(err => {
            console.log(err)
        })
    }


    export const getPosicionXDivision = (id,token) => {


        return fetch(`https://secure-temple-46604.herokuapp.com/api/div/${id}`,{
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




     export const deletePosicion = (id,token) => {
        return fetch(`https://secure-temple-46604.herokuapp.com/api/posiciones/${id} `, {
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




    export const getPosicionesAdmin = (club,disciplina,token) => {


        return fetch(`https://secure-temple-46604.herokuapp.com/api/posiciones-admin/${club}/${disciplina}`,{
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




     export const modificarPosicion = (id,obj,token) => {
   

        return fetch(`https://secure-temple-46604.herokuapp.com/api/posiciones/${id}`,{
                method: "PUT",
                headers: {
                    Accept: 'application/json',
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`
                },
    
                body: JSON.stringify(obj)
            })
            .then(response => {
                console.log(response)
                return response.json()
            })
            .catch(err => {
                console.log(err)
            })
        }
    
   