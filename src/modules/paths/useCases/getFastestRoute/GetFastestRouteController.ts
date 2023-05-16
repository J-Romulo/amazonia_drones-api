import {Request, Response} from 'express'

class GetFastestRouteController {
    async handle(request: Request, response: Response) {
        return response.status(200).json({})
    }
}

export { GetFastestRouteController }