import React from 'react';
import { useCssHandles } from 'vtex.css-handles';

interface ExploreItem {
  href: string;
  alt: string;
  srcMobile: string;
  srcDesktop: string;
  caption: string;
}

const CSS_HANDLES = [
  //HEADER//
  'rlx_exploremas', 'pt_90_60', 'row_grid_fullw', 'component_2_col', 'col_lg_2_6', 'headline36', 'c_brown_text', 'pb_20',
  'rlx_container', 'p_relative', 'pb_90_60', 'mb_20', 'px_8', 'exploremas', 'swiper_pagination', 'swiper_pagination_clickable',
  'swiper_pagination_bullets', 'swiper_pagination_bullet_active', 'footer_prev', 'swiper_button_disabled', 'swiper_button_next',
  'footer_next', 'swiper_wrapper', 'swiper_slider',
  // Missing handles
  'swiper_container', 'swiper_button_prev'
] as const
const RlxExploreMas: React.FC = () => {

  const handles = useCssHandles(CSS_HANDLES)

  const exploreItems: ExploreItem[] = [
    {
      href: 'https://glauser.myvtex.com/rolex/',
      alt: 'Relojes Rolex en GLAUSER distribuidor oficial',
      srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-discover-rolex-portrait.webp',
      srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-discover-rolex-landscape.webp',
      caption: 'Descubra Rolex',
    },
    {
      href: 'https://glauser.myvtex.com/rolex/coleccion-rolex/',
      alt: 'Coleccion Relojes Rolex',
      srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-rolex-watches-1945-portrait.webp',
      srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-rolex-watches-1945-landscape.webp',
      caption: 'Relojes Rolex',
    },
    {
      href: 'https://glauser.myvtex.com/rolex/nuevos-modelos-2025/',
      alt: 'Nuevos modelos Relojes Rolex 2025',
      srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-new-watches-2025-portrait.webp',
      srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-new-watches-2025-landscape.webp',
      caption: 'Nuevos modelos 2025',
    },
    {
      href: 'https://glauser.myvtex.com/rolex/watchmaking/',
      alt: 'Rolex Watchmaking - GLAUSER',
      srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-watchmaking-2023-portrait.webp',
      srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-watchmaking-2023-landscape.webp',
      caption: '«Savoir-faire» relojero',
    },
    {
      href: 'https://glauser.myvtex.com/rolex/asistencia-rolex/',
      alt: 'Servicio Mantenimiento Rolex - GLAUSER',
      srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-servicing-portrait.webp',
      srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-servicing-landscape.webp',
      caption: 'Mantenimiento',
    },
    {
      href: 'https://glauser.myvtex.com/rolex/mundo-rolex/',
      alt: 'Mundo Rolex - GLAUSER',
      srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-hub-world-of-rolex-wim23ac-portrait.webp',
      srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-hub-world-of-rolex-wim23ac-landscape.webp',
      caption: 'El mundo de Rolex',
    },
    {
      href: 'https://glauser.myvtex.com/rolex/contactenos/',
      alt: 'Contacto GLAUSER, Distribuidor Oficial Rolex',
      srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-contact-us-portrait.webp',
      srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-contact-us-landscape.webp',
      caption: 'Póngase en contacto con nosotros',
    },
  ];


  return (
    <section className={`${handles.rlx_exploremas} ${handles.pt_90_60}`}>
      <div className="rlx-container-content">
        <div className={`${handles.row_grid_fullw} ${handles.component_2_col}`}>
          <div className={`${handles.col_lg_2_6}`}>
            <p className={`${handles.headline36} ${handles.c_brown_text} ${handles.pb_20}`}>Explore más</p>
          </div>
        </div>
      </div>
      <div className={`${handles.rlx_container} ${handles.p_relative} ${handles.pb_90_60} ${handles.mb_20} ${handles.px_8}`}>
        <div className={`${handles.swiper_container} ${handles.p_relative} ${handles.exploremas}`}>
          <div
            aria-live="polite"
            className={`${handles.swiper_wrapper}`}
            id="swiper-wrapper-10ac3e6672fe9a10e0"
            style={{
              transform: 'translate3d(0px, 0px, 0px)',
            }}
          >
            {exploreItems.map((item, index) => (
              <div
                key={index}
                aria-label={`${index + 1} / ${exploreItems.length}`}
                className={`${handles.swiper_slider} ${index === 0 ? 'swiper-slide-active' : ''} ${index === 1 ? 'swiper-slide-next' : ''}`}
                role="group"
                style={{
                  marginRight: '8px',
                  width: '434.5px',
                }}
              >
                <a href={item.href}>
                  <picture className="banner-10">
                    <source media="(max-width: 767px)" srcSet={item.srcMobile} />
                    <img
                      alt={item.alt}
                      loading="lazy"
                      src={item.srcDesktop}
                    />
                    <figcaption className={`${handles.c_brown_text}`}>{item.caption}</figcaption>
                  </picture>
                </a>
              </div>
            ))}
          </div>
          <span
            aria-atomic="true"
            aria-live="assertive"
            className="swiper-notification"
          />
        </div>
        <div className={`${handles.swiper_pagination} ${handles.swiper_pagination_clickable} ${handles.swiper_pagination_bullets}`}>
          <span
            className={`${handles.swiper_pagination_bullets} ${handles.swiper_pagination_bullet_active}`}
            tabIndex={0}
          />
          <span className="swiper-pagination-bullet" tabIndex={0} />
        </div>
        <div
          aria-controls="swiper-wrapper-10ac3e6672fe9a10e0"
          aria-disabled="true"
          aria-label="Previous slide"
          className={`${handles.swiper_button_prev} ${handles.footer_prev} ${handles.swiper_button_disabled}`}
          role="button"
          tabIndex={-1}
        />
        <div
          aria-controls="swiper-wrapper-10ac3e6672fe9a10e0"
          aria-disabled="false"
          aria-label="Next slide"
          className={`${handles.swiper_button_next} ${handles.footer_next}`}
          role="button"
          tabIndex={0}
        />
      </div>
    </section>
  );
};

export default RlxExploreMas;