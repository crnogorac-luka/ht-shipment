const express = require('express');
const app = express();

// Import the routes
const shipmentTrackingRoutes = require('./routes/routes');

// Mount the routes
app.use('/', shipmentTrackingRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
