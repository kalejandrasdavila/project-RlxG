import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import useInitScripts from "../../components/hooks/useInitScripts";
import RlxExploreMasNModels from "../../components/parts/RlxExploreMas";
import Nav from '../../components/parts/Nav';
import Footer from '../../components/parts/Footer';
import { useCssHandles } from 'vtex.css-handles';
import '../../main-style.css';


const CSS_HANDLES = [
    //HEADER//
    'headercomponent', 'rlx_html', 'home_rlx', 'rlx_menu', 'rlx_container', 'row_grid', 'rlx_logo', 'placa_rolex_logo',
    'breadcrum_page', 'breadcrum_column', 'breadcrum_menu_list', 'description', 'fixed_14', 'active',
    ///c-lightbeige-bg//
    'row_grid_fullw', 'grid_column_full', 'rlx_pbanner_top', 'p_relative', 'rlx_container_content', 'py_90_60', 'text_introduccion',
    'pb_90_60', 'col_lg_8_5', 'col_lg_2_5', 'headline50', 'c_brown_text', 'pb_20', 'body_20_light', 'component_video', 'col_6_12',
    'headline36', 'component_2_col', 'fixed_16', 'btn_label_icon_rlx', 'component_3_col', 'col_span_2_1', 'col_6_2', 'body_24_bold',
    'legend_16_light', 'col_span_2_2', 'col_6_6', 'col_6_10', 'col_lg_2_6', 'component_3_col_2', 'pt_10', 'col_lg_8_6', 'pb_30', 'ratio',
    'ratio_16x9', 'cuerpotexto', 'col_text_center', 'image_center'


] as const


