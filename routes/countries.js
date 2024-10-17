const express = require('express');
const router = express.Router();
const data = require('../data/countries.json');

router.get('/', (req, res) => {
    res.status(200).json(data);
});

router.get('/:id', (req, res) => {
    const reqCountryId = req.params.id;
    const country = data.countries.filter(countryFilter => {
        if(countryFilter.id.toString() === reqCountryId){
            return countryFilter;
        }
    });
    res.status(200).json(country);
});

module.exports = router;