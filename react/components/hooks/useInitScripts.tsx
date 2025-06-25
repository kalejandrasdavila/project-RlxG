import Swiper from "swiper";
import $ from "jquery";
import { useEffect } from "react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
Swiper.use([Navigation, Pagination]);

const useInitScripts = () => {
    useEffect(() => {
        // === Adobe Satellite ===
        if (typeof window !== 'undefined' && !window._satelliteLoaded) {
            window._satelliteLoaded = true;

            const script = document.createElement("script");
            script.src = "https://assets.adobedtm.com/7e3b3fa0902e/7ba12da1470f/launch-73c56043319a-staging.min.js";
            script.async = true;
            script.onload = () => {
                if (window._satellite) {
                    window._satellite.pageBottom();
                    window._satellite.track("PageView");
                }
            };
            script.onerror = () => console.error("Error al cargar Adobe Satellite.");
            document.head.appendChild(script);
        } else if (typeof window !== 'undefined' && window._satellite) {
            window._satellite.pageBottom();
            window._satellite.track("PageView");
        }

        if (typeof window !== 'undefined') {
            window._satelliteBackup = window._satellite;
            const satelliteInterval = setInterval(() => {
                if (!window._satellite) {
                    window._satellite = window._satelliteBackup;
                }
            }, 2000);

            // Cleanup function for the interval
            return () => clearInterval(satelliteInterval);
        }


        // === Botón toggle nav ===
        $(document)
            .off("click", "a.rlx-sm.btn-toggle")
            .on("click", "a.rlx-sm.btn-toggle", function () {
                $("nav.rlx-header-menu-top").toggleClass("showme");
            });

        // === Scroll arriba ===
        const btnVolverArriba = document.getElementById("btnVolverArriba");
        const scrollToTop = () => {
            let duration = 300;
            let start = window.scrollY;
            let startTime = performance.now();

            function easeInOutCubic(t: number, b: number, c: number, d: number) {
                t /= d / 2;
                if (t < 1) return (c / 2) * t * t * t + b;
                t -= 2;
                return (c / 2) * (t * t * t + 2) + b;
            }

            function scrollStep() {
                let now = performance.now();
                let elapsed = now - startTime;
                window.scrollTo(0, easeInOutCubic(elapsed, start, -start, duration));
                if (elapsed < duration) requestAnimationFrame(scrollStep);
            }

            requestAnimationFrame(scrollStep);
        };

        btnVolverArriba?.addEventListener("click", scrollToTop);

        // === Swiper: Slider Principal & Footer ===
        const initializeSwiper = () => {
            const sliderPrincipal = document.querySelector(".slider-home-principal") as HTMLElement;
            const sliderFooter = document.querySelector(".exploremas") as HTMLElement;

            if (!sliderFooter) {
                console.warn('Swiper container ".exploremas" no encontrada.');
                return;
            }

            // Type assertion to access swiper property
            if ((sliderFooter as any).swiper) {
                (sliderFooter as any).swiper.destroy(true, true);
            }

            const updateNavigationButtons = (swiperInstance: Swiper) => {
                const currentIndex = swiperInstance.activeIndex;
                const totalSlides = swiperInstance.slides.length;
                const nextButton = document.querySelector(".principal-next") as HTMLElement;
                const prevButton = document.querySelector(".principal-prev") as HTMLElement;

                if (!nextButton || !prevButton) return;
                nextButton.style.display = "flex";
                prevButton.style.display = "flex";

                if (currentIndex === 0) prevButton.style.display = "none";
                else if (currentIndex === totalSlides - 1) nextButton.style.display = "none";
            };

            if (sliderPrincipal) {
                new Swiper(sliderPrincipal, {
                    modules: [Navigation],
                    pagination: {
                        el: ".swiper-pagination-home",
                        clickable: true,
                    },
                    navigation: {
                        nextEl: ".principal-next",
                        prevEl: ".principal-prev",
                    },
                    loop: false,
                    on: {
                        init(swiper) {
                            updateNavigationButtons(swiper);
                        },
                        slideChange(swiper) {
                            updateNavigationButtons(swiper);
                        },
                    },
                });
            }

            if (sliderFooter) {
                console.log("Slides detectados:", sliderFooter.innerHTML);

                new Swiper(sliderFooter, {
                    modules: [Pagination],
                    slidesPerView: 4,
                    spaceBetween: 8,
                    slidesPerGroup: 4,
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                    navigation: {
                        nextEl: ".footer-next",
                        prevEl: ".footer-prev",
                    },
                    loop: false,
                    breakpoints: {
                        320: { slidesPerView: 2, slidesPerGroup: 2 },
                        480: { slidesPerView: 2, slidesPerGroup: 2 },
                        768: { slidesPerView: 4, slidesPerGroup: 4 },
                    },
                });
            }
        };

        // Asegura que los slides estén presentes antes de inicializar Swiper
        function waitForSlides() {
            const wrapper = document.querySelector('.exploremas .swiper-wrapper');
            if (wrapper && wrapper.children.length >= 4) {
                initializeSwiper();
            } else {
                requestAnimationFrame(waitForSlides);
            }
        }

        // Ejecuta el código solo en el navegador
        if (typeof window !== 'undefined') {
            waitForSlides();
        }

        // === Swiper solo para móvil ===
        let swiperMobile: Swiper | null = null;
        const initMobileSwiper = () => {
            const container = document.querySelector(".swiper-container-mobile") as HTMLElement;
            if (typeof window !== 'undefined' && window.innerWidth <= 767 && container && !swiperMobile) {
                swiperMobile = new Swiper(container, {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: false,
                    pagination: {
                        el: ".swiper-pagination-model",
                        clickable: true,
                    },
                    navigation: {
                        nextEl: ".swiper-button-model-next",
                        prevEl: ".swiper-button-model-prev",
                    },
                    on: {
                        init: function (swiperInstance) {
                            swiperInstance.update();
                        },
                    },
                });
            } else if (swiperMobile && typeof window !== 'undefined' && window.innerWidth > 767) {
                swiperMobile.destroy();
                swiperMobile = null;
            }
        };


        // === Acordeón ===
        $(document).off("click", ".accordion-header").on("click", ".accordion-header", function () {
            const $header = $(this);
            $(".accordion-content").not($header.next()).removeClass("active");
            $(".accordion-header span:last-child").text("+");
            const content = $header.next();
            const icon = $header.find("span:last-child");
            const isActive = content.hasClass("active");

            content.toggleClass("active");
            icon.text(isActive ? "+" : "–");
        });

        // === Lightbox ===
        const galleryImages = document.querySelectorAll<HTMLImageElement>(".galeria-models img");
        const lightbox = document.getElementById("lightbox");
        const lightboxImage = document.getElementById("lightbox-image") as HTMLImageElement;
        const closeButton = document.querySelector(".close-button");
        const prevButton = document.getElementById("prev-button");
        const nextButton = document.getElementById("next-button");
        const paginationDotsContainer = document.querySelector(".pagination-dots");

        let currentIndex = 0;
        const images = Array.from(galleryImages as NodeListOf<HTMLImageElement>).map(img => img.src);
        let dots: HTMLElement[] = [];

        const openLightbox = (src: string, index: number) => {
            if (!lightbox || !lightboxImage || !paginationDotsContainer) return;

            lightboxImage.src = src;
            currentIndex = index;
            lightbox.classList.add("active");
            createPaginationDots();
            updatePagination();
        };

        const closeLightbox = () => {
            if (!lightbox || !paginationDotsContainer) return;

            lightbox.classList.remove("active");
            paginationDotsContainer.innerHTML = "";
            dots = [];
        };

        const showPrevious = () => {
            if (!lightboxImage) return;

            currentIndex = (currentIndex - 1 + images.length) % images.length;
            lightboxImage.src = images[currentIndex];
            updatePagination();
        };

        const showNext = () => {
            if (!lightboxImage) return;

            currentIndex = (currentIndex + 1) % images.length;
            lightboxImage.src = images[currentIndex];
            updatePagination();
        };

        const createPaginationDots = () => {
            if (!paginationDotsContainer) return;

            paginationDotsContainer.innerHTML = "";
            dots = images.map((_, i) => {
                const dot = document.createElement("div");
                dot.classList.add("dot");
                dot.dataset.index = String(i); // Ensure dataset is string
                dot.addEventListener("click", () => {
                    currentIndex = i;
                    if (lightboxImage) {
                        lightboxImage.src = images[currentIndex];
                        updatePagination();
                    }
                });
                paginationDotsContainer.appendChild(dot);
                return dot;
            });
        };

        const updatePagination = () => {
            dots.forEach((dot, i) => {
                dot.classList.toggle("active", i === currentIndex);
            });
        };

        galleryImages.forEach((img, index) => {
            img.addEventListener("click", () => openLightbox(img.src, index));
        });

        closeButton?.addEventListener("click", closeLightbox);
        prevButton?.addEventListener("click", showPrevious);
        nextButton?.addEventListener("click", showNext);
        lightbox?.addEventListener("click", (e) => {
            if (e.target === lightbox) closeLightbox();
        });

        const handleKeyDown = (e: KeyboardEvent) => {
            if (lightbox?.classList.contains("active")) {
                if (e.key === "Escape") closeLightbox();
                if (e.key === "ArrowLeft") showPrevious();
                if (e.key === "ArrowRight") showNext();
            }
        };
        document.addEventListener("keydown", handleKeyDown);


        // === Mostrar precios ===

        window.showhideprice = () => {
            const x = document.getElementById("priceshow");
            if (x) x.style.display = x.style.display === "none" ? "block" : "none";
        };

        const priceIcons = document.querySelectorAll(".icon-price-rlx");
        priceIcons.forEach(icon => {
            icon.addEventListener("click", window.showhideprice);
        });

        // === Ejecutar Swipers ===
        if (typeof window !== "undefined") {
            initializeSwiper();
            initMobileSwiper();
            window.addEventListener("resize", initMobileSwiper);
        }

        // === Seguimiento boton Brochure ===
        const downloadLink = document.querySelector(
            '.row-grid-fullw.watch-caracteristicas .cuerpotextobeigebg .p-absolutes a'
        );
        const handleClickDownload = () => {
            if (window._satellite?.track) {
                window._satellite.track('download');
            } else {
                console.warn('No se encontró _satellite.track');
            }
        };

        if (downloadLink) {
            downloadLink.addEventListener('click', handleClickDownload);
        } else {
            console.warn('No se encontró el enlace de descarga con el selector especificado.');
        }

        // === Limpieza ===
        return () => {
            btnVolverArriba?.removeEventListener("click", scrollToTop);
            priceIcons.forEach(icon => icon.removeEventListener("click", window.showhideprice));
            window.removeEventListener("resize", initMobileSwiper);
            document.removeEventListener("keydown", handleKeyDown);
            if (downloadLink) {
                downloadLink.removeEventListener('click', handleClickDownload);
            }
        };
    }, []); // Empty dependency array means this effect runs once after the initial render

    return null;
};

export default useInitScripts;