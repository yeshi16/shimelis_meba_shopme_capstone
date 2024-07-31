import express from 'express'
import { getDb } from '../db/conn.mjs'


const router = express.Router()

router.get('/', async (req, res) => {

    res.send('Contact Page')
});

// create new message from user
router.post('/', async (req, res) => {
    const {name, email, message} = req.body

    try{
        const db = getDb()
        const userMessage = await db.collection('contact').insertOne({name, email, message})
        res.json({message: 'contact message saved'})
    } catch (err) {
        console.log('Error adding user')
    }
    
})

export default router;
