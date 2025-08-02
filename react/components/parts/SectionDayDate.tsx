import React from "react";

function SectionDayDate() {
    return (
        <>
            <section className="c-lightbeige-bg">
                <div className="rlx-container-content py-90-60">
                    <div className="row-grid-fullw component-video">
                        <div className="col-6-12">
                            <a href="http://localhost:3000/rolex/watches/day-date/">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-day-date-m228235-0055-portrait.webp"
                                    />
                                    <img
                                        alt="Colección Rolex Day-Date"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-day-date-m228235-0055-landscape.webp"
                                    />
                                </picture>
                            </a>
                        </div>
                    </div>
                    <div className="row-grid-fullw component-2-col">
                        <div className="col-lg-2-6">
                            <div className="pt-10">
                                <p className="fixed-16 c-brown-text">Rolex Day-Date</p>
                                <p className="headline36 c-brown-text">Logros ejemplares</p>
                                <a
                                    className="btn-label-icon-rlx"
                                    href="http://localhost:3000/rolex/watches/day-date/">
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

export default SectionDayDate;