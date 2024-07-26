import express from 'express'
import cors from 'cors'
// Import connectDb function
import {connectDb} from './db/conn.mjs';

import userRoute from './routes/user.js'

import dotenv from 'dotenv';
dotenv.config();

await connectDb()
const app = express()
const port = process.env.PORT || 3000

// middleware for parsing json
app.use(express.json())
app.use(cors());


app.use('/user', userRoute)


app.get('/', (req, res) => {
    res.send('back-end ')
})

app.listen(port, () => {
    console.log(`server listening on port: ${port}`)
})