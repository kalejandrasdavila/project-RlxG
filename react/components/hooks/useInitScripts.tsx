import { useEffect } from "react";

// Hook simplificado y seguro para inicializar scripts
const useInitScripts = () => {
    useEffect(() => {
        if (typeof window === "undefined") return;

        const initSwiper = () => {
            if (typeof window.Swiper !== 'undefined') {
                // Slider principal
                const sliderPrincipal = document.querySelector('.slider-home-principal');
                if (sliderPrincipal && !sliderPrincipal.classList.contains('swiper-initialized')) {
                    new window.Swiper(sliderPrincipal, {
                        pagination: {
                            el: '.swiper-pagination-home',
                            clickable: true,
                            bulletClass: 'swiper-pagination-bullet',
                            bulletActiveClass: 'swiper-pagination-bullet-active'
                        },
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev'
                        },
                        loop: false,
                        autoplay: {
                            delay: 5000,
                            disableOnInteraction: false
                        },
                        speed: 600,
                        effect: 'slide',
                        spaceBetween: 0,
                        slidesPerView: 1,
                        watchOverflow: true,
                        observer: true,
                        observeParents: true
                    });
                }

                // Slider de explorar más
                const sliderExplore = document.querySelector('.exploremas');
                if (sliderExplore && !sliderExplore.classList.contains('swiper-initialized')) {
                    new window.Swiper(sliderExplore, {
                        slidesPerView: 4,
                        spaceBetween: 8,
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true
                        },
                        navigation: {
                            nextEl: '.footer-next',
                            prevEl: '.footer-prev'
                        },
                        breakpoints: {
                            320: { slidesPerView: 1.2 },
                            768: { slidesPerView: 2.5 },
                            1024: { slidesPerView: 4 },
                        },
                    });
                }
            }
        };

        // Toggle navigation simple usando jQuery global si está disponible
        const handleToggle = () => {
            if (window.$ && typeof window.$ === 'function') {
                window.$("nav.rlx-header-menu-top").toggleClass("showme");
            } else {
                // Fallback sin jQuery
                const menu = document.querySelector("nav.rlx-header-menu-top");
                if (menu) {
                    menu.classList.toggle("showme");
                }
            }
        };

        // Inicializar cuando el DOM esté listo y Swiper esté cargado
        const checkAndInit = () => {
            if (typeof window.Swiper !== 'undefined') {
                initSwiper();
            } else {
                setTimeout(checkAndInit, 100);
            }
        };

        const timer = setTimeout(checkAndInit, 1000);

        // Agregar event listener al botón de toggle
        const toggleButton = document.querySelector("a.rlx-sm.btn-toggle");
        if (toggleButton) {
            toggleButton.addEventListener("click", handleToggle);
        }

        // Cleanup
        return () => {
            clearTimeout(timer);
            if (toggleButton) {
                toggleButton.removeEventListener("click", handleToggle);
            }
        };
    }, []);

    return null;
};

export default useInitScripts;