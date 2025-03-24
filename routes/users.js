const express = require("express")
const router = express.Router()
const { hashPassword } = require("../middleware/passencrypt")
const { userLogIn, userSignUp } = require("../controllers/userControllers")



// router.get('/', (req, res) => {
//     res.send('Users page')
// })
router.get("/", userLogIn)


router.post("/signup",hashPassword, userSignUp);
module.exports = router