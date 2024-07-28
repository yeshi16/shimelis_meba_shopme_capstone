import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    entryDate: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('Contact', contactSchema)