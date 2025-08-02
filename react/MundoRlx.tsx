import React from 'react';
import useInitScripts from './components/hooks/useInitScripts';
import MundoRlxComponent from './components/mundorlx/MundoRlx';

const MundoRlx: React.FC = () => {
    useInitScripts();
    return <MundoRlxComponent />;
};

export default MundoRlx; 