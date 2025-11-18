import React, { useState } from "react";
import useInitScripts from '../../../components/hooks/useInitScripts';
import { useWatchCollectionMeta } from '../../../components/hooks/useWatchCollectionMeta';
import RlxExploreMasNModels from "../../../components/parts/RlxExploreMasNModels";
import NavM from "../../../components/parts/NavModels";
import Footer from "../../../components/parts/Footer";
import "../../../main-style.css";

const SkyDweller = () => {
    useInitScripts();
    const [isVisible, setIsVisible] = useState(false);

    useWatchCollectionMeta({
        title: 'Relojes Rolex Sky-Dweller - GLAUSER',
        description: 'Descubra los relojes Rolex Sky-Dweller en línea en GLAUSER, Distribuidor Oficial autorizado para vender relojes Rolex para hombre y para mujer. Descubra más en GLAUSER.',
        canonicalUrl: 'https://glauser.myvtex.com/rolex/watches/sky-dweller/',
        ogImage: 'https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-sky-dweller-m336935-0008-portrait.webp',
        pageFamilyName: 'sky-dweller'
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
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/logo-plecas/Rolex-retailer-plaque-240x120_en.jpg" loading="lazy" />
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
                                        <a className="active" href="https://glauser.myvtex.com/rolex/watches/sky-dweller/">Lady-datejust</a>
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
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/sky-dweller/rolex-sky-dweller-cover-m336935-0008-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/sky-dweller/rolex-sky-dweller-cover-m336935-0008-landscape.webp" loading="lazy" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw text-introduccion pb-90-60">
                            <div className="col-lg-2-5">
                                <h1 className="headline50 c-brown-text pb-20">Rolex Sky-Dweller
                                    Altos vuelos</h1>
                            </div>
                            <div className="col-lg-8-5">
                                <p className="body-20-light"><strong>El Oyster Perpetual Sky-Dweller, elegante y tícnicamente sofisticado, se diseíí para quienes viajan constantemente por el mundo.</strong> Dotado del calendario anual Saros y del sistema Ring Command, indica simultáneamente dos husos horarios, así como la fecha y el mes, y permite ajustarlos con un simple gesto.</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw reloes-componet-2-3">
                            <div className="col-span3-1 col-md-span4-1 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/sky-dweller/m336935-0008/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m336935-0008-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m336935-0008-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Sky-Dweller</p>
                                    <p className="legend-16-light">Oyster, 42 mm, oro Everose</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-2 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/sky-dweller/m336933-0001/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m336933-0001-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m336933-0001-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Sky-Dweller</p>
                                    <p className="legend-16-light">Oyster, 42 mm, acero Oystersteel y oro amarillo</p>
                                </div>
                            </div>
                            <div className="col-span3-1 col-md-span4-3 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/sky-dweller/m336938-0008/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m336938-0008-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m336938-0008-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Sky-Dweller</p>
                                    <p className="legend-16-light">Oyster, 42 mm, oro amarillo</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-1 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/sky-dweller/m336934-0001/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m336934-0001-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m336934-0001-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Sky-Dweller</p>
                                    <p className="legend-16-light">Oyster, 42 mm, acero Oystersteel y oro blanco</p>
                                </div>
                            </div>
                            <div className="col-span3-1 col-md-span4-2 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/sky-dweller/m336239-0002/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m336239-0002-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m336239-0002-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Sky-Dweller</p>
                                    <p className="legend-16-light">Oyster, 42 mm, oro blanco</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-3 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/sky-dweller/m336934-0002/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m336934-0002-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m336934-0002-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Sky-Dweller</p>
                                    <p className="legend-16-light">Oyster, 42 mm, acero Oystersteel y oro blanco</p>
                                </div>
                            </div>
                        </div>
                        <div id="masrelojescargados" className="row-grid-fullw reloes-componet-2-3 d-none-rlx pt-8">
                            <div className="col-span3-1 col-md-span4-1 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/sky-dweller/m336934-0005/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m336934-0005-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m336934-0005-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Sky-Dweller</p>
                                    <p className="legend-16-light">Oyster, 42 mm, acero Oystersteel y oro blanco</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-2 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/sky-dweller/m336934-0006/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m336934-0006-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m336934-0006-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Sky-Dweller</p>
                                    <p className="legend-16-light">Oyster, 42 mm, acero Oystersteel y oro blanco</p>
                                </div>
                            </div>
                            <div className="col-span3-1 col-md-span4-3 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/sky-dweller/m336935-0001/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m336935-0001-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m336935-0001-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Sky-Dweller</p>
                                    <p className="legend-16-light">Oyster, 42 mm, oro Everose</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-1 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/sky-dweller/m336935-0004/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m336935-0004-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m336935-0004-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Sky-Dweller</p>
                                    <p className="legend-16-light">Oyster, 42 mm, oro Everose</p>
                                </div>
                            </div>
                            <div className="col-span3-1 col-md-span4-2 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/sky-dweller/m336935-0005/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m336935-0005-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m336935-0005-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Sky-Dweller</p>
                                    <p className="legend-16-light">Oyster, 42 mm, oro Everose</p>
                                </div>
                            </div>
                            <div className="col-span3-2 col-md-span4-3 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/sky-dweller/m336935-0006/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m336935-0006-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m336935-0006-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Sky-Dweller</p>
                                    <p className="legend-16-light">Oyster, 42 mm, oro Everose</p>
                                </div>
                            </div>
                            <div className="col-span3-1 col-md-span4-1 c-beige-bg">
                                <div className="pt-0-5vh text-center">
                                    <a href="https://glauser.myvtex.com/rolex/watches/sky-dweller/m336938-0007/">
                                        <picture className="rlx-pbanner-top watch-ind p-relative">
                                            <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m336938-0007-drp-upright-bba-with-shadow-portrait.webp" />
                                            <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-models/m336938-0007-drp-upright-bba-with-shadow-landscape.webp" loading="lazy" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="rlx-padding-indv">
                                    <p className="legend-16-bold c-brown-text">Rolex</p>
                                    <p className="body-24-bold c-brown-text pb-5">Sky-Dweller</p>
                                    <p className="legend-16-light">Oyster, 42 mm, oro amarillo</p>
                                </div>
                            </div>
                        </div>

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

                        <div className="row-grid-fullw component-video py-90-60">
                            <div className="col-6-12">
                                <div className="banner-10 rlx-banner-100">
                                    <div className="ratio ratio-16x9">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/SMbMkMSdZME" title="Rolex Sky-Dweller" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">Inmensamente innovador, el Sky-Dweller combina la sofisticaciín mecúnica con una visualización original.</p>
                                <p className="body-20-light">Desde su creación en 2012, el Sky-Dweller se ha dirigido a quienes ven el mundo como un territorio único, sin fronteras. Permite a los viajeros evitar los obstículos de las diferencias horarias e ir siempre un paso por delante.</p>
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
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/sky-dweller/rolex-sky-dweller-m336938-0006-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/sky-dweller/rolex-sky-dweller-m336938-0006-landscape.webp" loading="lazy" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">Segundo huso horario con una simple ojeada</p>
                                <p className="body-20-light">El Sky-Dweller muestra simultáneamente la hora en un segundo huso horario, así como la hora local, que se indica con las agujas centrales. Este segundo huso horario íu hora de referenciaí se indica con un pequeño triángulo fícilmente legible con una silueta roja en un disco giratorio graduado 24 horas. Este disco excíntrico, un elemento característico del modelo, permite distinguir sin equívoco las horas del día de las de la noche: una ventaja valiosa para quienes viajan al otro lado del mundo.</p>
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
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/sky-dweller/rolex-sky-dweller-m336934-0001-m336934-0001-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/sky-dweller/rolex-sky-dweller-m336934-0001-m336934-0001-landscape.webp" loading="lazy" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">Calendario anual innovador e intuitivo</p>
                                <p className="body-20-light pb-30">El calendario anual Saros patentado, especialmente desarrollado para el Sky-Dweller, es un elemento clave en la identidad del modelo. El nombre de este mecanismo, con su innovador diseño, se inspira en el tírmino griego que designa el ciclo de los eclipses lunar y solar.</p>
                                <p className="body-20-light pb-30">El calendario Saros distingue automáticamente los meses de 30 días de los de 31 días. Por tanto, solo necesita un único ajuste manual de la fecha al año, en el paso de febrero a marzo. Es intuitivo y fícil de leer. El mes en curso se indica en rojo en una de las doce ventanas que marcan los índices sobre el contorno de la esfera.</p>
                                <p className="body-20-light">La innovación en relojería se basa en dos relaciones de transmisiín y solo cuatro trenes de ruedas aíadidos al calendario de fecha instantínea de Rolex. Esta estructura elemental confiere al calendario anual Saros una excelente fiabilidad.</p>
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/sky-dweller/rolex-sky-dweller-m336935-0001-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/sky-dweller/rolex-sky-dweller-m336935-0001-landscape.webp" loading="lazy" />
                                    </picture>
                                </div>
                                <p className="headline50 c-brown-text pb-20">Sistema Ring Command: la hora bajo control</p>
                                <p className="body-20-light pb-30">El sistema Ring Command desarrollado por Rolex y patentado es un innovador mecanismo de interacciín entre el bisel giratorio, la corona y el movimiento. Permite seleccionar las distintas funciones del Sky-Dweller de forma fícil, rípida y segura, antes de ajustarlas con la corona.</p>
                                <p className="body-20-light">Girando el bisel estriado en el sentido contrario a las agujas del reloj ícuyo perfil está acentuado para facilitar su manejoí el usuario elige la indicación que desea configurar. Primera muesca: fecha y mes. Segunda muesca: hora local. Tercera muesca: hora de referencia.</p>
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
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/sky-dweller/rolex-sky-dweller-m336938-0008-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/coleccion-rolex/sky-dweller/rolex-sky-dweller-m336938-0008-landscape.webp" loading="lazy" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">Para el verdadero trotamundos</p>
                                <p className="body-20-light">Ya sea un golfista, un navegante o un jinete que da la vuelta al mundo, siempre debe estar preparado, sea cual sea el destino o la distancia recorrida.</p>
                                <p className="body-20-light">El golfista español Jon Rahm, el capitín brasileío Robert Scheidt y el jinete de salto de obstículos estadounidense Kent Farrington están entre los Testimoniales Rolex que han adoptado el Sky-Dweller.</p>
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

export default SkyDweller;

