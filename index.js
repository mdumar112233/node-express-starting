const express = require('express');

const app = express();

// const  rootCall = (req, res) => res.send('thank you');

app.get('/', (req, res) => {
    res.send('thank you i am here');
});

app.listen(3000, () => console.log('listening to port 3000'));














