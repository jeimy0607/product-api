// src/middlewares/auth.js
import { Buffer } from 'node:buffer'
import { config } from '../config/index.js'
import bcryptjs from 'bcryptjs'

export function requireBasicAuth(req, res, next) {
  const header = req.headers.authorization || ''
  const [type, token] = header.split(' ')
  if (type !== 'Basic' || !token) {
    return res.status(401).json({ message: 'Missing or invalid Authorization header' })
  }

  const decoded = Buffer.from(token, 'base64').toString('utf8') // "user:pass"
  const sep = decoded.indexOf(':')
  const user = decoded.slice(0, sep)
  const pass = decoded.slice(sep + 1)

  if (user !== config.auth.user) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }

  if (config.auth.useBcrypt) {
    // comparamos contra el hash guardado en .env (HASH_BCRYPT)
    const ok = bcryptjs.compareSync(pass, config.auth.hash)
    if (!ok) return res.status(401).json({ message: 'Invalid credentials' })
  } else {
    if (pass !== config.auth.pass) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }
  }

  next()
}
