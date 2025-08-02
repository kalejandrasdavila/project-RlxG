import React from 'react';
import useInitScripts from './components/hooks/useInitScripts';
import NewsModelsComponent from './components/nuevos-modelos/NewsModels';

const NewsModels: React.FC = () => {
    useInitScripts();
    return <NewsModelsComponent />;
};

export default NewsModels; 