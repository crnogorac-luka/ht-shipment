const express = require("express");
const { ObjectId } = require('mongodb');
const router = express.Router();
const connectToDatabase = require("../utils/conn.js");

router.get("/shipmentTracking", async (req, res) => {
  try {
    const collection = await connectToDatabase();
    const results = await collection.find({}).toArray();
    res.send(results).status(200);
  } catch (error) {
    console.error("Failed to retrieve shipments:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Define the /shipmentTracking/:id route for retrieving a single shipment
router.get("/shipmentTracking/:id", async (req, res) => {
  

  try {
    const {id} = req.params;
    const collection = await connectToDatabase();
    const result = await collection.findOne({_id: new ObjectId(id)})

    if (result) {
      res.send(result).status(200);
    } else {
      res.status(404).send("Shipment not found");
    }
  } catch (error) {
    console.error("Failed to retrieve shipment:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Define the /shipmentTracking/:id route for updating a shipment
router.put("/shipmentTracking/:id", async (req, res) => {
  const shipmentId = req.params.id;
  const updatedData = req.body; // Assuming you pass the updated data in the request body

  try {
    const collection = await connectToDatabase();
    const result = await collection.updateOne(
      { _id: shipmentId },
      { $set: updatedData }
    );
    res.sendStatus(200);
  } catch (error) {
    console.error("Failed to update shipment:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Define the /shipmentTracking route for creating a new shipment
router.post("/shipmentTracking", async (req, res) => {
  const newShipment = req.body; // Assuming you pass the new shipment data in the request body

  try {
    const collection = await connectToDatabase();
    const result = await collection.insertOne(newShipment);
    res.sendStatus(201);
  } catch (error) {
    console.error("Failed to create new shipment:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Define the /shipmentTracking/:id route for deleting a shipment
router.delete("/shipmentTracking/:id", async (req, res) => {
  const shipmentId = req.params.id;

  try {
    const collection = await connectToDatabase();
    const result = await collection.deleteOne({ _id: shipmentId });
    res.sendStatus(204);
  } catch (error) {
    console.error("Failed to delete shipment:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
