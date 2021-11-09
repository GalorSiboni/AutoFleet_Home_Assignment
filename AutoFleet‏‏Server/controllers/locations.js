const data = require('../data/vehicles-location.json')
const pointInPolygon = require('point-in-polygon');

const getAllLocations = async (req, res) => {
    try{
        res.status(201).json(data)
    }
    catch(error){
        res.status(400).json({ message: error.message })
    }
}

const getLocationById = async (req, res) => {
    res.status(200).send(res.location)
}

const getAllIdsInsidePolygon = async (req, res) => {
    let tempData = []
    tempData = data.filter(car =>  pointInPolygon([car.location.lat, car.location.lng], req.body));
    tempData = tempData.map(item => item.id)   
    try {
        res.status(200).json(tempData)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    getAllLocations,
    getLocationById,
    getAllIdsInsidePolygon
}