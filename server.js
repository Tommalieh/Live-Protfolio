'use strict'

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('/public'));

app.get('/hello', (request, response) => {
    response.status(200).send('Hello');
});

app.get('/data', (request, response) => {
    let data = [{name: 'JavaScript'}, {name: 'python'}, {name: 'C#'}];
    response.status(200).json(data);
});

app.get('*', (request, response) => {
    response.status(200).json('404 Not Found');
});


app.listen(PORT, () => console.log(`listening to the ${PORT}`));