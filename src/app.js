import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import products from './routes/products.routes.js'
import { notFound, errorHandler } from './middlewares/error.js'
import { config } from './config/index.js'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Middlewares base
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(rateLimit({ windowMs: config.rateLimit.windowMs, max: config.rateLimit.max }))

// Docs (Swagger UI)
const swaggerPath = path.join(__dirname, 'docs', 'openapi.yaml')
console.log('[SWAGGER] Cargando especificación desde:', swaggerPath)

const swaggerDocument = YAML.load(swaggerPath)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// Rutas
app.use('/api/products', products)

// 404 y errores
app.use(notFound)
app.use(errorHandler)

export default app
