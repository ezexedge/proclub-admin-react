export const getDivisionXClubXDisciplina = (club,disciplina,token) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/div/${club}/${disciplina}`,{
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
