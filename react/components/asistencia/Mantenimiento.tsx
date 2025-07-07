import React, { useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import RlxExploreMas from '../parts/RlxExploreMas';
import Nav from '../parts/Nav';
import Footer from '../parts/Footer';
import useInitScripts from '../hooks/useInitScripts';

interface MantenimientoProps { }

const Mantenimiento: React.FC<MantenimientoProps> = () => {
    useInitScripts();

    return (
        <>
            <Helmet>
                <title>Procedimiento de mantenimiento Rolex - GLAUSER</title>
                <meta
                    name="description"
                    content="Explore el procedimiento de servicio Rolex en GLAUSER, su distribuidor oficial Rolex para obtener cuidado y mantenimiento experto de su reloj Rolex."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* In a VTEX IO environment, direct <link> and <script> tags for external resources 
          within <Helmet> are generally discouraged for performance and maintainability.
          
          Instead, you should:
          1. For CSS: Import stylesheets directly into your component's CSS or use CSS Modules/Tailwind.
             If they are global, they should be defined in your VTEX app's `styles/configs.json` or `styles/css/` folder.
          2. For JS: Use VTEX IO's `script` block (from `vtex.script`) or `render-server` to inject global scripts.
             For component-specific logic, use React hooks like `useEffect`.

          I've commented out the original external links and scripts as they are not
          the standard VTEX IO practice.
        */}
                {/*
        <link
          rel="stylesheet"
          type="text/css"
          href="https://www.glauser.com.co/files/style.min.css"
        />
        <link rel="stylesheet preload" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://glauser.vteximg.com.br/arquivos/style-rolex-general-glauser.css"
        />
        <link
          rel="stylesheet preload"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
        <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
        */}

                {/* Canonical URL: In VTEX, this is usually handled by the platform's routing system */}
                <link rel="canonical" href="https://www.glauser.com.co/rolex/asistencia-rolex/mantenimiento-rolex/" />

                {/* Open Graph / Twitter Meta Tags */}
                <meta property="og:url" content="https://www.glauser.com.co/rolex/asistencia-rolex/mantenimiento-rolex/" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Procedimiento de mantenimiento Rolex - GLAUSER"
                />
                <meta
                    property="og:description"
                    content="Explore el procedimiento de servicio Rolex en GLAUSER, su distribuidor oficial Rolex para obtener cuidado y mantenimiento experto de su reloj Rolex."
                />
                <meta
                    property="og:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mantenimiento/rolex-servicing-cover-portrait.webp"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.glauser.com.co/rolex/asistencia-rolex/mantenimiento-rolex/" />
                <meta
                    name="twitter:title"
                    content="Procedimiento de mantenimiento Rolex - GLAUSER"
                />
                <meta
                    name="twitter:description"
                    content="Explore el procedimiento de servicio Rolex en GLAUSER, su distribuidor oficial Rolex para obtener cuidado y mantenimiento experto de su reloj Rolex."
                />
                <meta
                    name="twitter:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mantenimiento/rolex-servicing-cover-portrait.webp"
                />

                {/* Inline Script for Data Layer (VTEX Recommendation: Use `render-server` or `vtex.script`) */}
                {/*
          For VTEX IO, it's generally better to declare global data layer variables
          using the `vtex.script` app in your `store/blocks.json` or to leverage
          VTEX's own data layer events. If this is specific to this page and must be inline,
          it's acceptable, but consider the VTEX way.
        */}
                <script type="text/javascript">
                    {`
            var digitalDataLayer = {
              environment: {
                environmentVersion: "V7",
                coBrandedVersion: "Bespoke",
              },
              page: {
                pageType: "servicing procedure page"
              },
            };
          `}
                </script>

                {/* Structured Data (JSON-LD) - Keep these as they are good for SEO */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Organization",
                                "@id": "https://www.glauser.com.co/#organization",
                                name: "Joyería Glauser",
                                url: "https://www.glauser.com.co/",
                                sameAs: [
                                    "https://www.facebook.com/JoyeriaGlauser/",
                                    "https://www.instagram.com/joyeriaglauser/?hl=es-la",
                                ],
                                logo: {
                                    "@type": "ImageObject",
                                    "@id": "https://www.glauser.com.co/#logo",
                                    inLanguage: "es-CO",
                                    url: "https://glauser.vteximg.com.br/arquivos/glauser_logo.svg",
                                    contentUrl: "https://glauser.vteximg.com.br/arquivos/glauser_logo.svg",
                                    width: 300,
                                    height: 102,
                                    caption: "Joyería Glauser",
                                },
                                image: { "@id": "https://www.glauser.com.co/#logo" },
                            },
                            {
                                "@type": "WebPage",
                                "@id": "https://www.glauser.com.co/rolex/asistencia-rolex/#webpage",
                                url: "https://www.glauser.com.co/rolex/asistencia-rolex/",
                                name: "Procedimiento de mantenimiento Rolex - GLAUSER",
                                isPartOf: { "@id": "https://www.glauser.com.co/#website" },
                                datePublished: "2025-04-01T05:23:53+00:00",
                                dateModified: "2025-04-01T05:23:53+00:00",
                                description:
                                    "Explore el procedimiento de servicio Rolex en GLAUSER, su distribuidor oficial Rolex para obtener cuidado y mantenimiento experto de su reloj Rolex.",
                                breadcrumb: { "@id": "https://www.glauser.com.co/rolex/asistencia-rolex/#breadcrumb" },
                                inLanguage: "es-Es",
                                potentialAction: {
                                    "@type": "ReadAction",
                                    target: "https://www.glauser.com.co/rolex/asistencia-rolex/",
                                },
                            },
                        ],
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                name: "Rolex GLAUSER",
                                item: "https://www.glauser.com.co/rolex/",
                            },
                            {
                                "@type": "ListItem",
                                position: 2,
                                name: "Mantenimiento",
                            },
                        ],
                    })}
                </script>
            </Helmet>

            <div className="header-component">
                <header className="main-header" id="main-header">
                    <Nav />
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

                        <div className="row-grid breadcrum-page" style={{ height: '40px' }}>
                            <div className="breadcrum-column">
                                <ul className="breadcrum-menu-list description">
                                    <li className="fixed-14">
                                        <a href="/rolex/coleccion-rolex/"> {/* Use relative paths */}
                                            Relojes Rolex
                                        </a>
                                    </li>
                                    <li className="fixed-14">
                                        <a href="/rolex/asistencia-rolex/">Mantenimiento</a> {/* Use relative paths */}
                                    </li>
                                    <li className="fixed-14 active none-mobil">
                                        <a className="active" href="/rolex/asistencia-rolex/mantenimiento-rolex/">Procedimiento de mantenimiento</a> {/* Use relative paths */}
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-cover-2301-rolex-sav-retailers-175-controle-final-fermoir-portrait.webp"
                                    />
                                    <img
                                        alt="Reloj Rolex"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-cover-2301-rolex-sav-retailers-175-controle-final-fermoir-landscape.webp"
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
                                <h1 className="headline50 c-brown-text pb-20">LAS ETAPAS DE UN SERVICIO COMPLETO</h1>
                            </div>
                            <div className="col-lg-8-5">
                                <p className="body-20-light">
                                    Cualquier Distribuidor Oficial o filial de la marca puede hacerse cargo de su reloj Rolex para su servicio. El personal competente registra sus posibles peticiones en el momento en que usted le entrega su reloj. A continuación, se envía a un relojero.
                                </p>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-video">
                            <div className="col-6-12">
                                <div className="banner-10 rlx-banner-100">
                                    <div className="ratio ratio-16x9">
                                        <iframe
                                            width="560"
                                            height="315"
                                            src="https://www.youtube.com/embed/your_youtube_video_id"
                                            title="Mantenimiento de tu Reloj Rolex"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto py-90-60">
                            <div className="col-text-center">
                                <h2 className="headline50 c-brown-text pb-20">Examen del reloj</h2>
                                <p className="body-20-light">
                                    Su reloj es minuciosamente examinado por un relojero, que estima las operaciones que hay que realizar y establece un presupuesto. Una vez aceptado, comienza el servicio de mantenimiento.
                                </p>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-retailers-104-estimation-verification-no-de-serie-boite-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-retailers-104-estimation-verification-no-de-serie-boite-landscape.webp" loading="lazy" alt="EXAMEN DEL RELOJ" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-beige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div className="pb-90-60">
                                    <h2 className="headline50 c-brown-text pb-20">Preparación del servicio</h2>
                                    <p className="body-20-light">
                                        El movimiento, todavía coronado por la esfera y las agujas, se extrae de la caja, de la que se ha desprendido previamente el brazalete. Movimiento, caja y brazalete se tratarán de forma separada durante el proceso de mantenimiento, antes de volver a montarlos al concluir el servicio.
                                    </p>
                                </div>
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-corporate-19-eclatement-enlevement-du-cadran-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-corporate-19-eclatement-enlevement-du-cadran-landscape.webp" loading="lazy" alt="Preparación del servicio" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="row-grid-fullw cuerpotexto">
                        <div className="col-text-center">
                            <div className="py-90-60">
                                <h2 className="headline50 c-brown-text pb-20">Desmontaje del movimiento</h2>
                                <p className="body-20-light">
                                    El movimiento se desmonta por completo y todos los componentes se examinan con el mayor de los cuidados. Los que no cumplen con los criterios de Rolex se sustituyen sistemáticamente.
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-sav-1910dh-portrait.webp"
                                    />
                                    <img
                                        alt="Desmontaje del movimiento"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-sav-1910dh-landscape.webp"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center pb-90-60">
                                <h2 className="headline50 c-brown-text pb-20">Lavado de los componentes del movimiento</h2>
                                <p className="body-20-light">
                                    Los diferentes componentes se limpian mediante baños de ultrasonidos, de tal modo que se eliminan las impurezas hasta en las zonas de más difícil acceso.
                                </p>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-corporate-29-lavage-mouvement-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-corporate-29-lavage-mouvement-landscape.webp" loading="lazy" alt="Lavado de los componentes del movimiento" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-beige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div className="pb-90-60">
                                    <h2 className="headline50 c-brown-text pb-20">Ensamblaje del movimiento y lubricación</h2>
                                    <p className="body-20-light">
                                        Los componentes se secan y, a continuación, el movimiento se vuelve a montar por completo y se lubrica. El relojero ajusta una primera vez la precisión del movimiento de acuerdo con los criterios de la marca.
                                    </p>
                                </div>
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-corporate-40-assemblage mouvement-pose-oscillateur-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-corporate-40-assemblage mouvement-pose-oscillateur-landscape.webp" loading="lazy" alt="Ensamblaje del movimiento y lubricación" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="row-grid-fullw cuerpotexto">
                        <div className="col-text-center">
                            <div className="py-90-60">
                                <h2 className="headline50 c-brown-text pb-20">Acabado de la caja y del brazalete</h2>
                                <p className="body-20-light">
                                    La caja se desmonta por completo y la carrura, el bisel, el fondo y el brazalete se pulen o satinan, en función del acabado original. Estas sutiles operaciones exigen destreza y delicadeza.
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-corporate-33polissage-boite-portrait.webp"
                                    />
                                    <img
                                        alt="Acabado de la caja y del brazalete"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-corporate-33polissage-boite-landscape.webp"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-beige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div className="pb-90-60">
                                    <h2 className="headline50 c-brown-text pb-20">Montaje de la caja</h2>
                                    <p className="body-20-light">
                                        Una vez reavivados y limpios, los elementos de la caja se vuelven a montar y las juntas de hermeticidad se reemplazan. Se pone a prueba la hermeticidad de la caja.
                                    </p>
                                </div>
                                <picture className="rlx-pbanner-top p-relative">
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2301-rolex-sav-corporate-61-controle-etancheite-etancheiscope-portrait.webp"
                                    />
                                    <img
                                        alt="Montaje de la caja"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2301-rolex-sav-corporate-61-controle-etancheite-etancheiscope-landscape.webp"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="row-grid-fullw cuerpotexto">
                        <div className="col-text-center">
                            <div className="py-90-60">
                                <h2 className="headline50 c-brown-text pb-20">Encajado del movimiento</h2>
                                <p className="body-20-light">
                                    El movimiento, sobre el cual se han vuelto a montar la esfera y las agujas, se recoloca en la caja después de que el relojero haya efectuado un riguroso control técnico y estético de todos los elementos.
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-corporate-47-assemblage-chasser-les-aiguilles-portrait.webp"
                                    />
                                    <img
                                        alt="Encajado del movimiento"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-corporate-47-assemblage-chasser-les-aiguilles-landscape.webp"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center pb-90-60">
                                <h2 className="headline50 c-brown-text pb-20">Prueba de precisión</h2>
                                <p className="body-20-light pb-30">
                                    Tras el encajado del movimiento, se evalúa una vez más la precisión cronométrica. El relojero procede a los últimos ajustes para que cumpla con las exigencias de Rolex.
                                </p>
                                <p className="body-20-light">
                                    A continuación, el relojero enrosca el fondo de la caja y entonces el reloj se pone a prueba, al menos durante veinticuatro horas. Esta prueba, propia de la marca, permite verificar el buen funcionamiento de su movimiento.
                                </p>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center pb-90-60">
                            <div className="col-6-10">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-corporate-54-controle-performance-emboite-micro-stella-portrait.webp"
                                    />
                                    <img
                                        alt="Prueba de precisión"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-corporate-54-controle-performance-emboite-micro-stella-landscape.webp"
                                    />
                                </picture>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <h2 className="headline50 c-brown-text pb-20">Prueba de hermeticidad</h2>
                                <p className="body-20-light">
                                    La hermeticidad del reloj se controla con ayuda de una prueba realizada en el agua bajo presión y, a continuación, se vuelve a montar el brazalete en la caja.
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-corporate-66-controle-etancheite-fathometre-portrait.webp"
                                    />
                                    <img
                                        alt="Prueba de hermeticidad"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-corporate-66-controle-etancheite-fathometre-landscape.webp"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center pb-90-60">
                                <h2 className="headline50 c-brown-text pb-20">Control final</h2>
                                <p className="body-20-light">
                                    El reloj ya está preparado para un control final. Durante el mismo, el relojero comprueba que sus funciones estén perfectamente operativas y que su estética sea irreprochable.
                                </p>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-corporate-72-controle-final-portrait.webp"
                                    />
                                    <img
                                        alt="Control final"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-corporate-72-controle-final-landscape.webp"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-beige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div className="pb-90-60">
                                    <h2 className="headline50 c-brown-text pb-20">DEVOLUCIÓN DEL RELOJ</h2>
                                    <p className="body-20-light">
                                        Al concluir el servicio, se le devuelve el reloj en un estuche protector. El servicio tiene una garantía internacional de una duración de dos años que cubre tanto las piezas como la mano de obra.
                                    </p>
                                </div>
                                <picture className="rlx-pbanner-top p-relative">
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-showroom-portrait.webp"
                                    />
                                    <img
                                        alt="DEVOLUCIÓN DEL RELOJ"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-showroom-landscape.webp"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center pb-90-60">
                                <h2 className="headline50 c-brown-text pb-20">Un servicio de primer nivel</h2>
                                <p className="body-20-light">
                                    Rolex se compromete plenamente a ofrecerles a sus clientes un servicio posventa de primer nivel. Gracias a la exigencia y al savoir‑faire de nuestros relojeros, su reloj Rolex puede mantenerse en el tiempo conservando una excelente fiabilidad y, al mismo tiempo, un brillo irreprochable.
                                </p>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-sav-barcelona-tousrolexboutique-portrait.webp"
                                    />
                                    <img
                                        alt="Un servicio de primer nivel"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-sav-barcelona-tousrolexboutique-landscape.webp"
                                    />
                                </picture>
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-manippos-2002pd-portrait.webp"
                                    />
                                    <img
                                        alt="Datejust"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-manippos-2002pd-landscape.webp"
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

export default Mantenimiento;