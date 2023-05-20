import { getRoutes } from "../../../providers/MockedAPI"
import { Dijkstra, Graph } from "../../../util/Dijkstra"
import Knex from 'knex'
import { development } from '../../../../knexfile'

class GetFastestRouteService {
    async execute(starting_point: string, object: string, destination: string) {
        const knex = Knex(development)

        const routes: Graph = await getRoutes()
        const dijkstra: Dijkstra = new Dijkstra(routes)

        const fastestRouteToObject = dijkstra.findShortestPath(starting_point, object)
        const fastestRouteFromObjectToDestination = dijkstra.findShortestPath(object, destination)

        const path = fastestRouteToObject.path.concat(fastestRouteFromObjectToDestination.path)
        const total_time = fastestRouteToObject.distance + fastestRouteFromObjectToDestination.distance

        await knex('drones_path').insert({starting_point, object, destination, path: path.join(' - '), total_time})

        return {
            path,
            total_time
        }
    }
}

export { GetFastestRouteService }