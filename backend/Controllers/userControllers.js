const expressAsyncHandler = require("express-async-handler");
const generateToken = require("../Config/generateToken");
const User = require("../Models/userModel");

const registerUser = expressAsyncHandler(async (req, res) => {
  const { email, name, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please enter all the fields");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(404);
    throw new Error("Failed to create user");
  }
});

const authUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  }else {
    res.status(404);
    throw new Error("Invalid email and password");
  }
});


// /api/user?search=soumyadeep
const allUsers = expressAsyncHandler(async(req, res)=> {
  const keyWord = req.query.search ? {
    $or: [
      {
        name : {$regex: req.query.search, $options: "i"}
      },
      {
        email : {$regex: req.query.search, $options: "i"}
      },
    ]
  }: {};

  const users = await User.find(keyWord).find({_id: {$ne: req.user._id}});
  res.send(users);
});

module.exports = { registerUser, authUser, allUsers };
