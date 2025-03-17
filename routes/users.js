const express = require("express")
const PORT = process.env.PORT || 5001;
const router = express.Router()
const userRoutes = require("./routes/users")

router.get('/', (req, res) => {
    res.send('Users page')
})

router.post('/', (req, res) => {
    const firstName = req.body.firstName
    const email = req.body.email
    const password = req.body.password
    res.json({firstName, email, password})
    console.log(firstName, email, password)
})

module.exports = router