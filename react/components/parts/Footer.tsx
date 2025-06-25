import React, { useEffect } from 'react';

const Footer: React.FC = () => {
    useEffect(() => {
        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        const backToTopButton = document.getElementById('btnVolverArriba');
        if (backToTopButton) {
            backToTopButton.addEventListener('click', scrollToTop);
        }

        return () => {
            if (backToTopButton) {
                backToTopButton.removeEventListener('click', scrollToTop);
            }
        };
    }, []);

    return (
        <>
            <footer className="rlx-footer">
                <div className="rlx-container">
                    <div className="rlxcrown">
                        <a href="#">
                            <picture className="rlxcrown">
                                <img
                                    src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/logo-plecas/crown-rolex-footer.webp"
                                    loading="lazy"
                                    alt="crown rolex"
                                />
                            </picture>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="back2top">
                        <a id="btnVolverArriba" className="legend-16-bold" onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}>
                            <svg
                                className="-rotate-90"
                                height="15"
                                width="15"
                                viewBox="0 0 15 15"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-hidden="true"
                                fill="white"
                            >
                                <path d="M11.7,7.5l-1.4,1.4l-5.7,5.7l-1.4-1.4l5.7-5.7L3.3,1.9l1.4-1.4l5.7,5.7l0,0L11.7,7.5z"></path>
                            </svg>
                            Volver arriba
                        </a>
                    </div>
                </div>
            </footer>
            <div className="rolex-page">
                {/*<Template id="GLFooter" />*/}
            </div>
            <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
        </>
    );
};

export default Footer;