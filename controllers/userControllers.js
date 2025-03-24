const bcrypt = require('bcrypt');
const User = require("../models/userModels")
exports.userLogIn = (req, res) => {
    res.send("User login");
};


exports.userSignUp = async (req, res) => {
    try {
        const { firstName, lastName, imageUrl, email, password, role } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Hash Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName,
            lastName,
            imageUrl,
            email,
            password: hashedPassword,
            role,
            inventory: [],
        });

        const savedUser = await newUser.save();
        res.status(201).json({
            _id: savedUser._id,
            firstName: savedUser.firstName,
            lastName: savedUser.lastName,
            imageUrl: savedUser.imageUrl,
            email: savedUser.email,
            role: savedUser.role,
            inventory: savedUser.inventory
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
