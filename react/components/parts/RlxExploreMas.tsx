import React from 'react';
import FooterRlxFooter24 from './footer-rlx-footer-24';
import useExploreSwiper from '../hooks/useExploreSwiper';

interface ExploreItem {
  href: string;
  alt: string;
  srcMobile: string;
  srcDesktop: string;
  caption: string;
}


const RlxExploreMas: React.FC = () => {
  const swiperContainerRef = useExploreSwiper();

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
    <section className="rlx-exploremas pt-90-60">
      <div className="rlx-container-content">
        <div className="row-grid-fullw component-2-col">
          <div className="col-lg-2-6">
            <p className="headline36 c-brown-text pb-20">Explore más</p>
          </div>
        </div>
      </div>
      <div className="rlx-container p-relative pb-90-60 mb-20 px-8 ">
        <div ref={swiperContainerRef} className="swiper-container p-relative exploremas">
          <div className="swiper-wrapper">
            <div className="swiper-slide" style={{ width: '226.25px', marginRight: '8px' }}>
              <a href="https://www.glauser.com.co/rolex/">
                <picture className="banner-10">
                  <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-discover-rolex-portrait.webp" />
                  <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-discover-rolex-landscape.webp" loading="lazy" alt="Relojes Rolex en GLAUSER distribuidor oficial" />
                  <figcaption className="c-brown-text">Descubra Rolex</figcaption>
                </picture>
              </a>
            </div>

            <div className="swiper-slide" style={{ width: '226.25px', marginRight: '8px' }}>
              <a href="https://www.glauser.com.co/rolex/coleccion-rolex/">
                <picture className="banner-10">
                  <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-rolex-watches-1945-portrait.webp" />
                  <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-rolex-watches-1945-landscape.webp" loading="lazy" alt="Coleccion Relojes Rolex" />
                  <figcaption className="c-brown-text">Relojes Rolex</figcaption>
                </picture>
              </a>
            </div>

            <div className="swiper-slide" style={{ width: '226.25px', marginRight: '8px' }}>
              <a href="https://www.glauser.com.co/rolex/nuevos-modelos-2025/">
                <picture className="banner-10">
                  <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-new-watches-2025-portrait.webp" />
                  <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-new-watches-2025-landscape.webp" loading="lazy" alt="Nuevos modelos Relojes Rolex 2025" />
                  <figcaption className="c-brown-text">Nuevos modelos 2025</figcaption>
                </picture>
              </a>
            </div>

            <div className="swiper-slide" style={{ width: '226.25px', marginRight: '8px' }}>
              <a href="https://www.glauser.com.co/rolex/watchmaking/">
                <picture className="banner-10">
                  <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-watchmaking-2023-portrait.webp" />
                  <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-watchmaking-2023-landscape.webp" loading="lazy" alt="Rolex Watchmaking - GLAUSER" />
                  <figcaption className="c-brown-text">«Savoir-faire» relojero</figcaption>
                </picture>
              </a>
            </div>

            <div className="swiper-slide" style={{ width: '226.25px', marginRight: '8px' }}>
              <a href="https://www.glauser.com.co/rolex/asistencia-rolex/">
                <picture className="banner-10">
                  <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-servicing-portrait.webp" />
                  <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-servicing-landscape.webp" loading="lazy" alt="Servicio Mantenimiento Rolex - GLAUSER" />
                  <figcaption className="c-brown-text">Mantenimiento</figcaption>
                </picture>
              </a>
            </div>

            <div className="swiper-slide" style={{ width: '226.25px', marginRight: '8px' }}>
              <a href="https://www.glauser.com.co/rolex/mundo-rolex/">
                <picture className="banner-10">
                  <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-hub-world-of-rolex-wim23ac-portrait.webp" />
                  <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-hub-world-of-rolex-wim23ac-landscape.webp" loading="lazy" alt="Mundo Rolex - GLAUSER" />
                  <figcaption className="c-brown-text">El mundo de Rolex</figcaption>
                </picture>
              </a>
            </div>

            <div className="swiper-slide" style={{ width: '226.25px', marginRight: '8px' }}>
              <a href="https://www.glauser.com.co/rolex/contactenos/">
                <picture className="banner-10">
                  <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-contact-us-portrait.webp" />
                  <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-contact-us-landscape.webp" loading="lazy" alt="Contacto GLAUSER, Distribuidor Oficial Rolex" />
                  <figcaption className="c-brown-text">Póngase en contacto con nosotros</figcaption>
                </picture>
              </a>
            </div>
          </div>
          <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </div>
        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
          <span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex={0}></span>
          <span className="swiper-pagination-bullet" tabIndex={0}></span>
        </div>
        <div className="swiper-button-prev swiper-button-disabled" tabIndex={-1} role="button" aria-label="Previous slide" aria-disabled="true"></div>
        <div className="swiper-button-next" tabIndex={0} role="button" aria-label="Next slide" aria-disabled="false"></div>
      </div>
      <FooterRlxFooter24 />
    </section>
  );
};

export default RlxExploreMas;