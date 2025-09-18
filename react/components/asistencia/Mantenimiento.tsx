import React, { useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import RlxExploreMasNModels from '../../components/parts/RlxExploreMas';
import Nav from '../../components/parts/Nav';
import Footer from '../../components/parts/Footer';
import useInitScripts from '../../components/hooks/useInitScripts';
import { useCssHandles } from 'vtex.css-handles';
import '../../main-style.css';


const CSS_HANDLES = [
    //HEADER//
    'headercomponent', 'rlx_html', 'home_rlx', 'rlx_menu', 'rlx_container', 'row_grid', 'rlx_logo', 'placa_rolex_logo',
    'breadcrum_page', 'breadcrum_column', 'breadcrum_menu_list', 'description', 'fixed_14', 'active', 'none_mobil',
    ///c-lightbeige-bg//
    'row_grid_fullw', 'grid_column_full', 'rlx_pbanner_top', 'p_relative', 'rlx_container_content', 'py_90_60', 'text_introduccion',
    'pb_90_60', 'col_lg_8_5', 'col_lg_2_5', 'headline50', 'c_brown_text', 'pb_20', 'body_20_light', 'component_video', 'col_6_12',
    'headline36', 'component_2_col', 'fixed_16', 'btn_label_icon_rlx', 'component_3_col', 'col_span_2_1', 'col_6_2', 'body_24_bold',
    'legend_16_light', 'col_span_2_2', 'col_6_6', 'col_6_10', 'col_lg_2_6', 'component_3_col_2', 'ratio', 'ratio_16x9', 'col_text_center',
    'image_center', 'pb_30',
    // Missing handles
    'cuerpotexto'
] as const

const Mantenimiento: React.FC = () => {
    useInitScripts();
    const handles = useCssHandles(CSS_HANDLES)

    return (
        <>
            <Helmet>
                <title>Procedimiento de mantenimiento Rolex - GLAUSER</title>
                <meta
                    name="description"
                    content="Explore el procedimiento de servicio Rolex en GLAUSER, su distribuidor oficial Rolex para obtener cuidado y mantenimiento experto de su reloj Rolex."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://devjhernandez--glauser.myvtex.com/files/style.min.css"
                />
                <link rel="stylesheet preload" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://glauser.vteximg.com.br/arquivos/style-rolex-general-glauser.css"
                />
                <link
                    rel="stylesheet preload"
                    href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
                />
                <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

                <link rel="canonical" href="https://devjhernandez--glauser.myvtex.com/rolex/asistencia-rolex/" />

                <meta property="og:url" content="https://devjhernandez--glauser.myvtex.com/rolex/asistencia-rolex/" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Procedimiento de mantenimiento Rolex - GLAUSER"
                />
                <meta
                    property="og:description"
                    content="Explore el procedimiento de servicio Rolex en GLAUSER, su distribuidor oficial Rolex para obtener cuidado y mantenimiento experto de su reloj Rolex."
                />
                <meta
                    property="og:image"
                    content="https://glauser.vteximg.com.br/arquivos/mantenimiento-rolex-1200x630.jpg"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@glauser_col" />
                <meta name="twitter:title" content="Procedimiento de mantenimiento Rolex - GLAUSER" />
                <meta name="twitter:description" content="Explore el procedimiento de servicio Rolex en GLAUSER, su distribuidor oficial Rolex para obtener cuidado y mantenimiento experto de su reloj Rolex." />
                <meta name="twitter:image" content="https://glauser.vteximg.com.br/arquivos/mantenimiento-rolex-1200x630.jpg" />
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
                                        <a href="/rolex/asistencia-rolex/">Mantenimiento</a> {/* Use relative paths */}
                                    </li>
                                    <li className={`${handles.fixed_14} ${handles.active} ${handles.none_mobil}`}>
                                        <a className={`${handles.active}`} href="/rolex/asistencia-rolex/mantenimiento-rolex/">Procedimiento de mantenimiento</a> {/* Use relative paths */}
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-cover-2301-rolex-sav-retailers-175-controle-final-fermoir-portrait.webp"
                                    />
                                    <img
                                        alt="Reloj Rolex"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-cover-2301-rolex-sav-retailers-175-controle-final-fermoir-landscape.webp"
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
                                <h1 className={`${handles.headline50} ${handles.c_brown_text} ${handles.pb_20}`}>LAS ETAPAS DE UN SERVICIO COMPLETO</h1>
                            </div>
                            <div className={`${handles.col_lg_8_5}`}>
                                <p className={`${handles.body_20_light}`}>
                                    Cualquier Distribuidor Oficial o filial de la marca puede hacerse cargo de su reloj Rolex para su servicio. El personal competente registra sus posibles peticiones en el momento en que usted le entrega su reloj. A continuación, se envía a un relojero.
                                </p>
                            </div>
                        </div>
                        <div className={`${handles.row_grid_fullw} ${handles.component_video}`}>
                            <div className={`${handles.col_6_12}`}>
                                <div className="banner-10 rlx-banner-100">
                                    <div className={`${handles.ratio} ${handles.ratio_16x9}`}>
                                        <iframe
                                            width="560"
                                            height="315"
                                            src="https://www.youtube.com/embed/your_youtube_video_id"
                                            title="Mantenimiento de tu Reloj Rolex"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${handles.row_grid_fullw} ${handles.cuerpotexto} ${handles.py_90_60}`}>
                            <div className={`${handles.col_text_center}`}>
                                <h2 className={`${handles.headline50} ${handles.c_brown_text} ${handles.pb_20}`}>Examen del reloj</h2>
                                <p className={`${handles.body_20_light}`}>
                                    Su reloj es minuciosamente examinado por un relojero, que estima las operaciones que hay que realizar y establece un presupuesto. Una vez aceptado, comienza el servicio de mantenimiento.
                                </p>
                            </div>
                        </div>
                        <div className={`${handles.row_grid_fullw} ${handles.image_center}`}>
                            <div className={`${handles.col_6_10}`}>
                                <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-retailers-104-estimation-verification-no-de-serie-boite-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-retailers-104-estimation-verification-no-de-serie-boite-landscape.webp" loading="lazy" alt="EXAMEN DEL RELOJ" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-beige-bg">
                    <div className={`${handles.rlx_container} ${handles.py_90_60}`}>
                        <div className={`${handles.row_grid_fullw} ${handles.cuerpotexto}`}>
                            <div className={`${handles.col_text_center}`}>
                                <div className={`${handles.pb_90_60}`}>
                                    <h2 className={`${handles.headline50} ${handles.c_brown_text} ${handles.pb_20}`}>Preparación del servicio</h2>
                                    <p className={`${handles.body_20_light}`}>
                                        El movimiento, todavía coronado por la esfera y las agujas, se extrae de la caja, de la que se ha desprendido previamente el brazalete. Movimiento, caja y brazalete se tratarán de forma separada durante el proceso de mantenimiento, antes de volver a montarlos al concluir el servicio.
                                    </p>
                                </div>
                                <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-corporate-19-eclatement-enlevement-du-cadran-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-corporate-19-eclatement-enlevement-du-cadran-landscape.webp" loading="lazy" alt="Preparación del servicio" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className={`${handles.row_grid_fullw} ${handles.cuerpotexto}`}>
                        <div className={`${handles.col_text_center}`}>
                            <div className={`${handles.py_90_60}`}>
                                <h2 className={`${handles.headline50} ${handles.c_brown_text} ${handles.pb_20}`}>Desmontaje del movimiento</h2>
                                <p className={`${handles.body_20_light}`}>
                                    El movimiento se desmonta por completo y todos los componentes se examinan con el mayor de los cuidados. Los que no cumplen con los criterios de Rolex se sustituyen sistemáticamente.
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-sav-1910dh-portrait.webp"
                                    />
                                    <img
                                        alt="Desmontaje del movimiento"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-sav-1910dh-landscape.webp"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className={`${handles.rlx_container} ${handles.py_90_60}`}>
                        <div className={`${handles.row_grid_fullw} ${handles.cuerpotexto}`}>
                            <div className={`${handles.col_text_center} ${handles.pb_90_60}`}>
                                <h2 className={`${handles.headline50} ${handles.c_brown_text} ${handles.pb_20}`}>Lavado de los componentes del movimiento</h2>
                                <p className={`${handles.body_20_light}`}>
                                    Los diferentes componentes se limpian mediante baños de ultrasonidos, de tal modo que se eliminan las impurezas hasta en las zonas de más difícil acceso.
                                </p>
                            </div>
                        </div>
                        <div className={`${handles.row_grid_fullw} ${handles.image_center}`}>
                            <div className={`${handles.col_6_10}`}>
                                <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-corporate-29-lavage-mouvement-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-corporate-29-lavage-mouvement-landscape.webp" loading="lazy" alt="Lavado de los componentes del movimiento" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-beige-bg">
                    <div className={`${handles.rlx_container} ${handles.py_90_60}`}>
                        <div className={`${handles.row_grid_fullw} ${handles.cuerpotexto}`}>
                            <div className={`${handles.col_text_center}`}>
                                <div className={`${handles.pb_90_60}`}>
                                    <h2 className={`${handles.headline50} ${handles.c_brown_text} ${handles.pb_20}`}>Ensamblaje del movimiento y lubricación</h2>
                                    <p className={`${handles.body_20_light}`}>
                                        Los componentes se secan y, a continuación, el movimiento se vuelve a montar por completo y se lubrica. El relojero ajusta una primera vez la precisión del movimiento de acuerdo con los criterios de la marca.
                                    </p>
                                </div>
                                <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-corporate-40-assemblage mouvement-pose-oscillateur-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-corporate-40-assemblage mouvement-pose-oscillateur-landscape.webp" loading="lazy" alt="Ensamblaje del movimiento y lubricación" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className={`${handles.row_grid_fullw} ${handles.cuerpotexto}`}>
                        <div className={`${handles.col_text_center}`}>
                            <div className={`${handles.py_90_60}`}>
                                <h2 className={`${handles.headline50} ${handles.c_brown_text} ${handles.pb_20}`}>Acabado de la caja y del brazalete</h2>
                                <p className={`${handles.body_20_light}`}>
                                    La caja se desmonta por completo y la carrura, el bisel, el fondo y el brazalete se pulen o satinan, en función del acabado original. Estas sutiles operaciones exigen destreza y delicadeza.
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-corporate-33polissage-boite-portrait.webp"
                                    />
                                    <img
                                        alt="Acabado de la caja y del brazalete"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-corporate-33polissage-boite-landscape.webp"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-beige-bg">
                    <div className={`${handles.rlx_container} ${handles.py_90_60}`}>
                        <div className={`${handles.row_grid_fullw} ${handles.cuerpotexto}`}>
                            <div className={`${handles.col_text_center}`}>
                                <div className={`${handles.pb_90_60}`}>
                                    <h2 className={`${handles.headline50} ${handles.c_brown_text} ${handles.pb_20}`}>Montaje de la caja</h2>
                                    <p className={`${handles.body_20_light}`}>
                                        Una vez reavivados y limpios, los elementos de la caja se vuelven a montar y las juntas de hermeticidad se reemplazan. Se pone a prueba la hermeticidad de la caja.
                                    </p>
                                </div>
                                <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2301-rolex-sav-corporate-61-controle-etancheite-etancheiscope-portrait.webp"
                                    />
                                    <img
                                        alt="Montaje de la caja"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2301-rolex-sav-corporate-61-controle-etancheite-etancheiscope-landscape.webp"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className={`${handles.row_grid_fullw} ${handles.cuerpotexto}`}>
                        <div className={`${handles.col_text_center}`}>
                            <div className={`${handles.py_90_60}`}>
                                <h2 className={`${handles.headline50} ${handles.c_brown_text} ${handles.pb_20}`}>Encajado del movimiento</h2>
                                <p className={`${handles.body_20_light}`}>
                                    El movimiento, sobre el cual se han vuelto a montar la esfera y las agujas, se recoloca en la caja después de que el relojero haya efectuado un riguroso control técnico y estético de todos los elementos.
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-corporate-47-assemblage-chasser-les-aiguilles-portrait.webp"
                                    />
                                    <img
                                        alt="Encajado del movimiento"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-corporate-47-assemblage-chasser-les-aiguilles-landscape.webp"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className={`${handles.rlx_container} ${handles.py_90_60}`}>
                        <div className={`${handles.row_grid_fullw} ${handles.cuerpotexto}`}>
                            <div className={`${handles.col_text_center} ${handles.pb_90_60}`}>
                                <h2 className={`${handles.headline50} ${handles.c_brown_text} ${handles.pb_20}`}>Prueba de precisión</h2>
                                <p className={`${handles.body_20_light} ${handles.pb_30}`}>
                                    Tras el encajado del movimiento, se evalúa una vez más la precisión cronométrica. El relojero procede a los últimos ajustes para que cumpla con las exigencias de Rolex.
                                </p>
                                <p className={`${handles.body_20_light}`}>
                                    A continuación, el relojero enrosca el fondo de la caja y entonces el reloj se pone a prueba, al menos durante veinticuatro horas. Esta prueba, propia de la marca, permite verificar el buen funcionamiento de su movimiento.
                                </p>
                            </div>
                        </div>
                        <div className={`${handles.row_grid_fullw} ${handles.image_center} ${handles.pb_90_60}`}>
                            <div className={`${handles.col_6_10}`}>
                                <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-corporate-54-controle-performance-emboite-micro-stella-portrait.webp"
                                    />
                                    <img
                                        alt="Prueba de precisión"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-corporate-54-controle-performance-emboite-micro-stella-landscape.webp"
                                    />
                                </picture>
                            </div>
                        </div>
                        <div className={`${handles.row_grid_fullw} ${handles.cuerpotexto}`}>
                            <div className={`${handles.col_text_center}`}>
                                <h2 className={`${handles.headline50} ${handles.c_brown_text} ${handles.pb_20}`}>Prueba de hermeticidad</h2>
                                <p className={`${handles.body_20_light}`}>
                                    La hermeticidad del reloj se controla con ayuda de una prueba realizada en el agua bajo presión y, a continuación, se vuelve a montar el brazalete en la caja.
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-corporate-66-controle-etancheite-fathometre-portrait.webp"
                                    />
                                    <img
                                        alt="Prueba de hermeticidad"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-corporate-66-controle-etancheite-fathometre-landscape.webp"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className={`${handles.rlx_container} ${handles.py_90_60}`}>
                        <div className={`${handles.row_grid_fullw} ${handles.cuerpotexto}`}>
                            <div className={`${handles.col_text_center} ${handles.pb_90_60}`}>
                                <h2 className={`${handles.headline50} ${handles.c_brown_text} ${handles.pb_20}`}>Control final</h2>
                                <p className={`${handles.body_20_light}`}>
                                    El reloj ya está preparado para un control final. Durante el mismo, el relojero comprueba que sus funciones estén perfectamente operativas y que su estética sea irreprochable.
                                </p>
                            </div>
                        </div>
                        <div className={`${handles.row_grid_fullw} ${handles.image_center}`}>
                            <div className={`${handles.col_6_10}`}>
                                <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-corporate-72-controle-final-portrait.webp"
                                    />
                                    <img
                                        alt="Control final"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-2234-rolex-sav-corporate-72-controle-final-landscape.webp"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-beige-bg">
                    <div className={`${handles.rlx_container} ${handles.py_90_60}`}>
                        <div className={`${handles.row_grid_fullw} ${handles.cuerpotexto}`}>
                            <div className={`${handles.col_text_center}`}>
                                <div className={`${handles.pb_90_60}`}>
                                    <h2 className={`${handles.headline50} ${handles.c_brown_text} ${handles.pb_20}`}>DEVOLUCIÓN DEL RELOJ</h2>
                                    <p className={`${handles.body_20_light}`}>
                                        Al concluir el servicio, se le devuelve el reloj en un estuche protector. El servicio tiene una garantía internacional de una duración de dos años que cubre tanto las piezas como la mano de obra.
                                    </p>
                                </div>
                                <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-showroom-portrait.webp"
                                    />
                                    <img
                                        alt="DEVOLUCIÓN DEL RELOJ"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-showroom-landscape.webp"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className={`${handles.rlx_container} ${handles.py_90_60}`}>
                        <div className={`${handles.row_grid_fullw} ${handles.cuerpotexto}`}>
                            <div className={`${handles.col_text_center} ${handles.pb_90_60}`}>
                                <h2 className={`${handles.headline50} ${handles.c_brown_text} ${handles.pb_20}`}>Un servicio de primer nivel</h2>
                                <p className={`${handles.body_20_light}`}>
                                    Rolex se compromete plenamente a ofrecerles a sus clientes un servicio posventa de primer nivel. Gracias a la exigencia y al savoir‑faire de nuestros relojeros, su reloj Rolex puede mantenerse en el tiempo conservando una excelente fiabilidad y, al mismo tiempo, un brillo irreprochable.
                                </p>
                            </div>
                        </div>
                        <div className={`${handles.row_grid_fullw} ${handles.image_center}`}>
                            <div className={`${handles.col_6_10}`}>
                                <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-sav-barcelona-tousrolexboutique-portrait.webp"
                                    />
                                    <img
                                        alt="Un servicio de primer nivel"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-sav-barcelona-tousrolexboutique-landscape.webp"
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-manippos-2002pd-portrait.webp"
                                    />
                                    <img
                                        alt="Datejust"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/centro-servicio/rolex-servicing-procedure-manippos-2002pd-landscape.webp"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>
                <RlxExploreMasNModels />
                <Footer />
            </main >
        </>
    );
};

export default Mantenimiento;