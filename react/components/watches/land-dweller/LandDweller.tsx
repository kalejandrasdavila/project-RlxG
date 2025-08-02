import React from "react";
import { Helmet } from "react-helmet-async";
import useInitScripts from '../../hooks/useInitScripts';
import RlxExploreMasNModels from "../../parts/RlxExploreMasNModels";
import NavM from "../../parts/NavModels";
import Footer from '../../parts/Footer';

const MLandDweller: React.FC = () => {
    useInitScripts();
    return (
        <>
            <Helmet>
                <title>Relojes Rolex Land-Dweller - GLAUSER</title>
                <meta
                    name="description"
                    content="Descubra los relojes Rolex Land-Dweller en l�nea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra m�s en GLAUSER."
                />
                {/* <div dangerouslySetInnerHTML={{ __html: "<vtex:metaTags />" }} />
                                                                <div dangerouslySetInnerHTML={{ __html: '<vtex:contentPlaceHolder id="Metatags" />' }} />
                                                                <div dangerouslySetInnerHTML={{ __html: '<vtex:template id="GL-Favicon" />' }} />*/}

                {/* <vtex.cmc:GLMetaTags /> */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://devjhernandez--glauser.myvtex.com/files/style.min.css"
                />
                <link rel="stylesheet preload" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://glauser.vteximg.com.br/arquivos/style-rolex-general-glauser.css"
                />
                <link
                    rel="stylesheet preload"
                    href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
                />
                <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

                <link rel="canonical" href="https://devjhernandez--glauser.myvtex.com/rolex/watches/land-dweller/" />

                {/* Facebook Meta Tags */}
                <meta property="og:url" content="https://devjhernandez--glauser.myvtex.com/rolex/watches/land-dweller/" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Relojes Rolex Land-Dweller - GLAUSER"
                />
                <meta
                    property="og:description"
                    content="Descubra los relojes Rolex Land-Dweller en l�nea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra m�s en GLAUSER."
                />
                <meta
                    property="og:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-land-dweller-m127334-0001-portrait.webp"
                />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://devjhernandez--glauser.myvtex.com/rolex/watches/land-dweller/" />
                <meta
                    name="twitter:title"
                    content="Relojes Rolex Land-Dweller - GLAUSER"
                />
                <meta
                    name="twitter:description"
                    content="Descubra los relojes Rolex Land-Dweller en l�nea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra m�s en GLAUSER."
                />
                <meta
                    name="twitter:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-land-dweller-m127334-0001-portrait.webp"
                />

                <script type="text/javascript">
                    {`
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
                    `}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Organization",
                                "@id": "https://devjhernandez--glauser.myvtex.com/#organization",
                                "name": "Joyer�a Glauser",
                                "url": "https://devjhernandez--glauser.myvtex.com/",
                                "sameAs": [
                                    "https://www.facebook.com/JoyeriaGlauser/",
                                    "https://www.instagram.com/joyeriaglauser/?hl=es-la"
                                ],
                                "logo": {
                                    "@type": "ImageObject",
                                    "@id": "https://devjhernandez--glauser.myvtex.com/#logo",
                                    "inLanguage": "es-CO",
                                    "url": "https://glauser.vteximg.com.br/arquivos/glauser_logo.svg",
                                    "contentUrl": "https://glauser.vteximg.com.br/arquivos/glauser_logo.svg",
                                    "width": 300,
                                    "height": 102,
                                    "caption": "Joyer�a Glauser"
                                },
                                "image": { "@id": "https://devjhernandez--glauser.myvtex.com/#logo" }
                            },
                            {
                                "@type": "WebPage",
                                "@id": "https://devjhernandez--glauser.myvtex.com/rolex/watches/land-dweller/#webpage",
                                "url": "https://devjhernandez--glauser.myvtex.com/rolex/watches/land-dweller/",
                                "name": "Relojes Rolex Land-Dweller - GLAUSER",
                                "isPartOf": { "@id": "https://devjhernandez--glauser.myvtex.com/#website" },
                                "datePublished": "2025-04-01T05:23:53+00:00",
                                "dateModified": "2025-04-01T05:23:53+00:00",
                                "description": "Descubra los relojes Rolex Land-Dweller en l�nea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra m�s en GLAUSER.",
                                "breadcrumb": { "@id": "https://devjhernandez--glauser.myvtex.com/rolex/watches/land-dweller/#breadcrumb" },
                                "inLanguage": "es-Es",
                                "potentialAction": { "@type": "ReadAction", "target": "https://devjhernandez--glauser.myvtex.com/rolex/watches/land-dweller/" }
                            }
                        ]
                    })}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Rolex GLAUSER",
                                "item": "https://devjhernandez--glauser.myvtex.com/rolex/"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Relojes Rolex",
                                "item": "https://devjhernandez--glauser.myvtex.com/rolex/coleccion-rolex/"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "Land-Dweller"
                            }
                        ]
                    })}
                </script>
            </Helmet>
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
                                <a href="https://devjhernandez--glauser.myvtex.com/rolex/" aria-label="Inicio" title="Inicio">
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
                                        <a href="https://devjhernandez--glauser.myvtex.com/rolex/">Rolex</a>
                                    </li>
                                    <li className="fixed-14">
                                        <a href="https://devjhernandez--glauser.myvtex.com/rolex/coleccion-rolex/">Relojes Rolex</a>
                                    </li>
                                    <li className="fixed-14 none-mobil active">
                                        <a className="active" href="https://devjhernandez--glauser.myvtex.com/rolex/watches/land-dweller/">Land-Dweller</a>
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
                                <p className="body-20-light"><strong>Representaci�n de numerosos logros relojeros, fabricado por aquellos que forjan el futuro de la relojer�a, el Land-Dweller es el reloj de aquellos que construyen hoy el mundo del ma�ana.</strong></p>
                            </div>
                        </div>
                        <div className="row-grid-fullw reloes-componet-2-3">
                            <div className="col-span3-1 col-md-span4-1 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/land-dweller/m127334-0001/">
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
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/land-dweller/m127335-0001/">
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
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/land-dweller/m127286tbr-0001/">
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
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/land-dweller/m127285tbr-0002/">
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
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/land-dweller/m127235-0001/">
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
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/land-dweller/m127234-0001/">
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
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/land-dweller/m127336-0001/">
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
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/land-dweller/m127236-0001/">
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
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/land-dweller/m127385tbr-0003/">
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
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/land-dweller/m127386tbr-0001/">
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
                                <button id="rlx-more-watches" className="btn-primary-rlx">Descubra m�s</button>
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
                                <p className="headline50 c-brown-text pb-20">Este reloj dispone de un brazalete que se integra con armon�a a la caja, creando una est�tica fluida.</p>
                                <p className="body-20-light">Su dise�o elegante y audaz alberga el movimiento que presenta innovaciones revolucionarias: el calibre 7135. M�s fino que la mayor�a de movimientos de la marca, est� dise�ado para funcionar a una frecuencia elevada de 5 hercios y pone la excelencia al servicio del rendimiento.</p>
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
                                <p className="body-20-light">El calibre 7135, �ntegramente desarrollado y manufacturado de forma interna, funciona a una frecuencia excepcional de 5 hercios, o 36 000 alternancias por hora, una cadencia sin precedentes en Rolex. Posibilita que el reloj muestre la hora con una exactitud de d�cimas de segundo. Tambi�n presenta un dise�o particularmente atractivo. A trav�s del fondo transparente del reloj, se puede admirar el resplandor de la masa oscilante en oro amarillo, as� como la decoraci�n C�tes de Gen�ve Rolex que lucen los puentes.</p>
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
                                    <p className="body-20-light">El escape Dynapulse �la innovaci�n m�s significativa del calibre 7135� constituye una alternativa revolucionaria al tradicional escape de �ncora suizo. Esta distribuci�n secuencial, fabricada principalmente con piezas de silicio, cuenta con una innovadora arquitectura y es sumamente ligera, pr�cticamente insensible a los campos magn�ticos y cuenta con rendimiento energ�tico claramente superior al de un escape tradicional.</p>
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
                                    <p className="body-20-light">El oscilador del calibre 7135 est� dotado de un eje de volante cuyo material y fabricaci�n han supuesto un aut�ntico reto, un volante de lat�n optimizado y una espiral Syloxi de silicio. Y es que el eje patentado est� fabricado en una nueva cer�mica de alta tecnolog�a, exclusiva de Rolex y esculpida con l�ser (una primicia para la marca). Los amortiguadores de golpes Paraflex optimizados confieren al movimiento una mayor resistencia a los golpes en cualquier posici�n. Finalmente, los diferentes materiales empleados para la realizaci�n de los componentes del oscilador le permiten soportar potentes campos magn�ticos.</p>
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
                                    <p className="body-20-light">El Land-Dweller reinterpreta el dise�o de los denominados relojes con brazalete integrado, caracterizados por una suave l�nea continua entre la caja y el brazalete. Inspirado en el emblem�tico brazalete Jubilee introducido en el Datejust en 1945, el brazalete Flat Jubilee ha sido especialmente dise�ado para el Land-Dweller. Sus elementos tienen una superficie plana, una caracter�stica �nica entre nuestros brazaletes de metal. Tambi�n cuenta con nuevos acabados, incluyendo elementos centrales pulidos y elementos laterales satinados con los cantos pulidos. Visto de lado, el chafl�n pulido que lucen las aristas superiores de la caja y los elementos laterales revela un c�rculo de luz, acentuando el dise�o armonioso del reloj.</p>
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
                                        Motivo �nido de abeja�</p>
                                    <p className="body-20-light">Rodeada por un realce inclinado, esta esfera gr�fica luce un patr�n geom�trico: un motivo �nido de abeja� desarrollado con un l�ser de alta tecnolog�a. El acabado satinado de la esfera blanco intenso y el acabado tipo sol de la esfera azul glaciar son producto de t�cnicas tradicionales. Las modalidades que cuentan con visualizaci�n Chromalight, los n�meros abiertos y los �ndices, con material luminiscente que aflora por cada extremo del componente, son exclusivas de la gama. Le brindan al Land-Dweller una legibilidad �ptima en cualquier circunstancia. Las agujas, tambi�n luminiscentes, han sido especialmente dise�adas para el modelo. El segundero, en particular, se distingue por su contrapeso, cuya forma recuerda al motivo �nido de abeja� de la esfera.</p>
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
                                    <p className="body-20-light pb-30">Como todos los relojes Rolex, el Oyster Perpetual Land-Dweller 40 y el Oyster Perpetual Land-Dweller 36 cuentan con la certificaci�n de Cron�metro Superlativo redefinida por Rolex en 2015. Esta denominaci�n atestigua que cada reloj que sale de los talleres de la marca ha superado con �xito una serie de pruebas llevadas a cabo por Rolex en sus laboratorios internos y con arreglo a sus propios criterios, que siguen a la certificaci�n oficial del movimiento por parte del Control Oficial Suizo de Cron�metros (COSC). La precisi�n de un Cron�metro Superlativo Rolex es del orden de �2 /+2 segundos al d�a (la desviaci�n de marcha tolerada por la marca para un reloj terminado es mucho menor que la admitida por el COSC para la certificaci�n oficial del movimiento por s� solo).</p>
                                    <p className="body-20-light">El estatus de Cron�metro Superlativo se simboliza mediante el sello verde que incluyen todos los relojes Rolex y que va acompa�ado de una garant�a internacional de cinco a�os.</p>
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

