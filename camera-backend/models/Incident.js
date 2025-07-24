// models/Incident.js
const mongoose = require('mongoose');

const incidentSchema = new mongoose.Schema({
  cameraId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Camera',
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  tsStart: {
    type: Date,
    required: true,
  },
  tsEnd: {
    type: Date,
    required: true,
  },
  thumbnailUrl: {
    type: String,
    required: true,
  },
  resolved: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

const Incident = mongoose.model('Incident', incidentSchema);

module.exports = Incident;
