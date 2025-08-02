import React from 'react';
import useInitScripts from './components/hooks/useInitScripts';
import WatchmakingComponent from './components/savoir-faire/Watchmaking';

const Watchmaking: React.FC = () => {
    useInitScripts();
    return <WatchmakingComponent />;
};

export default Watchmaking; 