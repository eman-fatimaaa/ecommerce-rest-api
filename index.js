const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require("./routes/users")

app.use("/api/users", userRoutes)

app.use((req, res, next) => {
  req.calculatedValue = 4 * 7;
  next();
});

app.get('/', (req, res) => {
  console.log(`Calculated value: ${req.calculatedValue}`);
  res.send(`The calculated value is: ${req.calculatedValue}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to my API ! e-commerce backed 🤳")
 })

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
