const express = require('express');
const path = require('path');
const cors = require('cors'); // Import cors middleware
const guidesRoutes = require('./routes/guides');
const hotelsRoutes = require('./routes/hotels');
const transportsRoutes = require('./routes/transports');


const app = express();
const port = 3000;

// Use cors middleware to allow all origins during development
app.use(cors());

app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

app.use('/api/guides', guidesRoutes); // API endpoint for guides
app.use('/api/hotels', hotelsRoutes);
app.use('/api/transports', transportsRoutes);

// Route to serve guideBooking.html as the default route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'HomePage', 'homepage.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
