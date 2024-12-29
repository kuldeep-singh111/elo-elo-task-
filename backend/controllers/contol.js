const User = require("../models/user");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");


const LoginPost = async (req, res) => {
  const { email, password } = req.body;


  try {
    const user = await User.findOne({ email });



    if (!user) {
      console.log("error in login")
      return res.status(400).json({ message: 'User not found' })
    }

    bcrypt.compare(password, user.password, (err, result) => {

      if (err) {
        console.log("error compating password")
        return res.status(500).json({ message: 'Error in comparing password' })
      }

      if (!result) {
        console.log("error in result || comparing password")
        return res.status(401).json({ message: 'Invalid Password' })
      }

      const token = jwt.sign({ email: user.email, id: user.id }, process.env.JWT_SECRET, { expiresIn: '2h' });
      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 2 * 60 * 60 * 1000
      });
      console.log("your are login successfully", user.email)
      return res.status(200).json({ message: 'Login successfully' })

    });

  } catch (error) {
    console.log("error in login process", error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
};



const SignupPost = async (req, res) => {

  const { name, email, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    await User.create({
      name,
      email,
      password: hash,
    })
    // const token = jwt.sign({ email }, "kuldeep", {
    //   expiresIn: '2h',
    // });

    // res.cookie("token", token);

    // console.log({ password: hash })
  } catch (error) {
    console.log(error, "error")
  }

}


const profile = async (req, res) => {
  const user = req.user;
  return res.json({ message: "profile fethced from server", user: user });
}

module.exports = { LoginPost, SignupPost, profile }