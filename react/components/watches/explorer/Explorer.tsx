import React from "react";
import useInitScripts from '../../../components/hooks/useInitScripts';
import { useCssHandles } from 'vtex.css-handles';
import { useWatchCollectionMeta } from '../../../components/hooks/useWatchCollectionMeta';
import "../../../main-style.css";
import RlxExploreMasNModels from "../../../components/parts/RlxExploreMasNModels";
import NavM from "../../../components/parts/NavModels";
import Footer from "../../../components/parts/Footer";

const CSS_HANDLES = [
    'container', 'wrapper', 'content', 'section', 'title', 'subtitle',
    'model_grid', 'model_card', 'image_container', 'description',
    'price_section', 'button_container', 'explore_section'
] as const;

const Explorer: React.FC = () => {
    useInitScripts();
    const handles = useCssHandles(CSS_HANDLES);

    useWatchCollectionMeta({
        title: 'Relojes Rolex Explorer - GLAUSER',
        description: 'Descubra los relojes Rolex Explorer en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra más en GLAUSER.',
        canonicalUrl: 'https://glauser.myvtex.com/rolex/watches/explorer/',
        ogImage: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-explorer-m224270-0001-portrait.webp',
        pageFamilyName: 'explorer'
    });

    return (
        <>
            <div className="header-component">
                {/*<vtex:template id="HeaderPromotion" />
                                    <vtex:template id="GLHeader" />*/ }
                <header className="main-header" id="main-header">
                    {/*<vtex:template id="MainNav" />*/}
                </header>
            </div>

            <main id="rlx-html">
                <header id="rlx-menu" className="rlx-menu">
                    <div className="rlx-container">
                        <div className="row-grid">
                            <div className="rlx-logo">
                                <a href="https://glauser.myvtex.com/rolex/" aria-label="Inicio" title="Inicio">
                                    <picture className="placa-rolex-logo">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/logo-plecas/Rolex-retailer-plaque-240x120_en.jpg" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/logo-plecas/Rolex-retailer-plaque-240x120_en.jpg" loading="lazy" alt="placa distribuidor oficial rolex" />
                                    </picture>
                                </a>
                            </div>

                            <NavM />
                        </div>
                        <div className="row-grid breadcrum-page" style={{ height: "40px" }}>
                            <div className="breadcrum-column">
                                <ul className="breadcrum-menu-list description">
                                    <li className="fixed-14 none-mobil">
                                        <a href="https://glauser.myvtex.com/rolex/">Rolex</a>
                                    </li>
                                    <li className="fixed-14">
                                        <a href="https://glauser.myvtex.com/rolex/coleccion-rolex/">Relojes Rolex</a>
                                    </li>
                                    <li className="fixed-14 none-mobil active">
                                        <a className="active" href="https://glauser.myvtex.com/rolex/watches/explorer/">Explorer</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </header>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/explorer/rolex-explorer-cover-m226570-0001-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/explorer/rolex-explorer-cover-m226570-0001-landscape.webp" loading="lazy" alt="Explorer" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw text-introduccion pb-90-60">
                            <div className="col-lg-2-5">
                                <h1 className="headline50 c-brown-text pb-20">Rolex Explorer
                                    La grandeza de la aventura</h1>
                            </div>
                            <div className="col-lg-8-5">
                                <p className="body-20-light"><strong>El Oyster Perpetual Explorer y Oyster Perpetual Explorer II provienen de la implicaciín de Rolex en la exploraciín. Llegan donde pocos se atreven.</strong> La marca ha estado equipando con estos relojes a exploradores polares, alpinistas y espeleílogos, para que puedan probarlos en situaciones reales. Algunos de los exploradores, alpinistas y científicos más intrípidos del mundo han llevado a estos relojes a lugares que han puesto a prueba su fiabilidad en condiciones extremas.</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw reloes-componet-2-3">
                            <div className="col-span3-1 col-md-span4-1 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/explorer/m226570-0001/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m226570-0001-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m226570-0001-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex Explorer m226570-0001 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Explorer II</p>
                                    <p className="legend-16-light">Oyster, 42 mm, acero Oystersteel</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-2 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/explorer/m124270-0001/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m124270-0001-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m124270-0001-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex Explorer m124270-0001 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Explorer 36</p>
                                    <p className="legend-16-light">Oyster, 36 mm, acero Oystersteel</p>
                                </div>
                            </div>
                            <div className="col-span3-1 col-md-span4-3 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/explorer/m224270-0001/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m224270-0001-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m224270-0001-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex Explorer m224270-0001 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Explorer 40</p>
                                    <p className="legend-16-light">Oyster, 40 mm, acero Oystersteel</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-1 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/explorer/m226570-0002/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m226570-0002-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m226570-0002-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex Explorer m226570-0002 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Explorer II</p>
                                    <p className="legend-16-light">Oyster, 42 mm, acero Oystersteel</p>
                                </div>
                            </div>
                        </div>
                        <div id="masrelojescargados" className="row-grid-fullw reloes-componet-2-3 d-none-rlx pt-8" style={{ display: "none", }}>

                        </div>
                        {/*
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center text-center pt-30-40">
                                <button id="rlx-more-watches"
                                    className="btn-primary-rlx"
                                    onClick={() => setIsVisible(!isVisible)}
                                >
                                    {isVisible ? "Mostrar menos" : "Descubra más"}
                                </button>
                            </div>
                        </div>
                        */}
                        <div className="row-grid-fullw component-video py-90-60">
                            <div className="col-6-12">
                                <div className="banner-10 rlx-banner-100">
                                    <div className="ratio ratio-16x9">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/9zj58htwY9I" title="Rolex Explorer" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">Los relojes Explorer y Explorer II, legibles y duraderos, están diseñados para acompaíar a aquellos que superan los límites del conocimiento humano</p>
                                <p className="body-20-light">Desde los años 1930, Rolex comenzí a equipar con relojes Oyster Perpetual numerosas expediciones. Las valoraciones que ha recibido sirvieron para desarrollar lo que se conoce como la categoría de relojes Profesionales que podían ser utilizados como herramientas: modelos como el Explorer y el Explorer II. Los relojes Rolex han formado parte de algunas de las grandes aventuras de la humanidad. Una de esas aventuras fue la expediciín al Everest en 1953, liderada por sir John Hunt, en la que sir Edmund Hillary y Tenzing Norgay se convirtieron en los primeros en llegar a la cumbre de la montaña más alta del mundo.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-beige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <div className="pb-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/explorer/rolex-explorer-m226570-0001-m224270-0001-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/explorer/rolex-explorer-m226570-0001-m224270-0001-landscape.webp" loading="lazy" alt="Explorer" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">Diseíado para la exploraciín</p>
                                <p className="body-20-light pb-30">Presentado en 1953, el Explorer destaca por su diseño sencillo y su fícilmente legible esfera negra con nímeros 3, 6 y 9 característicos e indicadores de gran tamaño. Es un reloj-herramienta creado para marcar el tiempo bajo cualquier condiciín. Incluso en la oscuridad, su esfera permanece perfectamente legible gracias a la visualización Chromalight. Actualmente, el Explorer está disponible en 36 mm de diímetro íel mismo tamaño que el modelo original de 1953í así como en 40 mm de diímetro.</p>
                                <p className="body-20-light">El Explorer II, lanzado en 1971, mantiene el mismo espíritu que el Explorer: perpetuar la privilegiada relaciín entre Rolex y la exploraciín. Gracias a su visualización 24 horas constituida por una aguja adicional naranja y un bisel grabado, el Explorer II permite distinguir sin equívoco las horas del día de las de la noche —una opciín ítil en lugares donde resulta difícil distinguir el día de la noche, como en las regiones polares en algunas épocas del año, o en las cuevasí o bien mostrar la hora de un segundo huso horario.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">Soportar las condiciones más extremas</p>
                                <p className="body-20-light">Los relojes de la gama Explorer no han dejado de evolucionar para satisfacer de la mejor manera posible las necesidades de los exploradores. Cada vez más robustos. Cada vez más fiables. El Explorer 36 está disponible en acero Oystersteel o en versión Rolesor amarillo (combinación de acero Oystersteel y oro amarillo) mientras que el Explorer 40 y el Explorer II están fabricados exclusivamente en acero Oystersteel. Especialmente desarrollado para Rolex, el acero Oystersteel es una aleaciín única con excelentes propiedades anticorrosiín.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/explorer/rolex-explorer-m124273-0001-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/explorer/rolex-explorer-m124273-0001-landscape.webp" loading="lazy" alt="Explorer" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="body-20-light pb-30">Los tres modelos están equipados con un brazalete Oyster, un brazalete de tres elementos que destaca por su robustez. Equipado con un cierre de seguridad desplegable Oysterlock, diseñado y patentado por Rolex, que previene cualquier apertura involuntaria, también dispone del címodo sistema de extensiín rípida Easylink, desarrollado por la marca, que permite ajustar fícilmente su longitud en torno a unos 5 mm.</p>
                                <p className="body-20-light">El Explorer 36 y el Explorer 40 están equipados con el calibre 3230 y el Explorer II presenta el calibre 3285. Ambos son movimientos mecúnicos de cuerda automática completamente desarrollados y manufacturados por Rolex. Poseen una reserva de marcha de aproximadamente 70 horas.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-beige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div className="pb-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/explorer/rolex-explorer-greenseal-2301-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/explorer/rolex-explorer-greenseal-2301-landscape.webp" loading="lazy" alt="Certificaciín de Cronímetro Superlativo" />
                                    </picture>
                                </div>
                                <p className="headline50 c-brown-text pb-20">Certificaciín de Cronímetro Superlativo</p>
                                <p className="body-20-light">Como todos los relojes Rolex, el Explorer y el Explorer II cuentan con la certificación de Cronímetro Superlativo. Esta denominación atestigua que cada reloj que sale de los talleres de la marca ha superado con éxito una serie de pruebas llevadas a cabo por Rolex en sus laboratorios internos y con arreglo a sus propios criterios. El estatus de Cronímetro Superlativo se simboliza mediante el sello verde que incluyen todos los relojes Rolex y que va acompañado de una garantía internacional de cinco años.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <RlxExploreMasNModels />
                <Footer />
            </main>
        </>
    );

}

export default Explorer;
