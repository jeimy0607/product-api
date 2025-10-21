process.env.BASIC_USER = process.env.BASIC_USER || 'admin'
process.env.BASIC_PASS = process.env.BASIC_PASS || 'admin123'
process.env.USE_BCRYPT = 'false'

import request from 'supertest'

let app
beforeAll(async () => {
  ;({ default: app } = await import('../src/app.js'))
})

const auth = Buffer.from('admin:admin123').toString('base64')

describe('Products API', () => {
  it('GET /api/products → 200 y array', async () => {
    const res = await request(app).get('/api/products')
    expect(res.statusCode).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
  })

  it('POST /api/products sin auth → 401', async () => {
    const res = await request(app).post('/api/products').send({ name: 'X', price: 1, sku: 'S1' })
    expect(res.statusCode).toBe(401)
  })

  it('POST /api/products con auth → 201', async () => {
    const res = await request(app)
      .post('/api/products')
      .auth('admin', 'admin123') // ← 🔥 ESTA es la línea del arreglo 2
      .send({ name: 'Mouse', price: 19.99, sku: 'MS001', stock: 5 })

    expect(res.statusCode).toBe(201)
    expect(res.body).toHaveProperty('id')
  })
  it('GET /api/products/999 → 404 si no existe', async () => {
    const res = await request(app).get('/api/products/999')
    expect(res.statusCode).toBe(404)
  })
})
