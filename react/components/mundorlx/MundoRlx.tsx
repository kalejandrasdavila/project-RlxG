import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import useInitScripts from '../../components/hooks/useInitScripts';
import Nav from '../../components/parts/Nav';
import RlxExploreMasNModels from '../../components/parts/RlxExploreMas';
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
    'legend_16_light', 'col_span_2_2', 'col_6_6', 'col_6_10', 'col_lg_2_6', 'component_3_col_2', 'pt_10', 'pb_30', 'col_lg_8_6',
    'pb_45_40',
    // Missing handles
    'pb_50_0'
] as const

const MundoRolex: React.FC = () => {
    useInitScripts();
    const handles = useCssHandles(CSS_HANDLES)

    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://glauser.myvtex.com/rolex/mundo-rolex/';
    const baseUrl = 'https://glauser.myvtex.com';

    return (

        <>
            <Helmet>
                <title>El mundo de Rolex - GLAUSER</title>
                <meta
                    name="description"
                    content="Explora el mundo de Rolex. Descubra ideas y artículos que muestran la esencia de Rolex y manténgase actualizado con las últimas noticias de Rolex | GLAUSER."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://glauser.myvtex.com/files/style.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://glauser.vteximg.com.br/arquivos/style-rolex-general-glauser.css"
                />
                <link rel="stylesheet preload" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

                <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

                <link rel="canonical" href="https://glauser.myvtex.com/rolex/mundo-rolex/" />

                <meta property="og:url" content="https://glauser.myvtex.com/rolex/mundo-rolex/" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="El mundo de Rolex - GLAUSER"
                />
                <meta
                    property="og:description"
                    content="Explora el mundo de Rolex. Descubra ideas y artículos que muestran la esencia de Rolex y manténgase actualizado con las últimas noticias de Rolex | GLAUSER."
                />
                <meta
                    property="og:image"
                    content="https://glauser.vteximg.com.br/arquivos/mundo-rolex-1200x630.jpg"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@glauser_col" />
                <meta name="twitter:title" content="El mundo de Rolex - GLAUSER" />
                <meta name="twitter:description" content="Explora el mundo de Rolex. Descubra ideas y artículos que muestran la esencia de Rolex y manténgase actualizado con las últimas noticias de Rolex | GLAUSER." />
                <meta name="twitter:image" content="https://glauser.vteximg.com.br/arquivos/mundo-rolex-1200x630.jpg" />

                <script type="text/javascript">
                    {`
                        var digitalDataLayer = {
                            environment: {
                                environmentVersion: "V7",
                                coBrandedVersion: "Bespoke",
                            },
                            page: {
                                pageType: "article hub page"
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
                                "name": "El mundo de Rolex - GLAUSER",
                                "isPartOf": { "@id": `${baseUrl}/#website` },
                                "datePublished": "2025-04-01T05:23:53+00:00",
                                "dateModified": "2025-04-01T05:23:53+00:00",
                                "description": "Explora el mundo de Rolex. Descubra ideas y artículos que muestran la esencia de Rolex y manténgase actualizado con las últimas noticias de Rolex | GLAUSER.",
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
                                "name": "Mundo Rolex"
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
                                <a href="https://glauser.myvtex.com/rolex/" aria-label="Inicio" title="Inicio">
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
                                        <a href="https://glauser.myvtex.com/rolex/">Rolex</a>
                                    </li>
                                    <li className={`${handles.fixed_14} ${handles.active}`}>
                                        <a className={`${handles.active}`} href="https://glauser.myvtex.com/rolex/mundo-rolex/">Mundo Rolex</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className={`${handles.row_grid_fullw}`}>
                            <div className={`${handles.grid_column_full}`}>
                                <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-cover-wim23ac-portrait.webp"
                                    />
                                    <img
                                        alt="Wimbledon"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-cover-wim23ac-landscape.webp"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className={`${handles.rlx_container_content} ${handles.py_90_60}`}>
                        <div className={`${handles.row_grid_fullw} ${handles.text_introduccion} ${handles.pb_90_60}`}>
                            <div className={`${handles.col_lg_2_5}`}>
                                <h1 className={`${handles.headline50} ${handles.c_brown_text} ${handles.pb_20}`}>El mundo de Rolex</h1>
                            </div>
                            <div className={`${handles.col_lg_8_5}`}>
                                <p className={`${handles.body_20_light}`}>
                                    <strong>
                                        Durante casi un siglo, Rolex ha desarrollado colaboraciones con un
                                        grupo diverso y extraordinario de talentos de una miríada de
                                        disciplinas.
                                    </strong>
                                    La marca colabora con la exploración, los deportes de élite y las
                                    artes, así como con diversos eventos y organizaciones.
                                </p>
                            </div>
                        </div>
                        <div className={`${handles.row_grid_fullw} ${handles.component_video}`}>
                            <div className={`${handles.col_6_12}`}>
                                <a href="https://glauser.myvtex.com/rolex/mundo-rolex/grand-slam-of-show-jumping/">
                                    <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-gsofsj-portrait-.webp"
                                        />
                                        <img
                                            alt="Rolex Grand Slam of Show Jumping"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-gsofsj-landscape.webp"
                                        />
                                    </picture>
                                </a>
                            </div>
                        </div>
                        <div className={`${handles.row_grid_fullw} ${handles.component_2_col} ${handles.pb_90_60}`}>
                            <div className={`${handles.col_lg_2_6} ${handles.pb_50_0}`}>
                                <div className={`${handles.pt_10}`}>
                                    <p className={`${handles.fixed_16} ${handles.c_brown_text}`}>
                                        Publicado el 13 de marzo de 2025
                                    </p>
                                    <h2 className={`${handles.headline36} ${handles.c_brown_text}`}>
                                        Rolex Grand Slam of Show Jumping
                                    </h2>
                                    <p className={`${handles.body_20_light} ${handles.pb_30}`}>
                                        Ampliamente considerado como el mayor desafío de la hípica, el
                                        Rolex Grand Slam of Show Jumping recompensa al jinete que gane el
                                        Grand Prix en tres de los cuatro «Majors» consecutivos de salto de
                                        obstáculos: The Dutch Masters de ’s‑Hertogenbosch, el CSIO Spruce
                                        Meadows ‘Masters’ de Calgary, el CHIO Aachen y el Concurso Hípico
                                        Internacional de Ginebra.{" "}
                                    </p>
                                    <a
                                        className="btn-label-icon-rlx"
                                        href="https://glauser.myvtex.com/rolex/mundo-rolex/grand-slam-of-show-jumping/">
                                        Más información
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
                            <div className={`${handles.col_lg_8_6} ${handles.pb_45_40}`}>
                                <a href="https://glauser.myvtex.com/rolex/mundo-rolex/filarmonica-viena/">
                                    <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-vpo-portrait.webp"
                                        />
                                        <img
                                            alt="US Open"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-vpo-box-landscape.webp"
                                        />
                                    </picture>
                                </a>
                                <div className={`${handles.pt_10}`}>
                                    <p className={`${handles.fixed_16} ${handles.c_brown_text}`}>
                                        Publicado el 03 de diciembre de 2024
                                    </p>
                                    <h2 className={`${handles.headline36} ${handles.c_brown_text}`}>
                                        Rolex y la Filarmónica de Viena
                                    </h2>
                                    <p className={`${handles.body_20_light} ${handles.pb_30}`}>
                                        Rolex es Patrocinador Exclusivo de la Filarmónica de Viena desde
                                        el año 2008 y, desde enero de 2009, Sponsor Exclusivo del
                                        Concierto de Año Nuevo.
                                    </p>
                                    <a
                                        className="btn-label-icon-rlx"
                                        href="https://glauser.myvtex.com/rolex/mundo-rolex/filarmonica-viena/">
                                        Más información
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
                        </div>
                        <div className={`${handles.row_grid_fullw} ${handles.component_2_col}`}>
                            <div className={`${handles.col_lg_2_6} ${handles.pb_45_40}`}>
                                <a href="https://glauser.myvtex.com/rolex/mundo-rolex/sailgp/">
                                    <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-sailGP-m126333-0022-portrait-v2.webp"
                                        />
                                        <img
                                            alt="US Open"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-sailGP-m126333-0022-box-landscape-v2.webp"
                                        />
                                    </picture>
                                </a>
                                <div className={`${handles.pt_10}`}>
                                    <p className={`${handles.fixed_16} ${handles.c_brown_text}`}>
                                        Publicado el 28 de noviembre de 2024
                                    </p>
                                    <h2 className={`${handles.headline36} ${handles.c_brown_text}`}>
                                        Rolex SailGP Championship
                                    </h2>
                                    <p className={`${handles.body_20_light} ${handles.pb_30}`}>
                                        Rolex es Title Partner y Reloj Oficial exclusivo del Rolex SailGP
                                        Championship, un circuito de regatas en el que compiten algunas de
                                        las embarcaciones de vela más rápidas del mundo. Las regatas
                                        tienen lugar en los mares de todo el mundo, en catamaranes F50 con
                                        foils que parece que vuelan a través del agua.
                                    </p>
                                    <a
                                        className="btn-label-icon-rlx"
                                        href="https://glauser.myvtex.com/rolex/mundo-rolex/sailgp/">
                                        Más información
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
                            <div className={`${handles.col_lg_8_6} ${handles.pb_45_40}`}>
                                <a href="https://glauser.myvtex.com/rolex/mundo-rolex/us-open/">
                                    <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-us-open-portrait.webp"
                                        />
                                        <img
                                            alt="US Open"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-us-open-box-landscape.webp"
                                        />
                                    </picture>
                                </a>
                                <div className={`${handles.pt_10}`}>
                                    <p className={`${handles.fixed_16} ${handles.c_brown_text}`}>
                                        Publicado el 19 de agosto de 2024
                                    </p>
                                    <h2 className={`${handles.headline36} ${handles.c_brown_text}`}>US Open</h2>
                                    <p className={`${handles.body_20_light} ${handles.pb_30}`}>
                                        El US Open es el último torneo de Grand Slam® de la temporada del
                                        tenis. Como socio privilegiado del deporte a nivel internacional
                                        durante casi 50 años, Rolex es el Reloj Oficial del evento desde
                                        2018.
                                    </p>
                                    <a
                                        className="btn-label-icon-rlx"
                                        href="https://glauser.myvtex.com/rolex/mundo-rolex/us-open/">
                                        Más información
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
                        </div>
                        <div className={`${handles.row_grid_fullw} ${handles.component_2_col}`}>
                            <div className={`${handles.col_lg_2_6} ${handles.pb_45_40}`}>
                                <a href="https://glauser.myvtex.com/rolex/mundo-rolex/the-open/">
                                    <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-the-open-portrait.webp"
                                        />
                                        <img
                                            alt="US Open"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-the-open-bpx-landscape.webp"
                                        />
                                    </picture>
                                </a>
                                <div className={`${handles.pt_10}`}>
                                    <p className={`${handles.fixed_16} ${handles.c_brown_text}`}>
                                        Publicado el 11 de julio de 2024
                                    </p>
                                    <h2 className={`${handles.headline36} ${handles.c_brown_text}`}>
                                        The Open: el «major» más antiguo del golf
                                    </h2>
                                    <p className={`${handles.body_20_light} ${handles.pb_30}`}>
                                        The Open, tradicionalmente celebrado en el Reino Unido durante la
                                        tercera semana de julio, es el cuarto y último major masculino del
                                        año. Asociado con esta competición desde 1981, Rolex es
                                        actualmente un socio privilegiado del mundo del golf.
                                    </p>
                                    <a
                                        className="btn-label-icon-rlx"
                                        href="https://glauser.myvtex.com/rolex/mundo-rolex/the-open/">
                                        Más información
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
                            <div className={`${handles.col_lg_8_6} ${handles.pb_45_40}`}>
                                <a href="https://glauser.myvtex.com/rolex/mundo-rolex/amundi-evian/">
                                    <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-evianc23ct-portrait.webp"
                                        />
                                        <img
                                            alt="The Amundi Evian Championship"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-evianc23ct-landscape.webp"
                                        />
                                    </picture>
                                </a>
                                <div className={`${handles.pt_10}`}>
                                    <p className={`${handles.fixed_16} ${handles.c_brown_text}`}>
                                        Publicado el 4 de julio de 2024
                                    </p>
                                    <h2 className={`${handles.headline36} ${handles.c_brown_text}`}>
                                        The Amundi Evian Championship
                                    </h2>
                                    <p className={`${handles.body_20_light} ${handles.pb_30}`}>
                                        Rolex es Socio y Reloj Oficial del único Major de golf que se
                                        celebra en Europa continental.
                                    </p>
                                    <a
                                        className="btn-label-icon-rlx"
                                        href="https://glauser.myvtex.com/rolex/mundo-rolex/amundi-evian/">
                                        Más información
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
                        </div>
                        <div className={`${handles.row_grid_fullw} ${handles.component_2_col}`}>
                            <div className={`${handles.col_lg_2_6} ${handles.pb_45_40}`}>
                                <a href="https://glauser.myvtex.com/rolex/mundo-rolex/24-horas-de-le-mans/">
                                    <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-voyage-lemans23-portrait.webp"
                                        />
                                        <img
                                            alt="Le Mans"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-voyage-lemans23-landscape.webp"
                                        />
                                    </picture>
                                </a>
                                <div className={`${handles.pt_10}`}>
                                    <p className={`${handles.fixed_16} ${handles.c_brown_text}`}>
                                        Publicado el 4 de junio de 2024
                                    </p>
                                    <h2 className={`${handles.headline36} ${handles.c_brown_text}`}>Las 24 Horas de Le Mans</h2>
                                    <p className={`${handles.body_20_light} ${handles.pb_30}`}>
                                        La 92.
                                        <sup>a</sup> edición de las 24 Horas de Le Mans, carrera que
                                        celebra la resistencia y la excelencia del automovilismo, se
                                        celebra los días 15 y 16 de junio de 2024. Rolex es Reloj Oficial
                                        de este evento legendario desde 2001.
                                    </p>
                                    <a
                                        className="btn-label-icon-rlx"
                                        href="https://glauser.myvtex.com/rolex/mundo-rolex/24-horas-de-le-mans/">
                                        Más información
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
                            <div className={`${handles.col_lg_8_6} ${handles.pb_45_40}`}>
                                <a href="https://glauser.myvtex.com/rolex/mundo-rolex/viaje-al-corazon-del-universo-rolex/">
                                    <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-voyage-bg-portrait.webp"
                                        />
                                        <img
                                            alt="Viaje al corazón del universo Rolex"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mundo-rolex/world-of-rolex-voyage-bg-box-landscape.webp"
                                        />
                                    </picture>
                                </a>
                                <div className={`${handles.pt_10}`}>
                                    <p className={`${handles.fixed_16} ${handles.c_brown_text}`}>
                                        Publicado el 10 de abril de 2024
                                    </p>
                                    <h2 className={`${handles.headline36} ${handles.c_brown_text}`}>
                                        Viaje al corazón del universo Rolex
                                    </h2>
                                    <p className={`${handles.body_20_light} ${handles.pb_30}`}>
                                        Hans Wilsdorf estaba íntimamente convencido de la capacidad del
                                        ser humano para innovar con la excelencia como objetivo. Casi 120
                                        años después de la creación de la marca, el espíritu del fundador
                                        está más presente que nunca, tanto en lo que afecta a la
                                        fabricación de relojes como a los compromisos de Rolex en todo el
                                        mundo.
                                    </p>
                                    <a
                                        className="btn-label-icon-rlx"
                                        href="https://glauser.myvtex.com/rolex/mundo-rolex/viaje-al-corazon-del-universo-rolex/">
                                        Más información
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
                        </div>
                    </div>
                </section>
                <RlxExploreMasNModels />
                <Footer />
            </main>
        </>
    );
};

export default MundoRolex;