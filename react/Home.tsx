import React, { useEffect } from 'react';
import { useCssHandles } from 'vtex.css-handles';
import useInitScripts from './components/hooks/useInitScripts';
import Nav from './components/parts/Nav';
import Footer from './components/parts/Footer';
import RlxExploreMasNModels from './components/parts/RlxExploreMas';
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
  const handles = useCssHandles(CSS_HANDLES);
  const baseUrl = getBaseUrl();

  // Cargar estilos y scripts de manera compatible con VTEX
  useEffect(() => {
    // Cargar estilos CSS con prioridad y verificación
    const loadCSS = (href: string, priority: boolean = false) => {
      return new Promise<void>((resolve) => {
        if (!document.querySelector(`link[href="${href}"]`)) {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = href;
          if (priority) {
            link.setAttribute('data-priority', 'high');
          }
          link.onload = () => resolve();
          link.onerror = () => {
            console.warn(`Failed to load CSS: ${href}`);
            resolve();
          };
          document.head.appendChild(link);
        } else {
          resolve();
        }
      });
    };

    // Cargar scripts JS con verificación
    const loadScript = (src: string) => {
      return new Promise<void>((resolve) => {
        if (!document.querySelector(`script[src="${src}"]`)) {
          const script = document.createElement('script');
          script.src = src;
          script.async = true;
          script.onload = () => resolve();
          script.onerror = () => {
            console.warn(`Failed to load script: ${src}`);
            resolve();
          };
          document.head.appendChild(script);
        } else {
          resolve();
        }
      });
    };

    // Configurar meta tags para SEO
    const setMetaTag = (name: string, content: string, property?: string) => {
      const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Función principal para cargar todos los recursos
    const loadAllResources = async () => {
      try {
        // Marcar como cargando estilos
        document.body.classList.add('loading-styles');

        // Configurar título
        document.title = 'Distribuidor Oficial Rolex en Colombia - GLAUSER';

        // Configurar meta tags
        setMetaTag('description', 'GLAUSER en Colombia se enorgullece de formar parte de la red mundial de Distribuidores Oficiales Rolex, autorizados para vender y realizar el mantenimiento de los relojes Rolex');
        setMetaTag('viewport', 'width=device-width, initial-scale=1');

        // Open Graph
        setMetaTag('', 'https://glauser.myvtex.com/rolex/', 'og:url');
        setMetaTag('', 'website', 'og:type');
        setMetaTag('', 'Distribuidor Oficial Rolex en Colombia - GLAUSER', 'og:title');
        setMetaTag('', 'GLAUSER en Colombia se enorgullece de formar parte de la red mundial de Distribuidores Oficiales Rolex, autorizados para vender y realizar el mantenimiento de los relojes Rolex', 'og:description');
        setMetaTag('', 'https://glauser.vteximg.com.br/arquivos/rolex-home-glauser-1200x630.jpg', 'og:image');

        // Twitter
        setMetaTag('twitter:card', 'summary_large_image');
        setMetaTag('twitter:site', '@glauser_col');
        setMetaTag('twitter:title', 'Distribuidor Oficial Rolex en Colombia - GLAUSER');
        setMetaTag('twitter:description', 'GLAUSER en Colombia se enorgullece de formar parte de la red mundial de Distribuidores Oficiales Rolex, autorizados para vender y realizar el mantenimiento de los relojes Rolex');
        setMetaTag('twitter:image', 'https://glauser.vteximg.com.br/arquivos/rolex-home-glauser-1200x630.jpg');

        // Cargar estilos en orden de prioridad
        console.log('Cargando estilos CSS...');
        await loadCSS('https://glauser.myvtex.com/files/style.min.css', true);
        await loadCSS('https://glauser.vteximg.com.br/arquivos/style-rolex-general-glauser.css', true);
        await loadCSS('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css');
        console.log('Estilos CSS cargados');

        // Cargar scripts
        console.log('Cargando scripts JS...');
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js');
        await loadScript('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js');
        console.log('Scripts JS cargados');

        // Configurar canonical
        let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
        if (!canonical) {
          canonical = document.createElement('link');
          canonical.rel = 'canonical';
          document.head.appendChild(canonical);
        }
        canonical.href = 'https://glauser.myvtex.com/rolex/';

        // Forzar re-render de estilos y marcar como cargado
        document.body.classList.remove('loading-styles');
        document.body.classList.add('styles-loaded');
        document.body.style.display = 'none';
        document.body.offsetHeight; // Trigger reflow
        document.body.style.display = '';

      } catch (error) {
        console.error('Error cargando recursos:', error);
      }
    };

    // Ejecutar carga de recursos
    loadAllResources();

  }, []);
  //hook para inicializar scripts
  useInitScripts();


  return (
    <>
      {/* Estilos críticos inline para carga inmediata */}
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Estilos críticos para evitar FOUC */
          body { 
            font-family: 'Rolex', Arial, sans-serif; 
            margin: 0; 
            padding: 0; 
          }
          .rlx_html { 
            font-family: 'Rolex', Arial, sans-serif; 
          }
          .home_rlx { 
            background-color: #f8f8f8; 
          }
          .rlx_menu { 
            background-color: #006341; 
            color: white; 
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
          }
          .slider_home_principal { 
            width: 100%; 
            height: auto; 
          }
          /* Ocultar contenido hasta que los estilos se carguen */
          .loading-styles .rlx_html { 
            opacity: 0; 
            transition: opacity 0.3s ease; 
          }
          .styles-loaded .rlx_html { 
            opacity: 1; 
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
                  <span className={`${handles.headline26}`}>Rolex</span>
                  <p className={`${handles.headline70} ${handles.pb_20}`} >1908</p>
                  <a
                    className={`${handles.btn_primary_rlx}`}
                    href="https://glauser.myvtex.com/rolex/watches/1908/">
                    Descubra más
                  </a>
                </div>
                <div className={`${handles.slider_image_6_12}`}>
                  <a href="https://glauser.myvtex.com/rolex/watches/1908/">
                    <picture className="banner-10">
                      <source
                        media="(max-width: 767px)"
                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-1908-m52508-0008-oct-25-portrait.webp"
                      />
                      <img
                        alt="Relojes Rolex 1908"
                        loading="lazy"
                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-rolex-1908-m52508-0008-oct-25-landscape.webp"
                      />
                    </picture>
                  </a>
                </div>
              </div>
              <div className={`${handles.swiper_slide} ${handles.row_grid_fullw}`}>
                <div className={`${handles.slide_content} ${handles.banner_text_absolute2}`}>
                  <span className={`${handles.headline26} ${handles.c_white_text}`}>Rolex y la vela</span>
                  <p className={`${handles.headline70} ${handles.pb_20} ${handles.c_white_text}`}>
                    Rolex SailGp Championship
                  </p>
                  <a
                    className={`${handles.btn_primary_rlx}`}
                    href="https://glauser.myvtex.com/rolex/mundo-rolex/sailgp/">
                    Descubra más
                  </a>
                </div>
                <div className={`${handles.slider_image_6_12}`}>
                  <a href="https://glauser.myvtex.com/rolex/mundo-rolex/sailgp/">
                    <picture className="banner-10">
                      <source
                        media="(max-width: 767px)"
                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-world-of-rolex-sailgp-sep-25-portrait.webp"
                      />
                      <img
                        alt="Rolex SailGp Championship"
                        loading="lazy"
                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/home/discover-world-of-rolex-sailgp-sep-25-landscape.webp"
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
                    href="https://glauser.myvtex.com/rolex/watchmaking/">
                    Descubra más
                  </a>
                </div>
                <div className={`${handles.slider_image_6_12}`}>
                  <a href="https://glauser.myvtex.com/rolex/watchmaking/">
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
                aria-label="Go to slide 1"
                className={`${handles.swiper_pagination_bullet} ${handles.swiper_pagination_bullet_active}`}
                role="button"
                tabIndex={0}
              />
              <span
                aria-label="Go to slide 2"
                className={`${handles.swiper_pagination_bullet}`}
                role="button"
                tabIndex={0}
              />
              <span
                aria-label="Go to slide 3"
                className={`${handles.swiper_pagination_bullet}`}
                role="button"
                tabIndex={0}
              />
            </div>
            <div className={`${handles.swiper_button_prev} ${handles.swiper_button_disabled}`} tabIndex={-1} role="button" aria-label="Previous slide" aria-disabled="true"></div>
            <div className={`${handles.swiper_button_next}`} tabIndex={0} role="button" aria-label="Next slide" aria-disabled="false"></div>
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

        <section className={`${handles.c_beige_bg}`}>
          <div className={`${handles.rlx_container_content} ${handles.py_90_60}`}>
            <div className={`${handles.row_grid_fullw} ${handles.component_2_col}`}>
              <div className={`${handles.col_lg_2_6}`}>
                <h2 className={`${handles.headline36} ${handles.c_brown_text} ${handles.pb_20}`}>Descubra Rolex</h2>
              </div>
            </div>
            <div className={`${handles.row_grid_fullw} ${handles.component_3_col}`}>
              <div className={`${handles.col_6_2} ${handles.pb_50_0}`}>
                <a href="https://glauser.myvtex.com/rolex/mundo-rolex/">
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
                    href="https://glauser.myvtex.com/rolex/mundo-rolex/">
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
                <a href="https://glauser.myvtex.com/rolex/watchmaking/">
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
                    href="https://glauser.myvtex.com/rolex/watchmaking/">
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
                <a href="https://glauser.myvtex.com/rolex/asistencia-rolex/">
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
                    href="https://glauser.myvtex.com/rolex/asistencia-rolex/">
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
};

export default Home;