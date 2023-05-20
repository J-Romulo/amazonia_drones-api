import { Router } from 'express'
import { dronesRoutes } from './drones.routes'

const routes = Router()

routes.get('/health', (req, res) => {
    return res.status(200).send()
})

routes.use('/drones', dronesRoutes)

export { routes }