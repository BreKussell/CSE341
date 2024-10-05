const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// GET: Retrieve all data
router.get('/data', dataController.getAllData);

// POST: Create a new contact
router.post('/data', dataController.createContact);

// PUT: Update a contact by ID
router.put('/data/:id', dataController.updateContact);

// DELETE: Delete a contact by ID
router.delete('/data/:id', dataController.deleteContact);

module.exports = router;
