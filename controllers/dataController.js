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

// Create a new contact
exports.createContact = async (req, res) => {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        const newContact = new Data({ name, email, age });
        const savedContact = await newContact.save();
        res.status(201).json({ message: 'Contact created', id: savedContact._id });
    } catch (err) {
        res.status(500).json({ message: 'Error creating contact', error: err });
    }
};

// Update a contact by ID
exports.updateContact = async (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        const updatedContact = await Data.findByIdAndUpdate(id, { name, email, age }, { new: true });
        if (!updatedContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json({ message: 'Contact updated successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error updating contact', error: err });
    }
};

// Delete a contact by ID
exports.deleteContact = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedContact = await Data.findByIdAndDelete(id);
        if (!deletedContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting contact', error: err });
    }
};
