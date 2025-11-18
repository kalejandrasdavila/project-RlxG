import React from "react";
import { Helmet } from "react-helmet-async";
import useInitScripts from '../../hooks/useInitScripts';
import RlxExploreMasNModels from "../../parts/RlxExploreMas";
import NavM from "../../parts/NavModels";
import Footer from '../../parts/Footer';
import "../../../main-style.css";

const FilaViena: React.FC = () => {
    useInitScripts();

    const currentUrl = (typeof window !== 'undefined' && window.location) ? window.location.href : 'https://glauser.myvtex.com/rolex/mundo-rolex/filarmonica-viena/';
    const baseUrl = 'https://glauser.myvtex.com';

    return (
        <>
            <Helmet>
                <title>Rolex y la Filarmónica de Viena - GLAUSER</title>
                <meta
                    name="description"
                    content="Rolex es Patrocinador Exclusivo de la Filarmónica de Viena desde el año 2008 y, desde enero de 2009, Sponsor Exclusivo del Concierto de Año Nuevo."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* CSS: Se elimina la redundancia de Swiper. Considera gestionar CSS vía manifest.json. */}
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://glauser.myvtex.com/files/style.min.css"
                />
                <link rel="stylesheet" type="text/css" href="https://glauser.vteximg.com.br/arquivos/style-rolex-general-glauser.css" />
                <link rel="stylesheet preload" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
                {/* <link rel="stylesheet preload" href="https://unpkg.com/swiper/swiper-bundle.min.css" /> (Este es redundante) */}

                {/* SCRIPTS: ELIMINADOS de aquí. Deben ser manejados por useInitScripts o la configuración de VTEX IO. */}
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
                    content="Rolex y la Filarmónica de Viena - GLAUSER"
                />
                <meta
                    property="og:description"
                    content="Rolex es Patrocinador Exclusivo de la Filarmónica de Viena desde el año 2008 y, desde enero de 2009, Sponsor Exclusivo del Concierto de Año Nuevo."
                />
                <meta
                    property="og:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/filarmonica-viena/rolex-salz2208ra-017-landscape.webp"
                />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={currentUrl} />
                <meta
                    name="twitter:title"
                    content="Rolex y la Filarmónica de Viena - GLAUSER"
                />
                <meta
                    name="twitter:description"
                    content="Rolex es Patrocinador Exclusivo de la Filarmónica de Viena desde el año 2008 y, desde enero de 2009, Sponsor Exclusivo del Concierto de Año Nuevo."
                />
                <meta
                    name="twitter:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/filarmonica-viena/rolex-salz2208ra-017-landscape.webp"
                />

                {/* Scripts JSON-LD y DataLayer: Se mantienen */}
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
                                "name": "Rolex y la Filarmónica de Viena - GLAUSER",
                                "isPartOf": { "@id": `${baseUrl}/#website` },
                                "datePublished": "2024-12-03T05:23:53+00:00",
                                "dateModified": "2024-12-03T05:23:53+00:00",
                                "description": "Rolex es Patrocinador Exclusivo de la Filarmónica de Viena desde el año 2008 y, desde enero de 2009, Sponsor Exclusivo del Concierto de Año Nuevo.",
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
                            "name": "Rolex y la Filarmónica de Viena"
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
                        "headline": "Rolex y la Filarmónica de Viena - GLAUSER",
                        "image": {
                            "@type": "ImageObject",
                            "url": "https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/filarmonica-viena/rolex-salz2208ra-017-landscape.webp",
                            "height": "2880", // Verificar si estos son los valores correctos para landscape
                            "width": "1210"  // Verificar si estos son los valores correctos para landscape
                        },
                        "datePublished": "2024-12-03T05:23:53+00:00",
                        "dateModified": "2024-12-03T05:23:53+00:00",
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
                        "description": "Rolex es Patrocinador Exclusivo de la Filarmónica de Viena desde el año 2008 y, desde enero de 2009, Sponsor Exclusivo del Concierto de Año Nuevo."
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
                                <a href="https://glauser.myvtex.com/rolex/" aria-label="Inicio" title="Inicio">
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
                                        <a href="https://glauser.myvtex.com/rolex/">Rolex</a>
                                    </li>
                                    <li className="fixed-14">
                                        <a href="https://glauser.myvtex.com/rolex/mundo-rolex/">Mundo Rolex</a>
                                    </li>
                                    <li className="fixed-14 active none-mobil">
                                        <a className="active" href="https://glauser.myvtex.com/rolex/mundo-rolex/filarmonica-viena/">Rolex y la Filarmónica de Viena</a>
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
                                <h1 className="headline50 c-brown-text pb-20">
                                    Rolex y la Filarmónica de Viena
                                </h1>
                                <p className="body-24-bold pb-30">
                                    Rolex es Patrocinador Exclusivo de la Filarmónica de Viena desde el
                                    año 2008 y, desde enero de 2009, Sponsor Exclusivo del Concierto de
                                    Año Nuevo.
                                </p>
                                <p className="body-20-light">Publicado el 03 de diciembre de 2024</p>
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
                                            src="https://www.youtube.com/watch?v=rna-JCkha6c" // URL de embed de YouTube
                                            title="Rolex y la Filarmónica de Viena"
                                            width="560"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="body-20-light">
                                    Fundada en 1842, la Filarmónica de Viena es, sin duda alguna, una de
                                    las orquestas más prestigiosas del mundo. Los estándares rigurosos y
                                    la integridad artística son los principios rectores de esta
                                    respetada institución, que lleva haciendo perdurar las más altas
                                    tradiciones en música clásica desde hace más de 180 años.
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/filarmonica-viena/rolex-salz2208ra-017-portrait.webp"
                                    />
                                    <img
                                        alt="orchesta filarmonica de Viena"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/filarmonica-viena/rolex-salz2208ra-017-landscape.webp"
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
                                <p className="headline50 c-brown-text pb-20">Amanece un nuevo día</p>
                                <p className="body-20-light">
                                    El Concierto anual de Año Nuevo de la Filarmónica de Viena es un
                                    evento excepcional que se lleva celebrando desde hace más de 80 años
                                    y que tradicionalmente transcurre durante la mañana del 1 de enero.
                                    El director invitado del concierto de 2025 es el gran Riccardo Muti,
                                    que dirige a la orquesta por séptima vez. Este evento mundial
                                    celebra la música de Johann Strauss, su familia y contemporáneos.
                                    Cada año millones de personas en más de 90 países disfrutan de la
                                    música, que se retransmite en directo desde la Musikverein de Viena.
                                </p>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center py-90-60">
                                <div className="pb-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/filarmonica-viena/rolex-wpo24dn-007-portrait.webp"
                                        />
                                        <img
                                            alt="filarmonica rolex"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/filarmonica-viena/rolex-wpo24dn-007-landscape.webp"
                                        />
                                    </picture>
                                </div>
                                <div className="pb-90-60 quote">
                                    <p className="quote50 c-black-text pb-20">
                                        «Todos los elogios que dediquemos a la Filarmónica de Viena se
                                        quedan cortos».
                                    </p>
                                    <p className="body-20-light c-black-text pb-20">Richard Strauss</p>
                                </div>
                                <div>
                                    <p className="headline50 c-brown-text pb-20">
                                        El sonido de una noche de verano
                                    </p>
                                    <p className="body-20-light">
                                        La Filarmónica de Viena también ofrece al público el esperado
                                        Concierto de una Noche de Verano. Cada año, en mayo o junio, hasta
                                        50 000 personas se reúnen en el Palacio y los Jardines de
                                        Schönbrunn, en el corazón de la capital austriaca, para un
                                        espectáculo al aire libre. Presentado en más de 80 países, el
                                        evento ha sido presentado por Rolex desde 2009. Refleja un
                                        compromiso compartido para hacer que la música clásica sea
                                        accesible para todos.
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/filarmonica-viena/rolex-concert-0706-js-004-portrait.webp"
                                    />
                                    <img
                                        alt="Night concert"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/filarmonica-viena/rolex-concert-0706-js-004-landscape.webp"
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
                                <p className="headline50 c-brown-text pb-20">
                                    Un programa internacional
                                </p>
                                <p className="body-20-light pb-30">
                                    La Filarmónica de Viena actúa a menudo para el público en las salas
                                    de conciertos más prestigiosas del mundo.
                                </p>
                                <p className="body-20-light pb-30">
                                    Conciertos presentados por Rolex en 2025:
                                </p>
                                <p className="body-20-light">
                                    • El 25 de febrero tendrá lugar un concierto en el Teatro alla Scala
                                    de Milán.
                                </p>
                                <p className="body-20-light">
                                    • El 11 de mayo, la Ópera de París, la Filarmónica de Viena y Rolex
                                    se asociarán para un concierto de gala en el 150.° aniversario del
                                    Palais Garnier. Yannick Nézet‑Séguin actuará con otros Testimoniales
                                    Rolex —Juan Diego Flórez , Sir Bryn Terfel , Rolando Villazón , Yuja
                                    Wang y Sonya Yoncheva— uniéndose a la Filarmónica en el escenario
                                    para un espectáculo único. Los fondos recaudados se destinarán a la
                                    orquesta lírica juvenil de la Ópera de París (ADO – Apprentissage de
                                    l’Orchestre).
                                </p>
                                <p className="body-20-light">
                                    • La Noche Rolex en Seúl tendrá lugar el 20 de noviembre de 2025 en
                                    el Centro de Artes de Seúl.
                                </p>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/filarmonica-viena/rolex-op-garnier-syoncheva-portrait.webp"
                                        />
                                        <img
                                            alt="Opera"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/filarmonica-viena/rolex-op-garnier-syoncheva-landscape.webp"
                                        />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center pb-90-60">
                                <h2 className="headline50 c-brown-text pb-20">
                                    Rolex, colaboraciones con la música
                                </h2>
                                <p className="body-20-light">
                                    La música es un lenguaje universal que traspasa fronteras y
                                    culturas. Rolex celebra la excelencia en la música a través de sus
                                    colaboraciones con prestigiosas instituciones, entre ellas cuatro de
                                    las principales óperas del mundo (Londres, Milán, Nueva York y
                                    París), así como con dos joyas de la música clásica: el Festival de
                                    Salzburgo y la Filarmónica de Viena. Rolex contribuye a mantener la
                                    música viva en todo el mundo a través de su apoyo a cantantes,
                                    directores y músicos virtuosos que, a su vez, inspiran a nuevas
                                    generaciones de artistas a alcanzar grandes logros.
                                </p>
                                <div className="pt-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/filarmonica-viena/rolex-salz2208ra-086-portrait.webp"
                                        />
                                        <img
                                            alt="Partnership in music"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/filarmonica-viena/rolex-salz2208ra-086-landscape.webp"
                                        />
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content pb-90-60">
                        <div className="row-grid-fullw component-video">
                            <div className="col-6-12">
                                <a href="http://localhost:3000/rolex/watches/day-date/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-day-date-m228235-0055-portrait.webp"
                                        />
                                        <img
                                            alt="Colección Rolex Day-Date"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-day-date-m228235-0055-landscape.webp"
                                        />
                                    </picture>
                                </a>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-2-col">
                            <div className="col-lg-2-6">
                                <div className="pt-10">
                                    <p className="fixed-16 c-brown-text">Rolex Day-Date</p>
                                    <p className="headline36 c-brown-text">Logros ejemplares</p>
                                    <a
                                        className="btn-label-icon-rlx"
                                        href="http://localhost:3000/rolex/watches/day-date/">
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

export default FilaViena;