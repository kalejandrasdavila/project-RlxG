import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useInitScripts from '../../../../components/hooks/useInitScripts';
import RlxExploreMasModels from "../../../../components/parts/RlxExploreMasNModels";

import NavM from "../../../../components/parts/NavModels";

import WatchesForm from "../../../../components/parts/Rlx-watches-formulario";

import SectionCosmoGraphD from "../../../parts/SectionCosmoGraphD";
import Footer from '../../../../components/parts/Footer';

import { useCssHandles } from 'vtex.css-handles';
import "../../../../main-style.css";

const CSS_HANDLES = [
    'headercomponent', 'rlx_html', 'home_rlx', 'rlx_menu', 'rlx_container', 'row_grid', 'rlx_logo', 'placa_rolex_logo',
    'breadcrum_page', 'breadcrum_column', 'breadcrum_menu_list', 'description', 'fixed_14', 'active',
    'rlx_content', 'rlx_container_content', 'content_row', 'content_column_12', 'content_column_9', 'content_column_6', 'content_column_3',
    'rolex_family_description', 'pb_15', 'home_banner_collection', 'mb_10_0', 'btn_primary_rlx', 'watch_model_page',
    'model_details', 'price_section', 'specifications', 'watch_gallery', 'model_info', 'cosmograph_model'
];

