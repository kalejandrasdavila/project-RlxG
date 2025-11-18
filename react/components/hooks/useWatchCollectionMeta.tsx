import { useEffect } from 'react';

interface WatchCollectionMetaConfig {
    title: string;
    description: string;
    canonicalUrl: string;
    ogImage: string;
    pageFamilyName: string;
}

export const useWatchCollectionMeta = (config: WatchCollectionMetaConfig) => {
    useEffect(() => {
        // Solo ejecutar en el cliente
        if (typeof window === 'undefined' || typeof document === 'undefined' || !document.head) {
            return;
        }

        // Configurar título
        document.title = config.title;

        // Función para configurar meta tags
        const setMetaTag = (name: string, content: string, property?: string) => {
            if (!document.head) return;
            const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
            let meta = document.querySelector(selector) as HTMLMetaElement;
            if (!meta) {
                meta = document.createElement('meta');
                if (property) {
                    meta.setAttribute('property', property);
                } else {
                    meta.setAttribute('name', name);
                }
                if (document.head) {
                    document.head.appendChild(meta);
                }
            }
            meta.setAttribute('content', content);
        };

        // Función para agregar link tags
        const addLinkTag = (rel: string, href: string) => {
            if (!document.head) return;
            const existingLink = document.querySelector(`link[rel="${rel}"][href="${href}"]`);
            if (!existingLink) {
                const link = document.createElement('link');
                link.rel = rel;
                link.href = href;
                if (rel === 'stylesheet') {
                    link.type = 'text/css';
                }
                document.head.appendChild(link);
            }
        };

        // Función para agregar scripts y esperar a que se carguen
        const addScript = (src: string, async: boolean = true): Promise<void> => {
            return new Promise((resolve, reject) => {
                if (!document.head) {
                    reject(new Error('document.head is not available'));
                    return;
                }
                const existingScript = document.querySelector(`script[src="${src}"]`) as HTMLScriptElement;
                if (existingScript) {
                    // Si el script ya existe, verificar si está cargado
                    // Verificar si el script ya tiene un onload handler o si ya está en el DOM
                    if (existingScript.getAttribute('data-loaded') === 'true') {
                        resolve();
                    } else {
                        existingScript.setAttribute('data-loaded', 'true');
                        existingScript.addEventListener('load', () => resolve());
                        existingScript.addEventListener('error', () => reject(new Error(`Failed to load script: ${src}`)));
                        // Si el script ya está en el DOM pero no se ha cargado, intentar cargarlo de nuevo
                        if (!existingScript.src) {
                            existingScript.src = src;
                        }
                    }
                    return;
                }
                const script = document.createElement('script');
                script.src = src;
                script.async = async;
                script.setAttribute('data-loaded', 'false');
                script.onload = () => {
                    script.setAttribute('data-loaded', 'true');
                    resolve();
                };
                script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
                document.head.appendChild(script);
            });
        };

        // Meta tags básicos
        setMetaTag('description', config.description);
        setMetaTag('viewport', 'width=device-width, initial-scale=1');

        // CSS Links
        addLinkTag('stylesheet', 'https://glauser.myvtex.com/files/style.min.css');
        addLinkTag('stylesheet', 'https://glauser.vteximg.com.br/arquivos/style-rolex-general-glauser.css');
        addLinkTag('stylesheet', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css');

        // Scripts - Cargar Swiper primero (usar solo una versión para evitar conflictos)
        // Priorizar la versión de CDN más reciente
        addScript('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', true)
            .catch(() => {
                // Si falla, intentar con la versión alternativa
                addScript('https://unpkg.com/swiper/swiper-bundle.min.js', true);
            });
        addScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js', true);

        // Canonical
        let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.href = config.canonicalUrl;

        // Open Graph Meta Tags
        setMetaTag('', config.canonicalUrl, 'og:url');
        setMetaTag('', 'website', 'og:type');
        setMetaTag('', config.title, 'og:title');
        setMetaTag('', config.description, 'og:description');
        setMetaTag('', config.ogImage, 'og:image');

        // Twitter Meta Tags
        setMetaTag('twitter:card', 'summary_large_image');
        setMetaTag('twitter:url', config.canonicalUrl);
        setMetaTag('twitter:title', config.title);
        setMetaTag('twitter:description', config.description);
        setMetaTag('twitter:image', config.ogImage);

        // Digital Data Layer Script
        const digitalDataScript = document.createElement('script');
        digitalDataScript.type = 'text/javascript';
        digitalDataScript.textContent = `
            var digitalDataLayer = {
                environment: {
                    environmentVersion: "V7",
                    coBrandedVersion: "Bespoke"
                },
                page: {
                    pageType: "family page",
                    pageFamilyName: "${config.pageFamilyName}"
                }
            };
        `;
        if (!document.querySelector('script[data-digital-data-layer]')) {
            digitalDataScript.setAttribute('data-digital-data-layer', 'true');
            document.head.appendChild(digitalDataScript);
        }

        // JSON-LD Schema Script 1
        const schemaScript1 = document.createElement('script');
        schemaScript1.type = 'application/ld+json';
        schemaScript1.textContent = JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "Organization",
                    "@id": "https://glauser.myvtex.com/#organization",
                    "name": "Joyería Glauser",
                    "url": "https://glauser.myvtex.com/",
                    "sameAs": [
                        "https://www.facebook.com/JoyeriaGlauser/",
                        "https://www.instagram.com/joyeriaglauser/?hl=es-la"
                    ],
                    "logo": {
                        "@type": "ImageObject",
                        "@id": "https://glauser.myvtex.com/#logo",
                        "inLanguage": "es-CO",
                        "url": "https://glauser.vteximg.com.br/arquivos/glauser_logo.svg",
                        "contentUrl": "https://glauser.vteximg.com.br/arquivos/glauser_logo.svg",
                        "width": 300,
                        "height": 102,
                        "caption": "Joyería Glauser"
                    },
                    "image": { "@id": "https://glauser.myvtex.com/#logo" }
                },
                {
                    "@type": "WebPage",
                    "@id": `${config.canonicalUrl}#webpage`,
                    "url": config.canonicalUrl,
                    "name": config.title,
                    "isPartOf": { "@id": "https://glauser.myvtex.com/#website" },
                    "datePublished": "2025-04-01T05:23:53+00:00",
                    "dateModified": "2025-04-01T05:23:53+00:00",
                    "description": config.description,
                    "breadcrumb": { "@id": `${config.canonicalUrl}#breadcrumb` },
                    "inLanguage": "es-Es",
                    "potentialAction": { "@type": "ReadAction", "target": config.canonicalUrl }
                }
            ]
        });
        if (!document.querySelector('script[data-schema-org-1]')) {
            schemaScript1.setAttribute('data-schema-org-1', 'true');
            document.head.appendChild(schemaScript1);
        }

        // JSON-LD Schema Script 2 (Breadcrumb) - extraer nombre de colección de la URL
        const collectionName = config.canonicalUrl.split('/').filter(Boolean).pop()?.replace('/', '') || '';
        const schemaScript2 = document.createElement('script');
        schemaScript2.type = 'application/ld+json';
        schemaScript2.textContent = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Rolex GLAUSER",
                    "item": "https://glauser.myvtex.com/rolex/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Relojes Rolex",
                    "item": "https://glauser.myvtex.com/rolex/coleccion-rolex/"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": collectionName
                }
            ]
        });
        if (!document.querySelector('script[data-schema-org-2]')) {
            schemaScript2.setAttribute('data-schema-org-2', 'true');
            document.head.appendChild(schemaScript2);
        }
    }, [config]);
};

