import { Swiper } from "swiper";
import $ from "jquery";
import { useEffect } from "react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

// Configuración de Swiper v8+
const swiperConfig = {
    modules: [Navigation, Pagination],
    navigation: true,
    pagination: true,
};

const useInitScripts = () => {
    useEffect(() => {
        if (typeof window === "undefined") return;

        // === Adobe Launch ===
        if (!window._satelliteLoaded) {
            window._satelliteLoaded = true;

            const script = document.createElement("script");
            script.src = "https://assets.adobedtm.com/7e3b3fa0902e/7ba12da1470f/launch-73c56043319a-staging.min.js";
            script.async = true;
            script.onload = () => {
                if (window._satellite) {
                    window._satellite.pageBottom?.();
                    window._satellite.track?.("PageView");
                }
            };
            script.onerror = () => console.error("Error al cargar Adobe Satellite.");
            document.head.appendChild(script);
        } else if (window._satellite) {
            window._satellite.pageBottom?.();
            window._satellite.track?.("PageView");
        }

        const satelliteInterval = setInterval(() => {
            if (!window._satellite) {
                window._satellite = window._satelliteBackup;
            }
        }, 2000);

        // === Toggle Nav ===
        if ($) {
            $(document)
                .off("click", "a.rlx-sm.btn-toggle")
                .on("click", "a.rlx-sm.btn-toggle", function () {
                    $("nav.rlx-header-menu-top").toggleClass("showme");
                });
        }

        // === Volver Arriba ===
        const btnVolverArriba = document.getElementById("btnVolverArriba");
        const scrollToTop = () => {
            const duration = 300;
            const start = window.scrollY;
            const startTime = performance.now();

            function easeInOutCubic(t: number, b: number, c: number, d: number) {
                t /= d / 2;
                if (t < 1) return (c / 2) * t * t * t + b;
                t -= 2;
                return (c / 2) * (t * t * t + 2) + b;
            }

            function scrollStep() {
                const now = performance.now();
                const elapsed = now - startTime;
                window.scrollTo(0, easeInOutCubic(elapsed, start, -start, duration));
                if (elapsed < duration) requestAnimationFrame(scrollStep);
            }

            requestAnimationFrame(scrollStep);
        };

        if (btnVolverArriba) {
            btnVolverArriba.addEventListener("click", scrollToTop);
        }

        // === Swiper Principal y Footer ===
        const initializeSwiper = () => {
            const sliderPrincipal = document.querySelector(".slider-home-principal") as HTMLElement;
            const sliderFooter = document.querySelector(".exploremas") as HTMLElement;

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
                        init: (swiper: Swiper) => updateNavigationButtons(swiper),
                        slideChange: (swiper: Swiper) => updateNavigationButtons(swiper),
                    },
                });
            }

            if (sliderFooter) {
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

        const waitForSlides = () => {
            const wrapper = document.querySelector('.exploremas .swiper-wrapper');
            if (wrapper && wrapper.children.length >= 4) {
                initializeSwiper();
            } else {
                requestAnimationFrame(waitForSlides);
            }
        };

        // === Swiper Mobile ===
        let swiperMobile: Swiper | null = null;
        const initMobileSwiper = () => {
            const container = document.querySelector(".swiper-container-mobile") as HTMLElement;
            if (window.innerWidth <= 767 && container && !swiperMobile) {
                swiperMobile = new Swiper(container, {
                    slidesPerView: 1,
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
                        init(swiper: Swiper) {
                            swiper.update();
                        },
                    },
                });
            } else if (swiperMobile && window.innerWidth > 767) {
                swiperMobile.destroy();
                swiperMobile = null;
            }
        };

        // === Accordion ===
        if ($) {
            $(document)
                .off("click", ".accordion-header")
                .on("click", ".accordion-header", function () {
                    const $header = $(this);
                    $(".accordion-content").not($header.next()).removeClass("active");
                    $(".accordion-header span:last-child").text("+");
                    const content = $header.next();
                    const icon = $header.find("span:last-child");
                    const isActive = content.hasClass("active");
                    content.toggleClass("active");
                    icon.text(isActive ? "+" : "–");
                });
        }

        // === Lightbox ===
        const galleryImages = Array.from(document.querySelectorAll<HTMLImageElement>(".galeria-models img"));
        const lightbox = document.getElementById("lightbox");
        const lightboxImage = document.getElementById("lightbox-image") as HTMLImageElement;
        const closeButton = document.querySelector(".close-button");
        const prevButton = document.getElementById("prev-button");
        const nextButton = document.getElementById("next-button");
        const paginationDotsContainer = document.querySelector(".pagination-dots");

        let currentIndex = 0;
        const images = galleryImages.map(img => img.src);
        let dots: HTMLElement[] = [];

        const openLightbox = (src: string, index: number) => {
            if (!lightbox || !lightboxImage || !paginationDotsContainer) return;
            lightboxImage.src = src;
            currentIndex = index;
            lightbox?.classList.add("active");
            createPaginationDots();
            updatePagination();
        };

        const closeLightbox = () => {
            if (!lightbox || !paginationDotsContainer) return;
            lightbox?.classList.remove("active");
            paginationDotsContainer.innerHTML = "";
            dots = [];
        };

        const showPrevious = () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            lightboxImage.src = images[currentIndex];
            updatePagination();
        };

        const showNext = () => {
            currentIndex = (currentIndex + 1) % images.length;
            lightboxImage.src = images[currentIndex];
            updatePagination();
        };

        const createPaginationDots = () => {
            if (!paginationDotsContainer) return;
            paginationDotsContainer.innerHTML = "";
            dots = images.map((_, i) => {
                const dot = document.createElement("div");
                if (dot?.classList) {
                    dot.classList.add("dot");
                } else {
                    console.warn("dot.classList no está disponible.");
                }
                dot.dataset.index = String(i);
                dot.addEventListener("click", () => {
                    currentIndex = i;
                    lightboxImage.src = images[currentIndex];
                    updatePagination();
                });
                paginationDotsContainer.appendChild(dot);
                return dot;
            });
        };

        const updatePagination = () => {
            dots.forEach((dot, i) => {
                dot?.classList.toggle("active", i === currentIndex);
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

        // === Show/Hide Precio ===
        const handleShowHidePrice = () => {
            const x = document.getElementById("priceshow");
            if (x) x.style.display = x.style.display === "none" ? "block" : "none";
        };
        window.showhideprice = handleShowHidePrice;

        const priceIcons = document.querySelectorAll<HTMLElement>(".icon-price-rlx");
        priceIcons.forEach(icon => {
            icon.addEventListener("click", handleShowHidePrice);
        });

        // === Wait y resize ===
        waitForSlides();
        initMobileSwiper();
        window.addEventListener("resize", initMobileSwiper);

        // === Satellite download tracking ===
        const downloadLink = document.querySelector<HTMLAnchorElement>(
            '.row-grid-fullw.watch-caracteristicas .cuerpotextobeigebg .p-absolutes a'
        );
        const handleClickDownload = () => {
            if (window._satellite?.track) {
                window._satellite.track('download');
            } else {
                console.warn('No se encontró _satellite.track');
            }
        };
        downloadLink?.addEventListener('click', handleClickDownload);

        // === Limpieza ===
        return () => {
            clearInterval(satelliteInterval);
            btnVolverArriba?.removeEventListener("click", scrollToTop);
            priceIcons.forEach(icon => {
                icon.removeEventListener("click", handleShowHidePrice);
            });
            window.removeEventListener("resize", initMobileSwiper);
            document.removeEventListener("keydown", handleKeyDown);
            downloadLink?.removeEventListener('click', handleClickDownload);
            if (swiperMobile) swiperMobile.destroy();
        };
    }, []);

    return null;
};

export default useInitScripts;
