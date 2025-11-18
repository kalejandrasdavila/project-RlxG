import React, { useEffect } from 'react';
import useExploreSwiper from '../hooks/useExploreSwiper';

interface ExploreItem {
    href: string;
    srcMobile: string;
    srcDesktop: string;
    alt: string;
    figcaption: string;
}

const RlxExploreMasNewModels2025: React.FC = () => {
    const swiperContainerRef = useExploreSwiper();

    // Asegurar que Swiper se inicialice después del montaje
    useEffect(() => {
        if (typeof window !== 'undefined' && swiperContainerRef.current) {
            // Forzar actualización de Swiper si ya está inicializado
            const checkSwiper = () => {
                if ((window as any).Swiper && swiperContainerRef.current) {
                    const swiperInstance = (swiperContainerRef.current as any).swiper;
                    if (swiperInstance) {
                        swiperInstance.update();
                        swiperInstance.updateSlides();
                        swiperInstance.updateSlidesClasses();
                    }
                }
            };

            // Intentar varias veces para asegurar que Swiper esté listo
            const timer1 = setTimeout(checkSwiper, 1000);
            const timer2 = setTimeout(checkSwiper, 2000);
            const timer3 = setTimeout(checkSwiper, 3000);

            return () => {
                clearTimeout(timer1);
                clearTimeout(timer2);
                clearTimeout(timer3);
            };
        }
    }, [swiperContainerRef]);

    const exploreItems: ExploreItem[] = [
        {
            href: 'https://www.glauser.com.co/rolex/watches/1908/',
            srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-collections-keep-exploring-1908-nw-25-portrait.webp',
            srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-collections-keep-exploring-1908-nw-25-landscape.webp',
            alt: 'Rolex 1908',
            figcaption: '1908',
        },
        {
            href: 'https://www.glauser.com.co/rolex/watches/air-king/',
            srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-collections-keep-exploring-air-king-portrait.webp',
            srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-collections-keep-exploring-air-king-landscape.webp',
            alt: 'Rolex Air-King',
            figcaption: 'Air-King',
        },
        {
            href: 'https://www.glauser.com.co/rolex/watches/cosmograph-daytona/',
            srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-collections-keep-exploring-cosmograph-daytona-nw-25-portrait.webp',
            srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-collections-keep-exploring-cosmograph-daytona-nw-25-landscape.webp',
            alt: 'Rolex Cosmograph Daytona',
            figcaption: 'Cosmograph Daytona',
        },
        {
            href: 'https://www.glauser.com.co/rolex/watches/datejust/',
            srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-collections-keep-exploring-datejust-portrait.webp',
            srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-collections-keep-exploring-datejust-landscape.webp',
            alt: 'Rolex Datejust',
            figcaption: 'Datejust',
        },
        {
            href: 'https://www.glauser.com.co/rolex/watches/day-date/',
            srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-collections-keep-exploring-day-date-portrait.webp',
            srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-collections-keep-exploring-day-date-landscape.webp',
            alt: 'Rolex Day-Date',
            figcaption: 'Day-Date',
        },
        {
            href: 'https://www.glauser.com.co/rolex/watches/deepsea/',
            srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-collections-keep-exploring-deepsea-portrait.webp',
            srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-collections-keep-exploring-deepsea-landscape.webp',
            alt: 'Rolex Deepsea',
            figcaption: 'Deepsea',
        },
        {
            href: 'https://www.glauser.com.co/rolex/watches/explorer/',
            srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-collections-keep-exploring-explorer-nw-25-portrait.webp',
            srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-collections-keep-exploring-explorer-nw-25-landscape.webp',
            alt: 'Rolex Explorer',
            figcaption: 'Explorer',
        },
        {
            href: 'https://www.glauser.com.co/rolex/watches/gmt-master-ii/',
            srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-collections-keep-exploring-gmt-master-II-portrait.webp',
            srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-collections-keep-exploring-gmt-master-II-landscape.webp',
            alt: 'Rolex GMT-Master II',
            figcaption: 'GMT-Master II',
        },
        {
            href: 'https://www.glauser.com.co/rolex/watches/lady-datejust/',
            srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-collections-keep-exploring-lady-datejust-portrait.webp',
            srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-collections-keep-exploring-lady-datejust-landscape.webp',
            alt: 'Rolex Lady-Datejust',
            figcaption: 'Lady-Datejust',
        },
        {
            href: 'https://www.glauser.com.co/rolex/watches/land-dweller/',
            srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-collections-keep-exploring-land-dweller-portrait.webp',
            srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-collections-keep-exploring-land-dweller-landscape.webp',
            alt: 'Rolex Land-dweller',
            figcaption: 'Land-Dweller',
        },
        {
            href: 'https://www.glauser.com.co/rolex/watches/oyster-perpetual/',
            srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-collections-keep-exploring-oyster-perpetual-nw-25-portrait.webp',
            srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-collections-keep-exploring-oyster-perpetual-nw-25-landscape.webp',
            alt: 'Rolex Oyster Perpetual',
            figcaption: 'Oyster Perpetual',
        },
        {
            href: 'https://www.glauser.com.co/rolex/watches/sea-dweller/',
            srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-collections-keep-exploring-sea-dweller-portrait.webp',
            srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-collections-keep-exploring-sea-dweller-landscape.webp',
            alt: 'Rolex Sea Dweller',
            figcaption: 'Sea Dweller',
        },
        {
            href: 'https://www.glauser.com.co/rolex/watches/sky-dweller/',
            srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-collections-keep-exploring-sky-dweller-portrait.webp',
            srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-collections-keep-exploring-sky-dweller-landscape.webp',
            alt: 'Rolex Sky Dweller',
            figcaption: 'Sky Dweller',
        },
        {
            href: 'https://www.glauser.com.co/rolex/watches/submariner/',
            srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-collections-keep-exploring-submariner-portrait.webp',
            srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-collections-keep-exploring-submariner-landscape.webp',
            alt: 'Rolex Submariner',
            figcaption: 'Submariner',
        },
        {
            href: 'https://www.glauser.com.co/rolex/watches/yacht-master/',
            srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-collections-keep-exploring-yacht-master-portrait.webp',
            srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-collections-keep-exploring-yacht-master-landscape.webp',
            alt: 'Rolex Yacht-Master',
            figcaption: 'Yacht-Master',
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
                        {exploreItems.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="swiper-slide"
                                    style={{
                                        width: '339.5px',
                                        minWidth: '339.5px',
                                        maxWidth: '339.5px',
                                        marginRight: '8px',
                                        flexShrink: 0
                                    }}>
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
                            );
                        })}
                    </div>
                    {/* If we need pagination */}
                    <div className="swiper-pagination"></div>
                    {/* If we need navigation buttons */}
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>
        </section>
    );
};

export default RlxExploreMasNewModels2025;