import React from 'react';

const CriticalStyles: React.FC = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* Estilos críticos para evitar FOUC y mejorar rendimiento */
        * { box-sizing: border-box; }
        html, body { 
          font-family: 'Rolex', Arial, sans-serif; 
          margin: 0; 
          padding: 0; 
          line-height: 1.6;
          color: #333;
          background-color: #f8f8f8;
          overflow-x: hidden;
        }
        .rlx_html { 
          font-family: 'Rolex', Arial, sans-serif; 
          min-height: 100vh;
        }
        .home_rlx { 
          background-color: #f8f8f8; 
          min-height: 100vh;
        }
        .rlx_menu { 
          background-color: #006341; 
          color: white; 
          position: relative;
          z-index: 1000;
        }
        .rlx_container { 
          max-width: 1200px; 
          margin: 0 auto; 
          padding: 0 15px; 
        }
        .row_grid { 
          display: flex; 
          align-items: center; 
          justify-content: space-between; 
          flex-wrap: wrap;
        }
        .slider_home_principal { 
          width: 100%; 
          height: auto; 
          position: relative;
        }
        .swiper-container {
          width: 100%;
          height: 100%;
        }
        .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        /* Optimización agresiva de carga de estilos */
        .loading-styles { 
          visibility: hidden; 
          opacity: 0;
          transition: none;
        }
        .styles-loaded { 
          visibility: visible; 
          opacity: 1;
          transition: opacity 0.1s ease-in-out;
        }
        /* Forzar visibilidad inmediata */
        body { 
          visibility: visible !important; 
          opacity: 1 !important; 
        }
        /* Estilos de fallback para elementos críticos */
        .rlx_menu { 
          background-color: #006341 !important; 
          color: white !important; 
          min-height: 60px;
          display: flex;
          align-items: center;
        }
        .rlx_container { 
          max-width: 1200px !important; 
          margin: 0 auto !important; 
          padding: 0 15px !important; 
        }
        .rlx_logo img { 
          max-height: 60px !important; 
          width: auto !important; 
        }
        /* Preload de fuentes críticas */
        @font-face {
          font-family: 'Rolex';
          font-display: swap;
          src: url('data:font/woff2;base64,') format('woff2');
        }
        /* Estilos de fallback para imágenes */
        img {
          max-width: 100%;
          height: auto;
          display: block;
        }
        /* Mejoras de rendimiento */
        .swiper-wrapper {
          will-change: transform;
        }
        .swiper-slide {
          will-change: transform;
        }
        /* Estilos para breadcrumbs */
        .breadcrum_page {
          display: flex;
          align-items: center;
          padding: 10px 0;
        }
        .breadcrum_menu_list {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .breadcrum_menu_list li {
          margin-right: 8px;
        }
        .breadcrum_menu_list li:not(:last-child)::after {
          content: '>';
          margin-left: 8px;
          color: #666;
        }
        .breadcrum_menu_list a {
          color: #006341;
          text-decoration: none;
        }
        .breadcrum_menu_list a:hover {
          text-decoration: underline;
        }
        .breadcrum_menu_list .active a {
          color: #333;
          font-weight: bold;
        }
        /* Estilos para componentes de colección */
        .single-imagen-componet {
          width: 100%;
          margin-bottom: 20px;
        }
        .classic-watches-swiper,
        .professional-watches-swiper,
        .perpetual-watches-swiper {
          width: 100%;
          height: auto;
        }
        .swiper-pagination {
          position: relative;
          margin-top: 20px;
        }
        .swiper-button-prev,
        .swiper-button-next {
          color: #006341;
        }
        /* Responsive design */
        @media (max-width: 768px) {
          .row_grid {
            flex-direction: column;
            align-items: flex-start;
          }
          .rlx_container {
            padding: 0 10px;
          }
        }
      `
    }} />
  );
};

export default CriticalStyles;
