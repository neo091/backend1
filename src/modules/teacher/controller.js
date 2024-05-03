const db = require('../../DB/crud')
const { err_messages } = require('../../utils/messages')


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


const deleteVirtualRoom =async (id_room, user_id)=>{
    const table = 'tcc.aula_virtual'

    const virtual_room = await db.select(table, {aula_id:id_room})


    if(virtual_room[0].usuario_id === user_id){
        return await db.deleteWhereID(table, {aula_id:id_room})
    }else{
        return {error:err_messages.CANT_DELETE}
    }

    
}
module.exports = {
    createVirtualRoom,
    getAllRooms,
    deleteVirtualRoom
}