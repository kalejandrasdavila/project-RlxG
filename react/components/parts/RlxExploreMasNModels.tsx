import React from 'react';
import { useCssHandles } from 'vtex.css-handles';
import { buildUrl } from '../../utils/urlUtils';

interface ExploreItem {
    href: string;
    srcMobile: string;
    srcDesktop: string;
    alt: string;
    figcaption: string;
}

const CSS_HANDLES = [
    //HEADER//
    'rlx_exploremas', 'pt_90_60', 'row_grid_fullw', 'component_2_col', 'col_lg_2_6', 'headline36', 'c_brown_text', 'pb_20',
    'rlx_container', 'p_relative', 'pb_90_60', 'mb_20', 'px_8', 'exploremas', 'swiper_pagination', 'swiper_pagination_clickable',
    'swiper_pagination_bullets', 'swiper_pagination_bullet_active', 'footer_prev', 'swiper_button_disabled', 'swiper_button_next',
    'footer_next', 'swiper_wrapper', 'swiper_slide',
    // Missing handles
    'swiper_container', 'swiper_button_prev', 'rlx_container_content', 'banner_10'
] as const

const RlxExploreMasNewModels2025: React.FC = () => {
    const handles = useCssHandles(CSS_HANDLES)

    const exploreItems: ExploreItem[] = [
        {
            href: buildUrl('/rolex/nuevos-modelos-2025/land-dweller/'),
            srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-nw-2025-keep-exploring-land-dweller-m127334-0001-portrait.webp',
            srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-nw-2025-keep-exploring-land-dweller-m127334-0001-landscape.webp',
            alt: 'Land-Dweller',
            figcaption: 'Rolex Land-Dweller',
        },
        {
            href: buildUrl('/rolex/nuevos-modelos-2025/gmt-master-ii/'),
            srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-nw-2025-keep-exploring-gmt-master-ii-m126729vtnr-0001-portrait.webp',
            srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-nw-2025-keep-exploring-gmt-master-ii-m126729vtnr-0001-landscape.webp',
            alt: 'GMT-Master II',
            figcaption: 'Rolex GMT-Master II',
        },
        {
            href: buildUrl('/rolex/nuevos-modelos-2025/oyster-perpetual/'),
            srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-nw-2025-keep-exploring-oyster-perpetual-m276200-0008-portrait.webp',
            srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-nw-2025-keep-exploring-oyster-perpetual-m276200-0008-landscape.webp',
            alt: 'Oyster Perpetual',
            figcaption: 'Rolex Oyster Perpetual',
        },
        {
            href: buildUrl('/rolex/nuevos-modelos-2025/1908/'),
            srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-nw-2025-keep-exploring-perpetual-1908-m52508-0008-portrait.webp',
            srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-nw-2025-keep-exploring-perpetual-1908-m52508-0008-landscape.webp',
            alt: '1908',
            figcaption: 'Rolex 1908',
        },
        {
            href: buildUrl('/rolex/nuevos-modelos-2025/datejust/'),
            srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-nw-2025-keep-exploring-datejust-31-m278288rbr-0041-portrait.webp',
            srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-nw-2025-keep-exploring-datejust-31-m278288rbr-0041-landscape.webp',
            alt: 'Datejust',
            figcaption: 'Rolex Datejust',
        },
        {
            href: buildUrl('/rolex/nuevos-modelos-2025/esferas-ineditas/'),
            srcMobile: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-nw-2025-keep-exploring-new-dials-m126518ln-0014-portrait.webp',
            srcDesktop: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/keep-exploring-24/rolex-nw-2025-keep-exploring-new-dials-m126518ln-0014-landscape.webp',
            alt: 'Esferas inéditas',
            figcaption: 'Esferas inéditas',
        },
    ];

    return (
        <section className={`${handles.rlx_exploremas} ${handles.pt_90_60}`}>
            <div className={`${handles.rlx_container_content}`}>
                <div className={`${handles.row_grid_fullw} ${handles.component_2_col}`}>
                    <div className={`${handles.col_lg_2_6}`}>
                        <p className={`${handles.headline36} ${handles.c_brown_text} ${handles.pb_20}`}>Explore más</p>
                    </div>
                </div>
            </div>
            <div className={`${handles.rlx_container} ${handles.p_relative} ${handles.pb_90_60} ${handles.mb_20} ${handles.px_8}`}>
                <div className={`${handles.swiper_container} ${handles.p_relative} ${handles.exploremas}`}>
                    <div className={`${handles.swiper_wrapper}`}>
                        {exploreItems.map((item, index) => (
                            <div key={index} className={`${handles.swiper_slide}`}>
                                <a href={item.href}>
                                    <picture className={`${handles.banner_10}`}>
                                        <source media="(max-width: 767px)" srcSet={item.srcMobile} />
                                        <img
                                            src={item.srcDesktop}
                                            loading="lazy"
                                            alt={item.alt}
                                        />
                                        <figcaption className={`${handles.c_brown_text}`}>{item.figcaption}</figcaption>
                                    </picture>
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className={`${handles.swiper_pagination}`}></div>
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
            </div>
        </section>
    );
};

export default RlxExploreMasNewModels2025;