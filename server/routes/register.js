import express from 'express'
import { getDb } from '../db/conn.mjs'

const router = express.Router()

router.get('/', async (req, res) => {
    // try {
    //     const db = getDb()
    //     const users = await db.collection('users').find().toArray();
    //     res.json(users)
    // } catch (err) {
    //     console.log('Error fetching users from database:')
        
    // }

    res.send('register Page')
});

// create new user
router.post('/', async (req, res) => {
    // const name = req.body.name
    const {name, email} = req.body

    // console.log(name + " " + email)
    // res.send('You are registered')

    try{
        const db = getDb()
        const newUser = await db.collection('users').insertOne({name, email})
        res.json({message: 'new user added'})
    } catch (err) {
        console.log('Error adding user')
    }
})

export default router;
