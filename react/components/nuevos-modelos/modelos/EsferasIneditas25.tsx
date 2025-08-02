import React from "react";
import { Helmet } from "react-helmet-async";
import useInitScripts from '../../hooks/useInitScripts';
import RlxExploreMasNModels from "../../parts/RlxExploreMasNModels";
import NavM from "../../parts/NavModels";
import Footer from '../../parts/Footer';

const ModEsferasIneditas2025: React.FC = () => {
    useInitScripts();

    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://devjhernandez--glauser.myvtex.com/rolex/nuevos-modelos-2025/esferas-ineditas/';
    const baseUrl = 'https://devjhernandez--glauser.myvtex.com';

    return (
        // Si este componente (ModEsferasIneditas2025) es el punto de entrada principal para una ruta o página
        // y no está ya envuelto por HelmetProvider en un componente superior (como Home.tsx o el layout principal de tu store-theme),
        // ENTONCES DEBES envolver todo el contenido del return con <HelmetProvider>.
        // Ejemplo: <HelmetProvider>...</HelmetProvider>
        <>
            <Helmet>
                <title>Nuevos modelos Rolex Esferas inéditas 2025 - GLAUSER</title>
                <meta
                    name="description"
                    content="GLAUSER presenta el nuevo Rolex Esferas inéditas, lo último en relojes de lujo suizos de Rolex. Descubra las características únicas de este nuevo modelo ahora."
                />
                {/* VTEX IO: Evita dangerouslySetInnerHTML para meta tags específicos de VTEX. */}
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
                    content="Nuevos modelos Rolex Esferas inéditas 2025 - GLAUSER"
                />
                <meta
                    property="og:description"
                    content="GLAUSER presenta el nuevo Rolex Esferas inéditas, lo último en relojes de lujo suizos de Rolex. Descubra las características únicas de este nuevo modelo ahora."
                />
                <meta
                    property="og:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-imgmodelos-2025/w-esferas/rolex-new-watches-2025-new-dials-cover-m126518ln-0014-portrait.webp" // URL de imagen para OG
                />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={currentUrl} />
                <meta
                    name="twitter:title"
                    content="Nuevos modelos Rolex Esferas inéditas 2025 - GLAUSER"
                />
                <meta
                    name="twitter:description"
                    content="GLAUSER presenta el nuevo Rolex Esferas inéditas, lo último en relojes de lujo suizos de Rolex. Descubra las características únicas de este nuevo modelo ahora."
                />
                <meta
                    name="twitter:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-imgmodelos-2025/w-esferas/rolex-new-watches-2025-new-dials-cover-m126518ln-0014-portrait.webp" // URL de imagen para Twitter
                />

                {/* Scripts JSON-LD y DataLayer: Se mantienen */}
                <script type="text/javascript">
                    {`
                        var digitalDataLayer = {
                            environment: {
                                environmentVersion: "V7",
                                coBrandedVersion: "Bespoke"
                            },
                            page: {
                                pageType: "family page 2025",
                                pageFamilyName: "esferas-ineditas"
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
                                    "name": "Nuevos modelos Rolex Esferas inéditas 2025 - GLAUSER",
                                    "isPartOf": { "@id": `${baseUrl}/#website` },
                                    "datePublished": "2025-04-01T05:23:53+00:00",
                                    "dateModified": "2025-04-01T05:23:53+00:00",
                                    "description": "GLAUSER presenta el nuevo Rolex Esferas inéditas, lo último en relojes de lujo suizos de Rolex. Descubra las características únicas de este nuevo modelo ahora.",
                                    "breadcrumb": { "@id": `${currentUrl}#breadcrumb` },
                                    "inLanguage": "es-Es",
                                    "potentialAction": { "@type": "ReadAction", "target": currentUrl }
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
                            "itemListElement": [{
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Rolex GLAUSER",
                                "item": `${baseUrl}/rolex/`
                            }, {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Nuevos Modelos 2025",
                                "item": `${baseUrl}/rolex/nuevos-modelos-2025/`
                            }, {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "Esferas inéditas"
                            }]
                        })
                    }}
                />
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
                                        <a href="/rolex/">Rolex</a>
                                    </li>
                                    <li className="fixed-14">
                                        <a href="/rolex/nuevos-modelos-2025/">Nuevos Modelos 2025</a>
                                    </li>
                                    <li className="fixed-14 none-mobil active">
                                        <a className="active" href="/rolex/nuevos-modelos-2025/esferas-ineditas/">Esferas inéditas</a>
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
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-cover-m126518ln-0014-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-cover-m126518ln-0014-landscape.webp" loading="lazy" alt="Nuevas esferas" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw text-introduccion pb-90-60">
                            <div className="col-lg-2-5">
                                <p className="body-20-bold c-brown-text">Nuevos Modelos 2025</p>
                                <h1 className="headline50 c-brown-text pb-20">Esferas inéditas <span style={{ display: "block", }}>El brillo de lo inesperado</span></h1>
                            </div>
                            <div className="col-lg-8-5">
                                <p className="body-20-light"><strong>Modelos de osadas configuraciones. Originales combinaciones de colores y materiales que provocan emociones inusitadas.</strong> Los Oyster Perpetual Cosmograph Daytona, GMT-Master II y Sky-Dweller se visten con nuevas esferas que reafirman su aura.</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-video pb-90-60">
                            <div className="col-6-12">
                                <div className="banner-10 rlx-banner-100">
                                    <div className="ratio ratio-16x9">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/gdLZkkDClv4" title="Nuevos Modelos 2025 - Esferas inéditas" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">Rolex crea un vistoso semblante para tres de sus modelos icónicos, célebres por su tecnicidad y su diseño emblemático.</p>
                                <p className="body-20-light">El Oyster Perpetual Cosmograph Daytona está disponible con una luminosa esfera lacada azul turquesa sobre la que destacan unos contadores negro vivo. Fabricado en oro amarillo de 18 quilates, este nuevo reloj está coronado por un bisel Cerachrom negro con la famosa escala taquimétrica. El conjunto se completa con un brazalete Oysterflex, siempre provisto de un cierre de seguridad Oysterlock.</p>
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-cosmograph-daytona-wrist-watch-m126518ln-0014-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-cosmograph-daytona-wrist-watch-m126518ln-0014-landscape.webp" loading="lazy" alt="Cosmograph Daytona" />
                                    </picture>
                                </div>
                                <p className="body-20-light">El Oyster Perpetual GMT‑Master II se propone con una novedosa esfera, realizada en ojo de hierro. Esta piedra natural, compuesta por ojo de tigre, jaspe rojo y hematita, fascina por su aspecto híbrido. La modalidad presentada, en oro Everose de 18 quilates, cuenta con un bisel Cerachrom marrón y negro y está dotada de un brazalete Oyster, equipado con un cierre de seguridad Oysterlock.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-gmt-master-ii-m126715chnr-0002-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-gmt-master-ii-m126715chnr-0002-landscape.webp" loading="lazy" alt="Sky-Dweller" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="body-20-light">El Oyster Perpetual Sky‑Dweller acompaña a los grandes viajeros a cualquier latitud. Este año, una versión en oro amarillo de 18 quilates se viste con una esfera verde vivo con acabado tipo sol, una tonalidad intensa que combina a las mil maravillas con el color del reloj. El brazalete Jubilee, igualmente en oro amarillo de 18 quilates y con cierre Oysterclasp, le aporta un toque adicional de exquisitez.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-beige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10 pb-90-60">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-high-technology-ceramic-m126518ln-0014-m126715chnr-0002-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-high-technology-ceramic-m126518ln-0014-m126715chnr-0002-landscape.webp" loading="lazy" alt="Cerámica de alta tecnología" />
                                </picture>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div>
                                    <p className="headline50 c-brown-text pb-20">Cerámica de alta tecnología</p>
                                    <p className="body-20-light pb-30">Rolex ha desempeñado un papel pionero en el desarrollo de cerámicas especiales para la fabricación de algunos elementos externos. Particularmente resistentes a las rayaduras, estos materiales presentan colores inalterables y de una intensidad poco común. Además, por la naturaleza de su composición química, estas cerámicas de alta tecnología son inertes y resisten a la corrosión. La marca ha desarrollado un savoir‑faire y unos métodos de fabricación exclusivos e innovadores que le permiten producir estos componentes de cerámica con total independencia.</p>
                                    <p className="body-20-light">El Cosmograph Daytona en oro amarillo de 18 quilates con esfera lacada azul turquesa está provisto de un bisel Cerachrom monobloque de cerámica negra. En el GMT‑Master II en oro Everose de 18 quilates con esfera de ojo de hierro, el bisel giratorio bidireccional está dotado de un disco Cerachrom graduado 24 horas bicolor de cerámica marrón y negra.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div className="pb-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-sky-dweller-m336938-0008-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-sky-dweller-m336938-0008-landscape.webp" loading="lazy" alt="Sky‑Dweller" />
                                    </picture>
                                </div>
                                <div>
                                    <p className="headline50 c-brown-text pb-20">El bisel estriado, una característica distintiva</p>
                                    <p className="body-20-light pb-30">El bisel estriado, propuesto para muchos modelos Clásicos de la colección Oyster Perpetual, existe desde la invención del Oyster en 1926. En aquel momento las estrías servían para enroscar el bisel a la carrura y, por tanto, contribuían directamente a garantizar la hermeticidad. En la actualidad su papel es esencialmente estético. Exclusivamente fabricado en oro de 18 quilates o en platino 950, el bisel estriado es fruto de un savoir‑faire único y se considera uno de los pilares del patrimonio estilístico de Rolex.</p>
                                    <p className="body-20-light">El bisel estriado del Sky-Dweller con esfera verde vivo está fabricado en oro amarillo de 18 quilates, esto es, en el mismo material que su caja Oyster y su brazalete Jubilee.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10 py-90-60">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-oyster-case-m126518ln-0014-m126715chnr-0002-m336938-0008-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-oyster-case-m126518ln-0014-m126715chnr-0002-m336938-0008-landscape.webp" loading="lazy" alt="Nuevas esferas" />
                                </picture>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div>
                                    <p className="headline50 c-brown-text pb-20">Caja Oyster, símbolo de hermeticidad</p>
                                    <p className="body-20-light">Ejemplos de solidez, fiabilidad y elegancia, la caja Oyster del Cosmograph Daytona y la del GMT‑Master II ―ambas de 40 mm de diámetro―, así como la del Sky‑Dweller ―de un diámetro de 42 mm―, garantizan una hermeticidad de hasta 100 metros de profundidad. La carrura de las modalidades presentadas se trabaja a partir de un bloque macizo de oro amarillo o Everose de 18 quilates. La corona de cuerda Triplock, provista de un sistema de triple hermeticidad y de protectores tallados en la carrura, o la corona Twinlock, con sistema de doble hermeticidad, se enrosca firmemente a la caja, al igual que los pulsadores de cronógrafo en el Cosmograph Daytona. El cristal ―coronado, en los modelos con función de fecha, por la lente Cyclops en la posición de las 3 h para una mejor lectura del día del mes― está realizado en zafiro prácticamente imposible de rayar y presenta un tratamiento antirreflejos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-cosmograph-daytona-wrist-watch-m126518ln-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-cosmograph-daytona-wrist-watch-m126518ln-landscape.webp" loading="lazy" alt="Cosmograph Daytona" />
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
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-movements-4131-3285-9002-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-movements-4131-3285-9002-landscape.webp" loading="lazy" alt="CCalibre 4131, calibre 3285 y calibre 9002 " />
                                    </picture>
                                </div>
                                <div>
                                    <h3 className="headline50 c-brown-text pb-20 ">Calibre 4131, calibre 3285 y calibre 9002</h3>
                                    <p className="body-20-light pb-30">El Cosmograph Daytona, el GMT‑Master II y el Sky‑Dweller están equipados con movimientos mecánicos de cuerda automática completamente desarrollados y manufacturados por Rolex. Concentrados de tecnología, presentan un elevado rendimiento, especialmente en materia de precisión, autonomía, comodidad de uso y fiabilidad.</p>
                                    <p className="body-20-light pb-30">El Cosmograph Daytona está dotado del calibre 4131, que le permite medir un intervalo de tiempo gracias a la función de cronógrafo, además de mostrar las horas, los minutos y los segundos. El calibre 4131 posee una estética muy cuidada y destaca especialmente por lucir unos puentes con la decoración Côtes de Genève Rolex y una masa oscilante calada.</p>
                                    <p className="body-20-light pb-30">El GMT‑Master II está provisto del calibre 3285 desde 2018. Presentado ese mismo año, este movimiento le proporciona la función de fecha y un segundo huso horario con formato 24 horas como complemento a las horas, los minutos y los segundos.</p>
                                    <p className="body-20-light pb-30">El Sky‑Dweller cuenta con el calibre 9002, gracias al cual dispone de un calendario anual ―fecha y mes―, así como de un segundo huso horario con formato 24 horas, sin olvidar las horas, los minutos y los segundos. Presentado en 2023, este movimiento está destinado exclusivamente a este reloj.</p>
                                    <p className="body-20-light">Los calibres 4131, 3285 y 9002 disponen de un sistema de cuerda automática por rotor Perpetual. Gracias a la arquitectura de su barrilete y al rendimiento superior de su escape, poseen respectivamente una reserva de marcha de en torno a 72, 70 y 72 horas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-sky-dweller-ambiance-m336938-0008-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-sky-dweller-ambiance-m336938-0008-landscape.webp" loading="lazy" alt="Sky‑Dweller" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">El bisel estriado, una característica distintiva</p>
                                <p className="body-20-light pb-30">El bisel estriado, propuesto para muchos modelos Clásicos de la colección Oyster Perpetual, existe desde la invención del Oyster en 1926. En aquel momento las estrías servían para enroscar el bisel a la carrura y, por tanto, contribuían directamente a garantizar la hermeticidad. En la actualidad su papel es esencialmente estético. Exclusivamente fabricado en oro de 18 quilates o en platino 950, el bisel estriado es fruto de un savoir‑faire único y se considera uno de los pilares del patrimonio estilístico de Rolex.</p>
                                <p className="body-20-light">El bisel estriado del Sky-Dweller con esfera verde vivo está fabricado en oro amarillo de 18 quilates, esto es, en el mismo material que su caja Oyster y su brazalete Jubilee.</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10 py-90-60">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-oyster-case-m126518ln-0014-m126715chnr-0002-m336938-0008-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-oyster-case-m126518ln-0014-m126715chnr-0002-m336938-0008-landscape.webp" loading="lazy" alt="Nuevas esferas" />
                                </picture>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div>
                                    <p className="headline50 c-brown-text pb-20">Caja Oyster, símbolo de hermeticidad</p>
                                    <p className="body-20-light">Ejemplos de solidez, fiabilidad y elegancia, la caja Oyster del Cosmograph Daytona y la del GMT‑Master II ―ambas de 40 mm de diámetro―, así como la del Sky‑Dweller ―de un diámetro de 42 mm―, garantizan una hermeticidad de hasta 100 metros de profundidad. La carrura de las modalidades presentadas se trabaja a partir de un bloque macizo de oro amarillo o Everose de 18 quilates. La corona de cuerda Triplock, provista de un sistema de triple hermeticidad y de protectores tallados en la carrura, o la corona Twinlock, con sistema de doble hermeticidad, se enrosca firmemente a la caja, al igual que los pulsadores de cronógrafo en el Cosmograph Daytona. El cristal ―coronado, en los modelos con función de fecha, por la lente Cyclops en la posición de las 3 h para una mejor lectura del día del mes― está realizado en zafiro prácticamente imposible de rayar y presenta un tratamiento antirreflejos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-cosmograph-daytona-wrist-watch-m126518ln-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-cosmograph-daytona-wrist-watch-m126518ln-landscape.webp" loading="lazy" alt="Cosmograph Daytona" />
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
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-movements-4131-3285-9002-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-movements-4131-3285-9002-landscape.webp" loading="lazy" alt="CCalibre 4131, calibre 3285 y calibre 9002 " />
                                    </picture>
                                </div>
                                <div>
                                    <h3 className="headline50 c-brown-text pb-20 ">Calibre 4131, calibre 3285 y calibre 9002</h3>
                                    <p className="body-20-light pb-30">El Cosmograph Daytona, el GMT‑Master II y el Sky‑Dweller están equipados con movimientos mecánicos de cuerda automática completamente desarrollados y manufacturados por Rolex. Concentrados de tecnología, presentan un elevado rendimiento, especialmente en materia de precisión, autonomía, comodidad de uso y fiabilidad.</p>
                                    <p className="body-20-light pb-30">El Cosmograph Daytona está dotado del calibre 4131, que le permite medir un intervalo de tiempo gracias a la función de cronógrafo, además de mostrar las horas, los minutos y los segundos. El calibre 4131 posee una estética muy cuidada y destaca especialmente por lucir unos puentes con la decoración Côtes de Genève Rolex y una masa oscilante calada.</p>
                                    <p className="body-20-light pb-30">El GMT‑Master II está provisto del calibre 3285 desde 2018. Presentado ese mismo año, este movimiento le proporciona la función de fecha y un segundo huso horario con formato 24 horas como complemento a las horas, los minutos y los segundos.</p>
                                    <p className="body-20-light pb-30">El Sky‑Dweller cuenta con el calibre 9002, gracias al cual dispone de un calendario anual ―fecha y mes―, así como de un segundo huso horario con formato 24 horas, sin olvidar las horas, los minutos y los segundos. Presentado en 2023, este movimiento está destinado exclusivamente a este reloj.</p>
                                    <p className="body-20-light">Los calibres 4131, 3285 y 9002 disponen de un sistema de cuerda automática por rotor Perpetual. Gracias a la arquitectura de su barrilete y al rendimiento superior de su escape, poseen respectivamente una reserva de marcha de en torno a 72, 70 y 72 horas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-sky-dweller-ambiance-m336938-0008-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-sky-dweller-ambiance-m336938-0008-landscape.webp" loading="lazy" alt="Sky‑Dweller" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">El bisel estriado, una característica distintiva</p>
                                <p className="body-20-light pb-30">El bisel estriado, propuesto para muchos modelos Clásicos de la colección Oyster Perpetual, existe desde la invención del Oyster en 1926. En aquel momento las estrías servían para enroscar el bisel a la carrura y, por tanto, contribuían directamente a garantizar la hermeticidad. En la actualidad su papel es esencialmente estético. Exclusivamente fabricado en oro de 18 quilates o en platino 950, el bisel estriado es fruto de un savoir‑faire único y se considera uno de los pilares del patrimonio estilístico de Rolex.</p>
                                <p className="body-20-light">El bisel estriado del Sky-Dweller con esfera verde vivo está fabricado en oro amarillo de 18 quilates, esto es, en el mismo material que su caja Oyster y su brazalete Jubilee.</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10 py-90-60">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-oyster-case-m126518ln-0014-m126715chnr-0002-m336938-0008-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-oyster-case-m126518ln-0014-m126715chnr-0002-m336938-0008-landscape.webp" loading="lazy" alt="Nuevas esferas" />
                                </picture>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div>
                                    <p className="headline50 c-brown-text pb-20">Caja Oyster, símbolo de hermeticidad</p>
                                    <p className="body-20-light">Ejemplos de solidez, fiabilidad y elegancia, la caja Oyster del Cosmograph Daytona y la del GMT‑Master II ―ambas de 40 mm de diámetro―, así como la del Sky‑Dweller ―de un diámetro de 42 mm―, garantizan una hermeticidad de hasta 100 metros de profundidad. La carrura de las modalidades presentadas se trabaja a partir de un bloque macizo de oro amarillo o Everose de 18 quilates. La corona de cuerda Triplock, provista de un sistema de triple hermeticidad y de protectores tallados en la carrura, o la corona Twinlock, con sistema de doble hermeticidad, se enrosca firmemente a la caja, al igual que los pulsadores de cronógrafo en el Cosmograph Daytona. El cristal ―coronado, en los modelos con función de fecha, por la lente Cyclops en la posición de las 3 h para una mejor lectura del día del mes― está realizado en zafiro prácticamente imposible de rayar y presenta un tratamiento antirreflejos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-cosmograph-daytona-wrist-watch-m126518ln-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-cosmograph-daytona-wrist-watch-m126518ln-landscape.webp" loading="lazy" alt="Cosmograph Daytona" />
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
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-movements-4131-3285-9002-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-movements-4131-3285-9002-landscape.webp" loading="lazy" alt="CCalibre 4131, calibre 3285 y calibre 9002 " />
                                    </picture>
                                </div>
                                <div>
                                    <h3 className="headline50 c-brown-text pb-20 ">Calibre 4131, calibre 3285 y calibre 9002</h3>
                                    <p className="body-20-light pb-30">El Cosmograph Daytona, el GMT‑Master II y el Sky‑Dweller están equipados con movimientos mecánicos de cuerda automática completamente desarrollados y manufacturados por Rolex. Concentrados de tecnología, presentan un elevado rendimiento, especialmente en materia de precisión, autonomía, comodidad de uso y fiabilidad.</p>
                                    <p className="body-20-light pb-30">El Cosmograph Daytona está dotado del calibre 4131, que le permite medir un intervalo de tiempo gracias a la función de cronógrafo, además de mostrar las horas, los minutos y los segundos. El calibre 4131 posee una estética muy cuidada y destaca especialmente por lucir unos puentes con la decoración Côtes de Genève Rolex y una masa oscilante calada.</p>
                                    <p className="body-20-light pb-30">El GMT‑Master II está provisto del calibre 3285 desde 2018. Presentado ese mismo año, este movimiento le proporciona la función de fecha y un segundo huso horario con formato 24 horas como complemento a las horas, los minutos y los segundos.</p>
                                    <p className="body-20-light pb-30">El Sky‑Dweller cuenta con el calibre 9002, gracias al cual dispone de un calendario anual ―fecha y mes―, así como de un segundo huso horario con formato 24 horas, sin olvidar las horas, los minutos y los segundos. Presentado en 2023, este movimiento está destinado exclusivamente a este reloj.</p>
                                    <p className="body-20-light">Los calibres 4131, 3285 y 9002 disponen de un sistema de cuerda automática por rotor Perpetual. Gracias a la arquitectura de su barrilete y al rendimiento superior de su escape, poseen respectivamente una reserva de marcha de en torno a 72, 70 y 72 horas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-sky-dweller-ambiance-m336938-0008-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-sky-dweller-ambiance-m336938-0008-landscape.webp" loading="lazy" alt="Sky‑Dweller" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">El bisel estriado, una característica distintiva</p>
                                <p className="body-20-light pb-30">El bisel estriado, propuesto para muchos modelos Clásicos de la colección Oyster Perpetual, existe desde la invención del Oyster en 1926. En aquel momento las estrías servían para enroscar el bisel a la carrura y, por tanto, contribuían directamente a garantizar la hermeticidad. En la actualidad su papel es esencialmente estético. Exclusivamente fabricado en oro de 18 quilates o en platino 950, el bisel estriado es fruto de un savoir‑faire único y se considera uno de los pilares del patrimonio estilístico de Rolex.</p>
                                <p className="body-20-light">El bisel estriado del Sky-Dweller con esfera verde vivo está fabricado en oro amarillo de 18 quilates, esto es, en el mismo material que su caja Oyster y su brazalete Jubilee.</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10 py-90-60">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-oyster-case-m126518ln-0014-m126715chnr-0002-m336938-0008-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-oyster-case-m126518ln-0014-m126715chnr-0002-m336938-0008-landscape.webp" loading="lazy" alt="Nuevas esferas" />
                                </picture>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div>
                                    <p className="headline50 c-brown-text pb-20">Caja Oyster, símbolo de hermeticidad</p>
                                    <p className="body-20-light">Ejemplos de solidez, fiabilidad y elegancia, la caja Oyster del Cosmograph Daytona y la del GMT‑Master II ―ambas de 40 mm de diámetro―, así como la del Sky‑Dweller ―de un diámetro de 42 mm―, garantizan una hermeticidad de hasta 100 metros de profundidad. La carrura de las modalidades presentadas se trabaja a partir de un bloque macizo de oro amarillo o Everose de 18 quilates. La corona de cuerda Triplock, provista de un sistema de triple hermeticidad y de protectores tallados en la carrura, o la corona Twinlock, con sistema de doble hermeticidad, se enrosca firmemente a la caja, al igual que los pulsadores de cronógrafo en el Cosmograph Daytona. El cristal ―coronado, en los modelos con función de fecha, por la lente Cyclops en la posición de las 3 h para una mejor lectura del día del mes― está realizado en zafiro prácticamente imposible de rayar y presenta un tratamiento antirreflejos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-cosmograph-daytona-wrist-watch-m126518ln-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-cosmograph-daytona-wrist-watch-m126518ln-landscape.webp" loading="lazy" alt="Cosmograph Daytona" />
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
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-movements-4131-3285-9002-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-movements-4131-3285-9002-landscape.webp" loading="lazy" alt="CCalibre 4131, calibre 3285 y calibre 9002 " />
                                    </picture>
                                </div>
                                <div>
                                    <h3 className="headline50 c-brown-text pb-20 ">Calibre 4131, calibre 3285 y calibre 9002</h3>
                                    <p className="body-20-light pb-30">El Cosmograph Daytona, el GMT‑Master II y el Sky‑Dweller están equipados con movimientos mecánicos de cuerda automática completamente desarrollados y manufacturados por Rolex. Concentrados de tecnología, presentan un elevado rendimiento, especialmente en materia de precisión, autonomía, comodidad de uso y fiabilidad.</p>
                                    <p className="body-20-light pb-30">El Cosmograph Daytona está dotado del calibre 4131, que le permite medir un intervalo de tiempo gracias a la función de cronógrafo, además de mostrar las horas, los minutos y los segundos. El calibre 4131 posee una estética muy cuidada y destaca especialmente por lucir unos puentes con la decoración Côtes de Genève Rolex y una masa oscilante calada.</p>
                                    <p className="body-20-light pb-30">El GMT‑Master II está provisto del calibre 3285 desde 2018. Presentado ese mismo año, este movimiento le proporciona la función de fecha y un segundo huso horario con formato 24 horas como complemento a las horas, los minutos y los segundos.</p>
                                    <p className="body-20-light pb-30">El Sky‑Dweller cuenta con el calibre 9002, gracias al cual dispone de un calendario anual ―fecha y mes―, así como de un segundo huso horario con formato 24 horas, sin olvidar las horas, los minutos y los segundos. Presentado en 2023, este movimiento está destinado exclusivamente a este reloj.</p>
                                    <p className="body-20-light">Los calibres 4131, 3285 y 9002 disponen de un sistema de cuerda automática por rotor Perpetual. Gracias a la arquitectura de su barrilete y al rendimiento superior de su escape, poseen respectivamente una reserva de marcha de en torno a 72, 70 y 72 horas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-sky-dweller-ambiance-m336938-0008-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-sky-dweller-ambiance-m336938-0008-landscape.webp" loading="lazy" alt="Sky‑Dweller" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">El bisel estriado, una característica distintiva</p>
                                <p className="body-20-light pb-30">El bisel estriado, propuesto para muchos modelos Clásicos de la colección Oyster Perpetual, existe desde la invención del Oyster en 1926. En aquel momento las estrías servían para enroscar el bisel a la carrura y, por tanto, contribuían directamente a garantizar la hermeticidad. En la actualidad su papel es esencialmente estético. Exclusivamente fabricado en oro de 18 quilates o en platino 950, el bisel estriado es fruto de un savoir‑faire único y se considera uno de los pilares del patrimonio estilístico de Rolex.</p>
                                <p className="body-20-light">El bisel estriado del Sky-Dweller con esfera verde vivo está fabricado en oro amarillo de 18 quilates, esto es, en el mismo material que su caja Oyster y su brazalete Jubilee.</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10 py-90-60">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-oyster-case-m126518ln-0014-m126715chnr-0002-m336938-0008-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-oyster-case-m126518ln-0014-m126715chnr-0002-m336938-0008-landscape.webp" loading="lazy" alt="Nuevas esferas" />
                                </picture>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div>
                                    <p className="headline50 c-brown-text pb-20">Caja Oyster, símbolo de hermeticidad</p>
                                    <p className="body-20-light">Ejemplos de solidez, fiabilidad y elegancia, la caja Oyster del Cosmograph Daytona y la del GMT‑Master II ―ambas de 40 mm de diámetro―, así como la del Sky‑Dweller ―de un diámetro de 42 mm―, garantizan una hermeticidad de hasta 100 metros de profundidad. La carrura de las modalidades presentadas se trabaja a partir de un bloque macizo de oro amarillo o Everose de 18 quilates. La corona de cuerda Triplock, provista de un sistema de triple hermeticidad y de protectores tallados en la carrura, o la corona Twinlock, con sistema de doble hermeticidad, se enrosca firmemente a la caja, al igual que los pulsadores de cronógrafo en el Cosmograph Daytona. El cristal ―coronado, en los modelos con función de fecha, por la lente Cyclops en la posición de las 3 h para una mejor lectura del día del mes― está realizado en zafiro prácticamente imposible de rayar y presenta un tratamiento antirreflejos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-cosmograph-daytona-wrist-watch-m126518ln-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-cosmograph-daytona-wrist-watch-m126518ln-landscape.webp" loading="lazy" alt="Cosmograph Daytona" />
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
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-movements-4131-3285-9002-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-movements-4131-3285-9002-landscape.webp" loading="lazy" alt="CCalibre 4131, calibre 3285 y calibre 9002 " />
                                    </picture>
                                </div>
                                <div>
                                    <h3 className="headline50 c-brown-text pb-20 ">Calibre 4131, calibre 3285 y calibre 9002</h3>
                                    <p className="body-20-light pb-30">El Cosmograph Daytona, el GMT‑Master II y el Sky‑Dweller están equipados con movimientos mecánicos de cuerda automática completamente desarrollados y manufacturados por Rolex. Concentrados de tecnología, presentan un elevado rendimiento, especialmente en materia de precisión, autonomía, comodidad de uso y fiabilidad.</p>
                                    <p className="body-20-light pb-30">El Cosmograph Daytona está dotado del calibre 4131, que le permite medir un intervalo de tiempo gracias a la función de cronógrafo, además de mostrar las horas, los minutos y los segundos. El calibre 4131 posee una estética muy cuidada y destaca especialmente por lucir unos puentes con la decoración Côtes de Genève Rolex y una masa oscilante calada.</p>
                                    <p className="body-20-light pb-30">El GMT‑Master II está provisto del calibre 3285 desde 2018. Presentado ese mismo año, este movimiento le proporciona la función de fecha y un segundo huso horario con formato 24 horas como complemento a las horas, los minutos y los segundos.</p>
                                    <p className="body-20-light pb-30">El Sky‑Dweller cuenta con el calibre 9002, gracias al cual dispone de un calendario anual ―fecha y mes―, así como de un segundo huso horario con formato 24 horas, sin olvidar las horas, los minutos y los segundos. Presentado en 2023, este movimiento está destinado exclusivamente a este reloj.</p>
                                    <p className="body-20-light">Los calibres 4131, 3285 y 9002 disponen de un sistema de cuerda automática por rotor Perpetual. Gracias a la arquitectura de su barrilete y al rendimiento superior de su escape, poseen respectivamente una reserva de marcha de en torno a 72, 70 y 72 horas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-sky-dweller-ambiance-m336938-0008-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-sky-dweller-ambiance-m336938-0008-landscape.webp" loading="lazy" alt="Sky‑Dweller" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">El bisel estriado, una característica distintiva</p>
                                <p className="body-20-light pb-30">El bisel estriado, propuesto para muchos modelos Clásicos de la colección Oyster Perpetual, existe desde la invención del Oyster en 1926. En aquel momento las estrías servían para enroscar el bisel a la carrura y, por tanto, contribuían directamente a garantizar la hermeticidad. En la actualidad su papel es esencialmente estético. Exclusivamente fabricado en oro de 18 quilates o en platino 950, el bisel estriado es fruto de un savoir‑faire único y se considera uno de los pilares del patrimonio estilístico de Rolex.</p>
                                <p className="body-20-light">El bisel estriado del Sky-Dweller con esfera verde vivo está fabricado en oro amarillo de 18 quilates, esto es, en el mismo material que su caja Oyster y su brazalete Jubilee.</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10 py-90-60">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-oyster-case-m126518ln-0014-m126715chnr-0002-m336938-0008-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-oyster-case-m126518ln-0014-m126715chnr-0002-m336938-0008-landscape.webp" loading="lazy" alt="Nuevas esferas" />
                                </picture>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div>
                                    <p className="headline50 c-brown-text pb-20">Caja Oyster, símbolo de hermeticidad</p>
                                    <p className="body-20-light">Ejemplos de solidez, fiabilidad y elegancia, la caja Oyster del Cosmograph Daytona y la del GMT‑Master II ―ambas de 40 mm de diámetro―, así como la del Sky‑Dweller ―de un diámetro de 42 mm―, garantizan una hermeticidad de hasta 100 metros de profundidad. La carrura de las modalidades presentadas se trabaja a partir de un bloque macizo de oro amarillo o Everose de 18 quilates. La corona de cuerda Triplock, provista de un sistema de triple hermeticidad y de protectores tallados en la carrura, o la corona Twinlock, con sistema de doble hermeticidad, se enrosca firmemente a la caja, al igual que los pulsadores de cronógrafo en el Cosmograph Daytona. El cristal ―coronado, en los modelos con función de fecha, por la lente Cyclops en la posición de las 3 h para una mejor lectura del día del mes― está realizado en zafiro prácticamente imposible de rayar y presenta un tratamiento antirreflejos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-cosmograph-daytona-wrist-watch-m126518ln-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-cosmograph-daytona-wrist-watch-m126518ln-landscape.webp" loading="lazy" alt="Cosmograph Daytona" />
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
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-movements-4131-3285-9002-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-movements-4131-3285-9002-landscape.webp" loading="lazy" alt="CCalibre 4131, calibre 3285 y calibre 9002 " />
                                    </picture>
                                </div>
                                <div>
                                    <h3 className="headline50 c-brown-text pb-20 ">Calibre 4131, calibre 3285 y calibre 9002</h3>
                                    <p className="body-20-light pb-30">El Cosmograph Daytona, el GMT‑Master II y el Sky‑Dweller están equipados con movimientos mecánicos de cuerda automática completamente desarrollados y manufacturados por Rolex. Concentrados de tecnología, presentan un elevado rendimiento, especialmente en materia de precisión, autonomía, comodidad de uso y fiabilidad.</p>
                                    <p className="body-20-light pb-30">El Cosmograph Daytona está dotado del calibre 4131, que le permite medir un intervalo de tiempo gracias a la función de cronógrafo, además de mostrar las horas, los minutos y los segundos. El calibre 4131 posee una estética muy cuidada y destaca especialmente por lucir unos puentes con la decoración Côtes de Genève Rolex y una masa oscilante calada.</p>
                                    <p className="body-20-light pb-30">El GMT‑Master II está provisto del calibre 3285 desde 2018. Presentado ese mismo año, este movimiento le proporciona la función de fecha y un segundo huso horario con formato 24 horas como complemento a las horas, los minutos y los segundos.</p>
                                    <p className="body-20-light pb-30">El Sky‑Dweller cuenta con el calibre 9002, gracias al cual dispone de un calendario anual ―fecha y mes―, así como de un segundo huso horario con formato 24 horas, sin olvidar las horas, los minutos y los segundos. Presentado en 2023, este movimiento está destinado exclusivamente a este reloj.</p>
                                    <p className="body-20-light">Los calibres 4131, 3285 y 9002 disponen de un sistema de cuerda automática por rotor Perpetual. Gracias a la arquitectura de su barrilete y al rendimiento superior de su escape, poseen respectivamente una reserva de marcha de en torno a 72, 70 y 72 horas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-sky-dweller-ambiance-m336938-0008-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-sky-dweller-ambiance-m336938-0008-landscape.webp" loading="lazy" alt="Sky‑Dweller" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">El bisel estriado, una característica distintiva</p>
                                <p className="body-20-light pb-30">El bisel estriado, propuesto para muchos modelos Clásicos de la colección Oyster Perpetual, existe desde la invención del Oyster en 1926. En aquel momento las estrías servían para enroscar el bisel a la carrura y, por tanto, contribuían directamente a garantizar la hermeticidad. En la actualidad su papel es esencialmente estético. Exclusivamente fabricado en oro de 18 quilates o en platino 950, el bisel estriado es fruto de un savoir‑faire único y se considera uno de los pilares del patrimonio estilístico de Rolex.</p>
                                <p className="body-20-light">El bisel estriado del Sky-Dweller con esfera verde vivo está fabricado en oro amarillo de 18 quilates, esto es, en el mismo material que su caja Oyster y su brazalete Jubilee.</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10 py-90-60">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-oyster-case-m126518ln-0014-m126715chnr-0002-m336938-0008-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-oyster-case-m126518ln-0014-m126715chnr-0002-m336938-0008-landscape.webp" loading="lazy" alt="Nuevas esferas" />
                                </picture>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div>
                                    <p className="headline50 c-brown-text pb-20">Caja Oyster, símbolo de hermeticidad</p>
                                    <p className="body-20-light">Ejemplos de solidez, fiabilidad y elegancia, la caja Oyster del Cosmograph Daytona y la del GMT‑Master II ―ambas de 40 mm de diámetro―, así como la del Sky‑Dweller ―de un diámetro de 42 mm―, garantizan una hermeticidad de hasta 100 metros de profundidad. La carrura de las modalidades presentadas se trabaja a partir de un bloque macizo de oro amarillo o Everose de 18 quilates. La corona de cuerda Triplock, provista de un sistema de triple hermeticidad y de protectores tallados en la carrura, o la corona Twinlock, con sistema de doble hermeticidad, se enrosca firmemente a la caja, al igual que los pulsadores de cronógrafo en el Cosmograph Daytona. El cristal ―coronado, en los modelos con función de fecha, por la lente Cyclops en la posición de las 3 h para una mejor lectura del día del mes― está realizado en zafiro prácticamente imposible de rayar y presenta un tratamiento antirreflejos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-cosmograph-daytona-wrist-watch-m126518ln-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-cosmograph-daytona-wrist-watch-m126518ln-landscape.webp" loading="lazy" alt="Cosmograph Daytona" />
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
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-movements-4131-3285-9002-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-2025/w-esferas/rolex-new-watches-2025-new-dials-movements-4131-3285-9002-landscape.webp" loading="lazy" alt="CCalibre 4131, calibre 3285 y calibre 9002 " />
                                    </picture>
                                </div>
                                <div>
                                    <h3 className="headline50 c-brown-text pb-20 ">Calibre 4131, calibre 3285 y calibre 9002</h3>
                                    <p className="body-20-light pb-30">El Cosmograph Daytona, el GMT‑Master II y el Sky‑Dweller están equipados con movimientos mecánicos de cuerda automática completamente desarrollados y manufacturados por Rolex. Concentrados de tecnología, presentan un elevado rendimiento, especialmente en materia de precisión, autonomía, comodidad de uso y fiabilidad.</p>
                                    <p className="body-20-light pb-30">El Cosmograph Daytona está dotado del calibre 4131, que le permite medir un intervalo de tiempo gracias a la función de cronógrafo, además de mostrar las horas, los minutos y los segundos. El calibre 4131 posee una estética muy cuidada y destaca especialmente por lucir unos puentes con la decoración Côtes de Genève Rolex y una masa oscilante calada.</p>
                                    <p className="body-20-light pb-30">El GMT‑Master II está provisto del calibre 3285 desde 2018. Presentado ese mismo año, este movimiento le proporciona la función de fecha y un segundo huso horario con formato 24 horas como complemento a las horas, los minutos y los segundos.</p>
                                    <p className="body-20-light pb-30">El Sky‑Dweller cuenta con el calibre 9002, gracias al cual dispone de un calendario anual ―fecha y mes―, así como de un segundo huso horario con formato 24 horas, sin olvidar las horas, los minutos y los segundos. Presentado en 2023, este movimiento está destinado exclusivamente a este reloj.</p>
                                    <p className="body-20-light">Los calibres 4131, 3285 y 9002 disponen de un sistema de cuerda automática por rotor Perpetual. Gracias a la arquitectura de su barrilete y al rendimiento superior de su escape, poseen respectivamente una reserva de marcha de en torno a 72, 70 y 72 horas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-sky-dweller-ambiance-m336938-0008-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-sky-dweller-ambiance-m336938-0008-landscape.webp" loading="lazy" alt="Sky‑Dweller" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">El bisel estriado, una característica distintiva</p>
                                <p className="body-20-light pb-30">El bisel estriado, propuesto para muchos modelos Clásicos de la colección Oyster Perpetual, existe desde la invención del Oyster en 1926. En aquel momento las estrías servían para enroscar el bisel a la carrura y, por tanto, contribuían directamente a garantizar la hermeticidad. En la actualidad su papel es esencialmente estético. Exclusivamente fabricado en oro de 18 quilates o en platino 950, el bisel estriado es fruto de un savoir‑faire único y se considera uno de los pilares del patrimonio estilístico de Rolex.</p>
                                <p className="body-20-light">El bisel estriado del Sky-Dweller con esfera verde vivo está fabricado en oro amarillo de 18 quilates, esto es, en el mismo material que su caja Oyster y su brazalete Jubilee.</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10 py-90-60">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-oyster-case-m126518ln-0014-m126715chnr-0002-m336938-0008-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-oyster-case-m126518ln-0014-m126715chnr-0002-m336938-0008-landscape.webp" loading="lazy" alt="Nuevas esferas" />
                                </picture>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div>
                                    <p className="headline50 c-brown-text pb-20">Caja Oyster, símbolo de hermeticidad</p>
                                    <p className="body-20-light">Ejemplos de solidez, fiabilidad y elegancia, la caja Oyster del Cosmograph Daytona y la del GMT‑Master II ―ambas de 40 mm de diámetro―, así como la del Sky‑Dweller ―de un diámetro de 42 mm―, garantizan una hermeticidad de hasta 100 metros de profundidad. La carrura de las modalidades presentadas se trabaja a partir de un bloque macizo de oro amarillo o Everose de 18 quilates. La corona de cuerda Triplock, provista de un sistema de triple hermeticidad y de protectores tallados en la carrura, o la corona Twinlock, con sistema de doble hermeticidad, se enrosca firmemente a la caja, al igual que los pulsadores de cronógrafo en el Cosmograph Daytona. El cristal ―coronado, en los modelos con función de fecha, por la lente Cyclops en la posición de las 3 h para una mejor lectura del día del mes― está realizado en zafiro prácticamente imposible de rayar y presenta un tratamiento antirreflejos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-cosmograph-daytona-wrist-watch-m126518ln-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-cosmograph-daytona-wrist-watch-m126518ln-landscape.webp" loading="lazy" alt="Cosmograph Daytona" />
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
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-movements-4131-3285-9002-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-esferas/rolex-new-watches-2025-new-dials-movements-4131-3285-9002-landscape.webp" loading="lazy" alt="CCalibre 4131, calibre 3285 y calibre 9002 " />
                                    </picture>
                                </div>
                                <div>
                                    <h3 className="headline50 c-brown-text pb-20 ">Calibre 4131, calibre 3285 y calibre 9002</h3>
                                    <p className="body-20-light pb-30">El Cosmograph Daytona, el GMT‑Master II y el Sky‑Dweller están equipados con movimientos mecánicos de cuerda automática completamente desarrollados y manufacturados por Rolex. Concentrados de tecnología, presentan un elevado rendimiento, especialmente en materia de precisión, autonomía, comodidad de uso y fiabilidad.</p>
                                    <p className="body-20-light pb-30">El Cosmograph Daytona está dotado del calibre 4131, que le permite medir un intervalo de tiempo gracias a la función de cronógrafo, además de mostrar las horas, los minutos y los segundos. El calibre 4131 posee una estética muy cuidada y destaca especialmente por lucir unos puentes con la decoración Côtes de Genève Rolex y una masa oscilante calada.</p>
                                    <p className="body-20-light pb-30">El GMT‑Master II está provisto del calibre 3285 desde 2018. Presentado ese mismo año, este movimiento le proporciona la función de fecha y un segundo huso horario con formato 24 horas como complemento a las horas, los minutos y los segundos.</p>
                                    <p className="body-20-light pb-30">El Sky‑Dweller cuenta con el calibre 9002, gracias al cual dispone de un calendario anual ―fecha y mes―, así como de un segundo huso horario con formato 24 horas, sin olvidar las horas, los minutos y los segundos. Presentado en 2023, este movimiento está destinado exclusivamente a este reloj.</p>
                                    <p className="body-20-light">Los calibres 4131, 3285 y 9002 disponen de un sistema de cuerda automática por rotor Perpetual. Gracias a la arquitectura de su barrilete y al rendimiento superior de su escape, poseen respectivamente una reserva de marcha de en torno a 72, 70 y 72 horas.</p>
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

export default ModEsferasIneditas2025;