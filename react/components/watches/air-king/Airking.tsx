import React from "react";
import { Helmet } from "react-helmet-async";
import useInitScripts from '../../../components/hooks/useInitScripts';
import RlxExploreMasNModels from "../../../components/parts/RlxExploreMasNModels";
import NavM from "../../../components/parts/NavModels";
import Footer from "../../../components/parts/Footer";
import { useCssHandles } from 'vtex.css-handles';
import "../../../main-style.css";

const CSS_HANDLES = [
    'headercomponent', 'rlx_html', 'home_rlx', 'rlx_menu', 'rlx_container', 'row_grid', 'rlx_logo', 'placa_rolex_logo',
    'breadcrum_page', 'breadcrum_column', 'breadcrum_menu_list', 'description', 'fixed_14', 'active',
    'rlx_content', 'rlx_container_content', 'content_row', 'content_column_12', 'content_column_9', 'content_column_6', 'content_column_3',
    'rolex_family_description', 'pb_15', 'home_banner_collection', 'mb_10_0', 'btn_primary_rlx'
];

const Airking: React.FC = () => {
    useInitScripts();
    const handles = useCssHandles(CSS_HANDLES);

    return (
        <>
            <Helmet>
                <title>Relojes Rolex Air-King - GLAUSER</title>
                <meta
                    name="description"
                    content="Descubra los relojes Rolex Air-King en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra más en GLAUSER."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://glauser.myvtex.com/files/style.min.css"
                />
                <link rel="stylesheet preload" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://glauser.vteximg.com.br/arquivos/style-rolex-general-glauser.css"
                />
                <link
                    rel="stylesheet preload"
                    href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
                />
                <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

                <link rel="canonical" href="https://glauser.myvtex.com/rolex/watches/air-king/" />

                {/* Facebook Meta Tags */}
                <meta property="og:url" content="https://glauser.myvtex.com/rolex/watches/air-king/" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Relojes Rolex Air-King - GLAUSER"
                />
                <meta
                    property="og:description"
                    content="Descubra los relojes Rolex Air-King en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra más en GLAUSER."
                />
                <meta
                    property="og:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-air-king-m126900-0001-portrait.webp"
                />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://glauser.myvtex.com/rolex/watches/air-king/" />
                <meta
                    name="twitter:title"
                    content="Relojes Rolex Air-King - GLAUSER"
                />
                <meta
                    name="twitter:description"
                    content="Descubra los relojes Rolex Air-King en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra más en GLAUSER."
                />
                <meta
                    name="twitter:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-air-king-m126900-0001-portrait.webp"
                />

                <script type="text/javascript" dangerouslySetInnerHTML={{
                    __html: `
                        var digitalDataLayer = {
                            environment: {
                                environmentVersion: "V7",
                                coBrandedVersion: "Bespoke"
                            },
                            page: {
                                pageType: "family page",
                                pageFamilyName: "air-king"
                            }
                        };
                    `
                }} />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@graph": [
                                {
                                    "@type": "Organization",
                                    "@id": "https://glauser.myvtex.com/#organization",
                                    "name": "Joyería Glauser",
                                    "url": "https://glauser.myvtex.com/",
                                    "sameAs": [
                                        "https://glauser.myvtex.com/",
                                        "https://www.facebook.com/JoyeriaGlauser/",
                                        "https://www.instagram.com/joyeriaglauser/?hl=es-la"
                                    ],
                                    "logo": {
                                        "@type": "ImageObject",
                                        "@id": "https://glauser.myvtex.com/#logo",
                                        "inLanguage": "es-CO",
                                        "url": "https://glauser.vteximg.com.br/arquivos/glauser_logo.svg",
                                        "contentUrl": "https://glauser.vteximg.com.br/arquivos/glauser_logo.svg",
                                        "width": 300,
                                        "height": 102,
                                        "caption": "Joyería Glauser"
                                    },
                                    "image": { "@id": "https://glauser.myvtex.com/#logo" }
                                },
                                {
                                    "@type": "WebPage",
                                    "@id": "https://glauser.myvtex.com/rolex/watches/air-king/#webpage",
                                    "url": "https://glauser.myvtex.com/rolex/watches/air-king/",
                                    "name": "Relojes Rolex Air-King - GLAUSER",
                                    "isPartOf": { "@id": "https://glauser.myvtex.com/#website" },
                                    "datePublished": "2024-04-10T05:23:53+00:00",
                                    "dateModified": "2024-04-10T05:23:53+00:00",
                                    "description": "Descubra los relojes Rolex Air-King en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra más en GLAUSER.",
                                    "breadcrumb": { "@id": "https://glauser.myvtex.com/rolex/watches/air-king/#breadcrumb" },
                                    "inLanguage": "es-Es",
                                    "potentialAction": [{ "@type": "ReadAction", "target": ["https://glauser.myvtex.com/rolex/watches/air-king/"] }]
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "@id": "https://glauser.myvtex.com/rolex/watches/air-king/#breadcrumb",
                                    "itemListElement": [
                                        {
                                            "@type": "ListItem",
                                            "position": 1,
                                            "name": "Rolex",
                                            "item": "https://glauser.myvtex.com/rolex/"
                                        },
                                        {
                                            "@type": "ListItem",
                                            "position": 2,
                                            "name": "Relojes Rolex",
                                            "item": "https://glauser.myvtex.com/rolex/coleccion-rolex/"
                                        },
                                        {
                                            "@type": "ListItem",
                                            "position": 3,
                                            "name": "Air-King",
                                            "item": "https://glauser.myvtex.com/rolex/watches/air-king/"
                                        }
                                    ]
                                }
                            ]
                        })
                    }}
                />
            </Helmet>

            <div className={`${handles.headercomponent}`}>
                <NavM />

                <div className={`${handles.rlx_content}`}>
                    <div className={`${handles.rlx_container}`}>
                        <div className={`${handles.row_grid}`}>
                            <div className={`${handles.content_column_12}`}>
                                <div className={`${handles.breadcrum_page}`}>
                                    <div className={`${handles.breadcrum_column}`}>
                                        <ul className={`${handles.breadcrum_menu_list}`}>
                                            <li><a href="https://glauser.myvtex.com/rolex/">Rolex</a></li>
                                            <li><a href="https://glauser.myvtex.com/rolex/coleccion-rolex/">Relojes Rolex</a></li>
                                            <li><span className={`${handles.active}`}>Air-King</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${handles.home_banner_collection} ${handles.mb_10_0}`}>
                        <img
                            className="lazyload"
                            data-src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-air-king-m126900-0001-landscape.webp"
                            alt="Relojes Rolex Air-King"
                        />
                    </div>

                    <div className={`${handles.rlx_container_content}`}>
                        <div className={`${handles.content_row}`}>
                            <div className={`${handles.content_column_9}`}>
                                <div className={`${handles.rolex_family_description} ${handles.pb_15}`}>
                                    <h1>Air-King</h1>
                                    <p className={`${handles.description}`}>
                                        El Air-King rinde homenaje a los pioneros del vuelo y al papel de Rolex en la ípica aventura de la aviaciín.
                                        Presenta una esfera negra distintiva con una combinación de nímeros grandes de 3, 6 y 9 horas y una escala de minutos prominente
                                        para una navegaciín temporal íptima. El modelo está equipado con el calibre 3230, un movimiento de manufactura
                                        totalmente desarrollado y fabricado por Rolex.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <RlxExploreMasNModels />
                <Footer />
            </div>
        </>
    );
};

export default Airking; 
