import React, { useEffect } from 'react';
import { useCssHandles } from 'vtex.css-handles';
import useInitScripts from './components/hooks/useInitScripts';
import Nav from './components/parts/Nav';
import Footer from './components/parts/Footer';
import RlxExploreMas from './components/parts/RlxExploreMas';
import './main-style.css';

const CSS_HANDLES = [
  //HEADER//
  'headercomponent', 'rlx_html', 'home_rlx', 'rlx_menu', 'rlx_container', 'row_grid', 'rlx_logo', 'placa_rolex_logo',
  'swiper_wrapper',
  ///rlx-exploremas//
  'rlx_exploremas', 'rlx_banner_slider', 'swiper_container', 'slider_home_principal', 'swiper_slide', 'row_grid_fullw',
  'banner_text_absolute2', 'slide_content', 'headline26', 'c_white_text', 'headline70', 'pb_20', 'btn_primary_rlx', 'slider_image_6_12',
  'c_dark_text', 'swiper_pagination_home', 'swiper_pagination_clickable', 'swiper_pagination_bullets', 'swiper_pagination_bullet_active',
  'swiper_pagination', 'swiper_button_prev', 'principal_prev', 'swiper_button_next', 'principal_next',
  //c-lightbeige-bg//
  'c_lightbeige_bg', 'rlx_container_content', 'py_90_60', 'text_introduccion', 'col_lg_2_5', 'headline50', 'c_brown_text', 'col_lg_8_5', 'body_20_light',
  'component_video', 'col_6_12', 'headline36', 'rlx_pbanner_top', 'p_relative', 'component_2_col', 'pb_90_60', 'col_lg_2_6', 'pb_50_0', 'pt_10', 'fixed_16',
  'btn_label_icon_rlx',
  //c-beige-bg//
  'c_beige_bg', 'component_3_col', 'col_6_2', 'legend_16_light', 'body_24_bold', 'legend_16_bold', '_rotate_90', 'col_6_6', 'col_6_10'

] as const


