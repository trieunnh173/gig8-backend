const express = require('express');
const router = express.Router();

const categoryController = require('../controller/api/categoryController');
const joiSchemaValidation = require('../middleware/joiSchemaValidation')
const categorySchema = require('../apiSchema/categorySchema');

router.post('/', 
  joiSchemaValidation.validateBody(categorySchema.createCategorySchema), 
  categoryController.createCategory
);

router.get('/', 
  categoryController.getAllCategory
);

module.exports = router;