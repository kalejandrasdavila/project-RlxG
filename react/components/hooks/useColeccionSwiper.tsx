import { useEffect } from 'react';

const useColeccionSwiper = () => {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const initSwipers = () => {
            if (typeof window.Swiper === 'undefined') return;

            try {
                // Inicializar Swiper para relojes clásicos
                const classicContainer = document.querySelector('.classic-watches-swiper');
                if (classicContainer && !classicContainer.classList.contains('swiper-initialized')) {
                    new window.Swiper(classicContainer, {
                        slidesPerView: 'auto',
                        spaceBetween: 20,
                        breakpoints: {
                            0: { slidesPerView: 1.2, spaceBetween: 15 },
                            768: { slidesPerView: 2.2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 25 }
                        }
                    });
                }

                // Inicializar Swiper para relojes profesionales
                const professionalContainer = document.querySelector('.professional-watches-swiper');
                if (professionalContainer && !professionalContainer.classList.contains('swiper-initialized')) {
                    new window.Swiper(professionalContainer, {
                        slidesPerView: 'auto',
                        spaceBetween: 20,
                        breakpoints: {
                            0: { slidesPerView: 1.2, spaceBetween: 15 },
                            768: { slidesPerView: 2.2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 25 }
                        }
                    });
                }
            } catch (error) {
                console.warn('Error inicializando swipers:', error);
            }
        };

        // Esperar a que Swiper esté cargado
        const timer = setTimeout(() => {
            initSwipers();
        }, 2500);

        return () => {
            clearTimeout(timer);
        };
    }, []);
};

export default useColeccionSwiper;
