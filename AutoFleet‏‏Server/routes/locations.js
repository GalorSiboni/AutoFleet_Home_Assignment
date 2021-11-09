const express = require('express');
const router = express.Router();
const { data } = require('../data/vehicles-location.json')

const {
    getAllLocations,
    getLocationById,
    getAllIdsInsidePolygon
} = require('../controllers/locations')

router.get('/location/:id', findSingleLocation, getLocationById)

router.get('/locations', getAllLocations)

router.post('/getAllIdsInsidePolygon', getAllIdsInsidePolygon)

async function findSingleLocation(req, res, next){
    let location
    try{
        location = data.find((location) => {location.id = (req.params.id)})
        if(location == null){
            return res.status(404).json({ message: 'cannot find location' })
        }
    }
    catch(err){
        res.status(500).json({ message: err.message })
    }
    res.location = location
    next()
}

module.exports = router
