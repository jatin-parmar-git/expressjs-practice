const {people} = require('../data');

const getPeople = (req, res) => {
    res.json({success:true, data: people});
};

const createPerson = (req, res) => {
    const {name} = req.body;
    if(!name){
        return res
        .status(400)
        .json({success:false, msg:'Please provide name value'});
    }
    res.status(201).json({success:true, person:name});
};

module.exports = {
    getPeople,
    createPerson
};