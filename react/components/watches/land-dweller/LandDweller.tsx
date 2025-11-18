import React, { useEffect } from "react";
import useInitScripts from '../../../components/hooks/useInitScripts';
import RlxExploreMasNModels from "../../../components/parts/RlxExploreMasNModels";

import NavM from "../../../components/parts/NavModels";
import Footer from "../../../components/parts/Footer";

const MLandDweller: React.FC = () => {
    useInitScripts();

    useEffect(() => {
        // Solo ejecutar en el cliente
        if (typeof window === 'undefined' || typeof document === 'undefined' || !document.head) {
            return;
        }

        // Configurar título
        document.title = 'Relojes Rolex Land-Dweller - GLAUSER';

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
        setMetaTag('description', 'Descubra los relojes Rolex Land-Dweller en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra más en GLAUSER.');
        setMetaTag('viewport', 'width=device-width, initial-scale=1');

        // CSS Links
        addLinkTag('stylesheet', 'https://glauser.myvtex.com/files/style.min.css');
        addLinkTag('stylesheet', 'https://glauser.vteximg.com.br/arquivos/style-rolex-general-glauser.css');
        addLinkTag('stylesheet', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css');

        // Scripts
        addScript('https://unpkg.com/swiper/swiper-bundle.min.js', true);
        addScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js', true);
        addScript('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', true);

        // Canonical
        let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.href = 'https://glauser.myvtex.com/rolex/watches/land-dweller/';

        // Open Graph Meta Tags
        setMetaTag('', 'https://glauser.myvtex.com/rolex/watches/land-dweller/', 'og:url');
        setMetaTag('', 'website', 'og:type');
        setMetaTag('', 'Relojes Rolex Land-Dweller - GLAUSER', 'og:title');
        setMetaTag('', 'Descubra los relojes Rolex Land-Dweller en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra más en GLAUSER.', 'og:description');
        setMetaTag('', 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-land-dweller-m127334-0001-portrait.webp', 'og:image');

        // Twitter Meta Tags
        setMetaTag('twitter:card', 'summary_large_image');
        setMetaTag('twitter:url', 'https://glauser.myvtex.com/rolex/watches/land-dweller/');
        setMetaTag('twitter:title', 'Relojes Rolex Land-Dweller - GLAUSER');
        setMetaTag('twitter:description', 'Descubra los relojes Rolex Land-Dweller en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra más en GLAUSER.');
        setMetaTag('twitter:image', 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-land-dweller-m127334-0001-portrait.webp');

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
                    pageFamilyName: "land-dweller"
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
                    "@id": "https://glauser.myvtex.com/rolex/watches/land-dweller/#webpage",
                    "url": "https://glauser.myvtex.com/rolex/watches/land-dweller/",
                    "name": "Relojes Rolex Land-Dweller - GLAUSER",
                    "isPartOf": { "@id": "https://glauser.myvtex.com/#website" },
                    "datePublished": "2025-04-01T05:23:53+00:00",
                    "dateModified": "2025-04-01T05:23:53+00:00",
                    "description": "Descubra los relojes Rolex Land-Dweller en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra más en GLAUSER.",
                    "breadcrumb": { "@id": "https://glauser.myvtex.com/rolex/watches/land-dweller/#breadcrumb" },
                    "inLanguage": "es-Es",
                    "potentialAction": { "@type": "ReadAction", "target": "https://glauser.myvtex.com/rolex/watches/land-dweller/" }
                }
            ]
        });
        if (!document.querySelector('script[data-schema-org-1]')) {
            schemaScript1.setAttribute('data-schema-org-1', 'true');
            document.head.appendChild(schemaScript1);
        }

        // JSON-LD Schema Script 2 (Breadcrumb)
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
                    "name": "Land-Dweller"
                }
            ]
        });
        if (!document.querySelector('script[data-schema-org-2]')) {
            schemaScript2.setAttribute('data-schema-org-2', 'true');
            document.head.appendChild(schemaScript2);
        }
    }, []);

    return (
        <>
            <div className="header-component">
                {/*<vtex:template id="HeaderPromotion" />
                                    <vtex:template id="GLHeader" />*/ }
                <header className="main-header" id="main-header">
                    {/*<vtex:template id="MainNav" />*/}
                </header>
            </div>

            <main id="rlx-html">
                <header id="rlx-menu" className="rlx-menu">
                    <div className="rlx-container">
                        <div className="row-grid">
                            <div className="rlx-logo">
                                <a href="https://glauser.myvtex.com/rolex/" aria-label="Inicio" title="Inicio">
                                    <picture className="placa-rolex-logo">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/logo-plecas/Rolex-retailer-plaque-240x120_en.jpg" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/logo-plecas/Rolex-retailer-plaque-240x120_en.jpg" loading="lazy" />
                                    </picture>
                                </a>
                            </div>

                            <NavM />
                        </div>
                        <div className="row-grid breadcrum-page" style={{ height: "40px" }}>
                            <div className="breadcrum-column">
                                <ul className="breadcrum-menu-list description">
                                    <li className="fixed-14 none-mobil">
                                        <a href="https://glauser.myvtex.com/rolex/">Rolex</a>
                                    </li>
                                    <li className="fixed-14">
                                        <a href="https://glauser.myvtex.com/rolex/coleccion-rolex/">Relojes Rolex</a>
                                    </li>
                                    <li className="fixed-14 none-mobil active">
                                        <a className="active" href="https://glauser.myvtex.com/rolex/watches/land-dweller/">Land-Dweller</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </header>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/land-dweller/rolex-the-land-dweller-cover-m127334-0001-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/land-dweller/rolex-the-land-dweller-cover-m127334-0001-landscape.webp" loading="lazy" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw text-introduccion pb-90-60">
                            <div className="col-lg-2-5">
                                <h1 className="headline50 c-brown-text pb-20">Rolex Land-Dweller
                                    Ampliar horizontes</h1>
                            </div>
                            <div className="col-lg-8-5">
                                <p className="body-20-light"><strong>Representación de numerosos logros relojeros, fabricado por aquellos que forjan el futuro de la relojería, el Land-Dweller es el reloj de aquellos que construyen hoy el mundo del mañana.</strong></p>
                            </div>
                        </div>
                        <div className="row-grid-fullw reloes-componet-2-3">
                            <div className="col-span3-1 col-md-span4-1 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/land-dweller/m127334-0001/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m127334-0001-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m127334-0001-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Land-Dweller</p>
                                    <p className="legend-16-light">Oyster, 40 mm, acero Oystersteel y oro blanco</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-2 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/land-dweller/m127335-0001/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m127335-0001-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m127335-0001-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Land-Dweller</p>
                                    <p className="legend-16-light">Oyster, 40 mm, oro Everose</p>
                                </div>
                            </div>
                            <div className="col-span3-1 col-md-span4-3 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/land-dweller/m127286tbr-0001/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m127286tbr-0001-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m127286tbr-0001-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Land-Dweller</p>
                                    <p className="legend-16-light">Oyster, 36 mm, platino y diamantes</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-1 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/land-dweller/m127285tbr-0002/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m127285tbr-0002-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m127285tbr-0002-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Land-Dweller</p>
                                    <p className="legend-16-light">Oyster, 36 mm, oro Everose y diamantes</p>
                                </div>
                            </div>
                            <div className="col-span3-1 col-md-span4-2 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/land-dweller/m127235-0001/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m127235-0001-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m127235-0001-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Land-Dweller</p>
                                    <p className="legend-16-light">Oyster, 36 mm, oro Everose</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-3 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/land-dweller/m127234-0001/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m127234-0001-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m127234-0001-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Land-Dweller</p>
                                    <p className="legend-16-light">Oyster, 36 mm, acero Oystersteel y oro blanco</p>
                                </div>
                            </div>
                        </div>
                        <div id="masrelojescargados" className="row-grid-fullw reloes-componet-2-3 d-none-rlx pt-8" style={{ display: 'none' }}>
                            <div className="col-span3-1 col-md-span4-1 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/land-dweller/m127336-0001/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m127336-0001-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m127336-0001-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Land-Dweller</p>
                                    <p className="legend-16-light">Oyster, 40 mm, platino</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-2 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/land-dweller/m127236-0001/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m127236-0001-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m127236-0001-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Land-Dweller</p>
                                    <p className="legend-16-light">Oyster, 36 mm, platino</p>
                                </div>
                            </div>
                            <div className="col-span3-1 col-md-span4-3 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/land-dweller/m127385tbr-0003/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m127385tbr-0003-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m127385tbr-0003-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Land-Dweller</p>
                                    <p className="legend-16-light">Oyster, 40 mm, oro Everose y diamantes</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-1 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/land-dweller/m127386tbr-0001/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m127386tbr-0001-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m127386tbr-0001-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Land-Dweller</p>
                                    <p className="legend-16-light">Oyster, 40 mm, platino y diamantes</p>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center text-center pt-30-40">
                                <button id="rlx-more-watches" className="btn-primary-rlx">Descubra más</button>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-video py-90-60">
                            <div className="col-6-12">
                                <div className="banner-10 rlx-banner-100">
                                    <div className="ratio ratio-16x9">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Xo9ZabYdCFQ" title="Rolex Land-Dweller" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">Este reloj dispone de un brazalete que se integra con armonía a la caja, creando una estética fluida.</p>
                                <p className="body-20-light">Su diseño elegante y audaz alberga el movimiento que presenta innovaciones revolucionarias: el calibre 7135. Mís fino que la mayoría de movimientos de la marca, está diseñado para funcionar a una frecuencia elevada de 5 hercios y pone la excelencia al servicio del rendimiento.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/land-dweller/rolex-the-land-dweller-yuja-wang-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/land-dweller/rolex-the-land-dweller-yuja-wang-landscape.webp" loading="lazy" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <div className="pb-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/land-dweller/rolex-the-land-dweller-m127285tbr-0002-and-ywang-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/land-dweller/rolex-the-land-dweller-m127285tbr-0002-and-ywang-landscape.webp" loading="lazy" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">Calibre 7135
                                    Un movimiento de alta frecuencia</p>
                                <p className="body-20-light">El calibre 7135, íntegramente desarrollado y manufacturado de forma interna, funciona a una frecuencia excepcional de 5 hercios, o 36 000 alternancias por hora, una cadencia sin precedentes en Rolex. Posibilita que el reloj muestre la hora con una exactitud de dícimas de segundo. Tambiín presenta un diseño particularmente atractivo. A través del fondo transparente del reloj, se puede admirar el resplandor de la masa oscilante en oro amarillo, así como la decoración Cítes de Geníve Rolex que lucen los puentes.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/land-dweller/rolex-the-land-dweller-calibre-7135-m127285tbr-0002-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/land-dweller/rolex-the-land-dweller-calibre-7135-m127285tbr-0002-landscape.webp" loading="lazy" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-beige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <div className="pb-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/land-dweller/rolex-the-land-dweller-dynapulse-escapement-lancia-solar-still-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/land-dweller/rolex-the-land-dweller-dynapulse-escapement-lancia-solar-still-landscape.webp" loading="lazy" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div>
                                    <p className="headline50 c-brown-text pb-20">Calibre 7135
                                        Escape Dynapulse</p>
                                    <p className="body-20-light">El escape Dynapulse íla innovación más significativa del calibre 7135í constituye una alternativa revolucionaria al tradicional escape de íncora suizo. Esta distribuciín secuencial, fabricada principalmente con piezas de silicio, cuenta con una innovadora arquitectura y es sumamente ligera, prácticamente insensible a los campos magníticos y cuenta con rendimiento energítico claramente superior al de un escape tradicional.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div className="pb-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/land-dweller/rolex-the-land-dweller-state-of-the-art-oscillator-lancia-fusee-still-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/land-dweller/rolex-the-land-dweller-state-of-the-art-oscillator-lancia-fusee-still-landscape.webp" loading="lazy" />
                                    </picture>
                                </div>
                                <div>
                                    <p className="headline50 c-brown-text pb-20">Calibre 7135
                                        Oscilador de vanguardia</p>
                                    <p className="body-20-light">El oscilador del calibre 7135 está dotado de un eje de volante cuyo material y fabricación han supuesto un auténtico reto, un volante de latín optimizado y una espiral Syloxi de silicio. Y es que el eje patentado está fabricado en una nueva cerámica de alta tecnología, exclusiva de Rolex y esculpida con líser (una primicia para la marca). Los amortiguadores de golpes Paraflex optimizados confieren al movimiento una mayor resistencia a los golpes en cualquier posición. Finalmente, los diferentes materiales empleados para la realización de los componentes del oscilador le permiten soportar potentes campos magníticos.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/land-dweller/rolex-the-land-dweller-roger-federer-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/land-dweller/rolex-the-land-dweller-roger-federer-landscape.webp" loading="lazy" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-beige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <div className="pb-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/land-dweller/rolex-the-land-dweller-flat-jubilee-bracelet-m127334-0001-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/land-dweller/rolex-the-land-dweller-flat-jubilee-bracelet-m127334-0001-landscape.webp" loading="lazy" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div>
                                    <p className="headline50 c-brown-text pb-20">Brazalete Flat Jubilee
                                        Fundido a la caja</p>
                                    <p className="body-20-light">El Land-Dweller reinterpreta el diseño de los denominados relojes con brazalete integrado, caracterizados por una suave línea continua entre la caja y el brazalete. Inspirado en el emblemítico brazalete Jubilee introducido en el Datejust en 1945, el brazalete Flat Jubilee ha sido especialmente diseñado para el Land-Dweller. Sus elementos tienen una superficie plana, una característica única entre nuestros brazaletes de metal. Tambiín cuenta con nuevos acabados, incluyendo elementos centrales pulidos y elementos laterales satinados con los cantos pulidos. Visto de lado, el chaflín pulido que lucen las aristas superiores de la caja y los elementos laterales revela un círculo de luz, acentuando el diseño armonioso del reloj.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div className="pb-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/land-dweller/rolex-the-land-dweller-dial-with-honeycomb-m127336-0001-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/land-dweller/rolex-the-land-dweller-dial-with-honeycomb-m127336-0001-landscape.webp" loading="lazy" />
                                    </picture>
                                </div>
                                <div>
                                    <p className="headline50 c-brown-text pb-20">Esfera
                                        Motivo ínido de abejaí</p>
                                    <p className="body-20-light">Rodeada por un realce inclinado, esta esfera grífica luce un patrín geomítrico: un motivo ínido de abejaí desarrollado con un líser de alta tecnología. El acabado satinado de la esfera blanco intenso y el acabado tipo sol de la esfera azul glaciar son producto de tícnicas tradicionales. Las modalidades que cuentan con visualización Chromalight, los nímeros abiertos y los índices, con material luminiscente que aflora por cada extremo del componente, son exclusivas de la gama. Le brindan al Land-Dweller una legibilidad íptima en cualquier circunstancia. Las agujas, también luminiscentes, han sido especialmente diseíadas para el modelo. El segundero, en particular, se distingue por su contrapeso, cuya forma recuerda al motivo ínido de abejaí de la esfera.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/land-dweller/rolex-the-land-dweller-roger-federer-wrist-watch-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/land-dweller/rolex-the-land-dweller-roger-federer-wrist-watch-landscape.webp" loading="lazy" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-beige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div className="pb-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/land-dweller/rolex-watches-superlative-chronometer-certification-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/land-dweller/rolex-watches-superlative-chronometer-certification-landscape.webp" loading="lazy" />
                                    </picture>
                                </div>
                                <div>
                                    <p className="headline50 c-brown-text pb-20">El sello verde</p>
                                    <p className="body-20-light pb-30">Como todos los relojes Rolex, el Oyster Perpetual Land-Dweller 40 y el Oyster Perpetual Land-Dweller 36 cuentan con la certificación de Cronímetro Superlativo redefinida por Rolex en 2015. Esta denominación atestigua que cada reloj que sale de los talleres de la marca ha superado con éxito una serie de pruebas llevadas a cabo por Rolex en sus laboratorios internos y con arreglo a sus propios criterios, que siguen a la certificación oficial del movimiento por parte del Control Oficial Suizo de Cronímetros (COSC). La precisión de un Cronímetro Superlativo Rolex es del orden de í2 /+2 segundos al día (la desviaciín de marcha tolerada por la marca para un reloj terminado es mucho menor que la admitida por el COSC para la certificación oficial del movimiento por sí solo).</p>
                                    <p className="body-20-light">El estatus de Cronímetro Superlativo se simboliza mediante el sello verde que incluyen todos los relojes Rolex y que va acompañado de una garantía internacional de cinco años.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <RlxExploreMasNModels />
                <Footer />
            </main>
        </>
    );
}

export default MLandDweller;

