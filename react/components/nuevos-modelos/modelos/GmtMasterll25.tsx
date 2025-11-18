import React from "react";
import { Helmet } from "react-helmet-async";
import useInitScripts from '../../hooks/useInitScripts';
import RlxExploreMasNModels from "../../parts/RlxExploreMasNModels";
import NavM from "../../parts/NavModels";
import Footer from '../../parts/Footer';

const ModGmtMasterII2025: React.FC = () => {
    useInitScripts();

    const currentUrl = (typeof window !== 'undefined' && window.location) ? window.location.href : 'https://glauser.myvtex.com/rolex/nuevos-modelos-2025/gmt-master-ii/';
    const baseUrl = 'https://glauser.myvtex.com';

    return (
        <>
            <Helmet>
                <title>Nuevos modelos Rolex GMT-Master II 2025 - GLAUSER</title>
                <meta
                    name="description"
                    content="GLAUSER presenta el nuevo Rolex GMT-Master II, lo último en relojes de lujo suizos de Rolex. Descubra las características únicas de este nuevo modelo ahora."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://glauser.myvtex.com/files/style.min.css"
                />
                <link rel="stylesheet" type="text/css" href="https://glauser.vteximg.com.br/arquivos/style-rolex-general-glauser.css" />
                <link rel="stylesheet preload" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

                <link rel="canonical" href={currentUrl} />

                {/* Facebook Meta Tags */}
                <meta property="og:url" content={currentUrl} />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Nuevos modelos Rolex GMT-Master II 2025 - GLAUSER"
                />
                <meta
                    property="og:description"
                    content="GLAUSER presenta el nuevo Rolex GMT-Master II, lo último en relojes de lujo suizos de Rolex. Descubra las características únicas de este nuevo modelo ahora."
                />
                <meta
                    property="og:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-gmt-master-ii/rolex-new-watches-2025-gmt-master-ii-cover-m126729vtnr-0001-portrait.webp"
                />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={currentUrl} />
                <meta
                    name="twitter:title"
                    content="Nuevos modelos Rolex GMT-Master II 2025 - GLAUSER"
                />
                <meta
                    name="twitter:description"
                    content="GLAUSER presenta el nuevo Rolex GMT-Master II, lo último en relojes de lujo suizos de Rolex. Descubra las características únicas de este nuevo modelo ahora."
                />
                <meta
                    property="twitter:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-gmt-master-ii/rolex-new-watches-2025-gmt-master-ii-cover-m126729vtnr-0001-portrait.webp"
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
                                pageFamilyName: "gmt-master-ii"
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
                                    "name": "Nuevos modelos Rolex GMT-Master II 2025 - GLAUSER",
                                    "isPartOf": { "@id": `${baseUrl}/#website` },
                                    "datePublished": "2025-04-01T05:23:53+00:00",
                                    "dateModified": "2025-04-01T05:23:53+00:00",
                                    "description": "GLAUSER presenta el nuevo Rolex GMT-Master II, lo último en relojes de lujo suizos de Rolex. Descubra las características únicas de este nuevo modelo ahora.",
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
                                "name": "GMT-Master II"
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
                                        <a href="https://glauser.myvtex.com/rolex/nuevos-modelos-2025/">Nuevos Modelos 2025</a>
                                    </li>
                                    <li className="fixed-14 none-mobil active">
                                        <a className="active" href="https://glauser.myvtex.com/rolex/nuevos-modelos-2025/gmt-master-ii/">GMT-Master II</a>
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
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-gmt-master-ii/rolex-new-watches-2025-gmt-master-ii-cover-m126729vtnr-0001-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-gmt-master-ii/rolex-new-watches-2025-gmt-master-ii-cover-m126729vtnr-0001-landscape.webp" loading="lazy" alt="GMT‑Master II" />
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
                                <h1 className="headline50 c-brown-text pb-20">Rolex GMT-Master II <span style={{ display: "block", }}>Perfecta armonía</span></h1>
                            </div>
                            <div className="col-lg-8-5">
                                <p className="body-20-light"><strong>Rolex estrena su primera esfera de cerámica en el Oyster Perpetual GMT‑Master II, en este caso en una modalidad en oro blanco de 18 quilates.</strong> Mismo material, mismo tono verde, mismo lustre, la esfera Cerachrom armoniza de maravilla con la parte diurna del disco de bisel verde y negro.</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-video pb-90-60">
                            <div className="col-6-12">
                                <div className="banner-10 rlx-banner-100">
                                    <div className="ratio ratio-16x9">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/pi-4Cl51WZo" title="Nuevos Modelos 2025 - GMT-Master II" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">Rolex desvela su primera esfera fabricada en cerámica de alta tecnología.</p>
                                <p className="body-20-light pb-30">De color verde, este nuevo componente Cerachrom se estrena en el Oyster Perpetual GMT‑Master II con corona de cuerda en el lado izquierdo de la caja y ventana de fecha en la posición de las 9 h, versión que, además, este año está disponible en oro blanco de 18 quilates.</p>
                                <p className="body-20-light pb-30">La nueva esfera Cerachrom —elaborada según el mismo principio que las de piedra natural, es decir, un disco de material fijado sobre una base de latón— presenta un tono verde idéntico al de la mitad inferior del disco de bisel Cerachom bicolor verde y negro del que está dotado el reloj.</p>
                                <p className="body-20-light pb-30">Esta nueva modalidad del GMT‑Master II cuenta con un brazalete Oyster provisto de un cierre de seguridad Oysterlock.</p>
                                <p className="body-20-light">El GMT‑Master II está equipado con el calibre 3285, un movimiento a la vanguardia de la tecnología relojera, que le permite mostrar la fecha y un segundo huso horario con formato 24 horas además de las horas, los minutos y los segundos.</p>
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
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-gmt-master-ii/rolex-new-watches-2025-gmt-master-ii-several-time-zones-m126729vtnr-0001-m126729vtnr-0001-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-gmt-master-ii/rolex-new-watches-2025-gmt-master-ii-several-time-zones-m126729vtnr-0001-m126729vtnr-0001-landscape.webp" loading="lazy" alt="GMT-Master II" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">Un único instrumento, varios husos horarios</p>
                                <p className="body-20-light pb-30">El GMT-Master, diseñado en su origen como un instrumento de ayuda a la navegación pensado para los profesionales que recorren el mundo, se ha convertido con el paso del tiempo en una referencia imprescindible entre los relojes para viajeros. Luce un diseño único e inmediatamente reconocible con su bisel giratorio bidireccional provisto de un disco graduado 24 horas. Este está disponible en versión bicolor con diferentes combinaciones cromáticas —la mitad inferior simboliza las horas del día y la superior, las de la noche— o en versión monocolor. Auténtico reloj‑herramienta, el GMT‑Master no ha dejado de evolucionar para ofrecer unas prestaciones cronométricas cada vez más punteras. En 1982, Rolex presentó el GMT‑Master II, dotado de un calibre que permite ajustar la aguja de las horas de forma independiente de la de los minutos y de la aguja 24 horas.</p>
                                <p className="body-20-light">Con su visualización tradicional por medio de aguja de las horas, minutero y segundero, su aguja 24 horas rematada en un triángulo y su bisel giratorio bidireccional con disco Cerachrom graduado 24 horas, el GMT‑Master II permite la lectura simultánea de la hora de dos husos horarios.</p>
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
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-gmt-master-ii/rolex-new-watches-2025-gmt-master-ii-high-technology-ceramic-m126729vtnr-0001-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-gmt-master-ii/rolex-new-watches-2025-gmt-master-ii-high-technology-ceramic-m126729vtnr-0001-landscape.webp" loading="lazy" alt="GMT-Master II" />
                                    </picture>
                                </div>
                                <div>
                                    <p className="headline50 c-brown-text pb-20">Cerámica de alta tecnología</p>
                                    <p className="body-20-light pb-30">Rolex ha desempeñado un papel pionero en el desarrollo de cerámicas especiales para la fabricación de algunos elementos externos. Particularmente resistentes a las rayaduras, estos materiales presentan colores inalterables y de una intensidad poco común. Además, por la naturaleza de su composición química, estas cerámicas de alta tecnología son inertes y resisten a la corrosión. La marca ha desarrollado un savoir‑faire y unos métodos de fabricación exclusivos e innovadores que le permiten producir estos componentes de cerámica con total independencia.</p>
                                    <p className="body-20-light">En la nueva modalidad del GMT‑Master II, el bisel giratorio bidireccional está dotado de un disco Cerachrom graduado 24 horas bicolor de cerámica verde y negra. Las graduaciones y los números, moldeados en hueco, se colorean depositando platino mediante una técnica PVD (Physical Vapour Deposition, depósito físico de vapor). Gracias a las muescas de su contorno, que ofrecen un excelente agarre, el bisel puede manipularse cómodamente.</p>
                                </div>
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-gmt-master-ii/rolex-new-watches-2025-gmt-master-ii-oyster-case-m126729vtnr-0001-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-gmt-master-ii/rolex-new-watches-2025-gmt-master-ii-oyster-case-m126729vtnr-0001-landscape.webp" loading="lazy" alt="Caja Oyster, símbolo de hermeticidad" />
                                    </picture>
                                </div>
                                <div>
                                    <p className="headline50 c-brown-text pb-20">Caja Oyster, símbolo de hermeticidad</p>
                                    <p className="body-20-light">Ejemplo de solidez y fiabilidad, la caja Oyster del GMT‑Master II, de 40 mm de diámetro, garantiza una hermeticidad de hasta 100 metros de profundidad. La carrura de las modalidades presentadas se trabaja a partir de un bloque macizo de oro blanco de 18 quilates. La corona de cuerda Triplock, provista de un sistema de triple hermeticidad y de protectores de la corona tallados en la carrura, se enrosca sólidamente a la caja. El cristal ―coronado, en los modelos con función de fecha, por la lente Cyclops en la posición de las 3 h para una mejor lectura del día del mes― está realizado en zafiro prácticamente imposible de rayar y presenta un tratamiento antirreflejos.</p>
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
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-gmt-master-ii/rolex-new-watches-2025-gmt-master-ii-wrist-watch-m126729vtnr-0001-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-gmt-master-ii/rolex-new-watches-2025-gmt-master-ii-wrist-watch-m126729vtnr-0001-landscape.webp" loading="lazy" alt="GMT‑Master II" />
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
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-gmt-master-ii/rolex-new-watches-2025-gmt-master-ii-3285-movement-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-gmt-master-ii/rolex-new-watches-2025-gmt-master-ii-3285-movement-landscape.webp" loading="lazy" alt="Calibre Perpetual 3285" />
                                    </picture>
                                </div>
                                <div>
                                    <h3 className="headline50 c-brown-text pb-20">Calibre 3285</h3>
                                    <p className="body-20-light pb-30">El GMT‑Master II está equipado con el calibre 3285, un movimiento completamente desarrollado y manufacturado por Rolex. Concentrado de tecnología, este movimiento mecánico de cuerda automática ofrece un elevado rendimiento, especialmente en materia de precisión, autonomía, comodidad de uso y fiabilidad.</p>
                                    <p className="body-20-light pb-30">El calibre 3285 cuenta con el escape Chronergy patentado, que combina un alto rendimiento energético con una gran seguridad de funcionamiento. Fabricado en níquel‑fósforo, resiste a los campos magnéticos de alta intensidad. El movimiento cuenta también con la espiral Parachrom azul, fabricada por Rolex en una aleación paramagnética.</p>
                                    <p className="body-20-light">El calibre 3285 dispone de un sistema de cuerda automática por rotor Perpetual. Gracias a la arquitectura de su barrilete y al rendimiento superior de su escape, posee una reserva de marcha de aproximadamente 70 horas.</p>
                                </div>
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-gmt-master-ii/rolex-new-watches-2025-gmt-master-ii-oyster-bracelet-m126729vtnr-0001-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-gmt-master-ii/rolex-new-watches-2025-gmt-master-ii-oyster-bracelet-m126729vtnr-0001-landscape.webp" loading="lazy" alt="Brazaletes Oystero" />
                                    </picture>
                                </div>
                                <div>
                                    <p className="headline50 c-brown-text pb-20">Brazalete Oyster y cierre de seguridad Oysterlock</p>
                                    <p className="body-20-light pb-30">El GMT‑Master II en oro blanco de 18 quilates con esfera Cerachrom verde y disco de bisel Cerachrom verde y negro cuenta con un brazalete Oyster.</p>
                                    <p className="body-20-light">El brazalete Oyster del GMT‑Master II está equipado con un cierre de seguridad desplegable Oysterlock, que previene cualquier apertura involuntaria. Dispone del cómodo sistema de extensión rápida Easylink, desarrollado por Rolex, que permite ajustar fácilmente su longitud en torno a unos 5 mm. En la modalidad presentada incorpora, en el interior de sus eslabones, inserciones de cerámica —diseñadas por la marca y patentadas— para aumentar su fluidez de uso y su longevidad.</p>
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

export default ModGmtMasterII2025;