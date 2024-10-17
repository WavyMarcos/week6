const express = require('express');
const router = express.Router();
const data = require('../data/books.json');

router.get('/', (req, res) => {
    res.status(200).json(data);
});

router.get('/:id', (req, res) => {
    const reqBookId = req.params.id;
    const book = data.books.filter(bookFilter => {
        if(bookFilter.id.toString() === reqBookId){
            return bookFilter;
        }
    });
    res.status(200).json(book);
});

module.exports = router;