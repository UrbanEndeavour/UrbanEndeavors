var admin = require("firebase-admin");

// Replace with the actual path to your serviceAccountKey.json file
const serviceAccount = require("C:/Users/vadiwa/Dropbox/GitHub/urban-endeavors-firebase-adminsdk-w66xy-e8433ea4c5.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://urban-endeavors-default-rtdb.firebaseio.com"
});

// Read the JSON file
const fs = require('fs');
const jsonData = JSON.parse(fs.readFileSync('locations.json'));

// Write the data to the database
const db = admin.database();
const ref = db.ref('your_root_node');
ref.set(jsonData)
  .then(() => {
    console.log('Data imported successfully!');
  })
  .catch((error) => {
    console.error('Error importing data:', error);
  });