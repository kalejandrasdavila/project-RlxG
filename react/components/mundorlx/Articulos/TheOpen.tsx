import React from "react";
import { Helmet } from "react-helmet-async";
import useInitScripts from '../../hooks/useInitScripts';
import RlxExploreMasNModels from "../../parts/RlxExploreMas";
import NavM from "../../parts/NavModels";
import Footer from '../../parts/Footer';
import "../../../main-style.css";


const TheOpen: React.FC = () => {
    useInitScripts();
    const currentUrl = (typeof window !== 'undefined' && window.location) ? window.location.href : 'https://glauser.myvtex.com/rolex/mundo-rolex/the-open/';
    const baseUrl = 'https://glauser.myvtex.com';

    return (
        <>
            <Helmet>
                <title>ROLEX Y THE OPEN: EL MAJOR MÁS ANTIGUO DEL GOLF - GLAUSER</title>
                <meta
                    name="description"
                    content="Asociado con esta competición desde 1981, Rolex es actualmente un socio privilegiado del mundo del golf."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://glauser.myvtex.com/files/style.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://glauser.vteximg.com.br/arquivos/style-rolex-general-glauser.css"
                />
                <link rel="stylesheet preload" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

                <link rel="canonical" href={currentUrl} />

                <meta property="og:url" content={currentUrl} />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="ROLEX Y THE OPEN: EL MAJOR MÁS ANTIGUO DEL GOLF - GLAUSER"
                />
                <meta
                    property="og:description"
                    content="Asociado con esta competición desde 1981, Rolex es actualmente un socio privilegiado del mundo del golf."
                />
                <meta
                    property="og:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/the-open/rolex-bop21ct-1354-landscape.webp"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={currentUrl} />
                <meta
                    name="twitter:title"
                    content="ROLEX Y THE OPEN: EL MAJOR MÁS ANTIGUO DEL GOLF - GLAUSER"
                />
                <meta
                    name="twitter:description"
                    content="Asociado con esta competición desde 1981, Rolex es actualmente un socio privilegiado del mundo del golf."
                />
                <meta
                    name="twitter:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/the-open/rolex-bop21ct-1354-landscape.webp"
                />

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
                                "name": "ROLEX Y THE OPEN: EL MAJOR MÁS ANTIGUO DEL GOLF - GLAUSER",
                                "isPartOf": { "@id": `${baseUrl}/#website` },
                                "datePublished": "2024-07-11T05:23:53+00:00",
                                "dateModified": "2024-07-11T05:23:53+00:00",
                                "description": "Asociado con esta competición desde 1981, Rolex es actualmente un socio privilegiado del mundo del golf.",
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
                            "name": "The Open"
                        }
                        ]
                    })}
                </script>

                <script type="application/ld+json">
                    {`
                        "@context": "http://schema.org",
                        "@type": "NewsArticle",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "${currentUrl}"
                        },
                        "headline": "ROLEX Y THE OPEN: EL MAJOR MÁS ANTIGUO DEL GOLF - GLAUSER",
                        "image": {
                            "@type": "ImageObject",
                            "url": "https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/the-open/rolex-bop21ct-1354-landscape.webp",
                            "height": "938",
                            "width": "1623"
                        },
                        "datePublished": "2024-07-11T05:23:53+00:00",
                        "dateModified": "2024-07-11T05:23:53+00:00",
                        "articleSection": "Mundo Rolex",
                        "author": {
                            "@type": "Organization",
                            "name": "GLAUSER",
                            "url": "${baseUrl}/"
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
                        "description": "Asociado con esta competición desde 1981, Rolex es actualmente un socio privilegiado del mundo del golf."
                    `}
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
                                    <li className="fixed-14 active  none-mobil">
                                        <a className="active" href="https://glauser.myvtex.com/rolex/mundo-rolex/the-open/">The Open</a>
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
                                    Rolex y The Open: el major más antiguo del golf
                                </h1>
                                <p className="body-24-bold pb-30">
                                    The Open, tradicionalmente celebrado en el Reino Unido durante la
                                    tercera semana de julio, es el cuarto y último major masculino del
                                    año. Asociado con esta competición desde 1981, Rolex es actualmente
                                    un socio privilegiado del mundo del golf.
                                </p>
                                <p className="body-20-light">Publicado el 11 de julio de 2024</p>
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
                                            src="https://www.youtube.com/embed/6" // Usar embed URL de YouTube
                                            title="Rolex y The Open"
                                            width="560"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="body-20-light">
                                    La colaboración entre Rolex y el golf comenzó en 1967 cuando Arnold
                                    Palmer se convirtió en el primer Testimonial de este deporte. Desde
                                    entonces, la marca se ha convertido en Reloj Oficial y es socio
                                    principal de varios eventos destacados y participantes en el
                                    deporte.
                                </p>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/the-open/rolex-bop16psl-3449-portrait.webp"
                                        />
                                        <img
                                            alt="El reloj"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/the-open/rolex-bop16psl-3449-landscape.webp"
                                        />
                                    </picture>
                                </div>
                                <p className="body-20-light">
                                    Inaugurado en 1860, The Open se juega cada año en un campo histórico
                                    de tipo «links» de Reino Unido. La lista de campos históricos
                                    incluye el legendario St Andrews.
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/the-open/rolex-bop21sw-7900-portrait.webp"
                                    />
                                    <img
                                        alt="The Open"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/the-open/rolex-bop21sw-7900-landscape.webp"
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
                                    Impregnado de elegancia y tradición
                                </p>
                                <p className="body-20-light">
                                    Según la tradición, The Open se juega siempre en un «links», es
                                    decir, un campo situado junto al mar, con tierra arenosa y pocos
                                    obstáculos de agua o árboles. Las condiciones meteorológicas
                                    impredecibles significan que los 156 jugadores que compiten en el
                                    torneo cada año necesitan hacer gala de una buena dosis de espíritu
                                    luchador, autocontrol y humildad ante la posibilidad de que se
                                    produzcan chubascos intensos, fuertes rachas de viento e incluso
                                    olas de calor.
                                </p>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/the-open/rolex-staw14ml-portrait.webp"
                                        />
                                        <img
                                            alt="Momentos inolvidables"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/the-open/rolex-staw14ml-landscape.webp"
                                        />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">Momentos inolvidables</p>
                                <p className="body-20-light">
                                    Con su pasado único, la belleza salvaje de los campos costeros donde
                                    se juega y sus conocedores aficionados, The Open ocupa un lugar
                                    venerado en la historia del deporte mundial. Desde los duelos entre
                                    Bobby Jones y Walter Hagen en la década de 1920 hasta el duelo entre
                                    Tom Watson y Jack Nicklaus en 1977; o las lágrimas de Tiger Woods al
                                    ganar su tercer trofeo en 2006.
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/the-open/rolex-bop21ct-1354-portrait.webp"
                                    />
                                    <img
                                        alt="The Open"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/the-open/rolex-bop21ct-1354-landscape.webp"
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
                                <p className="headline50 c-brown-text pb-30">
                                    Rolex y el golf: socios desde hace más de medio siglo
                                </p>
                                <p className="body-20-light pb-20">
                                    Rolex disfruta de una relación privilegiada con el golf, basada en
                                    un respeto compartido por la tradición, la responsabilidad, la
                                    precisión técnica, la elegancia del movimiento, la búsqueda perpetua
                                    de la excelencia y un compromiso con las generaciones venideras.
                                </p>
                                <p className="body-20-light pb-20">
                                    Actualmente, la colaboración entre Rolex y el golf se extiende a
                                    varias áreas del deporte: con cuerpos directivos y rankings
                                    mundiales, con las grandes figuras del golf internacional, y con los
                                    majors y los circuitos mundiales, tanto masculinos como femeninos,
                                    profesionales y amateurs, en niveles sénior y júnior.
                                </p>
                                <p className="body-20-light pb-20">
                                    Además, la marca también ha impulsado la creación de: el Rolex
                                    Series, los mejores torneos del Dubái DP World; el premio Rolex
                                    Player of the Year, que reconoce a la mejor golfista del circuito de
                                    la Ladies Professional Golf Association (LPGA); y los premios Rolex
                                    Junior Players of the Year, que honran a los jugadores de 18 años o
                                    menos, chicos y chicas, con mejor rendimiento en una temporada
                                    determinada. Es innegable que Rolex se ha convertido en «el reloj
                                    asociado del golf mundial».
                                </p>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/the-open/rolex-bop17ct-3818-portrait.webp"
                                        />
                                        <img
                                            alt="Testimoniales Rolex"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/the-open/rolex-bop17ct-3818-landscape.webp"
                                        />
                                    </picture>
                                </div>
                                <p className="headline50 c-brown-text pb-30">
                                    Testimoniales Rolex y The Open
                                </p>
                                <p className="body-20-light">
                                    Varios miembros de la familia Rolex de Testimoniales pertenecen a la
                                    ilustre lista de jugadores que han ganado The Open: Gary Player,
                                    Arnold Palmer, Jack Nicklaus, Tom Watson, Tiger Woods, Jordan
                                    Spieth, Francesco Molinari y Collin Morikawa.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw component-video">
                            <div className="col-6-12">
                                <a href="https://glauser.myvtex.com/rolex/watches/day-date/">
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
                                        href="https://glauser.myvtex.com/rolex/watches/day-date/">
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

export default TheOpen;