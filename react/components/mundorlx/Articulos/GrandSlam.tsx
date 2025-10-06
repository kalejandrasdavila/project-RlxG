import React from "react";
import { Helmet } from "react-helmet-async";
import useInitScripts from '../../hooks/useInitScripts';
import RlxExploreMasNModels from "../../parts/RlxExploreMas";
import NavM from "../../parts/NavModels";
import Footer from '../../parts/Footer';
import "../../../main-style.css";

const Grandslam: React.FC = () => {
    useInitScripts();

    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://devjhernandez--glauser.myvtex.com/rolex/mundo-rolex/grand-slam-of-show-jumping/';
    const baseUrl = 'https://devjhernandez--glauser.myvtex.com';

    return (
        <>
            <Helmet>
                <title>Rolex Grand Slam of Show Jumping - GLAUSER</title>
                <meta
                    name="description"
                    content="Ampliamente considerado como el mayor desafío de la hípica, el Rolex Grand Slam of Show Jumping recompensa al jinete que gane tres Majors consecutivos"
                />
                {/* VTEX IO: Evita dangerouslySetInnerHTML para meta tags específicos de VTEX. */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* CSS: Se elimina la redundancia de Swiper. Considera gestionar CSS vía manifest.json. */}
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://devjhernandez--glauser.myvtex.com/files/style.min.css"
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
                    content="Rolex Grand Slam of Show Jumping - GLAUSER"
                />
                <meta
                    property="og:description"
                    content="Ampliamente considerado como el mayor desafío de la hípica, el Rolex Grand Slam of Show Jumping recompensa al jinete que gane tres Majors consecutivos"
                />
                <meta
                    property="og:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/grand-slam/rolex-grand-slam-of-show-jumping-equestrianism-landscape.webp"
                />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={currentUrl} />
                <meta
                    name="twitter:title"
                    content="Rolex Grand Slam of Show Jumping - GLAUSER"
                />
                <meta
                    name="twitter:description"
                    content="Ampliamente considerado como el mayor desafío de la hípica, el Rolex Grand Slam of Show Jumping recompensa al jinete que gane tres Majors consecutivos"
                />
                <meta
                    name="twitter:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/grand-slam/rolex-grand-slam-of-show-jumping-equestrianism-landscape.webp"
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
                                "name": "Rolex Grand Slam of Show Jumping - GLAUSER",
                                "isPartOf": { "@id": `${baseUrl}/#website` },
                                "datePublished": "2025-04-01T05:23:53+00:00",
                                "dateModified": "2025-04-01T05:23:53+00:00",
                                "description": "Ampliamente considerado como el mayor desafío de la hípica, el Rolex Grand Slam of Show Jumping recompensa al jinete que gane tres Majors consecutivos",
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
                            "name": "Viaje al corazón del universo Rolex" // Este nombre en el BreadcrumbList del Schema.org no coincide con el título del artículo actual
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
                        "headline": "Rolex Grand Slam of Show Jumping - GLAUSER",
                        "image": {
                            "@type": "ImageObject",
                            "url": "https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/grand-slam/rolex-grand-slam-of-show-jumping-equestrianism-landscape.webp",
                            "height": "2880", // Verificar si estos son los valores correctos para landscape
                            "width": "1210"  // Verificar si estos son los valores correctos para landscape
                        },
                        "datePublished": "2025-04-01T05:23:53+00:00",
                        "dateModified": "2025-04-01T05:23:53+00:00",
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
                        "description": "Ampliamente considerado como el mayor desafío de la hípica, el Rolex Grand Slam of Show Jumping recompensa al jinete que gane tres Majors consecutivos"
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
                                    <li className="fixed-14 active none-mobil">
                                        <a className="active" href="/rolex/mundo-rolex/grand-slam-of-show-jumping/">Rolex Grand Slam of Show Jumping</a>
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
                                    Rolex Grand Slam of Show Jumping
                                </h1>
                                <p className="body-24-bold pb-30">
                                    Ampliamente considerado como el mayor desafío de la hípica, el Rolex
                                    Grand Slam of Show Jumping recompensa al jinete que gane el Grand
                                    Prix en tres de los cuatro «Majors» consecutivos de salto de
                                    obstáculos: The Dutch Masters de ’s‑Hertogenbosch, el CSIO Spruce
                                    Meadows ‘Masters’ de Calgary, el CHIO Aachen y el Concurso Hípico
                                    Internacional de Ginebra.
                                </p>
                                <p className="body-20-light">Publicado el 13 de marzo de 2025</p>
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
                                            src="https://www.youtube.com/embed/7" // URL de embed de YouTube
                                            title="Rolex Grand Slam of Show Jumping"
                                            width="560"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="body-20-light pb-30">
                                    Hasta la fecha, el escocés Scott Brash ha sido el único que ha
                                    logrado tal hazaña, en 2014 y en 2015.
                                </p>
                                <p className="body-20-light">
                                    Presentado en 2013, el Rolex Grand Slam of Show Jumping se componía
                                    inicialmente de los Majors de Aquisgrán, Calgary y Ginebra. En 2018,
                                    The Dutch Masters se unió a este Grand Slam, que ahora consiste en
                                    dos competiciones al aire libre, el CHIO Aachen y el CSIO Spruce
                                    Meadows ‘Masters’, y dos en recintos interiores, el CHI de Ginebra y
                                    el Dutch Masters.
                                </p>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto py-90-60">
                            <div className="col-text-center">
                                <div className="quote">
                                    <p className="quote50 c-black-text pb-20">
                                        Las colaboraciones de Rolex con la hípica prosperan en la cumbre
                                        del deporte, con eventos y jinetes de primera clase, así como
                                        entre bastidores.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">The Dutch Masters</p>
                                <p className="body-20-light">
                                    Celebrado por primera vez en 1967 en la ciudad medieval de
                                    ’s‑Hertogenbosch, The Dutch Masters atrae a los mejores competidores
                                    del mundo. El evento, que combina el majestuoso salto ecuestre y la
                                    doma clásica, se considera la principal competición ecuestre de
                                    interior de Países Bajos. Rolex es Sponsor Principal y Sponsor
                                    Oficial del Grand Prix de The Dutch Masters desde el año 2014. La
                                    edición de 2024 se celebrará del 7 al 10 de marzo y culminará el
                                    domingo con el Grand Prix Rolex, el primer Major del año, que cuenta
                                    para el Rolex Grand Slam of Show Jumping. El Testimonial Daniel
                                    Deusser ha triunfado en este evento dos veces, en 2015 y en 2022.
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos//grand-slam/the-grand-slam-of-show-jumping-the-dust-master-portrait.webp"
                                    />
                                    <img
                                        alt="The Dutch Masters"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/grand-slam/the-grand-slam-of-show-jumping-the-dust-master-landscape.webp"
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
                                <p className="headline50 c-brown-text pb-20">
                                    El festival ecuestre mundial CHIO Aachen
                                </p>
                                <p className="body-20-light">
                                    El CHIO Aachen es un certamen magnético donde tanto los competidores
                                    como los espectadores disfrutan de la electrizante atmósfera en el
                                    venerado recinto de Aachen Soers. Desde el salto de obstáculos, la
                                    doma clásica y el concurso completo hasta el potro y el cuatro bajo
                                    mano, la élite del talento ecuestre mundial se reúne al comienzo del
                                    verano boreal para ofrecer a los espectadores una experiencia única.
                                    Aachen, con quien Rolex ha colaborado durante más de 20 años, es
                                    sinónimo de tradición y excelencia.
                                </p>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/grand-slam/rolex-the-grand-slam-of-show-jumping-the-chio-aachen-portrait.webp"
                                        />
                                        <img
                                            alt="CHIO Aachen"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/grand-slam/rolex-the-grand-slam-of-show-jumping-chio-aachen-landscape.webp"
                                        />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">
                                    CSIO Spruce Meadows 'Masters'
                                </p>
                                <p className="body-20-light">
                                    Celebrado en Calgary, Canadá, el marco espectacular del CSIO Spruce
                                    Meadows 'Masters' combina con los desafíos que plantea la
                                    configuración de la pista para los mejores caballos y jinetes del
                                    mundo que compiten allí. Rolex es el Patrocinador Oficial de este
                                    evento, considerado por muchos entusiastas como la reunión ecuestre
                                    más importante de Norteamérica, y el Presenting Sponsor del CPKC
                                    'International' Grand Prix, que cuenta para el Rolex Grand Slam of
                                    Show Jumping.
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/grand-slam/rolex-the-grand-slam-of-show-jumping-csio-portrait.webp"
                                    />
                                    <img
                                        alt="CSIO Spruce Meadows ‘Masters’ "
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/grand-slam/rolex-the-grand-slam-of-show-jumping-csio-landscape.webp"
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
                                <p className="headline50 c-brown-text pb-20">El CHI de Ginebra</p>
                                <p className="body-20-light">
                                    Rolex es Presenting Sponsor del CHI de Ginebra, una de las más
                                    prestigiosas competiciones ecuestres del mundo, desde hace casi 30
                                    años. El evento reúne a una extraordinaria palestra de jinetes de
                                    élite en el recinto ecuestre interior más grande del mundo, situada
                                    en la segunda ciudad más poblada de Suiza. Conocido también como el
                                    Concurso Hípico Internacional de Ginebra, celebrará su centenario en
                                    2026. Los destacados de la competición incluyen el Grand Prix Rolex
                                    y la Final Top 10 Rolex International Jumping Riders Club (IJRC).
                                </p>
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/grand-slam/rolex-the-grand-slam-of-show-jumping-chi-geneva-portrait.webp"
                                        />
                                        <img
                                            alt="El Concurso Hípico Internacional de Ginebra"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/grand-slam/rolex-the-grand-slam-of-show-jumping-chi-landscape.webp"
                                        />
                                    </picture>
                                </div>
                                <p className="headline50 c-brown-text pb-20">
                                    Rolex y la hípica Existir al unísono
                                </p>
                                <p className="body-20-light">
                                    Generar confianza, no romper jamás el profundo pacto que une al
                                    jinete con su caballo. Afrontar todos los obstáculos, montar con
                                    precisión y aspirar a la excelencia, juntos como uno solo. El
                                    espíritu del deporte ha definido los fuertes vínculos entre Rolex y
                                    la hípica. Al colaborar con las competiciones más prestigiosas,
                                    Rolex apoya a los jinetes que escriben continuamente la historia de
                                    la disciplina.
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/grand-slam/rolex-the-grand-slam-of-show-jumping-bottom-banner-portrait.webp"
                                    />
                                    <img
                                        alt="Rolex y la hípica"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/grand-slam/rolex-the-grand-slam-of-show-jumping-bottom-banner-landscape.webp"
                                    />
                                </picture>
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

export default Grandslam;