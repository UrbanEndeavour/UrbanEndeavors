const express = require('express');
const { getNearby } = require('./database'); // Import the new function
const server = express();

server.use(express.json());


function calculateEpsilonsForRadius(latitude, radiusInFeet = 500) {
    const earthRadiusFeet = 364000; // Approximate radius of the Earth in feet per degree latitude
    const epsilonLat = radiusInFeet / earthRadiusFeet;

    // Adjust longitude epsilon by the latitude
    const epsilonLon = radiusInFeet / (earthRadiusFeet * Math.cos(latitude * (Math.PI / 180)));

    return {
        epsilonLat: epsilonLat,
        epsilonLon: epsilonLon
    };
}


// Endpoint to get nearby markers (keep your previous endpoint if needed)
server.get('/getNearby', async (req, res) => {

    const { lat, long } = req.query;
    
    console.log(`Latitude: ${lat}`);
    console.log(`Longitude: ${long}`);

    // Parse latitude and longitude as floats to ensure correct calculations
    const latitude = parseFloat(lat);
    const longitude = parseFloat(long);

    if (isNaN(latitude) || isNaN(longitude)) {
        return res.status(400).json({ error: "Latitude and longitude must be valid numbers" });
    }

    const { epsilonLat, epsilonLon } = calculateEpsilonsForRadius(latitude);

    locations = await getNearby(latitude, longitude, epsilonLat, epsilonLon);

    try {
        // You can still process the `getNearbyMarkers` logic here, if necessary
        // Return the list of nearby locations as the response
        res.json({ datastuff: locations });
    } catch (error) {
        console.error('Error fetching nearby locations:', error);
        res.status(500).json({ error: "Failed to fetch nearby locations" });
    }
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});