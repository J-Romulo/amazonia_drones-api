import express from 'express'
import { createServer } from 'http';
import { routes } from './routes'

const app = express()
const server = createServer(app)

const port = 3000;

app.use(express.json())
app.use(routes)
server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})