import express from 'express'
import { getDb } from '../db/conn.mjs'
import { ObjectId } from 'mongodb';
const router = express.Router()

// get all cart items
router.get('/', async (req, res) => {
    try {
        const db = getDb()
        const cartItem = await db.collection('cart').find().toArray();
        res.json(cartItem)
    } catch (err) {
        console.log('Error fetching cart from database:')

    }
});

// create new cartItem (add item to cart)
router.post('/', async (req, res) => {
    const { title, price, thumbnail, quantity, description } = req.body

    try {
        const db = getDb()
        const newCartItem = await db.collection('cart').insertOne({ title, price, thumbnail, description, quantity })
        res.json({ message: 'Item added to cart' })
    } catch (err) {
        console.log('Error adding cartItem')
    }
})

// change quantity in cart item
router.put('/:id', async (req, res) => {
    try {
        const db = getDb()
        const itemId = req.params.id
        const cartItem = await db.collection('cart').findOne({ _id: new ObjectId(itemId) })
        // update quantity 
        const updateCartItem = {
            title: cartItem.title,
            price: cartItem.price,
            thumbnail: cartItem.thumbnail,
            quantity: cartItem.quantity + req.body.quantity,
            description: cartItem.description

        }
        await db.collection('cart').updateOne({ _id: new ObjectId(itemId) }, { $set: updateCartItem })
        // console.log(cartItem)
        res.json({ message: 'cartItem quantity updated' })
    } catch (err) {
        console.log('Error updating cart item')
    }
})



//delete cart Item by id
router.delete('/:id', async (req, res) => {
    const itemId = req.params.id
    const db = getDb()
    try {
        const newCart = await db.collection('cart').deleteOne({_id: new ObjectId(itemId) })
        // console.log(newCart)
        res.json({message: "cart item deleted"})
    } catch (error) {
        
    }

})

export default router;
