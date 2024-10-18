const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Contact:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - age
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the contact
 *         name:
 *           type: string
 *           description: The contact's name
 *         email:
 *           type: string
 *           description: The contact's email
 *         age:
 *           type: integer
 *           description: The contact's age
 *       example:
 *         name: John Doe
 *         email: john.doe@example.com
 *         age: 30
 */

/**
 * @swagger
 * /api/data:
 *   get:
 *     summary: Retrieve all contacts
 *     responses:
 *       200:
 *         description: A list of contacts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Contact'
 */
router.get('/data', dataController.getAllData);

/**
 * @swagger
 * /api/data:
 *   post:
 *     summary: Create a new contact
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contact'
 *     responses:
 *       201:
 *         description: Contact created successfully
 */
router.post('/data', dataController.createContact);

/**
 * @swagger
 * /api/data/{id}:
 *   put:
 *     summary: Update a contact by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the contact to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contact'
 *     responses:
 *       200:
 *         description: Contact updated successfully
 */
router.put('/data/:id', dataController.updateContact);

/**
 * @swagger
 * /api/data/{id}:
 *   delete:
 *     summary: Delete a contact by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the contact to delete
 *     responses:
 *       200:
 *         description: Contact deleted successfully
 */
router.delete('/data/:id', dataController.deleteContact);

module.exports = router;
