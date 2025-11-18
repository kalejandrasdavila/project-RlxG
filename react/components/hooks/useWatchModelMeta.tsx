import { useEffect } from 'react';

interface WatchModelMetaConfig {
    title: string;
    description: string;
    canonicalUrl: string;
    ogImage: string;
    pageFamilyName: string;
    productRMC: string;
    sku?: string;
    mpn?: string;
    price?: string;
    priceCurrency?: string;
    productName?: string;
    collectionName?: string;
}

export const useWatchModelMeta = (config: WatchModelMetaConfig) => {
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

        // Función para agregar scripts
        const addScript = (src: string, async: boolean = true) => {
            if (!document.head) return;
            const existingScript = document.querySelector(`script[src="${src}"]`);
            if (!existingScript) {
                const script = document.createElement('script');
                script.src = src;
                script.async = async;
                document.head.appendChild(script);
            }
        };

        // Meta tags básicos
        setMetaTag('description', config.description);
        setMetaTag('viewport', 'width=device-width, initial-scale=1');

        // CSS Links
        addLinkTag('stylesheet', 'https://glauser.myvtex.com/files/style.min.css');
        addLinkTag('stylesheet', 'https://glauser.vteximg.com.br/arquivos/style-rolex-general-glauser.css');
        addLinkTag('stylesheet', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css');

        // Scripts
        addScript('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', true);
        addScript('https://unpkg.com/swiper/swiper-bundle.min.js', true);
        addScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js', true);
        addScript('https://static.rolex.com/rlx-plaques-v2/js/plaquespage.js', true);

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
            window.digitalDataLayer = {
                environment: {
                    environmentVersion: "V7",
                    coBrandedVersion: "Bespoke"
                },
                page: {
                    pageType: "model page",
                    pageFamilyName: "${config.pageFamilyName}"
                },
                products: {
                    productRMC: "${config.productRMC}"
                }
            };
        `;
        if (!document.querySelector('script[data-digital-data-layer-model]')) {
            digitalDataScript.setAttribute('data-digital-data-layer-model', 'true');
            document.head.appendChild(digitalDataScript);
        }

        // JSON-LD Schema Script 1 (Organization & WebPage)
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
                    "potentialAction": [{ "@type": "ReadAction", "target": [config.canonicalUrl] }]
                }
            ]
        });
        if (!document.querySelector('script[data-schema-org-model-1]')) {
            schemaScript1.setAttribute('data-schema-org-model-1', 'true');
            document.head.appendChild(schemaScript1);
        }

        // JSON-LD Schema Script 2 (Product) - solo si se proporciona información del producto
        if (config.sku || config.productName) {
            const schemaScript2 = document.createElement('script');
            schemaScript2.type = 'application/ld+json';
            const productSchema: any = {
                "@context": "https://schema.org/",
                "@type": "Product",
                "name": config.productName || config.title.split(' - ')[0],
                "image": [config.ogImage],
                "description": config.description,
            };

            if (config.sku) {
                productSchema.sku = config.sku;
            }
            if (config.mpn) {
                productSchema.mpn = config.mpn;
            }
            if (config.price && config.priceCurrency) {
                productSchema.offers = {
                    "@type": "Offer",
                    "url": config.canonicalUrl,
                    "priceCurrency": config.priceCurrency,
                    "price": config.price,
                    "priceValidUntil": "2025-04-01",
                    "itemCondition": "https://schema.org/NewCondition",
                    "availability": "https://schema.org/InStock"
                };
            }

            productSchema.brand = {
                "@type": "Brand",
                "name": "Rolex"
            };

            schemaScript2.textContent = JSON.stringify(productSchema);
            if (!document.querySelector('script[data-schema-product-model]')) {
                schemaScript2.setAttribute('data-schema-product-model', 'true');
                document.head.appendChild(schemaScript2);
            }
        }

        // JSON-LD Schema Script 3 (Breadcrumb)
        const collectionName = config.collectionName || config.canonicalUrl.split('/').filter(Boolean).slice(-2, -1)[0] || '';
        const modelName = config.productRMC || config.canonicalUrl.split('/').filter(Boolean).pop()?.replace('/', '') || '';
        const schemaScript3 = document.createElement('script');
        schemaScript3.type = 'application/ld+json';
        schemaScript3.textContent = JSON.stringify({
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
                    "name": collectionName,
                    "item": config.canonicalUrl.split('/').slice(0, -1).join('/') + '/'
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "name": modelName
                }
            ]
        });
        if (!document.querySelector('script[data-schema-breadcrumb-model]')) {
            schemaScript3.setAttribute('data-schema-breadcrumb-model', 'true');
            document.head.appendChild(schemaScript3);
        }

        // Estilos inline para precio
        const style = document.createElement('style');
        style.type = 'text/css';
        style.textContent = `
            .precio-disponibilidad .body-20-light.text-black-lg-white {
                display: none;
            }
            .pageDisplay .precio-disponibilidad .body-20-light.text-black-lg-white {
                display: inline;
            }
        `;
        if (!document.querySelector('style[data-model-styles]')) {
            style.setAttribute('data-model-styles', 'true');
            document.head.appendChild(style);
        }
    }, [config]);
};

