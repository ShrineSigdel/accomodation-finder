// server.js

const express = require('express')
const { connectDB } = require('./database/dbConnect')
const bodyParser = require('body-parser')
const listingsRoutes = require('./routes/listings');
const cors = require('cors')

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000'
}))

//connect to mongodb
connectDB();

// Use the listings routes 
app.use('/api/listings', listingsRoutes)

//Start Express Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));