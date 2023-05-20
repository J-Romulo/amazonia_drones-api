import { errors } from 'celebrate';
import express from 'express'
import { routes } from './routes'
import 'dotenv/config'

const app = express()

const PORT = 3000;

app.use(express.json())
app.use(routes)
app.use(errors())

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})