import React from "react";
import { Helmet } from "react-helmet-async";
import useInitScripts from '../../hooks/useInitScripts';
import RlxExploreMas from "../../parts/RlxExploreMas";
import NavM from "../../parts/NavModels";
import Footer from '../../parts/Footer';
const AmundiE: React.FC = () => {
    useInitScripts();

    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://www.glauser.com.co/rolex/mundo-rolex/amundi-evian/';
    const baseUrl = 'https://www.glauser.com.co';

    return (
        <>
            <Helmet>
                <title>ROLEX Y THE AMUNDI EVIAN CHAMPIONSHIP - GLAUSER</title>
                <meta
                    name="description"
                    content="Rolex es Socio y Reloj Oficial del único Major de golf que se celebra en Europa continental."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* CSS: Se elimina la redundancia de Swiper. Considera gestionar CSS vía manifest.json. */}
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://www.glauser.com.co/files/style.min.css"
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
                    content="ROLEX Y THE AMUNDI EVIAN CHAMPIONSHIP - GLAUSER"
                />
                <meta
                    property="og:description"
                    content="Rolex es Socio y Reloj Oficial del único Major de golf que se celebra en Europa continental."
                />
                <meta
                    property="og:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/amundi-evian/rolex-evianc23ct-0832-landscape.webp"
                />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={currentUrl} />
                <meta
                    name="twitter:title"
                    content="ROLEX Y THE AMUNDI EVIAN CHAMPIONSHIP - GLAUSER"
                />
                <meta
                    name="twitter:description"
                    content="Rolex es Socio y Reloj Oficial del único Major de golf que se celebra en Europa continental."
                />
                <meta
                    name="twitter:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/amundi-evian/rolex-evianc23ct-0832-landscape.webp"
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
                                "name": "ROLEX Y THE AMUNDI EVIAN CHAMPIONSHIP - GLAUSER",
                                "isPartOf": { "@id": `${baseUrl}/#website` },
                                "datePublished": "2024-07-04T05:23:53+00:00",
                                "dateModified": "2024-07-04T05:23:53+00:00",
                                "description": "Rolex es Socio y Reloj Oficial del único Major de golf que se celebra en Europa continental.",
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
                            "name": "The Amundi Evian Championship"
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
                        "headline": "ROLEX Y THE AMUNDI EVIAN CHAMPIONSHIP - GLAUSER",
                        "image": {
                            "@type": "ImageObject",
                            "url": "https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/amundi-evian/rolex-evianc23ct-0832-landscape.webp",
                            "height": "938",
                            "width": "1623"
                        },
                        "datePublished": "2024-07-04T05:23:53+00:00",
                        "dateModified": "2024-07-04T05:23:53+00:00",
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
                        "description": "Rolex es Socio y Reloj Oficial del único Major de golf que se celebra en Europa continental."
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
                                        <a className="active" href="/rolex/mundo-rolex/amundi-evian/">The Amundi Evian Championship</a>
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
                                    Rolex y The Amundi Evian Championship
                                </h1>
                                <p className="body-24-light pb-30">
                                    <strong>
                                        Rolex es Socio y Reloj Oficial del único Major de golf que se
                                        celebra en Europa continental.
                                    </strong>{" "}
                                    The Amundi Evian Championship se juega cada julio en el Evian Resort
                                    Golf Club en Évian‑les‑Bains, Francia. Este exigente campo se
                                    encuentra entre las prístinas costas del lago Lemán y los Alpes
                                    nevados. El torneo femenino, creado en 1994, fue elevado a la
                                    categoría de Major en 2013.
                                </p>
                                <p className="body-20-light">Publicado el 04 de julio de 2024</p>
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
                                            src="https://www.youtube.com/watch?v=SEBUX-ub5vM" // URL de embed de YouTube
                                            title="The Amundi Evian Championship"
                                            width="560"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">Un evento importante</p>
                                <p className="body-20-light">
                                    Desde su primera edición hace 30 años, The Amundi Evian Championship
                                    ha crecido exponencialmente para convertirse en una fecha
                                    imprescindible en el calendario del golf. Es el único torneo Major
                                    que se juega en Europa continental. Con el tiempo, el evento se ha
                                    convertido en un punto de encuentro para las mejores golfistas del
                                    mundo, enfrentadas entre sí en duelos memorables que están grabados
                                    en la gloriosa historia de la disciplina. Las Testimoniales Rolex
                                    han destacado en el torneo, con victorias de Annika Sörenstam (2000,
                                    2002), Suzann Pettersen (2013), Lydia Ko (2015), Anna Nordqvist
                                    (2017) y Brooke Henderson (2022).
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/amundi-evian/rolex-evianc23tl-0848-portrait.webp"
                                    />
                                    <img
                                        alt="Evian Championship"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/amundi-evian/rolex-evianc23tl-0848-landscape.webp"
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
                                    En la cima de su juego
                                </p>
                                <p className="body-20-light">
                                    The Amundi Evian Championship se disputa anualmente en el Champions
                                    Course en Évian‑les‑Bains. El terreno de juego, completamente
                                    rediseñado a finales de la década de 1980 por el arquitecto Cabell
                                    B. Robinson presenta una serie de dificultades que ponen a prueba
                                    duramente las habilidades de los golfistas. Situado entre el lago y
                                    la montaña, el campo ofrece un panorama impresionante, donde la
                                    belleza del entorno se combina con la naturaleza exigente del campo
                                    y la precisión necesaria para cada golpe. «Jugar en Evian» se ha
                                    convertido en una expresión habitual, pues tal es la enormidad del
                                    desafío.
                                </p>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto pt-90-60">
                            <div className="col-text-center">
                                <div className="quote">
                                    <p className="quote50 c-black-text pb-20">
                                        «Hay muchas empresas que consideran que el golf femenino es algo
                                        secundario. Pero Rolex, no, porque lo ha apoyado y se ha
                                        comprometido con él a varios niveles».
                                    </p>
                                    <p className="body-20-light c-black-text pb-20">Annika Sörenstam</p>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/amundi-evian/rolex-uswo22jdc-09107-evianc22ct-portrait.webp"
                                        />
                                        <img
                                            alt="Annika Sorentam - Lydia Ko"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/amundi-evian/rolex-uswo22jdc-09107-evianc22ct-landscape.webp"
                                        />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto pb-90-60">
                            <div className="col-text-center">
                                <div className="quote">
                                    <p className="quote50 c-black-text pb-20">
                                        «Evian es un lugar muy especial para mí, más allá del hecho de que
                                        aquí gané mi primer Major a los 17 años».
                                    </p>
                                    <p className="body-20-light c-black-text pb-20">Lydia Ko</p>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <h2 className="headline50 c-brown-text pb-20">
                                    Rolex, socio del golf femenino
                                </h2>
                                <p className="body-20-light">
                                    Socio y Reloj Oficial de The Amundi Evian Championship desde el
                                    2000, Rolex está asociado con todos los Majors femeninos —el Chevron
                                    Championship, el U.S. Women’s Open, el KPMG Women’s PGA
                                    Championship, el AIG Women’s Open— así como con los principales
                                    tours de la disciplina, concretamente el Tour de la LPGA (Ladies
                                    Professional Golf Association) y el LET (Ladies European Tour). La
                                    marca también colabora con el ANWA (Augusta National Women’s
                                    Amateur), el torneo más grande del circuito de golf amateur
                                    femenino. A través de una serie de premios, en particular el Rolex
                                    Player of the Year, el Rolex ANNIKA Major Award, el Rolex Junior
                                    Player of the Year y el Louise Suggs Rolex Rookie of the Year, el
                                    relojero suizo promueve y celebra la excelencia de un deporte
                                    femenino en perpetua evolución.
                                </p>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/amundi-evian/rolex-evianc21ct-1820-portrait.webp"
                                        />
                                        <img
                                            alt="Evian Championship"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/amundi-evian/rolex-evianc21ct-1820-landscape.webp"
                                        />
                                    </picture>
                                </div>
                                <div className="pb-90-60">
                                    <p className="headline50 c-brown-text pb-20">
                                        Rolex y el golf, una base de valores compartidos
                                    </p>
                                    <p className="body-20-light">
                                        El golf es más que un deporte. Representa unos valores que lo
                                        convierten en una experiencia única: precisión, integridad,
                                        humildad y respeto. Son características que están profundamente
                                        arraigadas en la identidad de Rolex. Es por esta razón que hace ya
                                        casi 60 años que Rolex apoya al golf. Este compromiso a largo
                                        plazo se inició en 1967 con el campeón legendario Arnold Palmer,
                                        conocido como uno de los «Big Three», junto con Jack Nicklaus y
                                        Gary Player. Hoy en día incluye las instituciones y eventos
                                        principales, además de los mejores jugadores y jóvenes talentos
                                        del deporte.
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/amundi-evian/rolex-evianc23ct-0832-portrait.webp"
                                    />
                                    <img
                                        alt="Evian Championship"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/amundi-evian/rolex-evianc23ct-0832-landscape.webp"
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
                <RlxExploreMas />
                <Footer />

            </main>
        </>
    );
}

export default AmundiE;