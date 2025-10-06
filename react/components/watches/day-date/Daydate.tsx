import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useCssHandles } from 'vtex.css-handles';
import useInitScripts from '../../../components/hooks/useInitScripts';
import RlxExploreMasNModels from "../../../components/parts/RlxExploreMasNModels";

import NavM from "../../../components/parts/NavModels";
import Footer from "../../../components/parts/Footer";
import "../../../main-style.css";

const Daydate: React.FC = () => {
    useInitScripts();
    const [isVisible, setIsVisible] = useState<boolean>(false);
    return (
        <>
            <Helmet>
                <title>Relojes Rolex Day-Date - GLAUSER</title>
                <meta
                    name="description"
                    content="Descubra los relojes Rolex Day-Date en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra más en GLAUSER."
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

                <link rel="canonical" href="https://devjhernandez--glauser.myvtex.com/rolex/watches/day-date/" />

                {/* Facebook Meta Tags */}
                <meta property="og:url" content="https://devjhernandez--glauser.myvtex.com/rolex/watches/day-date/" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Relojes Rolex Day-Date - GLAUSER"
                />
                <meta
                    property="og:description"
                    content="Descubra los relojes Rolex Day-Date en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra más en GLAUSER."
                />
                <meta
                    property="og:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-day-date-m228235-0055-portrait"
                />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://devjhernandez--glauser.myvtex.com/rolex/watches/day-date/" />
                <meta
                    name="twitter:title"
                    content="Relojes Rolex Day-Date - GLAUSER"
                />
                <meta
                    name="twitter:description"
                    content="Descubra los relojes Rolex Day-Date en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra más en GLAUSER."
                />
                <meta
                    name="twitter:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-day-date-m228235-0055-portrait"
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
              pageFamilyName: "day-date"
            }
          };
        `}
                </script>

                {/* Schema.org JSON-LD for Organization & WebPage */}
                <script type="application/ld+json">
                    {JSON.stringify({
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
                                "@id": "https://devjhernandez--glauser.myvtex.com/rolex/watches/day-date/#webpage",
                                "url": "https://devjhernandez--glauser.myvtex.com/rolex/watches/day-date/",
                                "name": "Relojes Rolex Day-Date - GLAUSER",
                                "isPartOf": { "@id": "https://devjhernandez--glauser.myvtex.com/#website" },
                                "datePublished": "2025-04-01T05:23:53+00:00",
                                "dateModified": "2025-04-01T05:23:53+00:00",
                                "description":
                                    "Descubra los relojes Rolex Day-Date en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra más en GLAUSER.",
                                "breadcrumb": {
                                    "@id": "https://devjhernandez--glauser.myvtex.com/rolex/watches/day-date/#breadcrumb"
                                },
                                "inLanguage": "es-Es",
                                "potentialAction": {
                                    "@type": "ReadAction",
                                    "target": "https://devjhernandez--glauser.myvtex.com/rolex/watches/day-date/"
                                }
                            }
                        ]
                    })}
                </script>

                {/* Breadcrumb JSON-LD */}
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
                                "item": "https://devjhernandez--glauser.myvtex.com/rolex/watches/day-date/"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "Day-Date"
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
                                        <a href="https://devjhernandez--glauser.myvtex.com/rolex/coleccion-rolex/">
                                            Relojes Rolex
                                        </a>
                                    </li>
                                    <li className="fixed-14">
                                        <a href="https://devjhernandez--glauser.myvtex.com/rolex/coleccion-rolex/">Relojes Rolex</a>
                                    </li>
                                    <li className="fixed-14 none-mobil active">
                                        <a className="active" href="https://devjhernandez--glauser.myvtex.com/rolex/watches/day-date/">Day-Date</a>
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
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/day-date/rolex-day-date-cover-m228235-0055-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/day-date/rolex-day-date-cover-m228235-0055-landscape.webp" loading="lazy" alt="Day-Date" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw text-introduccion pb-90-60">
                            <div className="col-lg-2-5">
                                <h1 className="headline50 c-brown-text pb-20">Rolex Day-Date
                                    Logros ejemplares</h1>
                            </div>
                            <div className="col-lg-8-5">
                                <p className="body-20-light"><strong>Cuando llega la medianoche, el Oyster Perpetual Day‑Date crea un puente entre el pasado y el futuro, entre lo que se ha conseguido y lo que queda por vivir.</strong> Desde 1956 da testimonio de los grandes momentos de la historia en la muñeca de visionarios, virtuosos y pioneros. Aquellos que hacen de cada día una promesa para el futuro.</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw reloes-componet-2-3">
                            <div className="col-span3-1 col-md-span4-1 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/day-date/m228235-0055/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m228235-0055-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m228235-0055-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex Day-Date m228235-0055 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Day-Date 40</p>
                                    <p className="legend-16-light">Oyster, 40 mm, oro Everose</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-2 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/day-date/m228238-0069/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m228238-0069-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m228238-0069-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex Day-Date m228238-0069 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Day-Date 40</p>
                                    <p className="legend-16-light">Oyster, 40 mm, oro amarillo</p>
                                </div>
                            </div>
                            <div className="col-span3-1 col-md-span4-3 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/day-date/m128238-0045/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m128238-0045-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m128238-0045-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex Day-Date m128238-0045 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Day-Date 36</p>
                                    <p className="legend-16-light">Oyster, 36 mm, oro amarillo</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-1 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/day-date/m128236-0018/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m128236-0018-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m128236-0018-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex Day-Date m128236-0018 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Day-Date 36</p>
                                    <p className="legend-16-light">Oyster, 36 mm, platino</p>
                                </div>
                            </div>
                            <div className="col-span3-1 col-md-span4-2 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/day-date/m228236-0012/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m228236-0012-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m228236-0012-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex Day-Date m228236-0012 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Day-Date 40</p>
                                    <p className="legend-16-light">Oyster, 40 mm, platino</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-3 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/day-date/m128239-0005/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m128239-0005-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m128239-0005-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex Day-Date m128239-0005 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Day-Date 36</p>
                                    <p className="legend-16-light">Oyster, 36 mm, oro blanco</p>
                                </div>
                            </div>
                        </div>
                        <div id="masrelojescargados" className="row-grid-fullw reloes-componet-2-3 d-none-rlx pt-8" style={{ display: "none", }}>
                            <div className="col-span3-1 col-md-span4-1 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/day-date/m228239-0033/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m228239-0033-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m228239-0033-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex Day-Date m228239-0033 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Day-Date 40</p>
                                    <p className="legend-16-light">Oyster, 40 mm, oro blanco</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-2 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/day-date/m128395tbr-0032/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m128395tbr-0032-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m128395tbr-0032-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex Day-Date m128395tbr-0032 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Day-Date 36</p>
                                    <p className="legend-16-light">Oyster, 36 mm, oro Everose gold y diamantes</p>
                                </div>
                            </div>
                            <div className="col-span3-1 col-md-span4-3 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/day-date/m228348rbr-0002/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m228348rbr-0002-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m228348rbr-0002-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex Day-Date m228348rbr-0002 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Day-Date 40</p>
                                    <p className="legend-16-light">Oyster, 40 mm, oro amarillo y diamantes</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-1 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/day-date/m228238-0042/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m228238-0042-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m228238-0042-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex Day-Date m228238-0042 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Day-Date 40</p>
                                    <p className="legend-16-light">Oyster, 40 mm, oro amarillo</p>
                                </div>
                            </div>
                            <div className="col-span3-1 col-md-span4-2 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/day-date/m128399tbr-0029/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m128399tbr-0029-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m128399tbr-0029-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex Day-Date m128399tbr-0029 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Day-Date 36</p>
                                    <p className="legend-16-light">Oyster, 36 mm, oro blanco y diamantes</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-3 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/day-date/m128235-0009/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m128235-0009-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m128235-0009-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex Day-Date m128235-0009 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Day-Date 36</p>
                                    <p className="legend-16-light">Oyster, 36 mm, oro Everose</p>
                                </div>
                            </div>
                        </div>
                        {/*
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
                        */}
                        <div className="row-grid-fullw component-video py-90-60">
                            <div className="col-6-12">
                                <div className="banner-10 rlx-banner-100">
                                    <div className="ratio ratio-16x9">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/WIIDLPQNIMs" title="Rolex Day-Date" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">El Day‑Date es el reloj de un mundo global, multicultural y en constante cambio.</p>
                                <p className="body-20-light">Cuando ve la luz en 1956, el Day‑Date constituye una gran innovación al ser el primer reloj de pulsera con calendario que indica, como complemento de la fecha, el día de la semana con todas las letras en una ventana en forma de arco en la posición de las 12 h, una verdadera proeza técnica para la época. Fabricado exclusivamente en metal precioso —oro amarillo, blanco o Everose de 18 quilates o platino 950— junto con su emblemático brazalete President, sus múltiples esferas lo convierten en el lienzo perfecto para la expresión personal.</p>
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
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/day-date/rolex-day-date-m128345rbr-0068-m228238-0066-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/day-date/rolex-day-date-m128345rbr-0068-m228238-0066-landscape.webp" loading="lazy" alt="Day-Date" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">El Day‑Date habla el idioma de quien lo lleva</p>
                                <p className="body-20-light">Aunque los días sean iguales en cualquier parte del mundo, se escriben de manera diferente según el idioma. El Day‑Date expresa la identidad cultural de quien lo lleve usando la mayoría de los sistemas de escritura: latín, árabe, cirílico, hebreo, japonés, ideogramas chinos e incluso el alfasilabario ge’ez utilizado en el Cuerno de África. Disponible en 26 idiomas, es realmente un reloj internacional, universal y personal.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/day-date/rolex-day-date-m128348rbr-0049-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/day-date/rolex-day-date-m128348rbr-0049-landscape.webp" loading="lazy" alt="Day-Date" />
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
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/day-date/rolex-day-date-m228238-0042-movt3255-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/day-date/rolex-day-date-m228238-0042-movt3255-landscape.webp" loading="lazy" alt="Calibre 3255" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">El milagro de medianoche
                                    Un ideal de precisión</p>
                                <p className="body-20-light pb-30">Cuando llega la medianoche, la fecha y el día cambian de forma simultánea en sus respectivas ventanas de la esfera. Esta proeza relojera, el «milagro de medianoche», se basa en un mecanismo de discos. Es fruto de numerosos años de investigación: de 1950 a 1955 Rolex registró cuatro patentes de relojes dotados con visualización del día y de la fecha.</p>
                                <p className="body-20-light">En la actualidad, el Day‑Date está equipado con el calibre 3255, un movimiento completamente desarrollado y manufacturado por Rolex para garantizar un rendimiento superlativo.</p>
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
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/day-date/rolex-day-date-m228236-0012-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/day-date/rolex-day-date-m228236-0012-landscape.webp" loading="lazy" alt="El brazalete President" />
                                    </picture>
                                </div>
                                <p className="headline50 c-brown-text pb-20">El brazalete President</p>
                                <p className="body-20-light">Creado especialmente para el lanzamiento del prestigioso Oyster Perpetual Day‑Date y presentado en 1956, el brazalete President de tres elementos, fabricado exclusivamente en oro de 18 quilates o en platino 950, todavía hoy se reserva al Day‑Date, así como al Datejust en metal precioso.</p>
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
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/day-date/rolex-day-date-m128238-0045-m228238-0061-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/day-date/rolex-day-date-m128238-0045-m228238-0061-landscape.webp" loading="lazy" alt="Un preciado aliado" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">Un preciado aliado</p>
                                <p className="body-20-light pb-30">Personalidades políticas, líderes y visionarios de todo el mundo han lucido en sus muñecas a lo largo de la historia un Day‑Date, modelo reconocible de inmediato, fundamentalmente gracias a su emblemático brazalete President. Un nombre premonitorio que, sumado a la talla de las personalidades que lo han llevado, le ha valido al Day‑Date su apodo: el «reloj de los presidentes».</p>
                                <p className="body-20-light pb-30">Las décadas vienen y van, pero el Day‑Date permanece donde siempre ha estado: a la vanguardia de la modernidad. El Day‑Date, un reloj de prestigio y fruto del savoir‑faire relojero de Rolex, acompaña a quienes determinan nuestro mundo en sus respectivas disciplinas mediante su compromiso, cualidades humanas y genialidad creativa.</p>
                                <p className="body-20-light">Entre los Testimoniales Rolex asociados con el Day‑Date, la marca homenajea a la esquiadora estadounidense Lindsey Vonn, el tenista suizo Roger Federer, el cineasta estadounidense Martin Scorsese y los golfistas Arnold Palmer, Jack Nicklaus y Gary Player.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/day-date/rolex-day-date-10058-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/day-date/rolex-day-date-10058-landscape.webp" loading="lazy" alt="Day-Date" />
                                </picture>
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

export default Daydate;