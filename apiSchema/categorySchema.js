const Joi = require('@hapi/joi');

module.exports.createCategorySchema = Joi.object().keys({
  name: Joi.string().required(),
  icon: Joi.string().required(),
  parent_id: Joi.number().required(),
  is_new: Joi.number().required(),
  is_status: Joi.number().required(),
  is_order: Joi.number().required(),
});