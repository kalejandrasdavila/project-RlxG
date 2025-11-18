import React from "react";
import { Helmet } from "react-helmet-async";
import { useCssHandles } from 'vtex.css-handles';
import "../../../main-style.css";
import useInitScripts from '../../../components/hooks/useInitScripts';
import RlxExploreMasModels from "../../../components/parts/RlxExploreMasNModels";

import NavM from "../../../components/parts/NavModels";
import Footer from "../../../components/parts/Footer";

const CSS_HANDLES = [
    'container', 'wrapper', 'content', 'section', 'title', 'subtitle',
    'model_grid', 'model_card', 'image_container', 'description',
    'price_section', 'button_container', 'explore_section'
] as const;


const SeaDweller: React.FC = () => {
    useInitScripts();
    const handles = useCssHandles(CSS_HANDLES);

    return (
        <>
            <Helmet>
                <title>Relojes Rolex Sea-Dweller - GLAUSER</title>
                <meta
                    name="description"
                    content="Descubra los relojes Rolex Sea-Dweller en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra más en GLAUSER."
                />
                {/* <div dangerouslySetInnerHTML={{ __html: "<vtex:metaTags />" }} />
                                                                <div dangerouslySetInnerHTML={{ __html: '<vtex:contentPlaceHolder id="Metatags" />' }} />
                                                                <div dangerouslySetInnerHTML={{ __html: '<vtex:template id="GL-Favicon" />' }} />*/}

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
                <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

                <link rel="canonical" href="https://glauser.myvtex.com/rolex/watches/sea-dweller/" />

                {/* Facebook Meta Tags */}
                <meta property="og:url" content="https://glauser.myvtex.com/rolex/watches/sea-dweller/" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Relojes Rolex Sea-Dweller - GLAUSER"
                />
                <meta
                    property="og:description"
                    content="Descubra los relojes Rolex Sea-Dweller en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra más en GLAUSER."
                />
                <meta
                    property="og:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-gmt-master-ii-m126710grnr-0003-portrait.webp"
                />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://glauser.myvtex.com/rolex/watches/sea-dweller/" />
                <meta
                    name="twitter:title"
                    content="Relojes Rolex Sea-Dweller - GLAUSER"
                />
                <meta
                    name="twitter:description"
                    content="Descubra los relojes Rolex Sea-Dweller en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra más en GLAUSER."
                />
                <meta
                    name="twitter:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-gmt-master-ii-m126710grnr-0003-portrait.webp"
                />

                <script type="text/javascript">
                    {`
                                            var digitalDataLayer = {
                                                environment: {
                                                environmentVersion: "V7",
                                                coBrandedVersion: "Bespoke"
                                                },
                                                page: {
                                                pageType: "family page",
                                                pageFamilyName: "sea-dweller"
                                                }
                                            };
                                            `}
                </script>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
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
                                    "@id": "https://www.glauser.com.co/rolex/watches/sea-dweller/#webpage",
                                    "url": "https://www.glauser.com.co/rolex/watches/sea-dweller/",
                                    "name": "Relojes Rolex Sea-Dweller - GLAUSER",
                                    "isPartOf": { "@id": "https://www.glauser.com.co/#website" },
                                    "datePublished": "2025-04-01T05:23:53+00:00",
                                    "dateModified": "2025-04-01T05:23:53+00:00",
                                    "description":
                                        "Descubra los relojes Rolex Sea-Dweller en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra más en GLAUSER.",
                                    "breadcrumb": {
                                        "@id": "https://www.glauser.com.co/rolex/watches/sea-dweller/#breadcrumb"
                                    },
                                    "inLanguage": "es-Es",
                                    "potentialAction": {
                                        "@type": "ReadAction",
                                        "target": "https://www.glauser.com.co/rolex/watches/sea-dweller/"
                                    }
                                }
                            ]
                        })
                    }}
                />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
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
                                    "name": "Relojes Rolex",
                                    "item": "https://www.glauser.com.co/rolex/coleccion-rolex/"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "Sea-Dweller"
                                }
                            ]
                        })
                    }}
                />
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
                                <a href="https://glauser.myvtex.com/rolex/" aria-label="Inicio" title="Inicio">
                                    <picture className="placa-rolex-logo">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/logo-plecas/Rolex-retailer-plaque-240x120_en.jpg" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/logo-plecas/Rolex-retailer-plaque-240x120_en.jpg" loading="lazy" alt="placa distribuidor oficial rolex" />
                                    </picture>
                                </a>
                            </div>

                            <NavM />
                        </div>
                        <div className="row-grid breadcrum-page" style={{ height: "40px" }}>
                            <div className="breadcrum-column">
                                <ul className="breadcrum-menu-list description">
                                    <li className="fixed-14 none-mobil">
                                        <a href="https://glauser.myvtex.com/rolex/">Rolex</a>
                                    </li>
                                    <li className="fixed-14">
                                        <a href="https://glauser.myvtex.com/rolex/coleccion-rolex/">Relojes Rolex</a>
                                    </li>
                                    <li className="fixed-14 none-mobil active">
                                        <a className="active" href="https://glauser.myvtex.com/rolex/watches/sea-dweller/">Sea-Dweller</a>
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
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/sea-dweller/rolex-seadweller-cover-m124060-0001-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/sea-dweller/rolex-seadweller-cover-m124060-0001-landscape.webp" loading="lazy" alt="Sea-Dweller" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw text-introduccion pb-90-60">
                            <div className="col-lg-2-5">
                                <h1 className="headline50 c-brown-text pb-20">Rolex Sea-Dweller
                                    Ciudadano de las profundidades</h1>
                            </div>
                            <div className="col-lg-8-5">
                                <p className="body-20-light"><strong>Rolex creó el Oyster Perpetual Sea‑Dweller en 1967 para enfrentarse al desafío que presentan las misiones submarinas prolongadas.</strong> El Sea‑Dweller está específicamente diseñado para el buceo de saturación. Gracias a su válvula de helio, puede soportar la descompresión durante el ascenso y controlar la vuelta a la superficie, la fase final de la exploración de aguas profundas.</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw reloes-componet-2-3">
                            <div className="col-span3-1 col-md-span4-1 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/sea-dweller/m126600-0002/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126600-0002-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126600-0002-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex Sea-Dweller m126600-0002 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Sea-Dweller</p>
                                    <p className="legend-16-light">Oyster, 43 mm, acero Oystersteel</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-2 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/sea-dweller/m126603-0001/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126603-0001-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126603-0001-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex Sea-Dweller m126603-0001 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Sea-Dweller</p>
                                    <p className="legend-16-light">Oyster, 43 mm, acero Oystersteel y oro amarillo</p>
                                </div>
                            </div>
                        </div>
                        <div id="masrelojescargados" className="row-grid-fullw reloes-componet-2-3 d-none-rlx pt-8" style={{ display: "none", }}>

                        </div>
                        {/*
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center text-center pt-30-40">
                                <button id="rlx-more-watches"
                                    className="btn-primary-rlx"
                                    onClick={() => setIsVisible(!isVisible)}
                                >
                                    {isVisible ? "Mostrar menos" : "Descubra más"}
                                </button>
                            </div>
                        </div>
                        */}
                        <div className="row-grid-fullw component-video py-90-60">
                            <div className="col-6-12">
                                <div className="banner-10 rlx-banner-100">
                                    <div className="ratio ratio-16x9">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/t5ctuodFNYg" title="Rolex Sea-Dweller" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="body-20-light pb-30">Con una hermeticidad garantizada hasta 610 metros de profundidad cuando se lanzó en 1967, luego a 1220 metros desde 1978, el Sea‑Dweller combina todos los atributos del reloj de submarinismo moderno.</p>
                                <p className="body-20-light">El Sea-Dweller, puesto a prueba en condiciones reales como parte del programa Tektite iniciado en conjunto con la NASA, la Marina de los Estados Unidos y el gobierno estadounidense en 1969, se utilizó en los primeros experimentos importantes con hábitats submarinos.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-beige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <div className="pb-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/sea-dweller/rolex-sea-dweller-helium-valve-m126600-0002-m126600-0002-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/sea-dweller/rolex-sea-dweller-helium-valve-m126600-0002-m126600-0002-landscape.webp" loading="lazy" alt="Sea-Dweller" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">El nuevo rostro del submarinismo</p>
                                <p className="body-20-light pb-30">En la década de 1960, el denominado buceo de «saturación» permitió permanecer a grandes profundidades durante largos periodos. Consiste en alojar a submarinistas en un hábitat de presurización, para así reproducir la presión que prevalece en su entorno de trabajo submarino. Así, no es necesario que se sometan más que a un único proceso de descompresión al concluir su misión.</p>
                                <p className="body-20-light">Este proceso puede dañar el reloj. Los buzos respiran una mezcla de gases compuesta principalmente por helio, cuyos átomos son extremadamente finos y pueden penetrar la caja. De vuelta a la superficie, el helio atrapado dentro puede crear un fenómeno de exceso de presión interna responsable de comprometer su integridad.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <div className="pb-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/sea-dweller/rolex-sea-dweller-triplock-winding-crown-m126603-0001-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/sea-dweller/rolex-sea-dweller-triplock-winding-crown-m126603-0001-landscape.webp" loading="lazy" alt="Corona Triplock" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">Dominar la descompresión con la válvula de escape de helio</p>
                                <p className="body-20-light">Para superar este problema, Rolex presentó en 1967 el Sea‑Dweller, un reloj de submarinismo con válvula de helio. Enroscada a la caja, consiste en un cilindro hermético, un pistón y un muelle que actúan como válvula de seguridad. Se abre automáticamente cuando la presión interna de la caja es demasiado grande, lo que permite que los átomos de helio se liberen.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-beige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div className="pb-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/sea-dweller/rolex-sea-dweller-legibility-m126603-0001-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/sea-dweller/rolex-sea-dweller-legibility-m126603-0001-landscape.webp" loading="lazy" alt="Legibilidad" />
                                    </picture>
                                </div>
                                <p className="headline50 c-brown-text pb-20">Una legibilidad multifunción</p>
                                <p className="body-20-light">La visualización Chromalight, exclusiva de Rolex, aporta al Sea‑Dweller una legibilidad óptima en cualquier circunstancia. Los índices, las agujas, el chatón y el bisel están rellenos o cubiertos a mano de un material luminiscente que, en la oscuridad, tiene un color de emisión azul que permanece hasta el doble de tiempo que los materiales fosforescentes clásicos.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <div className="pb-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/sea-dweller/rolex-sea-dweller-waterproofness-m126603-0001-m126603-0001-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/sea-dweller/rolex-sea-dweller-waterproofness-m126603-0001-m126603-0001-landscape.webp" loading="lazy" alt="Hermeticidad reforzada" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">Hermeticidad reforzada</p>
                                <p className="body-20-light">El Sea-Dweller está equipado con una corona de cuerda Triplock Esta corona enroscada se inventó en 1970 y cuenta con tres zonas de hermeticidad. Refuerza la impermeabilidad de la caja Oyster de 43 mm del Sea-Dweller, cuya carrura se trabaja a partir de un bloque macizo de acero Oystersteel, una aleación especialmente resistente a la corrosión.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-beige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div className="pb-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/sea-dweller/rolex-sea-dweller-m126600-0002-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/sea-dweller/rolex-sea-dweller-m126600-0002-landscape.webp" loading="lazy" alt="Esfera negra del Sea-Dweller" />
                                    </picture>
                                </div>
                                <p className="headline50 c-brown-text pb-20">El reloj de los ciudadanos de los mares</p>
                                <p className="body-20-light pb-30">Los exploradores y oceanógrafos, como Sylvia Earle, y los fotógrafos submarinos, como David Doubilet, están comprometidos con la preservación del océano y saben que es nuestro recurso más preciado. Llevan un Sea-Dweller para reflejar su pasión y compromiso.</p>
                                <p className="body-20-light">Rolex también colabora con Comex (Compagnie Maritime d’Expertises) desde 1971. Desde hace varias décadas, el Sea-Dweller equipa a los submarinistas de esta empresa francesa especialista en ingeniería, tecnología e intervención submarina.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <RlxExploreMasModels />
                <Footer />
            </main>
        </>
    );


};

export default SeaDweller;