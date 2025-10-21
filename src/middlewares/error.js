export function notFound(req, res, next) {
  res.status(404).json({ message: 'Not found' })
}

export function errorHandler(err, req, res, next) {
  if (res.headersSent) return next(err)
  const status = err.status || 500
  res.status(status).json({ message: err.message || 'Internal Server Error' })
}
