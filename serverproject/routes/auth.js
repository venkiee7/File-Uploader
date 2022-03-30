const express = require('express');
const User = require('../models/User');
const router = express.Router() 
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../helpers/fetchuser');
// const multer = require('multer');  // File upload
const cors = require('cors');

const app = express();

const JWT_SECRET = "hallabol"


app.use(cors());
app.use(express.static('data'));


//Route 1: Create a user using: POST "/api/auth/createuser". No login required
router.post ('/createuser',[
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid password').isLength({ min: 5 })
], async (req, res) => {
  let success = false;

  // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
    try {
      let user = await User.findOne({email: req.body.email});
    if (user) {
      return res.status(400).json({success, error : "Sorry a user with this email already exists"})
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt)
    // Create a new user
    user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });

      const data = {
        user : {
          id : user.id
        }
      }

      const authtoken = jwt.sign(data, JWT_SECRET);

      // res.json(user)
      success = true;
      res.json({success, authtoken})
    }catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server error occured");
    }
})

//Route 2: Authenticate a user using: POST "/api/auth/login". No login required

router.post ('/login',[
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
  let success = false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {email,password} = req.body;
  try{
    let user = await User.findOne({email});
    if(!user){
      success = false;
      return res.status(400).json({success, error: "Please try to login with correct credentials"});
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if(!passwordCompare){
      success = false;
      return res.status(400).json({success, error: "Please try to login with correct credentials"});
    }

    const data = {
      user : {
        id : user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({success, authtoken})
    

  }catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server error occured");
  }
  })  

//Route 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
router.post ('/getuser', fetchuser ,async (req, res) => {
try {
  let userId = req.user.id;
  // userId = "todo";
  const user = await User.findById(userId).select("-password")
  res.send(user)
} catch (error) {
  console.error(error.message);
  res.status(500).send("Internal Server error occured");
}
})
module.exports = router
