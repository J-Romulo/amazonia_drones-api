import 'dotenv/config'

const development = {
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT as number | undefined,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        ssl: true
    },
    migrations: {
        directory: './src/migrations',
    },
};

export { development }