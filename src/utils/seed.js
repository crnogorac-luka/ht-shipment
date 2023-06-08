const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/your_database';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

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

const seedDatabase = async () => {
  try {
    await client.connect();
    const db = client.db();
    const shipmentCollection = db.collection('shipments');
    await shipmentCollection.insertMany(shipments);
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Failed to seed the database:', error);
  } finally {
    client.close();
  }
};

seedDatabase();
