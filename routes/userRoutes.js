const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');
const joiSchemaValidation = require('../middleware/joiSchemaValidation')
const userSchema = require('../apiSchema/userSchema');

router.post('/signup', 
  joiSchemaValidation.validateBody(userSchema.singup),
  userController.signup
)

router.post('/login', 
  joiSchemaValidation.validateBody(userSchema.login),
  userController.login
)

module.exports = router;