const message = require('../../utils/messages')
const db = require('./../../DB/crud')
//bcrypt se encarga de sifrar las contrasenias
const bcrypt = require('bcrypt')
const config = require('../../config')

const TABLE = 'usuarios'
const SALT_ROUND = config.jwt.salt

const register = async ({ name, email, password }) => {

    //verificamos si en la db no existe ese correo
    const verifyUser = await db.selectOneWhere(TABLE, { correo: email })

    //si el usuario existe o no es nulo
    if (verifyUser || verifyUser != null) {
        return { error: true, message: message.err_messages.ALREADY_TAKEN }
    }

    //con los datos recibidos generamos el nuevo usuario
    const user = {
        nombre: name,
        correo: email,
        contrasenia: await bcrypt.hash(password, SALT_ROUND),//genera la contrasenia sifrada
        rol_id: 1 //usuario por defecto
    }

    //procede a registrar o insertar en la DB
    const registered = await db.insert(TABLE, user)
    return registered
}

module.exports = {
    register
}