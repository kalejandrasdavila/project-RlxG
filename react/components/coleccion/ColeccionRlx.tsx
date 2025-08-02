import React from 'react';
import { Helmet } from "react-helmet-async";
import useInitScripts from '../hooks/useInitScripts';
import Nav from '../parts/Nav';
import RlxExploreMasNModels from '../parts/RlxExploreMas';
import Footer from '../parts/Footer';
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
  'legend_16_light', 'col_span_2_2', 'col_6_6', 'col_6_10', 'col_lg_2_6', 'component_3_col_2',
  // Missing handles
  'pt_10', 'pb_50_0'
] as const

const ColeccionRlx: React.FC = () => {
  useInitScripts();
  const handles = useCssHandles(CSS_HANDLES)
  return (
    <>
      <Helmet>
        <title>Relojes Rolex en Colombia - GLAUSER</title>
        <meta
          name="description"
          content="Descubra los relojes Rolex en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y mujer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://devjhernandez--glauser.myvtex.com/files/style.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://glauser.vteximg.com.br/arquivos/style-rolex-general-glauser.css"
        />
        <link rel="stylesheet preload" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

        <link rel="canonical" href="https://devjhernandez--glauser.myvtex.com/rolex/coleccion-rolex/" />

        <meta property="og:url" content="https://devjhernandez--glauser.myvtex.com/rolex/coleccion-rolex/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Relojes Rolex en Colombia - GLAUSER"
        />
        <meta
          property="og:description"
          content="Descubra los relojes Rolex en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y mujer."
        />
        <meta
          property="og:image"
          content="https://glauser.vteximg.com.br/arquivos/coleccion-rolex-1200x630.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@glauser_col" />
        <meta name="twitter:title" content="Relojes Rolex en Colombia - GLAUSER" />
        <meta name="twitter:description" content="Descubra los relojes Rolex en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y mujer." />
        <meta name="twitter:image" content="https://glauser.vteximg.com.br/arquivos/coleccion-rolex-1200x630.jpg" />
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
                    <a href="/rolex/">Rolex</a>
                  </li>
                  <li className={`${handles.fixed_14} ${handles.active}`}>
                    <a className={`${handles.active}`} href="/rolex/coleccion-rolex/">Relojes Rolex</a>
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
                    srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-hub-cover-m126333-0010-portrait.webp"
                  />
                  <img
                    alt="Reloj Rolex"
                    loading="lazy"
                    src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-hub-cover-m126333-0010-landscape.webp"
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
                <h1 className={`${handles.headline50} ${handles.c_brown_text} ${handles.pb_20}`}>
                  Relojes Rolex en GLAUSER en Colombia
                </h1>
              </div>
              <div className={`${handles.col_lg_8_5}`}>
                <p className={`${handles.body_20_light}`}>
                  <strong>
                    Esta selección de modelos Rolex proviene del catálogo oficial y no
                    representa las existencias disponibles en la joyería.
                  </strong>
                  Si quiere realizar una consulta sobre algún reloj en particular, no
                  dude en ponerse en contacto con nosotros.
                </p>
              </div>
            </div>
            <div className={`${handles.row_grid_fullw} ${handles.component_video}`}>
              <div className={`${handles.col_6_12}`}>
                <h2 className={`${handles.headline36} ${handles.c_brown_text} ${handles.pb_20}`}>Nuevos modelos 2025</h2>
                <a href="/rolex/nuevos-modelos-2025/">
                  <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-2025-the-land-dweller-m127334-0001-portrait.webp"
                    />
                    <img
                      alt="Nuevos Modelos Rolex 2025"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-2025-the-land-dweller-m127334-0001-landscape.webp"
                    />
                  </picture>
                </a>
              </div>
            </div>
            <div className={`${handles.row_grid_fullw} ${handles.component_2_col} ${handles.pb_90_60}`}>
              <div className={`${handles.col_lg_2_6} ${handles.pb_50_0}`}>
                <div className={`${handles.pt_10}`}>
                  <p className={`${handles.fixed_16} ${handles.c_brown_text}`}>Nuevos modelos 2025</p>
                  <h3 className={`${handles.headline36} ${handles.c_brown_text}`}>Ampliar horizontes</h3>
                  <a
                    className={`${handles.btn_label_icon_rlx}`}
                    href="/rolex/nuevos-modelos-2025/">
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
              <div className={`${handles.col_lg_2_6}`}>
                <h2 className={`${handles.headline36} ${handles.c_brown_text} ${handles.pb_20}`}>Relojes clásicos</h2>
              </div>
            </div>
            <div className={`${handles.row_grid_fullw} ${handles.component_3_col} ${handles.pb_90_60}`}>
              <div className={`${handles.col_span_2_1} ${handles.col_6_2} ${handles.pb_50_0}`}>
                <a href="/rolex/watches/land-dweller/">
                  <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-land-dweller-2025-portrait.webp"
                    />
                    <img
                      alt="Rolex Land-Dweller"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-land-dweller-2025-landscape.webp"
                    />
                  </picture>
                </a>
                <div className={`${handles.pt_10}`}>
                  <p className={`${handles.legend_16_light} ${handles.c_brown_text}`}>Rolex</p>
                  <h3 className={`${handles.body_24_bold} ${handles.c_brown_text}`}>Land-Dweller</h3>
                </div>
              </div>
              <div className={`${handles.col_span_2_2} ${handles.col_6_6} ${handles.pb_50_0}`}>
                <a href="/rolex/watches/day-date/">
                  <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-day-date-portrait.webp"
                    />
                    <img
                      alt="Rolex Day-Date"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-day-date-landscape.webp"
                    />
                  </picture>
                </a>
                <div className={`${handles.pt_10}`}>
                  <p className={`${handles.legend_16_light} ${handles.c_brown_text}`}>Rolex</p>
                  <h3 className={`${handles.body_24_bold} ${handles.c_brown_text}`}>Day-Date</h3>
                </div>
              </div>
              <div className={`${handles.col_span_2_1} ${handles.col_6_10}`}>
                <a href="/rolex/watches/sky-dweller/">
                  <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-sky-dweller-portrait.webp"
                    />
                    <img
                      alt="Rolex Sky-Dweller"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-sky-dweller-landscape.webp"
                    />
                  </picture>
                </a>
                <div className={`${handles.pt_10}`}>
                  <p className={`${handles.legend_16_light} ${handles.c_brown_text}`}>Rolex</p>
                  <h3 className={`${handles.body_24_bold} ${handles.c_brown_text}`}>Sky-Dweller</h3>
                </div>
              </div>
              <div className={`${handles.col_span_2_2} ${handles.col_6_2} ${handles.pb_50_0}`}>
                <a href="/rolex/watches/lady-datejust/">
                  <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-lady-datejust-portrait.webp"
                    />
                    <img
                      alt="Rolex Lady-Datejust"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-lady-datejust-landscape.webp"
                    />
                  </picture>
                </a>
                <div className={`${handles.pt_10}`}>
                  <p className={`${handles.legend_16_light} ${handles.c_brown_text}`}>Rolex</p>
                  <h3 className={`${handles.body_24_bold} ${handles.c_brown_text}`}>Lady-Datejust</h3>
                </div>
              </div>
              <div className={`${handles.col_span_2_1} ${handles.col_6_6}`}>
                <a href="/rolex/watches/datejust/">
                  <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-datejust-portrait.webp"
                    />
                    <img
                      alt="Rolex Datejust"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-datejust-landscape.webp"
                    />
                  </picture>
                </a>
                <div className={`${handles.pt_10}`}>
                  <p className={`${handles.legend_16_light} ${handles.c_brown_text}`}>Rolex</p>
                  <h3 className={`${handles.body_24_bold} ${handles.c_brown_text}`}>Datejust</h3>
                </div>
              </div>
              <div className={`${handles.col_span_2_1} ${handles.col_6_10}`}>
                <a href="/rolex/watches/oyster-perpetual/">
                  <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-oyster-perpetual-2025-portrait.webp"
                    />
                    <img
                      alt="Rolex Oyster Perpetual"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-oyster-perpetual-2025-landscape.webp"
                    />
                  </picture>
                </a>
                <div className={`${handles.pt_10}`}>
                  <p className={`${handles.legend_16_light} ${handles.c_brown_text}`}>Rolex</p>
                  <h3 className={`${handles.body_24_bold} ${handles.c_brown_text}`}>Oyster Perpetual</h3>
                </div>
              </div>
            </div>
            <div className={`${handles.row_grid_fullw} ${handles.component_2_col}`}>
              <div className={`${handles.col_lg_2_6}`}>
                <h2 className={`${handles.headline36} ${handles.c_brown_text} ${handles.pb_20}`}>Relojes profesionales</h2>
              </div>
            </div>
            <div className={`${handles.row_grid_fullw} ${handles.component_3_col} ${handles.pb_90_60}`}>
              <div className={`${handles.col_span_2_1} ${handles.col_6_2} ${handles.pb_50_0}`}>
                <a href="/rolex/watches/cosmograph-daytona/">
                  <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-cosmograph-daytona-2025-portrait.webp"
                    />
                    <img
                      alt="Rolex Cosmograph Daytona"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-cosmograph-daytona-2025-landscape.webp"
                    />
                  </picture>
                </a>
                <div className={`${handles.pt_10}`}>
                  <p className={`${handles.legend_16_light} ${handles.c_brown_text}`}>Rolex</p>
                  <h3 className={`${handles.body_24_bold} ${handles.c_brown_text}`}>Cosmograph Daytona</h3>
                </div>
              </div>
              <div className={`${handles.col_span_2_2} ${handles.col_6_6} ${handles.pb_50_0}`}>
                <a href="/rolex/watches/submariner/">
                  <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-submariner-portrait.webp"
                    />
                    <img
                      alt="Rolex Submariner"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-submariner-landscape.webp"
                    />
                  </picture>
                </a>
                <div className={`${handles.pt_10}`}>
                  <p className={`${handles.legend_16_light} ${handles.c_brown_text}`}>Rolex</p>
                  <h3 className={`${handles.body_24_bold} ${handles.c_brown_text}`}>Submariner</h3>
                </div>
              </div>
              <div className={`${handles.col_span_2_1} ${handles.col_6_10}`}>
                <a href="/rolex/watches/sea-dweller/">
                  <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-sea-dweller-portrait.webp"
                    />
                    <img
                      alt="Rolex Sea-Dweller"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-sea-dweller-landscape.webp"
                    />
                  </picture>
                </a>
                <div className={`${handles.pt_10}`}>
                  <p className={`${handles.legend_16_light} ${handles.c_brown_text}`}>Rolex</p>
                  <h3 className={`${handles.body_24_bold} ${handles.c_brown_text}`}>Sea-Dweller</h3>
                </div>
              </div>
              <div className={`${handles.col_span_2_2} ${handles.col_6_2} ${handles.pb_50_0}`}>
                <a href="/rolex/watches/deepsea/">
                  <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-deepsea-portrait.webp"
                    />
                    <img
                      alt="Rolex Deepsea"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-deepsea-landscape.webp"
                    />
                  </picture>
                </a>
                <div className={`${handles.pt_10}`}>
                  <p className={`${handles.legend_16_light} ${handles.c_brown_text}`}>Rolex</p>
                  <h3 className={`${handles.body_24_bold} ${handles.c_brown_text}`}>Deepsea</h3>
                </div>
              </div>
              <div className={`${handles.col_span_2_1} ${handles.col_6_6} ${handles.pb_50_0}`}>
                <a href="/rolex/watches/gmt-master-ii/">
                  <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-gmt-master-ii-portrait.webp"
                    />
                    <img
                      alt="Rolex GMT-Master II"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-gmt-master-ii-landscape.webp"
                    />
                  </picture>
                </a>
                <div className={`${handles.pt_10}`}>
                  <p className={`${handles.legend_16_light} ${handles.c_brown_text}`}>Rolex</p>
                  <h3 className={`${handles.body_24_bold} ${handles.c_brown_text}`}>GMT-Master II</h3>
                </div>
              </div>
              <div className="col-span-2-2 col-6-10">
                <a href="/rolex/watches/yacht-master/">
                  <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-yacht-master-portrait.webp"
                    />
                    <img
                      alt="Rolex Yacht-Master"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-yacht-master-landscape.webp"
                    />
                  </picture>
                </a>
                <div className={`${handles.pt_10}`}>
                  <p className={`${handles.legend_16_light} ${handles.c_brown_text}`}>Rolex</p>
                  <h3 className={`${handles.body_24_bold} ${handles.c_brown_text}`}>Yacht-Master</h3>
                </div>
              </div>
              <div className="col-span-2-1 col-6-2">
                <a href="/rolex/watches/explorer/">
                  <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-explorer-2025-portrait.webp"
                    />
                    <img
                      alt="Rolex Explorer"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-explorer-2025-landscape.webp"
                    />
                  </picture>
                </a>
                <div className={`${handles.pt_10}`}>
                  <p className={`${handles.legend_16_light} ${handles.c_brown_text}`}>Rolex</p>
                  <h3 className={`${handles.body_24_bold} ${handles.c_brown_text}`}>Explorer</h3>
                </div>
              </div>
              <div className="col-span-2-2 col-6-6">
                <a href="/rolex/watches/air-king/">
                  <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-air-king-portrait.webp"
                    />
                    <img
                      alt="Rolex Air-king"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-air-king-landscape.webp"
                    />
                  </picture>
                </a>
                <div className={`${handles.pt_10}`}>
                  <p className={`${handles.legend_16_light} ${handles.c_brown_text}`}>Rolex</p>
                  <h3 className={`${handles.body_24_bold} ${handles.c_brown_text}`}>Air-King</h3>
                </div>
              </div>
            </div>
            <div className={`${handles.row_grid_fullw} ${handles.component_2_col}`}>
              <div className={`${handles.col_lg_2_6}`}>
                <h2 className={`${handles.headline36} ${handles.c_brown_text} ${handles.pb_20}`}>Perpetual</h2>
              </div>
            </div>
            <div className={`${handles.row_grid_fullw} ${handles.component_3_col_2}`}>
              <div className={`${handles.col_span_2_1} ${handles.col_6_2} ${handles.pb_50_0}`}>
                <a href="/rolex/watches/1908/">
                  <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/rolex-watches-1908-2025-portrait.webp"
                    />
                    <img
                      alt="Rolex 1908"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/rolex-watches-1908-2025-landscape.webp"
                    />
                  </picture>
                </a>
                <div className={`${handles.pt_10}`}>
                  <p className={`${handles.legend_16_light} ${handles.c_brown_text}`}>Rolex</p>
                  <h3 className={`${handles.body_24_bold} ${handles.c_brown_text}`}>1908</h3>
                </div>
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

export default ColeccionRlx;