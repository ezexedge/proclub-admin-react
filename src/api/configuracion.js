
     export const getConfiguracionId = (id,token) => {


        return fetch(`https://secure-temple-46604.herokuapp.com/api/configuracion/${id}`,{
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




 export const eliminarConfiguracion = (id,token) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/configuracion/${id}`,{
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