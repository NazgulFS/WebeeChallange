const Users = require('../controllers/authController');
const express = require('express');
const router = express.Router();

  router.post('/register', Users.createUser);
  router.post('/login', Users.loginUser);

  module.exports = router;