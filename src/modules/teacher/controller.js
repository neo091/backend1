const db = require('../../DB/crud')

const getAllRooms = (usuario_id) => {
    const table = 'aula_virtual'
    return db.select(table, { usuario_id: usuario_id })
}

const createVirtualRoom = (body) => {
    const table = 'aula_virtual'
    const data = {
        nombre_aula: body.name,
        nivel: body.level,
        aula_descripcion: body.desc,
        usuario_id: body.id
    }

    return db.insert(table, data)
}
module.exports = {
    createVirtualRoom,
    getAllRooms
}