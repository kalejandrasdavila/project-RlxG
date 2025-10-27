#!/bin/bash

echo "🔧 Solucionando problemas del Workerpool Worker..."

# Limpiar caché y node_modules
echo "📦 Limpiando dependencias..."
cd react
rm -rf node_modules
rm -f package-lock.json
rm -f yarn.lock

# Limpiar caché de npm y yarn
npm cache clean --force
yarn cache clean

# Reinstalar dependencias
echo "📥 Reinstalando dependencias..."
npm install

# Limpiar caché de Jest
echo "🧪 Limpiando caché de Jest..."
npx jest --clearCache

# Verificar la instalación
echo "✅ Verificando instalación..."
npm list --depth=0

echo "🎉 ¡Proceso completado! Intenta ejecutar tu aplicación nuevamente."
echo ""
echo "💡 Comandos recomendados para probar:"
echo "   vtex link"
echo "   npm test"
echo "   npm run lint"
