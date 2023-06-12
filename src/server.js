const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const shipmentTrackingRoutes = require('./routes/routes');

app.use('/', shipmentTrackingRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
