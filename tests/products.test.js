import request from 'supertest'
import app from '../../src/app.js'

describe('Products API', () => {
  it('GET /api/products responde 200', async () => {
    const res = await request(app).get('/api/products')
    expect(res.statusCode).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
  })
})
