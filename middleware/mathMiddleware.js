const mathMiddleware = (req, res, next) => {
    // Example calculation (4 * 7)
    const result = 4 * 7;
    
    // Attach the result to the request object
    req.calculatedValue = result;

    console.log(`Arithmetic result: ${result}`);
    
    // Move to the next middleware or route
    next();
};

module.exports = mathMiddleware;
