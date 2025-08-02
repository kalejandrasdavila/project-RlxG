import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

const App = () => (
    <HelmetProvider>
        <>
            <div className="rlx-global-app-container">
            </div>
        </>
    </HelmetProvider>
);

export default App;