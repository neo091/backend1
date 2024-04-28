const express = require('express')
const router = express.Router()
const seguridad = require('./seguridad')
const resposes = require('../../red/responses')
const controller = require('./controller')

//consulta todas las entradas de la db que contengan el id del usuario seleccionado
router.get('/all-rooms/:id', seguridad(), async (req, res, next) => {
    //id de usuario recibido por parametro id
    const usuario_id = req.params.id


    if (!usuario_id || usuario_id === '') {
        return resposes.error(req, res, { message: 'user ID required!' })
    }

    const getAll = await controller.getAllRooms(usuario_id)
    return resposes.success(req, res, getAll, 200)
})

router.post('/add-virtual-room', seguridad(), async (req, res, next) => {
    const body = req.body
    const createVirtualRoom = await controller.createVirtualRoom(body)
    return resposes.success(req, res, { message: 'added correctly', insertId: createVirtualRoom.insertId }, 200)
})

module.exports = router