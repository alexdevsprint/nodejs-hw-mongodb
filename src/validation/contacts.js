import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Name must be a string',
    'string.empty': 'Name is required',
    'string.min': 'Name must be at least 3 characters long',
    'string.max': 'Name must not exceed 20 characters',
    'any.required': 'Name is required',
  }),  
  phoneNumber: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Phone number must be a string',
    'string.empty': 'Phone number is required',
    'string.min': 'Phone number must be at least 3 characters long',
    'string.max': 'Phone number must not exceed 20 characters',
    'any.required': 'Phone number is required',
  }),  
  email: Joi.string().min(3).max(20).email().messages({
    'string.email': 'Email must be a valid email',
    'string.min': 'Email must be at least 3 characters long',
    'string.max': 'Email must not exceed 20 characters',
  }),    
  isFavourite: Joi.boolean().messages({
    'boolean.base': 'isFavourite must be a boolean',
  }),
  contactType: Joi.string().valid('work', 'home', 'personal').required().messages({
    'any.only': 'contactType must be one of: work, home, personal',
    'any.required': 'contactType is required',
  }),  
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Name must be a string',
    'string.min': 'Name must be at least 3 characters long',
    'string.max': 'Name must not exceed 20 characters',
  }),
  phoneNumber: Joi.string().min(3).max(20).messages({
    'string.base': 'Phone number must be a string',
    'string.min': 'Phone number must be at least 3 characters long',
    'string.max': 'Phone number must not exceed 20 characters',
  }),
  email: Joi.string().min(3).max(20).messages({
    'string.email': 'Email must be a valid email',
    'string.min': 'Email must be at least 3 characters long',
    'string.max': 'Email must not exceed 20 characters',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': 'isFavourite must be a boolean',
  }),
  contactType: Joi.string().valid('work', 'home', 'personal').messages({
    'any.only': 'contactType must be one of: work, home, personal',
  }),
})
.min(1)
.messages({
  'object.min': 'At least one field must be provided for update',
});

