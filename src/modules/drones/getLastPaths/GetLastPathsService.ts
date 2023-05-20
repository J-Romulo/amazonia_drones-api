import Knex from 'knex'
import { development } from '../../../../knexfile'

class GetLastPathsService {
    async execute(){
        const knex = Knex(development);

        return await knex('drones_path').orderBy('created_at', 'desc').limit(10).select('*');
    }
}

export { GetLastPathsService }