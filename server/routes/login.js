import express from 'express'
import { getDb } from '../db/conn.mjs'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const {email} = req.query
        const db = getDb()
        const user = await db.collection('users').find({email}).toArray();
        if(!user){
            console.log('login with registered email or register')
            return
        }
        res.json(user)
    } catch (err) {
        console.log('Error fetching users from database:')
        
    }
});

export default router;