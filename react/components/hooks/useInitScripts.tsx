import { useEffect } from "react";

// Hook simplificado para inicializar scripts
const useInitScripts = () => {
    useEffect(() => {
        if (typeof window === "undefined") return;

        // Función simple para inicializar Swiper
        const initSwiper = () => {
            if (typeof window.Swiper !== 'undefined') {
                // Slider principal
                const sliderPrincipal = document.querySelector('.swiper-container');
                if (sliderPrincipal && !sliderPrincipal.classList.contains('swiper-initialized')) {
                    try {
                        new window.Swiper(sliderPrincipal, {
                            pagination: {
                                el: '.swiper-pagination-home',
                                clickable: true
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
                            slidesPerView: 1
                        });
                    } catch (error) {
                        console.warn('Error inicializando slider:', error);
                    }
                }
            }
        };

        // Esperar un poco y luego inicializar
        const timer = setTimeout(() => {
            initSwiper();
        }, 2000);

        // Cleanup
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return null;
};

export default useInitScripts;