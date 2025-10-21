let _id = 1
const products = []

export function list() {
  return products
}

export function getById(id) {
  return products.find((p) => p.id === Number(id))
}

export function create(data) {
  const now = new Date().toISOString()
  const product = { id: _id++, createdAt: now, updatedAt: now, ...data }
  products.push(product)
  return product
}

export function update(id, data) {
  const idx = products.findIndex((p) => p.id === Number(id))
  if (idx === -1) return null
  const updated = { ...products[idx], ...data, updatedAt: new Date().toISOString() }
  products[idx] = updated
  return updated
}

export function remove(id) {
  const idx = products.findIndex((p) => p.id === Number(id))
  if (idx === -1) return false
  products.splice(idx, 1)
  return true
}

export function _resetForTests() {
  // solo pruebas
  _id = 1
  products.length = 0
}
