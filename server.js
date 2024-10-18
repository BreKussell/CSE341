require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB connection
const dbURI = process.env.MONGO_URI;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));

// Swagger configuration
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Contacts API',
      version: '1.0.0',
      description: 'API for managing contacts',
      contact: {
        name: 'Your Name',
        url: 'http://yourdomain.com',
        email: 'youremail@domain.com'
      },
      servers: [
        {
          url: 'http://yourdomain.com' // Change to your actual API URL once deployed
        }
      ]
    }
  },
  apis: ['./routes/apiRoutes.js'] // Path to your API docs
};

// Initialize Swagger docs
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use('/api', require('./routes/apiRoutes'));

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
