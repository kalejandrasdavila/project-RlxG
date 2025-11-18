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

const Deepsea: React.FC = () => {
    useInitScripts();
    const handles = useCssHandles(CSS_HANDLES);

    useWatchCollectionMeta({
        title: 'Relojes Rolex Deepsea - GLAUSER',
        description: 'Descubra los relojes Rolex Deepsea en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra más en GLAUSER.',
        canonicalUrl: 'https://glauser.myvtex.com/rolex/watches/deepsea/',
        ogImage: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-rolex-deepsea-m136668lb-0001-portrait.webp',
        pageFamilyName: 'deepsea'
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
                                        <a className="active" href="https://glauser.myvtex.com/rolex/watches/deepsea">Deepsea</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </header>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw text-introduccion pb-90-60">
                            <div className="col-lg-2-5">
                                <h1 className="headline50 c-brown-text pb-20">Rolex Deepsea y Deepsea Challenge
                                    Relojes de submarinismo extremos</h1>
                            </div>
                            <div className="col-lg-8-5">
                                <p className="body-20-light"><strong>Los relojes de la gama Deepsea demuestran la pericia de Rolex en materia de hermeticidad y resistencia a la presión submarina.</strong> Símbolos de la larga historia compartida entre la marca y los exploradores de las profundidades, los Oyster Perpetual Rolex Deepsea y Oyster Perpetual Deepsea Challenge son relojes de submarinismo profesionales altamente resistentes. Hermíticos hasta una profundidad de 3900 metros en el Rolex Deepsea, lanzado en 2008, y 11 000 metros en el Deepsea Challenge, presentado en 2022.</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw reloes-componet-2-3">
                            <div className="col-span3-1 col-md-span4-1 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/deepsea/m136668lb-0001/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m136668lb-0001-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m136668lb-0001-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex Deepsea m136668lb-0001 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Rolex Deepsea</p>
                                    <p className="legend-16-light">Oyster, 44 mm, oro amarillo</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-2 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/deepsea/m136660-0005/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m136660-0005-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m136660-0005-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex Deepsea m136660-0005 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Rolex Deepsea</p>
                                    <p className="legend-16-light">Oyster, 44 mm, acero Oystersteel</p>
                                </div>
                            </div>
                            <div className="col-span3-1 col-md-span4-3 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/deepsea/m126067-0002/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126067-0002-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m126067-0002-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" alt="Rolex Deepsea m126067-0002 reloj" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Deepsea Challenge</p>
                                    <p className="legend-16-light">Oyster, 50 mm, titanio RLX</p>
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
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/7tjW72FeUPo" title="Rolex Deepsea" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <h2 className="headline50 c-brown-text pb-20">Oyster Perpetual Rolex Deepsea</h2>
                                <p className="body-20-light pb-30">El Rolex Deepsea responde a las más elevadas exigencias de los submarinistas profesionales en materia de resistencia a la presión submarina, precisión y fiabilidad, al tiempo que hace gala de los cídigos estéticos y las características fundamentales de los relojes Profesionales de la colecciín Oyster Perpetual.</p>
                                <p className="body-20-light">En su lanzamiento, este reloj de buceo profundo inaugurí el sistema Ringlock, una arquitectura de caja inídita que le permite soportar la presión reinante a esa profundidad extrema. Su caja Oyster de 44 mm de diímetro está equipada con una vílvula de helio.</p>
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/deepsea/rolex-deepsea-m136668lb-0001-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/deepsea/rolex-deepsea-m136668lb-0001-landscape.webp" loading="lazy" alt="Rolex Deepsea en oro amarillo" />
                                    </picture>
                                </div>
                                <p className="body-20-light">Rolex Deepsea en acero Oystersteel con esfera negro intenso o D-blue. Presenta un bisel giratorio unidireccional con disco Cerachrom graduado en cerámica negra. En 2024, la marca presentó una versión en oro amarillo de 18 quilates con esfera azul y disco de bisel Cerachrom en cerámica azul.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/deepsea/rolex-deepsea-m136660-0005-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/deepsea/rolex-deepsea-m136660-0005-landscape.webp" loading="lazy" alt="Esfera D-blue" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <div className="pb-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/deepsea/rolex-deepsea-m126067-0001-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/deepsea/rolex-deepsea-m126067-0001-landscape.webp" loading="lazy" alt="Deepsea Challenge" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <h2 className="headline50 c-brown-text pb-20">Oyster Perpetual Deepsea Challenge</h2>
                                <p className="body-20-light pb-30">El Deepsea Challenge reafirma la legitimidad de Rolex como marca pionera en el ímbito de los relojes de buceo profundo y su pericia en materia de hermeticidad y resistencia a la presión submarina.</p>
                                <p className="body-20-light pb-30">Este reloj de 50 mm es una adaptaciín del Rolex Deepsea Challenge, el reloj experimental que acompaíí al director y explorador James Cameron a la fosa de las Marianas en 2012, colocado en el exterior de su sumergible.</p>
                                <p className="body-20-light">Fabricado en titanio RLX, el Deepsea Challenge está disponible con una esfera negro intenso y presenta un bisel giratorio unidireccional con un disco Cerachrom graduado en cerámica negra.</p>
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
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/deepsea/rolex-deepsea-220802-105-wip15-sans-fond-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/deepsea/rolex-deepsea-220802-105-wip15-sans-fond-landscape.webp" loading="lazy" alt="Sistema Ringlock" />
                                    </picture>
                                </div>
                                <h2 className="headline50 c-brown-text pb-20">Sistema Ringlock</h2>
                                <p className="body-20-light pb-30">El sistema Ringlock patentado de Rolex equipa los relojes de submarinismo de la marca pensados para las grandes profundidades, el Rolex Deepsea y el Deepsea Challenge. Este sistema, que viene a ampliar los hallazgos sobre hermeticidad del Oyster, es una arquitectura de caja reforzada que combina un grueso cristal de zafiro ligeramente abombado, una anilla de compresión de alto rendimiento y un fondo de titanio RLX.</p>
                                <p className="body-20-light">La anilla de compresión es de acero enriquecido con nitrígeno en el Rolex Deepsea en acero Oystersteel y en el Deepsea Challenge, mientras que en la versión de oro amarillo de 18 quilates del Rolex Deepsea está fabricada en cerámica azul de alta tecnología, una primicia para este componente.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <div className="pb-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/deepsea/rolex-deepsea-m136660-0006-m136660-0003-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/deepsea/rolex-deepsea-m136660-0006-m136660-0003-landscape.webp" loading="lazy" alt="Vílvula de helio" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center pb-90-60">
                                <p className="headline50 c-brown-text pb-20">Vílvula de helio</p>
                                <p className="body-20-light">La caja Oyster de ambos modelos está, además, equipada con una vílvula de helio, patentada en 1967, que actía como dispositivo de seguridad en los relojes de submarinismo de la marca diseñados para las grandes profundidades. Esta vílvula permite, durante las fases de descompresión en címara hiperbírica íun proceso inherente a las inmersiones profundasí, evacuar el exceso de presión acumulado en la caja sin que la hermeticidad se vea afectada.</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <div className="pb-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/deepsea/rolex-deepsea-wmsuperlativecontrol-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/deepsea/rolex-deepsea-wmsuperlativecontrol-landscape.webp" loading="lazy" alt="Hermeticidad" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">Rigurosos controles de hermeticidad</p>
                                <p className="body-20-light pb-30">En el submarinismo profundo, es esencial una míxima seguridad y fiablidad. La hermeticidad de cada reloj Rolex Deepsea y Deepsea Challenge se pone a prueba con un margen de seguridad del 25 %, tal como exige la norma vigente para este tipo de reloj.</p>
                                <p className="body-20-light pb-30">Por este motivo, las pruebas realizadas someten al Rolex Deepsea, que tiene una garantía de hermeticidad de hasta 3900 metros, a la presión reinante a 4875 metros de profundidad, mientras que al Deepsea Challenge, hermítico hasta 11 000 metros, lo someten a la presión reinante a 13 750 metros de profundidad.</p>
                                <p className="body-20-light">Para estas pruebas, la marca desarrollí una cuba hiperbírica para el Rolex Deepsea y una cuba de ultraalta presión para el Deepsea Challenge junto con COMEX (Compagnie Maritime díExpertise), una empresa francesa de renombre internacional, especializada en ingeniería subacuítica y tecnologías hiperbíricas.</p>
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
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/deepsea/rolex-deepsea-greenseal-2301-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/deepsea/rolex-deepsea-greenseal-2301-landscape.webp" loading="lazy" alt="Certificaciín de Cronímetro Superlativo" />
                                    </picture>
                                </div>
                                <p className="headline50 c-brown-text pb-20">Certificaciín de Cronímetro Superlativo</p>
                                <p className="body-20-light">Como todos los relojes Rolex, la gama Deepsea cuenta con la certificación de Cronímetro Superlativo. Esta denominación atestigua que cada reloj que sale de los talleres de la marca ha superado con éxito una serie de pruebas llevadas a cabo por Rolex en sus laboratorios internos y con arreglo a sus propios criterios. El estatus de Cronímetro Superlativo se simboliza mediante el sello verde y va acompañado de una garantía internacional de cinco años.</p>
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

export default Deepsea;