const M126500ln0001: React.FC = () => {
    useInitScripts();
    const handles = useCssHandles(CSS_HANDLES);
    const [modelorlx, setModelorlx] = useState<string>("");
    const [showPrice, setShowPrice] = useState<boolean>(false);

    const togglePrice = () => setShowPrice(prev => !prev);

    useEffect(() => {
        let pageTitle = document.title;
        let formattedTitle = pageTitle.includes("- GLAUSER")
            ? pageTitle.replace("- GLAUSER", "").trim()
            : pageTitle;

        setModelorlx(formattedTitle);

        const elemento = document.getElementById("mensajerlx") as HTMLInputElement | null;
        if (elemento) {
            elemento.value = `Me interesa ${formattedTitle}`;
        } else {
            console.error("No se encontrí el elemento con el ID 'mensajerlx'");
        }
    }, []);

    return (
        <>
            <Helmet>
                <title>Rolex Cosmograph Daytona de Oyster, 40 mm, acero Oystersteel, m126500ln-0001 - GLAUSER</title>
                <meta
                    name="description"
                    content="Descubra el reloj Rolex Cosmograph Daytona de Oyster, 40 mm, acero Oystersteel en GLAUSER, Distribuidor Oficial Rolex autorizado para vender y realizar el mantenimiento de los relojes Rolex"
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

                <link rel="canonical" href="https://glauser.myvtex.com/rolex/watches/cosmograph-daytona/m126500ln-0001/" />

                {/* Facebook Meta Tags */}
                <meta property="og:url" content="https://glauser.myvtex.com/rolex/watches/cosmograph-daytona/m126500ln-0001/" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Rolex Cosmograph Daytona de Oyster, 40 mm, acero Oystersteel, m126500ln-0001 - GLAUSER"
                />
                <meta
                    property="og:description"
                    content="Descubra el reloj Rolex Cosmograph Daytona de Oyster, 40 mm, acero Oystersteel en GLAUSER, Distribuidor Oficial Rolex autorizado para vender y realizar el mantenimiento de los relojes Rolex"
                />
                <meta
                    property="og:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches/cosmograph-daytona/m126500ln-0001/rolex-cosmograph-daytona-m126500ln-0001-at-0-1-1-1.webp"
                />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://glauser.myvtex.com/rolex/watches/cosmograph-daytona/m126500ln-0001/" />
                <meta
                    name="twitter:title"
                    content="Rolex Cosmograph Daytona de Oyster, 40 mm, acero Oystersteel, m126500ln-0001 - GLAUSER"
                />
                <meta
                    name="twitter:description"
                    content="Descubra el reloj Rolex Cosmograph Daytona de Oyster, 40 mm, acero Oystersteel en GLAUSER, Distribuidor Oficial Rolex autorizado para vender y realizar el mantenimiento de los relojes Rolex"
                />
                <meta
                    name="twitter:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches/cosmograph-daytona/m126500ln-0001/rolex-cosmograph-daytona-m126500ln-0001-at-0-1-1-1.webp"
                />

                <script type="text/javascript" dangerouslySetInnerHTML={{
                    __html: `
                        var digitalDataLayer = {
                            environment: {
                                environmentVersion: "V7",
                                coBrandedVersion: "Bespoke"
                            },
                            page: {
                                pageType: "model page",
                                pageModelName: "m126500ln-0001"
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
                                    "@id": "https://glauser.myvtex.com/rolex/watches/cosmograph-daytona/m126500ln-0001/#webpage",
                                    "url": "https://glauser.myvtex.com/rolex/watches/cosmograph-daytona/m126500ln-0001/",
                                    "name": "Rolex Cosmograph Daytona de Oyster, 40 mm, acero Oystersteel, m126500ln-0001 - GLAUSER",
                                    "isPartOf": { "@id": "https://glauser.myvtex.com/#website" },
                                    "datePublished": "2024-04-10T05:23:53+00:00",
                                    "dateModified": "2024-04-10T05:23:53+00:00",
                                    "description": "Descubra el reloj Rolex Cosmograph Daytona de Oyster, 40 mm, acero Oystersteel en GLAUSER, Distribuidor Oficial Rolex autorizado para vender y realizar el mantenimiento de los relojes Rolex",
                                    "breadcrumb": { "@id": "https://glauser.myvtex.com/rolex/watches/cosmograph-daytona/m126500ln-0001/#breadcrumb" },
                                    "inLanguage": "es-Es",
                                    "potentialAction": [{ "@type": "ReadAction", "target": ["https://glauser.myvtex.com/rolex/watches/cosmograph-daytona/m126500ln-0001"] }]
                                },
                                {
                                    "@type": "Product",
                                    "@id": "https://glauser.myvtex.com/rolex/watches/cosmograph-daytona/m126500ln-0001/#product",
                                    "name": "Rolex Cosmograph Daytona m126500ln-0001",
                                    "url": "https://glauser.myvtex.com/rolex/watches/cosmograph-daytona/m126500ln-0001",
                                    "description": "Descubra el reloj Rolex Cosmograph Daytona de Oyster, 40 mm, acero Oystersteel en GLAUSER, Distribuidor Oficial Rolex autorizado para vender y realizar el mantenimiento de los relojes Rolex",
                                    "image": "https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches/cosmograph-daytona/m126500ln-0001/rolex-cosmograph-daytona-m126500ln-0001-at-0-1-1-1.webp",
                                    "brand": {
                                        "@type": "Brand",
                                        "name": "Rolex"
                                    },
                                    "manufacturer": {
                                        "@type": "Organization",
                                        "name": "Rolex"
                                    }
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "@id": "https://glauser.myvtex.com/rolex/watches/cosmograph-daytona/m126500ln-0001/#breadcrumb",
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
                                            "name": "Cosmograph Daytona",
                                            "item": "https://glauser.myvtex.com/rolex/watches/cosmograph-daytona/"
                                        },
                                        {
                                            "@type": "ListItem",
                                            "position": 4,
                                            "name": "m126500ln-0001",
                                            "item": "https://glauser.myvtex.com/rolex/watches/cosmograph-daytona/m126500ln-0001/"
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
                                            <li><a href="https://glauser.myvtex.com/rolex/watches/cosmograph-daytona/">Cosmograph Daytona</a></li>
                                            <li><span className={`${handles.active}`}>m126500ln-0001</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${handles.watch_model_page} ${handles.cosmograph_model}`}>
                        <div className={`${handles.rlx_container_content}`}>
                            <div className={`${handles.content_row}`}>
                                <div className={`${handles.content_column_6}`}>
                                    <div className={`${handles.watch_gallery}`}>
                                        <img
                                            className="lazyload"
                                            data-src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches/cosmograph-daytona/m126500ln-0001/rolex-cosmograph-daytona-m126500ln-0001-at-0-1-1-1.webp"
                                            alt="Rolex Cosmograph Daytona m126500ln-0001"
                                        />
                                    </div>
                                </div>
                                <div className={`${handles.content_column_6}`}>
                                    <div className={`${handles.model_info}`}>
                                        <h1>Cosmograph Daytona</h1>
                                        <h2>Oyster, 40 mm, acero Oystersteel</h2>
                                        <p className={`${handles.description}`}>
                                            El Cosmograph Daytona fue diseñado específicamente para satisfacer las exigencias de los pilotos de carreras profesionales.
                                            Este cronígrafo legendario presenta una legibilidad íptima y una fiabilidad excepcional.
                                        </p>

                                        <div className={`${handles.price_section}`}>
                                            <button
                                                className={`${handles.btn_primary_rlx}`}
                                                onClick={togglePrice}
                                            >
                                                {showPrice ? 'Ocultar precio' : 'Consultar precio'}
                                            </button>
                                            {showPrice && (
                                                <p className={`${handles.price_info}`}>
                                                    Consulte precio y disponibilidad contactíndonos
                                                </p>
                                            )}
                                        </div>

                                        <div className={`${handles.specifications}`}>
                                            <h3>Especificaciones</h3>
                                            <ul>
                                                <li><strong>Modelo:</strong> m126500ln-0001</li>
                                                <li><strong>Caja:</strong> Oyster, 40 mm, acero Oystersteel</li>
                                                <li><strong>Bisel:</strong> Monobloque Cerachrom en cerámica negra</li>
                                                <li><strong>Corona:</strong> Atornillada, sistema Twinlock</li>
                                                <li><strong>Cristal:</strong> Zafiro resistente a rayaduras</li>
                                                <li><strong>Esfera:</strong> Blanca</li>
                                                <li><strong>Pulsera:</strong> Oyster</li>
                                                <li><strong>Movimiento:</strong> Perpetual, mecúnico automático, cronígrafo</li>
                                                <li><strong>Calibre:</strong> 4130</li>
                                                <li><strong>Reserva de marcha:</strong> Aproximadamente 72 horas</li>
                                                <li><strong>Certificaciín:</strong> Cronímetro Superlative</li>
                                                <li><strong>Resistencia al agua:</strong> Impermeable hasta 100 metros</li>
                                                <li><strong>Funciones:</strong> Horas, minutos, pequeños segundos, cronígrafo</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <SectionCosmoGraphD />
                <WatchesForm />
                <RlxExploreMasModels />
                <Footer />
            </div>
        </>
    );
};

export default M126500ln0001; 
