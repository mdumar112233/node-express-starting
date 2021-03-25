const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());


// const  rootCall = (req, res) => res.send('thank you');

const users = ['uamr', 'faruk', 'rofik', 'rafi'];

app.get('/', (req, res) => {
    const fruit = {
        product: 'apple'
    }
    res.send(fruit);
});


app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    console.log(req.query);
    const name = users[userId];
    res.send({userId, name})
})

// post
app.post('/addUser', (req, res) => {
    // save to database
    const user = req.body;
    user.id = 55;
    res.send(user);
})


app.listen(3000, () => console.log('listening to port 3000'));














