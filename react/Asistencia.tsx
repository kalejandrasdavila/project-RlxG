import React from 'react';
import useInitScripts from './components/hooks/useInitScripts';
import AsistenciaComponent from './components/asistencia/Asistencia';

const Asistencia: React.FC = () => {
    useInitScripts();
    return <AsistenciaComponent />;
};

export default Asistencia; 