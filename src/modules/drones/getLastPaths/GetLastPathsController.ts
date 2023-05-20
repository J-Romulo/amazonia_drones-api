import {Request, Response} from 'express'
import { GetLastPathsService } from './GetLastPathsService'

class GetLastPathsController {
    async handle(request: Request, response: Response) {
        const getLastPathService = new GetLastPathsService();
        
        const lastPaths = await getLastPathService.execute();

        return response.status(200).json(lastPaths);
    }
}

export { GetLastPathsController }