const Home: React.FC = () => {
  const handles = useCssHandles(CSS_HANDLES);

  useInitScripts();


  return (
    <>
      <link rel="stylesheet" href="https://glauser.myvtex.com/files/style.min.css" />
      <link rel="stylesheet" href="https://glauser.vteximg.com.br/arquivos/style-rolex-general-glauser.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" async></script>
      <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" async></script>

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


        <section className="rlx-exploremas rlx-banner-slider">
          <div className="swiper-container slider-home-principal" style={{ width: "100%", height: "auto" }}>
            <div className="swiper-wrapper">
              <div className="swiper-slide row-grid-fullw">
                <div className="slide-content banner-text-absolute2">
                  <span className="headline26">Rolex</span>
                  <p className="headline70 pb-20">1908</p>
                  <a href="https://www.glauser.com.co/rolex/watches/1908/" className="btn-primary-rlx">Descubra más</a>
                </div>
                <div className="slider-image-6-12">
                  <a href="https://www.glauser.com.co/rolex/watches/1908/">
                    <picture className="banner-10">
                      <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-1908-m52508-0008-oct-25-portrait.webp" />
                      <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-1908-m52508-0008-oct-25-landscape.webp" loading="lazy" alt="Relojes Rolex 1908" />
                    </picture>
                  </a>
                </div>
              </div>
              <div className="swiper-slide row-grid-fullw">
                <div className="slide-content banner-text-absolute2" style={{ marginBottom: "20px" }}>
                  <span className="headline26 c-white-text">Rolex y la vela</span>
                  <p className="headline70 pb-20 c-white-text">Rolex SailGp Championship</p>
                  <a href="https://www.glauser.com.co/rolex/mundo-rolex/sailgp/" className="btn-primary-rlx">Descubra más</a>
                </div>
                <div className="slider-image-6-12">
                  <a href="https://www.glauser.com.co/rolex/mundo-rolex/sailgp/">
                    <picture className="banner-10">
                      <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-world-of-rolex-sailgp-sep-25-portrait.webp" />
                      <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-world-of-rolex-sailgp-sep-25-landscape.webp" loading="lazy" alt="Rolex SailGp Championship" />
                    </picture>
                  </a>
                </div>
              </div>
              <div className="swiper-slide row-grid-fullw">
                <div className="slide-content banner-text-absolute2">
                  <p className="headline26">Rolex y el «savoir‑faire» relojero</p>
                  <p className="headline70 pb-20">Excelencia en desarrollo</p>
                  <a href="https://www.glauser.com.co/rolex/watchmaking/" className="btn-primary-rlx">Descubra más</a>
                </div>
                <div className="slider-image-6-12">
                  <a href="https://www.glauser.com.co/rolex/watchmaking/">
                    <picture className="banner-10">
                      <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-watchmaking-home-portrait.webp" />
                      <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-watchmaking-home-landscape.webp" loading="lazy" alt="Rolex Watchmaking" />
                    </picture>
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-pagination-home"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </section>

        <section className={`${handles.c_lightbeige_bg}`}>
          <div className={`${handles.rlx_container_content} ${handles.py_90_60}`}>
            <div className={`${handles.row_grid_fullw} ${handles.text_introduccion} ${handles.py_90_60}`}>
              <div className={`${handles.col_lg_2_5}`}>
                <h1 className={`${handles.headline50} ${handles.c_brown_text} ${handles.pb_20}`}>
                  Bienvenido a GLAUSER Distribuidor Oficial Rolex en Colombia
                </h1>
              </div>
              <div className={`${handles.col_lg_8_5}`}>
                <p className={`${handles.body_20_light}`}>
                  <strong>
                    GLAUSER se enorgullece de formar parte de la red mundial de
                    Distribuidores Oficiales Rolex,
                  </strong>
                  los únicos autorizados para vender y realizar el mantenimiento de
                  los relojes Rolex.
                </p>
              </div>
            </div>
            <div className={`${handles.row_grid_fullw} ${handles.component_video}`}>
              <div className={`${handles.col_6_12}`}>
                <h2 className={`${handles.headline36} ${handles.c_brown_text} ${handles.pb_20}`}>Relojes Rolex</h2>
                <a href="https://glauser.myvtex.com/rolex/coleccion-rolex/">
                  <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-watches-portrait.webp"
                    />
                    <img
                      alt="Colección Rolex"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-watches-landscape.webp"
                    />
                  </picture>
                </a>
              </div>
            </div>
            <div className={`${handles.row_grid_fullw} ${handles.component_2_col} ${handles.pb_90_60}`}>
              <div className={`${handles.col_lg_2_6} ${handles.pb_50_0}`}>
                <div className={`${handles.pt_10}`}>
                  <p className={`${handles.fixed_16} ${handles.c_brown_text}`}>Encuentre su Rolex</p>
                  <h3 className={`${handles.headline36} ${handles.c_brown_text}`}>
                    Descubra las colecciones Rolex
                  </h3>
                  <a
                    className={`${handles.btn_label_icon_rlx}`}
                    href="https://glauser.myvtex.com/rolex/coleccion-rolex/">
                    Más información
                    <svg
                      aria-hidden="true"
                      fill="white"
                      height="12"
                      role="img"
                      viewBox="0 0 15 15"
                      width="12"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.7,7.5l-1.4,1.4l-5.7,5.7l-1.4-1.4l5.7-5.7L3.3,1.9l1.4-1.4l5.7,5.7l0,0L11.7,7.5z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className={`${handles.row_grid_fullw} ${handles.component_2_col}`}>
              <div className={`${handles.col_lg_2_6}`}>
                <h2 className={`${handles.headline36} ${handles.c_brown_text} ${handles.pb_20}`}>
                  Póngase en contacto con nosotros
                </h2>
              </div>
            </div>
            <div className={`${handles.row_grid_fullw} ${handles.component_video}`}>
              <div className={`${handles.col_6_12}`}>
                <a href="https://glauser.myvtex.com/rolex/contactenos/">
                  <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/contacto/rolex-contact-message-portrait.webp"
                    />
                    <img
                      alt="Contáctanos Rolex"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/contacto/rolex-contact-message-landscape.webp"
                    />
                  </picture>
                </a>
              </div>
            </div>
            <div className={`${handles.row_grid_fullw} ${handles.component_2_col}`}>
              <div className={`${handles.col_lg_2_6} ${handles.pb_50_0}`}>
                <div className={`${handles.pt_10}`}>
                  <h3 className={`${handles.headline36} ${handles.c_brown_text}`}>Enviar un mensaje</h3>
                  <a
                    className={`${handles.btn_label_icon_rlx}`}
                    href="https://glauser.myvtex.com/rolex/contactenos/"
                  >
                    Contáctenos
                    <svg
                      aria-hidden="true"
                      fill="white"
                      height="12"
                      role="img"
                      viewBox="0 0 15 15"
                      width="12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.7,7.5l-1.4,1.4l-5.7,5.7l-1.4-1.4l5.7-5.7L3.3,1.9l1.4-1.4l5.7,5.7l0,0L11.7,7.5z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="c-beige-bg">
          <div className="rlx-container-content py-90-60">
            <div className="row-grid-fullw component-2-col">
              <div className="col-lg-2-6">
                <h2 className="headline36 c-brown-text pb-20">Descubra Rolex</h2>
              </div>
            </div>
            <div className="row-grid-fullw component-3-col">
              <div className="col-6-2  pb-50-0">
                <a href="https://www.glauser.com.co/rolex/mundo-rolex/">
                  <picture className="rlx-pbanner-top p-relative">
                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-world-of-rolex-WIM23ac-portrait.webp" />
                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-world-of-rolex-WIM23ac-landscape.webp" loading="lazy" alt="Mundo Rolex" />
                  </picture>
                </a>
                <div className="pt-10">
                  <p className="legend-16-light c-brown-text">Un compromiso con la excelencia</p>
                  <h3 className="body-24-bold c-brown-text">El mundo de Rolex</h3>
                  <a href="https://www.glauser.com.co/rolex/mundo-rolex/" className="btn-label-icon-rlx">Más información
                    <svg height="12" width="12" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" fill="white"><path d="M11.7,7.5l-1.4,1.4l-5.7,5.7l-1.4-1.4l5.7-5.7L3.3,1.9l1.4-1.4l5.7,5.7l0,0L11.7,7.5z"></path></svg>
                  </a>
                </div>
              </div>
              <div className="col-6-6  pb-50-0">
                <a href="https://www.glauser.com.co/rolex/watchmaking/">
                  <picture className="rlx-pbanner-top p-relative">
                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-watchmaking-portrait.webp" />
                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-watchmaking-landscape.webp" loading="lazy" alt="Rolex Watchmaking" />
                  </picture>
                </a>
                <div className="pt-10">
                  <p className="legend-16-light c-brown-text">Excelencia en desarrollo</p>
                  <h3 className="body-24-bold c-brown-text">«Savoir-faire» relojero</h3>
                  <a href="https://www.glauser.com.co/rolex/watchmaking/" className="btn-label-icon-rlx">Más información
                    <svg height="12" width="12" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" fill="white"><path d="M11.7,7.5l-1.4,1.4l-5.7,5.7l-1.4-1.4l5.7-5.7L3.3,1.9l1.4-1.4l5.7,5.7l0,0L11.7,7.5z"></path></svg>
                  </a>
                </div>
              </div>
              <div className="col-6-10">
                <a href="https://www.glauser.com.co/rolex/asistencia-rolex/">
                  <picture className="rlx-pbanner-top p-relative">
                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-servicing-portrait.webp" />
                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-servicing-landscape.webp" loading="lazy" alt="Mantenimiento Rolex" />
                  </picture>
                </a>
                <div className="pt-10">
                  <p className="legend-16-light c-brown-text">Nuestra filosofía del mantenimiento</p>
                  <h3 className="body-24-bold c-brown-text">Mantenimiento</h3>
                  <a href="https://www.glauser.com.co/rolex/asistencia-rolex/" className="btn-label-icon-rlx">Más información
                    <svg height="12" width="12" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" fill="white"><path d="M11.7,7.5l-1.4,1.4l-5.7,5.7l-1.4-1.4l5.7-5.7L3.3,1.9l1.4-1.4l5.7,5.7l0,0L11.7,7.5z"></path></svg>
                  </a>
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

export default Home;