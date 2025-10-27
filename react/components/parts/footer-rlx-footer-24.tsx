import React, { useEffect } from 'react';

declare global {
  interface Window {
    toggleMenu?: () => void;
  }
}

const MainEffects: React.FC = () => {
  useEffect(() => {
    // Adobe Launch (satellite)
    if (window._satellite?.pageBottom) {
      window._satellite.pageBottom();
    }
    if (window._satellite?.track) {
      window._satellite.track("PageView");
    }

    // Toggle de menú por clase
    const toggleBtn = document.querySelector('a.rlx-sm.btn-toggle');
    const toggleNav = () => {
      const nav = document.querySelector('nav.rlx-header-menu-top');
      nav?.classList.toggle('showme');
    };
    toggleBtn?.addEventListener('click', toggleNav);

    // Toggle de menú por ID
    const toggleMenu = () => {
      const menu = document.getElementById("rlx-menu-toggle");
      if (menu) {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
      }
    };
    window.toggleMenu = toggleMenu;

    // Scroll hacia arriba
    const btn = document.getElementById('btnVolverArriba');
    const scrollToTop = () => {
      const duration = 300;
      const start = window.scrollY;
      const startTime = performance.now();

      const easeInOutCubic = (t: number, b: number, c: number, d: number): number => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t * t + b;
        t -= 2;
        return (c / 2) * (t * t * t + 2) + b;
      };

      const scrollStep = () => {
        const now = performance.now();
        const elapsed = now - startTime;
        window.scrollTo(0, easeInOutCubic(elapsed, start, -start, duration));
        if (elapsed < duration) requestAnimationFrame(scrollStep);
      };

      requestAnimationFrame(scrollStep);
    };
    btn?.addEventListener('click', e => {
      e.preventDefault();
      scrollToTop();
    });


    // Accordion
    const headers = document.querySelectorAll('.accordion-header');
    const toggleAccordion = (element: Element) => {
      document.querySelectorAll('.accordion-item').forEach(item => {
        const content = item.querySelector('.accordion-content') as HTMLElement | null;
        const icon = item.querySelector('.accordion-header span:last-child') as HTMLElement | null;
        if (item.querySelector('.accordion-header') === element) {
          const isActive = content?.classList.contains('active') || false;
          content?.classList.toggle('active');
          if (icon) icon.textContent = isActive ? '+' : '–';
        } else {
          content?.classList.remove('active');
          if (icon) icon.textContent = '+';
        }
      });
    };
    headers.forEach(header =>
      header.addEventListener('click', () => toggleAccordion(header))
    );

    // Lightbox Galería
    const galleryImages = document.querySelectorAll('.galeria-models img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image') as HTMLImageElement | null;
    const closeButton = document.querySelector('.close-button');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const paginationDotsContainer = document.querySelector('.pagination-dots') as HTMLElement | null;
    let currentIndex = 0;
    const images = Array.from(galleryImages).map(img => (img as HTMLImageElement).src);
    let dots: HTMLElement[] = [];

    const openLightbox = (src: string) => {
      if (lightboxImage) lightboxImage.src = src;
      lightbox?.classList.add('active');
      createPaginationDots();
      updatePagination();
    };

    const closeLightbox = () => {
      lightbox?.classList.remove('active');
      if (paginationDotsContainer) paginationDotsContainer.innerHTML = '';
      dots = [];
    };

    const showPrevious = () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      if (lightboxImage) lightboxImage.src = images[currentIndex];
      updatePagination();
    };

    const showNext = () => {
      currentIndex = (currentIndex + 1) % images.length;
      if (lightboxImage) lightboxImage.src = images[currentIndex];
      updatePagination();
    };

    const createPaginationDots = () => {
      if (paginationDotsContainer) paginationDotsContainer.innerHTML = '';
      dots = images.map((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.dataset.index = i.toString();
        dot.addEventListener('click', () => {
          currentIndex = i;
          if (lightboxImage) lightboxImage.src = images[currentIndex];
          updatePagination();
        });
        if (paginationDotsContainer) paginationDotsContainer.appendChild(dot);
        return dot;
      });
    };

    const updatePagination = () => {
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    };

    galleryImages.forEach((img, index) => {
      img.addEventListener('click', () => {
        currentIndex = index;
        openLightbox((img as HTMLImageElement).src);
      });
    });

    closeButton?.addEventListener('click', closeLightbox);
    prevButton?.addEventListener('click', showPrevious);
    nextButton?.addEventListener('click', showNext);

    lightbox?.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (lightbox?.classList.contains('active')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrevious();
        if (e.key === 'ArrowRight') showNext();
      }
    });

    // Swiper para móvil y desktop
    let swiperInstance: any = null;
    const initSwiper = () => {
      const container = document.querySelector('.swiper-container-mobile') as HTMLElement | null;
      if (container && !swiperInstance) {
        // Configuración diferente según el tamaño de pantalla
        const isMobile = window.innerWidth <= 767;

        swiperInstance = new (window as any).Swiper(container, {
          slidesPerView: isMobile ? 1 : 3, // 1 slide en móvil, 3 en desktop
          spaceBetween: isMobile ? 0 : 20, // Sin espacio en móvil, 20px en desktop
          loop: true,
          centeredSlides: !isMobile, // Centrar slides en desktop
          pagination: {
            el: '.swiper-pagination-model',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-model-next',
            prevEl: '.swiper-button-model-prev',
          },
          breakpoints: {
            // Configuración específica para diferentes tamaños
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 25,
            }
          }
        });
      } else if (swiperInstance && window.innerWidth !== window.innerWidth) {
        // Solo reinicializar si realmente cambió el tamaño significativamente
        const currentIsMobile = window.innerWidth <= 767;
        const wasMobile = swiperInstance.params.slidesPerView === 1;

        if (currentIsMobile !== wasMobile) {
          swiperInstance.destroy();
          swiperInstance = null;
          initSwiper();
        }
      }
    };

    initSwiper();
    window.addEventListener('resize', initSwiper);

    return () => {
      toggleBtn?.removeEventListener('click', toggleNav);
      btn?.removeEventListener('click', scrollToTop);
      window.removeEventListener('resize', initSwiper);
      if (swiperInstance) {
        swiperInstance.destroy();
        swiperInstance = null;
      }
    };
  }, []);

  return null; // Este componente no renderiza nada
};

export default MainEffects;
