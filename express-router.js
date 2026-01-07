const express = require('express');
const path = require('path');
const app = express();
const products = require('./data');

//setup static assets and middleware
// app.use(express.static('./public'));


app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

app.get('/api/products', (req, res) => {
    const newProducts = products.products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    });
    res.json(newProducts);
});

app.get('/api/products/:isssd', (req, res) => {
    var isssd = req.params.isssd;
    const singleProduct = products.products.find((product => product.id === Number(isssd)));
    if (!singleProduct) {
        return res.status(404).send("Product not found");   
    }
    return res.json(singleProduct);
});

app.get('/api/products/:id/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    return res.send("Hello world");
});

app.get('/api/v1/query', (req, res) => {
    console.log(req.query);
    return res.send("Hello world");
});

// app.get('/', (req, res) => {
    // res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
// });

app.use((req, res) => {
    res.status(404).send("Page not found - 404");
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});