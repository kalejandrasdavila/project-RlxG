import React from "react";
import { Helmet } from "react-helmet-async";
import useInitScripts from '../../hooks/useInitScripts';
import RlxExploreMasNModels from "../../parts/RlxExploreMasNModels";
import NavM from "../../parts/NavModels";
import Footer from '../../parts/Footer';
import "../../../main-style.css";

const Mod1980: React.FC = () => {
    useInitScripts();

    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://devjhernandez--glauser.myvtex.com/rolex/nuevos-modelos-2025/1980/';
    const baseUrl = 'https://devjhernandez--glauser.myvtex.com';


    return (
        <>
            <Helmet>
                <title>Nuevos modelos Rolex 1908 2024 - GLAUSER</title>
                <meta
                    name="description"
                    content="GLAUSER presenta el nuevo Rolex 1908, lo último en relojes de lujo suizos de Rolex. Descubra las características únicas de este nuevo modelo ahora."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://devjhernandez--glauser.myvtex.com/files/style.min.css"
                />
                <link rel="stylesheet" type="text/css" href="https://glauser.vteximg.com.br/arquivos/style-rolex-general-glauser.css" />
                <link rel="stylesheet preload" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />


                {/* URLs CANÓNICAS Y DE REDES SOCIALES*/}
                <link rel="canonical" href={currentUrl} />

                {/* Facebook Meta Tags */}
                <meta property="og:url" content={currentUrl} />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Nuevos modelos Rolex 1908 2024 - GLAUSER"
                />
                <meta
                    property="og:description"
                    content="GLAUSER presenta el nuevo Rolex 1908, lo último en relojes de lujo suizos de Rolex. Descubra las características únicas de este nuevo modelo ahora."
                />
                <meta
                    property="og:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/w-1908/rolex-new-watches-2024-1908-ambiance-m52506-0002-landscape.webp"
                />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={currentUrl} />
                <meta
                    name="twitter:title"
                    content="Nuevos modelos Rolex 1908 2024 - GLAUSER"
                />
                <meta
                    name="twitter:description"
                    content="GLAUSER presenta el nuevo Rolex 1908, lo último en relojes de lujo suizos de Rolex. Descubra las características únicas de este nuevo modelo ahora."
                />
                <meta
                    name="twitter:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/w-1908/rolex-new-watches-2024-1908-ambiance-m52506-0002-landscape.webp"
                />

                {/* Scripts JSON-LD y DataLayer */}
                <script type="text/javascript">
                    {`
                        var digitalDataLayer = {
                            environment: {
                                environmentVersion: "V7",
                                coBrandedVersion: "Bespoke",
                            },
                            page: {
                                pageType: "family page 2024",
                                pageFamilyName: "day-date"
                            }
                        };
                    `}
                </script>

                <script type="application/ld+json" dangerouslySetInnerHTML={{
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
                                "name": "Nuevos modelos Rolex 1908 2024 - GLAUSER",
                                "isPartOf": { "@id": `${baseUrl}/#website` },
                                "datePublished": "2025-04-01T05:23:53+00:00",
                                "dateModified": "2025-04-01T05:23:53+00:00",
                                "description": "GLAUSER presenta el nuevo Rolex 1908, lo último en relojes de lujo suizos de Rolex. Descubra las características únicas de este nuevo modelo ahora.",
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
                                "name": "Nuevos Modelos 2024",
                                "item": `${baseUrl}/rolex/nuevos-modelos-2025/`
                            }, {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "1908"

                            }]
                        })
                    }}
                />
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
                                        <a href="/rolex/nuevos-modelos-2025/">Nuevos Modelos 2024</a>
                                    </li>
                                    <li className="fixed-14 none-mobil active">
                                        <a className="active" href="/rolex/nuevos-modelos-2025/1980/">1908</a>
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/w-1908/rolex-new-watches-2024-1908-cover-m52506-0002-portrait.webp"
                                    />
                                    <img
                                        alt="1908"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/w-1908/rolex-new-watches-2024-1908-cover-m52506-0002-landscape.webp"
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
                                <p className="body-20-bold c-brown-text">Nuevos Modelos 2024</p>
                                <h1 className="headline50 c-brown-text pb-20">
                                    Rolex 1908 Elegancia en movimiento
                                </h1>
                            </div>
                            <div className="col-lg-8-5">
                                <p className="body-20-light">
                                    <strong>
                                        Caracterizado por una distinción excepcional, el nuevo Perpetual
                                        1908 no deja de despertar admiración.
                                    </strong>{" "}
                                    En la esfera, la luz juega con los relieves y ofrece un despliegue
                                    de reflejos con cada movimiento de la muñeca, lo que reafirma su
                                    singularidad, elegancia y refinamiento hasta en el más mínimo
                                    detalle. Un reloj que reafirma su singularidad, elegancia y
                                    refinamiento hasta en el más mínimo detalle.
                                </p>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-video pb-90-60">
                            <div className="col-6-11-11">
                                <div className="banner-10 rlx-banner-100">
                                    <div className="ratio ratio-16x9">
                                        <iframe
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            frameBorder="0"
                                            height="315"
                                            src="https://www.youtube.com/embed/coJlI-GSCDY"
                                            title="Nuevos Modelos 2024 - 1908"
                                            width="560"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">
                                    Rolex presenta una nueva versión del Perpetual 1908. Este reloj se
                                    viste ahora de platino 950 y luce una esfera azul glaciar adornada
                                    con un motivo «grano de arroz».
                                </p>
                                <p className="body-20-light pb-30">
                                    Esta decoración, que recuerda a un rosetón, presenta unos motivos
                                    geométricos tridimensionales.
                                </p>
                                <p className="body-20-light pb-30">
                                    Con la presentación de una esfera decorada mediante guilloqueado
                                    —técnica en la que se talla un motivo en una superficie con un
                                    buril—, Rolex hace honor al objetivo que persigue con la colección
                                    Perpetual: rendir homenaje al arte clásico de la relojería aplicando
                                    al mismo tiempo su savoir‑faire y su creatividad. La modalidad
                                    presentada luce una correa de piel de aligátor marrón provista de un
                                    doble cierre desplegable Dualclasp.
                                </p>
                                <p className="body-20-light">
                                    El 1908 está equipado con el Calibre 7140, un movimiento a la
                                    vanguardia de la tecnología relojera que se distingue por sus
                                    puentes con la decoración Côtes de Genève Rolex y su masa oscilante
                                    calada. El Calibre 7140 permite al 1908 mostrar el segundero
                                    pequeño, además de las horas y los minutos.
                                </p>
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
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/w-1908/rolex-new-watches-2024-1908-m52506-0002-portrait.webp"
                                        />
                                        <img
                                            alt="Tradición contemporánea"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/w-1908/rolex-new-watches-2024-1908-m52506-0002-landscape.webp"
                                        />
                                    </picture>
                                </div>
                                <div>
                                    <p className="headline50 c-brown-text pb-20">
                                        Tradición contemporánea
                                    </p>
                                    <p className="body-20-light">
                                        Inspirado en uno de los primeros relojes con rotor Perpetual de
                                        Rolex, el 1908 pertenece a la colección Perpetual, lanzada en 2023
                                        y que combina de forma armoniosa una reinterpretación del estilo
                                        relojero tradicional con la quintaesencia del savoir‑faire y del
                                        patrimonio estético de Rolex. Este reloj elegante y sobrio se
                                        bautiza con el nombre de «1908» en homenaje al año en que Hans
                                        Wilsdorf ideó el nombre «Rolex» para firmar sus creaciones
                                        relojeras y registró la marca en Suiza.
                                    </p>
                                </div>
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
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/w-1908/rolex-new-watches-2024-1908-refined-elegance-of-the-case-portrait.webp"
                                        />
                                        <img
                                            alt="Caja refinada y elegante"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/w-1908/rolex-new-watches-2024-1908-refined-elegance-of-the-case-landscape.webp"
                                        />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">
                                    Caja refinada y elegante
                                </p>
                                <p className="body-20-light">
                                    El 1908 consta de una caja de 39 mm de diámetro de graciosas líneas
                                    y dotada de un fondo transparente que permite admirar el
                                    refinamiento estético del movimiento, así como las rotaciones de la
                                    masa oscilante. Se resalta la curvatura de las asas gracias al
                                    achaflanado suave de sus bordes superiores. El bisel luce un
                                    delicado estriado en su parte inferior y una parte superior
                                    abombada. En la nueva modalidad presentada la caja está fabricada en
                                    platino 950.
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/w-1908/rolex-new-watches-2024-1908-ambiance-m52506-0002-portrait.webp"
                                    />
                                    <img
                                        alt="1908"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/w-1908/rolex-new-watches-2024-1908-ambiance-m52506-0002-landscape.webp"
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
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/w-1908/rolex-new-watches-2024-1908-movement-7140-portrait.webp"
                                        />
                                        <img
                                            alt="El Calibre Perpetual 7140"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/w-1908/rolex-new-watches-2024-1908-movement-7140-landscape.webp"
                                        />
                                    </picture>
                                </div>
                                <div className="pb-90-60">
                                    <h2 className="headline50 c-brown-text pb-30">
                                        El Calibre Perpetual 7140
                                    </h2>
                                    <p className="body-20-light pb-30">
                                        El 1908 está equipado con el Calibre 7140, un movimiento
                                        completamente desarrollado y manufacturado por Rolex. Presentado
                                        en 2023, ese mismo año se introdujo en este modelo y ha quedado
                                        reservado para él. Concentrado de tecnología, este movimiento
                                        mecánico de cuerda automática ofrece un elevado rendimiento,
                                        especialmente en materia de precisión, autonomía, comodidad de uso
                                        y fiabilidad.
                                    </p>
                                    <p className="body-20-light">
                                        El Calibre 7140 luce una estética cuidada, especialmente por sus
                                        puentes decorados Côtes de Genève Rolex (esta decoración se
                                        distingue de la Côtes de Genève tradicional por la presencia de
                                        una fina ranura pulida entre cada franja).
                                    </p>
                                </div>
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
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/w-1908/rolex-new-watches-2024-1908-leather-strap-m52506-0002-portrait.webp"
                                        />
                                        <img
                                            alt="Correa de piel"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/w-1908/rolex-new-watches-2024-1908-leather-strap-m52506-0002-landscape.webp"
                                        />
                                    </picture>
                                </div>
                                <div>
                                    <h2 className="headline50 c-brown-text pb-30">Correa de piel</h2>
                                    <p className="body-20-light">
                                        Equipado con una correa de piel de aligátor marrón o negra mate
                                        dotada de costuras tono sobre tono, el nuevo 1908 encaja
                                        perfectamente en un vestuario elegante y clásico. Su forro verde de
                                        piel de becerro es un discreto homenaje al color distintivo de la
                                        marca. La correa está equipada con un doble cierre desplegable
                                        Dualclasp en platino 950 que, gracias a su morfología especialmente
                                        estudiada, se mantiene siempre centrado en la muñeca.
                                    </p>
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
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/w-1908/rolex-new-watches-2024-superlative-chronometer-certification-portrait.webp"
                                        />
                                        <img
                                            alt="Certificación de Cronómetro Superlativo"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/w-1908/rolex-new-watches-2024-superlative-chronometer-certification-landscape.webp"
                                        />
                                    </picture>
                                </div>
                                <div>
                                    <h3 className="headline50 c-brown-text pb-20 ">
                                        Certificación de Cronómetro Superlativo
                                    </h3>
                                    <p className="body-20-light">
                                        Como todos los relojes Rolex, el Perpetual 1908 cuenta con la
                                        certificación de Cronómetro Superlativo redefinida por Rolex en
                                        2015. Esta denominación atestigua que cada reloj que sale de los
                                        talleres de la marca ha superado con éxito una serie de pruebas
                                        llevadas a cabo por Rolex en sus laboratorios internos y con arreglo
                                        a sus propios criterios, que siguen a la certificación oficial del
                                        movimiento por parte del Control Oficial Suizo de Cronómetros
                                        (COSC).
                                    </p>
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
};

export default Mod1980;