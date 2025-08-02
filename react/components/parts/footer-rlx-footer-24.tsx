import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';

declare global {
  interface Window {
    toggleMenu?: () => void;
    _satellite?: {
      pageBottom?: () => void;
      track?: (event: string) => void;
    };
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
    window.toggleMenu = toggleMenu; // Para poder usarlo en HTML si lo necesitas

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

    // Swiper Explore Mas
    const swiperExplore = new (window as any).Swiper('.exploremas', {
      slidesPerView: 4,
      slidesPerGroup: 4,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: (index: number, className: string) => `<span class="${className}"></span>`,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: { slidesPerView: 2, slidesPerGroup: 2 },
        480: { slidesPerView: 2, slidesPerGroup: 2 },
        768: { slidesPerView: 4, slidesPerGroup: 4 },
      },
    });

    // Swiper Home Principal
    const swiperHome = new (window as any).Swiper('.slider-home-principal', {
      pagination: { el: '.swiper-pagination-home', clickable: true },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
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
        openLightbox(img.src);
      });
    });

    closeButton?.addEventListener('click', closeLightbox);
    prevButton?.addEventListener('click', showPrevious);
    nextButton?.addEventListener('click', showNext);

    lightbox?.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrevious();
        if (e.key === 'ArrowRight') showNext();
      }
    });

    // Swiper solo para móvil
    let swiperMobile: any = null;
    const initMobileSwiper = () => {
      const container = document.querySelector('.swiper-container-mobile') as HTMLElement | null;
      if (window.innerWidth <= 767 && container && !swiperMobile) {
        swiperMobile = new (window as any).Swiper(container, {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          pagination: {
            el: '.swiper-pagination-model',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-model-next',
            prevEl: '.swiper-button-model-prev',
          },
        });
      } else if (swiperMobile && window.innerWidth > 767) {
        swiperMobile.destroy();
        swiperMobile = null;
      }
    };

    initMobileSwiper();
    window.addEventListener('resize', initMobileSwiper);

    return () => {
      toggleBtn?.removeEventListener('click', toggleNav);
      btn?.removeEventListener('click', scrollToTop);
      window.removeEventListener('resize', initMobileSwiper);
    };
  }, []);

  return null; // Este componente no renderiza nada
};

export default MainEffects;
