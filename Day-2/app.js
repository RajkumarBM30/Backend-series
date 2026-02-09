const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello This is Home page!');
})

app.get('/about', (req, res)=>{
    res.send('Hello This is About page!');
})

app.get('/contact', (req, res) =>{
    res.send('hello This is Contact page!')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})