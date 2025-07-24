const Camera = require('../models/Camera');

// Create a new incident
exports.createIncident = async (req, res) => {
  try {
    const incident = new Camera(req.body);
    await incident.save();
    res.status(201).json(incident);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all incidents
exports.getAllIncidents = async (req, res) => {
  try {
    const incidents = await Camera.find().sort({ timestamp: -1 });
    res.json(incidents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
