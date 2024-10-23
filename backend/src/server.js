const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World! Your backend is set up.');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
