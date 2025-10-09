import React from "react";
import { Helmet } from "react-helmet-async";
import useInitScripts from '../../hooks/useInitScripts';
import RlxExploreMasNModels from "../../parts/RlxExploreMasNModels";
import NavM from "../../parts/NavModels";
import Footer from '../../parts/Footer';

const ModLandDweller2025: React.FC = () => {
    useInitScripts();

    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://glauser.myvtex.com/rolex/nuevos-modelos-2025/land-dweller/';
    const baseUrl = 'https://glauser.myvtex.com'; // La URL base de tu sitio en producción

    return (
        <>
            <Helmet>
                <title>Nuevos modelos Rolex Land-Dweller 2025 - GLAUSER</title>
                <meta
                    name="description"
                    content="GLAUSER presenta el nuevo Rolex Land-Dweller, lo último en relojes de lujo suizos de Rolex. Descubra las características únicas de este nuevo modelo ahora."
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
                    content="Nuevos modelos Rolex Land-Dweller 2025 - GLAUSER"
                />
                <meta
                    property="og:description"
                    content="GLAUSER presenta el nuevo Rolex Land-Dweller, lo último en relojes de lujo suizos de Rolex. Descubra las características únicas de este nuevo modelo ahora."
                />
                <meta
                    property="og:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-cover-m127334-0001-portrait.webp"
                />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={currentUrl} />
                <meta
                    name="twitter:title"
                    content="Nuevos modelos Rolex Land-Dweller 2025 - GLAUSER"
                />
                <meta
                    name="twitter:description"
                    content="GLAUSER presenta el nuevo Rolex Land-Dweller, lo último en relojes de lujo suizos de Rolex. Descubra las características únicas de este nuevo modelo ahora."
                />
                <meta
                    property="twitter:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-cover-m127334-0001-portrait.webp"
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
                                pageFamilyName: "land-dweller"
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
                                    "name": "Nuevos modelos Rolex Land-Dweller 2025 - GLAUSER",
                                    "isPartOf": { "@id": `${baseUrl}/#website` },
                                    "datePublished": "2025-04-01T05:23:53+00:00",
                                    "dateModified": "2025-04-01T05:23:53+00:00",
                                    "description": "GLAUSER presenta el nuevo Rolex Land-Dweller, lo último en relojes de lujo suizos de Rolex. Descubra las características únicas de este nuevo modelo ahora.",
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
                                "name": "Land-Dweller"
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
                                        <a className="active" href="/rolex/nuevos-modelos-2025/land-dweller/">Land-Dweller</a>
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
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-cover-m127334-0001-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-cover-m127334-0001-landscape.webp" loading="lazy" alt="Land-Dweller" />
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
                                <h1 className="headline50 c-brown-text pb-20">Rolex Land-Dweller <span style={{ display: "block", }}>Ampliar horizontes</span></h1>
                            </div>
                            <div className="col-lg-8-5">
                                <p className="body-20-light"><strong>Con el Oyster Perpetual Land‑Dweller, Rolex inaugura un nuevo capítulo de su historia.</strong> Este reloj contemporáneo representa el punto culminante del savoir‑faire de la marca a día de hoy, resultado de un siglo de maestría relojera. Está pensado para aquellos hombres y mujeres que ocupan su lugar en el mundo y forjan su propio destino transformando cada instante en una oportunidad.</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-video pb-90-60">
                            <div className="col-6-12">
                                <div className="banner-10 rlx-banner-100">
                                    <div className="ratio ratio-16x9">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Xo9ZabYdCFQ" title="Nuevos Modelos 2025 - Land-Dweller" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">Rolex presenta el Oyster Perpetual Land‑Dweller, un nuevo reloj que se distingue por su audacia estética y técnica.</p>
                                <p className="body-20-light">Propuesto en dos tamaños —36 mm y 40 mm de diámetro—, simboliza la excelencia relojera propia de la marca y ha sido concebido para ofrecer un rendimiento superlativo en cualquier circunstancia.</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-m127285tbr-0002-and-m127336-0001-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-m127285tbr-0002-and-m127336-0001-landscape.webp" loading="lazy" alt="Land-Dweller 36 y 40" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="body-20-light pb-30">Con 32 patentes y solicitudes de patente en su haber —de las que 18 son exclusivas y 16 tienen que ver con el movimiento—, atestigua la voluntad de innovación que mueve a Rolex y se muestra como un aliado ideal en todas las situaciones de la vida.</p>
                                <p className="body-20-light">El Land‑Dweller reinterpreta el diseño exigente y ambicioso del reloj con brazalete integrado. Está dotado de un brazalete metálico inédito, bautizado como Flat Jubilee, que se funde de manera fluida con la caja Oyster. El Land‑Dweller cuenta con una caja Oyster cuya arquitectura ha sido reformulada. Esta caja, coronada por un bisel o bien estriado o bien engastado con diamantes, alberga una esfera que destaca por sus delicados detalles y por su motivo «nido de abeja».</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-cutting-edge-movement-m127285tbr-0002-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-cutting-edge-movement-m127285tbr-0002-landscape.webp" loading="lazy" alt="Fondo transparente" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="body-20-light">En el interior del Land-Dweller late el calibre 7135, un movimiento a la vanguardia de la investigación relojera que destaca por su frecuencia de 5 hercios. Más delgado que la mayoría de los movimientos Rolex, ofrece, no obstante, unas prestaciones extraordinarias. Este excepcional rendimiento se debe a un sistema de regulación compuesto por un innovador escape, el Dynapulse, y un oscilador de última generación.</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-m127334-0001-m127285tbr-0002-m127336-0001-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-m127334-0001-m127285tbr-0002-m127336-0001-landscape.webp" loading="lazy" alt="Variedades del Land-Dweller" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="body-20-light">La primera modalidad presentada es un Land‑Dweller 40 en versión Rolesor blanco (combinación de acero Oystersteel y oro blanco). Está provista de un bisel estriado, así como de una esfera blanco intenso con motivo «nido de abeja». La segunda, un Land‑Dweller 36, está realizada en oro Everose de 18 quilates. Luce una esfera idéntica, aunque cuenta con diez brillantes de talla baguette engastados a modo de índices y un bisel que resplandece con el fuego de 44 diamantes talla trapecio. La tercera modalidad, fabricada en platino 950, es un Land‑Dweller 40 dotado de un bisel estriado y una esfera azul glaciar —un color reservado a los relojes elaborados en este prestigioso metal—, también con motivo «nido de abeja».</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-roger-federer-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-roger-federer-landscape.webp" loading="lazy" alt="Roger Federer" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-beige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-rfederer-m127334-0001-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-rfederer-m127334-0001-landscape.webp" loading="lazy" alt="Land‑Dweller 40" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div>
                                    <p className="headline50 c-brown-text pb-20">La osadía de imaginar el mañana</p>
                                    <p className="body-20-light">El Land‑Dweller, impregnado de audacia y con la vista puesta en el futuro, redefine los parámetros de la perfección relojera según Rolex. Encarna la filosofía de abrazar el momento presente al tiempo que se construye el futuro. El mensaje que transmite es sencillo pero potente: estar en sintonía con su tiempo, con su entorno, para construir el mundo del mañana. Demuestra, además, la capacidad de la marca para perfeccionar su savoir‑faire de forma perpetua.</p>
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
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-dial-with-honeycomb-motif-m127336-0001-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-dial-with-honeycomb-motif-m127336-0001-landscape.webp" loading="lazy" alt="Esfera con motivo «nido de abeja»" />
                                    </picture>
                                </div>
                                <div>
                                    <p className="headline50 c-brown-text pb-20">Esfera con motivo «nido de abeja» y visualización exclusiva</p>
                                    <p className="body-20-light pb-30">El «nido de abeja» que adorna la esfera del Land-Dweller es un motivo decorativo tremendamente gráfico reformulado por Rolex con celdillas estilizadas y con un ligero relieve. Se lleva a cabo con ayuda de técnicas tradicionales o de alta tecnología, todas ellas realizadas de forma interna. Así, la superficie —con un fino acabado satinado cuando la esfera es blanco intenso o con acabado tipo sol cuando es azul glaciar— se elabora con métodos clásicos. Para recortar las celdillas y crear las delicadas estrías de las ranuras que hay entre ellas se utiliza un láser de femtosegundo.</p>
                                    <p className="body-20-light">Los elementos de visualización del Land‑Dweller son exclusivos de este nuevo reloj. Los números 6 y 9, inspirados en los que figuran en la esfera del Explorer o del Air-King, se caracterizan por su centro abierto, que aporta un toque de modernidad. En los índices, el material luminiscente aflora por cada extremo del componente. Este diseño es fruto de un procedimiento de fabricación innovador, que ha sido objeto de una solicitud de patente, y del empleo de una sustancia de mayor dureza que el material habitualmente utilizado por Rolex, pero cuyo rendimiento luminiscente, tono a la luz del día y color de emisión permanecen inalterados. En cuanto a las agujas, creadas específicamente para este reloj, se reconocen por su forma perfectamente rectilínea.</p>
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
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-yuja-wang-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-yuja-wang-landscape.webp" loading="lazy" alt="Yuja Wang" />
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
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-bracelet-m127334-0001-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-bracelet-m127334-0001-landscape.webp" loading="lazy" alt="Brazalete Flat Jubilee" />
                                    </picture>
                                </div>
                                <div>
                                    <p className="headline50 c-brown-text pb-20">Brazalete Flat Jubilee</p>
                                    <p className="body-20-light pb-30">Concebido especialmente para el Land-Dweller, el brazalete Flat Jubilee es una reinterpretación del emblemático brazalete Jubilee presentado en el Datejust en 1945. Mantiene la misma estructura de cinco elementos, con tres pequeños en el centro y dos, más anchos, en los extremos. El nuevo brazalete se diferencia, no obstante, por la superficie plana de estos elementos. Además, los centrales están pulidos y ligeramente elevados con respecto a los laterales. Estos últimos presentan un acabado satinado técnico, exceptuando el borde, que está pulido.</p>
                                    <p className="body-20-light pb-30">Se ha desarrollado asimismo un sistema de sujeción sólido y duradero, con el fin de garantizar una integración perfecta y fluida del brazalete Flat Jubilee en la caja Oyster. Este sistema complejo e innovador ha sido objeto de una solicitud de patente. Incorpora, igualmente, inserciones de cerámica. Por primera vez, estos pequeños tubos patentados, creados por Rolex para prevenir el desgaste, se utilizan para proteger la varilla de fijación, esto es, el eje metálico que sujeta el brazalete a la carrura.</p>
                                    <p className="body-20-light">Cómodo y flexible, el Flat Jubilee está dotado de un elegante cierre invisible Crownclasp que contribuye a la armonía visual del reloj. En las versiones en oro Everose de 18 quilates y en platino 950, este brazalete incluye inserciones de cerámica en el interior de los elementos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-beige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-oyster-case-m127334-0001-m127334-0001-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-oyster-case-m127334-0001-m127334-0001-landscape.webp" loading="lazy" alt="Caja Oyster" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div>
                                    <p className="headline50 c-brown-text pb-20">Caja Oyster específica</p>
                                    <p className="body-20-light pb-30">El Land‑Dweller está equipado con una caja Oyster específicamente desarrollada para él. De hecho, el sistema de hermeticidad del cristal se ha modificado debido a las limitaciones asociadas al acabado satinado técnico de la parte superior de la carrura.</p>
                                    <p className="body-20-light">Esta nueva caja con los flancos curvados y pulidos cuenta con chaflanes —las aristas superiores son achaflanadas— igualmente pulidos. La caja está provista de un fondo con cristal de zafiro que permite admirar el refinamiento estético del movimiento, y coronada con un bisel estriado que se ha remodelado para conferirle un aspecto resueltamente contemporáneo, con estrías más amplias que las de otros modelos Clásicos. Las versiones en metal precioso también están disponibles con un bisel engastado con diamantes talla trapecio. La caja Oyster, con una hermeticidad garantizada hasta 100 metros de profundidad, protege de manera óptima el movimiento que alberga en su interior.</p>
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
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-ambiance-m127336-0001-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-land-dweller-ambiance-m127336-0001-landscape.webp" loading="lazy" alt="Caja Oyster" />
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
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-7135-movement-calibre-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-7135-movement-calibre-landscape.webp" loading="lazy" alt="Calibre 7135" />
                                    </picture>
                                </div>
                                <div>
                                    <p className="headline50 c-brown-text pb-20">Calibre 7135, un movimiento de alta frecuencia</p>
                                    <p className="body-20-light pb-30">El Land‑Dweller está equipado con el calibre 7135, un movimiento íntegramente desarrollado y manufacturado por Rolex, presentado este año. Este movimiento mecánico de cuerda automática, evolución del 7140 que incorpora el modelo 1908 desde su lanzamiento en 2023, presenta un elevado rendimiento, especialmente en materia de precisión, autonomía, comodidad de uso y fiabilidad.</p>
                                    <p className="body-20-light">El calibre 7135, que funciona gracias a un sistema de cuerda automática por rotor Perpetual, se caracteriza principalmente por un sistema de regulación —escape y oscilador— revolucionario, que le permite moverse con una frecuencia de 5 hercios, esto es, 36 000 alternancias por hora, y así medir el tiempo con una precisión de décimas de segundo. Gracias a la arquitectura de su barrilete y al rendimiento superior de su escape, posee una reserva de marcha de aproximadamente 66 horas. El calibre 7135 tiene una estética muy cuidada. Sus puentes lucen la decoración Côtes de Genève Rolex y su masa oscilante, calada, está realizada en oro amarillo.</p>
                                </div>
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-dynapulse-escapement-np25-lancia-solar-still-50k-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-dynapulse-escapement-np25-lancia-solar-still-50k-landscape.webp" loading="lazy" alt="Escape Dynapulse" />
                                    </picture>
                                </div>
                                <div>
                                    <p className="body-20-light"><strong>Escape Dynapulse</strong></p>
                                    <p className="body-20-light pb-30">El escape Dynapulse de alto rendimiento, primer elemento del sistema de regulación, ha sido objeto de siete solicitudes de patente. Mejora ostensiblemente la forma en que la energía producida por el barrilete se transmite al oscilador.</p>
                                    <p className="body-20-light">El Dynapulse es un escape de distribución secuencial elaborado con silicio, un material que resiste a los campos magnéticos de alta intensidad. Consta de una rueda de transmisión que engrana con dos ruedas de distribución. Estas activan, por turnos, la báscula de impulsión que, a su vez, acciona el oscilador. Esta innovadora arquitectura ha permitido reducir el consumo de energía del escape, pues las interacciones entre los diferentes elementos se realizan por rodamiento, en lugar de por deslizamiento como en los escapes de áncora suiza utilizados por la marca en el resto de sus movimientos mecánicos.</p>
                                </div>
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-state-of-the-art-oscillator-np25-lancia-fusee-still-50k-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-state-of-the-art-oscillator-np25-lancia-fusee-still-50k-landscape.webp" loading="lazy" alt="Oscilador de vanguardia" />
                                    </picture>
                                </div>
                                <div>
                                    <p className="body-20-light"><strong>Oscilador</strong></p>
                                    <p className="body-20-light pb-30">Otro componente fundamental del sistema de regulación es el oscilador del calibre 7135, que también hace gala de una excelente resistencia a los campos magnéticos de alta intensidad. Este rendimiento se hace posible gracias a diversas innovaciones.</p>
                                    <p className="body-20-light pb-30">Para empezar, el eje de volante está fabricado en cerámica de alta tecnología, patentada y exclusiva de Rolex. Se trata de un material de extrema solidez y resiliencia que se usa únicamente para la fabricación del eje de volante.</p>
                                    <p className="body-20-light pb-30">El volante, por su parte, se fabrica en latón optimizado. Es la primera vez que Rolex recurre a esta aleación que, al igual que la cerámica, resiste a los campos magnéticos de alta intensidad.</p>
                                    <p className="body-20-light pb-30">El calibre 7135 está equipado con una espiral Syloxi cuyas espiras han sido modificadas: su grosor se ha incrementado con el propósito de hacerlas más rígidas. Esta adaptación confiere una mayor potencia a esta espiral de silicio patentada, algo indispensable para que el movimiento alcance una frecuencia de 5 hercios, cadencia que permite que el reloj mantenga su precisión cronométrica independientemente de los movimientos del brazo de quien lo luce en la muñeca.</p>
                                    <p className="body-20-light">Unos amortiguadores de golpes Paraflex de alto rendimiento optimizados sostienen el eje de volante de cerámica. Presentan una arquitectura interna específica que permite que el eje de volante efectúe sus rotaciones con fluidez y regularidad sin importar la posición.</p>
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
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-roger-federer-wrist-watch-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-roger-federer-wrist-watch-landscape.webp" loading="lazy" alt="Land-Dweller" />
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
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-rfederer-m127334-0001-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-rfederer-m127334-0001-landscape.webp" loading="lazy" alt="Land‑Dweller 40" />
                                    </picture>
                                </div>
                                <div>
                                    <p className="headline50 c-brown-text pb-20">La osadía de imaginar el mañana</p>
                                    <p className="body-20-light">El Land‑Dweller, impregnado de audacia y con la vista puesta en el futuro, redefine los parámetros de la perfección relojera según Rolex. Encarna la filosofía de abrazar el momento presente al tiempo que se construye el futuro. El mensaje que transmite es sencillo pero potente: estar en sintonía con su tiempo, con su entorno, para construir el mundo del mañana. Demuestra, además, la capacidad de la marca para perfeccionar su savoir‑faire de forma perpetua.</p>
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
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-dial-with-honeycomb-motif-m127336-0001-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/w-land-dweller/rolex-new-watches-2025-the-land-dweller-dial-with-honeycomb-motif-m127336-0001-landscape.webp" loading="lazy" alt="Esfera con motivo «nido de abeja»" />
                                    </picture>
                                </div>
                                <div>
                                    <p className="headline50 c-brown-text pb-20">Esfera con motivo «nido de abeja» y visualización exclusiva</p>
                                    <p className="body-20-light pb-30">El «nido de abeja» que adorna la esfera del Land-Dweller es un motivo decorativo tremendamente gráfico reformulado por Rolex con celdillas estilizadas y con un ligero relieve. Se lleva a cabo con ayuda de técnicas tradicionales o de alta tecnología, todas ellas realizadas de forma interna. Así, la superficie —con un fino acabado satinado cuando la esfera es blanco intenso o con acabado tipo sol cuando es azul glaciar— se elabora con métodos clásicos. Para recortar las celdillas y crear las delicadas estrías de las ranuras que hay entre ellas se utiliza un láser de femtosegundo.</p>
                                    <p className="body-20-light">Los elementos de visualización del Land‑Dweller son exclusivos de este nuevo reloj. Los números 6 y 9, inspirados en los que figuran en la esfera del Explorer o del Air-King, se caracterizan por su centro abierto, que aporta un toque de modernidad. En los índices, el material luminiscente aflora por cada extremo del componente. Este diseño es fruto de un procedimiento de fabricación innovador, que ha sido objeto de una solicitud de patente, y del empleo de una sustancia de mayor dureza que el material habitualmente utilizado por Rolex, pero cuyo rendimiento luminiscente, tono a la luz del día y color de emisión permanecen inalterados. En cuanto a las agujas, creadas específicamente para este reloj, se reconocen por su forma perfectamente rectilínea.</p>
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

export default ModLandDweller2025;