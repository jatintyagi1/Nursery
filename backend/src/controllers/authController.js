const User = require('../models/User');

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

module.exports = { registerUser };
