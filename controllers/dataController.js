const Data = require('../models/data');

// Get all data from the MongoDB collection
exports.getAllData = async (req, res) => {
    try {
        const data = await Data.find();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching data', error: err });
    }
};
