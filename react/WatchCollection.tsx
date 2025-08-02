import React from 'react';
import { useRuntime } from 'vtex.render-runtime';
import { useCssHandles } from 'vtex.css-handles';
import useInitScripts from './components/hooks/useInitScripts';
import './main-style.css';

// componentes de colecciones
import Submariner from './components/watches/submariner/Submariner';
import GmtMaster from './components/watches/gmt-master-ii/GmtMaster';
import YachtMaster from './components/watches/yacht-master/YachtMaster';
import SkyDweller from './components/watches/sky-dweller/SkyDweller';
import OysterPerp from './components/watches/oyster-perpetual/OysterPerp';
import LandDweller from './components/watches/land-dweller/LandDweller';
import Deepsea from './components/watches/deepsea/Deepsea';
import Explorer from './components/watches/explorer/Explorer';
import DateJust from './components/watches/datejust/DateJust';
import Daydate from './components/watches/day-date/Daydate';
import LadyDateJ from './components/watches/lady-datejust/LadyDateJ';
import CosmographD from './components/watches/cosmograph-daytona/CosmographD';
import Airking from './components/watches/air-king/Airking';
import Collection1908 from './components/watches/1908/1908';

const CSS_HANDLES = [
    'container', 'wrapper', 'content', 'error_message'
] as const;

// Mapa de colecciones a componentes
const COLLECTION_COMPONENTS = {
    'submariner': Submariner,
    'gmt-master-ii': GmtMaster,
    'yacht-master': YachtMaster,
    'sky-dweller': SkyDweller,
    'oyster-perpetual': OysterPerp,
    'land-dweller': LandDweller,
    'deepsea': Deepsea,
    'explorer': Explorer,
    'datejust': DateJust,
    'day-date': Daydate,
    'lady-datejust': LadyDateJ,
    'cosmograph-daytona': CosmographD,
    'air-king': Airking,
    '1908': Collection1908,
} as const;

type CollectionKey = keyof typeof COLLECTION_COMPONENTS;

const WatchCollection: React.FC = () => {
    useInitScripts();
    const handles = useCssHandles(CSS_HANDLES);
    const { route } = useRuntime();

    // Obtener  parámetro de colección de la URL
    const collection = route?.params?.collection as string;

    console.log('WatchCollection - Parámetro de colección:', collection);
    console.log('WatchCollection - Route completa:', route);

    if (!collection) {
        return (
            <div className={handles.container}>
                <div className={handles.error_message}>
                    <h1>Error: Colección no especificada</h1>
                    <p>La URL debe incluir el nombre de la colección.</p>
                </div>
            </div>
        );
    }

    // Normalizar el nombre de la colección
    const normalizedCollection = collection.toLowerCase() as CollectionKey;

    // Obtener el componente correspondiente
    const CollectionComponent = COLLECTION_COMPONENTS[normalizedCollection];

    if (!CollectionComponent) {
        return (
            <div className={handles.container}>
                <div className={handles.error_message}>
                    <h1>Colección no encontrada: {collection}</h1>
                    <p>Las colecciones disponibles son:</p>
                    <ul>
                        {Object.keys(COLLECTION_COMPONENTS).map(key => (
                            <li key={key}>
                                <a href={`/rolex/watches/${key}`}>{key}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }

    return <CollectionComponent />;
};

export default WatchCollection; 