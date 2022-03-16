const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().required().empty()
    .messages({
      'any.required': '"email" is required|400',
      'string.empty': '"email" is not allowed to be empty|400',
    }),
  password: Joi.string().required().empty()
    .messages({
      'any.required': '"password" is required|400',
      'string.empty': '"password" is not allowed to be empty|400',
    }),
});

module.exports = loginSchema;