import { useEffect } from 'react';

interface ResourceConfig {
    title: string;
    description: string;
    canonicalUrl: string;
    ogUrl: string;
    ogImage: string;
    twitterImage: string;
}

interface UseOptimizedResourcesProps {
    config: ResourceConfig;
    includeSwiper?: boolean;
    includeJQuery?: boolean;
}

const useOptimizedResources = ({
    config,
    includeSwiper = true,
    includeJQuery = true
}: UseOptimizedResourcesProps) => {
    useEffect(() => {
        // Verificar que estamos en el navegador
        if (typeof window === 'undefined' || typeof document === 'undefined') {
            return;
        }

        // Evitar ejecución múltiple
        if (document.body.classList.contains('resources-loading')) {
            return;
        }

        // Marcar como cargando
        document.body.classList.add('resources-loading');
        // Función optimizada para cargar CSS con preload
        const loadCSS = (href: string, priority: boolean = false) => {
            return new Promise<void>((resolve) => {
                if (!document.querySelector(`link[href="${href}"]`)) {
                    // Preload para recursos críticos
                    if (priority) {
                        const preloadLink = document.createElement('link');
                        preloadLink.rel = 'preload';
                        preloadLink.as = 'style';
                        preloadLink.href = href;
                        preloadLink.onload = () => {
                            preloadLink.onload = null;
                            preloadLink.rel = 'stylesheet';
                        };
                        document.head.appendChild(preloadLink);
                    }

                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = href;
                    link.setAttribute('data-priority', priority ? 'high' : 'normal');
                    link.onload = () => resolve();
                    link.onerror = () => {
                        console.warn(`Failed to load CSS: ${href}`);
                        resolve();
                    };
                    document.head.appendChild(link);
                } else {
                    resolve();
                }
            });
        };

        // Función optimizada para cargar scripts
        const loadScript = (src: string, defer: boolean = false) => {
            return new Promise<void>((resolve) => {
                if (!document.querySelector(`script[src="${src}"]`)) {
                    const script = document.createElement('script');
                    script.src = src;
                    script.async = !defer;
                    script.defer = defer;
                    script.onload = () => resolve();
                    script.onerror = () => {
                        console.warn(`Failed to load script: ${src}`);
                        resolve();
                    };
                    document.head.appendChild(script);
                } else {
                    resolve();
                }
            });
        };

        // Configurar meta tags para SEO
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

        // Función para cargar scripts de tracking y schema
        const loadTrackingScripts = async () => {
            return new Promise<void>((resolve) => {
                // Script de digitalDataLayer
                const trackingScript = document.createElement('script');
                trackingScript.textContent = `
          var digitalDataLayer = {
            environment: {
              environmentVersion: "V7",
              coBrandedVersion: "Bespoke",
            },
            page: {
              pageType: "home page"
            },
          }
        `;
                document.head.appendChild(trackingScript);

                // Schema JSON-LD para Organization y WebPage
                const schemaScript = document.createElement('script');
                schemaScript.type = 'application/ld+json';
                schemaScript.textContent = JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Organization",
                            "@id": "https://www.glauser.com.co/#organization",
                            "name": "Joyería Glauser",
                            "url": "https://www.glauser.com.co/",
                            "sameAs": ["https://www.facebook.com/JoyeriaGlauser/", "https://www.instagram.com/joyeriaglauser/?hl=es-la"],
                            "logo": {
                                "@type": "ImageObject",
                                "@id": "https://www.glauser.com.co/#logo",
                                "inLanguage": "es-CO",
                                "url": "https://glauser.vteximg.com.br/arquivos/glauser_logo.svg",
                                "contentUrl": "https://glauser.vteximg.com.br/arquivos/glauser_logo.svg",
                                "width": 300,
                                "height": 102,
                                "caption": "Joyería Glauser"
                            },
                            "image": { "@id": "https://www.glauser.com.co/#logo" }
                        },
                        {
                            "@type": "WebPage",
                            "@id": `${config.canonicalUrl}#webpage`,
                            "url": config.canonicalUrl,
                            "name": config.title,
                            "isPartOf": { "@id": "https://www.glauser.com.co/#website" },
                            "datePublished": "2024-04-10T05:23:53+00:00",
                            "dateModified": "2025-04-01T05:23:53+00:00",
                            "description": config.description,
                            "breadcrumb": { "@id": `${config.canonicalUrl}#breadcrumb` },
                            "inLanguage": "es-Es",
                            "potentialAction": { "@type": "ReadAction", "target": config.canonicalUrl }
                        }
                    ]
                });
                document.head.appendChild(schemaScript);

                resolve();
            });
        };

        // Función principal optimizada para cargar todos los recursos
        const loadAllResources = async () => {
            // Timeout de seguridad para evitar bloqueos
            const timeoutId = setTimeout(() => {
                console.warn('Timeout loading resources, forcing visibility');
                document.body.classList.remove('loading-styles', 'resources-loading');
                document.body.classList.add('styles-loaded');
            }, 10000); // 10 segundos timeout

            try {
                // Marcar como cargando estilos
                document.body.classList.add('loading-styles');

                // Configurar título y meta tags de forma síncrona
                document.title = config.title;
                setMetaTag('description', config.description);
                setMetaTag('viewport', 'width=device-width, initial-scale=1');

                // Open Graph
                setMetaTag('', config.ogUrl, 'og:url');
                setMetaTag('', 'website', 'og:type');
                setMetaTag('', config.title, 'og:title');
                setMetaTag('', config.description, 'og:description');
                setMetaTag('', config.ogImage, 'og:image');

                // Twitter
                setMetaTag('twitter:card', 'summary_large_image');
                setMetaTag('twitter:site', '@glauser_col');
                setMetaTag('twitter:title', config.title);
                setMetaTag('twitter:description', config.description);
                setMetaTag('twitter:image', config.twitterImage);

                // Cargar recursos críticos en paralelo para mejor rendimiento
                console.log('Cargando recursos críticos...');

                const criticalResources = Promise.all([
                    loadCSS('https://glauser.myvtex.com/files/style.min.css', true),
                    loadCSS('https://glauser.vteximg.com.br/arquivos/style-rolex-general-glauser.css', true),
                    ...(includeJQuery ? [loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js', true)] : [])
                ]);

                // Cargar recursos secundarios después de los críticos
                const secondaryResourcesArray = includeSwiper ? [
                    loadCSS('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css'),
                    loadScript('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js')
                ] : [];

                // Esperar recursos críticos primero
                await criticalResources;
                console.log('Recursos críticos cargados');

                // Cargar scripts de tracking de forma asíncrona
                loadTrackingScripts().catch(err => console.warn('Error loading tracking scripts:', err));

                // Esperar recursos secundarios si existen
                if (secondaryResourcesArray.length > 0) {
                    await Promise.all(secondaryResourcesArray);
                }
                console.log('Todos los recursos cargados');

                // Configurar canonical
                let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
                if (!canonical) {
                    canonical = document.createElement('link');
                    canonical.rel = 'canonical';
                    document.head.appendChild(canonical);
                }
                canonical.href = config.canonicalUrl;

                // Limpiar timeout y optimizar la transición de estilos
                clearTimeout(timeoutId);
                requestAnimationFrame(() => {
                    document.body.classList.remove('loading-styles', 'resources-loading');
                    document.body.classList.add('styles-loaded');
                });

            } catch (error) {
                console.error('Error cargando recursos:', error);
                // Limpiar timeout y asegurar que la página sea visible
                clearTimeout(timeoutId);
                document.body.classList.remove('loading-styles', 'resources-loading');
                document.body.classList.add('styles-loaded');
            }
        };

        // Ejecutar carga de recursos
        loadAllResources();

    }, [config, includeSwiper, includeJQuery]);
};

export default useOptimizedResources;
