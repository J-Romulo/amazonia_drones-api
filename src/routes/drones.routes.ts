import { celebrate, Segments } from 'celebrate'
import { Router } from 'express'
import Joi from 'joi'
import { GetFastestRouteController } from '../modules/drones/getFastestRoute/GetFastestRouteController'
import { GetLastPathsController } from '../modules/drones/getLastPaths/GetLastPathsController'

const dronesRoutes = Router()

const getFastestRouteController = new GetFastestRouteController()
const getLastPathsController = new GetLastPathsController()

dronesRoutes.post(
    '/path', 
    celebrate({
        [Segments.BODY]: {
            starting_point: Joi.string().pattern(new RegExp("^[a-hA-H][1-8]$")).required(),
            object: Joi.string().pattern(new RegExp("^[a-hA-H][1-8]$")).required(),
            destination: Joi.string().pattern(new RegExp("^[a-hA-H][1-8]$")).required(),
        }
    }),
    getFastestRouteController.handle
)

dronesRoutes.get(
    '/paths',
    getLastPathsController.handle
)

export { dronesRoutes }