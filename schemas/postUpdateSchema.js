const Joi = require('joi');

const postUpdateSchema = Joi.object({
  title: Joi.string().required()
    .messages({
      'any.required': '"title" is required|400',
      'string.base': '"title" must be a string|400',
    }),
  content: Joi.string().required()
    .messages({
      'any.required': '"content" is required|400',
      'string.base': '"content" must be a string|400',
    }),
});

module.exports = postUpdateSchema;