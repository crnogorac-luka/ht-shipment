const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://127.0.0.1:27017/';

async function connectToDatabase() {
  // Create a new MongoClient instance
const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db('shipment_tracking');
    const collection = db.collection('shipments');
    return collection;
  } catch (e) {
    console.error('Failed to connect to MongoDB:', e);
    throw e;
  }
}

module.exports = connectToDatabase;
