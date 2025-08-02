import React, { useState } from "react";
import { useCssHandles } from 'vtex.css-handles';
import '../../../main-style.css';
import RlxExploreMasNModels from "../../parts/RlxExploreMasNModels";
import { Helmet } from "react-helmet-async";
import useInitScripts from '../../hooks/useInitScripts';

import NavM from "../../parts/NavModels";
import Footer from '../../parts/Footer';

const CSS_HANDLES = [
    'container', 'wrapper', 'content', 'section', 'title', 'subtitle',
    'image', 'text', 'button', 'link', 'grid', 'card', 'header', 'footer',
    'nav', 'menu', 'item', 'active', 'disabled', 'hidden', 'visible',
    'main', 'sidebar', 'overlay', 'modal', 'form', 'input', 'label',
    'pt_10', 'mb_20', 'mt_30', 'pb_15', 'ml_5', 'mr_10', 'pl_20', 'pr_15'
];

const handles = useCssHandles(CSS_HANDLES);


const LadyDate: React.FC = () => {
    useInitScripts();
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return (
        <>
            <Helmet>
                <title>Relojes Rolex Lady-Datejust - GLAUSER</title>
                <meta
                    name="description"
                    content="Descubra los relojes Rolex Lady-Datejust en l�nea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra m�s en GLAUSER."
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

                <link rel="canonical" href="https://devjhernandez--glauser.myvtex.com/rolex/watches/lady-datejust/" />

                {/* Facebook Meta Tags */}
                <meta property="og:url" content="https://devjhernandez--glauser.myvtex.com/rolex/watches/lady-datejust/" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Relojes Rolex Lady-Datejust - GLAUSER"
                />
                <meta
                    property="og:description"
                    content="Descubra los relojes Rolex Lady-Datejust en l�nea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra m�s en GLAUSER."
                />
                <meta
                    property="og:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-lady-datejust-m279135rbr-0001-portrait.webp"
                />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://devjhernandez--glauser.myvtex.com/rolex/watches/lady-datejust/" />
                <meta
                    name="twitter:title"
                    content="Relojes Rolex Lady-Datejust - GLAUSER"
                />
                <meta
                    name="twitter:description"
                    content="Descubra los relojes Rolex Lady-Datejust en l�nea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra m�s en GLAUSER."
                />
                <meta
                    name="twitter:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-lady-datejust-m279135rbr-0001-portrait.webp"
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
                                pageFamilyName: "lady-datejust"
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
                                "@id": "https://devjhernandez--glauser.myvtex.com/rolex/watches/lady-datejust/#webpage",
                                "url": "https://devjhernandez--glauser.myvtex.com/rolex/watches/lady-datejust/",
                                "name": "Relojes Rolex Lady-Datejust - GLAUSER",
                                "isPartOf": { "@id": "https://devjhernandez--glauser.myvtex.com/#website" },
                                "datePublished": "2025-04-01T05:23:53+00:00",
                                "dateModified": "2025-04-01T05:23:53+00:00",
                                "description": "Descubra los relojes Rolex Lady-Datejust en l�nea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra m�s en GLAUSER.",
                                "breadcrumb": { "@id": "https://devjhernandez--glauser.myvtex.com/rolex/watches/lady-datejust/#breadcrumb" },
                                "inLanguage": "es-Es",
                                "potentialAction": { "@type": "ReadAction", "target": "https://devjhernandez--glauser.myvtex.com/rolex/watches/lady-datejust/" }
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
                                "name": "Lady-Datejust"
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
                                        <a className="active" href="https://devjhernandez--glauser.myvtex.com/rolex/watches/lady-datejust//">Lady-datejust</a>
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
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/lady-datejust/rolex-lady-datejust-cover-m279135rbr-0001-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/lady-datejust/rolex-lady-datejust-cover-m279135rbr-0001-landscape.webp" loading="lazy" alt="Lady-Datejust" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw text-introduccion pb-90-60">
                            <div className="col-lg-2-5">
                                <h1 className="headline50 c-brown-text pb-20">Rolex Lady-Datejust
                                    Elegancia en femenino</h1>
                            </div>
                            <div className="col-lg-8-5">
                                <p className="body-20-light"><strong>�Un reloj cl�sico para mujer�. As� describen algunos a nuestro Oyster Perpetual Lady-Datejust. Y puede que tengan raz�n.</strong> Desde comienzos del siglo XX, Rolex ha dise�ado y fabricado relojes adecuados para todas las mu�ecas femeninas, con el mismo est�ndar de excelencia que todos los modelos que han forjado su leyenda. Si �cl�sico� significa buscar siempre llegar a lo m�s alto, si significa perpetuar las tradiciones al tiempo que combina elegancia con precisi�n, gracia con resistencia, belleza con rendimiento� Entonces el Lady-Datejust es un reloj cl�sico para mujer.</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw reloes-componet-2-3">
                            <div className="col-span3-1 col-md-span4-1 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/lady-datejust/m279135rbr-0001/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m279135rbr-0001-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m279135rbr-0001-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex Lady-Datejust m279135rbr-0001 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Lady-Datejust</p>
                                    <p className="legend-16-light">Oyster, 28 mm, oro Everose y diamantes</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-2 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/lady-datejust/m279384rbr-0004/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m279384rbr-0004-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m279384rbr-0004-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex Lady-Datejust m279384rbr-0004 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Lady-Datejust</p>
                                    <p className="legend-16-light">Oyster, 28 mm, acero Oystersteel, oro blanco y diamantes</p>
                                </div>
                            </div>
                            <div className="col-span3-1 col-md-span4-3 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/lady-datejust/m279174-0020/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m279174-0020-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m279174-0020-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex Lady-Datejust m279174-0020 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Lady-Datejust</p>
                                    <p className="legend-16-light">Oyster, 28 mm, acero Oystersteel y oro blanco</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-1 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/lady-datejust/m279383rbr-0003/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m279383rbr-0003-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m279383rbr-0003-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex Lady-Datejust m279383rbr-0003 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Lady-Datejust</p>
                                    <p className="legend-16-light">Oyster, 28 mm, acero Oystersteel, oro amarillo y diamantes</p>
                                </div>
                            </div>
                            <div className="col-span3-1 col-md-span4-2 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://devjhernandez--glauser.myvtex.com/rolex/watches/lady-datejust/m279173-0012/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m279173-0012-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m279173-0012-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex Lady-Datejust m279173-0012 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Lady-Datejust</p>
                                    <p className="legend-16-light">Oyster, 28 mm, acero Oystersteel y oro amarillo</p>
                                </div>
                            </div>
                        </div>
                        <div id="masrelojescargados" className="row-grid-fullw reloes-componet-2-3 d-none-rlx pt-8" style={{ display: "none", }}>
                        </div>
                        {/*
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center text-center pt-30-40">
                                <button id="rlx-more-watches"
                                    className="btn-primary-rlx"
                                    onClick={() => setIsVisible(!isVisible)}
                                >
                                    {isVisible ? "Mostrar menos" : "Descubra m�s"}
                                </button>
                            </div>
                        </div>
                        */}
                        <div className="row-grid-fullw component-video py-90-60">
                            <div className="col-6-12">
                                <div className="banner-10 rlx-banner-100">
                                    <div className="ratio ratio-16x9">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/UdGQYjhA_fU" title="Rolex Lady-Datejust" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">El reloj cl�sico femenino de Rolex por excelencia. Con su refinado �glamour�, estilo y prestaciones t�cnicas.</p>
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
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/lady-datejust/rolex-lady-datejust-m279135rbr-0020-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/lady-datejust/rolex-lady-datejust-m279135rbr-0020-landscape.webp" loading="lazy" alt="Lady-Datejust" />
                                    </picture>
                                </div>
                                <p className="headline50 c-brown-text pb-20">Una piedra angular en la historia de Rolex</p>
                                <p className="body-20-light">Las mujeres pioneras siempre han sido una piedra angular en la historia de Rolex. Desde los inicios de la marca, ellas han inspirado la creaci�n y el desarrollo de relojes especiales que apoyar�an su b�squeda del empoderamiento. El Lady-Datejust es una celebraci�n de aquellas que se atreven a marcar el camino. Representa la precisi�n al tiempo que combina elegancia cl�sica con prestaciones t�cnicas.</p>
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
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/lady-datejust/rolex-lady-datejust-1957-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/lady-datejust/rolex-lady-datejust-1957-landscape.webp" loading="lazy" alt="Lady-Datejust" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">Heredero del Datejust</p>
                                <p className="body-20-light">Presentado en 1957, el Lady-Datejust concentra todos los atributos del Datejust, reloj emblem�tico de Rolex que impuso su estilo y sus prestaciones t�cnicas desde su lanzamiento en 1945. La versi�n para mujeres de este cron�metro con calendario, el Lady-Datejust perpet�a la elegancia del Datejust en una caja m�s peque�a que se adapta a la perfecci�n a las mu�ecas finas.</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/lady-datejust/rolex-lady-datejust-m279173-0007-m279173_0011-28mm-ambiance-pose-diamants-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/lady-datejust/rolex-lady-datejust-m279173-0007-m279173_0011-28mm-ambiance-pose-diamants-landscape.webp" loading="lazy" alt="Lady-Datejust" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">Una amplia variedad de versiones</p>
                                <p className="body-20-light">Desde esferas con acabado tipo sol hasta engastadas de diamantes o esferas de n�car, el Lady-Datejust ofrece una amplia variedad de modalidades entre las que su portadora encontrar� siempre la que refleje su personalidad. Seg�n la modalidad, el Lady-Datejust se propone con bisel abombado, estriado o engastado de diamantes.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/lady-datejust/rolex-lady-datejust-m279175-0002-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/lady-datejust/rolex-lady-datejust-m279175-0002-landscape.webp" loading="lazy" alt="Lady-Datejust" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center pb-90-60">
                                <p className="headline50 c-brown-text pb-20">Materiales exclusivos</p>
                                <p className="body-20-light">El Lady-Datejust est� disponible en acero Oystersteel, oro amarillo, blanco o Everose de 18 quilates o en versi�n Rolesor que combina acero Oystersteel con una de las tres variedades de oro (blanco, amarillo y Everose).</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <div className="pb-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/lady-datejust/rolex-lady-datejust-m279160-0002-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/lady-datejust/rolex-lady-datejust-m279160-0002-landscape.webp" loading="lazy" alt="Caja Oyster de 28 mm" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div className="pb-90-60">
                                    <p className="headline50 c-brown-text pb-20">Caja Oyster de 28 mm</p>
                                    <p className="body-20-light">La caja Oyster de 28 mm del Lady-Datejust es una perfecta combinaci�n de proporciones, robustez y elegancia. Su distintiva carrura est� tallada en un bloque macizo de acero Oystersteel altamente resistente a la corrosi�n u oro de 18 quilates. Garantiza una hermeticidad de hasta 100 metros.</p>
                                </div>
                                <div className="pb-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/lady-datejust/rolex-lady-datejust-m279138rbr-0015-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/lady-datejust/rolex-lady-datejust-m279138rbr-0015-landscape.webp" loading="lazy" alt="Brazaletes emblem�ticos" />
                                    </picture>
                                </div>
                                <p className="headline50 c-brown-text pb-20">Brazaletes emblem�ticos</p>
                                <p className="body-20-light">El Lady-Datejust luce, en funci�n de la modalidad, un brazalete Oyster de tres elementos equipado con un cierre Oysterclasp, un brazalete Jubilee de cinco elementos �creado en 1945 especialmente para el Datejust� o un brazalete President de tres elementos.</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/lady-datejust/rolex-lady-datejust-calibre-2236-movt2236-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/lady-datejust/rolex-lady-datejust-calibre-2236-movt2236-landscape.webp" loading="lazy" alt="El calibre Perpetual 2236" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">El calibre Perpetual 2236</p>
                                <p className="body-20-light">El Lady-Datejust est� equipado con el calibre 2236, un movimiento mec�nico de cuerda autom�tica completamente desarrollado y manufacturado por Rolex. Su arquitectura le confiere una precisi�n y fiabilidad excepcionales. El calibre 2236 consta de la espiral Syloxi de silicio, patentada y manufacturada por Rolex. Resistente a los campos magn�ticos, la espiral Syloxi ofrece una gran estabilidad frente a las variaciones de temperatura. Su geometr�a patentada garantiza su regularidad en todas las posiciones.</p>
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
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/lady-datejust/rolex-lady-datejust-greenseal-2301-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/lady-datejust/rolex-lady-datejust-greenseal-2301-landscape.webp" loading="lazy" alt="Certificaci�n de Cron�metro Superlativo" />
                                    </picture>
                                </div>
                                <p className="headline50 c-brown-text pb-20">Certificaci�n de Cron�metro Superlativo</p>
                                <p className="body-20-light">Como todos los relojes Rolex, el Lady-Datejust cuenta con la certificaci�n de Cron�metro Superlativo. Esta denominaci�n atestigua que cada reloj que sale de los talleres de la marca ha superado con �xito una serie de pruebas llevadas a cabo por Rolex en sus laboratorios internos y con arreglo a sus propios criterios. El estatus de Cron�metro Superlativo se simboliza mediante el sello verde que incluyen todos los relojes Rolex y que va acompa�ado de una garant�a internacional de cinco a�os.</p>
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

export default LadyDate;