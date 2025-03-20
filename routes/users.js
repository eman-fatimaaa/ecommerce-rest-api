const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Users page')
})

router.post('/', (req, res) => {
    res.send('you have reached the POST request !')
})

module.exports = router