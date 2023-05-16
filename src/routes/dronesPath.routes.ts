import { Router } from 'express'
import { GetFastestRouteController } from '../modules/paths/useCases/getFastestRoute/GetFastestRouteController'

const dronesRoutes = Router()

const getFastestRouteController = new GetFastestRouteController()

dronesRoutes.get('/path', getFastestRouteController.handle)

export { dronesRoutes }