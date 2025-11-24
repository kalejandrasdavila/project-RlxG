import React from "react";
import useInitScripts from './components/hooks/useInitScripts';
import RlxExploreMasNModels from "./components/parts/RlxExploreMasNModels";
import Nav from "./components/parts/Nav";
import Footer from "./components/parts/Footer";
import { useCssHandles } from 'vtex.css-handles';
import './main-style.css';


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
    'pb_50_0', 'body_20_bold'
] as const

const NewsModels: React.FC = () => {
    useInitScripts();
    const handles = useCssHandles(CSS_HANDLES)

    const currentUrl = (typeof window !== 'undefined' && window.location) ? window.location.href : '/rolex/nuevos-modelos-2025/';
    const baseUrl = '';

    return (

        <>
            {/* Estilos críticos inline para forzar aplicación */}
            <style dangerouslySetInnerHTML={{
                __html: `
                    .c-beige-bg {
                        background-color: #f4efea !important;
                    }
                    .c-beige-bg .rlx-container-content {
                        margin-right: 8% !important;
                        margin-left: 8% !important;
                    }
                    .py-90-60 {
                        padding: 90px 0px !important;
                    }
                    .pb-90-60 {
                        padding-bottom: 90px !important;
                    }
                    .row-grid-fullw {
                        display: grid !important;
                        grid-template-columns: 8vw repeat(12, minmax(0, 1fr)) 8vw !important;
                        grid-gap: 8px !important;
                    }
                    .grid-column-full {
                        grid-column: 1/15 !important;
                    }
                    .p-relative {
                        position: relative !important;
                    }
                    .c-beige-bg .row-grid-fullw {
                        display: grid !important;
                        grid-template-columns: 8vw repeat(12, minmax(0, 1fr)) 8vw !important;
                        grid-gap: 8px !important;
                    }
                    .c-beige-bg .row-grid-fullw.text-introduccion {
                        display: grid !important;
                        grid-template-columns: 8vw repeat(12, minmax(0, 1fr)) 8vw !important;
                        grid-gap: 8px !important;
                    }
                    .c-beige-bg .row-grid-fullw.component-2-col {
                        display: grid !important;
                        grid-template-columns: repeat(12, minmax(0, 1fr)) !important;
                        grid-gap: 8px !important;
                    }
                    .headline50 {
                        font-size: 50px !important;
                        font-weight: 700 !important;
                        line-height: 1.2 !important;
                    }
                    .body-20-light {
                        font-size: 20px !important;
                        font-weight: normal !important;
                        line-height: 1.6 !important;
                    }
                    .pb-20 {
                        padding-bottom: 20px !important;
                    }
                    .c-brown-text {
                        color: #452c1e !important;
                    }
                    #rlx-html p {
                        margin-bottom: 0px !important;
                    }
                    .rlx-pbanner-top img {
                        object-fit: cover !important;
                        width: 100% !important;
                    }
                    .pt-10 {
                        padding-top: 10px !important;
                    }
                    .pb-50-0 {
                        padding-bottom: 0px !important;
                    }
                    .body-20-bold {
                        font-size: 20px !important;
                        font-weight: 700 !important;
                        line-height: 1.6 !important;
                    }
                    .headline36 {
                        font-size: 36px !important;
                        font-weight: 700 !important;
                        line-height: 1.2 !important;
                    }
                    @media only screen and (min-width: 1025px) {
                        .component-2-col .col-lg-2-6 {
                            grid-column: 2 / span 6 !important;
                        }
                        .component-2-col .col-lg-8-6 {
                            grid-column: 8 / span 6 !important;
                        }
                        .c-beige-bg .text-introduccion .col-lg-2-5 {
                            grid-column: 2 / span 5 !important;
                            padding-right: 2vw !important;
                        }
                        .c-beige-bg .text-introduccion .col-lg-8-5 {
                            grid-column: 8 / span 5 !important;
                            padding-left: 2vw !important;
                        }
                        .c-beige-bg .component-2-col .col-lg-2-6 {
                            grid-column: 2 / span 6 !important;
                        }
                        .c-beige-bg .component-2-col .col-lg-8-6 {
                            grid-column: 8 / span 6 !important;
                        }
                    }
                `
            }} />
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
                                        <a className={`${handles.active}`} href="/rolex/nuevos-modelos-2025/">Nuevos Modelos 2025</a>
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
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/rolex-new-watches-2025-the-land-dweller-hub-cover-m127334-0001-oct-25-portrait.webp"
                                    />
                                    <img
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/rolex-new-watches-2025-the-land-dweller-hub-cover-m127334-0001-oct-25-landscape.webp"
                                        loading="lazy"
                                        alt="Land-Dweller"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="c-beige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw text-introduccion pb-90-60">
                            <div className="col-lg-2-5">
                                <h1 className="headline50 c-brown-text pb-20">Nuevos modelos Rolex 2025 - GLAUSER</h1>
                            </div>
                            <div className="col-lg-8-5">
                                <p className="body-20-light">
                                    <strong>Rolex presenta sus novedades, fruto de una imaginación en perpetuo
                                        movimiento que impregna toda la manufactura.</strong> Esta singular visión de la relojería lleva
                                    la innovación a todos los ámbitos del savoir‑faire. Del movimiento a la caja y el brazalete, del
                                    diseño a la elección de los materiales, las últimas creaciones de Rolex hacen gala de una inventiva
                                    y un rigor constantemente renovados, de una voluntad de rebasar siempre los límites de la
                                    excelencia. Estos relojes son producto de una serie de logros relojeros que amplían el espectro de
                                    posibilidades y esbozan nuevas perspectivas.
                                </p>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-2-col pb-90-60">
                            <div className="col-lg-2-6 pb-50-0">
                                <a href="https://www.glauser.com.co/rolex/nuevos-modelos-2025/land-dweller/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/rolex-new-watches-2025-land-dweller-m127334-0001-oct-25-portrait.webp"
                                        />
                                        <img
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/rolex-new-watches-2025-land-dweller-m127334-0001-oct-25-landscape.webp"
                                            loading="lazy"
                                            alt="Rolex Land-Dweller"
                                        />
                                    </picture>
                                    <div className="pt-10">
                                        <p className="body-20-bold c-brown-text">Nuevos Modelos 2025</p>
                                        <h2 className="headline36 c-brown-text">Land-Dweller</h2>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-8-6">
                                <a href="https://www.glauser.com.co/rolex/nuevos-modelos-2025/gmt-master-ii/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/rolex-new-watches-2025-gmt-master-ii-m126729vtnr-0001-portrait.webp"
                                        />
                                        <img
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/rolex-new-watches-2025-gmt-master-ii-m126729vtnr-0001-landscape.webp"
                                            loading="lazy"
                                            alt="Rolex GMT-Master II"
                                        />
                                    </picture>
                                    <div className="pt-10">
                                        <p className="body-20-bold c-brown-text">Nuevos Modelos 2025</p>
                                        <h2 className="headline36 c-brown-text">Rolex GMT-Master II</h2>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-2-col pb-90-60">
                            <div className="col-lg-2-6 pb-50-0">
                                <a href="https://www.glauser.com.co/rolex/nuevos-modelos-2025/oyster-perpetual/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/rolex-new-watches-2025-oyster-perpetual-m276200-0008-portrait.webp"
                                        />
                                        <img
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/rolex-new-watches-2025-oyster-perpetual-m276200-0008-landscape.webp"
                                            loading="lazy"
                                            alt="Rolex Oyster Perpetual"
                                        />
                                    </picture>
                                    <div className="pt-10">
                                        <p className="body-20-bold c-brown-text">Nuevos Modelos 2025</p>
                                        <h2 className="headline36 c-brown-text">Rolex Oyster Perpetual</h2>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-8-6">
                                <a href="https://www.glauser.com.co/rolex/nuevos-modelos-2025/1908/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/rolex-new-watches-2025-perpetual-1908-m52508-0008-portrait.webp"
                                        />
                                        <img
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/rolex-new-watches-2025-perpetual-1908-m52508-0008-landscape.webp"
                                            loading="lazy"
                                            alt="Rolex 1908"
                                        />
                                    </picture>
                                    <div className="pt-10">
                                        <p className="body-20-bold c-brown-text">Nuevos Modelos 2025</p>
                                        <h2 className="headline36 c-brown-text">Rolex 1908</h2>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-2-col">
                            <div className="col-lg-2-6 pb-50-0">
                                <a href="https://www.glauser.com.co/rolex/nuevos-modelos-2025/datejust/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/rolex-new-watches-2025-datejust-31-m278288rbr-0041-portrait.webp"
                                        />
                                        <img
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/rolex-new-watches-2025-datejust-31-m278288rbr-0041-landscape.webp"
                                            loading="lazy"
                                            alt="Rolex Datejust"
                                        />
                                    </picture>
                                    <div className="pt-10">
                                        <p className="body-20-bold c-brown-text">Nuevos Modelos 2025</p>
                                        <h2 className="headline36 c-brown-text">Rolex Datejust</h2>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-8-6">
                                <a href="https://www.glauser.com.co/rolex/nuevos-modelos-2025/esferas-ineditas">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/rolex-new-watches-2025-new-dials-m126518ln-0014-portrait.webp"
                                        />
                                        <img
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/modelos-2025/rolex-new-watches-2025-new-dials-m126518ln-0014-landscape.webp"
                                            loading="lazy"
                                            alt="Esferas inéditas"
                                        />
                                    </picture>
                                    <div className="pt-10">
                                        <p className="body-20-bold c-brown-text">Nuevos Modelos 2025</p>
                                        <h2 className="headline36 c-brown-text">Esferas inéditas</h2>
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
