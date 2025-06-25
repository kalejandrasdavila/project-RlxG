import React from 'react';
import { Helmet } from "react-helmet-async";
import useInitScripts from '../hooks/useInitScripts';
import Nav from '../parts/Nav';
import RlxExploreMas from '../parts/RlxExploreMas';
import Footer from '../parts/Footer';


const Asistencia: React.FC = () => {

    useInitScripts();

    return (
        <>
            <Helmet>
                <title>Mantenimiento y reparación de los relojes Rolex en GLAUSER</title>
                <meta
                    name="description"
                    content="GLAUSER se enorgullece de formar parte de la red de Distribuidores Oficiales Rolex de relojeros formados. Puede confiarnos cualquier tipo de operación de mantenimiento."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://glauser.vteximg.com.br/arquivos/style-rolex-general-glauser.css"
                />
                <link rel="stylesheet preload" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://www.glauser.com.co/files/style.min.css"
                />
                <link
                    rel="stylesheet preload"
                    href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
                />
                <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

                <link rel="canonical" href="https://www.glauser.com.co/rolex/asistencia-rolex/" />

                <meta property="og:url" content="https://www.glauser.com.co/rolex/asistencia-rolex/" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Mantenimiento y reparación de los relojes Rolex en GLAUSER"
                />
                <meta
                    property="og:description"
                    content="GLAUSER se enorgullece de formar parte de la red de Distribuidores Oficiales Rolex de relojeros formados. Puede confiarnos cualquier tipo de operación de mantenimiento."
                />
                <meta
                    property="og:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-hub-cover-m126333-0010-portrait.webp"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.glauser.com.co/rolex/asistencia-rolex/" />
                <meta
                    name="twitter:title"
                    content="Mantenimiento y reparación de los relojes Rolex en GLAUSER"
                />
                <meta
                    name="twitter:description"
                    content="GLAUSER se enorgullece de formar parte de la red de Distribuidores Oficiales Rolex de relojeros formados. Puede confiarnos cualquier tipo de operación de mantenimiento."
                />
                <meta
                    name="twitter:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-hub-cover-m126333-0010-portrait.webp"
                />
                <script type="text/javascript">
                    {`
            var digitalDataLayer = {
              environment: {
                environmentVersion: "V7",
                coBrandedVersion: "Bespoke",
              },
              page: {
                pageType: "servicing your rolex page"
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
                                "@id": "https://www.glauser.com.co/#organization",
                                "name": "Joyería Glauser",
                                "url": "https://www.glauser.com.co/",
                                "sameAs": [
                                    "https://www.facebook.com/JoyeriaGlauser/",
                                    "https://www.instagram.com/joyeriaglauser/?hl=es-la"
                                ],
                                "logo": {
                                    "@type": "ImageObject",
                                    "@id": "https://www.glauser.com.co/#logo",
                                    "inLanguage": "es-CO",
                                    "url": "https://glauser.vteximg.com.br/arquivos/glauser_logo.svg",
                                    "contentUrl": "https://glauser.vteximg.com.br/arquivos/glauser_logo.svg",
                                    "width": 300,
                                    "height": 102,
                                    "caption": "Joyería Glauser"
                                },
                                "image": { "@id": "https://www.glauser.com.co/#logo" }
                            },
                            {
                                "@type": "WebPage",
                                "@id": "https://www.glauser.com.co/rolex/asistencia-rolex/#webpage",
                                "url": "https://www.glauser.com.co/rolex/asistencia-rolex/",
                                "name": "Mantenimiento y reparación de los relojes Rolex en GLAUSER",
                                "isPartOf": { "@id": "https://www.glauser.com.co/#website" },
                                "datePublished": "2025-04-01T05:23:53+00:00",
                                "dateModified": "2025-04-01T05:23:53+00:00",
                                "description": "GLAUSER se enorgullece de formar parte de la red de Distribuidores Oficiales Rolex de relojeros formados. Puede confiarnos cualquier tipo de operación de mantenimiento.",
                                "breadcrumb": { "@id": "https://www.glauser.com.co/rolex/asistencia-rolex/#breadcrumb" },
                                "inLanguage": "es-Es",
                                "potentialAction": {
                                    "@type": "ReadAction",
                                    "target": "https://www.glauser.com.co/rolex/asistencia-rolex/"
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
                                "item": "https://www.glauser.com.co/rolex/"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Mantenimiento"
                            }
                        ]
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
                            <Nav />
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
                                        <a className="active" href="https://www.glauser.com.co/rolex/asistencia-rolex/">Mantenimiento</a>
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mantenimiento/rolex-servicing-cover-portrait.webp"
                                    />
                                    <img
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mantenimiento/rolex-servicing-cover-landscape.webp"
                                        loading="lazy"
                                        alt="Reloj Rolex"
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
                                <h1 className="headline50 c-brown-text pb-20">
                                    Mantenimiento y reparación de los relojes Rolex en GLAUSER
                                </h1>
                            </div>
                            <div className="col-lg-8-5">
                                <p className="body-20-light pb-30">
                                    <strong>Los relojes Rolex están diseñados y creados para perdurar.</strong>
                                </p>
                                <p className="body-20-light">
                                    Desde el diseño de un reloj Rolex hasta el momento en el que sale del taller, cada paso de su desarrollo y de su fabricación sigue un solo requisito crítico: la calidad. Es por ello que cada uno de los relojes estampados con la corona está preparado para cumplir plenamente con sus funciones sin límite de tiempo.
                                </p>
                            </div>
                        </div>

                        <div className="row-grid-fullw component-video pb-90-60">
                            <div className="col-6-12">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mantenimiento/rolex-servicing-7214-portrait.webp"
                                    />
                                    <img
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mantenimiento/rolex-servicing-7214-landscape.webp"
                                        loading="lazy"
                                        alt="Centro de servicio autorizado Rolex"
                                    />
                                </picture>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <h2 className="headline50 c-brown-text pb-20">Déjese aconsejar por un experto</h2>
                                <p className="body-20-light">
                                    Al pasar muchos años entre un servicio y otro, su reloj merece la mayor de las atenciones. Como centro de servicio autorizado Rolex, GLAUSER se compromete plenamente a ofrecerles a sus clientes un servicio posventa de primer nivel. Gracias a la exigencia y al savoir‑faire de nuestros relojeros, su reloj Rolex puede mantenerse en el tiempo conservando una excelente fiabilidad y, al mismo tiempo, un brillo irreprochable.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-beige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto pb-90-60">
                            <div className="col-text-center">
                                <h2 className="headline50 c-brown-text pb-20">Mantenimiento Rolex en GLAUSER</h2>
                                <p className="body-20-light">
                                    GLAUSER se enorgullece de formar parte de la red mundial de relojeros formados por Rolex, rigurosamente seleccionados por su profesionalidad y experiencia incomparables. El procedimiento del servicio Rolex está diseñado para garantizar que todas y cada una de las piezas que abandonan un taller Rolex cumplan con sus especificaciones estéticas y funcionales originales.
                                </p>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mantenimiento/rolex-servicing-2234-portrait.webp"
                                    />
                                    <img
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mantenimiento/rolex-servicing-2234-landscape.webp"
                                        loading="lazy"
                                        alt="Mantenimiento Rolex"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="row-grid-fullw cuerpotexto py-90-60">
                        <div className="col-text-center">
                            <div className="pb-45-40">
                                <picture className="p-relative">
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mantenimiento/rolex-plaques-300x150-es.webp"
                                    />
                                    <img
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mantenimiento/rolex-plaques-300x150-es.webp"
                                        width="160"
                                        loading="lazy"
                                        alt="Distribuidor Oficial Rolex"
                                    />
                                </picture>
                            </div>
                            <h2 className="headline50 c-brown-text pb-20">Su centro de servicio autorizado</h2>
                            <p className="body-20-light">
                                Nuestros centros, a la vanguardia de la tecnología, cuentan con relojeros que han recibido formación basada en unos
                                estrictos criterios de excelencia que Rolex evalúa con regularidad. Desde el ajuste de la longitud del brazalete a la
                                reparación completa, todas las operaciones relacionadas con el mantenimiento de un reloj Rolex pueden confiarse a
                                GLAUSER.
                            </p>
                        </div>
                    </div>
                    <div className="row-grid-fullw image-center pb-90-60">
                        <div className="col-6-10">
                            <picture className="rlx-pbanner-top p-relative">
                                <source
                                    media="(max-width: 767px)"
                                    srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mantenimiento/rolex-servicing-sav-barcelona-tousrolexboutique-portrait.webp"
                                />
                                <img
                                    src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mantenimiento/rolex-servicing-sav-barcelona-tousrolexboutique-landscape.webp"
                                    loading="lazy"
                                    alt="Relojeros"
                                />
                            </picture>
                        </div>
                    </div>
                    <div className="row-grid-fullw cuerpotexto">
                        <div className="col-text-center">
                            <div className="pb-90-60">
                                <h2 className="headline50 c-brown-text pb-20">Procedimiento del servicio Rolex</h2>
                                <p className="body-20-light pb-30">
                                    El procedimiento del servicio Rolex está diseñado para asegurar que todo reloj que salga de un taller de Rolex cumpla
                                    las especificaciones estéticas y funcionales originales. Cada movimiento queda completamente ajustado, y cada caja y
                                    brazalete son meticulosamente restaurados para recuperar su lustre. La precisión y la hermeticidad son sometidas a
                                    pruebas estrictas para garantizar el nivel de Colombiadad y fiabilidad que se espera de un reloj Rolex.
                                </p>
                                <a
                                    href="/rolex/asistencia-rolex/mantenimiento-rolex/"
                                    className="btn-primary-rlx"
                                >
                                    Descubra más
                                </a>
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mantenimiento/rolex-servicing-2301-portrait.webp"
                                    />
                                    <img
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mantenimiento/rolex-servicing-2301-landscape.webp"
                                        loading="lazy"
                                        alt="Reloj Rolex"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="row-grid-fullw cuerpotexto py-90-60">
                        <div className="col-text-center">
                            <h2 className="headline50 c-brown-text pb-20">La garantía de servicio de dos años</h2>
                            <p className="body-20-light">
                                Después de un servicio completo, su reloj Rolex queda cubierto por una garantía de servicio de dos años. Esta garantía
                                excluye cualquier daño o deterioro que resulte de un accidente o de una utilización inapropiada del reloj. Toda
                                intervención realizada por terceras personas no autorizadas por Rolex o toda adición de piezas o accesorios no fabricados
                                por Rolex anula esta garantía.
                            </p>
                        </div>
                    </div>
                    <div className="row-grid-fullw image-center pb-90-60">
                        <div className="col-6-10">
                            <picture className="rlx-pbanner-top p-relative">
                                <source
                                    media="(max-width: 767px)"
                                    srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mantenimiento/rolex-servicing-rolex-service_card-portrait.webp"
                                />
                                <img
                                    src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mantenimiento/rolex-servicing-rolex-service_card-landscape.webp"
                                    loading="lazy"
                                    alt="Tarjeta de servicio Rolex"
                                />
                            </picture>
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mantenimiento/rolex-servicing-sav-portrait.webp"
                                    />
                                    <img
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mantenimiento/rolex-servicing-sav-landscape.webp"
                                        loading="lazy"
                                        alt="«Savoir-faire» relojero"
                                    />
                                </picture>
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

export default Asistencia;
