export const getTematica = () => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/tematicas`,{
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