import { useEffect, useRef } from 'react';

const useExploreSwiper = () => {
    const swiperRef = useRef<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initSwiper = () => {
            if (containerRef.current && !swiperRef.current) {
                swiperRef.current = new (window as any).Swiper(containerRef.current, {
                    slidesPerView: 'auto',
                    spaceBetween: 8,
                    loop: true,
                    centeredSlides: false,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        dynamicBullets: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    breakpoints: {
                        // Móvil
                        0: {
                            slidesPerView: 1.2,
                            spaceBetween: 8,
                            centeredSlides: true,
                        },
                        // Tablet
                        768: {
                            slidesPerView: 2.5,
                            spaceBetween: 12,
                            centeredSlides: false,
                        },
                        // Desktop pequeño
                        1024: {
                            slidesPerView: 3.5,
                            spaceBetween: 15,
                            centeredSlides: false,
                        },
                        // Desktop grande
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                            centeredSlides: false,
                        }
                    },
                    on: {
                        init: function () {
                            // Actualizar estado de botones al inicializar
                            updateButtonStates();
                        },
                        slideChange: function () {
                            // Actualizar estado de botones al cambiar slide
                            updateButtonStates();
                        }
                    }
                });
            }
        };

        const updateButtonStates = () => {
            if (swiperRef.current) {
                const prevButton = document.querySelector('.swiper-button-prev');
                const nextButton = document.querySelector('.swiper-button-next');

                if (prevButton && nextButton) {
                    // Actualizar estado de botones basado en la posición del swiper
                    const isBeginning = swiperRef.current.isBeginning;
                    const isEnd = swiperRef.current.isEnd;

                    prevButton.classList.toggle('swiper-button-disabled', isBeginning);
                    nextButton.classList.toggle('swiper-button-disabled', isEnd);

                    prevButton.setAttribute('aria-disabled', isBeginning.toString());
                    nextButton.setAttribute('aria-disabled', isEnd.toString());
                }
            }
        };

        // Inicializar Swiper
        initSwiper();

        // Manejar redimensionamiento
        const handleResize = () => {
            if (swiperRef.current) {
                swiperRef.current.update();
                updateButtonStates();
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            if (swiperRef.current) {
                swiperRef.current.destroy();
                swiperRef.current = null;
            }
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return containerRef;
};

export default useExploreSwiper;
