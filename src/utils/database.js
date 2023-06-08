const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017/shipment_tracking';

// Create a new MongoClient instance
const client = new MongoClient(uri);

// Function to establish a connection to the MongoDB instance
async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db(); // Return the MongoDB database object
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    throw err;
  }
}

// Function to close the MongoDB connection
function closeDatabaseConnection() {
  client.close();
  console.log('Disconnected from MongoDB');
}

// Function to populate the shipments collection
async function populateShipments() {
  try {
    const db = client.db();
    const shipmentCollection = db.collection('shipments');
  
    const shipments = [
      // Define your shipment data here
      {
        id: '1',
        customerId: '123',
        createdDate: new Date(),
        carrier: 'Carrier 1',
        location: 'Location 1',
        status: 'Status 1'
      },
      // Add more shipment objects as needed
    ];
  
    await shipmentCollection.insertMany(shipments);
    console.log('Shipments populated successfully');
  } catch (error) {
    console.error('Failed to populate shipments:', error);
    throw error;
  }
}

module.exports = {
  connectToDatabase,
  closeDatabaseConnection,
  populateShipments,
};
