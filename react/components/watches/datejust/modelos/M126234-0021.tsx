import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useCssHandles } from 'vtex.css-handles';
import "../../../../main-style.css";
import useInitScripts from '../../../../components/hooks/useInitScripts';
import RlxExploreMasNModels from "../../../../components/parts/RlxExploreMasNModels";

import NavM from "../../../../components/parts/NavModels";

import WatchesForm from "../../../../components/parts/Rlx-watches-formulario";

import SectionDateJust from "../../../parts/SectionDateJust";
import Footer from '../../../../components/parts/Footer';


const M1262340021: React.FC = () => {

    useInitScripts();
    const [modelorlx, setModelorlx] = useState("");
    const [showPrice, setShowPrice] = useState<boolean>(false);
    const togglePrice = () => setShowPrice(prev => !prev);
    useEffect(() => {
        let pageTitle = document.title;
        let formattedTitle = pageTitle.includes("- GLAUSER")
            ? pageTitle.replace("- GLAUSER", "").trim()
            : pageTitle;

        setModelorlx(formattedTitle);

        const elemento = document.getElementById("mensajerlx") as HTMLInputElement | null;
        if (elemento) {
            elemento.value = `Me interesa ${formattedTitle}`;
        } else {
            console.error("No se encontrí el elemento con el ID 'mensajerlx'");
        }
    }, []);

    return (
        <>
            <Helmet>
                <title>Rolex Datejust 36 de Oyster, 36 mm, acero Oystersteel y oro blanco, m126234-0021 - GLAUSER</title>
                <meta
                    name="description"
                    content="Descubra el reloj Rolex Datejust 36 de Oyster, 36 mm, acero Oystersteel y oro blanco en GLAUSER, Distribuidor Oficial Rolex autorizado para vender y realizar el mantenimiento de los relojes Rolex"
                />
                {/* <div dangerouslySetInnerHTML={{ __html: "<vtex:metaTags />" }} />
                                                                                                        <div dangerouslySetInnerHTML={{ __html: '<vtex:contentPlaceHolder id="Metatags" />' }} />
                                                                                                        <div dangerouslySetInnerHTML={{ __html: '<vtex:template id="GL-Favicon" />' }} />*/}

                {/* <vtex.cmc:GLMetaTags /> */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://devjhernandez--glauser.myvtex.com/files/style.min.css"
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

                <link rel="canonical" href="https://devjhernandez--glauser.myvtex.com/rolex/watches/datejust/m126234-0021/" />

                {/* Facebook Meta Tags */}
                <meta property="og:url" content="https://devjhernandez--glauser.myvtex.com/rolex/watches/datejust/m126234-0021/" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Rolex Datejust 36 de Oyster, 36 mm, acero Oystersteel y oro blanco, m126234-0021 - GLAUSER"
                />
                <meta
                    property="og:description"
                    content="Descubra el reloj Rolex Datejust 36 de Oyster, 36 mm, acero Oystersteel y oro blanco en GLAUSER, Distribuidor Oficial Rolex autorizado para vender y realizar el mantenimiento de los relojes Rolex"
                />
                <meta
                    property="og:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126234-0021-drp-upright-bba-with-shadow-landscape.webp"
                />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://devjhernandez--glauser.myvtex.com/rolex/watches/datejust/m126234-0021/" />
                <meta
                    name="twitter:title"
                    content="Rolex Datejust 36 de Oyster, 36 mm, acero Oystersteel y oro blanco, m126234-0021 - GLAUSER"
                />
                <meta
                    name="twitter:description"
                    content="Descubra el reloj Rolex Datejust 36 de Oyster, 36 mm, acero Oystersteel y oro blanco en GLAUSER, Distribuidor Oficial Rolex autorizado para vender y realizar el mantenimiento de los relojes Rolex"
                />
                <meta
                    name="twitter:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126234-0021-drp-upright-bba-with-shadow-landscape.webp"
                />

                <script type="text/javascript">
                    {`
                        window.digitalDataLayer = {
                        environment: {
                            environmentVersion: "V7",
                            coBrandedVersion: "Bespoke"
                        },
                        page: {
                            pageType: "model page",
                            pageFamilyName: "datejust"
                        },
                        products: {
                            productRMC: "m126234-0021"
                        }
                        };
                    `}
                </script>
                <script type="application/ld+json">
                    {`
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Organization",
                                "@id": "https://devjhernandez--glauser.myvtex.com/#organization",
                                "name": "Joyería Glauser",
                                "url": "https://devjhernandez--glauser.myvtex.com/",
                                "sameAs": ["https://www.facebook.com/JoyeriaGlauser/", "https://www.instagram.com/joyeriaglauser/?hl=es-la"],
                                "logo": {
                                    "@type": "ImageObject",
                                    "@id": "https://devjhernandez--glauser.myvtex.com/#logo",
                                    "inLanguage": "es-CO",
                                    "url": "https://glauser.vteximg.com.br/arquivos/glauser_logo.svg",
                                    "contentUrl": "https://glauser.vteximg.com.br/arquivos/glauser_logo.svg",
                                    "width": 300,
                                    "height": 102,
                                    "caption": "Joyería Glauser"
                                },
                                "image": { "@id": "https://devjhernandez--glauser.myvtex.com/#logo" }
                            },
                            {
                                "@type": "WebPage",
                                "@id": "https://devjhernandez--glauser.myvtex.com/rolex/watches/datejust/m126234-0021/#webpage",
                                "url": "https://devjhernandez--glauser.myvtex.com/rolex/watches/datejust/m126234-0021/",
                                "name": "Rolex Datejust 36 de Oyster, 36 mm, acero Oystersteel y oro blanco, m126234-0021 - GLAUSER",
                                "isPartOf": { "@id": "https://devjhernandez--glauser.myvtex.com/#website" },
                                "datePublished": "2025-04-01T05:23:53+00:00",
                                "dateModified": "2025-04-01T05:23:53+00:00",
                                "description": "Descubra el reloj Rolex Datejust 36 de Oyster, 36 mm, acero Oystersteel y oro blanco en GLAUSER, Distribuidor Oficial Rolex autorizado para vender y realizar el mantenimiento de los relojes Rolex",
                                "breadcrumb": { "@id": "https://devjhernandez--glauser.myvtex.com/rolex/watches/datejust/m126234-0021/#breadcrumb" },
                                "inLanguage": "es-Es",
                                "potentialAction": [{ "@type": "ReadAction", "target": ["https://devjhernandez--glauser.myvtex.com/rolex/watches/datejust/m126234-0021/"] }]
                            }
                        ]
                   `}

                </script>
                <script type="application/ld+json">
                    {`
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "Datejust 36",
                        "image": [
                            "https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126234-0021-drp-upright-bba-with-shadow-landscape.webp"
                        ],
                        "description": "Descubra el reloj Rolex Datejust 36 de Oyster, 36 mm, acero Oystersteel y oro blanco en GLAUSER, Distribuidor Oficial Rolex autorizado para vender y realizar el mantenimiento de los relojes Rolex",
                        "sku": "m126234-0021",
                        "mpn": "126234",
                        "brand": {
                            "@type": "Brand",
                            "name": "Rolex"
                        },
                        "offers": {
                            "@type": "Offer",
                            "url": "https://devjhernandez--glauser.myvtex.com/rolex/watches/datejust/m126234-0021/",
                            "priceCurrency": "USD",
                            "price": "14000.00",
                            "priceValidUntil": "2025-04-01",
                            "itemCondition": "https://schema.org/NewCondition",
                            "availability": "https://schema.org/InStock"
                        }
                   `}

                </script>
                <script type="application/ld+json">
                    {`
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [{
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Rolex GLAUSER",
                            "item": "https://devjhernandez--glauser.myvtex.com/rolex/"
                        }, {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Relojes Rolex",
                            "item": "https://devjhernandez--glauser.myvtex.com/rolex/coleccion-rolex/"
                        }, {
                            "@type": "ListItem",
                            "position": 3,
                            "name": "Datejust",
                            "item": "https://devjhernandez--glauser.myvtex.com/rolex/watches/datejust/"
                        }, {
                            "@type": "ListItem",
                            "position": 4,
                            "name": "m126234-0021"
                        }
                        ]
                   `}

                </script>
                {/* SCRIPT DE PLAQUES DE ROLEX */}
                <script
                    type="text/javascript"
                    id="rlx-plaques"
                    data-dak="23971da36d9e181945b792b3ea05a39d"
                    src="https://static.rolex.com/rlx-plaques-v2/js/plaquespage.js"
                ></script>

                {/* ESTILOS INLINE */}
                <style type="text/css">
                    {`
                        .precio-disponibilidad .body-20-light.text-black-lg-white {
                        display: none;
                        }
                        .pageDisplay .precio-disponibilidad .body-20-light.text-black-lg-white {
                        display: inline;
                        }
                    `}
                </style>

            </Helmet>
            <div className="header-component">
                {/*<vtex:template id="HeaderPromotion" />
                                                                                            <vtex:template id="GLHeader" />*/ }
                <header className="main-header" id="main-header">
                    {/*<vtex:template id="MainNav" />*/}
                </header>
            </div>
            <main id="rlx-html">
                <header id="rlx-menu" className="rlx-menu">
                    <div className="rlx-container">
                        <div className="row-grid">
                            <div className="rlx-logo">
                                <a href="https://devjhernandez--glauser.myvtex.com/rolex/" aria-label="Inicio" title="Inicio">
                                    <picture className="placa-rolex-logo">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/logo-plecas/Rolex-retailer-plaque-240x120_en.jpg" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/logo-plecas/Rolex-retailer-plaque-240x120_en.jpg" loading="lazy" alt="placa distribuidor oficial rolex" />
                                    </picture>
                                </a>
                            </div>

                            <NavM />
                        </div>
                        <div
                            className="row-grid breadcrum-page"
                            style={{
                                height: "40px",
                            }}>
                            <div className="breadcrum-column">
                                <ul className="breadcrum-menu-list description">
                                    <li className="fixed-14 none-mobil">
                                        <a href="https://devjhernandez--glauser.myvtex.com/">Rolex</a>
                                    </li>
                                    <li className="fixed-14 none-mobil">
                                        <a href="https://devjhernandez--glauser.myvtex.com/rolex/coleccion-rolex/">
                                            Relojes Rolex
                                        </a>
                                    </li>
                                    <li className="fixed-14">
                                        <a className="active" href="https://devjhernandez--glauser.myvtex.com/rolex/watches/datejust/">Datejust</a>
                                    </li>
                                    <li className="fixed-14 none-mobil">
                                        <a
                                            className="active"
                                            href="https://devjhernandez--glauser.myvtex.com/rolex/watches/datejust/m126234-0021/">m126234-0021
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
                <section>
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw watch-model-titleimg">
                            <div className="col-6-4-3 pb-90-60">
                                <div className="centered-content">
                                    <h1 className="mb-10 rolex-detail">
                                        <span className="body-24-bold c-brown-text mb-10">Rolex </span>
                                        <span className="headline50 c-brown-text block mb-10">
                                            Datejust 36
                                        </span>
                                        <span className="body-20-light block block">
                                            Oyster, 36 mm, acero Oystersteel y oro blanco
                                        </span>
                                        <span className="body-20-light">m126234-0021</span>
                                    </h1>
                                    <div className="precio-disponibilidad text-black-lg-white postion-relative mb-10">
                                        <div className="body-20-light text-black-lg-white mb-10">
                                            $ 14,000 USD
                                            <svg
                                                className="icon-price-rlx text-black-lg-white ml-1"
                                                height="16"
                                                onClick={togglePrice}

                                                style={{
                                                    marginLeft: "10px",
                                                }}
                                                viewBox="0 0 512 512"
                                                width="16"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z" />
                                            </svg>
                                        </div>
                                        <div
                                            className="msg-price-rlx"
                                            id="priceshow"
                                            style={{
                                                display: "none",
                                            }}>
                                            <p className="body-20-light text-black">
                                                Precio de venta recomendado por Rolex, IVA incluido. Los
                                                precios pueden modificarse en cualquier momento sin previo
                                                aviso.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="info-detailed">
                                        <div className="social-links-rolex">
                                            <a
                                                className="social-link button-label"
                                                href="tel:+57 313 2841334"
                                                onClick={() => window._satellite?.track?.('contactCall')}

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
                                                            <circle
                                                                cx="18"
                                                                cy="18"
                                                                fill="#F9F7F4"
                                                                id="Oval"
                                                                r="18"
                                                            />
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
                                                onClick={() => window._satellite?.track?.('whatsappContact')}
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
                                                            <circle
                                                                cx="18"
                                                                cy="18"
                                                                fill="#F9F7F4"
                                                                id="Oval"
                                                                r="18"
                                                            />
                                                            <g
                                                                fill="#452C1E"
                                                                fillRule="nonzero"
                                                                id="whatsapp"
                                                                transform="translate(13, 13)">
                                                                <path
                                                                    d="M7.55395683,6.11510791 C7.55395683,6.25899281 7.55395683,6.4028777 7.48201439,6.47482014 C7.26618705,6.83453237 6.90647482,7.05035971 6.54676259,7.12230216 C6.18705036,7.1942446 5.89928058,7.12230216 5.53956835,6.97841727 C5.25179856,6.83453237 4.96402878,6.69064748 4.67625899,6.54676259 C4.17266187,6.18705036 3.66906475,5.75539568 3.30935252,5.25179856 C3.23741007,5.10791367 3.09352518,4.96402878 3.02158273,4.74820144 C2.87769784,4.5323741 2.8057554,4.24460432 2.73381295,4.02877698 C2.6618705,3.95683453 2.6618705,3.81294964 2.6618705,3.74100719 C2.6618705,3.38129496 2.8057554,3.02158273 3.09352518,2.8057554 C3.23741007,2.6618705 3.52517986,2.58992806 3.74100719,2.6618705 C3.95683453,2.8057554 4.02877698,3.09352518 4.10071942,3.30935252 C4.17266187,3.45323741 4.24460432,3.66906475 4.24460432,3.88489209 C4.24460432,4.02877698 4.10071942,4.24460432 3.95683453,4.31654676 C3.88489209,4.46043165 3.88489209,4.5323741 3.95683453,4.60431655 C4.31654676,5.25179856 4.89208633,5.75539568 5.53956835,5.97122302 C5.68345324,6.04316547 5.75539568,6.04316547 5.75539568,5.97122302 C5.89928058,5.82733813 6.04316547,5.53956835 6.18705036,5.4676259 C6.47482014,5.32374101 6.69064748,5.4676259 6.97841727,5.61151079 C7.1942446,5.75539568 7.48201439,5.89928058 7.55395683,6.11510791 Z M10,4.96402878 C10,7.69784173 7.76978417,9.92805755 5.03597122,9.92805755 C4.24460432,9.92805755 3.38129496,9.71223022 2.6618705,9.35251799 L0,10 L0.71942446,7.3381295 C0.287769784,6.61870504 0.071942446,5.75539568 0.071942446,4.96402878 C0.071942446,2.23021583 2.30215827,0 5.03597122,0 C7.76978417,0 10,2.23021583 10,4.96402878 Z M9.0647482,4.89208633 C9.0647482,2.6618705 7.26618705,0.863309353 5.03597122,0.863309353 C2.8057554,0.863309353 1.00719424,2.6618705 1.00719424,4.89208633 C1.00719424,5.61151079 1.22302158,6.33093525 1.58273381,6.97841727 L1.65467626,7.12230216 L1.22302158,8.63309353 L2.8057554,8.27338129 L2.94964029,8.34532374 C3.66906475,8.70503597 4.31654676,8.92086331 5.03597122,8.92086331 C7.26618705,8.92086331 9.0647482,7.12230216 9.0647482,4.89208633 Z"
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
                                                href="#contacto-rolex"
                                                rel="noopener">
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
                                                            id="mail-default"
                                                            stroke="none"
                                                            strokeWidth="1">
                                                            <circle
                                                                cx="18"
                                                                cy="18"
                                                                fill="#F9F7F4"
                                                                id="Oval"
                                                                r="18"
                                                            />
                                                            <g
                                                                fill="#452C1E"
                                                                fillRule="nonzero"
                                                                id="icons/plus"
                                                                transform="translate(13, 14)">
                                                                <g id="mail">
                                                                    <path
                                                                        d="M0,0 L10,0 L10,0.0666666667 L5.06666667,3.86666667 L0,0 Z M5.06666667,5.33333333 L0,1.53333333 L0,8 L10,8 L10,1.6 L5.06666667,5.33333333 Z"
                                                                        id="Shape"
                                                                    />
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </i>
                                                <span className="text-mapita">Enviar mensaje</span>
                                            </a>
                                            <a
                                                className="social-link button-label"
                                                href="https://devjhernandez--glauser.myvtex.com/rolex/contactenos/"
                                                onClick={() => window._satellite?.track?.('findStore')}
                                                rel="noopener">
                                                <i className="fas">
                                                    <svg
                                                        height="36px"
                                                        version="1.1"
                                                        viewBox="0 0 36 36"
                                                        width="36px"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/2000/xlink">
                                                        <g id="findstore-default">
                                                            <circle
                                                                className="st0"
                                                                cx="18"
                                                                cy="18"
                                                                fill="#F9F7F4"
                                                                id="Oval"
                                                                r="18"
                                                            />
                                                            <g id="findstore" transform="translate(13, 13)">
                                                                <path
                                                                    className="st1"
                                                                    d="M5.7,11.8c1.4-1.7,4.5-5.9,4.5-8.3c0-2.9-2.3-5.2-5.2-5.2s-5.2,2.3-5.2,5.2c0,2.4,3.2,6.6,4.5,8.3C4.7,12.2,5.3,12.2,5.7,11.8L5.7,11.8z M5,1.8c1,0,1.7,0.8,1.7,1.7S6,5.3,5,5.3S3.3,4.5,3.3,3.5S4.1,1.8,5,1.8z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </i>
                                                <span className="text-mapita">Encuíntranos</span>
                                            </a>
                                        </div>
                                    </div>
                                    <a
                                        className="btn-label-icon-rlx border-top-brown2"
                                        href="#disponibilidadmodelo">
                                        Disponibilidad de modelo
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
                            <div className="col-6-6-4 order-1-mob">
                                <div className="swiper swiper-container-mobile">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="swiper-slider">
                                                <picture className="rlx-pbanner-top p-relative">
                                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126234-0021-drp-upright-bba-with-shadow-portrait.webp" />
                                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126234-0021-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex Datejust m126234-0021 reloj" />
                                                </picture>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <picture className="rlx-pbanner-top p-relative">
                                                <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126234-0021-gallery1-portrait.webp" />
                                                <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126234-0021-gallery1-landscape.webp" loading="lazy" alt="Rolex Datejust m126234-0021 reloj galeria" />
                                            </picture>
                                        </div>
                                        <div className="swiper-slide">
                                            <picture className="rlx-pbanner-top p-relative">
                                                <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126234-0021-gallery2-portrait.webp" />
                                                <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126234-0021-gallery2-landscape.webp" loading="lazy" alt="Rolex Datejust m126234-0021 reloj galeria" />
                                            </picture>
                                        </div>
                                        <div className="swiper-slide">
                                            <picture className="rlx-pbanner-top p-relative">
                                                <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126234-0021-gallery3-portrait.webp" />
                                                <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126234-0021-gallery3-landscape.webp" loading="lazy" alt="Rolex Datejust m126234-0021 reloj galeria" />
                                            </picture>
                                        </div>
                                        <div className="swiper-slide">
                                            <picture className="rlx-pbanner-top p-relative">
                                                <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126234-0021-gallery4-portrait.webp" />
                                                <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126234-0021-gallery4-landscape.webp" loading="lazy" alt="Rolex Datejust m126234-0021 reloj galeria" />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="swiper-pagination swiper-pagination-model"></div>
                                    <div className="swiper-button-model-prev"></div>
                                    <div className="swiper-button-model-next"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg d-none-md">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw galeria-models">
                            <div className="span-3-1">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126234-0021-gallery1-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126234-0021-gallery1-landscape.webp" loading="lazy" alt="Rolex Datejust m126234-0021 reloj galeria" />
                                </picture>
                            </div>
                            <div className="span-3-2">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126234-0021-gallery2-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126234-0021-gallery2-landscape.webp" loading="lazy" alt="Rolex Datejust m126234-0021 reloj galeria" />
                                </picture>
                            </div>
                            <div className="span-3-3">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126234-0021-gallery3-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126234-0021-gallery3-landscape.webp" loading="lazy" alt="Rolex Datejust m126234-0021 reloj galeria" />
                                </picture>
                            </div>
                            <div className="span-3-4">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126234-0021-gallery4-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126234-0021-gallery4-landscape.webp" loading="lazy" alt="Rolex Datejust m126234-0021 reloj galeria" />
                                </picture>
                            </div>
                        </div>
                        <div id="lightbox" className="lightbox">
                            <span className="close-button">x</span>
                            <div className="lightbox-content">
                                <button id="prev-button" className="nav-button prev-button">&lt;</button>
                                <img id="lightbox-image" src="" alt="m126234-0021 reloj galeria" />
                                <button id="next-button" className="nav-button next-button">&gt;</button>
                            </div>
                            <div className="pagination-dots"></div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw component-2-col watck-key-selling alig-item-center">
                            <div className="col-lg-2-6">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/rolex-guarantee-retail-guarantee-card-portrait.webp" />
                                    <img
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/rolex-guarantee-retail-guarantee-card-landscape.webp"
                                        loading="lazy" alt="garantía Rolex" />
                                </picture>
                            </div>
                            <div className="col-lg-9-6">
                                <div className="accordion">
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <span className="body-24-bold c-brown-text">La garantía Rolex</span>
                                            <span className="icon-acordion c-brown-text">í</span>
                                        </div>
                                        <div className="accordion-content pb-30 active">
                                            <p className="body-20-light">Para garantizar la precisión y la fiabilidad de sus relojes, Rolex somete a cada
                                                reloj, tras el ensamblaje, a una serie de pruebas estrictas. Todos los nuevos relojes adquiridos en uno
                                                de los Distribuidores Oficiales de la marca incluyen una garantía internacional de cinco años. Cuando
                                                compra un Rolex, el Distribuidor Oficial rellena y deja registrada la fecha en la tarjeta de garantía
                                                Rolex, que certifica la autenticidad de su reloj.</p>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <span className="body-24-bold c-brown-text">El sello verde</span>
                                            <span className="icon-acordion c-brown-text">+</span>
                                        </div>
                                        <div className="accordion-content pb-30">
                                            <p className="body-20-light">La garantía de cinco años que se aplica a todos los modelos Rolex viene
                                                acompañada de un sello verde, un símbolo de su estatus de Cronímetro Superlativo. Esta exclusiva
                                                certificación da fe de que el reloj ha superado con éxito una serie de controles finales específicos
                                                llevados a cabo por Rolex en sus propios laboratorios y segín sus propios criterios, como complemento de
                                                la certificación oficial COSC de su movimiento.</p>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <span className="body-24-bold c-brown-text">Estuche Rolex</span>
                                            <span className="icon-acordion c-brown-text">+</span>
                                        </div>
                                        <div className="accordion-content pb-30">
                                            <p className="body-20-light">Todos los relojes Rolex se entregan en un precioso estuche verde que protege y
                                                guarda la joya que anida en su interior. Además, el estuche simboliza igualmente el acto de regalar. Por
                                                ello, si usted quiere obsequiar a alguien con un Rolex, es importante que lo primero que vea el
                                                destinatario está a la altura de su contenido.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg c-beige-mobile">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw watch-caracteristicas cuerpotexto dispmodel">
                            <div className="row-grid-6-12-7 pt-90-60 cuerpotextobeigebg">
                                <div className="col-3-5-3-1">
                                    <ul className="list-especification-model-rlx">
                                        <li>
                                            <span className="body-20-bold block">Referencia</span>
                                            <span className="body-20-light">126234</span>
                                        </li>
                                        <li>
                                            <span className="body-20-bold block">Modelo caja</span>
                                            <span className="body-20-light">Oyster, 36 mm, acero Oystersteel y oro blanco</span>
                                        </li>
                                        <li>
                                            <span className="body-20-bold block">Hermetecidad</span>
                                            <span className="body-20-light">Hermítico hasta 100 metros/ 330 pies</span>
                                        </li>
                                        <li>
                                            <span className="body-20-bold block">Bisel</span>
                                            <span className="body-20-light">Estriado</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-3-5-3-2">
                                    <ul className="list-especification-model-rlx ">
                                        <li>
                                            <span className="body-20-bold block">Diímetro</span>
                                            <span className="body-20-light">36 mm</span>
                                        </li>
                                        <li>
                                            <span className="body-20-bold block">Brazalete</span>
                                            <span className="body-20-light">Jubilee, eslabones de cinco elementos</span>
                                        </li>
                                        <li>
                                            <span className="body-20-bold block">Movimiento</span>
                                            <span className="body-20-light">Perpetual, mecúnico, de cuerda automática</span>
                                        </li>
                                        <li>
                                            <span className="body-20-bold block">Calibre</span>
                                            <span className="body-20-light">3235, Manufactura Rolex</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-3-5-3-3">
                                    <ul className="list-especification-model-rlx ">
                                        <li>
                                            <span className="body-20-bold block">Esfera</span>
                                            <span className="body-20-light">íAubergineí engastada de diamantes</span>
                                        </li>
                                        <li>
                                            <span className="body-20-bold block">Reserva de marcha</span>
                                            <span className="body-20-light">Aproximadamente 70 horas</span>
                                        </li>
                                        <li>
                                            <span className="body-20-bold block">Certificaciín</span>
                                            <span className="body-20-light">Cronímetro superlativo (COSC + certificación Rolex tras el ensamblaje)</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6-12-7 border-top-brown p-relative" style={{ marginTop: "30px" }}>
                                    <div className="p-absolutes">
                                        <a href="https://assets.rolex.com/api/brochure/es/datejust/m126234-0021.pdf" target="_blank" className="btn-primary-icon-rlx">
                                            <svg height="12" width="12" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" fill="white">
                                                <path d="M15,10v5h-1h-1H2H0v-2v-3h2v3h11v-3H15z M5.5,9.5l2,2l2-2l2-2h-3V0H8H7H6.5v7.5h-3L5.5,9.5z"></path></svg>
                                            Descargar brochure
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6-6-5-3 order-1-mob" style={{ display: "none" }}>
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126234-0021-cor-specs-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126234-0021-cor-specs-landscape.webp" loading="lazy" alt="Rolex Datejust m126234-0021 especificaciones" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">Bisel estriado</p>
                                <p className="body-20-light">El bisel estriado de Rolex es una marca de distinciín. En un principio, el diseño estriado del bisel Oyster tenía una función específica: servía para atornillar el bisel a la caja garantizando la hermeticidad del reloj. Además, era idíntico al acanalado del fondo de la caja, atornillado a ísta por la misma razín, mediante herramientas específicas de Rolex. Con el tiempo, el estriado se convirtió en un elemento puramente estático, una auténtica característica distintiva de Rolex. En la actualidad, el estriado es una marca de distinciín, en oro en este Datejust 36.</p>
                                <div className="pb-45-40">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-espec/m126234-0021-bezel-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-espec/m126234-0021-bezel-landscape.webp" loading="lazy" alt="Rolex Datejust m126234-0021 bisel" />
                                    </picture>
                                </div>
                                <p className="headline50 c-brown-text pb-20">Esfera aubergine</p>
                                <p className="body-20-light">Esta esfera presenta nímeros romanos VI y IX en oro de 18 quilates engastados de 24 diamantes. El acabado tipo sol crea delicados reflejos de luz en muchas esferas de la colecciín Oyster Perpetual. Se obtiene utilizando tícnicas magistrales de cepillado que crean surcos que salen del centro de la esfera. La luz se difunde constantemente a lo largo de cada grabado, creando un sutil brillo característico que se mueve segín la posición de la muñeca. Una vez completado el acabado tipo sol, el color de la esfera se aplica mediante PVD (Physical Vapour Deposition) o galvanoplastia. Una ligera capa de barniz le da a la esfera su aspecto final. </p>
                                <div className="pb-45-40">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-espec/m126234-0021-dial-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-espec/m126234-0021-dial-landscape.webp" loading="lazy" alt="Rolex Datejust m126234-0021 esfera" />
                                    </picture>
                                </div>
                                <div className="pb-90-60">
                                    <p className="headline50 c-brown-text pb-20">Rolesor blanco</p>
                                    <p className="body-20-light">El oro es codiciado por su lustre y su nobleza. El acero afianza la fuerza y la fiabilidad. Juntos, combinan armoniosamente lo mejor de sus propiedades. Verdadera firma de Rolex, el Rolesor ha sido parte de los modelos Rolex desde principios de los años treinta y fue patentado como nombre en 1933. Es uno de los prominentes pilares de la colecciín Oyster.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-espec/m126234-0021-material-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-espec/m126234-0021-material-landscape.webp" loading="lazy" alt="Rolex Datejust m126234-0021 material" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="c-lightbeige-bg" id="disponibilidadmodelo">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw cuerpotexto dispmodel">
                            <div className="row-grid-fullw cuerpotextobg">
                                <div className="col-text-center">
                                    <div className="py-90-60">
                                        <div className="pb-40-60">
                                            <picture className="rlxcrown">
                                                <img
                                                    alt="crown rolex"
                                                    height="60"
                                                    loading="lazy"
                                                    src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/logo-plecas/crown-rolex-footer.webp"
                                                    width="60"
                                                />
                                            </picture>
                                        </div>
                                        <div className="px-20 text-center">
                                            <p className="headline50 c-brown-text pb-20">
                                                Disponibilidad del modelo
                                            </p>
                                            <p className="body-20-light pb-30">
                                                Todos los relojes Rolex se ensamblan a mano con sumo cuidado
                                                para garantizar una Colombiadad excepcional. Unos estándares
                                                tan altos limitan naturalmente la capacidad de producciín de
                                                Rolex y, a veces, la demanda de relojes Rolex supera esta
                                                capacidad.
                                            </p>
                                            <p className="body-20-light pb-30">
                                                Por lo tanto, la disponibilidad de ciertos modelos puede ser
                                                limitada. Los relojes Rolex nuevos se venden exclusivamente a
                                                través de los Distribuidores Oficiales Rolex, que reciben
                                                entregas habituales y gestionan de manera independiente la
                                                distribuciín y las ventas a sus clientes.
                                            </p>
                                            <p className="body-20-light">
                                                GLAUSER se enorgullece de formar parte de la red mundial de
                                                Distribuidores Oficiales Rolex, y puede proporcionar
                                                información sobre la disponibilidad de los relojes Rolex.
                                            </p>
                                        </div>
                                    </div>
                                    <picture className="rlx-pbanner-top p-relative" style={{ display: "none", }}>
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126234-0021-presentation-box-portrait.webp"
                                        />
                                        <img
                                            alt="Rolex Datejust m126234-0021 caja presentación"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126234-0021-presentation-box-landscape.webp"
                                        />
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <WatchesForm />
                <SectionDateJust />
                <RlxExploreMasNModels />
                <Footer />
            </main>
        </>
    );
}

export default M1262340021;

