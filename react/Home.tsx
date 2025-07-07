import React from 'react'
import { Helmet } from "react-helmet-async";
import useInitScripts from './components/hooks/useInitScripts';
import Nav from './components/parts/Nav';
import RlxExploreMas from './components/parts/RlxExploreMas';
import Footer from './components/parts/Footer';

const Home: React.FC = () => {

  useInitScripts();

  return (
    <>
      <Helmet>
        <title>Distribuidor Oficial Rolex en Colombia - GLAUSER</title>
        <meta
          name="description"
          content="GLAUSER en Colombia se enorgullece de formar parte de la red mundial de Distribuidores Oficiales Rolex, autorizados para vender y realizar el mantenimiento de los relojes Rolex"
        />
        {/* Estos comentarios de Vtex se mantienen tal cual, ya que son directivas de VTEX. */}
        {/* <div dangerouslySetInnerHTML={{ __html: "<vtex:metaTags />" }} />
                <div dangerouslySetInnerHTML={{ __html: '<vtex:contentPlaceHolder id="Metatags" />' }} />
                <div dangerouslySetInnerHTML={{ __html: '<vtex:template id="GL-Favicon" />'}}/>*/}

        {/* Directiva de VTEX para metatags, se mantiene comentada como en el original. */}
        {/* <vtex.cmc:GLMetaTags /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        {/* Scripts externos que se cargan globalmente. */}
        <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

        <script src="https://assets.adobedtm.com/7e3b3fa0902e/7ba12da1470f/launch-73c56043319a-staging.min.js"></script>

        <link rel="canonical" href="http://localhost:3000/rolex/" />

        {/* Meta Tags para Facebook */}
        <meta property="og:url" content="https://www.glauser.com.co/rolex/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Distribuidor Oficial Rolex en Colombia - GLAUSER"
        />
        <meta
          property="og:description"
          content="GLAUSER en Colombia se enorgullece de formar parte de la red mundial de Distribuidores Oficiales Rolex, autorizados para vender y realizar el mantenimiento de los relojes Rolex"
        />
        <meta
          property="og:image"
          content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-watches-landscape.webp"
        />

        {/* Meta Tags para Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.glauser.com.co/rolex/" />
        <meta
          name="twitter:title"
          content="Distribuidor Oficial Rolex en Colombia - GLAUSER"
        />
        <meta
          name="twitter:description"
          content="GLAUSER en Colombia se enorgullece de formar parte de la red mundial de Distribuidores Oficiales Rolex, autorizados para vender y realizar el mantenimiento de los relojes Rolex"
        />
        <meta
          name="twitter:image"
          content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-watches-landscape.webp"
        />
        {/* Script de capa de datos digital (digitalDataLayer) */}
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
                       var digitalDataLayer = {
                    environment: {
                        environmentVersion: "V7",
                        coBrandedVersion: "Bespoke",
                    },
                    page: {
                        pageType: "home page"
                    },
                };
                    `}}
        />
        {/* Script JSON-LD para datos estructurados de Schema.org */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
                    {
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Organization",
                            "@id": "https://www.glauser.com.co/#organization",
                            "name": "Joyería Glauser",
                            "url": "https://www.glauser.com.co/",
                            "sameAs": ["https://www.facebook.com/JoyeriaGlauser/", "https://www.instagram.com/joyeriaglauser/?hl=es-la"],
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
                            "@id": "https://www.glauser.com.co/rolex/#webpage",
                            "url": "https://www.glauser.com.co/rolex/",
                            "name": "Distribuidor Oficial Rolex en Colombia - GLAUSER",
                            "isPartOf": { "@id": "https://www.glauser.com.co/#website" },
                            "datePublished": "2024-04-10T05:23:53+00:00",
                            "dateModified": "2024-04-10T05:23:53+00:00",
                            "description": "GLAUSER en Colombia se enorgullece de formar parte de la red mundial de Distribuidores Oficiales Rolex, autorizados para vender y realizar el mantenimiento de los relojes Rolex",
                            "breadcrumb": { "@id": "https://www.glauser.com.co/rolex/#breadcrumb" },
                            "inLanguage": "es-Es",
                            "potentialAction": { "@type": "ReadAction", "target": "https://www.glauser.com.co/rolex/" }
                        }
                    ]
                    }
                `}}
        />
      </Helmet>
      <div className="header-component">
        {/* Componentes comentados en el original, se mantienen así. */}
        {/*<HeaderPromotion />*/}
        {/* <GLHeader />*/}
        <header className="main-header" id="main-header">
          {/*<MainNav />*/}
        </header>
      </div>
      <main id="rlx-html" className="home-rlx">
        <header id="rlx-menu" className="rlx-menu">
          <div className="rlx-container">
            <div className="row-grid">
              <div className="rlx-logo">
                <a href="/rolex/" aria-label="Inicio" title="Inicio">
                  <picture className="placa-rolex-logo">
                    <source media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/logo-plecas/Rolex-retailer-plaque-240x120_en.jpg" />
                    <img
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/logo-plecas/Rolex-retailer-plaque-240x120_en.jpg"
                      loading="lazy" alt="placa distribuidor oficial rolex" />
                  </picture>
                </a>
              </div>
              <Nav />
            </div>
          </div>
        </header>
        <section className="rlx-exploremas rlx-banner-slider">
          <div
            className="swiper-container slider-home-principal"
            style={{
              height: "auto",
              width: "100%",
            }}>
            <div className="swiper-wrapper">
              <div className="swiper-slide row-grid-fullw">
                <div className="slide-content banner-text-absolute2">
                  <span className="headline26 c-white-text">Rolex</span>
                  <p className="headline70 c-white-text pb-20">Sea-Dweller</p>
                  <a
                    className="btn-primary-rlx"
                    href="https://www.glauser.com.co/rolex/watches/sea-dweller/">
                    Descubra más
                  </a>
                </div>
                <div className="slider-image-6-12">
                  <a href="http://localhost:3000/rolex/watches/sea-dweller/">
                    <picture className="banner-10">
                      <source
                        media="(max-width: 767px)"
                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-sea-dweller-mar-25-portrait.webp"
                      />
                      <img
                        alt="Relojes Rolex Sea-Dweller"
                        loading="lazy"
                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-sea-dweller-mar-25-landscape.webp"
                      />
                    </picture>
                  </a>
                </div>
              </div>
              <div className="swiper-slide row-grid-fullw">
                <div className="slide-content banner-text-absolute2">
                  <span className="headline26 c-dark-text">Rolex y la hípica</span>
                  <p className="headline70 pb-20 c-dark-text">
                    Rolex Grand Slam of Show Jumping
                  </p>
                  <a
                    className="btn-primary-rlx"
                    href="https://www.glauser.com.co/rolex/mundo-rolex/grand-slam-of-show-jumping/">
                    Descubra más
                  </a>
                </div>
                <div className="slider-image-6-12">
                  <a href="http://localhost:3000/rolex/mundo-rolex/grand-slam-of-show-jumping/">
                    <picture className="banner-10">
                      <source
                        media="(max-width: 767px)"
                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-rolex-grand-slam-of-show-jumping-portrait.webp"
                      />
                      <img
                        alt="Rolex Grand Slam of Show Jumping"
                        loading="lazy"
                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-rolex-grand-slam-of-show-jumping-portrait-landscape.webp"
                      />
                    </picture>
                  </a>
                </div>
              </div>
              <div className="swiper-slide row-grid-fullw">
                <div className="slide-content banner-text-absolute2">
                  <p className="headline26">Rolex y el «savoir‑faire» relojero</p>
                  <p className="headline70 pb-20">Excelencia en desarrollo</p>
                  <a
                    className="btn-primary-rlx"
                    href="https://www.glauser.com.co/rolex/watchmaking/">
                    Descubra más
                  </a>
                </div>
                <div className="slider-image-6-12">
                  <a href="http://localhost:3000/rolex/watchmaking/">
                    <picture className="banner-10">
                      <source
                        media="(max-width: 767px)"
                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-watchmaking-home-portrait.webp"
                      />
                      <img
                        alt="Rolex Watchmaking"
                        loading="lazy"
                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-watchmaking-home-landscape.webp"
                      />
                    </picture>
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-pagination-home swiper-pagination-clickable swiper-pagination-bullets">
              {/* tabIndex debe ser un número */}
              <span
                aria-label="Ir a la diapositiva 1"
                className="swiper-pagination-bullet swiper-pagination-bullet-active"
                role="button"
                tabIndex={0}
              />
              <span
                aria-label="Ir a la diapositiva 2"
                className="swiper-pagination-bullet"
                role="button"
                tabIndex={0}
              />
              <span
                aria-label="Ir a la diapositiva 3"
                className="swiper-pagination-bullet"
                role="button"
                tabIndex={0}
              />
            </div>
            {/*<!-- Si necesitamos paginación -->*/}
            <div className="swiper-pagination"></div>
            {/*<!-- Si necesitamos botones de navegación -->*/}
            <div className="swiper-button-prev principal-prev"></div>
            <div className="swiper-button-next principal-next"></div>
          </div>
        </section>
        <section className="c-lightbeige-bg">
          <div className="rlx-container-content py-90-60">
            <div className="row-grid-fullw text-introduccion pb-90-60">
              <div className="col-lg-2-5">
                <h1 className="headline50 c-brown-text pb-20">
                  Bienvenido a GLAUSER Distribuidor Oficial Rolex en Colombia
                </h1>
              </div>
              <div className="col-lg-8-5">
                <p className="body-20-light">
                  <strong>
                    GLAUSER se enorgullece de formar parte de la red mundial de
                    Distribuidores Oficiales Rolex,
                  </strong>{" "}
                  los únicos autorizados para vender y realizar el mantenimiento de
                  los relojes Rolex.
                </p>
              </div>
            </div>
            <div className="row-grid-fullw component-video">
              <div className="col-6-12">
                <h2 className="headline36 c-brown-text pb-20">Relojes Rolex</h2>
                <a href="/rolex/coleccion-rolex/">
                  <picture className="rlx-pbanner-top p-relative">
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-watches-portrait.webp"
                    />
                    <img
                      alt="Colección Rolex"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-watches-landscape.webp"
                    />
                  </picture>
                </a>
              </div>
            </div>
            <div className="row-grid-fullw component-2-col pb-90-60">
              <div className="col-lg-2-6 pb-50-0">
                <div className="pt-10">
                  <p className="fixed-16 c-brown-text">Encuentre su Rolex</p>
                  <h3 className="headline36 c-brown-text">
                    Descubra las colecciones Rolex
                  </h3>
                  <a
                    className="btn-label-icon-rlx"
                    href="/rolex/coleccion-rolex/">
                    Más información
                    <svg

                      aria-hidden="true"
                      fill="white"
                      height="12"
                      role="img"
                      viewBox="0 0 15 15"
                      width="12"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.7,7.5l-1.4,1.4l-5.7,5.7l-1.4-1.4l5.7-5.7L3.3,1.9l1.4-1.4l5.7,5.7l0,0L11.7,7.5z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="row-grid-fullw component-2-col">
              <div className="col-lg-2-6">
                <h2 className="headline36 c-brown-text pb-20">
                  Póngase en contacto con nosotros
                </h2>
              </div>
            </div>
            <div className="row-grid-fullw component-video">
              <div className="col-6-12">
                <a href="/rolex/contactenos/enviar-mensaje/">
                  <picture className="rlx-pbanner-top p-relative">
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/contacto/rolex-contact-message-portrait.webp"
                    />
                    <img
                      alt="Contáctanos Rolex"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/contacto/rolex-contact-message-landscape.webp"
                    />
                  </picture>
                </a>
              </div>
            </div>
            <div className="row-grid-fullw component-2-col">
              <div className="col-lg-2-6 pb-50-0">
                <div className="pt-10">
                  <h3 className="headline36 c-brown-text">Enviar un mensaje</h3>
                  <a
                    className="btn-label-icon-rlx"
                    href="/rolex/contactenos/enviar-mensaje/"
                  >
                    Contáctenos
                    <svg

                      aria-hidden="true"
                      fill="white"
                      height="12"
                      role="img"
                      viewBox="0 0 15 15"
                      width="12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.7,7.5l-1.4,1.4l-5.7,5.7l-1.4-1.4l5.7-5.7L3.3,1.9l1.4-1.4l5.7,5.7l0,0L11.7,7.5z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="c-beige-bg">
          <div className="rlx-container-content py-90-60">
            <div className="row-grid-fullw component-2-col">
              <div className="col-lg-2-6">
                <h2 className="headline36 c-brown-text pb-20">Descubra Rolex</h2>
              </div>
            </div>
            <div className="row-grid-fullw component-3-col">
              <div className="col-6-2  pb-50-0">
                <a href="/rolex/mundo-rolex/">
                  <picture className="rlx-pbanner-top p-relative">
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-world-of-rolex-WIM23ac-portrait.webp"
                    />
                    <img
                      alt="Mundo Rolex"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-world-of-rolex-WIM23ac-landscape.webp"
                    />
                  </picture>
                </a>
                <div className="pt-10">
                  <p className="legend-16-light c-brown-text">
                    Un compromiso con la excelencia
                  </p>
                  <h3 className="body-24-bold c-brown-text">El mundo de Rolex</h3>
                  <a id="btnVolverArriba" className="legend-16-bold" onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}>
                    <svg
                      className="-rotate-90"
                      height="15"
                      width="15"
                      viewBox="0 0 15 15"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-hidden="true" // Mantén esto como true si el texto al lado ya describe su propósito
                      fill="white"
                    >
                      <path d="M15,3.5l-7.5,8.1L0,3.5"></path>
                    </svg>
                    Volver arriba
                  </a>
                </div>
              </div>
              <div className="col-6-6  pb-50-0">
                <a href="/rolex/watchmaking/">
                  <picture className="rlx-pbanner-top p-relative">
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-watchmaking-portrait.webp"
                    />
                    <img
                      alt="Rolex Watchmaking"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-watchmaking-landscape.webp"
                    />
                  </picture>
                </a>
                <div className="pt-10">
                  <p className="legend-16-light c-brown-text">
                    Excelencia en desarrollo
                  </p>
                  <h3 className="body-24-bold c-brown-text">
                    «Savoir-faire» relojero
                  </h3>
                  <a
                    className="btn-label-icon-rlx"
                    href="/rolex/watchmaking/">
                    Más información
                    <svg
                      aria-hidden="true"
                      fill="white"
                      height="12"
                      role="img"
                      viewBox="0 0 15 15"
                      width="12"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.7,7.5l-1.4,1.4l-5.7,5.7l-1.4-1.4l5.7-5.7L3.3,1.9l1.4-1.4l5.7,5.7l0,0L11.7,7.5z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="col-6-10">
                <a href="/rolex/asistencia-rolex/">
                  <picture className="rlx-pbanner-top p-relative">
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-servicing-portrait.webp"
                    />
                    <img
                      alt="Mantenimiento Rolex"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-servicing-landscape.webp"
                    />
                  </picture>
                </a>
                <div className="pt-10">
                  <p className="legend-16-light c-brown-text">
                    Nuestra filosofía del mantenimiento
                  </p>
                  <h3 className="body-24-bold c-brown-text">Mantenimiento</h3>
                  <a
                    className="btn-label-icon-rlx"
                    href="/rolex/asistencia-rolex/">
                    Más información
                    <svg

                      aria-hidden="true"
                      fill="white"
                      height="12"
                      role="img"
                      viewBox="0 0 15 15"
                      width="12"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.7,7.5l-1.4,1.4l-5.7,5.7l-1.4-1.4l5.7-5.7L3.3,1.9l1.4-1.4l5.7,5.7l0,0L11.7,7.5z"></path>
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

export default Home
