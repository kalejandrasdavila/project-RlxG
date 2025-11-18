import React from 'react'
import { useRuntime } from 'vtex.render-runtime'
import { useCssHandles } from 'vtex.css-handles'
import { HelmetProvider } from 'react-helmet-async'

import './main-style.css'

// Error Boundary para capturar errores de renderizado
class ModelErrorBoundary extends React.Component<
  { children: React.ReactNode; collection: string; model: string },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode; collection: string; model: string }) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error en componente de modelo:', error, errorInfo)
    console.error('Stack trace:', error.stack)
    console.error('Component stack:', errorInfo.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h1>Error al renderizar el componente</h1>
          <p>No se pudo cargar el componente para el modelo '{this.props.model}'</p>
          {this.state.error && (
            <details style={{ marginTop: '10px', textAlign: 'left', maxWidth: '800px', margin: '20px auto' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>Detalles del error (click para expandir)</summary>
              <pre style={{
                background: '#f5f5f5',
                padding: '10px',
                overflow: 'auto',
                fontSize: '12px',
                textAlign: 'left',
                border: '1px solid #ddd',
                borderRadius: '4px',
                marginTop: '10px'
              }}>
                <strong>Error:</strong> {this.state.error.toString()}
                {'\n\n'}
                <strong>Stack:</strong>
                {this.state.error.stack || 'No disponible'}
              </pre>
            </details>
          )}
          <div style={{ marginTop: '20px' }}>
            <a
              href={`/rolex/watches/${this.props.collection}`}
              style={{
                display: 'inline-block',
                margin: '10px',
                padding: '10px 20px',
                backgroundColor: '#452C1E',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px'
              }}
            >
              ← Volver a la colección {this.props.collection}
            </a>
            <a
              href="https://glauser.myvtex.com/rolex/coleccion-rolex/"
              style={{
                display: 'inline-block',
                margin: '10px',
                padding: '10px 20px',
                backgroundColor: '#452C1E',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px'
              }}
            >
              ← Ver todas las colecciones
            </a>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

const CSS_HANDLES = [
  'container',
  'wrapper',
  'content',
  'error_message',
  'model_container',
] as const

// Cache para componentes ya cargados (no utilizado actualmente)
// const componentCache = new Map()

// Función para importar dinámicamente componentes de modelos
// const getModelComponent = async (collection: string, model: string) => {
//   try {
//     const cacheKey = `${collection}-${model}`

//     // Verificar si ya está en caché
//     if (componentCache.has(cacheKey)) {
//       return componentCache.get(cacheKey)
//     }

//     // Convertir el modelo a PascalCase para el nombre del componente
//     const modelFileName = model.toUpperCase().replace(/-/g, '')

//     // Importar dinámicamente usando require.context para evitar el warning de webpack
//     const context = require.context('./components/watches', true, /\.tsx$/)
//     const modulePath = `./${collection}/modelos/${modelFileName}.tsx`

//     if (context.keys().includes(modulePath)) {
//       const module = context(modulePath)
//       const component = module.default

//       // Guardar en caché
//       componentCache.set(cacheKey, component)

//       return component
//     }

//     console.warn(`No se encontró el componente: ${modulePath}`)

//     return null
//   } catch (error) {
//     console.error(
//       `Error importando modelo ${model} de colección ${collection}:`,
//       error
//     )

//     return null
//   }
// }

// Mapeo de colecciones válidas
const VALID_COLLECTIONS = [
  'submariner',
  'gmt-master-ii',
  'yacht-master',
  'sky-dweller',
  'oyster-perpetual',
  'land-dweller',
  'deepsea',
  'explorer',
  'datejust',
  'day-date',
  'lady-datejust',
  'cosmograph-daytona',
  'air-king',
  '1908',
]

// Mapeo estático de importaciones dinámicas para cada modelo
// Esto es necesario para que Webpack pueda hacer code splitting correctamente
// IMPORTANTE: Las rutas deben ser exactamente como aparecen en el filesystem
// y Webpack debe poder resolverlas en tiempo de compilación
const MODEL_IMPORTS: Record<string, Record<string, () => Promise<{ default: React.ComponentType }>>> = {
  '1908': {
    'm52506-0002': () => import('./components/watches/1908/modelos/M52506-0002'),
    'm52506-0003': () => import('./components/watches/1908/modelos/M52506-0003'),
    'm52508-0002': () => import('./components/watches/1908/modelos/M52508-0002'),
    'm52508-0006': () => import('./components/watches/1908/modelos/M52508-0006'),
    'm52508-0007': () => import('./components/watches/1908/modelos/M52508-0007'),
    'm52508-0008': () => import('./components/watches/1908/modelos/M52508-0008'),
    'm52509-0002': () => import('./components/watches/1908/modelos/M52509-0002'),
  },
  'submariner': {
    'm124060-0001': () => import('./components/watches/submariner/modelos/M124060-0001'),
    'm126610ln-0001': () => import('./components/watches/submariner/modelos/M126610ln-0001'),
    'm126610lv-0002': () => import('./components/watches/submariner/modelos/M126610lv-0002'),
    'm126613lb-0002': () => import('./components/watches/submariner/modelos/M126613lb-0002'),
    'm126613ln-0002': () => import('./components/watches/submariner/modelos/M126613ln-0002'),
    'm126618lb-0002': () => import('./components/watches/submariner/modelos/M126618lb-0002'),
    'm126618ln-0002': () => import('./components/watches/submariner/modelos/M126618ln-0002'),
    'm126619lb-0003': () => import('./components/watches/submariner/modelos/M126619lb-0003'),
  },
  // Agregar más colecciones y modelos según sea necesario
}

// Mapeo estático de modelos conocidos para validación
const MODEL_MAPPING: Record<string, Record<string, string>> = {
  '1908': {
    'm52506-0002': 'M52506-0002',
    'm52506-0003': 'M52506-0003',
    'm52508-0002': 'M52508-0002',
    'm52508-0006': 'M52508-0006',
    'm52508-0007': 'M52508-0007',
    'm52508-0008': 'M52508-0008',
    'm52509-0002': 'M52509-0002',
  },
  'submariner': {
    'm124060-0001': 'M124060-0001',
    'm126610ln-0001': 'M126610ln-0001',
    'm126610lv-0002': 'M126610lv-0002',
    'm126613lb-0002': 'M126613lb-0002',
    'm126613ln-0002': 'M126613ln-0002',
    'm126618lb-0002': 'M126618lb-0002',
    'm126618ln-0002': 'M126618ln-0002',
    'm126619lb-0003': 'M126619lb-0003',
  },
  // Agregar más modelos según sea necesario
}

// Ya no usamos require.context, usamos import() dinámico en MODEL_IMPORTS

const WatchModel: React.FC = () => {
  // No llamar useInitScripts aquí para evitar conflictos con el componente importado
  // El componente importado ya tiene su propia llamada a useInitScripts
  const handles = useCssHandles(CSS_HANDLES)
  const { route } = useRuntime()

  // Obtener parámetros de la URL
  const collection = route?.params?.collection as string
  const model = route?.params?.model as string

  console.log('WatchModel - Parámetros de ruta:', { collection, model })
  console.log('WatchModel - Route completa:', route)
  console.log('WatchModel - route.params:', route?.params)

  const [ModelComponent, setModelComponent] =
    React.useState<React.ComponentType<any> | null>(null)

  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    const loadComponent = async () => {
      // Normalizar la colección (asegurar que sea string y sin espacios)
      const normalizedCollection = collection?.toString().trim() || ''
      const normalizedModel = model?.toString().trim() || ''

      console.log('Valores normalizados:', { normalizedCollection, normalizedModel })

      if (!normalizedCollection || !normalizedModel) {
        setError(`Colección y modelo son requeridos. Collection: '${normalizedCollection}', Model: '${normalizedModel}'`)
        setLoading(false)
        return
      }

      if (!VALID_COLLECTIONS.includes(normalizedCollection)) {
        setError(`Colección '${normalizedCollection}' no es válida. Colecciones válidas: ${VALID_COLLECTIONS.join(', ')}`)
        setLoading(false)
        return
      }

      // Verificar si el modelo existe en el mapeo
      const collectionModels = MODEL_MAPPING[normalizedCollection]

      if (!collectionModels || !collectionModels[normalizedModel]) {
        setError(
          `Modelo '${normalizedModel}' no encontrado en la colección '${normalizedCollection}'. Modelos disponibles: ${collectionModels ? Object.keys(collectionModels).join(', ') : 'ninguno'}`
        )
        setLoading(false)
        return
      }

      try {
        console.log(`Cargando componente para modelo: ${normalizedModel} de colección: ${normalizedCollection}`)

        // Verificar si existe la función de importación para este modelo
        const collectionImports = MODEL_IMPORTS[normalizedCollection]
        if (!collectionImports || !collectionImports[normalizedModel]) {
          throw new Error(`No se encontró la función de importación para el modelo '${normalizedModel}' en la colección '${normalizedCollection}'`)
        }

        // Cargar el componente usando import() dinámico (como en WatchCollection.tsx)
        const module = await collectionImports[normalizedModel]()

        console.log('Módulo cargado:', module)
        console.log('ComponentModule.default:', module?.default)
        console.log('Tipo de default:', typeof module?.default)

        if (!module || !module.default) {
          console.error('El módulo no tiene default export. Keys disponibles:', Object.keys(module || {}))
          throw new Error(`El módulo no exporta un componente por defecto`)
        }

        const Component = module.default
        if (typeof Component !== 'function') {
          throw new Error(`El componente exportado no es una función válida. Tipo: ${typeof Component}`)
        }

        console.log('Componente cargado exitosamente:', Component.name || 'Componente sin nombre')

        // Guardar el componente directamente (igual que WatchCollection.tsx)
        // IMPORTANTE: No usar React.memo ni wrappers, guardar el componente directamente
        setModelComponent(() => Component)
        setError(null)
        setLoading(false)
      } catch (importError) {
        console.error('Error importando componente:', importError)
        console.error('Stack trace:', (importError as Error)?.stack)
        const error = importError as Error
        const errorMessage = error?.message || String(importError) || 'Error desconocido'
        setError(`No se pudo cargar el componente para el modelo '${normalizedModel}'. ${errorMessage}`)
        setLoading(false)
      }
    }

    loadComponent()
  }, [collection, model, route])

  if (loading) {
    return (
      <div className={handles.container}>
        <div className={handles.model_container}>
          <p>
            Cargando modelo {model} de {collection}...
          </p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={handles.container}>
        <div className={handles.error_message}>
          <h1>Error: {error}</h1>
          <p>
            URL actual: /rolex/watches/{collection}/{model}
          </p>
          <p>
            <a href={`/rolex/watches/${collection}`}>
              ← Volver a la colección {collection}
            </a>
          </p>
          <p>
            <a href="https://glauser.myvtex.com/rolex/coleccion-rolex/">← Ver todas las colecciones</a>
          </p>
        </div>
      </div>
    )
  }

  if (!ModelComponent) {
    return (
      <div className={handles.container}>
        <div className={handles.error_message}>
          <h1>Componente no encontrado</h1>
          <p>No se pudo cargar el componente para {model}</p>
        </div>
      </div>
    )
  }

  // Renderizar el componente del modelo con ErrorBoundary
  // Envolver con HelmetProvider para que react-helmet-async funcione correctamente
  if (!ModelComponent) {
    return null
  }

  // Renderizar el componente directamente sin React.createElement
  // para asegurar que use la misma instancia de React de VTEX
  return (
    <ModelErrorBoundary collection={collection || ''} model={model || ''}>
      <HelmetProvider>
        <ModelComponent />
      </HelmetProvider>
    </ModelErrorBoundary>
  )
}

export default WatchModel
