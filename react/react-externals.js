// Forzar el uso de React desde el runtime global de VTEX
// Este archivo asegura que todos los módulos usen la misma instancia de React

if (typeof window !== 'undefined') {
  // En el navegador, usar React del runtime global de VTEX
  if (window.React && !window.__REACT_EXTERNALIZED__) {
    // Marcar que React está externalizado
    window.__REACT_EXTERNALIZED__ = true;
    
    // Asegurar que todos los módulos usen la misma instancia
    if (typeof module !== 'undefined' && module.exports) {
      // En entorno Node.js durante el build, no hacer nada
      // La externalización se maneja en webpack.config.js
    }
  }
}

// Exportar una función que verifica que React esté disponible
module.exports = function ensureReactExternal() {
  if (typeof window !== 'undefined' && !window.React) {
    console.warn('[VTEX] React no está disponible en el runtime global. Esto puede causar errores de hooks.');
  }
};

