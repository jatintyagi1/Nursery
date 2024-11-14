// server.js
const express = require('express');
const connectDB = require('./config/database');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const authRoutes = require('./routes/routes');


// Middleware to parse JSON
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

// Connect to MongoDB
connectDB();

app.use('/api/auth', authRoutes);

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World! Your backend is set up.');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
