const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    lastName: {
        type: String
    },
    avatar: {
        type: String
    },
    nickname: {
        type: String
    },
    company: {
        type: String
    },
    jobTitle: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    birthday: {
        type: String
    },
    notes: {
        type: String
    }
})

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact