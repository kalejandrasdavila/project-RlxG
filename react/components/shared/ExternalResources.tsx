import React from 'react';
import { Helmet } from 'react-helmet-async';

interface ExternalResourcesProps {
    includeSwiper?: boolean;
    includeJQuery?: boolean;
    includeCustomStyles?: boolean;
}

const ExternalResources: React.FC<ExternalResourcesProps> = ({
    includeSwiper = false,
    includeJQuery = false,
    includeCustomStyles = true
}) => {
    return (
        <Helmet>
            {/* Estilos base siempre incluidos */}
            {includeCustomStyles && (
                <>
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://glauser.myvtex.com/files/style.min.css"
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://glauser.vteximg.com.br/arquivos/style-rolex-general-glauser.css"
                    />
                </>
            )}

            {/* Swiper solo cuando se necesite */}
            {includeSwiper && (
                <>
                    <link
                        rel="stylesheet preload"
                        href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
                    />
                    <script
                        src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
                        async
                    />
                </>
            )}

            {/* jQuery solo cuando se necesite */}
            {includeJQuery && (
                <script
                    src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
                    async
                />
            )}
        </Helmet>
    );
};

export default ExternalResources;
