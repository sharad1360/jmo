const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static("./"));

// Send the index.html file for all requests
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'jaunthome.html'));
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

