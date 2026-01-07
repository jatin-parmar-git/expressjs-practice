const express = require('express');
const logger = require('./middware/logger');
const authorize = require('./middware/authorize');
const {products, people} = require('./data');
const app = express();

//middle ware on each route
// app.use([authorize, logger]);

//middle ware on specific route
app.use('/api',[authorize, logger])

app.get('/', (req, res) => {
     res.send('<h1>Home Page</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1>');
});

app.get('/people', (req, res) => {
  res.json(people);
});


app.get('/api/products', (req, res) => {
    res.json(products.products);
    // const newProducts = products.products.map((product) => {
    //     const { id, name, image } = product;
    //     return { id, name, image };
    // });
    // res.json(newProducts);
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});