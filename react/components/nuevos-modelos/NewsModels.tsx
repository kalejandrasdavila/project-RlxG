import React from "react";
import { Helmet } from "react-helmet-async"; // Importación correcta para react-helmet-async
import useInitScripts from '../hooks/useInitScripts'; // Asumiendo que es un hook .ts o .tsx
import RlxExploreMas from "../parts/RlxExploreMas"; // Asumiendo que es .tsx (Rlx-exploremas-24.jsx -> RlxExploreMas.tsx)
import Nav from '../parts/Nav'; // Asumiendo que es .tsx
import Footer from '../parts/Footer'; // Asumiendo que es .tsx

const NewsModels: React.FC = () => { // Tipado del componente funcional
    useInitScripts();

    // Obtener la URL actual dinámicamente para canonical y OG tags
    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://www.glauser.com.co/rolex/nuevos-modelos-2025/';
    const baseUrl = 'https://www.glauser.com.co'; // La URL base de tu sitio en producción

    return (
        // Si este componente (NewsModels) es el punto de entrada principal para una ruta o página
        // y no está ya envuelto por HelmetProvider en un componente superior (como Home.tsx o el layout principal de tu store-theme),
        // ENTONCES DEBES envolver todo el contenido del return con <HelmetProvider>.
        // Ejemplo: <HelmetProvider>...</HelmetProvider>
        <>
            <Helmet>
                <title>Nuevos modelos Rolex 2024 - GLAUSER</title>
                <meta
                    name="description"
                    content="GLAUSER presenta la última colección de relojes de lujo suizos de Rolex. Descubra las características únicas de los nuevos modelos de este año."
                />
                {/* VTEX IO: Evita dangerouslySetInnerHTML para meta tags específicos de VTEX. */}
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
                    content="Nuevos modelos Rolex 2024 - GLAUSER"
                />
                <meta
                    property="og:description"
                    content="GLAUSER presenta la última colección de relojes de lujo suizos de Rolex. Descubra las características únicas de los nuevos modelos de este año."
                />
                <meta
                    property="og:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/banner-rolex-new-watches-2024-gmt-master-ii-portrait.webp"
                />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={currentUrl} />
                <meta
                    name="twitter:title"
                    content="Nuevos modelos Rolex 2024 - GLAUSER"
                />
                <meta
                    name="twitter:description"
                    content="GLAUSER presenta la última colección de relojes de lujo suizos de Rolex. Descubra las características únicas de los nuevos modelos de este año."
                />
                <meta
                    name="twitter:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/banner-rolex-new-watches-2024-gmt-master-ii-portrait.webp"
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
                                pageType: "new watches page"
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
                                "name": "Nuevos modelos Rolex 2024 - GLAUSER",
                                "isPartOf": { "@id": `${baseUrl}/#website` },
                                "datePublished": "2025-04-01T05:23:53+00:00",
                                "dateModified": "2025-04-01T05:23:53+00:00",
                                "description": "GLAUSER presenta la última colección de relojes de lujo suizos de Rolex. Descubra las características únicas de los nuevos modelos de este año.",
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
                                "name": "Nuevos Modelos 2024"
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
                            <Nav /> {/* Nav global */}
                        </div>

                        <div className="row-grid breadcrum-page" style={{ height: "40px" }}>
                            <div className="breadcrum-column">
                                <ul className="breadcrum-menu-list description">
                                    <li className="fixed-14">
                                        <a href="/rolex/coleccion-rolex/">
                                            Relojes Rolex
                                        </a>
                                    </li>
                                    <li className="fixed-14 active">
                                        <a className="active" href="/rolex/nuevos-modelos-2025/">Nuevos Modelos 2024</a>
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/banner-rolex-new-watches-2024-gmt-master-ii-portrait.webp"
                                    />
                                    <img
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/banner-rolex-new-watches-2024-gmt-master-ii-landscape.webp"
                                        loading="lazy"
                                        alt="GMT-Master II"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-beige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw text-introduccion pb-90-60">
                            <div className="col-lg-2-5">
                                <h1 className="headline50 c-brown-text pb-20">
                                    Nuevos modelos Rolex 2024 - GLAUSER
                                </h1>
                            </div>
                            <div className="col-lg-8-5">
                                <p className="body-20-light">
                                    <strong>
                                        Con sus últimas creaciones, Rolex arroja una nueva luz sobre algunos
                                        de sus modelos más emblemáticos.
                                    </strong>{" "}
                                    La colección 2024 ofrece armonías inéditas entre materiales, colores y
                                    texturas, lo que refleja la voluntad de renovar continuamente las
                                    emociones relojeras. Esta colección se distingue por una atención
                                    infinita al más mínimo detalle. Gracias a nuestro excelente
                                    savoir-faire, los nuevos modelos juegan con los contrastes.
                                </p>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-2-col pb-90-60">
                            <div className="col-lg-2-6 pb-50-0">
                                <a href="/rolex/nuevos-modelos-2025/gmt-master-ii/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/rolex-new-watches-2024-gmt-master-ii-portrait.webp"
                                        />
                                        <img
                                            alt="Rolex GMT-Master II"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/rolex-new-watches-2024-gmt-master-ii-landscape.webp"
                                        />
                                    </picture>
                                    <div className="pt-10">
                                        <p className="body-20-bold c-brown-text">Nuevos Modelos 2024</p>
                                        <h2 className="headline36 c-brown-text">Rolex GMT-Master II</h2>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-8-6">
                                <a href="/rolex/nuevos-modelos-2025/day-date/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/rolex-new-watches-2024-day-date-portrait.webp"
                                        />
                                        <img
                                            alt="Rolex Day-Date"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/rolex-new-watches-2024-day-date-landscape.webp"
                                        />
                                    </picture>
                                    <div className="pt-10">
                                        <p className="body-20-bold c-brown-text">Nuevos Modelos 2024</p>
                                        <h2 className="headline36 c-brown-text">Rolex Day-Date</h2>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-2-col">
                            <div className="col-lg-2-6 pb-50-0">
                                <a href="/rolex/nuevos-modelos-2025/1908/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/rolex-new-watches-2024-1908-portrait.webp"
                                        />
                                        <img
                                            alt="Rolex 1908"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/rolex-new-watches-2024-1908-landscape.webp"
                                        />
                                    </picture>
                                    <div className="pt-10">
                                        <p className="body-20-bold c-brown-text">Nuevos Modelos 2024</p>
                                        <h2 className="headline36 c-brown-text">Rolex 1908</h2>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-8-6">
                                <a href="/rolex/nuevos-modelos-2025/deepsea/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/rolex-new-watches-2024-deepsea-portrait.webp"
                                        />
                                        <img
                                            alt="Rolex Deepsea"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/rolex-new-watches-2024-deepsea-landscape.webp"
                                        />
                                    </picture>
                                    <div className="pt-10">
                                        <p className="body-20-bold c-brown-text">Nuevos Modelos 2024</p>
                                        <h2 className="headline36 c-brown-text">Rolex Deepsea</h2>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-2-col">
                            <div className="col-lg-2-6 pb-50-0">
                                <a href="/rolex/nuevos-modelos-2025/cosmograph-daytona/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/rolex-new-watches-2024-cosmopgrah-daytona-portrait.webp"
                                        />
                                        <img
                                            alt="Rolex 1908"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/rolex-new-watches-2024-cosmopgrah-daytona-landscape.webp"
                                        />
                                    </picture>
                                    <div className="pt-10">
                                        <p className="body-20-bold c-brown-text">Nuevos Modelos 2024</p>
                                        <h2 className="headline36 c-brown-text">
                                            Rolex Cosmograph Daytona
                                        </h2>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-8-6">
                                <a href="/rolex/nuevos-modelos-2025/sky-dweller/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/rolex-new-watches-2024-sky-dweller-portrait.webp"
                                        />
                                        <img
                                            alt="Rolex Deepsea"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/rolex-new-watches-2024-sky-dweller-landscape.webp"
                                        />
                                    </picture>
                                    <div className="pt-10">
                                        <p className="body-20-bold c-brown-text">Nuevos Modelos 2024</p>
                                        <h2 className="headline36 c-brown-text">Rolex Sky-Dweller</h2>
                                    </div>
                                </a>
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

export default NewsModels;