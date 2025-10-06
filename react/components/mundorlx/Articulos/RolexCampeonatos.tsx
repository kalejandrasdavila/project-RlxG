import React from "react";
import { Helmet } from "react-helmet-async";
import useInitScripts from '../../hooks/useInitScripts';
import RlxExploreMasNModels from "../../parts/RlxExploreMas";
import NavM from "../../parts/NavModels";
import Footer from '../../parts/Footer';
import "../../../main-style.css";


const RlxCampeonatos: React.FC = () => {
    useInitScripts();

    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://devjhernandez--glauser.myvtex.com/rolex/mundo-rolex/rolex-y-los-campeonatos-de-wimbledon/';
    const baseUrl = 'https://devjhernandez--glauser.myvtex.com';

    return (
        <>
            <Helmet>
                <title>Rolex y The Championships, Wimbledon - GLAUSER</title>
                <meta
                    name="description"
                    content="La historia comenzó en Wimbledon en 1978, cuando la marca de Rolex colaboró por primera vez con un deporte que captaba la atención mundial"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://devjhernandez--glauser.myvtex.com/files/style.min.css"
                />
                <link rel="stylesheet" type="text/css" href="https://glauser.vteximg.com.br/arquivos/style-rolex-general-glauser.css" />
                <link rel="stylesheet preload" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />


                {/* URLs CANÓNICAS Y DE REDES SOCIALES*/}
                <link rel="canonical" href={currentUrl} />

                {/* Facebook Meta Tags */}
                <meta property="og:url" content={currentUrl} />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Rolex y The Championships, Wimbledon - GLAUSER"
                />
                <meta
                    property="og:description"
                    content="La historia comenzó en Wimbledon en 1978, cuando la marca de Rolex colaboró por primera vez con un deporte que captaba la atención mundial"
                />
                <meta
                    property="og:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/wimbledon/rolex_WIM23ac-17669-landscape.webp"
                />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={currentUrl} />
                <meta
                    name="twitter:title"
                    content="Rolex y The Championships, Wimbledon - GLAUSER"
                />
                <meta
                    name="twitter:description"
                    content="La historia comenzó en Wimbledon en 1978, cuando la marca de Rolex colaboró por primera vez con un deporte que captaba la atención mundial"
                />
                <meta
                    name="twitter:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/wimbledon/rolex_WIM23ac-17669-landscape.webp"
                />

                {/* Scripts JSON-LD y DataLayer*/}
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
                                "name": "Rolex y The Championships, Wimbledon - GLAUSER",
                                "isPartOf": { "@id": `${baseUrl}/#website` },
                                "datePublished": "2024-06-24T05:23:53+00:00",
                                "dateModified": "2024-06-24T05:23:53+00:00",
                                "description": "La historia comenzó en Wimbledon en 1978, cuando la marca de Rolex colaboró por primera vez con un deporte que captaba la atención mundial",
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
                            "name": "Rolex y The Championships, Wimbledon"
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
                        "headline": "Rolex y The Championships, Wimbledon - GLAUSER",
                        "image": {
                            "@type": "ImageObject",
                            "url": "https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/wimbledon/rolex_WIM23ac-17669-landscape.webp",
                            "height": "2880",
                            "width": "1210"
                        },
                        "datePublished": "2024-06-24T05:23:53+00:00",
                        "dateModified": "2024-06-24T05:23:53+00:00",
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
                        "description": "La historia comenzó en Wimbledon en 1978, cuando la marca de Rolex colaboró por primera vez con un deporte que captaba la atención mundial"
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
                                    <li className="fixed-14 active none-mobil">
                                        <a className="active" href="/rolex/mundo-rolex/rolex-y-los-campeonatos-de-wimbledon/">Rolex y The Championships, Wimbledon</a>
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
                                    Rolex y The Championships, Wimbledon
                                </h1>
                                <p className="body-24-bold pb-30">
                                    Rolex colaboró por primera vez con Wimbledon en 1978. El torneo de
                                    tenis más antiguo del mundo es el templo del tenis sobre hierba y
                                    del deporte original. También es donde los atletas se convierten en
                                    leyendas.
                                </p>
                                <p className="body-20-light">Publicado el 24 de junio de 2024</p>
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
                                            src="https://www.youtube.com/embed/8bEdzkZ45pw"
                                            title="Rolex y The Championships, Wimbledon"
                                            width="560"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="body-20-light pb-30">
                                    Rolex es el Reloj Oficial y unos de los socios más importantes de
                                    todos los principales torneos. La historia comenzó en Wimbledon en
                                    1978, cuando la marca colaboró por primera vez con un deporte que
                                    captaba la atención mundial como nunca antes.
                                </p>
                                <p className="body-20-light">
                                    El All England Lawn Tennis and Croquet Club en el sudoeste de
                                    Londres ha acogido al Wimbledon desde su edición inaugural en 1877.
                                    Wimbledon, el torneo de tenis más antiguo del mundo, es el hogar del
                                    deporte y su templo en pistas de césped.
                                </p>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto pt-90-60">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">
                                    Un templo de la tradición del tenis
                                </p>
                                <p className="body-20-light">
                                    Sobre la entrada de los jugadores a la pista Centre Court, con
                                    capacidad para 15 000 espectadores, se leen versos del poema Si de
                                    Rudyard Kipling:
                                </p>
                                <p className="body-20-light">Si puedes encontrarte con el</p>
                                <p className="body-20-light">Triunfo y el Desastre</p>
                                <p className="body-20-light">Y tratar a esos dos impostores</p>
                                <p className="body-20-light">De la misma manera</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/wimbledon/rolex-WIM19jb-portrait.webp"
                                        />
                                        <img
                                            alt="Le Mans"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/wimbledon/rolex-WIM19jb-landscape.webp"
                                        />
                                    </picture>
                                </div>
                                <p className="body-20-light">
                                    Estos versos resumen la filosofía del evento porque, en Wimbledon,
                                    la grandeza del deporte no reside en la victoria sino en la humildad
                                    y la perseverancia de los campeones.
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/wimbledon/rolex-WIM23ac-17669-portrait.webp"
                                    />
                                    <img
                                        alt="Rolex y The Championships, Wimbledon"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/wimbledon/rolex_WIM23ac-17669-landscape.webp"
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
                                    Escenario de grandes enfrentamientos
                                </p>
                                <p className="body-20-light pb-30">
                                    La intensidad de las finales de Wimbledon en la pista Centre Court
                                    hace que perduren en la memoria como momentos extraordinarios de la
                                    historia del tenis. Las batallas épicas entre tenistas como Rod
                                    Laver y John Newcombe, Björn Borg y John McEnroe, Chris Evert y
                                    Martina Navratilova, Roger Federer y Rafael Nadal han escrito la
                                    leyenda de Wimbledon y del tenis mundial.
                                </p>
                                <p className="body-20-light">
                                    Este nivel de excelencia deportiva sin precedentes conecta con los
                                    valores intrínsecos de Rolex y ha desarrollado una colaboración
                                    natural con todos los eventos importantes del tenis.
                                </p>
                                <div className="pt-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/wimbledon/rolex-federer-portrait.webp"
                                        />
                                        <img
                                            alt="Federer"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/wimbledon/rolex-federer-landscape.webp"
                                        />
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content pt-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">
                                    Rolex y el tenis: una colaboración de casi 50 años
                                </p>
                                <p className="body-20-light pb-30">
                                    Rolex ha mantenido una relación especial con el tenis, que está
                                    profundamente arraigada a una filosofía común: la continua búsqueda
                                    de la excelencia, un deseo por la precisión y la innovación, la
                                    elegancia del movimiento, el esfuerzo inquebrantable, el respeto por
                                    la tradición y una motivación por siempre desafiar más allá de los
                                    límites personales.
                                </p>
                                <p className="body-20-light pb-30">
                                    A lo largo de los años, Rolex se ha involucrado aún más con el
                                    deporte, convirtiéndose en el Patrocinador Premium del tenis
                                    mundial, tanto masculino como femenino.
                                </p>
                                <p className="body-20-light">
                                    La marca apoya la mayoría de las grandes competiciones, incluyendo
                                    los cuatro torneos de Grand Slam®, el ATP y el WTA Finals, que
                                    ponen fin a la temporada, los torneos ATP Masters y WTA 1000 de alto
                                    rango, y las competiciones líder por equipos a nivel internacional;
                                    la Copa Davis y la Laver Cup.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content pt-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">
                                    Los Testimoniales Rolex y Wimbledon
                                </p>
                                <p className="body-20-light pb-30">
                                    Entre sus Testimoniales, Rolex cuenta con un gran número de
                                    campeones de Wimbledon: las leyendas del tenis Björn Borg y Chris
                                    Evert, así como Stefan Edberg, Garbiñe Muguruza, Angelique Kerber,
                                    Roger Federer, que tiene el récord de ocho victorias en el torneo, y
                                    la estrella en alza, Carlos Alcaraz.
                                </p>
                                <p className="body-20-light">
                                    Las figuras principales de hoy en día, como los miembros de la
                                    familia Rolex Iga Świątek, Jannik Sinner y Coco Gauff, desean unirse
                                    a estos grandes en la lista de ganadores de este prestigioso torneo.
                                </p>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <div className="pt-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/wimbledon/rolex-WIM23ac-portrait.webp"
                                        />
                                        <img
                                            alt="Testimoniales"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/wimbledon/rolex-WIM23ac-landscape.webp"
                                        />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">Rolex y el deporte</p>
                                <p className="body-20-light">
                                    Durante varias décadas, la marca ha apoyado activamente la cultura,
                                    la arquitectura y la exploración y conservación del planeta. En el
                                    mundo del deporte, ha forjado una gran variedad de alianzas con el
                                    tenis, el golf, la hípica, el esquí, la vela y el automovilismo.
                                    Rolex establece asociaciones duraderas con órganos directivos,
                                    competiciones y atletas —desde campeones consagrados hasta talentos
                                    en ciernes— con el fin de perpetuar el futuro de estas disciplinas y
                                    promover la excelencia.
                                </p>
                                <div className="pt-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/wimbledon/rolex-WIM21jb-portrait.webp"
                                        />
                                        <img
                                            alt="Reloj"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/wimbledon/rolex-WIM21jb-landscape.webp"
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

export default RlxCampeonatos;