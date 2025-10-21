import { Router } from 'express'
import {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} from '../controllers/products.controller.js'
import { validate } from '../middlewares/validate.js'
import { productCreateSchema, productUpdateSchema } from '../schemas/product.schema.js'
import { requireBasicAuth } from '../middlewares/auth.js'

const router = Router()

router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', requireBasicAuth, validate(productCreateSchema), createOne)
router.put('/:id', requireBasicAuth, validate(productUpdateSchema), updateOne)
router.delete('/:id', requireBasicAuth, deleteOne)

export default router
