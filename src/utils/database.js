const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://127.0.0.1:27017/shipment_tracking';

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

module.exports = {
  connectToDatabase,
  closeDatabaseConnection
};
