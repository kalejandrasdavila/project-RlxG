import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async'; // Correct import for react-helmet-async
import useInitScripts from '../hooks/useInitScripts'; // Assuming this is a custom hook
import Nav from '../parts/Nav';
import RlxExploreMas from '../parts/RlxExploreMas';
import useHorario from '../hooks/ContactoRlx';
import Footer from '../parts/Footer';

interface Horario {
    horario: string;
    isOpen: boolean;
    toggleHorario: () => void;
}

const Contactenos: React.FC = () => {
    useInitScripts();

    // Assuming useHorario is a custom hook that returns horario, isOpen, and a toggle function.
    const { horario, isOpen, toggleHorario }: Horario = useHorario();

    return (
        <>
            <Helmet>
                <title>Contacto GLAUSER en Colombia - Distribuidor Oficial Rolex</title>
                <meta
                    name="description"
                    content="Contacto GLAUSER en Colombia, su Distribuidor Oficial Rolex. Programe una cita o envíenos un mensaje para responder a todas sus dudas sobre Rolex y los servicios ofrecidos."
                />
                {/* VTEX IO: Avoid dangerouslySetInnerHTML for VTEX-specific meta tags. Use VTEX IO blocks or render-runtime components instead. */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* VTEX IO: Consider managing CSS via manifest.json or CSS Modules instead of direct <link> tags. */}
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://www.glauser.com.co/files/style.min.css"
                />
                {/* It's better to choose one Swiper CSS link */}
                <link rel="stylesheet preload" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
                {/* VTEX IO: Loading Swiper and jQuery via <script> tags is generally NOT recommended. Use import or VTEX IO's dependency management. */}
                {/* <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script> */}
                {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> */}
                {/* <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script> */}

                <link rel="canonical" href="https://www.glauser.com.co/rolex/contactenos/" />

                {/* Facebook Meta Tags */}
                <meta property="og:url" content="https://www.glauser.com.co/rolex/contactenos/" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Contacto GLAUSER en Colombia - Distribuidor Oficial Rolex"
                />
                <meta
                    property="og:description"
                    content="Contacto GLAUSER en Colombia, su Distribuidor Oficial Rolex. Programe una cita o envíenos un mensaje para responder a todas sus dudas sobre Rolex y los servicios ofrecidos."
                />
                <meta
                    property="og:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-hub-cover-m126333-0010-portrait.webp"
                />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.glauser.com.co/rolex/" />
                <meta
                    name="twitter:title"
                    content="Contacto GLAUSER en Colombia - Distribuidor Oficial Rolex"
                />
                <meta
                    name="twitter:description"
                    content="Contacto GLAUSER en Colombia, su Distribuidor Oficial Rolex. Programe una cita o envíenos un mensaje para responder a todas sus dudas sobre Rolex y los servicios ofrecidos."
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
                pageType: "store contact page"
              },
            };
          `}
                </script>

                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: `{
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
                  "@id": "https://www.glauser.com.co/rolex/contactenos/#webpage",
                  "url": "https://www.glauser.com.co/rolex/contactenos/",
                  "name": "Contacto GLAUSER en Colombia - Distribuidor Oficial Rolex",
                  "isPartOf": { "@id": "https://goldcenter.com.co/#website" },
                  "datePublished": "2025-04-01T05:23:53+00:00",
                  "dateModified": "2025-04-01T05:23:53+00:00",
                  "description": "Contacto GLAUSER en Colombia, su Distribuidor Oficial Rolex. Programe una cita o envíenos un mensaje para responder a todas sus dudas sobre Rolex y los servicios ofrecidos.",
                  "breadcrumb": { "@id": "https://www.glauser.com.co/rolex/contactenos/#breadcrumb" },
                  "inLanguage": "es-Es",
                  "potentialAction": [
                    { "@type": "ReadAction", "target": ["https://www.glauser.com.co/rolex/contactenos/"] }
                  ]
                }
              ]
            }`
                }}
                />

                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: `{
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
                  "name": "Póngase en contacto con nosotros"
                }
              ]
            }`
                }}
                />
            </Helmet>
            <div className="header-component">
                {/* VTEX IO: Use VTEX blocks for header elements, not <VTEXTemplate> directly in JSX. */}
                <header className="main-header" id="main-header">
                    {/* Header content */}
                </header>
            </div>
            <main id="rlx-html">
                <header id="rlx-menu" className="rlx-menu">
                    <div className="rlx-container">
                        <div className="row-grid">
                            <div className="rlx-logo">
                                <a href="http://localhost:3000/rolex/" aria-label="Inicio" title="Inicio">
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
                                        <a href="http://localhost:3000/rolex/coleccion-rolex/">
                                            Relojes Rolex
                                        </a>
                                    </li>
                                    <li className="fixed-14 active">
                                        <a className="active" href="https://www.glauser.com.co/rolex/contactenos/">Póngase en contacto con nosotros</a>
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/contacto/rolex-contact-cover-portrait.webp"
                                    />
                                    <img
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/contacto/rolex-contact-cover-landscape.webp"
                                        loading="lazy"
                                        alt="contacto"
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
                                    Contacto GLAUSER en Colombia, su Distribuidor Oficial Rolex
                                </h1>
                            </div>
                            <div className="col-lg-8-5">
                                <p className="body-20-light pb-30">
                                    <strong>
                                        Gracias al conocimiento, la destreza y el equipo necesarios para
                                        darle el mejor servicio, podemos garantizar la autenticidad de todas
                                        y cada una de las piezas de su Rolex.
                                    </strong>{" "}
                                    Déjenos ayudarle a tomar una decisión que durará toda la vida o a dar
                                    respuesta a sus consultas. Le rogamos que nos proporcione sus datos y
                                    su forma de contacto deseada, le responderemos lo más pronto posible.
                                </p>
                                <a
                                    className="btn-label-icon-rlx"
                                    href="https://www.glauser.com.co/rolex/contactenos/enviar-mensaje/">
                                    Envíenos un mensaje
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
                        <div className="row-grid-fullw-container mapa-and-detail component-video">
                            <div className="col-span-6-8-1">
                                <div id="mapssssss">
                                    <div>
                                        <iframe
                                            allowFullScreen
                                            className="gmap-google"
                                            loading="lazy"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11401.967090046808!2d-74.82355390810059!3d11.005367416503613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42c4d4b013871%3A0x9e7d19df67c28c32!2sJoyerias%20Glauser%20-%20Rolex%20Official%20Retailer!5e0!3m2!1ses!2smx!4v1636248698538!5m2!1ses!2smx"
                                            style={{
                                                border: "0",
                                                width: "100%",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-6-4-2 c-white-bg">
                                <div className="info-detail">
                                    <div className="mx-auto-rolex">
                                        <p className="legend-16-light c-brown-text">
                                            Distribuidor Oficial Rolex
                                        </p>
                                        <h2 className="headline30 c-brown-text">
                                            GLAUSER JOYERÍA Y RELOJERÍA
                                        </h2>
                                        <address className="parrafos-rolex address-store mb-20-30">
                                            <span className="fixed-16">
                                                Cl. 98 #52-115, Centro Comercial Buenavista I Local 126-127
                                            </span>
                                            <span className="fixed-16">Barranquilla</span>
                                            <span className="fixed-16">110111</span>
                                            <span className="fixed-16">Atlántico, Colombia</span>
                                        </address>
                                        <div className={`rolex-retailer-openinghours ${isOpen ? "is-open2" : ""}`}>
                                            <div
                                                className="rolex-retailer-openinghours-summary"
                                                onClick={toggleHorario}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <strong className="fixed-16" id="mensaje">
                                                    Abierto
                                                </strong>
                                                <span className="legend-16-light c-rolex-green-text" id="horarolex">
                                                    {horario}
                                                </span>
                                            </div>
                                            {isOpen && (
                                                <table>
                                                    <tbody>
                                                        <tr className="close-table" data-day-id="1">
                                                            <th>Lun</th>
                                                            <td>10:00am - 08:00pm</td>
                                                        </tr>
                                                        <tr data-day-id="2">
                                                            <th>Mar</th>
                                                            <td>10:00am - 08:00pm</td>
                                                        </tr>
                                                        <tr data-day-id="3">
                                                            <th>Mié</th>
                                                            <td>10:00am - 08:00pm</td>
                                                        </tr>
                                                        <tr data-day-id="4">
                                                            <th>Jue</th>
                                                            <td>10:00am - 08:00pm</td>
                                                        </tr>
                                                        <tr data-day-id="5">
                                                            <th>Vie</th>
                                                            <td>10:00am - 08:00pm</td>
                                                        </tr>
                                                        <tr data-day-id="6">
                                                            <th>Sáb</th>
                                                            <td>10:00am - 08:00pm</td>
                                                        </tr>
                                                        <tr data-day-id="0">
                                                            <th>Dom</th>
                                                            <td>11:00am - 04:00pm</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            )}
                                        </div>
                                        <div className="social-links-rolex">
                                            <a
                                                className="social-link button-label"
                                                href="tel:+57 313 2841334"
                                                onClick={() => window._satellite?.track('contactCall')}
                                                rel="noopener"
                                                target="_blank">
                                                <i className="fas">
                                                    <svg
                                                        height="36px"
                                                        version="1.1"
                                                        viewBox="0 0 36 36"
                                                        width="36px"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink">
                                                        <g
                                                            fill="none"
                                                            fillRule="evenodd"
                                                            id="phone-default"
                                                            stroke="none"
                                                            strokeWidth="1">
                                                            <circle cx="18" cy="18" fill="#F9F7F4" id="Oval" r="18" />
                                                            <path
                                                                d="M15.9763138,16.3148829 L15.9229709,16.3348865 C16.2830355,17.6017807 17.0098327,19.0620429 18.4300877,20.3889478 L18.5367735,20.2955977 C19.0902062,19.8088437 19.9103535,19.7088257 20.3704361,20.0755582 L21.1772477,20.7890197 C21.6239946,21.1490843 21.6106588,21.7891993 21.0905654,22.2826212 C20.8105152,22.6093465 18.8034881,24.6630486 15.76961,19.8821902 C12.5890389,14.841285 14.5027158,13.4610372 15.329531,13.1143082 C15.3428667,13.1076404 15.3562024,13.1076404 15.3695382,13.1009725 C15.3895417,13.0943046 15.4162132,13.0876368 15.4362168,13.0743011 C15.4428847,13.0743011 15.4562204,13.0676332 15.4628882,13.0676332 C15.5829098,13.027626 15.6562563,13.0142903 15.6562563,13.0142903 C15.6562563,13.0142903 15.6562563,13.0142903 15.6562563,13.0209581 C16.2030211,12.9209402 16.649768,13.1876547 16.8164646,13.6344016 C16.8164646,13.6344016 17.5699333,15.9014754 15.9763138,16.3148829 Z"
                                                                fill="#452C1E"
                                                                fillRule="nonzero"
                                                                id="Path"
                                                            />
                                                        </g>
                                                    </svg>
                                                </i>
                                                <span className="text-mapita">+57 313 2841334</span>
                                            </a>
                                            <a
                                                className="social-link button-label"
                                                href="https://wa.me/573132841334?text=Hola%20GLAUSER%20Joyerías%20quisiera%20mas%20informaci%C3%B3n"
                                                onClick={() => window._satellite?.track('whatsappContact')}
                                                rel="noopener"
                                                target="_blank">
                                                <i className="fas">
                                                    <svg
                                                        height="36px"
                                                        version="1.1"
                                                        viewBox="0 0 36 36"
                                                        width="36px"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink">
                                                        <g
                                                            fill="none"
                                                            fillRule="evenodd"
                                                            id="whatsapp-default"
                                                            stroke="none"
                                                            strokeWidth="1">
                                                            <circle cx="18" cy="18" fill="#F9F7F4" id="Oval" r="18" />
                                                            <g
                                                                fill="#452C1E"
                                                                fillRule="nonzero"
                                                                id="whatsapp"
                                                                transform="translate(13, 13)">
                                                                <path
                                                                    d="M7.55395683,6.11510791 L15.9229709,16.3348865 C16.2830355,17.6017807 17.0098327,19.0620429 18.4300877,20.3889478 L18.5367735,20.2955977 C19.0902062,19.8088437 19.9103535,19.7088257 20.3704361,20.0755582 L21.1772477,20.7890197 C21.6239946,21.1490843 21.6106588,21.7891993 21.0905654,22.2826212 C20.8105152,22.6093465 18.8034881,24.6630486 15.76961,19.8821902 C12.5890389,14.841285 14.5027158,13.4610372 15.329531,13.1143082 C15.3428667,13.1076404 15.3562024,13.1076404 15.3695382,13.1009725 C15.3895417,13.0943046 15.4162132,13.0876368 15.4362168,13.0743011 C15.4428847,13.0743011 15.4562204,13.0676332 15.4628882,13.0676332 C15.5829098,13.027626 15.6562563,13.0142903 15.6562563,13.0142903 C15.6562563,13.0142903 15.6562563,13.0142903 15.6562563,13.0209581 C16.2030211,12.9209402 16.649768,13.1876547 16.8164646,13.6344016 C16.8164646,13.6344016 17.5699333,15.9014754 15.9763138,16.3148829 Z M10,4.96402878 C10,7.69784173 7.76978417,9.92805755 5.03597122,9.92805755 C4.24460432,9.92805755 3.38129496,9.71223022 2.6618705,9.35251799 L0,10 L0.71942446,7.3381295 C0.287769784,6.61870504 0.071942446,5.75539568 0.071942446,4.96402878 C0.071942446,2.23021583 2.30215827,0 5.03597122,0 C7.76978417,0 10,2.23021583 10,4.96402878 Z M9.0647482,4.89208633 C9.0647482,2.6618705 7.26618705,0.863309353 5.03597122,0.863309353 C2.8057554,0.863309353 1.00719424,2.6618705 1.00719424,4.89208633 C1.00719424,5.61151079 1.22302158,6.33093525 1.58273381,6.97841727 L1.65467626,7.12230216 L1.22302158,8.63309353 L2.8057554,8.27338129 L2.94964029,8.34532374 C3.66906475,8.70503597 4.31654676,8.92086331 5.03597122,8.92086331 C7.26618705,8.92086331 9.0647482,7.12230216 9.0647482,4.89208633 Z"
                                                                    id="Shape"
                                                                />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </i>
                                                <span className="text-mapita">WhatsApp</span>
                                            </a>
                                            <a
                                                className="social-link button-label"
                                                href="https://www.google.com/maps/dir//Joyerias+Glauser+-+Rolex+Official+Retailer,+Cl.+98+%2352-115+Centro+Comercial+Buenavista+I+Local+126-127,+Barranquilla,+Atl%C3%A1ntico,+Colombia/@11.008281,-74.821372,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8ef42c4d4b013871:0x9e7d19df67c28c32!2m2!1d-74.8213718!2d11.0082806?hl=es" // This is already a valid URL
                                                onClick={() => window._satellite?.track('getDirections')}
                                                rel="noopener"
                                                target="_blank">
                                                <i className="fas">
                                                    <svg
                                                        height="36px"
                                                        version="1.1"
                                                        viewBox="0 0 36 36"
                                                        width="36px"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink">
                                                        <g
                                                            fill="none"
                                                            fillRule="evenodd"
                                                            id="get-direction-default"
                                                            stroke="none"
                                                            strokeWidth="1">
                                                            <circle cx="18" cy="18" fill="#F9F7F4" id="Oval" r="18" />
                                                            <g
                                                                fill="#452C1E"
                                                                fillRule="nonzero"
                                                                id="icons/plus"
                                                                transform="translate(13, 13)">
                                                                <g id="location" transform="translate(0, -0)">
                                                                    <polygon
                                                                        id="Path"
                                                                        points="0 5.84666667 10 0 4.90666667 10 3.58666667 6.60666667"
                                                                    />
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </i>
                                                <span className="text-mapita">Cómo llegar</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <RlxExploreMas />
                <Footer />
            </main>
        </>
        // </HelmetProvider> {/* Close HelmetProvider if opened above */}
    );
};

export default Contactenos;