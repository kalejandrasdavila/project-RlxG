import React from 'react';
import useInitScripts from './components/hooks/useInitScripts';
import ContactenosComponent from './components/contacto/Contactenos';

const Contactenos: React.FC = () => {
    useInitScripts();
    return <ContactenosComponent />;
};

export default Contactenos; 