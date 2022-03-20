const Joi = require('joi');

const postSchema = Joi.object({
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
  categoryIds: Joi.array().required()
    .messages({
      'any.required': '"categoryIds" is required|400',
      'array.base': '"categoryIds" must be a an array|400',
    }),
});

module.exports = postSchema;