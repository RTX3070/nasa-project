// Imports
require('dotenv').config();
const http = require('http');
const app = require('./app');
const { loadPlanetsData } = require('./models/planets.model');
const { loadLaunchData } = require('./models/launches.model');
const { mongoConnect } = require('./services/mongo');

const PORT = process.env.PORT || 5000;

// Any middleware and route handlers attached to app object will respond
// to requests coming in to our server
const server = http.createServer(app);

async function startServer() {
    await mongoConnect();
    // server will wait to loadPlanetsData to resolve before starting server.listen call
    await loadPlanetsData();
    await loadLaunchData();
    
    server.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
};

startServer();