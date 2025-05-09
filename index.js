const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const userRouter = require("./routes/users");
const productRouter = require("./routes/products");
const cors = require('cors');

const connectDB = require("./utils/db");
connectDB();



// CORS middleware
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   next();
// });
app.use(cors({
  origin: [
    "https://adorable-cactus-61f538.netlify.app",
    "http://localhost:5173"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  req.calculatedValue = 4 * 7;
  next();
});

// Middleware to hash password
const bcrypt = require("bcrypt");
const saltRounds = 10; // how many times the password is hashed

exports.hashPassword = (req, res, next) => {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    if (err) {
      return res.status(500).json({ error: "Error hashing passwords" });
    }
    req.hashedPassword = hash;
    console.log("Your hashed password:", hash);
    next();
  });
};

const { hashPassword } = require("./middleware/passencrypt");

// Route for /api/users
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my API! e-commerce backend 🤳");
});

app.post("/", hashPassword, (req, res) => {
  // Get the data from the request
  const { firstName, email } = req.body;
  const hashedPassword = req.hashedPassword;

  res.json({
    firstName,
    email,
    hashedPassword,
    _id: "randomId4567",
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});