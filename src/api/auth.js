export const signin = (user) => {
    return fetch(`https://secure-temple-46604.herokuapp.com/api/signin`,{
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            console.log(err)
        })
    }


    export const resetPassword = (email) => {
        return fetch(`https://secure-temple-46604.herokuapp.com/api/reset-password`,{
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    "Content-type": "application/json"
                },
                body: JSON.stringify(email)
            })
            .then(response => {
                return response.json()
            })
            .catch(err => {
                console.log(err)
            })
        }