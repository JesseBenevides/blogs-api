const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().required().min(8)
    .messages({
      'any.required': '"displayName" is required|400',
      'string.min': '"displayName" length must be at least 8 characteres long|400',
      'string.base': '"displayName" must be a string|400',
    }),
  email: Joi.string().email().required()
    .messages({
      'any.required': '"email" is required|400',
      'string.email': '"email" must be a valid email|400',
    }),
  password: Joi.string().required().min(6)
    .messages({
      'any.required': '"password" is required|400',
      'string.min': '"password" length must be at least 6 characters long|400',
    }),
});

module.exports = userSchema;