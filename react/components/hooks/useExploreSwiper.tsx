import { useEffect, useRef } from 'react';

const useExploreSwiper = () => {
    const swiperRef = useRef<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const resizeTimerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const waitForSwiper = (callback: () => void, maxAttempts = 50, attempt = 0) => {
            if (typeof window !== 'undefined' && (window as any).Swiper) {
                callback();
            } else if (attempt < maxAttempts) {
                setTimeout(() => waitForSwiper(callback, maxAttempts, attempt + 1), 100);
            } else {
                console.error('Swiper library failed to load after maximum attempts');
            }
        };

        const initSwiper = () => {
            if (containerRef.current && !swiperRef.current && typeof window !== 'undefined' && (window as any).Swiper) {
                // Verificar si es el carrusel de exploremas (colecciones de relojes)
                const isExploreMas = containerRef.current.classList.contains('exploremas');

                // Buscar elementos de paginación y navegación dentro del contenedor
                const paginationEl = containerRef.current.querySelector('.swiper-pagination');
                const nextEl = containerRef.current.querySelector('.swiper-button-next');
                const prevEl = containerRef.current.querySelector('.swiper-button-prev');

                const swiperConfig: any = {
                    slidesPerView: 'auto',
                    spaceBetween: 8,
                    loop: false,
                    centeredSlides: false,
                    speed: 600,
                    freeMode: false,
                    watchOverflow: true,
                };

                // Solo agregar paginación si existe el elemento
                if (paginationEl) {
                    swiperConfig.pagination = {
                        el: paginationEl,
                        clickable: true,
                        dynamicBullets: false,
                        type: 'bullets',
                    };
                }

                // Solo agregar navegación si existen los elementos
                if (nextEl && prevEl) {
                    swiperConfig.navigation = {
                        nextEl: nextEl,
                        prevEl: prevEl,
                    };
                }

                if (isExploreMas) {
                    // Configuración específica para exploremas (colecciones de relojes)
                    swiperConfig.breakpoints = {
                        // Móvil
                        0: {
                            slidesPerView: 'auto',
                            spaceBetween: 8,
                            centeredSlides: false,
                        },
                        // Tablet
                        768: {
                            slidesPerView: 'auto',
                            spaceBetween: 8,
                            centeredSlides: false,
                        },
                        // Desktop
                        1025: {
                            slidesPerView: 'auto',
                            spaceBetween: 8,
                            centeredSlides: false,
                        }
                    };
                } else {
                    // Configuración para otros carruseles
                    swiperConfig.loop = true;
                    swiperConfig.breakpoints = {
                        0: {
                            slidesPerView: 1.2,
                            spaceBetween: 8,
                            centeredSlides: true,
                        },
                        768: {
                            slidesPerView: 2.5,
                            spaceBetween: 12,
                            centeredSlides: false,
                        },
                        1024: {
                            slidesPerView: 3.5,
                            spaceBetween: 15,
                            centeredSlides: false,
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                            centeredSlides: false,
                        }
                    };
                }

                swiperConfig.on = {
                    init: function () {
                        // Actualizar estado de botones al inicializar
                        updateButtonStates();
                    },
                    slideChange: function () {
                        // Actualizar estado de botones al cambiar slide
                        updateButtonStates();
                    },
                    resize: function () {
                        // Actualizar cuando cambia el tamaño de la ventana
                        if (swiperRef.current) {
                            swiperRef.current.update();
                            updateButtonStates();
                        }
                    }
                };

                try {
                    swiperRef.current = new (window as any).Swiper(containerRef.current, swiperConfig);
                    console.log('Swiper inicializado correctamente para exploremas:', isExploreMas);
                } catch (error) {
                    console.error('Error al inicializar Swiper:', error);
                }
            }
        };

        const updateButtonStates = () => {
            if (swiperRef.current && containerRef.current) {
                const prevButton = containerRef.current.querySelector('.swiper-button-prev');
                const nextButton = containerRef.current.querySelector('.swiper-button-next');

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

        // Esperar a que Swiper esté disponible antes de inicializar
        waitForSwiper(() => {
            initSwiper();
        });

        // Manejar redimensionamiento con debounce
        const handleResize = () => {
            if (resizeTimerRef.current) {
                clearTimeout(resizeTimerRef.current);
            }
            resizeTimerRef.current = setTimeout(() => {
                if (swiperRef.current) {
                    swiperRef.current.update();
                    swiperRef.current.updateSlides();
                    swiperRef.current.updateSlidesClasses();
                    updateButtonStates();
                }
            }, 250);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            if (resizeTimerRef.current) {
                clearTimeout(resizeTimerRef.current);
            }
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
