// import express from 'express'
// import cors from 'cors'
// // Import connectDb function
// import {connectDb} from './db/conn.mjs';

// import userRoute from './routes/user.js'

// import dotenv from 'dotenv';
// dotenv.config();

// await connectDb()
// const app = express()
// const port = process.env.PORT || 3000

// // middleware for parsing json
// app.use(express.json())
// // app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:3000' // 'https://dummyjson.com/'
//    }));


// app.use('/user', userRoute)



// app.get('/', (req, res) => {
//     res.send('back-end ')
// })

// app.get('/products', (req, res) => {
//     res.send('products')
// })

// app.listen(port, () => {
//     console.log(`server listening on port: ${port}`)
// })

// server.js
import express from 'express';
import cors from 'cors';
import { connectDb } from './db/conn.mjs';
import userRoute from './routes/user.js';
import registerRoute from './routes/register.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

await connectDb();
const app = express();
const port = process.env.PORT || 4000;

// app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use('/user', userRoute);
app.use('/register', registerRoute);

app.get('/', (req, res) => {
    res.send('back-end running');
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
