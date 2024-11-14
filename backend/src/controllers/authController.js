const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Register User
const registerUser = async (req, res) => {
    try {
        const { name, email, password, mobileNumber } = req.body;
        // Check if the email already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ error: 'Email already exists' });
        }
        // Create a new user and save to DB
        const user = new User({ name, email, password, mobileNumber });
        await user.save();
        res.status(201).json({ message: 'User registered successfully!' });

    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Server error' });
    }
};


// Login user
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // Compare the passwords
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // Create and assign a JWT token using the secret from .env
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.status(200).json({
            message: 'Login successful!',
            token,
        });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ error: 'Server error' });
    }
};


module.exports = { registerUser, loginUser };
