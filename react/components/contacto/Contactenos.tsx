import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import useInitScripts from '../../components/hooks/useInitScripts';
import Nav from '../parts/Nav';
import RlxExploreMasNModels from '../../components/parts/RlxExploreMas';
import useHorario from '../../components/hooks/ContactoRlx';
import Footer from '../../components/parts/Footer';
import { useCssHandles } from 'vtex.css-handles';
import '../../main-style.css';


const CSS_HANDLES = [
    //HEADER//
    'headercomponent', 'rlx_html', 'home_rlx', 'rlx_menu', 'rlx_container', 'row_grid', 'rlx_logo', 'placa_rolex_logo',
    'breadcrum_page', 'breadcrum_column', 'breadcrum_menu_list', 'description', 'fixed_14', 'active',
    ///c-lightbeige-bg//
    'row_grid_fullw', 'grid_column_full', 'rlx_pbanner_top', 'p_relative', 'rlx_container_content', 'py_90_60', 'text_introduccion',
    'pb_90_60', 'col_lg_8_5', 'col_lg_2_5', 'headline50', 'c_brown_text', 'pb_20', 'body_20_light', 'component_video', 'col_6_12',
    'headline36', 'component_2_col', 'fixed_16', 'btn_label_icon_rlx', 'component_3_col', 'col_span_2_1', 'col_6_2', 'body_24_bold',
    'legend_16_light', 'col_span_2_2', 'col_6_6', 'col_6_10', 'col_lg_2_6', 'component_3_col_2', 'pb_30', 'mapa_and_detail',
    'col_span_6_8_1', 'col_span_6_4_2', 'c_white_bg', 'info_detail', 'parrafos_rolex', 'address_store', 'mb_20_30',
    'rolex_retailer_openinghours', 'is_open2', 'rolex_retailer_openinghours_summary', 'c_rolex_green_text', 'social_links_rolex',
    'fas', 'text_mapita',
    // Missing handles
    'headline30'
] as const

interface Horario {
    horario: string;
    isOpen: boolean;
    toggleHorario: () => void;
}

