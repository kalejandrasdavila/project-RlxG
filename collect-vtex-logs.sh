#!/bin/bash

echo "🔍 Recopilando información para soporte VTEX..."

# Crear directorio para logs
mkdir -p vtex-support-logs

# Información del sistema
echo "📊 Información del Sistema:" > vtex-support-logs/system-info.txt
echo "Fecha: $(date)" >> vtex-support-logs/system-info.txt
echo "Sistema: $(uname -a)" >> vtex-support-logs/system-info.txt
echo "Node: $(node --version)" >> vtex-support-logs/system-info.txt
echo "Yarn: $(yarn --version)" >> vtex-support-logs/system-info.txt
echo "VTEX: $(vtex --version)" >> vtex-support-logs/system-info.txt
echo "" >> vtex-support-logs/system-info.txt

# Información de VTEX
echo "🏢 Información de VTEX:" >> vtex-support-logs/system-info.txt
vtex whoami >> vtex-support-logs/system-info.txt 2>&1
echo "" >> vtex-support-logs/system-info.txt

# Información del proyecto
echo "📦 Información del Proyecto:" >> vtex-support-logs/system-info.txt
echo "Tamaño del directorio react:" >> vtex-support-logs/system-info.txt
du -sh react/ >> vtex-support-logs/system-info.txt
echo "Número de archivos:" >> vtex-support-logs/system-info.txt
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | wc -l >> vtex-support-logs/system-info.txt
echo "" >> vtex-support-logs/system-info.txt

# Copiar archivos de configuración importantes
echo "📋 Copiando archivos de configuración..."
cp manifest.json vtex-support-logs/
cp react/package.json vtex-support-logs/react-package.json
cp react/tsconfig.json vtex-support-logs/react-tsconfig.json
cp react/vtex.webpack.config.js vtex-support-logs/
cp react/vtex-no-workers-browser.js vtex-support-logs/
cp .vtexignore vtex-support-logs/
cp .vtexrc vtex-support-logs/ 2>/dev/null || echo "No .vtexrc found"

# Intentar un link con logs detallados
echo "🔄 Intentando vtex link con logs detallados..."
echo "Iniciando vtex link con verbose..." > vtex-support-logs/link-attempt.log
timeout 300 vtex link --verbose >> vtex-support-logs/link-attempt.log 2>&1
echo "Exit code: $?" >> vtex-support-logs/link-attempt.log

# Información de memoria y procesos
echo "💾 Información de Memoria:" > vtex-support-logs/memory-info.txt
if command -v free &> /dev/null; then
    free -h >> vtex-support-logs/memory-info.txt
elif command -v vm_stat &> /dev/null; then
    vm_stat >> vtex-support-logs/memory-info.txt
fi

# Crear archivo ZIP
echo "📦 Creando archivo ZIP para soporte..."
zip -r vtex-support-logs.zip vtex-support-logs/ VTEX-SUPPORT-REPORT.md

echo "✅ Información recopilada en:"
echo "   - vtex-support-logs/ (directorio)"
echo "   - vtex-support-logs.zip (archivo para enviar)"
echo "   - VTEX-SUPPORT-REPORT.md (reporte principal)"

echo ""
echo "📧 Para contactar soporte VTEX:"
echo "1. Adjunta el archivo vtex-support-logs.zip"
echo "2. Incluye el contenido de VTEX-SUPPORT-REPORT.md"
echo "3. Menciona que es un error SIGABRT en workerpool del servidor"
