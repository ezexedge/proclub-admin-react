

export const getPersonas = (token) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/personas`, {
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

export const deleteUsuario = (clubId, usuarioId, token) => {
    return fetch(`https://secure-temple-46604.herokuapp.com/api/usuario/${clubId}/${usuarioId} `, {
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


//getUsuariosXClub

export const getUsuariosXClub = (idClub, idUsuario, token) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/usuario-club/${idClub}/${idUsuario}`, {
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




export const getUsuario = (id, token) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/usuario/${id}`, {
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



export const getUsuarios = (token) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/usuarios`, {
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
//https://secure-temple-46604.herokuapp.com/api/usuarios

// https://secure-temple-46604.herokuapp.com/api/usuarios/ezeedge@gmail.com/aaaaaa



export const actualizarUsuario = (email, firebase, token) => {
    return fetch(`https://secure-temple-46604.herokuapp.com/api/usuarios/${email}/${firebase}`, {
        method: "PUT",
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


export const getFiltroUsuario = (disxclubxpos, disxclubxdiv, token) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/filtro-usuario/${disxclubxpos}/${disxclubxdiv}`, {
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




export const updateRol = (usuario, token) => {
    return fetch(`https://secure-temple-46604.herokuapp.com/api/usuario-update/rol/${usuario}`, {
        method: "PUT",
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


export const getUsuarioXclubxRol = (club, rol, token) => {
    return fetch(`https://secure-temple-46604.herokuapp.com/api/lista-usuarios/${club}/${rol}`, {
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
        .catch(err => {
            console.log(err)
        })
}



export const validarEmail = (email) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/usuario/search/${email}`, {
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

export const agregarUsuarioPerfilDeporte = (param,param1, param2, param3, param4, token) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/usuario-perfil/deporte/${param}/${param1}/${param2}/${param3}/${param4}`, {
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


export const getPerfilUsuarioAllDeportes = (param1,param2, token) => {


    return fetch(`https://secure-temple-46604.herokuapp.com/api/usuario-perfil/${param1}/${param2}`, {
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




export const deleteUsuarioSuperAdmin = (usuarioId, token) => {
    return fetch(`https://secure-temple-46604.herokuapp.com/api/usuario-superadmin/${usuarioId} `, {
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


//