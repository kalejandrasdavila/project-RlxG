import React from 'react';
import { Helmet } from 'react-helmet-async';
import useInitScripts from '../hooks/useInitScripts';
import Nav from '../parts/Nav';
import RlxExploreMas from '../parts/RlxExploreMas';
import Footer from '../parts/Footer';

const ColeccionRlx: React.FC = () => {
  useInitScripts();

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://www.glauser.com.co/rolex/coleccion-rolex/';
  const baseUrl = 'https://www.glauser.com.co';
  return (
    <>
      <Helmet>
        <title>Relojes Rolex en Colombia - GLAUSER</title>
        <meta
          name="description"
          content="Descubra los relojes Rolex en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y mujer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://www.glauser.com.co/files/style.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://glauser.vteximg.com.br/arquivos/style-rolex-general-glauser.css"
        />
        <link rel="stylesheet preload" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

        <link rel="canonical" href={currentUrl} />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Relojes Rolex en Colombia - GLAUSER"
        />
        <meta
          property="og:description"
          content="Descubra los relojes Rolex en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y mujer."
        />
        <meta
          property="og:image"
          content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-hub-cover-m126333-0010-portrait.webp"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={currentUrl} />
        <meta
          name="twitter:title"
          content="Relojes Rolex en Colombia - GLAUSER"
        />
        <meta
          name="twitter:description"
          content="Descubra los relojes Rolex en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y mujer."
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
                pageType: "collection page"
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
                "name": "Relojes Rolex en Colombia - GLAUSER",
                "isPartOf": { "@id": `${baseUrl}/#website` },
                "datePublished": "2025-04-01T05:23:53+00:00",
                "dateModified": "2025-04-01T05:23:53+00:00",
                "description": "Descubra los relojes Rolex en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y mujer.",
                "breadcrumb": {
                  "@id": `${currentUrl}#breadcrumb`
                },
                "inLanguage": "es-Es",
                "potentialAction": [
                  {
                    "@type": "ReadAction",
                    "target": [currentUrl]
                  }
                ]
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
                "name": "Relojes Rolex"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="header-component">
        <header className="main-header" id="main-header">
          {/* Aquí puedes renderizar un componente de navegación personalizado si no usas Nav directamente */}
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
                    <a href="/rolex/">Rolex</a>
                  </li>
                  <li className="fixed-14 active">
                    <a className="active" href="/rolex/coleccion-rolex/">Relojes Rolex</a>
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
                    srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-hub-cover-m126333-0010-portrait.webp"
                  />
                  <img
                    alt="Reloj Rolex"
                    loading="lazy"
                    src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-hub-cover-m126333-0010-landscape.webp"
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
                  Relojes Rolex en GLAUSER en Colombia
                </h1>
              </div>
              <div className="col-lg-8-5">
                <p className="body-20-light">
                  <strong>
                    Esta selección de modelos Rolex proviene del catálogo oficial y no
                    representa las existencias disponibles en la joyería.
                  </strong>{" "}
                  Si quiere realizar una consulta sobre algún reloj en particular, no
                  dude en ponerse en contacto con nosotros.
                </p>
              </div>
            </div>
            <div className="row-grid-fullw component-video">
              <div className="col-6-12">
                <h2 className="headline36 c-brown-text pb-20">Nuevos modelos 2025</h2>
                <a href="/rolex/nuevos-modelos-2025/">
                  <picture className="rlx-pbanner-top p-relative">
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-2025-the-land-dweller-m127334-0001-portrait.webp"
                    />
                    <img
                      alt="Nuevos Modelos Rolex 2025"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-2025-the-land-dweller-m127334-0001-landscape.webp"
                    />
                  </picture>
                </a>
              </div>
            </div>
            <div className="row-grid-fullw component-2-col pb-90-60">
              <div className="col-lg-2-6 pb-50-0">
                <div className="pt-10">
                  <p className="fixed-16 c-brown-text">Nuevos modelos 2025</p>
                  <h3 className="headline36 c-brown-text">Ampliar horizontes</h3>
                  <a
                    className="btn-label-icon-rlx"
                    href="/rolex/nuevos-modelos-2025/">
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
            <div className="row-grid-fullw component-2-col">
              <div className="col-lg-2-6">
                <h2 className="headline36 c-brown-text pb-20">Relojes clásicos</h2>
              </div>
            </div>
            <div className="row-grid-fullw component-3-col-2 pb-90-60">
              <div className="col-span-2-1 col-6-2 pb-50-0">
                <a href="/rolex/watches/land-dweller/">
                  <picture className="rlx-pbanner-top p-relative">
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-land-dweller-2025-portrait.webp"
                    />
                    <img
                      alt="Rolex Land-Dweller"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-land-dweller-2025-landscape.webp"
                    />
                  </picture>
                </a>
                <div className="pt-10">
                  <p className="legend-16-light c-brown-text">Rolex</p>
                  <h3 className="body-24-bold c-brown-text">Land-Dweller</h3>
                </div>
              </div>
              <div className="col-span-2-2 col-6-6 pb-50-0">
                <a href="/rolex/watches/day-date/">
                  <picture className="rlx-pbanner-top p-relative">
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-day-date-portrait.webp"
                    />
                    <img
                      alt="Rolex Day-Date"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-day-date-landscape.webp"
                    />
                  </picture>
                </a>
                <div className="pt-10">
                  <p className="legend-16-light c-brown-text">Rolex</p>
                  <h3 className="body-24-bold c-brown-text">Day-Date</h3>
                </div>
              </div>
              <div className="col-span-2-1 col-6-10">
                <a href="/rolex/watches/sky-dweller/">
                  <picture className="rlx-pbanner-top p-relative">
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-sky-dweller-portrait.webp"
                    />
                    <img
                      alt="Rolex Sky-Dweller"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-sky-dweller-landscape.webp"
                    />
                  </picture>
                </a>
                <div className="pt-10">
                  <p className="legend-16-light c-brown-text">Rolex</p>
                  <h3 className="body-24-bold c-brown-text">Sky-Dweller</h3>
                </div>
              </div>
              <div className="col-span-2-2 col-6-2 pb-50-0">
                <a href="/rolex/watches/lady-datejust/">
                  <picture className="rlx-pbanner-top p-relative">
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-lady-datejust-portrait.webp"
                    />
                    <img
                      alt="Rolex Lady-Datejust"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-lady-datejust-landscape.webp"
                    />
                  </picture>
                </a>
                <div className="pt-10">
                  <p className="legend-16-light c-brown-text">Rolex</p>
                  <h3 className="body-24-bold c-brown-text">Lady-Datejust</h3>
                </div>
              </div>
              <div className="col-span-2-1 col-6-6">
                <a href="/rolex/watches/datejust/">
                  <picture className="rlx-pbanner-top p-relative">
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-datejust-portrait.webp"
                    />
                    <img
                      alt="Rolex Datejust"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-datejust-landscape.webp"
                    />
                  </picture>
                </a>
                <div className="pt-10">
                  <p className="legend-16-light c-brown-text">Rolex</p>
                  <h3 className="body-24-bold c-brown-text">Datejust</h3>
                </div>
              </div>
              <div className="col-span-2-1 col-6-10">
                <a href="/rolex/watches/oyster-perpetual/">
                  <picture className="rlx-pbanner-top p-relative">
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-oyster-perpetual-2025-portrait.webp"
                    />
                    <img
                      alt="Rolex Oyster Perpetual"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-oyster-perpetual-2025-landscape.webp"
                    />
                  </picture>
                </a>
                <div className="pt-10">
                  <p className="legend-16-light c-brown-text">Rolex</p>
                  <h3 className="body-24-bold c-brown-text">Oyster Perpetual</h3>
                </div>
              </div>
            </div>
            <div className="row-grid-fullw component-2-col">
              <div className="col-lg-2-6">
                <h2 className="headline36 c-brown-text pb-20">Relojes profesionales</h2>
              </div>
            </div>
            <div className="row-grid-fullw component-3-col-2 pb-90-60">
              <div className="col-span-2-1 col-6-2 pb-50-0">
                <a href="/rolex/watches/cosmograph-daytona/">
                  <picture className="rlx-pbanner-top p-relative">
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-cosmograph-daytona-2025-portrait.webp"
                    />
                    <img
                      alt="Rolex Cosmograph Daytona"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-cosmograph-daytona-2025-landscape.webp"
                    />
                  </picture>
                </a>
                <div className="pt-10">
                  <p className="legend-16-light c-brown-text">Rolex</p>
                  <h3 className="body-24-bold c-brown-text">Cosmograph Daytona</h3>
                </div>
              </div>
              <div className="col-span-2-2 col-6-6 pb-50-0">
                <a href="/rolex/watches/submariner/">
                  <picture className="rlx-pbanner-top p-relative">
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-submariner-portrait.webp"
                    />
                    <img
                      alt="Rolex Submariner"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-submariner-landscape.webp"
                    />
                  </picture>
                </a>
                <div className="pt-10">
                  <p className="legend-16-light c-brown-text">Rolex</p>
                  <h3 className="body-24-bold c-brown-text">Submariner</h3>
                </div>
              </div>
              <div className="col-span-2-1 col-6-10">
                <a href="/rolex/watches/sea-dweller/">
                  <picture className="rlx-pbanner-top p-relative">
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-sea-dweller-portrait.webp"
                    />
                    <img
                      alt="Rolex Sea-Dweller"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-sea-dweller-landscape.webp"
                    />
                  </picture>
                </a>
                <div className="pt-10">
                  <p className="legend-16-light c-brown-text">Rolex</p>
                  <h3 className="body-24-bold c-brown-text">Sea-Dweller</h3>
                </div>
              </div>
              <div className="col-span-2-2 col-6-2 pb-50-0">
                <a href="/rolex/watches/deepsea/">
                  <picture className="rlx-pbanner-top p-relative">
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-deepsea-portrait.webp"
                    />
                    <img
                      alt="Rolex Deepsea"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-deepsea-landscape.webp"
                    />
                  </picture>
                </a>
                <div className="pt-10">
                  <p className="legend-16-light c-brown-text">Rolex</p>
                  <h3 className="body-24-bold c-brown-text">Deepsea</h3>
                </div>
              </div>
              <div className="col-span-2-1 col-6-6 pb-50-0">
                <a href="/rolex/watches/gmt-master-ii/">
                  <picture className="rlx-pbanner-top p-relative">
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-gmt-master-ii-portrait.webp"
                    />
                    <img
                      alt="Rolex GMT-Master II"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-gmt-master-ii-landscape.webp"
                    />
                  </picture>
                </a>
                <div className="pt-10">
                  <p className="legend-16-light c-brown-text">Rolex</p>
                  <h3 className="body-24-bold c-brown-text">GMT-Master II</h3>
                </div>
              </div>
              <div className="col-span-2-2 col-6-10">
                <a href="/rolex/watches/yacht-master/">
                  <picture className="rlx-pbanner-top p-relative">
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-yacht-master-portrait.webp"
                    />
                    <img
                      alt="Rolex Yacht-Master"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-yacht-master-landscape.webp"
                    />
                  </picture>
                </a>
                <div className="pt-10">
                  <p className="legend-16-light c-brown-text">Rolex</p>
                  <h3 className="body-24-bold c-brown-text">Yacht-Master</h3>
                </div>
              </div>
              <div className="col-span-2-1 col-6-2">
                <a href="/rolex/watches/explorer/">
                  <picture className="rlx-pbanner-top p-relative">
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-explorer-2025-portrait.webp"
                    />
                    <img
                      alt="Rolex Explorer"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-explorer-2025-landscape.webp"
                    />
                  </picture>
                </a>
                <div className="pt-10">
                  <p className="legend-16-light c-brown-text">Rolex</p>
                  <h3 className="body-24-bold c-brown-text">Explorer</h3>
                </div>
              </div>
              <div className="col-span-2-2 col-6-6">
                <a href="/rolex/watches/air-king/">
                  <picture className="rlx-pbanner-top p-relative">
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-air-king-portrait.webp"
                    />
                    <img
                      alt="Rolex Air-king"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-air-king-landscape.webp"
                    />
                  </picture>
                </a>
                <div className="pt-10">
                  <p className="legend-16-light c-brown-text">Rolex</p>
                  <h3 className="body-24-bold c-brown-text">Air-King</h3>
                </div>
              </div>
            </div>
            <div className="row-grid-fullw component-2-col">
              <div className="col-lg-2-6">
                <h2 className="headline36 c-brown-text pb-20">Perpetual</h2>
              </div>
            </div>
            <div className="row-grid-fullw component-3-col-2">
              <div className="col-span-2-1 col-6-2 pb-50-0">
                <a href="/rolex/watches/1908/">
                  <picture className="rlx-pbanner-top p-relative">
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/rolex-watches-1908-2025-portrait.webp"
                    />
                    <img
                      alt="Rolex 1908"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-1908-2025-landscape.webp"
                    />
                  </picture>
                </a>
                <div className="pt-10">
                  <p className="legend-16-light c-brown-text">Rolex</p>
                  <h3 className="body-24-bold c-brown-text">1908</h3>
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
};

export default ColeccionRlx;