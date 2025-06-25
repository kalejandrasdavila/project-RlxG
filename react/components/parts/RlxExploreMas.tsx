import React from 'react';

interface ExploreItem {
  href: string;
  alt: string;
  srcMobile: string;
  srcDesktop: string;
  caption: string;
}

const RlxExploreMas: React.FC = () => {
  const exploreItems: ExploreItem[] = [
    {
      href: 'http://localhost:3000/rolex/',
      alt: 'Relojes Rolex en GLAUSER distribuidor oficial',
      srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-discover-rolex-portrait.webp',
      srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-discover-rolex-landscape.webp',
      caption: 'Descubra Rolex',
    },
    {
      href: 'http://localhost:3000/rolex/coleccion-rolex/',
      alt: 'Coleccion Relojes Rolex',
      srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-rolex-watches-1945-portrait.webp',
      srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-rolex-watches-1945-landscape.webp',
      caption: 'Relojes Rolex',
    },
    {
      href: 'http://localhost:3000/rolex/nuevos-modelos-2025/',
      alt: 'Nuevos modelos Relojes Rolex 2025',
      srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-new-watches-2025-portrait.webp',
      srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-new-watches-2025-landscape.webp',
      caption: 'Nuevos modelos 2025',
    },
    {
      href: 'http://localhost:3000/rolex/watchmaking/',
      alt: 'Rolex Watchmaking - GLAUSER',
      srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-watchmaking-2023-portrait.webp',
      srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-watchmaking-2023-landscape.webp',
      caption: '«Savoir-faire» relojero',
    },
    {
      href: 'http://localhost:3000/rolex/asistencia-rolex/',
      alt: 'Servicio Mantenimiento Rolex - GLAUSER',
      srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-servicing-portrait.webp',
      srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-servicing-landscape.webp',
      caption: 'Mantenimiento',
    },
    {
      href: 'http://localhost:3000/rolex/mundo-rolex/',
      alt: 'Mundo Rolex - GLAUSER',
      srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-hub-world-of-rolex-wim23ac-portrait.webp',
      srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-keep-exploring-hub-world-of-rolex-wim23ac-landscape.webp',
      caption: 'El mundo de Rolex',
    },
    {
      href: 'http://localhost:3000/rolex/contactenos/',
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
      <div className="rlx-container p-relative pb-90-60 mb-20 px-8">
        <div className="swiper-container p-relative exploremas">
          <div
            aria-live="polite"
            className="swiper-wrapper"
            id="swiper-wrapper-10ac3e6672fe9a10e0"
            style={{
              transform: 'translate3d(0px, 0px, 0px)',
            }}
          >
            {exploreItems.map((item, index) => (
              <div
                key={index}
                aria-label={`${index + 1} / ${exploreItems.length}`}
                className={`swiper-slide ${index === 0 ? 'swiper-slide-active' : ''} ${index === 1 ? 'swiper-slide-next' : ''}`}
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
                    <figcaption className="c-brown-text">{item.caption}</figcaption>
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
        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
          <span
            className="swiper-pagination-bullet swiper-pagination-bullet-active"
            tabIndex={0}
          />
          <span className="swiper-pagination-bullet" tabIndex={0} />
        </div>
        <div
          aria-controls="swiper-wrapper-10ac3e6672fe9a10e0"
          aria-disabled="true"
          aria-label="Previous slide"
          className="swiper-button-prev footer-prev swiper-button-disabled"
          role="button"
          tabIndex={-1}
        />
        <div
          aria-controls="swiper-wrapper-10ac3e6672fe9a10e0"
          aria-disabled="false"
          aria-label="Next slide"
          className="swiper-button-next footer-next"
          role="button"
          tabIndex={0}
        />
      </div>
    </section>
  );
};

export default RlxExploreMas;