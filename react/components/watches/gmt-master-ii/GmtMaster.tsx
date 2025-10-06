import React, { useState } from "react";
import { useCssHandles } from 'vtex.css-handles';
import "../../../main-style.css";
import RlxExploreMasNModels from "../../../components/parts/RlxExploreMasNModels";

import { Helmet } from "react-helmet-async";
import useInitScripts from '../../../components/hooks/useInitScripts';

import NavM from "../../../components/parts/NavModels";
import Footer from "../../../components/parts/Footer";

const CSS_HANDLES = [
    'container', 'wrapper', 'content', 'section', 'title', 'subtitle',
    'image', 'text', 'button', 'link', 'grid', 'card', 'header', 'footer',
    'nav', 'menu', 'item', 'active', 'disabled', 'hidden', 'visible',
    'main', 'sidebar', 'overlay', 'modal', 'form', 'input', 'label',
    'pt_10', 'mb_20', 'mt_30', 'pb_15', 'ml_5', 'mr_10', 'pl_20', 'pr_15'
];

const handles = useCssHandles(CSS_HANDLES);


const GmtMaster: React.FC = () => {
    useInitScripts();
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return (
        <>
            <Helmet>
                <title>Relojes Rolex GMT-Master II - GLAUSER</title>
                <meta
                    name="description"
                    content="Descubra los relojes Rolex GMT-Master II en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra más en GLAUSER."
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

                <link rel="canonical" href="https://devjhernandez--glauser.myvtex.com/rolex/watches/gmt-master-ii/" />

                {/* Facebook Meta Tags */}
                <meta property="og:url" content="https://devjhernandez--glauser.myvtex.com/rolex/watches/gmt-master-ii/" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Relojes Rolex GMT-Master II - GLAUSER"
                />
                <meta
                    property="og:description"
                    content="Descubra los relojes Rolex GMT-Master II en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra más en GLAUSER."
                />
                <meta
                    property="og:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-gmt-master-ii-m126710grnr-0003-portrait.webp"
                />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://devjhernandez--glauser.myvtex.com/rolex/watches/gmt-master-ii/" />
                <meta
                    name="twitter:title"
                    content="Relojes Rolex GMT-Master II - GLAUSER"
                />
                <meta
                    name="twitter:description"
                    content="Descubra los relojes Rolex GMT-Master II en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra más en GLAUSER."
                />
                <meta
                    name="twitter:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-gmt-master-ii-m126710grnr-0003-portrait.webp"
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
                                                pageFamilyName: "gmt-master-ii"
                                                }
                                            };
                                            `}
                </script>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@graph": [
                                {
                                    "@type": "Organization",
                                    "@id": "https://devjhernandez--glauser.myvtex.com/#organization",
                                    "name": "Joyería Glauser",
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
                                        "caption": "Joyería Glauser"
                                    },
                                    "image": { "@id": "https://devjhernandez--glauser.myvtex.com/#logo" }
                                },
                                {
                                    "@type": "WebPage",
                                    "@id": "https://devjhernandez--glauser.myvtex.com/rolex/watches/gmt-master-ii/#webpage",
                                    "url": "https://devjhernandez--glauser.myvtex.com/rolex/watches/gmt-master-ii/",
                                    "name": "Relojes Rolex GMT-Master II - GLAUSER",
                                    "isPartOf": { "@id": "https://devjhernandez--glauser.myvtex.com/#website" },
                                    "datePublished": "2025-04-01T05:23:53+00:00",
                                    "dateModified": "2025-04-01T05:23:53+00:00",
                                    "description":
                                        "Descubra los relojes Rolex GMT-Master II en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra más en GLAUSER.",
                                    "breadcrumb": {
                                        "@id": "https://devjhernandez--glauser.myvtex.com/rolex/watches/gmt-master-ii/#breadcrumb"
                                    },
                                    "inLanguage": "es-Es",
                                    "potentialAction": {
                                        "@type": "ReadAction",
                                        "target": "https://devjhernandez--glauser.myvtex.com/rolex/watches/gmt-master-ii/"
                                    }
                                }
                            ]
                        })
                    }}
                />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
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
                                    "name": "GMT-Master II"
                                }
                            ]
                        })
                    }}
                />
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
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/logo-plecas/Rolex-retailer-plaque-240x120_en.jpg" loading="lazy" alt="placa distribuidor oficial rolex" />
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
                                        <a className="active" href="https://devjhernandez--glauser.myvtex.com/rolex/watches/gmt-master-ii/">GMT-Master II</a>
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
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/gmt-master-ii/rolex-gmt-master-ii-cover-m126710grnr-0003-2312-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/gmt-master-ii/rolex-gmt-master-ii-cover-m126710grnr-0003-2312-landscape.webp" loading="lazy" alt="GMT-Master II" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw text-introduccion pb-90-60">
                            <div className="col-lg-2-5">
                                <h1 className="headline50 c-brown-text pb-20">Rolex GMT-Master II
                                    Mantener los vínculos</h1>
                            </div>
                            <div className="col-lg-8-5">
                                <p className="body-20-light"><strong>El Oyster Perpetual GMT-Master II está diseñado para indicar la hora de dos husos horarios simultáneamente. Robusto y funcional, es el reloj ideal para quienes recorren el mundo.</strong> Presentado en 1955, el GMT-Master ha sido testigo privilegiado del auge de los viajes intercontinentales desde la segunda mitad del siglo XX. Incluso se convirtió en reloj oficial de la Pan American World Airways, la principal y más importante aerolínea internacional estadounidense de la época.</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw reloes-componet-2-3">
                            <div className="col-span3-1 col-md-span4-1 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/gmt-master-ii/m126711chnr-0002/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126711chnr-0002-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126711chnr-0002-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex GMT-Master II m126711chnr-0002 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">GMT-Master II</p>
                                    <p className="legend-16-light">Oyster, 40 mm, acero Oystersteel y oro Everose</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-2 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/gmt-master-ii/m126729vtnr-0001/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126729vtnr-0001-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126729vtnr-0001-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex GMT-Master II m126729vtnr-0001 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">GMT-Master II</p>
                                    <p className="legend-16-light">Oyster, 40 mm, oro blanco</p>
                                </div>
                            </div>
                            <div className="col-span3-1 col-md-span4-3 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/gmt-master-ii/m126715chnr-0002/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126715chnr-0002-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126715chnr-0002-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex GMT-Master II m126715chnr-0002 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">GMT-Master II</p>
                                    <p className="legend-16-light">Oyster, 40 mm, oro Everose</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-1 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/gmt-master-ii/m126713grnr-0001/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126713grnr-0001-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126713grnr-0001-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex GMT-Master II m126713grnr-0001 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">GMT-Master II</p>
                                    <p className="legend-16-light">Oyster, 40 mm, acero Oystersteel y oro amarillo</p>
                                </div>
                            </div>
                            <div className="col-span3-1 col-md-span4-2 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/gmt-master-ii/m126710grnr-0003/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126710grnr-0003-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126710grnr-0003-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex GMT-Master II m126710grnr-0003 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">GMT-Master II</p>
                                    <p className="legend-16-light">Oyster, 40 mm, acero Oystersteel</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-3 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/gmt-master-ii/m126720vtnr-0001/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126720vtnr-0001-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126720vtnr-0001-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex GMT-Master II m126720vtnr-0001 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">GMT-Master II</p>
                                    <p className="legend-16-light">Oyster, 40 mm, acero Oystersteel</p>
                                </div>
                            </div>
                        </div>
                        <div id="masrelojescargados" className="row-grid-fullw reloes-componet-2-3 d-none-rlx pt-8" style={{ display: 'none' }}>
                            <div className="col-span3-1 col-md-span4-1 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/gmt-master-ii/m126718grnr-0001/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126718grnr-0001-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126718grnr-0001-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex GMT-Master II m126718grnr-0001 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">GMT-Master II</p>
                                    <p className="legend-16-light">Oyster, 40 mm, oro amarillo</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-2 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/gmt-master-ii/m126710blnr-0003/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126710blnr-0003-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126710blnr-0003-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex GMT-Master II m126710blnr-0003 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">GMT-Master II</p>
                                    <p className="legend-16-light">Oyster, 40 mm, acero Oystersteel</p>
                                </div>
                            </div>
                            <div className="col-span3-1 col-md-span4-3 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/gmt-master-ii/m126710blnr-0002/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126710blnr-0002-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126710blnr-0002-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex GMT-Master II m126710blnr-0002 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">GMT-Master II</p>
                                    <p className="legend-16-light">Oyster, 40 mm, acero Oystersteel</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-1 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/gmt-master-ii/m126710blro-0001/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126710blro-0001-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126710blro-0001-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex GMT-Master II m126710blro-0001 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">GMT-Master II</p>
                                    <p className="legend-16-light">Oyster, 40 mm, acero Oystersteel</p>
                                </div>
                            </div>
                            <div className="col-span3-1 col-md-span4-2 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/gmt-master-ii/m126710blro-0002/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126710blro-0002-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126710blro-0002-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex GMT-Master II m126710blro-0002 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">GMT-Master II</p>
                                    <p className="legend-16-light">Oyster, 40 mm, acero Oystersteel</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-3 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/gmt-master-ii/m126710grnr-0004/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126710grnr-0004-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126710grnr-0004-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex GMT-Master II m126710grnr-0004 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">GMT-Master II</p>
                                    <p className="legend-16-light">Oyster, 40 mm, acero Oystersteel</p>
                                </div>
                            </div>
                            <div className="col-span3-1 col-md-span4-1 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/gmt-master-ii/m126715chnr-0001/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126715chnr-0001-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126715chnr-0001-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex GMT-Master II m126715chnr-0001 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">GMT-Master II</p>
                                    <p className="legend-16-light">Oyster, 40 mm, oro Everose</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-2 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/gmt-master-ii/m126718grnr-0002/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126718grnr-0002-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126718grnr-0002-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex GMT-Master II m126718grnr-0002 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">GMT-Master II</p>
                                    <p className="legend-16-light">Oyster, 40 mm, oro amarillo</p>
                                </div>
                            </div>
                            <div className="col-span3-1 col-md-span4-3 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/gmt-master-ii/m126719blro-0002/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126719blro-0002-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126719blro-0002-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex GMT-Master II m126719blro-0002 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">GMT-Master II</p>
                                    <p className="legend-16-light">Oyster, 40 mm, oro blanco</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-1 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/gmt-master-ii/m126719blro-0003/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126719blro-0003-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126719blro-0003-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex GMT-Master II m126719blro-0003 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">GMT-Master II</p>
                                    <p className="legend-16-light">Oyster, 40 mm, oro blanco</p>
                                </div>
                            </div>
                            <div className="col-span3-1 col-md-span4-2 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/gmt-master-ii/m126720vtnr-0002/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126720vtnr-0002-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126720vtnr-0002-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex GMT-Master II m126720vtnr-0002 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">GMT-Master II</p>
                                    <p className="legend-16-light">Oyster, 40 mm, acero Oystersteel</p>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center text-center pt-30-40">
                                <button id="rlx-more-watches"
                                    className="btn-primary-rlx"
                                    onClick={() => setIsVisible(!isVisible)}
                                >
                                    {isVisible ? "Mostrar menos" : "Descubra más"}
                                </button>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-video py-90-60">
                            <div className="col-6-12">
                                <div className="banner-10 rlx-banner-100">
                                    <div className="ratio ratio-16x9">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/O6NCQS_Uwp8" title="Rolex GMT-Master II" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">Tanto por sus funciones como por su nombre, el Oyster Perpetual GMT-Master II hace referencia directa a los husos horarios y a los viajes de larga distancia.</p>
                                <p className="body-20-light">Auténtico reloj-herramienta, el GMT-Master no ha dejado de evolucionar para ofrecer unas prestaciones cronométricas cada vez más punteras. En 1982, Rolex introduce un nuevo calibre que permite ajustar la aguja de las horas de forma independiente de la de los minutos y de la aguja 24 horas. Para marcar esta evolución, el modelo equipado con el movimiento optimizado se bautizó como GMT-Master II.</p>
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
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/gmt-master-ii/rolex-gmt-master-ii-m126715chnr-0001-m126715chnr-0001-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/gmt-master-ii/rolex-gmt-master-ii-m126715chnr-0001-m126715chnr-0001-landscape.webp" loading="lazy" alt="GMT-Master II" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">Un único instrumento, varios husos horarios</p>
                                <p className="body-20-light pb-30">El GMT-Master II luce un diseño inmediatamente reconocible con un disco de bisel graduado disponible en diferentes versiones bicolor: la mitad inferior simboliza las horas del día y la superior, las de la noche. Con su visualización tradicional por medio de aguja de las horas, minutero y segundero, su aguja 24 horas rematada en un triángulo y su bisel giratorio bidireccional con disco Cerachrom graduado 24 horas, el GMT-Master II permite leer de forma simultánea la hora de dos husos horarios: ya sea la hora local y la hora de referencia, o bien la hora local y la de otro huso horario.</p>
                                <p className="body-20-light">El GMT-Master II actual está equipado con el calibre 3285, un movimiento mecánico de cuerda automática completamente desarrollado y manufacturado por Rolex. Este movimiento, concentrado de tecnología, presenta un elevado rendimiento en materia de precisión, reserva de marcha, resistencia a los golpes, comodidad de uso y fiabilidad. Está equipado con la espiral Parachrom azul y cuenta también con el escape Chronergy patentado. La reserva de marcha del movimiento es de aproximadamente 70 horas.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/gmt-master-ii/rolex-gmt-master-ii-m126729vtnr-0001-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/gmt-master-ii/rolex-gmt-master-ii-m126729vtnr-0001-landscape.webp" loading="lazy" alt="GMT-Master II" />
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
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/gmt-master-ii/rolex-gmt-master-m126710grnr-0003-2401-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/gmt-master-ii/rolex-gmt-master-m126710grnr-0003-2401-landscape.webp" loading="lazy" alt="GMT-Master II" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">Cerámica de alta tecnología</p>
                                <p className="body-20-light pb-30">El disco de bisel Cerachrom fabricado por Rolex es de una sola pieza con cerámica extremadamente dura. Este material de alta tecnología es prácticamente imposible de rayar y mantiene sus colores vibrantes a través del tiempo. En 2013, Rolex desempeñó un papel pionero al presentar su primer disco de bisel bicolor de cerámica en una sola pieza —una mitad azul y la otra negra. Un año más tarde, la marca presentó el disco Cerachrom bicolor en rojo y azul, los colores originales del GMT-Master. Rolex llevó a cabo investigaciones inéditas e innovadoras para desarrollar una cerámica roja que cumpliese sus criterios estéticos y de calidad.</p>
                                <p className="body-20-light">A lo largo de los años, Rolex ha presentado otras combinaciones de colores, como marrón y negro en 2018, verde y negro en 2022, en una versión con la corona y los protectores de la corona en el lado izquierdo de la caja y la indicación de la fecha en la posición de las 9 h, y gris y negro en 2023.</p>
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
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/gmt-master-ii/rolex-gmt-master-ii-greenseal-2301-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/gmt-master-ii/rolex-gmt-master-ii-greenseal-2301-landscape.webp" loading="lazy" alt="Certificación de Cronómetro Superlativo" />
                                    </picture>
                                </div>
                                <p className="headline50 c-brown-text pb-20">Certificación de Cronómetro Superlativo</p>
                                <p className="body-20-light">Como todos los relojes Rolex, el GMT-Master II cuenta con la certificación de Cronómetro Superlativo. Esta denominación atestigua que cada reloj que sale de los talleres de la marca ha superado con éxito una serie de pruebas llevadas a cabo por Rolex en sus laboratorios internos y con arreglo a sus propios criterios. El estatus de Cronómetro Superlativo se simboliza mediante el sello verde que incluyen todos los relojes Rolex y que va acompañado de una garantía internacional de cinco años.</p>
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

export default GmtMaster;