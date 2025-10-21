import Joi from 'joi'

export const productCreateSchema = Joi.object({
  name: Joi.string().min(2).max(120).required(),
  price: Joi.number().positive().precision(2).required(),
  description: Joi.string().max(500).allow(''),
  stock: Joi.number().integer().min(0).default(0),
  sku: Joi.string().alphanum().min(3).max(20).required(),
})

export const productUpdateSchema = productCreateSchema.fork(['name', 'price', 'sku'], (s) =>
  s.optional(),
)
