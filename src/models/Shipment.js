const mongoose = require('mongoose');

// Define the schema for the Shipment collection
const shipmentSchema = new mongoose.Schema({
  id: String,
  customerId: String,
  createdDate: Date,
  carrier: String,
  location: String,
  status: String,
});

// Create the Shipment model based on the schema
const Shipment = mongoose.model('shipments', shipmentSchema);

// Export the Shipment model
module.exports = Shipment;