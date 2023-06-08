const express = require('express');
const { connectToDatabase, closeDatabaseConnection, populateShipments } = require('./utils/database');

const app = express();

// Connect to the database and populate the shipments
connectToDatabase()
  .then(() => populateShipments())
  .catch((error) => {
    console.error('Failed to initialize the database:', error);
    process.exit(1);
  });

// Your routes and other server setup code here

// Close the database connection when the server is shut down
process.on('SIGINT', () => {
  closeDatabaseConnection();
  process.exit();
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
