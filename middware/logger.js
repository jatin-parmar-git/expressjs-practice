
const logger = (req, res, next) => {
       const method = req.method;
    const url = req.url;
    // const headers = req.headers;
    const time = new Date().getFullYear();
    console.log("ddd");
    console.log({ method, url, time });
    next();
};

module.exports = logger;