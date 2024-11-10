const express = require('express');
const { printLocations } = require('./database'); // Import the new function
const server = express();

server.use(express.json());

// Endpoint to get nearby markers (keep your previous endpoint if needed)
server.get('/getNearby', async (req, res) => {

    verify = -2;
    // First, print all collections in the database
    verify = await printLocations();

    const { lat, long } = req.query;
    if (!lat || !long) {
        return res.status(400).json({ error: "Latitude and longitude are required" });
    }

    // You can still process the `getNearbyMarkers` logic here, if necessary
    res.json({ numItems: verify });
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});