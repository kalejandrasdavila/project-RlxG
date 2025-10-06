import React from "react";
import { Helmet } from "react-helmet-async";
import useInitScripts from '../../hooks/useInitScripts';
import RlxExploreMasNModels from "../../parts/RlxExploreMas";
import NavM from "../../parts/NavModels";
import Footer from '../../parts/Footer';
import "../../../main-style.css";

const HorasMans: React.FC = () => {
    useInitScripts();

    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://devjhernandez--glauser.myvtex.com/rolex/mundo-rolex/24-horas-de-le-mans/';
    const baseUrl = 'https://devjhernandez--glauser.myvtex.com'; // La URL base 

    return (
        <>
            <Helmet>
                <title>LAS 24 HORAS DE LE MANS - GLAUSER</title>
                <meta
                    name="description"
                    content="La 92 edición de las 24 Horas de Le Mans, carrera que celebra la resistencia y la excelencia del automovilismo, se celebra los días 15 y 16 de junio de 2024"
                />
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

                <link rel="canonical" href={currentUrl} />

                {/* Facebook Meta Tags */}
                <meta property="og:url" content={currentUrl} />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="LAS 24 HORAS DE LE MANS - GLAUSER"
                />
                <meta
                    property="og:description"
                    content="La 92 edición de las 24 Horas de Le Mans, carrera que celebra la resistencia y la excelencia del automovilismo, se celebra los días 15 y 16 de junio de 2024"
                />
                <meta
                    property="og:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/24-horas-le-mans/posterframe-lemans_desktop.webp"
                />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={currentUrl} />
                <meta
                    name="twitter:title"
                    content="LAS 24 HORAS DE LE MANS - GLAUSER"
                />
                <meta
                    name="twitter:description"
                    content="La 92 edición de las 24 Horas de Le Mans, carrera que celebra la resistencia y la excelencia del automovilismo, se celebra los días 15 y 16 de junio de 2024"
                />
                <meta
                    name="twitter:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/24-horas-le-mans/posterframe-lemans_desktop.webp"
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
                                "name": "LAS 24 HORAS DE LE MANS - GLAUSER",
                                "isPartOf": { "@id": `${baseUrl}/#website` },
                                "datePublished": "2024-06-04T05:23:53+00:00",
                                "dateModified": "2024-06-04T05:23:53+00:00",
                                "description": "La 92 edición de las 24 Horas de Le Mans, carrera que celebra la resistencia y la excelencia del automovilismo, se celebra los días 15 y 16 de junio de 2024",
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
                            "name": "Las 24 Horas de Le Mans"
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
                        "headline": "LAS 24 HORAS DE LE MANS - GLAUSER",
                        "image": {
                            "@type": "ImageObject",
                            "url": "https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/24-horas-le-mans/posterframe-lemans_desktop.webp",
                            "height": "938",
                            "width": "1623"
                        },
                        "datePublished": "2024-06-04T05:23:53+00:00",
                        "dateModified": "2024-06-04T05:23:53+00:00",
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
                        "description": "La 92 edición de las 24 Horas de Le Mans, carrera que celebra la resistencia y la excelencia del automovilismo, se celebra los días 15 y 16 de junio de 2024"
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
                                        <a className="active" href="/rolex/mundo-rolex/24-horas-de-le-mans/">Las 24 Horas de Le Mans</a>
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
                                    Las 24 Horas de Le Mans
                                </h1>
                                <p className="body-24-bold pb-30">
                                    La 92.a edición de las 24 Horas de Le Mans, carrera que celebra la
                                    resistencia y la excelencia del automovilismo, se celebra los días
                                    15 y 16 de junio de 2024. Rolex es Reloj Oficial de este evento
                                    legendario desde ‏2001.
                                </p>
                                <p className="body-20-light">Publicado el 04 de junio de 2024</p>
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
                                            src="https://www.youtube.com/watch?v=IC_DTbJM3cM" // URL de embed de YouTube
                                            title="Las 24 Horas de Le Mans"
                                            width="560"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">
                                    Una larga y orgullosa historia de carreras épicas
                                </p>
                                <p className="body-20-light">
                                    Creada en 1923, la carrera 24 Horas de Le Mans es una de las más
                                    antiguas y prestigiosas carreras automovilísticas del mundo. Esta
                                    competición pone a prueba tanto la fiabilidad de los coches como la
                                    resistencia física y mental de los pilotos, y atrae a algunos de los
                                    nombres más conocidos del automovilismo. Sesenta y dos equipos,
                                    compuestos por tres pilotos cada uno, se reúnen en el Circuit de la
                                    Sarthe, al noroeste de Francia, de 13,6 km, al volante de bólidos
                                    repartidos en tres categorías de vehículos prototipos y Grand
                                    Tourisme. Obtiene la victoria el equipo que haya recorrido una mayor
                                    distancia —que puede alcanzar alrededor de unos 5300 km— en 24
                                    horas. Rolex es patrocinador de la prueba desde 2001 en calidad de
                                    Reloj Oficial.
                                </p>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/24-horas-le-mans/corners-world-of-rolex-le-mans-epic-racing-portrait.webp"
                                        />
                                        <img
                                            alt="Le Mans"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/24-horas-le-mans/corners-world-of-rolex-le-mans-epic-racing-landscape.webp"
                                        />
                                    </picture>
                                </div>
                                <p className="headline50 c-brown-text pb-20">
                                    Innovación continua durante décadas
                                </p>
                                <p className="body-20-light">
                                    Desde su primera edición, el mítico evento es un terreno ideal para
                                    poner a prueba los múltiples avances tecnológicos del automovilismo.
                                    La experimentación con un nuevo firme a partir de 1922 —todavía hoy
                                    viable—, seguridad, motorización y aerodinámica, pero también el uso
                                    exclusivo desde 2022 de un biocombustible 100 % renovable, son
                                    algunos de los avances que jalonan un siglo de progreso de esta
                                    legendaria carrera de resistencia. Nuevos fabricantes
                                    automovilísticos compiten en la primera clase en 2024, como Alpine,
                                    BMW y Lamborghini, destacando la importancia y relevancia del evento
                                    en la industria de automóviles.
                                </p>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/24-horas-le-mans/corners-world-of-rolex-le-mans-decades-racing-portrait.webp"
                                        />
                                        <img
                                            alt="Innovación continua durante décadas"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/24-horas-le-mans/corners-world-of-rolex-le-mans-decades-racing-landscape.webp"
                                        />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">
                                    Tom Kristensen: «Monsieur Le Mans»
                                </p>
                                <p className="body-20-light">
                                    Tom Kristensen se ha ganado merecidamente su apodo a pulso. El
                                    piloto con más éxitos en la historia de la legendaria carrera, la
                                    ganó un récord de nueve veces, empezando por su debut en 1997.
                                    Testimonial Rolex desde 2010, el piloto de carreras danés fue
                                    campeón en el Campeonato Mundial de Resistencia de la FIA en 2013.
                                    «Una victoria en Le Mans te acompañará siempre. Me siento orgulloso
                                    y humilde al reflexionar sobre el legado de la carrera y el
                                    compromiso de Rolex con el automovilismo. Juntos son la combinación
                                    perfecta: ambos buscan la excelencia a través de la persistencia, la
                                    innovación técnica y la actividad humana».
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/24-horas-le-mans/corners-world-of-rolex-le-mans-the-tom-kristensen-portrait.webp"
                                    />
                                    <img
                                        alt="Tom Kristensen"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/24-horas-le-mans/corners-world-of-rolex-le-mans-the-tom-kristensen-landscape.webp"
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
                                    El Cosmograph Daytona: un premio singular
                                </p>
                                <p className="body-20-light">
                                    Los ganadores de la primera clase de las 24 Horas de Le Mans reciben
                                    un Oyster Perpetual Cosmograph Daytona, especialmente grabado para
                                    la ocasión. El Cosmograph Daytona, un reloj legendario cuyo
                                    característico diseño se ha vuelto icónico, es emblemático del
                                    savoir‑faire de Rolex. Equipado con un movimiento diseñado y
                                    producido completamente por la manufactura de Rolex, destaca gracias
                                    a su precisión cronométrica así como su fiabilidad inquebrantable.
                                </p>
                                <div className="pt-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/24-horas-le-mans/corners-world-of-rolex-le-mans-the-singular-prize-portrait.webp"
                                        />
                                        <img
                                            alt="El Cosmograph Daytona: un premio singular"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/24-horas-le-mans/corners-world-of-rolex-le-mans-the-singular-prize-landscape.webp"
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
                                <a href="/rolex/watches/cosmograph-daytona/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-cosmograph-daytona-m126509-0001-portrait.webp"
                                        />
                                        <img
                                            alt="Colección Rolex Cosmograph Daytona"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-cosmograph-daytona-m126509-0001-landscape.webp"
                                        />
                                    </picture>
                                </a>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-2-col">
                            <div className="col-lg-2-6">
                                <div className="pt-10">
                                    <p className="fixed-16 c-brown-text">Rolex Cosmograph Daytona</p>
                                    <p className="headline36 c-brown-text">
                                        El triunfo de la resistencia
                                    </p>
                                    <a
                                        className="btn-label-icon-rlx"
                                        href="/rolex/watches/cosmograph-daytona/">
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

export default HorasMans;