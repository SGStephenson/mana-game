const express = require("express");
const path = require('path');

const characterRouter = require('./routes/CharacterRouter');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, "views"));

app.get('/', (req, res) => {
    res.render('index', {stuff: 'stuff'});
});

app.use('/character', characterRouter);

app.listen(port, () => {
    console.log(`Example app is lisenting on port ${port}`);
});