import React from "react";
import { Helmet } from "react-helmet-async";
import useInitScripts from '../../hooks/useInitScripts';
import RlxExploreMasNModels from "../../parts/RlxExploreMas";
import NavM from "../../parts/NavModels";
import Footer from '../../parts/Footer';
import "../../../main-style.css";


const UsOpen: React.FC = () => {
    useInitScripts();
    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://glauser.myvtex.com/rolex/mundo-rolex/us-open/';
    const baseUrl = 'https://glauser.myvtex.com'; // La URL base 

    return (
        <>
            <Helmet>
                <title>ROLEX Y EL US OPEN - GLAUSER</title>
                <meta
                    name="description"
                    content="El US Open es el último torneo de la temporada del tenis. Como socio privilegiado del deporte a nivel internacional durante casi 50 años, Rolex es el Reloj Oficial del evento desde 2018."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://glauser.myvtex.com/files/style.min.css"
                />
                <link rel="stylesheet" type="text/css" href="https://glauser.vteximg.com.br/arquivos/style-rolex-general-glauser.css" />
                <link rel="stylesheet preload" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

                {/* URLs CANÓNICAS Y DE REDES SOCIALES */}
                <link rel="canonical" href={currentUrl} />

                {/* Facebook Meta Tags */}
                <meta property="og:url" content={currentUrl} />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="ROLEX Y EL US OPEN - GLAUSER"
                />
                <meta
                    property="og:description"
                    content="El US Open es el último torneo de la temporada del tenis. Como socio privilegiado del deporte a nivel internacional durante casi 50 años, Rolex es el Reloj Oficial del evento desde 2018."
                />
                <meta
                    property="og:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/us-open/rolex-tvc-posterframe-uso23jj-0907-landscape.webpp" // Asegúrate de que .webpp sea una extensión válida o corrige a .webp
                />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={currentUrl} />
                <meta
                    name="twitter:title"
                    content="ROLEX Y EL US OPEN - GLAUSER"
                />
                <meta
                    name="twitter:description"
                    content="El US Open es el último torneo de la temporada del tenis. Como socio privilegiado del deporte a nivel internacional durante casi 50 años, Rolex es el Reloj Oficial del evento desde 2018."
                />
                <meta
                    name="twitter:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/us-open/rolex-tvc-posterframe-uso23jj-0907-landscape.webpp" // Asegúrate de que .webpp sea una extensión válida o corrige a .webp
                />

                {/* Scripts JSON-LD y DataLayer */}
                <script type="text/javascript">
                    {`
                        var digitalDataLayer = {
                            environment: {
                                environmentVersion: "V7",
                                coBrandedVersion: "Bespoke",
                            },
                            page: {
                                pageType: "article page"
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
                                "sameAs": ["https://www.facebook.com/JoyeriaGlauser/", "https://www.instagram.com/joyeriaglauser/?hl=es-la"],
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
                                "name": "ROLEX Y EL US OPEN - GLAUSER",
                                "isPartOf": { "@id": `${baseUrl}/#website` },
                                "datePublished": "2024-08-19T05:23:53+00:00",
                                "dateModified": "2024-08-19T05:23:53+00:00",
                                "description": "El US Open es el último torneo de la temporada del tenis. Como socio privilegiado del deporte a nivel internacional durante casi 50 años, Rolex es el Reloj Oficial del evento desde 2018.",
                                "breadcrumb": { "@id": `${currentUrl}#breadcrumb` },
                                "inLanguage": "es-Es",
                                "potentialAction": { "@type": "ReadAction", "target": currentUrl }
                            }
                        ]
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [{
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Rolex GLAUSER",
                            "item": `${baseUrl}/rolex/`
                        }, {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Mundo Rolex",
                            "item": `${baseUrl}/rolex/mundo-rolex/`
                        }, {
                            "@type": "ListItem",
                            "position": 3,
                            "name": "Rolex y el US Open"
                        }]
                    })}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "http://schema.org",
                        "@type": "NewsArticle",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": currentUrl
                        },
                        "headline": "ROLEX Y EL US OPEN - GLAUSER",
                        "image": {
                            "@type": "ImageObject",
                            "url": "https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/us-open/rolex-uso23jj-0285-landscape.webp",
                            "height": "937",
                            "width": "1623"
                        },
                        "datePublished": "2024-08-19T05:23:53+00:00",
                        "dateModified": "2024-08-19T05:23:53+00:00",
                        "articleSection": "Mundo Rolex",
                        "author": {
                            "@type": "Organization",
                            "name": "GLAUSER",
                            "url": `${baseUrl}/`
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "GLAUSER",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://glauser.vteximg.com.br/arquivos/glauser_logo.svg",
                                "width": "300",
                                "height": "102"
                            }
                        },
                        "description": "El US Open es el último torneo de la temporada del tenis. Como socio privilegiado del deporte a nivel internacional durante casi 50 años, Rolex es el Reloj Oficial del evento desde 2018."
                    })}
                </script>

            </Helmet>
            <div className="header-component">
                <header className="main-header" id="main-header">
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
                            <NavM />
                        </div>

                        <div className="row-grid breadcrum-page" style={{ height: "40px" }}>
                            <div className="breadcrum-column">
                                <ul className="breadcrum-menu-list description">
                                    <li className="fixed-14">
                                        <a href="/rolex/">Rolex</a>
                                    </li>
                                    <li className="fixed-14">
                                        <a href="/rolex/mundo-rolex/">Mundo Rolex</a>
                                    </li>
                                    <li className="fixed-14 active  none-mobil">
                                        <a className="active" href="/rolex/mundo-rolex/us-open/">Rolex y el US Open</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <h1 className="headline50 c-brown-text pb-20">Rolex y el US Open</h1>
                                <p className="body-24-bold pb-30">
                                    El US Open es el último torneo de Grand Slam® de la temporada del
                                    tenis. Como socio privilegiado del deporte a nivel internacional
                                    durante casi 50 años, Rolex es el Reloj Oficial del evento desde
                                    2018.
                                </p>
                                <p className="body-20-light">Publicado el 19 de agosto de 2024</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-video py-90-60">
                            <div className="col-6-12">
                                <div className="banner-10 rlx-banner-100">
                                    <div className="ratio ratio-16x9">
                                        <iframe
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            frameBorder="0"
                                            height="315"
                                            src="https://www.youtube.com/embed/MW4gSWJKe28"
                                            title="Rolex y el US Open"
                                            width="560"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="body-20-light">
                                    Inaugurado en 1881, este torneo se juega sobre la superficie dura
                                    del USTA Billie Jean King National Tennis Center en Flushing
                                    Meadows, en Nueva York, desde 1978. Entre sus 17‎ pistas de
                                    competición se encuentra la pista estrella, el Arthur Ashe Stadium,
                                    con un aforo de cerca de 23 800 asientos, la más grande del mundo.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/us-open/rolex-uso23jb-4234-r-portrait.webp"
                                    />
                                    <img
                                        alt="Estadio Arthur Ashe"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/us-open/rolex-uso23jb-4234-r-landscape.webp"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content pt-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">Una fusión de energía</p>
                                <p className="body-20-light">
                                    El US Open es conocido por su atmósfera electrizante, un reflejo de
                                    la propia Nueva York, «la ciudad que nunca duerme». En este evento
                                    intenso y dinámico, la acción también se desarrolla en las gradas,
                                    donde los espectadores no temen dar voz a su emoción. Durante los
                                    partidos, la energía que emana de los aficionados, de la pista y de
                                    la ciudad converge para estimular a los jugadores.
                                </p>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center py-90-60">
                            <div className="col-6-10">
                                <div>
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/us-open/rolex-uso23jb-0755-uso23jb-4520-portrait.webp"
                                        />
                                        <img
                                            alt="Testimoniales femeninas"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/us-open/rolex-uso23jb-0755-uso23jb-4520-landscape.webp"
                                        />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <h2 className="headline50 c-brown-text pb-30">
                                    Los Testimoniales Rolex y el US Open
                                </h2>
                                <p className="body-20-light pb-20">
                                    En esta atmósfera electrizante, los partidos de este torneo de Grand
                                    Slam® se han convertido en legendarios. Los cinco títulos
                                    consecutivos que ganó Roger Federer desde 2004 hasta 2008 quedarán
                                    grabados por siempre en el recuerdo.
                                </p>
                                <p className="body-20-light pb-20">
                                    Entre sus otros Testimoniales de tenis, Rolex cuenta con un gran
                                    número de ganadores en el US Open, concretamente: Rod Laver, Chris
                                    Evert, Stefan Edberg, Pat Rafter, Justine Henin, Juan Martín del
                                    Potro, Angelique Kerber, Sloane Stephens, Bianca Andreescu y Dominic
                                    Thiem. En 2022, Iga Świątek y Carlos Alcaraz se unieron a esta
                                    impresionante lista, con Coco Gauff siguiendo sus pasos el año
                                    siguiente.
                                </p>
                                <p className="body-20-light">
                                    Todos encarnan la precisión técnica y la búsqueda de una mejor
                                    versión de uno mismo.
                                </p>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center py-90-60">
                            <div className="col-6-10">
                                <div>
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/us-open/rolex-gettyimages-94889550-uso22bs-1292-portrait.webp"
                                        />
                                        <img
                                            alt="Testimonial masculino "
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/us-open/rolex-gettyimages-94889550-uso22bs-1292-landscape.webp"
                                        />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div>
                                    <h2 className="headline50 c-brown-text pb-20">
                                        El torneo de los pioneros
                                    </h2>
                                    <p className="body-20-light">
                                        El US Open es un terreno fértil para la innovación en el tenis.
                                        Desde la introducción del desempate y la programación de los
                                        partidos por la noche hasta la implementación del ojo de halcón
                                        —un sistema de arbitraje digital que realiza las llamadas de línea
                                        de forma inmediata—, se hace todo lo posible para garantizar que
                                        el torneo siga siendo tan atractivo como siempre.
                                    </p>
                                </div>
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/us-open/rolex-gettyimages-514703586-r-portrait.webp"
                                        />
                                        <img
                                            alt="Rod Laver"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/us-open/rolex-gettyimages-514703586-r-landscape.webp"
                                        />
                                    </picture>
                                </div>
                                <div className="pb-90-60">
                                    <h2 className="headline50 c-brown-text pb-20">
                                        Rolex y el tenis: una colaboración de casi 50 años
                                    </h2>
                                    <p className="body-20-light">
                                        Desde que Rolex colaboró por primera vez con Wimbledon en 1978, la
                                        marca ha disfrutado de una relación privilegiada con el tenis,
                                        basada en una filosofía compartida: la búsqueda perpetua de la
                                        excelencia, la pasión por la precisión y la innovación, la
                                        elegancia del movimiento, un esfuerzo inquebrantable, el respeto
                                        por la tradición y una motivación por siempre sobrepasar los
                                        límites personales.
                                    </p>
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
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/us-open/rolex-uso23jj-3026-portrait.webp"
                                    />
                                    <img
                                        alt="Partido de tenis"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/us-open/rolex-uso23jj-3026-landscape.webp"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div>
                                    <p className="body-20-light pb-20">
                                        A lo largo de los años, Rolex se ha involucrado aún más con el
                                        deporte, convirtiéndose en el Patrocinador Premium del tenis
                                        mundial, tanto masculino como femenino.
                                    </p>
                                    <p className="body-20-light">
                                        La marca apoya la mayoría de las grandes competiciones, incluyendo
                                        los cuatro torneos de Grand Slam®, el ATP y el WTA Finals, que
                                        ponen fin a la temporada, todos los torneos ATP Masters 1000 y
                                        nueve de los eventos WTA 1000 de alto rango, así como las
                                        principales competiciones por equipos a nivel internacional; la
                                        Copa Davis y la Laver Cup.
                                    </p>
                                </div>
                                <div className="pt-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/us-open/rolex-uso21jj-2438-portrait.webp"
                                        />
                                        <img
                                            alt="Reloj Rolex"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/us-open/rolex-uso21jj-2438-landscape.webp"
                                        />
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw component-video">
                            <div className="col-6-12">
                                <a href="http://localhost:3000/rolex/watches/datejust/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-datejust-m126234-0051-portrait.webp"
                                        />
                                        <img
                                            alt="Colección Rolex Datejust"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-datejust-m126234-0051-landscape.webp"
                                        />
                                    </picture>
                                </a>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-2-col">
                            <div className="col-lg-2-6">
                                <div className="pt-10">
                                    <p className="fixed-16 c-brown-text">Rolex Datejust</p>
                                    <p className="headline36 c-brown-text">Una fecha para recordar</p>
                                    <a
                                        className="btn-label-icon-rlx"
                                        href="http://localhost:3000/rolex/watches/datejust/">
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
                <RlxExploreMasNModels />
                <Footer />
            </main>
        </>
    );
}

export default UsOpen;