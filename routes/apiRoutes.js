const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// Define your routes
router.get('/data', dataController.getAllData);

module.exports = router;
