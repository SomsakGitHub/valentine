const express = require('express')
const Contact = require('../models/contact')
const router = new express.Router()

//post.
router.post('/contact', async (req, res) => {
    const contact = new Contact(req.body)

    console.log("contact", contact)

    try {
        await contact.save()
        res.status(201).send({contact})
    } catch (e) {
        res.status(400).send(e)
    }
})

//get.
router.get('/users', async (req, res) => {

    try {
        const user = await User.find()
        if (user.length < 1) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

//patch.
router.patch('/user/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const user = await User.findById(req.params.id)

        updates.forEach((update) => user[update] = req.body[update])
        await user.save()

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

//delete.
router.delete('/user/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router