const latitude = 42.72840000; // Example: New York City latitude
const longitude = -73.69180000; // Example: New York City longitude

const getNearbyMarkers = async () => {
    try {
        // Make a GET request to your local server with latitude and longitude as query parameters
        const response = await fetch(`http://localhost:3000/getNearby?lat=${latitude}&long=${longitude}`);
        
        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        // Parse the JSON response
        const data = await response.json();
        console.log("Nearby markers:", data);
        
    } catch (error) {
        console.error("Error fetching nearby markers:", error.message);
    }
};

// Run the function to test the endpoint
getNearbyMarkers();