import React from 'react';
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
        <section className={`${handles.breadcrum_page}`}>
          <div className={`${handles.rlx_container}`}>
            <div className={`${handles.breadcrum_column}`}>
              <nav className={`${handles.breadcrum_menu_list}`}>
                <a href="https://glauser.myvtex.com/rolex/" className={`${handles.description} ${handles.fixed_14}`}>Inicio</a>
                <span className={`${handles.description} ${handles.fixed_14}`}>/</span>
                <span className={`${handles.description} ${handles.fixed_14} ${handles.active}`}>Colección Rolex</span>
              </nav>
            </div>
          </div>
        </section>

        {/* Contenido principal */}
        <section className={`${handles.c_lightbeige_bg}`}>
          <div className={`${handles.rlx_container_content} ${handles.py_90_60}`}>
            <div className={`${handles.row_grid_fullw} ${handles.text_introduccion} ${handles.py_90_60}`}>
              <div className={`${handles.col_lg_2_5}`}>
                <h1 className={`${handles.headline50} ${handles.c_brown_text} ${handles.pb_20}`}>
                  Colección Rolex
                </h1>
              </div>
              <div className={`${handles.col_lg_8_5}`}>
                <p className={`${handles.body_20_light}`}>
                  <strong>
                    Descubra la colección completa de relojes Rolex en GLAUSER,
                  </strong>
                  Distribuidor Oficial autorizado para vender relojes Rolex para hombre y mujer.
                </p>
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