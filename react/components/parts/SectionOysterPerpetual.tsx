import React from "react";

function SectionOysterPerpetual() {

    return (
        <>
            <section className="c-lightbeige-bg">
                <div className="rlx-container-content py-90-60">
                    <div className="row-grid-fullw component-video">
                        <div className="col-6-12">
                            <a href="http://localhost:3000/rolex/watches/oyster-perpetual/">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-oyster-perpetual-m134300-0006-portrait.webp"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-oyster-perpetual-m134300-0006-landscape.webp"
                                    />
                                </picture>
                            </a>
                        </div>
                    </div>
                    <div className="row-grid-fullw component-2-col">
                        <div className="col-lg-2-6">
                            <div className="pt-10">
                                <p className="fixed-16 c-brown-text">Rolex Oyster Perpetual</p>
                                <p className="headline36 c-brown-text">Un mundo de posibilidades</p>
                                <a
                                    className="btn-label-icon-rlx"
                                    href="http://localhost:3000/rolex/watches/oyster-perpetual/">
                                    Más información
                                    <svg
                                        aria-hidden="true"
                                        fill="white"
                                        height="12"
                                        role="img"
                                        viewBox="0 0 15 15"
                                        width="12"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.7,7.5l-1.4,1.4l-5.7,5.7l-1.4-1.4l5.7-5.7L3.3,1.9l1.4-1.4l5.7,5.7l0,0L11.7,7.5z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SectionOysterPerpetual;
