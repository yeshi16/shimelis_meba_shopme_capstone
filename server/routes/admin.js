import express from 'express'
import {getDb} from '../db/conn.mjs'

const router = express.Router()

// get all users 
router.get('/', async (req, res) => {
    try {
        const db = getDb()

        const users = await db.collection('users').find().toArray()
        res.json(users)

    } catch (err) {
        console.log(err)
    }
})


export default router