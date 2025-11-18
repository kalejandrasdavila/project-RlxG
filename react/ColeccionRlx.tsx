import React from 'react';
import useInitScripts from './components/hooks/useInitScripts';
import Nav from './components/parts/Nav';
import RlxExploreMas from './components/parts/RlxExploreMas';
import Footer from './components/parts/Footer';
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
    'legend_16_light', 'col_span_2_2', 'col_6_6', 'col_6_10', 'col_lg_2_6', 'component_3_col_2',
    // Missing handles
    'pt_10', 'pb_50_0'
] as const

const ColeccionRlx: React.FC = () => {
    const handles = useCssHandles(CSS_HANDLES);

    //hook solo para scripts básicos
    useInitScripts();
    // Removido useColeccionSwiper temporalmente para evitar errores

    return (
        <>
            {/* Cargar estilos externos directamente */}
            <link rel="stylesheet" href="https://glauser.myvtex.com/files/style.min.css" />
            <link rel="stylesheet" href="https://glauser.vteximg.com.br/arquivos/style-rolex-general-glauser.css" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

            {/* Cargar scripts externos directamente */}
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" async></script>
            <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" async></script>

            {/* Estilos básicos mínimos */}
            <style dangerouslySetInnerHTML={{
                __html: `
          body { 
            font-family: 'Roboto', Arial, sans-serif; 
            margin: 0; 
            padding: 0; 
            background-color: #f8f8f8;
          }
          .rlx_menu { 
            background-color: #006341; 
            color: white; 
            min-height: 60px;
            display: flex;
            align-items: center;
          }
          .rlx_container { 
            max-width: 1200px; 
            margin: 0 auto; 
            padding: 0 15px; 
          }
          .row_grid { 
            display: flex; 
            align-items: center; 
            justify-content: space-between; 
            flex-wrap: wrap;
          }
          .rlx_logo img { 
            max-height: 60px; 
            width: auto; 
          }
          img {
            max-width: 100%;
            height: auto;
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
                                <a href="https://glauser.myvtex.com/rolex/" aria-label="Inicio" title="Inicio">
                                    <picture className={`${handles.placa_rolex_logo}`}>
                                        <source media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/logo-plecas/Rolex-retailer-plaque-240x120_en.jpg" />
                                        <img
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/logo-plecas/Rolex-retailer-plaque-240x120_en.jpg"
                                            loading="lazy" alt="placa distribuidor oficial rolex" />
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
                                <a href="https://glauser.myvtex.com/rolex/" className={`${handles.description} ${handles.fixed_14}`} style={{ color: '#ffffff' }}>Rolex</a>
                                <span className={`${handles.description} ${handles.fixed_14}`} style={{ color: '#ffffff', padding: '0 8px' }}> / </span>
                                <span className={`${handles.description} ${handles.fixed_14} ${handles.active}`} style={{ color: '#61bd93' }}>Relojes Rolex</span>
                            </nav>
                        </div>
                    </div>
                </section>



                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-hub-cover-m126333-0010-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-hub-cover-m126333-0010-landscape.webp" loading="lazy" alt="Reloj Rolex" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw text-introduccion pb-90-60">
                            <div className="col-lg-2-5">
                                <h1 className="headline50 c-brown-text pb-20">Relojes Rolex en GLAUSER en Colombia</h1>
                            </div>
                            <div className="col-lg-8-5">
                                <p className="body-20-light"><strong>Esta selección de modelos Rolex proviene del catálogo oficial y no representa las existencias disponibles en la joyería.</strong> Si quiere realizar una consulta sobre algún reloj en particular, no dude en ponerse en contacto con nosotros.</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-video">
                            <div className="col-6-12">
                                <h2 className="headline36 c-brown-text pb-20">Nuevos modelos 2025</h2>
                                <a href="https://www.glauser.com.co/rolex/nuevos-modelos-2025/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-2025-the-land-dweller-m127334-0001-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-2025-the-land-dweller-m127334-0001-landscape.webp" loading="lazy" alt="Nuevos Modelos Rolex 2025" />
                                    </picture>
                                </a>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-2-col pb-90-60">
                            <div className="col-lg-2-6 pb-50-0">
                                <div className="pt-10">
                                    <p className="fixed-16 c-brown-text">Nuevos modelos 2025</p>
                                    <h3 className="headline36 c-brown-text">Ampliar horizontes</h3>
                                    <a href="https://www.glauser.com.co/rolex/nuevos-modelos-2025/" className="btn-label-icon-rlx">Más información
                                        <svg height="12" width="12" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" fill="white"><path d="M11.7,7.5l-1.4,1.4l-5.7,5.7l-1.4-1.4l5.7-5.7L3.3,1.9l1.4-1.4l5.7,5.7l0,0L11.7,7.5z"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-2-col">
                            <div className="col-lg-2-6">
                                <h2 className="headline36 c-brown-text pb-20">Relojes clásicos</h2>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-3-col-2 pb-90-60">
                            <div className="col-span-2-1 col-6-2 pb-50-0">
                                <a href="https://www.glauser.com.co/rolex/watches/land-dweller/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-land-dweller-2025-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-land-dweller-2025-landscape.webp" loading="lazy" alt="Rolex Land-Dweller" />
                                    </picture>
                                </a>
                                <div className="pt-10">
                                    <p className="legend-16-light c-brown-text">Rolex</p>
                                    <h3 className="body-24-bold c-brown-text">Land-Dweller</h3>
                                </div>
                            </div>
                            <div className="col-span-2-2 col-6-6 pb-50-0">
                                <a href="https://www.glauser.com.co/rolex/watches/day-date/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-day-date-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-day-date-landscape.webp" loading="lazy" alt="Rolex Day-Date" />
                                    </picture>
                                </a>
                                <div className="pt-10">
                                    <p className="legend-16-light c-brown-text">Rolex</p>
                                    <h3 className="body-24-bold c-brown-text">Day-Date</h3>
                                </div>
                            </div>
                            <div className="col-span-2-1 col-6-10">
                                <a href="https://www.glauser.com.co/rolex/watches/sky-dweller/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-sky-dweller-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-sky-dweller-landscape.webp" loading="lazy" alt="Rolex Sky-Dweller" />
                                    </picture>
                                </a>
                                <div className="pt-10">
                                    <p className="legend-16-light c-brown-text">Rolex</p>
                                    <h3 className="body-24-bold c-brown-text">Sky-Dweller</h3>
                                </div>
                            </div>
                            <div className="col-span-2-2 col-6-2 pb-50-0">
                                <a href="https://www.glauser.com.co/rolex/watches/lady-datejust/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-lady-datejust-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-lady-datejust-landscape.webp" loading="lazy" alt="Rolex Lady-Datejust" />
                                    </picture>
                                </a>
                                <div className="pt-10">
                                    <p className="legend-16-light c-brown-text">Rolex</p>
                                    <h3 className="body-24-bold c-brown-text">Lady-Datejust</h3>
                                </div>
                            </div>
                            <div className="col-span-2-1 col-6-6">
                                <a href="https://www.glauser.com.co/rolex/watches/datejust/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-datejust-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-datejust-landscape.webp" loading="lazy" alt="Rolex Datejust" />
                                    </picture>
                                </a>
                                <div className="pt-10">
                                    <p className="legend-16-light c-brown-text">Rolex</p>
                                    <h3 className="body-24-bold c-brown-text">Datejust</h3>
                                </div>
                            </div>
                            <div className="col-span-2-2 col-6-10">
                                <a href="https://www.glauser.com.co/rolex/watches/oyster-perpetual/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-oyster-perpetual-2025-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-oyster-perpetual-2025-landscape.webp" loading="lazy" alt="Rolex Oyster Perpetual" />
                                    </picture>
                                </a>
                                <div className="pt-10">
                                    <p className="legend-16-light c-brown-text">Rolex</p>
                                    <h3 className="body-24-bold c-brown-text">Oyster Perpetual</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-2-col">
                            <div className="col-lg-2-6">
                                <h2 className="headline36 c-brown-text pb-20">Relojes profesionales</h2>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-3-col-2 pb-90-60">
                            <div className="col-span-2-1 col-6-2 pb-50-0">
                                <a href="https://www.glauser.com.co/rolex/watches/cosmograph-daytona/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-cosmograph-daytona-2025-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-cosmograph-daytona-2025-landscape.webp" loading="lazy" alt="Rolex Cosmograph Daytona" />
                                    </picture>
                                </a>
                                <div className="pt-10">
                                    <p className="legend-16-light c-brown-text">Rolex</p>
                                    <h3 className="body-24-bold c-brown-text">Cosmograph Daytona</h3>
                                </div>
                            </div>
                            <div className="col-span-2-2 col-6-6 pb-50-0">
                                <a href="https://www.glauser.com.co/rolex/watches/submariner/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-submariner-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-submariner-landscape.webp" loading="lazy" alt="Rolex Submariner" />
                                    </picture>
                                </a>
                                <div className="pt-10">
                                    <p className="legend-16-light c-brown-text">Rolex</p>
                                    <h3 className="body-24-bold c-brown-text">Submariner</h3>
                                </div>
                            </div>
                            <div className="col-span-2-1 col-6-10">
                                <a href="https://www.glauser.com.co/rolex/watches/sea-dweller/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-sea-dweller-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-sea-dweller-landscape.webp" loading="lazy" alt="Rolex Sea-Dweller" />
                                    </picture>
                                </a>
                                <div className="pt-10">
                                    <p className="legend-16-light c-brown-text">Rolex</p>
                                    <h3 className="body-24-bold c-brown-text">Sea-Dweller</h3>
                                </div>
                            </div>
                            <div className="col-span-2-2 col-6-2 pb-50-0">
                                <a href="https://www.glauser.com.co/rolex/watches/deepsea/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-deepsea-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-deepsea-landscape.webp" loading="lazy" alt="Rolex Deepsea" />
                                    </picture>
                                </a>
                                <div className="pt-10">
                                    <p className="legend-16-light c-brown-text">Rolex</p>
                                    <h3 className="body-24-bold c-brown-text">Deepsea</h3>
                                </div>
                            </div>
                            <div className="col-span-2-1 col-6-6 pb-50-0">
                                <a href="https://www.glauser.com.co/rolex/watches/gmt-master-ii/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-gmt-master-ii-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-gmt-master-ii-landscape.webp" loading="lazy" alt="Rolex GMT-Master II" />
                                    </picture>
                                </a>
                                <div className="pt-10">
                                    <p className="legend-16-light c-brown-text">Rolex</p>
                                    <h3 className="body-24-bold c-brown-text">GMT-Master II</h3>
                                </div>
                            </div>
                            <div className="col-span-2-2 col-6-10">
                                <a href="https://www.glauser.com.co/rolex/watches/yacht-master/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-yacht-master-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-yacht-master-landscape.webp" loading="lazy" alt="Rolex Yacht-Master" />
                                    </picture>
                                </a>
                                <div className="pt-10">
                                    <p className="legend-16-light c-brown-text">Rolex</p>
                                    <h3 className="body-24-bold c-brown-text">Yacht-Master</h3>
                                </div>
                            </div>
                            <div className="col-span-2-1 col-6-2">
                                <a href="https://www.glauser.com.co/rolex/watches/explorer/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-explorer-2025-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-explorer-2025-landscape.webp" loading="lazy" alt="Rolex Explorer" />
                                    </picture>
                                </a>
                                <div className="pt-10">
                                    <p className="legend-16-light c-brown-text">Rolex</p>
                                    <h3 className="body-24-bold c-brown-text">Explorer</h3>
                                </div>
                            </div>
                            <div className="col-span-2-2 col-6-6">
                                <a href="https://www.glauser.com.co/rolex/watches/air-king/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-air-king-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-air-king-landscape.webp" loading="lazy" alt="Rolex Air-king" />
                                    </picture>
                                </a>
                                <div className="pt-10">
                                    <p className="legend-16-light c-brown-text">Rolex</p>
                                    <h3 className="body-24-bold c-brown-text">Air-King</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-2-col">
                            <div className="col-lg-2-6">
                                <h2 className="headline36 c-brown-text pb-20">Perpetual</h2>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-3-col-2">
                            <div className="col-span-2-1 col-6-2 pb-50-0">
                                <a href="https://www.glauser.com.co/rolex/watches/1908/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-1908-2025-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-1908-2025-landscape.webp" loading="lazy" alt="Rolex 1908" />
                                    </picture>
                                </a>
                                <div className="pt-10">
                                    <p className="legend-16-light c-brown-text">Rolex</p>
                                    <h3 className="body-24-bold c-brown-text">1908</h3>
                                </div>
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

export default ColeccionRlx;