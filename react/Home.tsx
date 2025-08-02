import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import useInitScripts from './components/hooks/useInitScripts';
import Nav from './components/parts/Nav';
import RlxExploreMasNModels from './components/parts/RlxExploreMas';
import Footer from './components/parts/Footer';
import { useCssHandles } from 'vtex.css-handles';
import './main-style.css';
import { getBaseUrl, buildUrl, getStylesUrl } from './utils/urlUtils';

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
  useInitScripts();
  const handles = useCssHandles(CSS_HANDLES);
  const baseUrl = getBaseUrl();


  return (
    <>
      <Helmet>
        <title>Distribuidor Oficial Rolex en Colombia - GLAUSER</title>
        <meta
          name="description"
          content="GLAUSER en Colombia se enorgullece de formar parte de la red mundial de Distribuidores Oficiales Rolex, autorizados para vender y realizar el mantenimiento de los relojes Rolex"
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

        <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

        <link rel="canonical" href="https://devjhernandez--glauser.myvtex.com/rolex/" />

        <meta property="og:url" content="https://devjhernandez--glauser.myvtex.com/rolex/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Distribuidor Oficial Rolex en Colombia - GLAUSER"
        />
        <meta
          property="og:description"
          content="GLAUSER en Colombia se enorgullece de formar parte de la red mundial de Distribuidores Oficiales Rolex, autorizados para vender y realizar el mantenimiento de los relojes Rolex"
        />
        <meta
          property="og:image"
          content="https://glauser.vteximg.com.br/arquivos/rolex-home-glauser-1200x630.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@glauser_col" />
        <meta name="twitter:title" content="Distribuidor Oficial Rolex en Colombia - GLAUSER" />
        <meta name="twitter:description" content="GLAUSER en Colombia se enorgullece de formar parte de la red mundial de Distribuidores Oficiales Rolex, autorizados para vender y realizar el mantenimiento de los relojes Rolex" />
        <meta name="twitter:image" content="https://glauser.vteximg.com.br/arquivos/rolex-home-glauser-1200x630.jpg" />
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


        <section className={`${handles.rlx_exploremas} ${handles.rlx_banner_slider}`}>
          <div
            className={`${handles.swiper_container} ${handles.slider_home_principal}`}
            style={{
              height: "auto",
              width: "100%",
            }}>
            <div className={`${handles.swiper_wrapper}`}>
              <div className={`${handles.swiper_slide} ${handles.row_grid_fullw}`}>
                <div className={`${handles.slide_content} ${handles.banner_text_absolute2}`}>
                  <span className={`${handles.headline26} ${handles.c_white_text}`}>Rolex</span>
                  <p className={`${handles.headline70} ${handles.c_white_text} ${handles.pb_20}`} >Sea-Dweller</p>
                  <a
                    className={`${handles.btn_primary_rlx}`}
                    href="https://devjhernandez--glauser.myvtex.com/rolex/watches/sea-dweller/">
                    Descubra más
                  </a>
                </div>
                <div className={`${handles.slider_image_6_12}`}>
                  <a href="http://localhost:3000/rolex/watches/sea-dweller/">
                    <picture className="banner-10">
                      <source
                        media="(max-width: 767px)"
                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-sea-dweller-mar-25-portrait.webp"
                      />
                      <img
                        alt="Relojes Rolex Sea-Dweller"
                        loading="lazy"
                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-sea-dweller-mar-25-landscape.webp"
                      />
                    </picture>
                  </a>
                </div>
              </div>
              <div className={`${handles.swiper_slide} ${handles.row_grid_fullw}`}>
                <div className={`${handles.slide_content} ${handles.banner_text_absolute2}`}>
                  <span className={`${handles.headline26} ${handles.c_dark_text}`}>Rolex y la hípica</span>
                  <p className={`${handles.headline70} ${handles.pb_20} ${handles.c_dark_text} `}>
                    Rolex Grand Slam of Show Jumping
                  </p>
                  <a
                    className={`${handles.btn_primary_rlx}`}
                    href="https://devjhernandez--glauser.myvtex.com/rolex/mundo-rolex/grand-slam-of-show-jumping/">
                    Descubra más
                  </a>
                </div>
                <div className={`${handles.slider_image_6_12}`}>
                  <a href="http://localhost:3000/rolex/mundo-rolex/grand-slam-of-show-jumping/">
                    <picture className="banner-10">
                      <source
                        media="(max-width: 767px)"
                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-rolex-grand-slam-of-show-jumping-portrait.webp"
                      />
                      <img
                        alt="Rolex Grand Slam of Show Jumping"
                        loading="lazy"
                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-rolex-grand-slam-of-show-jumping-portrait-landscape.webp"
                      />
                    </picture>
                  </a>
                </div>
              </div>
              <div className={`${handles.swiper_slide} ${handles.row_grid_fullw}`}>
                <div className={`${handles.slide_content} ${handles.banner_text_absolute2}`}>
                  <p className={`${handles.headline26}`}>Rolex y el «savoir‑faire» relojero</p>
                  <p className={`${handles.headline70} ${handles.pb_20}`}>Excelencia en desarrollo</p>
                  <a
                    className={`${handles.btn_primary_rlx}`}
                    href="https://devjhernandez--glauser.myvtex.com/rolex/watchmaking/">
                    Descubra más
                  </a>
                </div>
                <div className={`${handles.slider_image_6_12}`}>
                  <a href="http://localhost:3000/rolex/watchmaking/">
                    <picture className="banner-10">
                      <source
                        media="(max-width: 767px)"
                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-watchmaking-home-portrait.webp"
                      />
                      <img
                        alt="Rolex Watchmaking"
                        loading="lazy"
                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-watchmaking-home-landscape.webp"
                      />
                    </picture>
                  </a>
                </div>
              </div>
            </div>
            <div className={`${handles.swiper_pagination_home} ${handles.swiper_pagination_clickable} ${handles.swiper_pagination_bullets}`}>
              <span
                aria-label="Ir a la diapositiva 1"
                className={`${handles.swiper_pagination_bullets} ${handles.swiper_pagination_bullet_active}`}
                role="button"
                tabIndex={0}
              />
              <span
                aria-label="Ir a la diapositiva 2"
                className={`${handles.swiper_pagination_bullets}`}
                role="button"
                tabIndex={0}
              />
              <span
                aria-label="Ir a la diapositiva 3"
                className={`${handles.swiper_pagination_bullets}`}
                role="button"
                tabIndex={0}
              />
            </div>
            <div className={`${handles.swiper_pagination}`}></div>
            <div className={`${handles.swiper_button_prev} ${handles.principal_prev}`}></div>
            <div className={`${handles.swiper_button_next} ${handles.principal_next}`}></div>
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
                <a href="/rolex/coleccion-rolex/">
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
                    href="/rolex/coleccion-rolex/">
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
                <a href="/rolex/contactenos/enviar-mensaje/">
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
                    href="/rolex/contactenos/enviar-mensaje/"
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

        <section className={`${handles.c_beige_bg}`}>
          <div className={`${handles.rlx_container_content} ${handles.py_90_60}`}>
            <div className={`${handles.row_grid_fullw} ${handles.component_2_col}`}>
              <div className={`${handles.col_lg_2_6}`}>
                <h2 className={`${handles.headline36} ${handles.c_brown_text} ${handles.pb_20}`}>Descubra Rolex</h2>
              </div>
            </div>
            <div className={`${handles.row_grid_fullw} ${handles.component_3_col}`}>
              <div className={`${handles.col_6_2} ${handles.pb_50_0}`}>
                <a href="/rolex/mundo-rolex/">
                  <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-world-of-rolex-WIM23ac-portrait.webp"
                    />
                    <img
                      alt="Mundo Rolex"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-world-of-rolex-WIM23ac-landscape.webp"
                    />
                  </picture>
                </a>
                <div className={`${handles.pt_10}`}>
                  <p className={`${handles.legend_16_light} ${handles.c_brown_text}`}>
                    Un compromiso con la excelencia
                  </p>
                  <h3 className={`${handles.body_24_bold} ${handles.c_brown_text}`}>El mundo de Rolex</h3>
                  <a
                    className={`${handles.btn_label_icon_rlx}`}
                    href="/rolex/mundo-rolex/">
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
              <div className={`${handles.col_6_6} ${handles.pb_50_0}`}>
                <a href="/rolex/watchmaking/">
                  <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-watchmaking-portrait.webp"
                    />
                    <img
                      alt="Rolex Watchmaking"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-watchmaking-landscape.webp"
                    />
                  </picture>
                </a>
                <div className={`${handles.pt_10}`}>
                  <p className={`${handles.legend_16_light} ${handles.c_brown_text}`}>
                    Excelencia en desarrollo
                  </p>
                  <h3 className={`${handles.body_24_bold} ${handles.c_brown_text}`}>
                    «Savoir-faire» relojero
                  </h3>
                  <a
                    className={`${handles.btn_label_icon_rlx}`}
                    href="/rolex/watchmaking/">
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
              <div className={`${handles.col_6_10}`}>
                <a href="/rolex/asistencia-rolex/">
                  <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-servicing-portrait.webp"
                    />
                    <img
                      alt="Mantenimiento Rolex"
                      loading="lazy"
                      src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-servicing-landscape.webp"
                    />
                  </picture>
                </a>
                <div className={`${handles.pt_10}`}>
                  <p className={`${handles.legend_16_light} ${handles.c_brown_text}`}>
                    Nuestra filosofía del mantenimiento
                  </p>
                  <h3 className={`${handles.body_24_bold} ${handles.c_brown_text}`}>Mantenimiento</h3>
                  <a
                    className={`${handles.btn_label_icon_rlx}`}
                    href="/rolex/asistencia-rolex/">
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
          </div>
        </section>
        <RlxExploreMasNModels />
        <Footer />
      </main>
    </>
  );
}

export default Home;