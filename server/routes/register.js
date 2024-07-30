import express from 'express'
import { getDb } from '../db/conn.mjs'
const router = express.Router()

router.get('/', async (req, res) => {
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
