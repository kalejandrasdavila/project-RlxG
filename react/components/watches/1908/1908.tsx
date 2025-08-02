import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import useInitScripts from '../../hooks/useInitScripts';
import RlxExploreMasNModels from '../../parts/RlxExploreMasNModels';
import NavM from '../../parts/NavModels';
import Footer from '../../parts/Footer';



const M1908: React.FC = () => {
    useInitScripts();

    const [isVisible, setIsVisible] = useState<boolean>(false);
    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://devjhernandez--glauser.myvtex.com/rolex/watches/1908/';
    const baseUrl = 'https://devjhernandez--glauser.myvtex.com';

    return (
        <>
            <Helmet>
                <title>Relojes Rolex 1908 - GLAUSER</title>
                <meta
                    name="description"
                    content="Descubra los relojes Rolex 1908 en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra más en GLAUSER."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://devjhernandez--glauser.myvtex.com/files/style.min.css"
                />
                <link rel="stylesheet preload" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://glauser.vteximg.com.br/arquivos/style-rolex-general-glauser.css"
                />
                {/* SCRIPTS: ELIMINADOS de aquí. Deben ser manejados por useInitScripts o la configuración de VTEX IO. */}

                <link rel="canonical" href={currentUrl} />
                <meta property="og:url" content={currentUrl} />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Relojes Rolex 1908 - GLAUSER"
                />
                <meta
                    property="og:description"
                    content="Descubra los relojes Rolex 1908 en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra más en GLAUSER."
                />
                <meta
                    property="og:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-1908-push-m52506-0002-portrait.webp"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={currentUrl} />
                <meta
                    name="twitter:title"
                    content="Relojes Rolex 1908 - GLAUSER"
                />
                <meta
                    name="twitter:description"
                    content="Descubra los relojes Rolex 1908 en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra más en GLAUSER."
                />
                <meta
                    property="twitter:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-1908-push-m52506-0002-portrait.webp"
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
                    pageFamilyName: "1908"
                }
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
                                "name": "Relojes Rolex 1908 - GLAUSER",
                                "isPartOf": { "@id": `${baseUrl}/#website` },
                                "datePublished": "2025-04-01T05:23:53+00:00",
                                "dateModified": "2025-04-01T05:23:53+00:00",
                                "description": "Descubra los relojes Rolex 1908 en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra más en GLAUSER.",
                                "breadcrumb": { "@id": `${currentUrl}#breadcrumb` },
                                "inLanguage": "es-Es",
                                "potentialAction": { "@type": "ReadAction", "target": currentUrl }
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
                                "item": "https://devjhernandez--glauser.myvtex.com/rolex/"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Relojes Rolex",
                                "item": "https://devjhernandez--glauser.myvtex.com/rolex/coleccion-rolex/"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "1908"
                            }
                        ]
                    })}
                </script>
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
                        <div className="row-grid breadcrum-page" style={{ height: '40px' }}>
                            <div className="breadcrum-column">
                                <ul className="breadcrum-menu-list description">
                                    <li className="fixed-14 none-mobil">
                                        <a href="/rolex/">Rolex</a>
                                    </li>
                                    <li className="fixed-14">
                                        <a href="/rolex/coleccion-rolex/">Relojes Rolex</a>
                                    </li>
                                    <li className="fixed-14 none-mobil active">
                                        <a className="active" href="/rolex/watches/1908/">1908</a>
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
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/1908/rolex-perpetual-1908-cover-m52508-0008-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/1908/rolex-perpetual-1908-cover-m52508-0008-landscape.webp" loading="lazy" alt="1908" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw text-introduccion pb-90-60">
                            <div className="col-lg-2-5">
                                <h1 className="headline50 c-brown-text pb-20">Rolex Perpetual 1908
                                    <span style={{ display: 'block' }}>Clasicismo de vanguardia</span>
                                </h1>
                            </div>
                            <div className="col-lg-8-5">
                                <p className="body-20-light">
                                    <strong>Elegante, clásico e incuestionablemente contemporáneo, el 1908 es una prolongación de la intrepidez original de Rolex.</strong> Heredero del patrimonio estético de la marca y de sus innumerables innovaciones en relojería, el reloj perpetúa la búsqueda de la excelencia de la marca. Este buen ejemplo de la proeza relojera de Rolex, con la certificación de Cronómetro Superlativo, lleva el clasicismo al futuro.
                                </p>
                            </div>
                        </div>
                        <div className="row-grid-fullw reloes-componet-2-3">
                            {/* Aquí se generarán los modelos de forma dinámica */}
                            <div className="col-span3-1 col-md-span4-1 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="http://localhost:3000/rolex/watches/1908/m52508-0006/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m52508-0006-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m52508-0006-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex 1908 m52508-0006 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">1908</p>
                                    <p className="legend-16-light">39 mm, oro amarillo de 18 quilates, acabado pulido</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-2 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="http://localhost:3000/rolex/watches/1908/m52509-0002/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m52509-0002-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m52509-0002-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex 1908 m52509-0002 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">1908</p>
                                    <p className="legend-16-light">39 mm, oro blanco de 18 quilates, acabado pulido</p>
                                </div>
                            </div>
                            <div className="col-span3-1 col-md-span4-3 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="http://localhost:3000/rolex/watches/1908/m52506-0002/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m52506-0002-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m52506-0002-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex 1908 m52506-0002 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">1908</p>
                                    <p className="legend-16-light">39 mm, platino, acabado pulido</p>
                                </div>
                            </div>
                        </div>
                        {/* Contenido dinámico para los otros modelos (Visibilidad controlada por isVisible) */}
                        {isVisible && (
                            <div id="masrelojescargados" className="row-grid-fullw reloes-componet-2-3 pt-8">
                                {/* Más modelos irían aquí */}
                                <div className="col-span3-1 col-md-span4-1 c-beige-bg">
                                    <div className="pt-0-5vh text-center">
                                        <a href="http://localhost:3000/rolex/watches/1908/m52508-0007/">
                                            <picture className="rlx-pbanner-top watch-ind p-relative">
                                                <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m52508-0007-drp-upright-bba-with-shadow-portrait.webp" />
                                                <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m52508-0007-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex 1908 m52508-0007 reloj" />
                                            </picture>
                                        </a>
                                    </div>
                                    <div className="rlx-padding-indv">
                                        <p className="legend-16-bold c-brown-text">Rolex</p>
                                        <p className="body-24-bold c-brown-text pb-5">1908</p>
                                        <p className="legend-16-light">39 mm, oro amarillo de 18 quilates, acabado pulido</p>
                                    </div>
                                </div>
                                {/* Puedes añadir más aquí, por ejemplo:
                <div className="col-span3-1 col-md-span4-1 c-beige-bg"> ... </div>
                <div className="col-span3-1 col-md-span4-1 c-beige-bg"> ... </div>
                <div className="col-span3-1 col-md-span4-1 c-beige-bg"> ... </div>
                */}
                            </div>
                        )}
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center text-center pt-30-40">
                                <button
                                    id="rlx-more-watches"
                                    className="btn-primary-rlx"
                                    onClick={() => setIsVisible(!isVisible)}
                                >
                                    {isVisible ? 'Mostrar menos' : 'Descubra más'}
                                </button>
                            </div>
                        </div>

                        <div className="row-grid-fullw component-video py-90-60">
                            <div className="col-6-12">
                                <div className="banner-10 rlx-banner-100">
                                    <div className="ratio ratio-16x9">
                                        <iframe
                                            width="560"
                                            height="315"
                                            src="https://www.youtube.com/embed/XbWIT8iapZA"
                                            title="Rolex 1908"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">El 1908 perpetúa la audacia original de Rolex.</p>
                                <p className="body-20-light">Desde la creación de la marca en 1908, Rolex ha mantenido la profunda convicción de su fundador, Hans Wilsdorf, para quien el futuro del reloj de pulsera era indisociable del rendimiento superlativo. El 1908 combina todos los atributos esenciales de un reloj de pulsera de cuerda automática según él: precisión cronométrica, hermeticidad, autonomía, confort y durabilidad.</p>
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
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/1908/rolex-perpetual-1908-m52509-0006-m52508-0006-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/1908/rolex-perpetual-1908-m52509-0006-m52508-0006-landscape.webp" loading="lazy" alt="1908" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">Estilo clásico, perpetuamente reinventado</p>
                                <p className="body-20-light">Mientras que las innovaciones revolucionarias de Hans Wilsdorf se referían a las características técnicas del reloj de pulsera, también fueron fruto de una visión estética muy fuerte. La silueta de la caja, así como el diseño de la esfera del 1908 reinventan el espíritu clásico, pero muy moderno, de los relojes Oyster Perpetual originales. Como rasgo estilístico, su bisel sutilmente abombado y estriado atestigua la búsqueda de la delicadeza en todas sus formas.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/1908/rolex-perpetual-1908-m52506-0002-2401-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/1908/rolex-perpetual-1908-m52506-0002-2401-landscape.webp" loading="lazy" alt="1908" />
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
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/1908/rolex-perpetual-1908-m52509-0006-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/1908/rolex-perpetual-1908-m52509-0006-landscape.webp" loading="lazy" alt="1908" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div className="pb-90-60">
                                    <p className="headline50 c-brown-text pb-20">Un diseño elegante que vincula el pasado con el presente</p>
                                    <p className="body-20-light">Con los números 3, 9 y 12 y su segundero pequeño a las 6 h, el reloj 1908, disponible en oro amarillo o blanco de 18 quilates, así como en platino 950, reformula el estilo de un Oyster Perpetual de 1931 y le confiere absoluta modernidad. La esfera es un ejemplo de elegancia y sofisticación: Los números arábigos y los índices facetados en oro de 18 quilates sobre una esfera blanco intenso o negro intenso, o una esfera azul glaciar que presenta un motivo guilloqueado grano de arroz. Protegida por un cristal de zafiro abombado, presenta una escala de los minutos «ferrocarril» sobre el contorno de la esfera. El 1908 está equipado con unas agujas de estilos distintivos: el minutero tiene forma de espada de dos filos, mientras que una aguja con un círculo perforado marca las horas.</p>
                                </div>
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
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/1908/rolex-perpetual-1908-m52508-0008-2412uf-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/1908/rolex-perpetual-1908-m52508-0008-2412uf-landscape.webp" loading="lazy" alt="1908" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">Delicadeza y comodidad</p>
                                <p className="body-20-light">Los relojes 1908 están provistos de una correa de piel, a excepción de la versión en oro amarillo de 18 quilates, exclusivamente equipada con el brazalete Settimo. La correa de piel de aligátor marrón o negra presenta costuras tono sobre tono y forro verde interior, un discreto homenaje al color distintivo de la marca relojera. Fabricado en oro amarillo o blanco de 18 quilates o platino 950, su cierre Dualclasp aumenta el confort del usuario al abrazar la forma de la muñeca. El brazalete Settimo está fabricado en oro amarillo de 18 quilates y sus delicados elementos crean reflejos de luz. Equipado con un cierre invisible Crownclasp, presenta un diseño armonioso que evoca los brazaletes de inspiración joyera de algunos elegantes relojes antiguos.</p>
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
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/1908/rolex-perpetual-1908-m52508-0002-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/1908/rolex-perpetual-1908-m52508-0002-landscape.webp" loading="lazy" alt="Fondo del 1908" />
                                    </picture>
                                </div>
                                <p className="headline50 c-brown-text pb-20">Un fondo transparente para una revelación emocionante</p>
                                <p className="body-20-light">Al ofrecer un reloj que revela su movimiento a través de un fondo transparente, Rolex continúa innovando mientras mantiene su tradición relojera. El calibre 7140 cuenta con una masa oscilante recortada de oro amarillo con tres brazos, grabada con las palabras «Chronometer Perpetual», y con un rodamiento de bolas optimizado. El movimiento posee acabados extraordinarios, incluida la exclusiva decoración Rolex Côtes de Genève: una célebre decoración relojera tradicional, reinterpretada con una ranura pulida entre cada franja. La ventana, hecha de de zafiro prácticamente imposible de rayar, demuestra que, para Rolex, la estética del movimiento es tan importante como su rendimiento.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-beige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw component-video pb-90-60">
                            <div className="col-6-12">
                                <div className="banner-10 rlx-banner-100">
                                    <div className="ratio ratio-16x9">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/BpmiJOA2hEw" title="El calibre 7140: rendimiento y elegancia" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">El calibre 7140: rendimiento y elegancia</p>
                                <p className="body-20-light">Para impulsar el 1908, los ingenieros de relojería de Rolex han desarrollado el calibre 7140, un movimiento de cuerda automática totalmente nuevo que visualiza la hora mediante dos agujas en el centro y un segundero pequeño en la posición de las 6 h. Se han presentado varias patentes para este movimiento, que ha sido completamente desarrollado y manufacturado por Rolex. Su diseño vanguardista incorpora algunas innovaciones principales de la Manufactura para garantizar un rendimiento excepcional, incluyendo la espiral Syloxi de silicio, el escape Chronergy en una aleación de níquel‑fósforo, ambos resistentes a los campos magnéticos de alta intensidad, y los amortiguadores de golpes Paraflex que protegen al oscilador y a la rueda de escape de cualquier golpe que reciba el reloj.</p>
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

export default M1908;