const WatchMaking: React.FC = () => {
    useInitScripts();
    const handles = useCssHandles(CSS_HANDLES)

    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://glauser.myvtex.com/rolex/watchmaking/';
    const baseUrl = 'https://glauser.myvtex.com';

    return (
        <>
            <Helmet>
                <title>Conocimientos de relojería de Rolex - GLAUSER</title>
                <meta
                    name="description"
                    content="Descubra el enfoque superlativo de Rolex para la relojería y obtenga más información sobre la incesante búsqueda de la excelencia de Rolex en GLAUSER en Colombia"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://glauser.myvtex.com/files/style.min.css"
                />
                <link rel="stylesheet" type="text/css" href="https://glauser.vteximg.com.br/arquivos/style-rolex-general-glauser.css" />
                <link rel="stylesheet preload" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

                <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

                <link rel="canonical" href={currentUrl} />

                <meta property="og:url" content={currentUrl} />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Conocimientos de relojería de Rolex - GLAUSER"
                />
                <meta
                    property="og:description"
                    content="Descubra el enfoque superlativo de Rolex para la relojería y obtenga más información sobre la incesante búsqueda de la excelencia de Rolex en GLAUSER en Colombia"
                />
                <meta
                    property="og:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watchmaking/rolex-watchmaking-cover-2023-watchmaking-features-manifesto-still-portrait.webp"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={currentUrl} />
                <meta
                    name="twitter:title"
                    content="Conocimientos de relojería de Rolex - GLAUSER"
                />
                <meta
                    name="twitter:description"
                    content="Descubra el enfoque superlativo de Rolex para la relojería y obtenga más información sobre la incesante búsqueda de la excelencia de Rolex en GLAUSER en Colombia"
                />
                <meta
                    name="twitter:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watchmaking/rolex-watchmaking-cover-2023-watchmaking-features-manifesto-still-portrait.webp"
                />

                <script type="text/javascript">
                    {`
                        var digitalDataLayer = {
                            environment: {
                                environmentVersion: "V7",
                                coBrandedVersion: "Bespoke",
                            },
                            page: {
                                pageType: "watchmaking page"
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
                                "name": "Conocimientos de relojería de Rolex - GLAUSER",
                                "isPartOf": { "@id": `${baseUrl}/#website` },
                                "datePublished": "2025-04-01T05:23:53+00:00",
                                "dateModified": "2025-04-01T05:23:53+00:00",
                                "description": "Descubra el enfoque superlativo de Rolex para la relojería y obtenga más información sobre la incesante búsqueda de la excelencia de Rolex en GLAUSER en Colombia",
                                "breadcrumb": { "@id": `${currentUrl}#breadcrumb` },
                                "inLanguage": "es-Es",
                                "potentialAction": {
                                    "@type": "ReadAction",
                                    "target": currentUrl
                                }
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
                                "name": "Watchmaking"
                            }
                        ]
                    })}
                </script>

            </Helmet>
            <div className={`${handles.headercomponent}`}>
                <header className="main-header" id="main-header">
                </header>
            </div>

            <main id="rlx-html" className={`${handles.rlx_html} ${handles.home_rlx}`}>
                <header id="rlx-menu" className={`${handles.rlx_menu}`}>
                    <div className={`${handles.rlx_container}`}>
                        <div className={`${handles.row_grid}`}>
                            <div className={`${handles.rlx_logo}`}>
                                <a href="/rolex/" aria-label="Inicio" title="Inicio">
                                    <picture className={`${handles.placa_rolex_logo}`}>
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

                        <div className={`${handles.row_grid} ${handles.breadcrum_page}`} style={{ height: "40px" }}>
                            <div className={`${handles.breadcrum_column}`}>
                                <ul className={`${handles.breadcrum_menu_list} ${handles.description}`}>
                                    <li className={`${handles.fixed_14}`}>
                                        <a href="/rolex/coleccion-rolex/">
                                            Relojes Rolex
                                        </a>
                                    </li>
                                    <li className={`${handles.fixed_14} ${handles.active}`}>
                                        <a className={`${handles.active}`} href="/rolex/watchmaking/">Watchmaking</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="single-imagen-componet">
                    <div className={`${handles.rlx_container_content}`}>
                        <div className={`${handles.row_grid_fullw} `}>
                            <div className="grid-column-full">
                                <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative} `}>
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watchmaking/rolex-watchmaking-cover-2023-watchmaking-features-manifesto-still-portrait.webp"
                                    />
                                    <img
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watchmaking/rolex-watchmaking-cover-2023-watchmaking-features-manifesto-still-landscape.webp"
                                        loading="lazy"
                                        alt="«Savoir-faire» relojero de Rolex"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className={`${handles.rlx_container_content} ${handles.py_90_60} `}>
                        <div className={`${handles.row_grid_fullw} ${handles.text_introduccion} ${handles.pb_90_60} `}>
                            <div className={`${handles.col_lg_2_5} `}>
                                <h1 className={`${handles.headline50} ${handles.c_brown_text} ${handles.pb_20}`}>«Savoir-faire» relojero de Rolex</h1>
                            </div>
                            <div className={`${handles.col_lg_8_5} `}>
                                <p className={`${handles.body_20_light} ${handles.pb_30}`}>
                                    <strong>
                                        En el corazón de la filosofía y las actividades de Rolex reside una visión a largo plazo.
                                        El concepto de sostenibilidad siempre ha sentado los cimientos del desarrollo de la marca:
                                        ofrecer relojes atemporales y duraderos creados para perdurar, a la vez que se compromete con
                                        las generaciones futuras mediante varias colaboraciones, iniciativas y medidas.
                                    </strong>
                                </p>
                                <p className={`${handles.body_20_light} `}>
                                    Este enfoque refleja la filosofía «Perpetual» que ha impulsado a la empresa desde su creación.
                                    Una filosofía que reúne las destrezas de muchos y requiere un arduo trabajo, día tras día, año tras año.
                                    Una labor exigente y rigurosa. La constante búsqueda de la excelencia de Rolex.
                                </p>
                            </div>
                        </div>
                        <div className={`${handles.row_grid_fullw} ${handles.component_video}`}>
                            <div className={`${handles.col_6_12} `}>
                                <div className="banner-10 rlx-banner-100">
                                    <div className={`${handles.ratio} ${handles.ratio_16x9}`}>
                                        <iframe
                                            width="560"
                                            height="315"
                                            src="https://www.youtube.com/embed/OE0E8BmrvnI"
                                            title="Rolex Watchmaking"

                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-beige-bg">
                    <div className={`${handles.rlx_container_content} ${handles.py_90_60} `}>
                        <div className={`${handles.row_grid_fullw} ${handles.cuerpotexto} `}>
                            <div className={`${handles.col_text_center}`}>
                                <h2 className={`${handles.headline50} ${handles.c_brown_text} ${handles.pb_20}`}>
                                    La visión fundadora de Hans Wilsdorf
                                </h2>
                                <p className={`${handles.body_20_light} `}>
                                    Desde 1905 Rolex ha mantenido la visión fundadora de su creador, Hans Wilsdorf,
                                    quien vio el reloj de pulsera como un objeto del futuro, emblema de la era moderna.
                                    Hans Wilsdorf revolucionó el mundo de la relojería, superando tres importantes desafíos:
                                    fabricar movimientos pequeños pero precisos, desarrollar una caja robusta y hermética para
                                    proteger los movimientos de factores externos, y por último, equipar al reloj con un sistema
                                    de cuerda automática que ofrezca al usuario una gran comodidad de uso a diario.
                                </p>
                                <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watchmaking/rolex-watchmaking-the-founding-vision-of-hans-wilsdorf-landscape.webp"
                                    />
                                    <img
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watchmaking/rolex-watchmaking-the-founding-vision-of-hans-wilsdorf-landscape.webp"
                                        loading="lazy"
                                        alt="Hans Wilsdorf"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className={`${handles.rlx_container_content} ${handles.py_90_60} `}>
                        <div className={`${handles.row_grid_fullw} ${handles.cuerpotexto} `}>
                            <div className={`${handles.col_text_center}`}>
                                <div className={`${handles.py_90_60} `}>
                                    <h2 className={`${handles.headline50} ${handles.c_brown_text} ${handles.pb_20}`}>
                                        Los valores fundamentales de la manufactura Rolex
                                    </h2>
                                    <p className={`${handles.body_20_light} `}>
                                        Cada reloj Rolex se diseña, fabrica y somete a pruebas con una
                                        atención constante al más mínimo detalle. Este enfoque «superlative»
                                        se expresa a través de varias cualidades fundamentales que caracterizan
                                        cada reloj Rolex: precisión, hermeticidad, autonomía, robustez, sencillez,
                                        artesanía, comodidad y durabilidad. Estos grandes principios técnicos y estéticos
                                        siempre han guiado el trabajo de la manufactura Rolex. Prometen al usuario la
                                        experiencia de un reloj excepcional, cuyas características expresan el savoir‑faire único.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className={`${handles.row_grid_fullw}`}>
                            <div className="grid-column-full">
                                <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watchmaking/rolex-watchmaking-portrait.webp"
                                    />
                                    <img
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watchmaking/rolex-watchmaking-landscape.webp"
                                        loading="lazy"
                                        alt="Manufactura Rolex"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className={`${handles.rlx_container_content} ${handles.py_90_60} `}>
                        <div className={`${handles.row_grid_fullw} ${handles.component_video}`}>
                            <div className={`${handles.col_6_12} `}>
                                <div className="banner-10 rlx-banner-100">
                                    <div className={`${handles.ratio} ${handles.ratio_16x9}`}>
                                        <iframe
                                            width="560"
                                            height="315"
                                            src="https://www.youtube.com/embed/wclKW2Gprco"
                                            title="Rolex Watchmaking"

                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-beige-bg">
                    <div className={`${handles.rlx_container_content} ${handles.py_90_60} `}>
                        <div className={`${handles.row_grid_fullw} ${handles.cuerpotexto} `}>
                            <div className={`${handles.col_text_center} ${handles.pb_90_60} `}>
                                <h2 className={`${handles.headline50} ${handles.c_brown_text} ${handles.pb_20}`}>
                                    Un enfoque superlativo de la relojería
                                </h2>
                                <p className={`${handles.body_20_light} `}>
                                    En sus esferas aparece la palabra «Superlative». Esta denominación confirma que cada reloj que sale de los talleres de la manufactura ha superado una serie de pruebas especialmente exigentes llevadas a cabo por Rolex en sus laboratorios internos y con arreglo a sus propios criterios. Estas pruebas no solo se efectúan al Calibre, sino al conjunto del reloj, una vez encajado el movimiento, con el fin de garantizar su rendimiento superlativo en la muñeca en materia de precisión cronométrica, hermeticidad, cuerda automática y reserva de marcha.
                                </p>
                            </div>
                        </div>
                        <div className={`${handles.row_grid_fullw} ${handles.image_center}`}>
                            <div className={`${handles.col_6_10} `}>
                                <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watchmaking/rolex-watchmaking-1931-oysterperpetual-portrait.webp"
                                    />
                                    <img
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watchmaking/rolex-watchmaking-1931-oysterperpetual-landscape.webp"
                                        loading="lazy"
                                        alt="Certificación Superlativa"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className={`${handles.rlx_container_content} ${handles.py_90_60} `}>
                        <div className={`${handles.row_grid_fullw} ${handles.cuerpotexto} `}>
                            <div className={`${handles.col_text_center} ${handles.pb_90_60} `}>
                                <p className={`${handles.headline50} ${handles.c_brown_text} ${handles.pb_20}`}>
                                    Más que una certificación, un estado de ánimo
                                </p>
                                <p className={`${handles.body_20_light} `}>
                                    Por extensión, todos los componentes de un reloj Rolex se pueden describir como «superlative». De hecho, cada uno de ellos está sujeto a continuos y rigurosos controles, desde su diseño hasta su ensamblaje final. Por tanto, el término «superlative» se refiere a mucho más que una certificación cronométrica. También expresa un estado de ánimo que impregna cada departamento de la empresa e impulsa a todas las personas que trabajan para Rolex, independientemente de su cargo.
                                </p>
                            </div>
                        </div>
                        <div className={`${handles.row_grid_fullw} ${handles.image_center}`}>
                            <div className={`${handles.col_6_10} `}>
                                <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watchmaking/rolex-watchmaking-wmfinalassembly-portrait.webp"
                                    />
                                    <img
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watchmaking/rolex-watchmaking-wmfinalassembly-landscape.webp"
                                        loading="lazy"
                                        alt="Certificación Superlativa"
                                    />
                                </picture>
                            </div>
                        </div>
                        <div className={`${handles.row_grid_fullw} ${handles.component_video} ${handles.py_90_60}`}>
                            <div className={`${handles.col_6_12} `}>
                                <div className="banner-10 rlx-banner-100">
                                    <div className={`${handles.ratio} ${handles.ratio_16x9}`}>
                                        <iframe
                                            width="560"
                                            height="315"
                                            src="https://www.youtube.com/embed/wclKW2Gprco" // Misma URL de YouTube que arriba
                                            title="Rolex Watchmaking"

                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${handles.row_grid_fullw} ${handles.cuerpotexto} `}>
                            <div className={`${handles.col_text_center}`}>
                                <p className={`${handles.headline50} ${handles.c_brown_text} ${handles.pb_20}`}>Innovación en movimiento</p>
                                <p className={`${handles.body_20_light} `}>
                                    El rendimiento excepcional se hizo posible gracias al esfuerzo humano e industrial constante, basado en un permanente cuestionamiento de lo que se ha aprendido y la constante mejora de técnicas, herramientas y pruebas. Esta innovación es inherente a la marca, como lo demuestran las más de 600 solicitudes de patentes presentadas por Rolex desde su creación.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className={`${handles.row_grid_fullw}`}>
                            <div className="grid-column-full">
                                <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watchmaking/rolex-watchmaking-wmrd-portrait.webp"
                                    />
                                    <img
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watchmaking/rolex-watchmaking-wmrd-landscape.webp"
                                        loading="lazy"
                                        alt="«Savoir-faire»"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-beige-bg">
                    <div className={`${handles.rlx_container_content} ${handles.py_90_60} `}>
                        <div className={`${handles.row_grid_fullw} ${handles.cuerpotexto} `}>
                            <div className={`${handles.col_text_center}`}>
                                <div className={`${handles.pb_90_60}`}>
                                    <h2 className={`${handles.headline50} ${handles.c_brown_text} ${handles.pb_20}`}>
                                        Integración de todas las áreas del conocimiento
                                    </h2>
                                    <p className={`${handles.body_20_light} `}>
                                        Al integrar progresivamente todas las áreas del savoir‑faire relojero en su manufactura, Rolex es capaz de imponer sus propias reglas y perpetuar su búsqueda de la excelencia. La elección de autonomía ha conformado la identidad de la marca, que vive en la encrucijada de la noble tradición y la tecnología vanguardista. Esto se traduce en sus cuatro sedes de fabricación, todas situadas en Suiza, donde reúnen a más de 9000 colaboradores.
                                    </p>
                                </div>
                                <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watchmaking/rolex-watchmaking-wmpolish-landscape.webp"
                                    />
                                    <img
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watchmaking/rolex-watchmaking-wmpolish-portrait.webp"
                                        loading="lazy"
                                        alt="Rolex Watchmaking"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className={`${handles.row_grid_fullw}`}>
                            <div className="grid-column-full">
                                <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watchmaking/rolex-watchmaking-2023-watchmaking-features-oyster-case-portrait.webp"
                                    />
                                    <img
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watchmaking/rolex-watchmaking-2023-watchmaking-features-oyster-case-landscape.webp"
                                        loading="lazy"
                                        alt="Reloj Rolex"
                                    />
                                </picture>
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

export default WatchMaking;