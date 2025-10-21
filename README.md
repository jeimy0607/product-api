# Product API

API REST para gestión de productos, desarrollada con **Node.js + Express**, siguiendo buenas prácticas de seguridad, documentación y pruebas.

# 🚀 Instalación

```bash
npm ci

▶️ Ejecución
# bash
# modo desarrollo
npm run dev
# modo producción
npm start

⚙️ Variables de entorno

PORT=3000
BASIC_USER=admin
BASIC_PASS=admin123
USE_BCRYPT=false


📚 Documentación
Swagger UI: http://localhost:3000/docs

Especificación OpenAPI: src/docs/openapi.yaml

🧪 Pruebas
# bash - pruebas locales
npm test
# usado en GitHub Actions
npm run test:ci


🔁 Integración Continua
El workflow en .github/workflows/ci.yml ejecuta:

Instalación limpia (npm ci)

Validación OpenAPI

Pruebas automáticas (Jest + Supertest)

Publicación de cobertura
```
