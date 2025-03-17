const express = require('express');
const mathMiddleware = require('./middleware/mathMiddleware'); // Import middleware

const app = express();

// Use the middleware for a test route
app.get('/calculate', mathMiddleware, (req, res) => {
    res.json({ message: "Middleware calculation successful!", result: req.calculatedValue });
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
