// import express from 'express'
// import {getDb} from '../db/conn.mjs'

// const router = express.Router()

// // router.get('/',  (req, res) => {
// //     res.send('user list')
// // })

// // get all users 
// router.get('/', async (req, res) => {
//     try {
//         const db = getDb()

//         const users = await db.collection('users').find().toArray()
//         res.json(users)

//     } catch (err) {
//         console.log(err)
//     }
// })


// // create new user
// router.post('/', async (req, res) => {
//     try{
//         const db = getDb()
//         const {name, email} = req.body
//         const newUser = await db.collection('users').insertOne({name, email})
//         res.json({message: 'new user added'})
//     } catch (err) {
//         console.log('Error adding user')
//     }
// })

// // update user info 
// router.patch('/:id', async (req, res) => {
//     const db = getDb()
//     const user = await db.collection('users').findOne()
//     user.name = req.body.name || user.name
//     user.email = req.body.email || user.email
//     res.json(user)

// })

// // delete user
// router.delete('/:id', async (req, res) => {
    
//     const db = getDb()
//     const user = await db.collection('users').findOne()
//     if(!user) {
//         res.json({message: 'usesr is not in the database'})
//     } else {
//         await db.collection('users').deleteOne(user)
//         res.json({message: 'user deleted from the database'})
//     }
// })


// export default router

// routes/user.js
import express from 'express'
import { getDb } from '../db/conn.mjs'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const db = getDb()
        const users = await db.collection('users').find().toArray();
        res.json(users)
    } catch (err) {
        console.log('Error fetching users from database:')
        
    }
});

export default router;
