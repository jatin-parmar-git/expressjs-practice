const authorize = (req, res, next) => {
    console.log('Authorizing... Done');
    next();
};

module.exports = authorize;