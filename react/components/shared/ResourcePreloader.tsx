import React from 'react';

const ResourcePreloader: React.FC = () => {
    // Este componente se ejecuta inmediatamente y precarga recursos críticos
    React.useEffect(() => {
        if (typeof window === 'undefined' || typeof document === 'undefined') {
            return;
        }

        // Preload de recursos críticos de forma inmediata
        const preloadCriticalResources = () => {
            // 1. Preload de CSS críticos
            const criticalCSS = [
                'https://glauser.myvtex.com/files/style.min.css',
                'https://glauser.vteximg.com.br/arquivos/style-rolex-general-glauser.css'
            ];

            criticalCSS.forEach(href => {
                if (!document.querySelector(`link[href="${href}"]`)) {
                    const link = document.createElement('link');
                    link.rel = 'preload';
                    link.as = 'style';
                    link.href = href;
                    link.onload = () => {
                        link.onload = null;
                        link.rel = 'stylesheet';
                    };
                    document.head.appendChild(link);
                }
            });

            // 2. Preload de fuentes críticas
            const fontLink = document.createElement('link');
            fontLink.rel = 'preload';
            fontLink.as = 'font';
            fontLink.type = 'font/woff2';
            fontLink.crossOrigin = 'anonymous';
            fontLink.href = 'https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.ttf';
            document.head.appendChild(fontLink);

            // 3. Preload de imágenes críticas
            const criticalImages = [
                'https://galileo.tsqsa.com/FTPImagenes/rolex-img/logo-plecas/Rolex-retailer-plaque-240x120_en.jpg'
            ];

            criticalImages.forEach(src => {
                const img = new Image();
                img.src = src;
            });

            console.log('Recursos críticos precargados');
        };

        // Ejecutar inmediatamente
        preloadCriticalResources();
    }, []);

    return null; // Este componente no renderiza nada
};

export default ResourcePreloader;
