// Replace the import statement with require
const { getFirestore, collection, getDocs, doc } = require('firebase/firestore');  // Add 'doc' here
const { initializeApp } = require('firebase/app');


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
const db = getFirestore(app);

// Function to print all documents in the 'locations' sub-collection
async function printLocations() {
    counter = -1;
    // Reference to the 'locations' sub-collection under the document with ID '0'
    const docRef = doc(db, 'root-collection', '0');  // Access document '0' in 'root-collection'
    const colRef = collection(docRef, 'locations'); // Access the 'locations' subcollection
    
    const snapshot = await getDocs(colRef); // Get all documents in the 'locations' subcollection  // Reference to the sub-collection 'locations' under document '0'
    
    // Check if there are any documents and log them
    if (snapshot.empty) {
        counter = 0;
        console.log('No documents found in the "locations" sub-collection.');
    } else {
        snapshot.forEach(doc => {
            counter += 1;
        });
    }

    return counter;
}
module.exports = {
    printLocations
};