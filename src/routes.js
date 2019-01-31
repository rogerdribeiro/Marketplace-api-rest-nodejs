const express = require('express')

const routes = express.Router()

const controllers = require('./app/controllers')
const authMiddleware = require('./app/middlewares/auth')

routes.post('/users', controllers.UserController.store)
routes.post('/sessions', controllers.SessionController.store)
routes.get('/teste', authMiddleware, (req, res) => res.json({ ok: true }))

module.exports = routes
