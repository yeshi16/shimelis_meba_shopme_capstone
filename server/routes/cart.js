import express from 'express'
import { getDb } from '../db/conn.mjs'
import { ObjectId } from 'mongodb';
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const db = getDb()
        const cartItem = await db.collection('cart').find().toArray();
        res.json(cartItem)
    } catch (err) {
        console.log('Error fetching cart from database:')

    }

    // res.send('Cart Page')
});

// create new cartItem
router.post('/', async (req, res) => {
    const { title, price, thumbnail, quantity } = req.body

    try {
        const db = getDb()
        const newCartItem = await db.collection('cart').insertOne({ title, price, thumbnail, quantity })
        res.json({ message: 'Item added to cart' })
    } catch (err) {
        console.log('Error adding cartItem')
    }
})

// change quantity in cartitem
router.patch('/:id', async (req, res) => {
    try {
        const db = getDb()
        const itemId = req.params.id
        const cartItem = await db.collection('cart').findOne({ _id: new ObjectId(itemId) })
        // update quantity 
        const updateCartItem = {
            title: cartItem.title,
            price: cartItem.price,
            thumbnail: cartItem.thumbnail,
            quantity: cartItem.quantity + req.body.quantity
        }
        await db.collection('cart').updateOne({ _id: new ObjectId(itemId) }, { $set: updateCartItem })
        // console.log(cartItem)
        res.json({ message: 'cartItem quantity updated' })
    } catch (err) {
        console.log('Error updating cart item')
    }
})





// // delete cart Item
router.delete('/:id', async (req, res) => {

    const db = getDb()
    const cartItem = await db.collection('cart').findOne()

    await db.collection('cart').deleteOne(cartItem)
    res.json({ message: 'item deleted from cart' })

})

export default router;
