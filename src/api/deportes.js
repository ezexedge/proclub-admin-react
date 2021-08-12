export const crearDeporte = (deporte) => {
    return fetch(`https://secure-temple-46604.herokuapp.com/api/disciplina`,{
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-type": "application/json"
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

    export const getDeportes = () => {


        return fetch(`https://secure-temple-46604.herokuapp.com/api/disciplina`,{
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


     export const deleteDeportes = (id) => {
        return fetch(`https://secure-temple-46604.herokuapp.com/api/disciplina/${id} `,{
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


        export const getDeporteID = (id) => {


            return fetch(`https://secure-temple-46604.herokuapp.com/api/disciplina/${id}`,{
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
    
    

         export const getDeportesXClub = (id) => {


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
    
         export const getDeportesIDXClubID = (clubId,deporteId) => {


            return fetch(`https://secure-temple-46604.herokuapp.com/api/disciplina-club/${clubId}/${deporteId}`,{
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
    

