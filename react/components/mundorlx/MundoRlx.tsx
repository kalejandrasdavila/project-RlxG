import React from "react";
import { Helmet } from "react-helmet-async";
import useInitScripts from '../hooks/useInitScripts';
import Nav from '../parts/Nav';
import RlxExploreMas from '../parts/RlxExploreMas';
import Footer from '../parts/Footer';

const MundoRolex: React.FC = () => {
    useInitScripts();
    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://www.glauser.com.co/rolex/mundo-rolex/';
    const baseUrl = 'https://www.glauser.com.co';

    return (

        <>
            <Helmet>
                <title>El mundo de Rolex - GLAUSER</title>
                <meta
                    name="description"
                    content="Explora el mundo de Rolex. Descubra ideas y artículos que muestran la esencia de Rolex y manténgase actualizado con las últimas noticias de Rolex | GLAUSER."
                />
                {/* VTEX IO: Evita dangerouslySetInnerHTML para meta tags específicos de VTEX. Utiliza bloques VTEX IO o componentes del render-runtime. */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* CSS: Se mantiene uno de los enlaces de Swiper, eliminando la redundancia. Considera gestionar CSS vía manifest.json. */}
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://www.glauser.com.co/files/style.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://glauser.vteximg.com.br/arquivos/style-rolex-general-glauser.css"
                />
                <link rel="stylesheet preload" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
                {/* <link rel="stylesheet preload" href="https://unpkg.com/swiper/swiper-bundle.min.css" /> (redundante) */}

                {/* SCRIPTS: ¡ELIMINADOS de aquí! Deben ser manejados por useInitScripts o la configuración de VTEX IO. */}
                {/* <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script> */}
                {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> */}
                {/* <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script> */}

                {/* URLs CANÓNICAS Y DE REDES SOCIALES: Usando la URL dinámica o de producción */}
                <link rel="canonical" href={currentUrl} />

                {/* Facebook Meta Tags */}
                <meta property="og:url" content={currentUrl} />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="El mundo de Rolex - GLAUSER"
                />
                <meta
                    property="og:description"
                    content="Explora el mundo de Rolex. Descubra ideas y artículos que muestran la esencia de Rolex y manténgase actualizado con las últimas noticias de Rolex | GLAUSER."
                />
                <meta
                    property="og:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-cover-portrait.webp"
                />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={currentUrl} />
                <meta
                    name="twitter:title"
                    content="El mundo de Rolex - GLAUSER"
                />
                <meta
                    name="twitter:description"
                    content="Explora el mundo de Rolex. Descubra ideas y artículos que muestran la esencia de Rolex y manténgase actualizado con las últimas noticias de Rolex | GLAUSER."
                />
                <meta
                    name="twitter:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-cover-portrait.webp"
                />

                {/* Scripts JSON-LD y DataLayer: Se mantienen, ya que son datos estructurados */}
                <script type="text/javascript">
                    {`
                        var digitalDataLayer = {
                            environment: {
                                environmentVersion: "V7",
                                coBrandedVersion: "Bespoke",
                            },
                            page: {
                                pageType: "article hub page"
                            },
                        };
                    `}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Organization",
                                "@id": `${baseUrl}/#organization`,
                                "name": "Joyería Glauser",
                                "url": `${baseUrl}/`,
                                "sameAs": [
                                    "https://www.facebook.com/JoyeriaGlauser/",
                                    "https://www.instagram.com/joyeriaglauser/?hl=es-la"
                                ],
                                "logo": {
                                    "@type": "ImageObject",
                                    "@id": `${baseUrl}/#logo`,
                                    "inLanguage": "es-CO",
                                    "url": "https://glauser.vteximg.com.br/arquivos/glauser_logo.svg",
                                    "contentUrl": "https://glauser.vteximg.com.br/arquivos/glauser_logo.svg",
                                    "width": 300,
                                    "height": 102,
                                    "caption": "Joyería Glauser"
                                },
                                "image": { "@id": `${baseUrl}/#logo` }
                            },
                            {
                                "@type": "WebPage",
                                "@id": `${currentUrl}#webpage`,
                                "url": currentUrl,
                                "name": "El mundo de Rolex - GLAUSER",
                                "isPartOf": { "@id": `${baseUrl}/#website` },
                                "datePublished": "2025-04-01T05:23:53+00:00",
                                "dateModified": "2025-04-01T05:23:53+00:00",
                                "description": "Explora el mundo de Rolex. Descubra ideas y artículos que muestran la esencia de Rolex y manténgase actualizado con las últimas noticias de Rolex | GLAUSER.",
                                "breadcrumb": { "@id": `${currentUrl}#breadcrumb` },
                                "inLanguage": "es-Es",
                                "potentialAction": {
                                    "@type": "ReadAction",
                                    "target": currentUrl
                                }
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
                                "item": `${baseUrl}/rolex/`
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Mundo Rolex"
                            }
                        ]
                    })}
                </script>

            </Helmet>
            <div className="header-component">
                {/* VTEX IO: No uses <VTEXTemplate> en JSX. Configúralos en blocks.jsonc o importa componentes React si los tienes custom. */}
                <header className="main-header" id="main-header">
                    {/* Contenido del header */}
                </header>
            </div>
            <main id="rlx-html">
                <header id="rlx-menu" className="rlx-menu">
                    <div className="rlx-container">
                        <div className="row-grid">
                            <div className="rlx-logo">
                                <a href="/rolex/" aria-label="Inicio" title="Inicio">
                                    <picture className="placa-rolex-logo">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/logo-plecas/Rolex-retailer-plaque-240x120_en.jpg"
                                        />
                                        <img
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/logo-plecas/Rolex-retailer-plaque-240x120_en.jpg"
                                            loading="lazy"
                                            alt="placa distribuidor oficial rolex"
                                        />
                                    </picture>
                                </a>
                            </div>
                            <Nav />
                        </div>

                        <div className="row-grid breadcrum-page" style={{ height: "40px" }}>
                            <div className="breadcrum-column">
                                <ul className="breadcrum-menu-list description">
                                    <li className="fixed-14">
                                        <a href="/rolex/">Rolex</a>
                                    </li>
                                    <li className="fixed-14 active">
                                        <a className="active" href="/rolex/mundo-rolex/">Mundo Rolex</a>
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
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-cover-wim23ac-portrait.webp"
                                    />
                                    <img
                                        alt="Wimbledon"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-cover-wim23ac-landscape.webp"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw text-introduccion pb-90-60">
                            <div className="col-lg-2-5">
                                <h1 className="headline50 c-brown-text pb-20">El mundo de Rolex</h1>
                            </div>
                            <div className="col-lg-8-5">
                                <p className="body-20-light">
                                    <strong>
                                        Durante casi un siglo, Rolex ha desarrollado colaboraciones con un
                                        grupo diverso y extraordinario de talentos de una miríada de
                                        disciplinas.
                                    </strong>{" "}
                                    La marca colabora con la exploración, los deportes de élite y las
                                    artes, así como con diversos eventos y organizaciones.
                                </p>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-video">
                            <div className="col-6-12">
                                <a href="/rolex/mundo-rolex/grand-slam-of-show-jumping/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-gsofsj-portrait-.webp"
                                        />
                                        <img
                                            alt="Rolex Grand Slam of Show Jumping"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-gsofsj-landscape.webp"
                                        />
                                    </picture>
                                </a>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-2-col pb-90-60">
                            <div className="col-lg-2-6 pb-50-0">
                                <div className="pt-10">
                                    <p className="fixed-16 c-brown-text">
                                        Publicado el 13 de marzo de 2025
                                    </p>
                                    <h2 className="headline36 c-brown-text">
                                        Rolex Grand Slam of Show Jumping
                                    </h2>
                                    <p className="body-20-light pb-30">
                                        Ampliamente considerado como el mayor desafío de la hípica, el
                                        Rolex Grand Slam of Show Jumping recompensa al jinete que gane el
                                        Grand Prix en tres de los cuatro «Majors» consecutivos de salto de
                                        obstáculos: The Dutch Masters de ’s‑Hertogenbosch, el CSIO Spruce
                                        Meadows ‘Masters’ de Calgary, el CHIO Aachen y el Concurso Hípico
                                        Internacional de Ginebra.{" "}
                                    </p>
                                    <a
                                        className="btn-label-icon-rlx"
                                        href="/rolex/mundo-rolex/grand-slam-of-show-jumping/">
                                        Más información
                                        <svg
                                            aria-hidden="true"
                                            fill="white"
                                            height="12"
                                            role="img"
                                            viewBox="0 0 15 15"
                                            width="12"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.7,7.5l-1.4,1.4l-5.7,5.7l-1.4-1.4l5.7-5.7L3.3,1.9l1.4-1.4l5.7,5.7l0,0L11.7,7.5z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-8-6 pb-45-40">
                                <a href="/rolex/mundo-rolex/filarmonica-viena/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-vpo-portrait.webp"
                                        />
                                        <img
                                            alt="US Open"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-vpo-box-landscape.webp"
                                        />
                                    </picture>
                                </a>
                                <div className="pt-10">
                                    <p className="fixed-16 c-brown-text">
                                        Publicado el 03 de diciembre de 2024
                                    </p>
                                    <h2 className="headline36 c-brown-text">
                                        Rolex y la Filarmónica de Viena
                                    </h2>
                                    <p className="body-20-light pb-30">
                                        Rolex es Patrocinador Exclusivo de la Filarmónica de Viena desde
                                        el año 2008 y, desde enero de 2009, Sponsor Exclusivo del
                                        Concierto de Año Nuevo.
                                    </p>
                                    <a
                                        className="btn-label-icon-rlx"
                                        href="/rolex/mundo-rolex/filarmonica-viena/">
                                        Más información
                                        <svg
                                            aria-hidden="true"
                                            fill="white"
                                            height="12"
                                            role="img"
                                            viewBox="0 0 15 15"
                                            width="12"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.7,7.5l-1.4,1.4l-5.7,5.7l-1.4-1.4l5.7-5.7L3.3,1.9l1.4-1.4l5.7,5.7l0,0L11.7,7.5z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-2-col">
                            <div className="col-lg-2-6 pb-45-40">
                                <a href="/rolex/mundo-rolex/sailgp/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-sailGP-m126333-0022-portrait-v2.webp"
                                        />
                                        <img
                                            alt="US Open"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-sailGP-m126333-0022-box-landscape-v2.webp"
                                        />
                                    </picture>
                                </a>
                                <div className="pt-10">
                                    <p className="fixed-16 c-brown-text">
                                        Publicado el 28 de noviembre de 2024
                                    </p>
                                    <h2 className="headline36 c-brown-text">
                                        Rolex SailGP Championship
                                    </h2>
                                    <p className="body-20-light pb-30">
                                        Rolex es Title Partner y Reloj Oficial exclusivo del Rolex SailGP
                                        Championship, un circuito de regatas en el que compiten algunas de
                                        las embarcaciones de vela más rápidas del mundo. Las regatas
                                        tienen lugar en los mares de todo el mundo, en catamaranes F50 con
                                        foils que parece que vuelan a través del agua.
                                    </p>
                                    <a
                                        className="btn-label-icon-rlx"
                                        href="/rolex/mundo-rolex/sailgp/">
                                        Más información
                                        <svg
                                            aria-hidden="true"
                                            fill="white"
                                            height="12"
                                            role="img"
                                            viewBox="0 0 15 15"
                                            width="12"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.7,7.5l-1.4,1.4l-5.7,5.7l-1.4-1.4l5.7-5.7L3.3,1.9l1.4-1.4l5.7,5.7l0,0L11.7,7.5z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-8-6 pb-45-40">
                                <a href="/rolex/mundo-rolex/us-open/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-us-open-portrait.webp"
                                        />
                                        <img
                                            alt="US Open"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-us-open-box-landscape.webp"
                                        />
                                    </picture>
                                </a>
                                <div className="pt-10">
                                    <p className="fixed-16 c-brown-text">
                                        Publicado el 19 de agosto de 2024
                                    </p>
                                    <h2 className="headline36 c-brown-text">US Open</h2>
                                    <p className="body-20-light pb-30">
                                        El US Open es el último torneo de Grand Slam® de la temporada del
                                        tenis. Como socio privilegiado del deporte a nivel internacional
                                        durante casi 50 años, Rolex es el Reloj Oficial del evento desde
                                        2018.
                                    </p>
                                    <a
                                        className="btn-label-icon-rlx"
                                        href="/rolex/mundo-rolex/us-open/">
                                        Más información
                                        <svg
                                            aria-hidden="true"
                                            fill="white"
                                            height="12"
                                            role="img"
                                            viewBox="0 0 15 15"
                                            width="12"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.7,7.5l-1.4,1.4l-5.7,5.7l-1.4-1.4l5.7-5.7L3.3,1.9l1.4-1.4l5.7,5.7l0,0L11.7,7.5z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-2-col">
                            <div className="col-lg-2-6 pb-45-40">
                                <a href="/rolex/mundo-rolex/the-open/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-the-open-portrait.webp"
                                        />
                                        <img
                                            alt="US Open"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-the-open-bpx-landscape.webp"
                                        />
                                    </picture>
                                </a>
                                <div className="pt-10">
                                    <p className="fixed-16 c-brown-text">
                                        Publicado el 11 de julio de 2024
                                    </p>
                                    <h2 className="headline36 c-brown-text">
                                        The Open: el «major» más antiguo del golf
                                    </h2>
                                    <p className="body-20-light pb-30">
                                        The Open, tradicionalmente celebrado en el Reino Unido durante la
                                        tercera semana de julio, es el cuarto y último major masculino del
                                        año. Asociado con esta competición desde 1981, Rolex es
                                        actualmente un socio privilegiado del mundo del golf.
                                    </p>
                                    <a
                                        className="btn-label-icon-rlx"
                                        href="/rolex/mundo-rolex/the-open/">
                                        Más información
                                        <svg
                                            aria-hidden="true"
                                            fill="white"
                                            height="12"
                                            role="img"
                                            viewBox="0 0 15 15"
                                            width="12"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.7,7.5l-1.4,1.4l-5.7,5.7l-1.4-1.4l5.7-5.7L3.3,1.9l1.4-1.4l5.7,5.7l0,0L11.7,7.5z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-8-6 pb-45-40">
                                <a href="/rolex/mundo-rolex/amundi-evian/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-evianc23ct-portrait.webp"
                                        />
                                        <img
                                            alt="The Amundi Evian Championship"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-evianc23ct-landscape.webp"
                                        />
                                    </picture>
                                </a>
                                <div className="pt-10">
                                    <p className="fixed-16 c-brown-text">
                                        Publicado el 4 de julio de 2024
                                    </p>
                                    <h2 className="headline36 c-brown-text">
                                        The Amundi Evian Championship
                                    </h2>
                                    <p className="body-20-light pb-30">
                                        Rolex es Socio y Reloj Oficial del único Major de golf que se
                                        celebra en Europa continental.
                                    </p>
                                    <a
                                        className="btn-label-icon-rlx"
                                        href="/rolex/mundo-rolex/amundi-evian/">
                                        Más información
                                        <svg
                                            aria-hidden="true"
                                            fill="white"
                                            height="12"
                                            role="img"
                                            viewBox="0 0 15 15"
                                            width="12"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.7,7.5l-1.4,1.4l-5.7,5.7l-1.4-1.4l5.7-5.7L3.3,1.9l1.4-1.4l5.7,5.7l0,0L11.7,7.5z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-2-col">
                            <div className="col-lg-2-6 pb-45-40">
                                <a href="/rolex/mundo-rolex/24-horas-de-le-mans/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-voyage-lemans23-portrait.webp"
                                        />
                                        <img
                                            alt="Le Mans"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-voyage-lemans23-landscape.webp"
                                        />
                                    </picture>
                                </a>
                                <div className="pt-10">
                                    <p className="fixed-16 c-brown-text">
                                        Publicado el 4 de junio de 2024
                                    </p>
                                    <h2 className="headline36 c-brown-text">Las 24 Horas de Le Mans</h2>
                                    <p className="body-20-light pb-30">
                                        La 92.
                                        <sup>a</sup> edición de las 24 Horas de Le Mans, carrera que
                                        celebra la resistencia y la excelencia del automovilismo, se
                                        celebra los días 15 y 16 de junio de 2024. Rolex es Reloj Oficial
                                        de este evento legendario desde 2001.
                                    </p>
                                    <a
                                        className="btn-label-icon-rlx"
                                        href="/rolex/mundo-rolex/24-horas-de-le-mans/">
                                        Más información
                                        <svg
                                            aria-hidden="true"
                                            fill="white"
                                            height="12"
                                            role="img"
                                            viewBox="0 0 15 15"
                                            width="12"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.7,7.5l-1.4,1.4l-5.7,5.7l-1.4-1.4l5.7-5.7L3.3,1.9l1.4-1.4l5.7,5.7l0,0L11.7,7.5z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-8-6 pb-45-40">
                                <a href="/rolex/mundo-rolex/viaje-al-corazon-del-universo-rolex/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-voyage-bg-portrait.webp"
                                        />
                                        <img
                                            alt="Viaje al corazón del universo Rolex"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-voyage-bg-box-landscape.webp"
                                        />
                                    </picture>
                                </a>
                                <div className="pt-10">
                                    <p className="fixed-16 c-brown-text">
                                        Publicado el 10 de abril de 2024
                                    </p>
                                    <h2 className="headline36 c-brown-text">
                                        Viaje al corazón del universo Rolex
                                    </h2>
                                    <p className="body-20-light pb-30">
                                        Hans Wilsdorf estaba íntimamente convencido de la capacidad del
                                        ser humano para innovar con la excelencia como objetivo. Casi 120
                                        años después de la creación de la marca, el espíritu del fundador
                                        está más presente que nunca, tanto en lo que afecta a la
                                        fabricación de relojes como a los compromisos de Rolex en todo el
                                        mundo.
                                    </p>
                                    <a
                                        className="btn-label-icon-rlx"
                                        href="/rolex/mundo-rolex/viaje-al-corazon-del-universo-rolex/">
                                        Más información
                                        <svg
                                            aria-hidden="true"
                                            fill="white"
                                            height="12"
                                            role="img"
                                            viewBox="0 0 15 15"
                                            width="12"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.7,7.5l-1.4,1.4l-5.7,5.7l-1.4-1.4l5.7-5.7L3.3,1.9l1.4-1.4l5.7,5.7l0,0L11.7,7.5z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <RlxExploreMas />
                <Footer />
            </main>
        </>
    );
};

export default MundoRolex;