import React from 'react';

interface ExploreItem {
    href: string;
    srcMobile: string;
    srcDesktop: string;
    alt: string;
    figcaption: string;
}

const RlxExploreMasNewModels2025: React.FC = () => {
    const exploreItems: ExploreItem[] = [
        {
            href: 'https://www.glauser.com.co/rolex/nuevos-modelos-2025/land-dweller/',
            srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-nw-2025-keep-exploring-land-dweller-m127334-0001-portrait.webp',
            srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-nw-2025-keep-exploring-land-dweller-m127334-0001-landscape.webp',
            alt: 'Land-Dweller',
            figcaption: 'Rolex Land-Dweller',
        },
        {
            href: 'https://www.glauser.com.co/rolex/nuevos-modelos-2025/gmt-master-ii/',
            srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-nw-2025-keep-exploring-gmt-master-ii-m126729vtnr-0001-portrait.webp',
            srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-nw-2025-keep-exploring-gmt-master-ii-m126729vtnr-0001-landscape.webp',
            alt: 'GMT-Master II',
            figcaption: 'Rolex GMT-Master II',
        },
        {
            href: 'https://www.glauser.com.co/rolex/nuevos-modelos-2025/oyster-perpetual/',
            srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-nw-2025-keep-exploring-oyster-perpetual-m276200-0008-portrait.webp',
            srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-nw-2025-keep-exploring-oyster-perpetual-m276200-0008-landscape.webp',
            alt: 'Oyster Perpetual',
            figcaption: 'Rolex Oyster Perpetual',
        },
        {
            href: 'https://www.glauser.com.co/rolex/nuevos-modelos-2025/1908/',
            srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-nw-2025-keep-exploring-perpetual-1908-m52508-0008-portrait.webp',
            srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-nw-2025-keep-exploring-perpetual-1908-m52508-0008-landscape.webp',
            alt: '1908',
            figcaption: 'Rolex 1908',
        },
        {
            href: 'https://www.glauser.com.co/rolex/nuevos-modelos-2025/datejust/',
            srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-nw-2025-keep-exploring-datejust-31-m278288rbr-0041-portrait.webp',
            srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-nw-2025-keep-exploring-datejust-31-m278288rbr-0041-landscape.webp',
            alt: 'Datejust',
            figcaption: 'Rolex Datejust',
        },
        {
            href: 'https://www.glauser.com.co/rolex/nuevos-modelos-2025/esferas-ineditas/',
            srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-nw-2025-keep-exploring-new-dials-m126518ln-0014-portrait.webp',
            srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-nw-2025-keep-exploring-new-dials-m126518ln-0014-landscape.webp',
            alt: 'Esferas inéditas',
            figcaption: 'Esferas inéditas',
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
                    <div className="swiper-wrapper">
                        {exploreItems.map((item, index) => (
                            <div key={index} className="swiper-slide">
                                <a href={item.href}>
                                    <picture className="banner-10">
                                        <source media="(max-width: 767px)" srcSet={item.srcMobile} />
                                        <img
                                            src={item.srcDesktop}
                                            loading="lazy"
                                            alt={item.alt}
                                        />
                                        <figcaption className="c-brown-text">{item.figcaption}</figcaption>
                                    </picture>
                                </a>
                            </div>
                        ))}
                    </div>
                    {/* Los elementos de navegación y paginación de Swiper deben ser inicializados por Swiper JS en un useEffect del componente padre */}
                    <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                        <span
                            className="swiper-pagination-bullet swiper-pagination-bullet-active"
                            tabIndex={0}
                        />
                        <span className="swiper-pagination-bullet" tabIndex={0} />
                    </div>
                    <div
                        aria-controls="swiper-wrapper-10ac3e6672fe9a10e0" // Este ID es estático; si es dinámico, debería manejarse por JS
                        aria-disabled="true"
                        aria-label="Previous slide"
                        className="swiper-button-prev footer-prev swiper-button-disabled"
                        role="button"
                        tabIndex={-1}
                    />
                    <div
                        aria-controls="swiper-wrapper-10ac3e6672fe9a10e0" // Este ID es estático; si es dinámico, debería manejarse por JS
                        aria-disabled="false"
                        aria-label="Next slide"
                        className="swiper-button-next footer-next"
                        role="button"
                        tabIndex={0}
                    />
                </div>
            </div>
        </section>
    );
};

export default RlxExploreMasNewModels2025;