const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Hello");
});

// Using app.listen instead of http.createServer
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});