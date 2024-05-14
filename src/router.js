import { Router } from 'express'
import multer from 'multer' //lida com as imgs
import uploadConfig from './config/upload' //config onde/como vai subir as imgs
import SessionController from './controllers/SessionController'

const routes = new Router()

routes.post('/sessions', SessionController.store)

export default routes