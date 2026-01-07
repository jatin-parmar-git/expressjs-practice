const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send("Hello World! Home pageeeee");
    // res.json({ message: 'Home page Hello World!' }); //sending json response
});

app.get('/about', (req, res) => {
    res.status(200).send("Hello World! About page");
});

app.get('/contact', (req, res) => {
    res.status(200).send("Hello World! Contact page");
});

// Catch-all route for 404
app.use((req, res) => {
    res.status(404).send("Page not found - 404");
});

//app.get
// app.post
// app.put
// app.delete

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});