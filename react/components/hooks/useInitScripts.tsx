import { useEffect } from "react";

// Versión ultra-simplificada para evitar problemas con workers en VTEX
const useInitScripts = () => {
    useEffect(() => {
        if (typeof window === "undefined") return;

        // Función simple para cargar jQuery
        const loadJQuery = async () => {
            if (!window.$) {
                try {
                    const $ = await import('jquery');
                    window.$ = $.default;
                    return $.default;
                } catch (error) {
                    console.error('Error loading jQuery:', error);
                    return null;
                }
            }
            return window.$;
        };

        // Función simple para cargar Swiper
        const loadSwiper = async () => {
            if (!window.Swiper) {
                try {
                    const swiperModule = await import('swiper');
                    const Swiper = swiperModule.default || swiperModule.Swiper;
                    window.Swiper = Swiper;

                    // Cargar CSS
                    if (!document.querySelector('link[href*="swiper"]')) {
                        const link = document.createElement('link');
                        link.rel = 'stylesheet';
                        link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
                        document.head.appendChild(link);
                    }

                    return Swiper;
                } catch (error) {
                    console.error('Error loading Swiper:', error);
                    return null;
                }
            }
            return window.Swiper;
        };

        // Inicialización simple
        const init = async () => {
            // Cargar dependencias
            const $ = await loadJQuery();
            const Swiper = await loadSwiper();

            // Toggle navigation simple
            if ($) {
                $(document).off("click", "a.rlx-sm.btn-toggle").on("click", "a.rlx-sm.btn-toggle", function () {
                    $("nav.rlx-header-menu-top").toggleClass("showme");
                });
            }

            // Swiper simple
            if (Swiper) {
                const sliderPrincipal = document.querySelector(".slider-home-principal");
                if (sliderPrincipal) {
                    new Swiper(sliderPrincipal, {
                        pagination: { el: ".swiper-pagination-home", clickable: true },
                        navigation: { nextEl: ".swiper-button-next-home", prevEl: ".swiper-button-prev-home" },
                        loop: false,
                    });
                }

                const sliderFooter = document.querySelector(".exploremas");
                if (sliderFooter) {
                    new Swiper(sliderFooter, {
                        slidesPerView: 4,
                        spaceBetween: 8,
                        breakpoints: {
                            320: { slidesPerView: 1.2 },
                            768: { slidesPerView: 2.5 },
                            1024: { slidesPerView: 4 },
                        },
                    });
                }
            }
        };

        // Ejecutar inicialización
        init();

        // Cleanup simple
        return () => {
            // Cleanup básico si es necesario
        };
    }, []);

    return null;
};

export default useInitScripts;