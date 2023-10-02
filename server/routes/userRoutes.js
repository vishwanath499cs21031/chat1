const express = require("express");
const router = express.Router();

const { register, login, setAvatar, getAllusers } = require("../controllers/userController");

router.post("/register", register);
router.post("/login", login);
router.post("/setAvatar", setAvatar);
router.get('/allusers/:id', getAllusers)
module.exports = router;