const Contactenos: React.FC = () => {
    useInitScripts();

    const { horario, isOpen, toggleHorario }: Horario = useHorario();
    const handles = useCssHandles(CSS_HANDLES)

    return (
        <>
            <Helmet>
                <title>Contacto GLAUSER en Colombia - Distribuidor Oficial Rolex</title>
                <meta
                    name="description"
                    content="Contacto GLAUSER en Colombia, su Distribuidor Oficial Rolex. Programe una cita o envíenos un mensaje para responder a todas sus dudas sobre Rolex y los servicios ofrecidos."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://glauser.myvtex.com/files/style.min.css"
                />
                <link rel="stylesheet preload" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
                <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

                <link rel="canonical" href="https://glauser.myvtex.com/rolex/contactenos/" />

                <meta property="og:url" content="https://glauser.myvtex.com/rolex/contactenos/" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Contacto GLAUSER en Colombia - Distribuidor Oficial Rolex"
                />
                <meta
                    property="og:description"
                    content="Contacto GLAUSER en Colombia, su Distribuidor Oficial Rolex. Programe una cita o envíenos un mensaje para responder a todas sus dudas sobre Rolex y los servicios ofrecidos."
                />
                <meta
                    property="og:image"
                    content="https://glauser.vteximg.com.br/arquivos/contacto-glauser-rolex-1200x630.jpg"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@glauser_col" />
                <meta name="twitter:title" content="Contacto GLAUSER en Colombia - Distribuidor Oficial Rolex" />
                <meta name="twitter:description" content="Contacto GLAUSER en Colombia, su Distribuidor Oficial Rolex. Programe una cita o envíenos un mensaje para responder a todas sus dudas sobre Rolex y los servicios ofrecidos." />
                <meta name="twitter:image" content="https://glauser.vteximg.com.br/arquivos/contacto-glauser-rolex-1200x630.jpg" />
            </Helmet>
            <div className={`${handles.headercomponent}`}>
                <header className="main-header" id="main-header">
                </header>
            </div>

            <main id="rlx-html" className={`${handles.rlx_html} ${handles.home_rlx}`}>
                <header id="rlx-menu" className={`${handles.rlx_menu}`}>
                    <div className={`${handles.rlx_container}`}>
                        <div className={`${handles.row_grid}`}>
                            <div className={`${handles.rlx_logo}`}>
                                <a href="https://glauser.myvtex.com/rolex/" aria-label="Inicio" title="Inicio">
                                    <picture className={`${handles.placa_rolex_logo}`}>
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/logo-plecas/Rolex-retailer-plaque-240x120_en.jpg"
                                        />
                                        <img
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/logo-plecas/Rolex-retailer-plaque-240x120_en.jpg"
                                            loading="lazy"
                                            alt="placa distribuidor oficial rolex"
                                        />
                                    </picture>
                                </a>
                            </div>
                            <Nav />
                        </div>

                        <div className={`${handles.row_grid} ${handles.breadcrum_page}`} style={{ height: "40px" }}>
                            <div className={`${handles.breadcrum_column}`}>
                                <ul className={`${handles.breadcrum_menu_list} ${handles.description}`}>
                                    <li className={`${handles.fixed_14}`}>
                                        <a href="https://glauser.myvtex.com/rolex/coleccion-rolex/">
                                            Relojes Rolex
                                        </a>
                                    </li>
                                    <li className={`${handles.fixed_14} ${handles.active}`}>
                                        <a className={`${handles.active}`} href="https://glauser.myvtex.com/rolex/contactenos/">Póngase en contacto con nosotros</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className={`${handles.row_grid_fullw}`}>
                            <div className={`${handles.grid_column_full}`}>
                                <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/contacto/rolex-contact-cover-portrait.webp"
                                    />
                                    <img
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/contacto/rolex-contact-cover-landscape.webp"
                                        loading="lazy"
                                        alt="contacto"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className={`${handles.rlx_container_content} ${handles.py_90_60}`}>
                        <div className={`${handles.row_grid_fullw} ${handles.text_introduccion} ${handles.pb_90_60}`}>
                            <div className={`${handles.col_lg_2_5}`}>
                                <h1 className={`${handles.headline50} ${handles.c_brown_text} ${handles.pb_20}`}>
                                    Contacto GLAUSER en Colombia, su Distribuidor Oficial Rolex
                                </h1>
                            </div>
                            <div className={`${handles.col_lg_8_5}`}>
                                <p className={`${handles.body_20_light} ${handles.pb_30}`}>
                                    <strong>
                                        Gracias al conocimiento, la destreza y el equipo necesarios para
                                        darle el mejor servicio, podemos garantizar la autenticidad de todas
                                        y cada una de las piezas de su Rolex.
                                    </strong>{" "}
                                    Déjenos ayudarle a tomar una decisión que durará toda la vida o a dar
                                    respuesta a sus consultas. Le rogamos que nos proporcione sus datos y
                                    su forma de contacto deseada, le responderemos lo más pronto posible.
                                </p>
                                <a
                                    className={`${handles.btn_label_icon_rlx}`}
                                    href="https://glauser.myvtex.com/rolex/contactenos/enviar-mensaje/">
                                    Envíenos un mensaje
                                    <svg
                                        aria-hidden="true"
                                        fill="white"
                                        height="12"
                                        role="img"
                                        viewBox="0 0 15 15"
                                        width="12"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.7,7.5l-1.4,1.4l-5.7,5.7l-1.4-1.4l5.7-5.7L3.3,1.9l1.4-1.4l5.7,5.7l0,0L11.7,7.5z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className={`${handles.row_grid_fullw} ${handles.mapa_and_detail} ${handles.component_video}`}>
                            <div className={`${handles.col_span_6_8_1}`}>
                                <div id="mapssssss">
                                    <div>
                                        <iframe
                                            allowFullScreen
                                            className="gmap-google"
                                            loading="lazy"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11401.967090046808!2d-74.82355390810059!3d11.005367416503613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42c4d4b013871%3A0x9e7d19df67c28c32!2sJoyerias%20Glauser%20-%20Rolex%20Official%20Retailer!5e0!3m2!1ses!2smx!4v1636248698538!5m2!1ses!2smx"
                                            style={{
                                                border: "0",
                                                width: "100%",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={`${handles.col_span_6_4_2} ${handles.c_white_bg}`}>
                                <div className={`${handles.info_detail}`}>
                                    <div className="mx-auto-rolex">
                                        <p className={`${handles.legend_16_light} ${handles.c_brown_text} `}>
                                            Distribuidor Oficial Rolex
                                        </p>
                                        <h2 className={`${handles.headline30} ${handles.c_brown_text} `}>
                                            GLAUSER JOYERÍA Y RELOJERÍA
                                        </h2>
                                        <address className={`${handles.parrafos_rolex} ${handles.address_store} ${handles.mb_20_30} `}>
                                            <span className={`${handles.fixed_16}`}>
                                                Cl. 98 #52-115, Centro Comercial Buenavista I Local 126-127
                                            </span>
                                            <span className={`${handles.fixed_16}`}>Barranquilla</span>
                                            <span className={`${handles.fixed_16}`}>110111</span>
                                            <span className={`${handles.fixed_16}`}>Atlántico, Colombia</span>
                                        </address>
                                        <div className={`${handles.rolex_retailer_openinghours} ${isOpen ? `${handles.is_open2}` : ""}`}>
                                            <div
                                                className={`${handles.rolex_retailer_openinghours_summary}`}
                                                onClick={toggleHorario}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <strong className={`${handles.fixed_16}`} id="mensaje">
                                                    Abierto
                                                </strong>
                                                <span className={`${handles.legend_16_light} ${handles.c_rolex_green_text}`} id="horarolex">
                                                    {horario}
                                                </span>
                                            </div>
                                            {isOpen && (
                                                <table>
                                                    <tbody>
                                                        <tr className="close-table" data-day-id="1">
                                                            <th>Lun</th>
                                                            <td>10:00am - 08:00pm</td>
                                                        </tr>
                                                        <tr data-day-id="2">
                                                            <th>Mar</th>
                                                            <td>10:00am - 08:00pm</td>
                                                        </tr>
                                                        <tr data-day-id="3">
                                                            <th>Mié</th>
                                                            <td>10:00am - 08:00pm</td>
                                                        </tr>
                                                        <tr data-day-id="4">
                                                            <th>Jue</th>
                                                            <td>10:00am - 08:00pm</td>
                                                        </tr>
                                                        <tr data-day-id="5">
                                                            <th>Vie</th>
                                                            <td>10:00am - 08:00pm</td>
                                                        </tr>
                                                        <tr data-day-id="6">
                                                            <th>Sáb</th>
                                                            <td>10:00am - 08:00pm</td>
                                                        </tr>
                                                        <tr data-day-id="0">
                                                            <th>Dom</th>
                                                            <td>11:00am - 04:00pm</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            )}
                                        </div>
                                        <div className={`${handles.social_links_rolex}`}>
                                            <a
                                                className="social-link button-label"
                                                href="tel:+57 313 2841334"
                                                onClick={() => window._satellite?.track?.('contactCall')}
                                                rel="noopener"
                                                target="_blank">
                                                <i className={`${handles.fas}`}>
                                                    <svg
                                                        height="36px"
                                                        version="1.1"
                                                        viewBox="0 0 36 36"
                                                        width="36px"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink">
                                                        <g
                                                            fill="none"
                                                            fillRule="evenodd"
                                                            id="phone-default"
                                                            stroke="none"
                                                            strokeWidth="1">
                                                            <circle cx="18" cy="18" fill="#F9F7F4" id="Oval" r="18" />
                                                            <path
                                                                d="M15.9763138,16.3148829 L15.9229709,16.3348865 C16.2830355,17.6017807 17.0098327,19.0620429 18.4300877,20.3889478 L18.5367735,20.2955977 C19.0902062,19.8088437 19.9103535,19.7088257 20.3704361,20.0755582 L21.1772477,20.7890197 C21.6239946,21.1490843 21.6106588,21.7891993 21.0905654,22.2826212 C20.8105152,22.6093465 18.8034881,24.6630486 15.76961,19.8821902 C12.5890389,14.841285 14.5027158,13.4610372 15.329531,13.1143082 C15.3428667,13.1076404 15.3562024,13.1076404 15.3695382,13.1009725 C15.3895417,13.0943046 15.4162132,13.0876368 15.4362168,13.0743011 C15.4428847,13.0743011 15.4562204,13.0676332 15.4628882,13.0676332 C15.5829098,13.027626 15.6562563,13.0142903 15.6562563,13.0142903 C15.6562563,13.0142903 15.6562563,13.0142903 15.6562563,13.0209581 C16.2030211,12.9209402 16.649768,13.1876547 16.8164646,13.6344016 C16.8164646,13.6344016 17.5699333,15.9014754 15.9763138,16.3148829 Z"
                                                                fill="#452C1E"
                                                                fillRule="nonzero"
                                                                id="Path"
                                                            />
                                                        </g>
                                                    </svg>
                                                </i>
                                                <span className={`${handles.text_mapita}`}>+57 313 2841334</span>
                                            </a>
                                            <a
                                                className="social-link button-label"
                                                href="https://wa.me/573132841334?text=Hola%20GLAUSER%20Joyerías%20quisiera%20mas%20informaci%C3%B3n"
                                                onClick={() => window._satellite?.track?.('whatsappContact')}
                                                rel="noopener"
                                                target="_blank">
                                                <i className={`${handles.fas}`}>
                                                    <svg
                                                        height="36px"
                                                        version="1.1"
                                                        viewBox="0 0 36 36"
                                                        width="36px"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink">
                                                        <g
                                                            fill="none"
                                                            fillRule="evenodd"
                                                            id="whatsapp-default"
                                                            stroke="none"
                                                            strokeWidth="1">
                                                            <circle cx="18" cy="18" fill="#F9F7F4" id="Oval" r="18" />
                                                            <g
                                                                fill="#452C1E"
                                                                fillRule="nonzero"
                                                                id="whatsapp"
                                                                transform="translate(13, 13)">
                                                                <path
                                                                    d="M7.55395683,6.11510791 L15.9229709,16.3348865 C16.2830355,17.6017807 17.0098327,19.0620429 18.4300877,20.3889478 L18.5367735,20.2955977 C19.0902062,19.8088437 19.9103535,19.7088257 20.3704361,20.0755582 L21.1772477,20.7890197 C21.6239946,21.1490843 21.6106588,21.7891993 21.0905654,22.2826212 C20.8105152,22.6093465 18.8034881,24.6630486 15.76961,19.8821902 C12.5890389,14.841285 14.5027158,13.4610372 15.329531,13.1143082 C15.3428667,13.1076404 15.3562024,13.1076404 15.3695382,13.1009725 C15.3895417,13.0943046 15.4162132,13.0876368 15.4362168,13.0743011 C15.4428847,13.0743011 15.4562204,13.0676332 15.4628882,13.0676332 C15.5829098,13.027626 15.6562563,13.0142903 15.6562563,13.0142903 C15.6562563,13.0142903 15.6562563,13.0142903 15.6562563,13.0209581 C16.2030211,12.9209402 16.649768,13.1876547 16.8164646,13.6344016 C16.8164646,13.6344016 17.5699333,15.9014754 15.9763138,16.3148829 Z M10,4.96402878 C10,7.69784173 7.76978417,9.92805755 5.03597122,9.92805755 C4.24460432,9.92805755 3.38129496,9.71223022 2.6618705,9.35251799 L0,10 L0.71942446,7.3381295 C0.287769784,6.61870504 0.071942446,5.75539568 0.071942446,4.96402878 C0.071942446,2.23021583 2.30215827,0 5.03597122,0 C7.76978417,0 10,2.23021583 10,4.96402878 Z M9.0647482,4.89208633 C9.0647482,2.6618705 7.26618705,0.863309353 5.03597122,0.863309353 C2.8057554,0.863309353 1.00719424,2.6618705 1.00719424,4.89208633 C1.00719424,5.61151079 1.22302158,6.33093525 1.58273381,6.97841727 L1.65467626,7.12230216 L1.22302158,8.63309353 L2.8057554,8.27338129 L2.94964029,8.34532374 C3.66906475,8.70503597 4.31654676,8.92086331 5.03597122,8.92086331 C7.26618705,8.92086331 9.0647482,7.12230216 9.0647482,4.89208633 Z"
                                                                    id="Shape"
                                                                />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </i>
                                                <span className={`${handles.text_mapita}`}>WhatsApp</span>
                                            </a>
                                            <a
                                                className="social-link button-label"
                                                href="https://www.google.com/maps/dir//Joyerias+Glauser+-+Rolex+Official+Retailer,+Cl.+98+%2352-115+Centro+Comercial+Buenavista+I+Local+126-127,+Barranquilla,+Atl%C3%A1ntico,+Colombia/@11.008281,-74.821372,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8ef42c4d4b013871:0x9e7d19df67c28c32!2m2!1d-74.8213718!2d11.0082806?hl=es" // This is already a valid URL
                                                onClick={() => window._satellite?.track?.('getDirections')}
                                                rel="noopener"
                                                target="_blank">
                                                <i className={`${handles.fas}`}>
                                                    <svg
                                                        height="36px"
                                                        version="1.1"
                                                        viewBox="0 0 36 36"
                                                        width="36px"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink">
                                                        <g
                                                            fill="none"
                                                            fillRule="evenodd"
                                                            id="get-direction-default"
                                                            stroke="none"
                                                            strokeWidth="1">
                                                            <circle cx="18" cy="18" fill="#F9F7F4" id="Oval" r="18" />
                                                            <g
                                                                fill="#452C1E"
                                                                fillRule="nonzero"
                                                                id="icons/plus"
                                                                transform="translate(13, 13)">
                                                                <g id="location" transform="translate(0, -0)">
                                                                    <polygon
                                                                        id="Path"
                                                                        points="0 5.84666667 10 0 4.90666667 10 3.58666667 6.60666667"
                                                                    />
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </i>
                                                <span className={`${handles.text_mapita}`}>Cómo llegar</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <RlxExploreMasNModels />
                <Footer />
            </main>
        </>
    );
};

export default Contactenos;
