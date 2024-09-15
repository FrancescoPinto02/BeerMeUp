const createError = require('http-errors');

// Error Handler Middleware
const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    // Html page response
    if (req.accepts('html')) {
        return res.status(statusCode).render('error', { message });
    }

    // Json Response
    if (req.accepts('json')) {
        return res.status(statusCode).json({ error: message });
    }

    // Default Response
    res.status(statusCode).send(message);
};

module.exports = errorHandler;