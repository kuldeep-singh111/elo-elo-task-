const express = require("express");
const { LoginPost, SignupPost, profile } = require("../controllers/contol")
const { authentication } = require("../middlware/auth");

const router = express.Router();

router.post("/login", LoginPost)
router.post("/signup", SignupPost)
router.get("/profile", authentication, profile)


module.exports = router;
