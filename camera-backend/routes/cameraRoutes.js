const express = require('express');
const router = express.Router();
const {
  createIncident,
  getAllIncidents
} = require('../controllers/cameraController');

router.post('/', createIncident);
router.get('/', getAllIncidents);

module.exports = router;
