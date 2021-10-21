const upperFirts = (param) => {

    if(typeof param === 'string'){

        return param[0].toUpperCase() + param.substr(1).toLowerCase()

    }

    return param
}


module.exports = {upperFirts}