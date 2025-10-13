import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import useInitScripts from '../../components/hooks/useInitScripts';
import RlxExploreMasNModels from "../../components/parts/RlxExploreMas";
import Nav from "../../components/parts/Nav";
import Footer from "../../components/parts/Footer";
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
    'legend_16_light', 'col_span_2_2', 'col_6_6', 'col_6_10', 'col_lg_2_6', 'component_3_col_2', 'pt_10', 'col_lg_8_6',
    // Missing handles
    'pb_50_0'
] as const

const NewsModels: React.FC = () => {
    useInitScripts();
    const handles = useCssHandles(CSS_HANDLES)

    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://glauser.myvtex.com/rolex/nuevos-modelos-2025/';
    const baseUrl = 'https://glauser.myvtex.com';

    return (

        <>
            <Helmet>
                <title>Nuevos modelos Rolex 2024 - GLAUSER</title>
                <meta
                    name="description"
                    content="GLAUSER presenta la última colección de relojes de lujo suizos de Rolex. Descubra las características únicas de los nuevos modelos de este año."
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
                <link rel="canonical" href="https://glauser.myvtex.com/rolex/nuevos-modelos-2025/" />

                <meta property="og:url" content="https://glauser.myvtex.com/rolex/nuevos-modelos-2025/" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Nuevos modelos Rolex 2024 - GLAUSER"
                />
                <meta
                    property="og:description"
                    content="GLAUSER presenta la última colección de relojes de lujo suizos de Rolex. Descubra las características únicas de los nuevos modelos de este año."
                />
                <meta
                    property="og:image"
                    content="https://glauser.vteximg.com.br/arquivos/nuevos-modelos-rolex-2024-1200x630.jpg"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@glauser_col" />
                <meta name="twitter:title" content="Nuevos modelos Rolex 2024 - GLAUSER" />
                <meta name="twitter:description" content="GLAUSER presenta la última colección de relojes de lujo suizos de Rolex. Descubra las características únicas de los nuevos modelos de este año." />
                <meta name="twitter:image" content="https://glauser.vteximg.com.br/arquivos/nuevos-modelos-rolex-2024-1200x630.jpg" />
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
                                        <a href="https://glauser.myvtex.com/rolex/coleccion-rolex/">
                                            Relojes Rolex
                                        </a>
                                    </li>
                                    <li className={`${handles.fixed_14} ${handles.active}`}>
                                        <a className={`${handles.active}`} href="https://glauser.myvtex.com/rolex/nuevos-modelos-2025/">Nuevos Modelos 2024</a>
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/banner-rolex-new-watches-2024-gmt-master-ii-portrait.webp"
                                    />
                                    <img
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/banner-rolex-new-watches-2024-gmt-master-ii-landscape.webp"
                                        loading="lazy"
                                        alt="GMT-Master II"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-beige-bg">
                    <div className={`${handles.rlx_container_content} ${handles.py_90_60} `}>
                        <div className={`${handles.row_grid_fullw} ${handles.text_introduccion} ${handles.pb_90_60} `}>
                            <div className={`${handles.col_lg_2_5} `}>
                                <h1 className={`${handles.headline50} ${handles.c_brown_text} ${handles.pb_20}`}>
                                    Nuevos modelos Rolex 2024 - GLAUSER
                                </h1>
                            </div>
                            <div className={`${handles.col_lg_8_5} `}>
                                <p className={`${handles.body_20_light} `}>
                                    <strong>
                                        Con sus últimas creaciones, Rolex arroja una nueva luz sobre algunos
                                        de sus modelos más emblemáticos.
                                    </strong>
                                    La colección 2024 ofrece armonías inéditas entre materiales, colores y
                                    texturas, lo que refleja la voluntad de renovar continuamente las
                                    emociones relojeras. Esta colección se distingue por una atención
                                    infinita al más mínimo detalle. Gracias a nuestro excelente
                                    savoir-faire, los nuevos modelos juegan con los contrastes.
                                </p>
                            </div>
                        </div>
                        <div className={`${handles.row_grid_fullw} ${handles.component_2_col} ${handles.pb_90_60}`}>
                            <div className={`${handles.col_lg_2_6} ${handles.pb_50_0}`}>
                                <a href="https://glauser.myvtex.com/rolex/nuevos-modelos-2025/gmt-master-ii/">
                                    <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative} `}>
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/rolex-new-watches-2024-gmt-master-ii-portrait.webp"
                                        />
                                        <img
                                            alt="Rolex GMT-Master II"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/rolex-new-watches-2024-gmt-master-ii-landscape.webp"
                                        />
                                    </picture>
                                    <div className={`${handles.pt_10} `}>
                                        <p className={`${handles.body_24_bold} ${handles.c_brown_text}`}>Nuevos Modelos 2024</p>
                                        <h2 className={`${handles.headline36} ${handles.c_brown_text}`}>Rolex GMT-Master II</h2>
                                    </div>
                                </a>
                            </div>
                            <div className={`${handles.col_lg_8_6}`}>
                                <a href="https://glauser.myvtex.com/rolex/nuevos-modelos-2025/day-date/">
                                    <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative} `}>
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/rolex-new-watches-2024-day-date-portrait.webp"
                                        />
                                        <img
                                            alt="Rolex Day-Date"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/rolex-new-watches-2024-day-date-landscape.webp"
                                        />
                                    </picture>
                                    <div className={`${handles.pt_10} `}>
                                        <p className={`${handles.body_24_bold} ${handles.c_brown_text}`}>Nuevos Modelos 2024</p>
                                        <h2 className={`${handles.headline36} ${handles.c_brown_text}`}>Rolex Day-Date</h2>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className={`${handles.row_grid_fullw} ${handles.component_2_col}`}>
                            <div className={`${handles.col_lg_2_6} ${handles.pb_50_0}`}>
                                <a href="https://glauser.myvtex.com/rolex/nuevos-modelos-2025/1908/">
                                    <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative} `}>
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/rolex-new-watches-2024-1908-portrait.webp"
                                        />
                                        <img
                                            alt="Rolex 1908"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/rolex-new-watches-2024-1908-landscape.webp"
                                        />
                                    </picture>
                                    <div className={`${handles.pt_10} `}>
                                        <p className={`${handles.body_24_bold} ${handles.c_brown_text}`}>Nuevos Modelos 2024</p>
                                        <h2 className={`${handles.headline36} ${handles.c_brown_text}`}>Rolex 1908</h2>
                                    </div>
                                </a>
                            </div>
                            <div className={`${handles.col_lg_8_6}`}>
                                <a href="https://glauser.myvtex.com/rolex/nuevos-modelos-2025/deepsea/">
                                    <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative} `}>
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/rolex-new-watches-2024-deepsea-portrait.webp"
                                        />
                                        <img
                                            alt="Rolex Deepsea"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/rolex-new-watches-2024-deepsea-landscape.webp"
                                        />
                                    </picture>
                                    <div className={`${handles.pt_10} `}>
                                        <p className={`${handles.body_24_bold} ${handles.c_brown_text}`}>Nuevos Modelos 2024</p>
                                        <h2 className={`${handles.headline36} ${handles.c_brown_text}`}>Rolex Deepsea</h2>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className={`${handles.row_grid_fullw} ${handles.component_2_col}`}>
                            <div className={`${handles.col_lg_2_6} ${handles.pb_50_0}`}>
                                <a href="https://glauser.myvtex.com/rolex/nuevos-modelos-2025/cosmograph-daytona/">
                                    <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative} `}>
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/rolex-new-watches-2024-cosmopgrah-daytona-portrait.webp"
                                        />
                                        <img
                                            alt="Rolex 1908"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/rolex-new-watches-2024-cosmopgrah-daytona-landscape.webp"
                                        />
                                    </picture>
                                    <div className={`${handles.pt_10} `}>
                                        <p className={`${handles.body_24_bold} ${handles.c_brown_text}`}>Nuevos Modelos 2024</p>
                                        <h2 className={`${handles.headline36} ${handles.c_brown_text}`}>
                                            Rolex Cosmograph Daytona
                                        </h2>
                                    </div>
                                </a>
                            </div>
                            <div className={`${handles.col_lg_8_6}`}>
                                <a href="https://glauser.myvtex.com/rolex/nuevos-modelos-2025/sky-dweller/">
                                    <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative} `}>
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/rolex-new-watches-2024-sky-dweller-portrait.webp"
                                        />
                                        <img
                                            alt="Rolex Deepsea"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2024/rolex-new-watches-2024-sky-dweller-landscape.webp"
                                        />
                                    </picture>
                                    <div className={`${handles.pt_10} `}>
                                        <p className={`${handles.body_24_bold} ${handles.c_brown_text}`}>Nuevos Modelos 2024</p>
                                        <h2 className={`${handles.headline36} ${handles.c_brown_text}`}>Rolex Sky-Dweller</h2>
                                    </div>
                                </a>
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

export default NewsModels;