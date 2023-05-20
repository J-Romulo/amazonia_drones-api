import {Request, Response} from 'express'
import { GetFastestRouteService } from './GetFastestRouteService'

class GetFastestRouteController {
    async handle(request: Request, response: Response) {
        const {starting_point, object, destination} = request.body;

        const getFastestRouteService = new GetFastestRouteService();
        
        const fastestRoute = await getFastestRouteService.execute(starting_point, object, destination);

        return response.status(200).json(fastestRoute);
    }
}

export { GetFastestRouteController }