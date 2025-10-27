import { useEffect } from 'react';

interface ResourceConfig {
    title: string;
    description: string;
    canonicalUrl: string;
    ogUrl: string;
    ogImage: string;
    twitterImage: string;
}

interface UseSimpleResourcesProps {
    config: ResourceConfig;
    includeSwiper?: boolean;
    includeJQuery?: boolean;
}

const useSimpleResources = ({
    config,
    includeSwiper = true,
    includeJQuery = true
}: UseSimpleResourcesProps) => {
    useEffect(() => {
        // Verificar que estamos en el navegador
        if (typeof window === 'undefined' || typeof document === 'undefined') {
            return;
        }

        // Configurar título y meta tags básicos
        document.title = config.title;

        // Función simple para cargar CSS
        const loadCSS = (href: string) => {
            if (!document.querySelector(`link[href="${href}"]`)) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = href;
                document.head.appendChild(link);
            }
        };

        // Función simple para cargar scripts
        const loadScript = (src: string) => {
            if (!document.querySelector(`script[src="${src}"]`)) {
                const script = document.createElement('script');
                script.src = src;
                script.async = true;
                document.head.appendChild(script);
            }
        };

        // Cargar recursos críticos inmediatamente
        loadCSS('https://glauser.myvtex.com/files/style.min.css');
        loadCSS('https://glauser.vteximg.com.br/arquivos/style-rolex-general-glauser.css');

        // Cargar jQuery si es necesario
        if (includeJQuery) {
            loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js');
        }

        // Cargar Swiper si es necesario
        if (includeSwiper) {
            loadCSS('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css');
            loadScript('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js');
        }

        // Configurar canonical
        let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.href = config.canonicalUrl;

        // Configurar meta tags básicos
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

        setMetaTag('description', config.description);
        setMetaTag('viewport', 'width=device-width, initial-scale=1');

        // Open Graph básico
        setMetaTag('', config.ogUrl, 'og:url');
        setMetaTag('', 'website', 'og:type');
        setMetaTag('', config.title, 'og:title');
        setMetaTag('', config.description, 'og:description');
        setMetaTag('', config.ogImage, 'og:image');

        // Twitter básico
        setMetaTag('twitter:card', 'summary_large_image');
        setMetaTag('twitter:title', config.title);
        setMetaTag('twitter:description', config.description);
        setMetaTag('twitter:image', config.twitterImage);

    }, [config, includeSwiper, includeJQuery]);
};

export default useSimpleResources;
