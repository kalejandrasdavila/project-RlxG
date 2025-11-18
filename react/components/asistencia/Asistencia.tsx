import React from "react";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from 'react';
import useInitScripts from '../../components/hooks/useInitScripts';
import Nav from '../../components/parts/Nav';
import RlxExploreMas from '../../components/parts/RlxExploreMas';
import Footer from '../../components/parts/Footer';
import { useCssHandles } from 'vtex.css-handles';
import '../../main-style.css';


const CSS_HANDLES = [
    //HEADER//
    'headercomponent', 'rlx_html', 'home_rlx', 'rlx_menu', 'rlx_container', 'row_grid', 'rlx_logo', 'placa_rolex_logo',
    'breadcrum_page', 'breadcrum_column', 'breadcrum_menu_list', 'description', 'fixed_14', 'active',
    //single-imagen-componet//
    'row_grid_fullw', 'grid_column_full', 'rlx_pbanner_top', 'p_relative',
    //c-lightbeige-bg//
    'rlx_container_content', 'py_90_60', 'text_introduccion',
    'pb_90_60', 'col_lg_8_5', 'col_lg_2_5', 'headline50', 'c_brown_text', 'pb_20', 'body_20_light', 'component_video', 'col_6_12',
    'headline36', 'component_2_col', 'fixed_16', 'btn_label_icon_rlx', 'component_3_col', 'col_span_2_1', 'col_6_2', 'body_24_bold',
    'legend_16_light', 'col_span_2_2', 'col_6_6', 'col_6_10', 'col_lg_2_6', 'component_3_col_2', 'pb_30', 'cuerpotexto', 'col_text_center',
    //c-beige-bg//
    'image_center', 'pb_45_40', 'btn_primary_rlx'


] as const

