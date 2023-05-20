import 'dotenv/config'

const development = {
    client: 'pg',
    connection: {
        host: process.env.HOST,
        port: process.env.PORT as number | undefined,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        ssl: true
    },
    migrations: {
        directory: './src/migrations',
    },
};

export { development }