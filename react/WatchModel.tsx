import React from 'react';
import { useRuntime } from 'vtex.render-runtime';
import { useCssHandles } from 'vtex.css-handles';
import useInitScripts from './components/hooks/useInitScripts';
import './main-style.css';

const CSS_HANDLES = [
    'container', 'wrapper', 'content', 'error_message', 'model_container'
] as const;

// Función para importar dinámicamente componentes de modelos
const getModelComponent = async (collection: string, model: string) => {
    try {
        // Convertir el modelo a PascalCase para el nombre del componente
        const modelFileName = model.toUpperCase().replace(/-/g, '');
        
        console.log(`Intentando importar modelo: ${model} de colección: ${collection}`);

        // Importar dinámicamente usando require.context para evitar el warning de webpack
        const context = require.context('./components/watches', true, /\.tsx$/);
        const modulePath = `./${collection}/modelos/${modelFileName}.tsx`;
        
        if (context.keys().includes(modulePath)) {
            const module = context(modulePath);
            return module.default;
        } else {
            console.warn(`No se encontró el componente: ${modulePath}`);
            return null;
        }
    } catch (error) {
        console.error(`Error importando modelo ${model} de colección ${collection}:`, error);
        return null;
    }
};

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
    '1908'
];

// Mapeo estático de modelos conocidos para cada colección
const MODEL_MAPPING: Record<string, Record<string, string>> = {
    'submariner': {
        'm124060-0001': 'M124060-0001',
        'm126613lb-0002': 'M126613lb-0002',
        'm126618ln-0002': 'M126618ln-0002',
        'm126610lv-0002': 'M126610lv-0002',
        'm126619lb-0003': 'M126619lb-0003',
        'm126610ln-0001': 'M126610ln-0001',
        'm126613ln-0002': 'M126613ln-0002',
        'm126618lb-0002': 'M126618lb-0002'
    },
    'gmt-master-ii': {
        'm126711chnr-0002': 'M126711chnr-0002',
        'm126729vtnr-0001': 'M126729vtnr-0001',
        'm126715chnr-0002': 'M126715chnr-0002',
        'm126713grnr-0001': 'M126713grnr-0001',
        'm126710grnr-0003': 'M126710grnr-0003',
        'm126720vtnr-0001': 'M126720vtnr-0001',
        'm126718grnr-0001': 'M126718grnr-0001',
        'm126710blnr-0003': 'M126710blnr-0003',
        'm126710blnr-0002': 'M126710blnr-0002',
        'm126710blro-0001': 'M126710blro-0001',
        'm126710blro-0002': 'M126710blro-0002',
        'm126710grnr-0004': 'M126710grnr-0004',
        'm126715chnr-0001': 'M126715chnr-0001',
        'm126718grnr-0002': 'M126718grnr-0002',
        'm126719blro-0002': 'M126719blro-0002',
        'm126719blro-0003': 'M126719blro-0003',
        'm126720vtnr-0002': 'M126720vtnr-0002'
    },
    'yacht-master': {
        'm226627-0001': 'M226627-0001',
        'm268622-0002': 'M268622-0002',
        'm126655-0002': 'M126655-0002',
        'm126621-0002': 'M126621-0002',
        'm126622-0001': 'M126622-0001',
        'm226659-0002': 'M226659-0002',
        'm126622-0002': 'M126622-0002',
        'm268621-0003': 'M268621-0003'
    },
    'lady-datejust': {
        'm279135rbr-0001': 'M279135rbr-0001',
        'm279173-0012': 'M279173-0012',
        'm279174-0020': 'M279174-0020',
        'm279383rbr-0003': 'M279383rbr-0003',
        'm279384rbr-0004': 'M279384rbr-0004'
    },
    'deepsea': {
        'm126067-0002': 'M126067-0002',
        'm136660-0005': 'M136660-0005',
        'm136668lb-0001': 'M136668lb-0001'
    },
    'explorer': {
        'm124270-0001': 'M124270-0001',
        'm224270-0001': 'M224270-0001',
        'm226570-0001': 'M226570-0001',
        'm226570-0002': 'M226570-0002'
    },
    'air-king': {
        'm126900-0001': 'M126900-0001'
    }
    // Agregar más modelos según sea necesario
};

const WatchModel: React.FC = () => {
    useInitScripts();
    const handles = useCssHandles(CSS_HANDLES);
    const { route } = useRuntime();

    // Obtener parámetros de la URL
    const collection = route?.params?.collection as string;
    const model = route?.params?.model as string;

    console.log('WatchModel - Parámetros:', { collection, model });
    console.log('WatchModel - Route completa:', route);

    const [ModelComponent, setModelComponent] = React.useState<React.ComponentType | null>(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        const loadModelComponent = async () => {
            if (!collection || !model) {
                setError('Colección y modelo son requeridos');
                setLoading(false);
                return;
            }

            if (!VALID_COLLECTIONS.includes(collection)) {
                setError(`Colección '${collection}' no es válida`);
                setLoading(false);
                return;
            }

            // Verificar si el modelo existe en el mapeo
            const collectionModels = MODEL_MAPPING[collection];
            if (!collectionModels || !collectionModels[model]) {
                setError(`Modelo '${model}' no encontrado en la colección '${collection}'`);
                setLoading(false);
                return;
            }

            try {
                // Importar usando require dinámico
                const componentFileName = collectionModels[model];
                const ComponentModule = await import(`./components/watches/${collection}/modelos/${componentFileName}`);
                setModelComponent(() => ComponentModule.default);
                setError(null);
            } catch (importError) {
                console.error('Error importando componente:', importError);
                setError(`No se pudo cargar el componente para el modelo '${model}'`);
            } finally {
                setLoading(false);
            }
        };

        loadModelComponent();
    }, [collection, model]);

    if (loading) {
        return (
            <div className={handles.container}>
                <div className={handles.model_container}>
                    <p>Cargando modelo {model} de {collection}...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={handles.container}>
                <div className={handles.error_message}>
                    <h1>Error: {error}</h1>
                    <p>URL actual: /rolex/watches/{collection}/{model}</p>
                    <p>
                        <a href={`/rolex/watches/${collection}`}>
                            ← Volver a la colección {collection}
                        </a>
                    </p>
                    <p>
                        <a href="/rolex/coleccion-rolex/">
                            ← Ver todas las colecciones
                        </a>
                    </p>
                </div>
            </div>
        );
    }

    if (!ModelComponent) {
        return (
            <div className={handles.container}>
                <div className={handles.error_message}>
                    <h1>Componente no encontrado</h1>
                    <p>No se pudo cargar el componente para {model}</p>
                </div>
            </div>
        );
    }

    // Renderizar el componente del modelo
    return (
        <div className={handles.model_container}>
            <ModelComponent />
        </div>
    );
};

export default WatchModel; 