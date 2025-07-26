const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    console.log("📥 Incoming signup request:", { name, email }); // No password for security
    if (!name || !email || !password) {
      console.error("⚠️ Missing fields in signup request");
      return res.status(400).json({ message: 'Please fill all fields' });
    }

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    console.log("✅ User created successfully:", user.email);
    res.status(201).json({ message: 'User created' });
  } catch (err) {
    console.error("❌ Registration error:", err.message);
    console.error("📌 Full error object:", err); // full stack trace
    res.status(500).json({ message: 'Server error' });
  }
};



const login = async (req, res) => {
  const { email, password } = req.body;
  console.log("email and password", email, password);

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    console.log("User from login !", user);

    console.log("Password match:", isMatch);

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      }
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getProtected = (req, res) => {
  res.json({ message: 'Access granted', user: req.user });
};

module.exports = { register, login, getProtected };
