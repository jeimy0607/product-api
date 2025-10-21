import dotenv from 'dotenv'
dotenv.config()

export const config = {
  env: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT || 3000),
  auth: {
    user: process.env.BASIC_USER || 'admin',
    pass: process.env.BASIC_PASS || 'admin123',
    useBcrypt: String(process.env.USE_BCRYPT || 'false') === 'true',
    hashBcrypt: process.env.HASH_BCRYPT || '',
  },
  rateLimit: {
    windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS || 60000),
    max: Number(process.env.RATE_LIMIT_MAX || 100),
  },
}
