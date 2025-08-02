import React from "react";
import { Helmet } from "react-helmet-async";
import useInitScripts from '../../hooks/useInitScripts';
import RlxExploreMasNModels from "../../parts/RlxExploreMas";
import NavM from "../../parts/NavModels";
import Footer from '../../parts/Footer';

const Sail: React.FC = () => {
    useInitScripts();

    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://devjhernandez--glauser.myvtex.com/rolex/mundo-rolex/sailgp/';
    const baseUrl = 'https://devjhernandez--glauser.myvtex.com';

    return (
        <>
            <Helmet>
                <title>Rolex es Presenting Partner mundial del exclusivo SailGP - GLAUSER</title>
                <meta
                    name="description"
                    content="Rolex es Presenting Partner mundial del exclusivo del SailGP un circuito en el que compiten las embarcaciones de vela más rápidas del mundo."
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

                {/* URLs CANÓNICAS Y DE REDES SOCIALES: Usando la URL dinámica o de producción */}
                <link rel="canonical" href={currentUrl} />

                {/* Facebook Meta Tags */}
                <meta property="og:url" content={currentUrl} />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Rolex es Presenting Partner mundial del exclusivo SailGP - GLAUSER"
                />
                <meta
                    property="og:description"
                    content="Rolex es Presenting Partner mundial del exclusivo del SailGP un circuito en el que compiten las embarcaciones de vela más rápidas del mundo."
                />
                <meta
                    property="og:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/sailgp/rolex-sailgp-catamarans-landscape.webp"
                />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={currentUrl} />
                <meta
                    name="twitter:title"
                    content="Rolex es Presenting Partner mundial del exclusivo SailGP - GLAUSER"
                />
                <meta
                    name="twitter:description"
                    content="Rolex es Presenting Partner mundial del exclusivo del SailGP un circuito en el que compiten las embarcaciones de vela más rápidas del mundo."
                />
                <meta
                    name="twitter:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/sailgp/rolex-sailgp-catamarans-landscape.webp"
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
                                "name": "Rolex es Presenting Partner mundial del exclusivo SailGP - GLAUSER",
                                "isPartOf": { "@id": `${baseUrl}/#website` },
                                "datePublished": "2025-04-01T05:23:53+00:00",
                                "dateModified": "2025-04-01T05:23:53+00:00",
                                "description": "Rolex es Presenting Partner mundial del exclusivo del SailGP un circuito en el que compiten las embarcaciones de vela más rápidas del mundo",
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
                            "name": "SailGP"
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
                        "headline": "Rolex es Presenting Partner mundial del exclusivo SailGP - GLAUSER",
                        "image": {
                            "@type": "ImageObject",
                            "url": "https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/sailgp/rolex-sailgp-catamarans-landscape.webp",
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
                        "description": "Rolex es Presenting Partner mundial del exclusivo del SailGP un circuito en el que compiten las embarcaciones de vela más rápidas del mundo"
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
                                        <a className="active" href="/rolex/mundo-rolex/sailgp/">SailGP</a>
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
                                    Rolex SailGP Championship
                                </h1>
                                <p className="body-24-bold pb-30">
                                    Rolex es Title Partner y Reloj Oficial exclusivo del Rolex SailGP
                                    Championship, un circuito de regatas en el que compiten algunas de
                                    las embarcaciones de vela más rápidas del mundo. Las regatas tienen
                                    lugar en los mares de todo el mundo, en catamaranes F50 con foils
                                    que parece que vuelan a través del agua.
                                </p>
                                <p className="body-20-light">Publicado el 28 de noviembre de 2024</p>
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
                                            src="https://www.youtube.com/embed/_r48adfGxCw"
                                            title="SailGP"
                                            width="560"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">
                                    Innovación al servicio del rendimiento
                                </p>
                                <p className="body-20-light pb-30">
                                    Las tripulaciones incluyen algunos de los mejores navegantes.
                                    Catamaranes idénticos, con foils y vela rígida, capaces de alcanzar
                                    50 nudos (casi 100 km/h). Regatas espectaculares que duran como
                                    mucho 15 minutos. Una temporada que transcurre en los mares de los
                                    cinco continentes. Presentado en 2019, el circuito del SailGP ha
                                    redefinido el mundo de la vela de competición, con catamaranes
                                    innovadores, optimizados de forma constante. Estos veleros voladores
                                    llevan los colores de los países a los que representan y encarnan el
                                    presente y el futuro del deporte.
                                </p>
                                <p className="body-20-light">
                                    El SailGP también ha impulsado la Impact League, el programa Women’s
                                    Pathway y el SailGP Inspire, iniciativas destinadas a fomentar la
                                    sostenibilidad y la diversidad en el mundo de la vela.
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/sailgp/rolex-sailgp-catamarans-portrait.webp"
                                    />
                                    <img
                                        alt="Catamaranes"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/sailgp/rolex-sailgp-catamarans-landscape.webp"
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
                                    Tom Slingsby, Testimonial Rolex Maestro en varias clases
                                </p>
                                <p className="body-20-light pb-30">
                                    Tom Slingsby es sin duda el navegante más exitoso y codiciado de
                                    Australia. Medallista de oro en los Juegos Olímpicos de 2012, fue
                                    nombrado Rolex World Sailor of the Year en tres ocasiones y
                                    tricampeón del SailGP como director ejecutivo y timonel del equipo
                                    australiano.
                                </p>
                                <p className="body-20-light pb-30">
                                    En su talentoso palmarés se incluye estar al timón de tripulaciones
                                    con victorias en tiempo real en la Rolex Sydney Hobart Yacht Race y
                                    la Rolex Middle Sea Race.
                                </p>
                                <p className="body-20-light">
                                    Tom Slingsby lleva un Yacht‑Master 42 en titanio RLX.
                                </p>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/sailgp/rolex-tslingsby23tl-0004-portrait.webp"
                                        />
                                        <img
                                            alt="Tom Slingsby"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/sailgp/rolex-tslingsby23tl-0004-landscape.webp"
                                        />
                                    </picture>
                                </div>
                                <div>
                                    <p className="headline50 c-brown-text pb-20">
                                        Sir Ben Ainslie, Testimonial Rolex La máxima referencia en
                                        competiciones náuticas
                                    </p>
                                    <p className="body-20-light pb-30">
                                        Con cuatro medallas de oro y una de plata, sir Ben Ainslie logró
                                        la espectacular hazaña de ganar una medalla en los cinco Juegos
                                        Olímpicos consecutivos en los que compitió.
                                    </p>
                                    <p className="body-20-light pb-30">
                                        El navegante británico compite para el Royal Yacht Squadron, con
                                        el que Rolex colabora desde 1980, y es capitán del equipo
                                        británico en del circuito SailGP.
                                    </p>
                                    <p className="body-20-light pb-30">
                                        Ainslie es ganador de la Copa América, además de haber ejercido
                                        como táctico para el Oracle Team USA en su victoria sobre el
                                        Emirates Team New Zealand en 2013.
                                    </p>
                                    <p className="body-20-light">
                                        Sir Ben Ainslie lleva un Yacht‑Master 42.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/sailgp/rolex-bainslie20-aw-069-hmills23tl-0005-portrait.webp"
                                        />
                                        <img
                                            alt="Testimoniales Rolex"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/sailgp/rolex-bainslie20-aw-069-hmills23tl-0005-landscape.webp"
                                        />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center pb-90-60">
                                <p className="headline50 c-brown-text pb-20">
                                    Hannah Mills, Testimonial Rolex Una capitana comprometida con la
                                    inclusión
                                </p>
                                <p className="body-20-light pb-30">
                                    Con dos medallas de oro y una de plata, Hannah Mills es una de las
                                    regatistas olímpicas más condecoradas en la historia de los Juegos
                                    Olímpicos. Ganadora del Rolex World Sailor of the Year Award en 2016
                                    y 2021, ocupa el puesto de táctica en la tripulación británica del
                                    SailGP.
                                </p>
                                <p className="body-20-light pb-30">
                                    Fuera del agua, Mills es una defensora comprometida de su deporte.
                                    Embajadora de SailGP para el desarrollo sostenible y embajadora de
                                    sostenibilidad del Comité Olímpico Internacional (COI), también es
                                    cofundadora de Athletes of the World, en campaña por un impacto
                                    positivo en torno al cambio climático.
                                </p>
                                <p className="body-20-light pb-30">
                                    Mills está muy comprometida con la inclusión de mujeres en la vela.
                                    En 2022, junto con el Testimonial Rolex sir Ben Ainslie, lanzó
                                    Athena Pathway para acelerar el desarrollo de mujeres jóvenes y
                                    navegantes en competiciones de alto rendimiento y aportar diversidad
                                    al deporte.
                                </p>
                                <p className="body-20-light">
                                    Hannah Mills lleva un Yacht‑Master 37.
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/sailgp/rolex-fd2-3081-rec-portrait.webp"
                                    />
                                    <img
                                        alt="Rolex y la vela"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/sailgp/rolex-fd2-3081-rec-landscape.webp"
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
                                <div className="pb-90-60">
                                    <p className="headline50 c-brown-text pb-20">
                                        Martine Grael – Testimonial Rolex Hacer historia
                                    </p>
                                    <p className="body-20-light pb-30">
                                        La navegante brasileña Martine Grael está haciendo historia como
                                        la primera directora femenina en SailGP con el equipo brasileño,
                                        recién establecido en la temporada 2025.
                                    </p>
                                    <p className="body-20-light pb-30">
                                        Nacida en una familia de navegantes e inspirada por su padre —el
                                        renombrado regatista Torben Grael— comenzó a navegar de joven en
                                        la bahía de Guanabara, donde los diversos patrones de viento
                                        perfeccionaron su adaptabilidad, habilidad y espíritu competitivo.
                                        Con solo 22 años, fue nombrada la Rolex World Sailor of the Year
                                        2014. Dos años más tarde, en Río de Janeiro, ganó la primera de
                                        dos medallas de oro olímpicas en la clase 49er FX, repitiendo la
                                        hazaña en Tokio en 2021.
                                    </p>
                                    <p className="body-20-light">
                                        Grael también demostró su versatilidad y resistencia al competir
                                        en alta mar en la extenuante Volvo Ocean Race 2017‑2018,
                                        consolidando aún más su reputación como una de las navegantes más
                                        completas del mundo.
                                    </p>
                                </div>
                                <div className="pb-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/sailgp/rolex-martine-grael-JB-4607-portrait.webp"
                                        />
                                        <img
                                            alt="Martine Grael"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/sailgp/rolex-martine-grael-JB-4607-landscape.webp"
                                        />
                                    </picture>
                                </div>
                                <div>
                                    <p className="headline50 c-brown-text pb-20">
                                        Rolex y la vela <br />
                                        Una colaboración contra viento y marea
                                    </p>
                                    <p className="body-20-light">
                                        Clubes náuticos, navegantes famosos, emblemáticas competiciones de
                                        alta mar y algunas de las más célebres regatas. Durante casi 70
                                        años, Rolex ha forjado sólidas relaciones con el mundo de la vela.
                                        La marca, patrocinadora destacada de las regatas, comparte la
                                        búsqueda de la excelencia y una pasión por el máximo rendimiento
                                        con los guardianes del eterno espíritu de este deporte.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content pb-90-60">
                        <div className="row-grid-fullw component-video">
                            <div className="col-6-12">
                                <a href="http://localhost:3000/rolex/watches/yacht-master/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-yacht-master-m226627-0001-portrait.webp"
                                        />
                                        <img
                                            alt="Colección Rolex Yacht-Master"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-yacht-master-m226627-0001-landscape.webp"
                                        />
                                    </picture>
                                </a>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-2-col">
                            <div className="col-lg-2-6">
                                <div className="pt-10">
                                    <p className="fixed-16 c-brown-text">Rolex Yacht-Master</p>
                                    <p className="headline36 c-brown-text">Carácter marino</p>
                                    <a
                                        className="btn-label-icon-rlx"
                                        href="http://localhost:3000/rolex/watches/yacht-master/">
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

export default Sail;