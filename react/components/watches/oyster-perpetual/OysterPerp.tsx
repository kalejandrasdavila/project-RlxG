import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import useInitScripts from '../../../components/hooks/useInitScripts';
import RlxExploreMasNModels from "../../../components/parts/RlxExploreMasNModels";

import NavM from "../../../components/parts/NavModels";
import Footer from "../../../components/parts/Footer";
import "../../../main-style.css";
const OysterP: React.FC = () => {
    useInitScripts();
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <Helmet>
                <title>Relojes Rolex Oyster Perpetual - GLAUSER</title>
                <meta
                    name="description"
                    content="Descubra los relojes Rolex Oyster Perpetual en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra más en GLAUSER."
                />
                {/* <div dangerouslySetInnerHTML={{ __html: "<vtex:metaTags />" }} />
                                                                <div dangerouslySetInnerHTML={{ __html: '<vtex:contentPlaceHolder id="Metatags" />' }} />
                                                                <div dangerouslySetInnerHTML={{ __html: '<vtex:template id="GL-Favicon" />' }} />*/}

                {/* <vtex.cmc:GLMetaTags /> */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://glauser.myvtex.com/files/style.min.css"
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

                <link rel="canonical" href="https://glauser.myvtex.com/rolex/watches/oyster-perpetual/" />

                {/* Facebook Meta Tags */}
                <meta property="og:url" content="https://glauser.myvtex.com/rolex/watches/oyster-perpetual/" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Relojes Rolex Oyster Perpetual - GLAUSER"
                />
                <meta
                    property="og:description"
                    content="Descubra los relojes Rolex Oyster Perpetual en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra más en GLAUSER."
                />
                <meta
                    property="og:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-oyster-perpetual-m124300-0001-portrait.webp"
                />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://glauser.myvtex.com/rolex/watches/oyster-perpetual/" />
                <meta
                    name="twitter:title"
                    content="Relojes Rolex Oyster Perpetual - GLAUSER"
                />
                <meta
                    name="twitter:description"
                    content="Descubra los relojes Rolex Oyster Perpetual en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra más en GLAUSER."
                />
                <meta
                    name="twitter:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-oyster-perpetual-m124300-0001-portrait.webp"
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
                            pageFamilyName: "oyster-perpetual"
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
                                    "@id": "https://glauser.myvtex.com/rolex/watches/oyster-perpetual/#webpage",
                                    "url": "https://glauser.myvtex.com/rolex/watches/oyster-perpetual/",
                                    "name": "Relojes Rolex Oyster Perpetual - GLAUSER",
                                    "isPartOf": { "@id": "https://glauser.myvtex.com/#website" },
                                    "datePublished": "2025-04-01T05:23:53+00:00",
                                    "dateModified": "2025-04-01T05:23:53+00:00",
                                    "description":
                                        "Descubra los relojes Rolex Oyster Perpetual en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra más en GLAUSER.",
                                    "breadcrumb": {
                                        "@id": "https://glauser.myvtex.com/rolex/watches/oyster-perpetual/#breadcrumb"
                                    },
                                    "inLanguage": "es-Es",
                                    "potentialAction": {
                                        "@type": "ReadAction",
                                        "target": "https://glauser.myvtex.com/rolex/watches/oyster-perpetual/"
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
                                    "name": "Oyster Perpetual"
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
                                        <a className="active" href="https://glauser.myvtex.com/rolex/watches/oyster-perpetual">Oyster Perpetual</a>
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
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-oyster-perpetual-cover-m134300-0006-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/oyster-perpetual/rolex-oyster-perpetual-cover-m134300-0006-landscape.webp" loading="lazy" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw text-introduccion pb-90-60">
                            <div className="col-lg-2-5">
                                <h1 className="headline50 c-brown-text pb-20">Rolex Oyster Perpetual
                                    Un mundo de posibilidades</h1>
                            </div>
                            <div className="col-lg-8-5">
                                <p className="body-20-light"><strong>Los relojes de la gama Oyster Perpetual son símbolos de estilo clísico y universal, y ofrecen al que los lleva funciones ítiles del día a día: visualización de las horas, minutos y segundos.</strong> Respetando la línea de los orígenes pioneros de Rolex, estos modelos encarnan la forma y función atemporales. Son la expresión de los relojes en su forma más pura.</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw reloes-componet-2-3">
                            <div className="col-span3-1 col-md-span4-1 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/oyster-perpetual/m134300-0006/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m134300-0006-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m134300-0006-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Oyster Perpetual 41</p>
                                    <p className="legend-16-light">Oyster, 41 mm, acero Oystersteel</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-2 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/oyster-perpetual/m277200-0017/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m277200-0017-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m277200-0017-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Oyster Perpetual 31</p>
                                    <p className="legend-16-light">Oyster, 31 mm, acero Oystersteel</p>
                                </div>
                            </div>
                            <div className="col-span3-1 col-md-span4-3 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/oyster-perpetual/m276200-0001/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m276200-0001-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m276200-0001-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Oyster Perpetual 28</p>
                                    <p className="legend-16-light">Oyster, 28 mm, acero Oystersteel</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-1 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/oyster-perpetual/m126000-0013/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126000-0013-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126000-0013-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Oyster Perpetual 36</p>
                                    <p className="legend-16-light">Oyster, 36 mm, acero Oystersteel</p>
                                </div>
                            </div>
                            <div className="col-span3-1 col-md-span4-2 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/oyster-perpetual/m124200-0007/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m124200-0007-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m124200-0007-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Oyster Perpetual 34</p>
                                    <p className="legend-16-light">Oyster, 34 mm, acero Oystersteel</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-3 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/oyster-perpetual/m277200-0014/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m277200-0014-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m277200-0014-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Oyster Perpetual 31</p>
                                    <p className="legend-16-light">Oyster, 31 mm, acero Oystersteel</p>
                                </div>
                            </div>
                        </div>

                        <div id="masrelojescargados" className="row-grid-fullw reloes-componet-2-3 d-none-rlx pt-8" style={{ display: 'none' }}>
                            <div className="col-span3-1 col-md-span4-1 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/oyster-perpetual/m124200-0001/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m124200-0001-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m124200-0001-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Oyster Perpetual 34</p>
                                    <p className="legend-16-light">Oyster, 34 mm, acero Oystersteel</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-2 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/oyster-perpetual/m124200-0008/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m124200-0008-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m124200-0008-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Oyster Perpetual 34</p>
                                    <p className="legend-16-light">Oyster, 34 mm, acero Oystersteel</p>
                                </div>
                            </div>
                            <div className="col-span3-1 col-md-span4-3 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/oyster-perpetual/m124200-0010/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m124200-0010-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m124200-0010-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Oyster Perpetual 34</p>
                                    <p className="legend-16-light">Oyster, 34 mm, acero Oystersteel</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-1 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/oyster-perpetual/m124200-0011/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m124200-0011-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m124200-0011-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Oyster Perpetual 34</p>
                                    <p className="legend-16-light">Oyster, 34 mm, acero Oystersteel</p>
                                </div>
                            </div>
                            <div className="col-span3-1 col-md-span4-2 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/oyster-perpetual/m126000-0005/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126000-0005-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126000-0005-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Oyster Perpetual 36</p>
                                    <p className="legend-16-light">Oyster, 36 mm, acero Oystersteel</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-3 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/oyster-perpetual/m126000-0011/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126000-0011-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126000-0011-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Oyster Perpetual 36</p>
                                    <p className="legend-16-light">Oyster, 36 mm, acero Oystersteel</p>
                                </div>
                            </div>
                            <div className="col-span3-1 col-md-span4-1 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/oyster-perpetual/m126000-0015/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126000-0015-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126000-0015-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Oyster Perpetual 36</p>
                                    <p className="legend-16-light">Oyster, 36 mm, acero Oystersteel</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-2 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/oyster-perpetual/m134300-0008/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m134300-0008-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m134300-0008-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Oyster Perpetual 41</p>
                                    <p className="legend-16-light">Oyster, 41 mm, acero Oystersteel</p>
                                </div>
                            </div>
                            <div className="col-span3-1 col-md-span4-3 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/oyster-perpetual/m277200-0007/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m277200-0007-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m277200-0007-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Oyster Perpetual 31</p>
                                    <p className="legend-16-light">Oyster, 31 mm, acero Oystersteel</p>
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
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/SfNQWtCakDY" title="Rolex Oyster Perpetual" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="body-20-light pb-30">El Oyster Perpetual es el heredero directo del Oyster original, primer reloj de pulsera hermítico del mundo, sobre el que Rolex ha construido su reputaciín desde 1926. Certificado como Cronímetro Superlativo, el Oyster Perpetual posee todos los atributos fundamentales de la colecciín Oyster Perpetual: la precisión cronométrica, la hermeticidad de la caja Oyster y la cuerda automática del movimiento por rotor Perpetual. Sobrio y estático, se distingue por su estilo sencillo y universal.</p>
                                <p className="headline50 c-brown-text">El Oyster Perpetual es la expresión más pura del concepto Oyster.</p>
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
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/oyster-perpetual/rolex-oyster-perpetual-m126000-0012-m126000-0012-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/oyster-perpetual/rolex-oyster-perpetual-m126000-0012-m126000-0012-landscape.webp" loading="lazy" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">Dinímico y atemporal</p>
                                <p className="body-20-light pb-30">El Oyster Perpetual proporciona una fiable y precisa visualización de las horas, los minutos y los segundos. Las diferentes modalidades del reloj destacan por sus esferas en varios colores, sutiles o vibrantes: una gama de diferentes rostros que siempre hacen gala de un toque de modernidad. Desde beis, lavender o pistachio lacadas mate, hasta rosa candy, verde, azul turquesa, negra, lacada med blue o plateada con acabado tipo sol, estas esferas combinan con cualquier estilo. El Oyster Perpetual está disponible en cinco tamaños de caja: 28 mm, 31 mm, 34 mm, 36 mm o 41 mm. Ofrece la mayor elección de diímetros para una gama de relojes Rolex.</p>
                                <p className="body-20-light pb-30">Estos modelos están provistos de un brazalete Oyster de tres elementos, que garantiza seguridad y confort al usuario. Dicho brazalete está equipado con un cierre desplegable Oysterclasp y cuenta con el címodo sistema de extensiín rípida Easylink, desarrollado por la marca, que permite ajustar fícilmente su longitud en unos 5 mm.</p>
                                <p className="body-20-light">El Oyster Perpetual es exclusivamente de acero Oystersteel. Especialmente desarrollado para Rolex, pertenece a la familia de los aceros 904L, las aleaciones más utilizadas en la tecnología punta. El acero Oystersteel es extremadamente resistente a la corrosiín, ofrece un acabado excepcional tras el pulido y conserva su brillo con el paso del tiempo.</p>
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
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/oyster-perpetual/rolex-oyster-perpetual-m276200-0008-2501stojan-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/oyster-perpetual/rolex-oyster-perpetual-m276200-0008-2501stojan-landscape.webp" loading="lazy" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">Fiabilidad y precisión</p>
                                <p className="body-20-light">La caja del Oyster Perpetual garantiza una hermeticidad de hasta 100 metros de profundidad. Su carrura se trabaja a partir de un bloque macizo de acero Oystersteel. Su fondo, con un fino sistema de acanalado, está hermíticamente enroscado con ayuda de una herramienta especial; tan solo los relojeros autorizados por Rolex pueden acceder de este modo al movimiento. Otro componente principal de la estructura hermítica es la corona Twinlock, provista de un sistema de doble hermeticidad y se enrosca sílidamente a la caja.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/oyster-perpetual/rolex-oyster-perpetual-m276200-0008-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/oyster-perpetual/rolex-oyster-perpetual-m276200-0008-landscape.webp" loading="lazy" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center pb-90-60">
                                <p className="body-20-light">En función de su tamaño, el Oyster Perpetual está equipado con el calibre 2232 (para los modelos de 28 mm, 31 mm y 34 mm) o con el calibre 3230 (para los modelos de 36 mm y 41 mm), movimientos mecúnicos de cuerda automática completamente desarrollados y manufacturados por Rolex. Presentan un elevado rendimiento en tírminos de precisión, autonomía, comodidad de uso y fiabilidad.</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/oyster-perpetual/rolex-oyster-perpetual-m126000-0006-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/oyster-perpetual/rolex-oyster-perpetual-m126000-0006-landscape.webp" loading="lazy" />
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
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/oyster-perpetual/rolex-oyster-perpetual-greenseal-2301-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/oyster-perpetual/rolex-oyster-perpetual-greenseal-2301-landscape.webp" loading="lazy" />
                                    </picture>
                                </div>
                                <p className="headline50 c-brown-text pb-20">Certificaciín de Cronímetro Superlativo</p>
                                <p className="body-20-light">Como todos los relojes Rolex, los Oyster Perpetual cuentan con la certificación de Cronímetro Superlativo. Esta denominación atestigua que cada reloj que sale de los talleres de la marca ha superado con éxito una serie de pruebas llevadas a cabo por Rolex en sus laboratorios internos y con arreglo a sus propios criterios. El estatus de Cronímetro Superlativo se simboliza mediante el sello verde que incluyen todos los relojes Rolex y que va acompañado de una garantía internacional de cinco años.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <RlxExploreMasNModels />
                <Footer />
            </main>
        </>
    );
};

export default OysterP;

