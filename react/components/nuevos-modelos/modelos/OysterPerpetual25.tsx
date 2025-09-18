import React from "react";
import { Helmet } from "react-helmet-async";
import useInitScripts from '../../hooks/useInitScripts';
import RlxExploreMasNModels from "../../parts/RlxExploreMasNModels";
import NavM from "../../parts/NavModels";
import Footer from '../../parts/Footer';

const ModOysterPerpetual2025: React.FC = () => {
    useInitScripts();

    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://devjhernandez--glauser.myvtex.com/rolex/nuevos-modelos-2025/oyster-perpetual/';
    const baseUrl = 'https://devjhernandez--glauser.myvtex.com';

    return (
        <>
            <Helmet>
                <title>Nuevos modelos Rolex Oyster Perpetual 2025 - GLAUSER</title>
                <meta
                    name="description"
                    content="GLAUSER presenta el nuevo Rolex Oyster Perpetual, lo último en relojes de lujo suizos de Rolex. Descubra las características únicas de este nuevo modelo ahora."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://devjhernandez--glauser.myvtex.com/files/style.min.css"
                />
                <link rel="stylesheet" type="text/css" href="https://glauser.vteximg.com.br/arquivos/style-rolex-general-glauser.css" />
                <link rel="stylesheet preload" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

                <link rel="canonical" href={currentUrl} />

                {/* Facebook Meta Tags */}
                <meta property="og:url" content={currentUrl} />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Nuevos modelos Rolex Oyster Perpetual 2025 - GLAUSER"
                />
                <meta
                    property="og:description"
                    content="GLAUSER presenta el nuevo Rolex Oyster Perpetual, lo último en relojes de lujo suizos de Rolex. Descubra las características únicas de este nuevo modelo ahora."
                />
                <meta
                    property="og:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-oyster-perpetual/rolex-new-watches-2025-oyster-perpetual-cover-m127334-0001-portrait.webp"
                />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={currentUrl} />
                <meta
                    name="twitter:title"
                    content="Nuevos modelos Rolex Oyster Perpetual 2025 - GLAUSER"
                />
                <meta
                    name="twitter:description"
                    content="GLAUSER presenta el nuevo Rolex Oyster Perpetual, lo último en relojes de lujo suizos de Rolex. Descubra las características únicas de este nuevo modelo ahora."
                />
                <meta
                    property="twitter:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-oyster-perpetual/rolex-new-watches-2025-oyster-perpetual-cover-m127334-0001-portrait.webp"
                />

                {/* Scripts JSON-LD y DataLayer*/}
                <script type="text/javascript">
                    {`
                        var digitalDataLayer = {
                            environment: {
                                environmentVersion: "V7",
                                coBrandedVersion: "Bespoke"
                            },
                            page: {
                                pageType: "family page 2025",
                                pageFamilyName: "oyster-perpetual"
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
                                    "name": "Nuevos modelos Rolex Oyster Perpetual 2025 - GLAUSER",
                                    "isPartOf": { "@id": `${baseUrl}/#website` },
                                    "datePublished": "2025-04-01T05:23:53+00:00",
                                    "dateModified": "2025-04-01T05:23:53+00:00",
                                    "description": "GLAUSER presenta el nuevo Rolex Oyster Perpetual, lo último en relojes de lujo suizos de Rolex. Descubra las características únicas de este nuevo modelo ahora.",
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
                                "name": "Oyster Perpetual"
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
                                        <a href="/rolex/nuevos-modelos-2025/">Nuevos Modelos 2025</a>
                                    </li>
                                    <li className="fixed-14 none-mobil active">
                                        <a className="active" href="/rolex/nuevos-modelos-2025/oyster-perpetual/">Oyster Perpetual</a>
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
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-oyster-perpetual/rolex-new-watches-2025-oyster-perpetual-cover-m127334-0001-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-oyster-perpetual/rolex-new-watches-2025-oyster-perpetual-cover-m127334-0001-landscape.webp" loading="lazy" alt="Oyster Perpetual" />
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
                                <h1 className="headline50 c-brown-text pb-20">Rolex Oyster Perpetual <span style={{ display: "block", }}>Frescura de una nueva imagen</span></h1>
                            </div>
                            <div className="col-lg-8-5">
                                <p className="body-20-light"><strong>La suavidad de un tono lavanda, la calidez de un beis arena, la frescura de un verde pistacho.</strong> El Oyster Perpetual está disponible en toda una variedad de matices que colorean un nuevo surtido de esferas. Son semblantes que celebran la unión entre las tonalidades pastel, la intensidad de la laca y el aterciopelado de un acabado mate.</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-video pb-90-60">
                            <div className="col-6-12">
                                <div className="banner-10 rlx-banner-100">
                                    <div className="ratio ratio-16x9">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/sR_KNO6mey8" title="Nuevos Modelos 2025 - Oyster Perpetual" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">Rolex amplía la gama Oyster Perpetual —reputada por la variedad y originalidad de sus diferentes rostros— con esferas lacadas en tonos pastel, suaves a la par que ligeros.</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-oyster-perpetual/rolex-new-watches-2025-oyster-perpetual-m276200-0008-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-oyster-perpetual/rolex-new-watches-2025-oyster-perpetual-m276200-0008-landscape.webp" loading="lazy" alt="Esfera lavender" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="body-20-light pb-30">«Lavender», beis o «pistachio», estas nuevas esferas lacadas se distinguen además por su acabado mate, una combinación que no figura en el actual catálogo de la marca.</p>
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-oyster-perpetual/rolex-new-watches-2025-oyster-perpetual-dials-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-oyster-perpetual/rolex-new-watches-2025-oyster-perpetual-dials-landscape.webp" loading="lazy" alt="Esferas" />
                                    </picture>
                                </div>
                                <p className="body-20-light pb-30">La esfera lacada mate lavender se presenta en el Oyster Perpetual 28 y la esfera lacada mate beis, en el Oyster Perpetual 36. En cuanto a la esfera lacada mate pistachio, viste principalmente el Oyster Perpetual 41 que, por otra parte, ha evolucionado gracias a una caja Oyster rediseñada y a un cierre Oysterclasp cuyo grosor se ha reducido.</p>
                                <p className="body-20-light pb-30">El Oyster Perpetual 28 está equipado con el calibre 2232, mientras que el Oyster Perpetual 36 y el Oyster Perpetual 41, por su parte, están dotados con el calibre 3230. Estos dos movimientos a la vanguardia de la tecnología relojera ofrecen las funciones esenciales: horas, minutos y segundos.</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-oyster-perpetual/rolex-new-watches-2025-oyster-perpetual-essence-of-the-oyster-m126000-0012-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-oyster-perpetual/rolex-new-watches-2025-oyster-perpetual-essence-of-the-oyster-m126000-0012-landscape.webp" loading="lazy" alt="Esfera beis" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">La quintaesencia del Oyster</p>
                                <p className="body-20-light">El Oyster Perpetual es el heredero directo del Oyster original, primer reloj de pulsera hermético del mundo, sobre el que Rolex ha construido su reputación desde 1926. Estos relojes poseen todos los atributos fundamentales de la colección Oyster Perpetual, a saber, precisión cronométrica, hermeticidad de la caja Oyster y cuerda automática del movimiento por rotor Perpetual. Están fabricados exclusivamente en acero Oystersteel y presentan acabados cuidados: son la forma más depurada del cronómetro de muñeca. Estos relojes en esencia atemporales se reinventan constantemente y han ido incorporando de forma gradual las innovaciones técnicas de la marca. Gracias a sus colores y al diseño de su esfera, que varían y evolucionan, presumen de estar siempre de rabiosa actualidad.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-oyster-perpetual/rolex-new-watches-2025-oyster-perpetual-ambiance-m276200-0008-2501ad-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-oyster-perpetual/rolex-new-watches-2025-oyster-perpetual-ambiance-m276200-0008-2501ad-landscape.webp" loading="lazy" alt="Esfera lavender del Oyster Perpetual" />
                                </picture>
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
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-oyster-perpetual/rolex-new-watches-2025-oyster-perpetual-oyster-case-m134300-0006-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-oyster-perpetual/rolex-new-watches-2025-oyster-perpetual-oyster-case-m134300-0006-landscape.webp" loading="lazy" alt="Esfera verde del Oyster Perpetual" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div>
                                    <p className="headline50 c-brown-text pb-20">Caja Oyster, símbolo de hermeticidad</p>
                                    <p className="body-20-light">Ejemplo de solidez y elegancia, la caja Oyster del Oyster Perpetual 28, el Oyster Perpetual 36 y el Oyster Perpetual 41, de un diámetro de 28 mm, de 36 mm y de 41 mm respectivamente, garantiza una hermeticidad de hasta 100 metros de profundidad. La carrura se trabaja a partir de un bloque macizo de acero Oystersteel y está coronada por un bisel abombado y pulido. La corona de cuerda Twinlock, provista de un sistema de doble hermeticidad, se enrosca sólidamente a la caja. El cristal está realizado en zafiro prácticamente imposible de rayar y presenta un tratamiento antirreflejos. Totalmente hermética, la caja Oyster protege de forma óptima el movimiento que alberga en su interior.</p>
                                </div>
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-oyster-perpetual/rolex-new-watches-2025-oyster-perpetual-2232-and-3230-movement-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-oyster-perpetual/rolex-new-watches-2025-oyster-perpetual-2232-and-3230-movement-landscape.webp" loading="lazy" alt="Calibre Perpetual 2232 y 3230" />
                                    </picture>
                                </div>
                                <div>
                                    <p className="headline50 c-brown-text pb-20">Calibres 2232 y 3230</p>
                                    <p className="body-20-light pb-30">El Oyster Perpetual 28 está equipado con el calibre 2232, y el Oyster Perpetual 36, así como el Oyster Perpetual 41, están dotados con el calibre 3230. Concentrados de tecnología, estos movimientos mecánicos de cuerda automática —completamente desarrollados y manufacturados por Rolex— presentan un elevado rendimiento, especialmente en materia de precisión, autonomía, comodidad de uso y fiabilidad.</p>
                                    <p className="body-20-light">Los calibres 2232 y 3230 llevan un mecanismo de cuerda automática por rotor Perpetual. El primero garantiza una reserva de marcha de aproximadamente 55 horas. En cuanto al segundo, posee una reserva de marcha de aproximadamente 70 horas gracias a la arquitectura de su barrilete y al rendimiento superior de su escape.</p>
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
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-oyster-perpetual/rolex-new-watches-2025-oyster-perpetual-ambiance-m276200-0008-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-oyster-perpetual/rolex-new-watches-2025-oyster-perpetual-ambiance-m276200-0008-landscape.webp" loading="lazy" alt="Esfera lavender del Oyster Perpetual" />
                                </picture>
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
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-oyster-perpetual/rolex-new-watches-2025-oyster-perpetual-oyster-bracelet-m134300-0006-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-oyster-perpetual/rolex-new-watches-2025-oyster-perpetual-oyster-bracelet-m134300-0006-landscape.webp" loading="lazy" alt="Brazalete Oyster" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div>
                                    <p className="headline50 c-brown-text pb-20">Brazalete Oyster</p>
                                    <p className="body-20-light pb-30">Los relojes de la gama Oyster Perpetual están dotados de un brazalete Oyster. Este brazalete metálico de tres elementos, desarrollado a finales de la década de 1930, destaca por su solidez.</p>
                                    <p className="body-20-light">En estos relojes, el brazalete está fabricado en acero Oystersteel y provisto de un cierre desplegable Oysterclasp. Dispone del cómodo sistema de extensión rápida Easylink, desarrollado por Rolex, que permite ajustar fácilmente su longitud en torno a unos 5 mm.</p>
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

export default ModOysterPerpetual2025;