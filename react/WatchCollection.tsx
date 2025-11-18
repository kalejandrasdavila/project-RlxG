import React, { ErrorInfo, ReactNode, useState, useEffect } from 'react';
import { useRuntime } from 'vtex.render-runtime';
import { useCssHandles } from 'vtex.css-handles';
import useInitScripts from './components/hooks/useInitScripts';
import './main-style.css';

const CSS_HANDLES = [
    'container', 'wrapper', 'content', 'error_message'
] as const;

// Mapa de colecciones a importaciones dinámicas
const COLLECTION_IMPORTS: Record<string, () => Promise<{ default: React.ComponentType }>> = {
    'submariner': () => import('./components/watches/submariner/Submariner'),
    'gmt-master-ii': () => import('./components/watches/gmt-master-ii/GmtMaster'),
    'yacht-master': () => import('./components/watches/yacht-master/YachtMaster'),
    'sky-dweller': () => import('./components/watches/sky-dweller/SkyDweller'),
    'oyster-perpetual': () => import('./components/watches/oyster-perpetual/OysterPerp'),
    'land-dweller': () => import('./components/watches/land-dweller/LandDweller'),
    'deepsea': () => import('./components/watches/deepsea/Deepsea'),
    'explorer': () => import('./components/watches/explorer/Explorer'),
    'datejust': () => import('./components/watches/datejust/DateJust'),
    'day-date': () => import('./components/watches/day-date/Daydate'),
    'lady-datejust': () => import('./components/watches/lady-datejust/LadyDateJ'),
    'cosmograph-daytona': () => import('./components/watches/cosmograph-daytona/CosmographD'),
    'air-king': () => import('./components/watches/air-king/Airking'),
    '1908': () => import('./components/watches/1908/1908'),
};

type CollectionKey = keyof typeof COLLECTION_IMPORTS;

// Error Boundary Component
class ErrorBoundary extends React.Component<
    { children: ReactNode },
    { hasError: boolean; error: Error | null }
> {
    constructor(props: { children: ReactNode }) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('WatchCollection Error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '20px', textAlign: 'center' }}>
                    <h1>Error al cargar la colección</h1>
                    <p>{this.state.error?.message || 'Error desconocido'}</p>
                    <a href="/rolex/coleccion-rolex">← Volver a colecciones</a>
                </div>
            );
        }

        return this.props.children;
    }
}

const WatchCollection: React.FC = () => {
    useInitScripts();
    const handles = useCssHandles(CSS_HANDLES);
    const { route } = useRuntime();
    const [CollectionComponent, setCollectionComponent] = useState<React.ComponentType | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Obtener  parámetro de colección de la URL
        let collection = route?.params?.collection as string;

        // Si no hay parámetro, intentar obtenerlo de la ruta completa
        if (!collection && route?.path) {
            const pathMatch = route.path.match(/\/watches\/([^\/]+)/);
            if (pathMatch) {
                collection = pathMatch[1];
            }
        }

        console.log('WatchCollection - Parámetro de colección:', collection);
        console.log('WatchCollection - Route completa:', route);

        if (!collection) {
            setError('Colección no especificada');
            setLoading(false);
            return;
        }

        // Normalizar el nombre de la colección (remover trailing slash si existe)
        const normalizedCollection = collection.toLowerCase().replace(/\/$/, '') as CollectionKey;

        // Verificar si la colección existe
        if (!COLLECTION_IMPORTS[normalizedCollection]) {
            setError(`Colección no encontrada: ${collection}`);
            setLoading(false);
            return;
        }

        // Cargar el componente dinámicamente
        COLLECTION_IMPORTS[normalizedCollection]()
            .then((module) => {
                setCollectionComponent(() => module.default);
                setError(null);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error cargando componente de colección:', err);
                setError(`Error al cargar la colección: ${collection}`);
                setLoading(false);
            });
    }, [route]);

    if (loading) {
        return (
            <div className={handles.container}>
                <div style={{ padding: '20px', textAlign: 'center' }}>
                    <p>Cargando colección...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={handles.container}>
                <div className={handles.error_message}>
                    <h1>Error: {error}</h1>
                    {error.includes('no encontrada') && (
                        <>
                            <p>Las colecciones disponibles son:</p>
                            <ul>
                                {Object.keys(COLLECTION_IMPORTS).map(key => (
                                    <li key={key}>
                                        <a href={`/rolex/watches/${key}`}>{key}</a>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                    <p>
                        <a href="/rolex/coleccion-rolex">← Volver a colecciones</a>
                    </p>
                </div>
            </div>
        );
    }

    if (!CollectionComponent) {
        return (
            <div className={handles.container}>
                <div className={handles.error_message}>
                    <h1>Error: No se pudo cargar el componente</h1>
                    <p>
                        <a href="/rolex/coleccion-rolex">← Volver a colecciones</a>
                    </p>
                </div>
            </div>
        );
    }

    return (
        <ErrorBoundary>
            <CollectionComponent />
        </ErrorBoundary>
    );
};

export default WatchCollection; 