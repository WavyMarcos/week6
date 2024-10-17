const express = require('express');
const port = 3000;
const booksRouter = require('./routes/books');
const countriesRouter = require('./routes/countries');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    //res.send('<h1>Helloski!</h1>');
    //res.sendStatus(200);
    //res.status(500).json({message: "Internal error. Try again later!"});
    //res.download('server.js');
    res.render('index');
});

app.use('/books', booksRouter);
app.use('/countries', countriesRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
});