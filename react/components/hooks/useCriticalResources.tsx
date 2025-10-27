import { useEffect } from 'react';

interface ResourceConfig {
    title: string;
    description: string;
    canonicalUrl: string;
    ogUrl: string;
    ogImage: string;
    twitterImage: string;
}

interface UseCriticalResourcesProps {
    config: ResourceConfig;
    includeSwiper?: boolean;
    includeJQuery?: boolean;
}

const useCriticalResources = ({
    config,
    includeSwiper = true,
    includeJQuery = true
}: UseCriticalResourcesProps) => {
    useEffect(() => {
        // Verificar que estamos en el navegador
        if (typeof window === 'undefined' || typeof document === 'undefined') {
            return;
        }

        // Función para cargar CSS de forma síncrona y crítica
        const loadCriticalCSS = (href: string) => {
            if (!document.querySelector(`link[href="${href}"]`)) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = href;
                link.setAttribute('data-critical', 'true');
                // Insertar al inicio del head para máxima prioridad
                document.head.insertBefore(link, document.head.firstChild);
            }
        };

        // Función para cargar scripts de forma no bloqueante
        const loadScript = (src: string, defer: boolean = false) => {
            if (!document.querySelector(`script[src="${src}"]`)) {
                const script = document.createElement('script');
                script.src = src;
                script.async = !defer;
                script.defer = defer;
                script.setAttribute('data-priority', defer ? 'high' : 'normal');
                document.head.appendChild(script);
            }
        };

        // CARGAR ESTILOS CRÍTICOS INMEDIATAMENTE Y DE FORMA SÍNCRONA
        console.log('Cargando estilos críticos...');

        // 1. Estilos base de VTEX (CRÍTICO)
        loadCriticalCSS('https://glauser.myvtex.com/files/style.min.css');

        // 2. Estilos específicos de Rolex (CRÍTICO)
        loadCriticalCSS('https://glauser.vteximg.com.br/arquivos/style-rolex-general-glauser.css');

        // 3. Configurar título inmediatamente
        document.title = config.title;

        // 4. Configurar meta tags críticos
        const setMetaTag = (name: string, content: string, property?: string) => {
            const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
            let meta = document.querySelector(selector) as HTMLMetaElement;
            if (!meta) {
                meta = document.createElement('meta');
                if (property) {
                    meta.setAttribute('property', property);
                } else {
                    meta.setAttribute('name', name);
                }
                document.head.appendChild(meta);
            }
            meta.setAttribute('content', content);
        };

        // Meta tags críticos
        setMetaTag('description', config.description);
        setMetaTag('viewport', 'width=device-width, initial-scale=1');

        // 5. Cargar jQuery si es necesario (ALTA PRIORIDAD)
        if (includeJQuery) {
            loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js', true);
        }

        // 6. Cargar Swiper CSS (MEDIA PRIORIDAD)
        if (includeSwiper) {
            loadCriticalCSS('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css');
        }

        // 7. Configurar canonical
        let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.href = config.canonicalUrl;

        // 8. Open Graph básico
        setMetaTag('', config.ogUrl, 'og:url');
        setMetaTag('', 'website', 'og:type');
        setMetaTag('', config.title, 'og:title');
        setMetaTag('', config.description, 'og:description');
        setMetaTag('', config.ogImage, 'og:image');

        // 9. Twitter básico
        setMetaTag('twitter:card', 'summary_large_image');
        setMetaTag('twitter:title', config.title);
        setMetaTag('twitter:description', config.description);
        setMetaTag('twitter:image', config.twitterImage);

        // 10. Cargar Swiper JS después de un pequeño delay para no bloquear
        if (includeSwiper) {
            setTimeout(() => {
                loadScript('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js');
            }, 100);
        }

        // 11. Forzar re-render después de cargar estilos críticos
        setTimeout(() => {
            // Forzar reflow para asegurar que los estilos se apliquen
            document.body.offsetHeight;
            console.log('Estilos críticos cargados y aplicados');
        }, 50);

    }, [config, includeSwiper, includeJQuery]);
};

export default useCriticalResources;
