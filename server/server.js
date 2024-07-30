import express from 'express';
import cors from 'cors';
import { connectDb } from './db/conn.mjs';
import userRoute from './routes/user.js';
import registerRoute from './routes/register.js';
import CartRoute from './routes/cart.js';
import contactRoute from './routes/contact.js';
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
app.use('/cart', CartRoute);
app.use('/contact', contactRoute);


app.get('/', (req, res) => {
    res.send('back-end running');
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
