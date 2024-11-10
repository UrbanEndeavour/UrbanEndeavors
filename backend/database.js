const { initializeApp } = require('firebase/app');
const { getDatabase, ref, get } = require('firebase/database');

// Initialize Firebase (assuming Firebase config is already set up)
const firebaseConfig = {
    apiKey: "AIzaSyA3_3E2v8HSDth5yM2NQXpkCZHQn5BiAwk",
    authDomain: "urban-endeavors.firebaseapp.com",
    databaseURL: "https://urban-endeavors-default-rtdb.firebaseio.com",
    projectId: "urban-endeavors",
    storageBucket: "urban-endeavors.firebasestorage.app",
    messagingSenderId: "417779618116",
    appId: "1:417779618116:web:b3708e5bfbd5f59b318711",
    measurementId: "G-N419ZLSDVN"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Function to print all locations under 'your_root_node/0/Locations'
async function getNearby(lat, long, eLat, eLong) {

    places = []
    // Reference to the 'Locations' node under 'your_root_node/0'
    const locationsRef = ref(db, 'your_root_node/0/Locations');
    
    try {
        // Fetch the data at the 'Locations' node
        const snapshot = await get(locationsRef);
        
        if (!snapshot.exists()) {
            counter = 0;
            console.log('No data available in the "Locations" node.');
        } else {
            const locations = snapshot.val();  // Fetch all data under 'Locations'

            Object.entries(locations).forEach(([location, collection]) => {
                
                dLat = Math.abs(lat - collection.Longitude);
                dLong = Math.abs(long - collection.Latitude);
                
                console.log(`\n\n\n\nmath stuff for ${location}:\n\n`);
                console.log(`current coordinates: \t\tlat: ${lat},  long: ${long}`);
                console.log(`${location}'s coordinates: \tlat: ${collection.Longitude},  long: ${collection.Latitude}`);
                console.log(`dlat equation: \t\t\t${dLat} = | ${lat} - ${collection.Longitude} |`);
                console.log(`dlong equation:\t\t\t${dLong} = | ${long} - ${collection.Latitude} |`);


                if (dLat <= eLat && dLong <= eLong) {

                    console.log(`${dLat} <= ${eLat} and ${dLong} <= ${eLong}, \ntherefore this item is being pushed to the places array.`);


                    places.push({
                        name: location,
                        latitude: collection.Latitude,
                        longitude: collection.Longitude,
                        description: collection.description,
                        points: collection.points
                    });

                }
            });
            
        }
    } catch (error) {
        console.error('Error fetching locations:', error);
    }

    return places;
}

module.exports = {
    getNearby
};
