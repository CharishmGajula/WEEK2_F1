import express from "express";
const router = express.Router();
import vibe from '../models/vibe.js';
import user from '../models/user.js'; // ✅ model name

async function signup(req, res) {
  const { username, email, password } = req.body;

  try {
    const existingUser = await user.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const newUser = new user({ username, email, password });
    await newUser.save();

    res.status(201).json({
      msg: 'User created successfully',
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email
      }
    });
  } catch (err) {
    console.error('Signup Error:', err);
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
}

async function send_vibe(req,res)
{
     try {
    const { email, vibeText } = req.body;
    if (!vibeText || !email) {
      return res.status(400).json({ msg: "Missing vibeText or email" });
    }
    const foundUser = await user.findOne({ email });
    if (!foundUser) {
      return res.status(404).json({ msg: "User not found with given email" });
    }
    const newVibe = await vibe.create({
      user: foundUser._id,
      vibeText:vibeText,
    });
    res.status(201).json({
      msg: "Vibe posted successfully",
      vibe: newVibe,
    });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
}

async function get_user(req, res){
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({ msg: 'Email is required' });
    }

    const foundUser = await user.findOne({ email });

    if (!foundUser) {
      return res.status(404).json({ msg: 'User not found' });
    }

    res.status(200).json({
      msg: 'User fetched successfully',
      user: {
        id: foundUser._id,
        username: foundUser.username,
        email: foundUser.email
      }
    });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};

export {signup,send_vibe,get_user};