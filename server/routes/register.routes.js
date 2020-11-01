const { Router } = require('express');
const router = Router();
const User = require('../model/User');

router.post('/', async (req, res) => {
    try {
      // const { email, name, phone } = req.body;
      // const candidate = await User.findOne({ email });
      
      // if(candidate) {
      //   return res.status(400).json('Such user is already exist');
      // }
      // const user = new User({ email, name, phone });
      // await user.save();
      console.log(req.body);
      res.status(200).json('email');
    } catch (error) {
      console.log(error);
      res.status(500).json('Something wrong', error);
    }
  }
);

module.exports = router;