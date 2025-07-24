require('dotenv').config();
const mongoose = require('mongoose');
const Camera = require('./models/Camera');
const Incident = require('./models/Incident'); 

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    seed();
  })
  .catch((err) => console.error("MongoDB connection failed:", err));

async function seed() {
  try {
    await Camera.deleteMany({});
    await Incident.deleteMany({}); 

    const cameras = await Camera.insertMany([
      { name: 'Shop Floor A', location: 'Main Production Area' },
      { name: 'Vault', location: 'Secure Room' },
      { name: 'Entrance', location: 'Main Gate' },
    ]);

    const threatTypes = ['Unauthorised Access', 'Gun Threat', 'Face Recognised'];
    const thumbnails = [
      '/public/thumb1.jpg', '/public/thumb2.jpg', '/public/thumb3.jpg'
    ];

    const incidents = [];

    for (let i = 0; i < 12; i++) {
      const camera = cameras[i % cameras.length];
      const start = new Date(Date.now() - (Math.random() * 24 * 60 * 60 * 1000));
      const end = new Date(start.getTime() + 5 * 60 * 1000); 
      incidents.push({
        cameraId: camera._id,
        type: threatTypes[i % threatTypes.length],
        tsStart: start,
        tsEnd: end,
        thumbnailUrl: thumbnails[i % thumbnails.length],
        resolved: i % 2 === 0
      });
    }

    await Incident.insertMany(incidents);
    console.log("✅ Seeded successfully.");
    process.exit();
  } catch (err) {
    console.error("❌ Seed failed:", err);
    process.exit(1);
  }
}