const Asistencia: React.FC = () => {

    useInitScripts();
    const handles = useCssHandles(CSS_HANDLES)

    return (
        <>
            {/* Cargar estilos externos directamente */}
            <link rel="stylesheet" href="https://glauser.myvtex.com/files/style.min.css" />
            <link rel="stylesheet" href="https://glauser.vteximg.com.br/arquivos/style-rolex-general-glauser.css" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

            {/* Cargar scripts externos directamente */}
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" async></script>
            <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" async></script>

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
                    </div>
                </header>

                {/* Breadcrumb */}
                <section className={`${handles.breadcrum_page}`} style={{ background: 'linear-gradient(90deg, #0b3e27, #197149)', padding: '10px 0' }}>
                    <div className={`${handles.rlx_container}`}>
                        <div className={`${handles.breadcrum_column}`}>
                            <nav className={`${handles.breadcrum_menu_list}`}>
                                <a href="https://glauser.myvtex.com/rolex/coleccion-rolex/" className={`${handles.description} ${handles.fixed_14}`} style={{ color: '#ffffff' }}>Relojes Rolex</a>
                                <span className={`${handles.description} ${handles.fixed_14}`} style={{ color: '#ffffff', padding: '0 8px' }}> / </span>
                                <span className={`${handles.description} ${handles.fixed_14} ${handles.active}`} style={{ color: '#61bd93' }}>Mantenimiento</span>
                            </nav>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className={`${handles.row_grid_fullw}`}>
                            <div className={`${handles.grid_column_full}`}>
                                <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mantenimiento/rolex-servicing-cover-portrait.webp"
                                    />
                                    <img
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mantenimiento/rolex-servicing-cover-landscape.webp"
                                        loading="lazy"
                                        alt="Reloj Rolex"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className={`${handles.rlx_container} ${handles.py_90_60}`}>
                        <div className={`${handles.row_grid_fullw} ${handles.text_introduccion} ${handles.pb_90_60}`}>
                            <div className={`${handles.col_lg_2_5}`}>
                                <h1 className={`${handles.headline50} ${handles.c_brown_text}  ${handles.pb_20}`}>
                                    Mantenimiento y reparación de los relojes Rolex en GLAUSER
                                </h1>
                            </div>
                            <div className={`${handles.col_lg_8_5}`}>
                                <p className={`${handles.body_20_light} ${handles.pb_30}`}>
                                    <strong>Los relojes Rolex están diseñados y creados para perdurar.</strong>
                                </p>
                                <p className={`${handles.body_20_light}`}>
                                    Desde el diseño de un reloj Rolex hasta el momento en el que sale del taller, cada paso de su desarrollo y de su fabricación sigue un solo requisito crítico: la calidad. Es por ello que cada uno de los relojes estampados con la corona está preparado para cumplir plenamente con sus funciones sin límite de tiempo.
                                </p>
                            </div>
                        </div>

                        <div className={`${handles.row_grid_fullw} ${handles.component_video} ${handles.pb_90_60}`}>
                            <div className={`${handles.col_6_12}`}>
                                <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mantenimiento/rolex-servicing-7214-portrait.webp"
                                    />
                                    <img
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mantenimiento/rolex-servicing-7214-landscape.webp"
                                        loading="lazy"
                                        alt="Centro de servicio autorizado Rolex"
                                    />
                                </picture>
                            </div>
                        </div>
                        <div className={`${handles.row_grid_fullw} ${handles.cuerpotexto} `}>
                            <div className={`${handles.col_text_center}`}>
                                <h2 className={`${handles.headline50} ${handles.c_brown_text} ${handles.pb_20}`}>Déjese aconsejar por un experto</h2>
                                <p className={`${handles.body_20_light}`}>
                                    Al pasar muchos años entre un servicio y otro, su reloj merece la mayor de las atenciones. Como centro de servicio autorizado Rolex, GLAUSER se compromete plenamente a ofrecerles a sus clientes un servicio posventa de primer nivel. Gracias a la exigencia y al savoir‑faire de nuestros relojeros, su reloj Rolex puede mantenerse en el tiempo conservando una excelente fiabilidad y, al mismo tiempo, un brillo irreprochable.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-beige-bg">
                    <div className={`${handles.rlx_container_content} ${handles.py_90_60}`}>
                        <div className={`${handles.row_grid_fullw} ${handles.cuerpotexto} ${handles.pb_90_60}`}>
                            <div className={`${handles.col_text_center}`}>
                                <h2 className={`${handles.headline50} ${handles.c_brown_text} ${handles.pb_20}`}>Mantenimiento Rolex en GLAUSER</h2>
                                <p className={`${handles.body_20_light}`}>
                                    GLAUSER se enorgullece de formar parte de la red mundial de relojeros formados por Rolex, rigurosamente seleccionados por su profesionalidad y experiencia incomparables. El procedimiento del servicio Rolex está diseñado para garantizar que todas y cada una de las piezas que abandonan un taller Rolex cumplan con sus especificaciones estéticas y funcionales originales.
                                </p>
                            </div>
                        </div>
                        <div className={`${handles.row_grid_fullw} ${handles.image_center}`}>
                            <div className={`${handles.col_6_10}`}>
                                <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mantenimiento/rolex-servicing-2234-portrait.webp"
                                    />
                                    <img
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mantenimiento/rolex-servicing-2234-landscape.webp"
                                        loading="lazy"
                                        alt="Mantenimiento Rolex"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className={`${handles.row_grid_fullw} ${handles.cuerpotexto} ${handles.py_90_60}`}>
                        <div className={`${handles.col_text_center}`}>
                            <div className={`${handles.pb_45_40}`}>
                                <picture className={`${handles.p_relative}`}>
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mantenimiento/rolex-plaques-300x150-es.webp"
                                    />
                                    <img
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mantenimiento/rolex-plaques-300x150-es.webp"
                                        width="160"
                                        loading="lazy"
                                        alt="Distribuidor Oficial Rolex"
                                    />
                                </picture>
                            </div>
                            <h2 className={`${handles.headline50} ${handles.c_brown_text} ${handles.pb_20}`}>Su centro de servicio autorizado</h2>
                            <p className={`${handles.body_20_light}`}>
                                Nuestros centros, a la vanguardia de la tecnología, cuentan con relojeros que han recibido formación basada en unos
                                estrictos criterios de excelencia que Rolex evalúa con regularidad. Desde el ajuste de la longitud del brazalete a la
                                reparación completa, todas las operaciones relacionadas con el mantenimiento de un reloj Rolex pueden confiarse a
                                GLAUSER.
                            </p>
                        </div>
                    </div>
                    <div className={`${handles.row_grid_fullw} ${handles.image_center} ${handles.pb_90_60}`}>
                        <div className={`${handles.col_6_10}`}>
                            <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                                <source
                                    media="(max-width: 767px)"
                                    srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mantenimiento/rolex-servicing-sav-barcelona-tousrolexboutique-portrait.webp"
                                />
                                <img
                                    src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mantenimiento/rolex-servicing-sav-barcelona-tousrolexboutique-landscape.webp"
                                    loading="lazy"
                                    alt="Relojeros"
                                />
                            </picture>
                        </div>
                    </div>
                    <div className={`${handles.row_grid_fullw} ${handles.cuerpotexto}`}>
                        <div className={`${handles.col_text_center}`}>
                            <div className={`${handles.pb_90_60}`}>
                                <h2 className={`${handles.headline50} ${handles.c_brown_text} ${handles.pb_20}`}>Procedimiento del servicio Rolex</h2>
                                <p className={`${handles.body_20_light} ${handles.pb_30}`}>
                                    El procedimiento del servicio Rolex está diseñado para asegurar que todo reloj que salga de un taller de Rolex cumpla
                                    las especificaciones estéticas y funcionales originales. Cada movimiento queda completamente ajustado, y cada caja y
                                    brazalete son meticulosamente restaurados para recuperar su lustre. La precisión y la hermeticidad son sometidas a
                                    pruebas estrictas para garantizar el nivel de Colombiadad y fiabilidad que se espera de un reloj Rolex.
                                </p>
                                <a
                                    href="https://glauser.myvtex.com/rolex/asistencia-rolex/mantenimiento-rolex/"
                                    className={`${handles.btn_primary_rlx}`}
                                >
                                    Descubra más
                                </a>
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mantenimiento/rolex-servicing-2301-portrait.webp"
                                    />
                                    <img
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mantenimiento/rolex-servicing-2301-landscape.webp"
                                        loading="lazy"
                                        alt="Reloj Rolex"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className={`${handles.row_grid_fullw} ${handles.cuerpotexto} ${handles.py_90_60}`}>
                        <div className={`${handles.col_text_center}`}>
                            <h2 className={`${handles.headline50} ${handles.c_brown_text} ${handles.pb_20}`}>La garantía de servicio de dos años</h2>
                            <p className={`${handles.body_20_light}`}>
                                Después de un servicio completo, su reloj Rolex queda cubierto por una garantía de servicio de dos años. Esta garantía
                                excluye cualquier daño o deterioro que resulte de un accidente o de una utilización inapropiada del reloj. Toda
                                intervención realizada por terceras personas no autorizadas por Rolex o toda adición de piezas o accesorios no fabricados
                                por Rolex anula esta garantía.
                            </p>
                        </div>
                    </div>
                    <div className={`${handles.row_grid_fullw} ${handles.image_center} ${handles.pb_90_60}`}>
                        <div className={`${handles.col_6_10}`}>
                            <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                                <source
                                    media="(max-width: 767px)"
                                    srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mantenimiento/rolex-servicing-rolex-service_card-portrait.webp"
                                />
                                <img
                                    src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mantenimiento/rolex-servicing-rolex-service_card-landscape.webp"
                                    loading="lazy"
                                    alt="Tarjeta de servicio Rolex"
                                />
                            </picture>
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mantenimiento/rolex-servicing-sav-portrait.webp"
                                    />
                                    <img
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/mantenimiento/rolex-servicing-sav-landscape.webp"
                                        loading="lazy"
                                        alt="«Savoir-faire» relojero"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <RlxExploreMas />
                <Footer />
            </main>
        </>
    );
};

export default Asistencia;
