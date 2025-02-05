// const Joi = require('joi');

// // Validation schema for the body of the request 
// const pricingSchema = Joi.object({
//     weight: Joi.number().positive().required().messages({
//         'number.base': 'Weight must be a number',
//         'number.positive': 'Weight must be a positive number',
//         'any.required': 'Weight is required'
//     }),
//     origin: Joi.string().trim().min(3).required().messages({
//         'string.base': 'Origin must be a string',
//         'string.min': 'Origin must have at least 3 characters',
//         'any.required': 'Origin is required'
//     }),
//     destination: Joi.string().trim().min(3).required().messages({
//         'string.base': 'Destination must be a string',
//         'string.min': 'Destination must have at least 3 characters',
//         'any.required': 'Destination is required'
//     }),
//     cargoType: Joi.string().valid('standard', 'fragile', 'perishable').required().messages({
//         'any.only': 'Cargo type must be one of: standard, fragile, perishable',
//         'any.required': 'Cargo type is required'
//     }),
//     priorityLevel: Joi.string().valid('normal_shipping', 'express_shipping', 'overnight_shipping').required().messages({
//         'any.only': 'Cargo type must be one of: normal_shipping, express_shipping, overnight_shipping',
//         'any.required': 'Priority type is required'
//     })
// });
