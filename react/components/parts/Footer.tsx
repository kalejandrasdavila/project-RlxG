import React from 'react';
import { useCssHandles } from 'vtex.css-handles';

const CSS_HANDLES = [
    'rlx_footer', 'rlx_container', 'legend_16_bold', '_rotate_90', 'btnVolverArriba', 'rlxcrown', 'back2top'
] as const

const Footer: React.FC = () => {
    const handles = useCssHandles(CSS_HANDLES)

    const scrollToTop = (e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <footer className={`${handles.rlx_footer}`}>
                <div className={`${handles.rlx_container}`}>
                    <div className={`${handles.rlxcrown}`}>
                        <a href="#">
                            <picture className={`${handles.rlxcrown}`}>
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
                    <div className={`${handles.back2top}`}>
                        <a
                            id="btnVolverArriba"
                            className={`${handles.rlx_container} ${handles.btnVolverArriba} ${handles.legend_16_bold}`}
                            onClick={scrollToTop}
                            href="#"
                        >
                            <svg
                                className={`${handles._rotate_90}`}
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
            </div>
        </>
    );
};

export default Footer;