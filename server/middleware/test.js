function testMiddleware(req, res, next) {
    // eslint-disable-next-line no-console
    console.log('Testing Middleware...');
    next();
}

module.exports = testMiddleware;