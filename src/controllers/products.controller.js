import * as store from '../models/product.model.js'

export const getAll = (req, res) => {
  res.json(store.list())
}

export const getOne = (req, res) => {
  const p = store.getById(req.params.id)
  if (!p) return res.status(404).json({ message: 'Product not found' })
  res.json(p)
}

export const createOne = (req, res) => {
  const product = store.create(req.validatedBody)
  res.status(201).json(product)
}

export const updateOne = (req, res) => {
  const updated = store.update(req.params.id, req.validatedBody)
  if (!updated) return res.status(404).json({ message: 'Product not found' })
  res.json(updated)
}

export const deleteOne = (req, res) => {
  const ok = store.remove(req.params.id)
  if (!ok) return res.status(404).json({ message: 'Product not found' })
  res.status(204).send()
}
