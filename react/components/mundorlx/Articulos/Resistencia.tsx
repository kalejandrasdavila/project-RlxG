import React from "react";
import { Helmet } from "react-helmet-async";
import useInitScripts from '../../hooks/useInitScripts';
import RlxExploreMasNModels from "../../parts/RlxExploreMas";
import NavM from "../../parts/NavModels";
import Footer from '../../parts/Footer';
import '../../../main-style.css';


const Resistencia: React.FC = () => {
    useInitScripts();

    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://devjhernandez--glauser.myvtex.com/rolex/mundo-rolex/resistencia/';
    const baseUrl = 'https://devjhernandez--glauser.myvtex.com'; // La URL base 

    return (
        <>
            <Helmet>
                <title>Rolex y el automovilismo - Carreras de resistencia - GLAUSER</title>
                <meta
                    name="description"
                    content="Rolex es un ilustre socio de los legendarios campeonatos de resistencia, los eventos más emblemáticos y los nombres más destacados del automovilismo"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://devjhernandez--glauser.myvtex.com/files/style.min.css"
                />
                <link rel="stylesheet" type="text/css" href="https://glauser.vteximg.com.br/arquivos/style-rolex-general-glauser.css" />
                <link rel="stylesheet preload" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />


                {/* URLs CANÓNICAS Y DE REDES SOCIALES */}
                <link rel="canonical" href={currentUrl} />

                {/* Facebook Meta Tags */}
                <meta property="og:url" content={currentUrl} />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Rolex y el automovilismo - Carreras de resistencia - GLAUSER"
                />
                <meta
                    property="og:description"
                    content="Rolex es un ilustre socio de los legendarios campeonatos de resistencia, los eventos más emblemáticos y los nombres más destacados del automovilismo"
                />
                <meta
                    property="og:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/resistencia/rolex-endurance-lemans24-lemans20-landscape.webp"
                />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={currentUrl} />
                <meta
                    name="twitter:title"
                    content="Rolex y el automovilismo - Carreras de resistencia - GLAUSER"
                />
                <meta
                    name="twitter:description"
                    content="Rolex es un ilustre socio de los legendarios campeonatos de resistencia, los eventos más emblemáticos y los nombres más destacados del automovilismo"
                />
                <meta
                    name="twitter:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/resistencia/rolex-endurance-lemans24-lemans20-landscape.webp"
                />

                {/* Scripts JSON-LD y DataLayer */}
                <script type="text/javascript">
                    {`
                        var digitalDataLayer = {
                            environment: {
                                environmentVersion: "V7",
                                coBrandedVersion: "Bespoke",
                            },
                            page: {
                                pageType: "article page"
                            },
                        };
                    `}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Organization",
                                "@id": `${baseUrl}/#organization`,
                                "name": "Joyería Glauser",
                                "url": `${baseUrl}/`,
                                "sameAs": ["https://www.facebook.com/JoyeriaGlauser/", "https://www.instagram.com/joyeriaglauser/?hl=es-la"],
                                "logo": {
                                    "@type": "ImageObject",
                                    "@id": `${baseUrl}/#logo`,
                                    "inLanguage": "es-CO",
                                    "url": "https://glauser.vteximg.com.br/arquivos/glauser_logo.svg",
                                    "contentUrl": "https://glauser.vteximg.com.br/arquivos/glauser_logo.svg",
                                    "width": 300,
                                    "height": 102,
                                    "caption": "Joyería Glauser"
                                },
                                "image": { "@id": `${baseUrl}/#logo` }
                            },
                            {
                                "@type": "WebPage",
                                "@id": `${currentUrl}#webpage`,
                                "url": currentUrl,
                                "name": "Rolex y el automovilismo - Carreras de resistencia - GLAUSER",
                                "isPartOf": { "@id": `${baseUrl}/#website` },
                                "datePublished": "2025-06-05T05:23:53+00:00",
                                "dateModified": "2025-06-05T05:23:53+00:00",
                                "description": "Rolex es un ilustre socio de los legendarios campeonatos de resistencia, los eventos más emblemáticos y los nombres más destacados del automovilismo",
                                "breadcrumb": { "@id": `${currentUrl}#breadcrumb` },
                                "inLanguage": "es-Es",
                                "potentialAction": { "@type": "ReadAction", "target": currentUrl }
                            }
                        ]
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [{
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Rolex GLAUSER",
                            "item": `${baseUrl}/rolex/`
                        }, {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Mundo Rolex",
                            "item": `${baseUrl}/rolex/mundo-rolex/`
                        }, {
                            "@type": "ListItem",
                            "position": 3,
                            "name": "Resistencia"
                        }]
                    })}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "http://schema.org",
                        "@type": "NewsArticle",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": currentUrl
                        },
                        "headline": "Rolex y el automovilismo - Carreras de resistencia - GLAUSER",
                        "image": {
                            "@type": "ImageObject",
                            "url": "https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/resistencia/rolex-endurance-lemans24-lemans20-landscape.webp",
                            "height": "2000",
                            "width": "1150"
                        },
                        "datePublished": "2025-06-05T05:23:53+00:00",
                        "dateModified": "2025-06-05T05:23:53+00:00",
                        "articleSection": "Mundo Rolex",
                        "author": {
                            "@type": "Organization",
                            "name": "GLAUSER",
                            "url": `${baseUrl}/`
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "GLAUSER",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://glauser.vteximg.com.br/arquivos/glauser_logo.svg",
                                "width": "300",
                                "height": "102"
                            }
                        },
                        "description": "Rolex es un ilustre socio de los legendarios campeonatos de resistencia, los eventos más emblemáticos y los nombres más destacados del automovilismo"
                    })}
                </script>

            </Helmet>
            <div className="header-component">
                <header className="main-header" id="main-header">
                </header>
            </div>

            <main id="rlx-html">
                <header id="rlx-menu" className="rlx-menu">
                    <div className="rlx-container">
                        <div className="row-grid">
                            <div className="rlx-logo">
                                <a href="/rolex/" aria-label="Inicio" title="Inicio">
                                    <picture className="placa-rolex-logo">
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
                            <NavM />
                        </div>

                        <div className="row-grid breadcrum-page" style={{ height: "40px" }}>
                            <div className="breadcrum-column">
                                <ul className="breadcrum-menu-list description">
                                    <li className="fixed-14">
                                        <a href="/rolex/">Rolex</a>
                                    </li>
                                    <li className="fixed-14">
                                        <a href="/rolex/mundo-rolex/">Mundo Rolex</a>
                                    </li>
                                    <li className="fixed-14 active none-mobil">
                                        <a className="active" href="/rolex/mundo-rolex/resistencia/">Resistencia</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <h1 className="headline50 c-brown-text pb-20">Superar los límites Hasta el último segundo</h1>
                                <p className="body-24-bold pb-30">Dominar el poder de la mecánica para desafiar las leyes del tiempo. Controlar el riesgo para determinar la trayectoria ideal. Hasta la victoria. Rolex es un ilustre socio de los legendarios campeonatos de resistencia, los eventos más emblemáticos y los nombres más destacados del automovilismo.</p>
                                <p className="body-20-light">Publicado el 05 de junio de 2025</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-video py-90-60">
                            <div className="col-6-12">
                                <div className="banner-10 rlx-banner-100">
                                    <div className="ratio ratio-16x9">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/fMJ_jE_0A0A" title="Rolex Resistencia" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <h2 className="headline50 c-brown-text pb-20">Amanece un nuevo día</h2>
                                <p className="body-20-light">Las 24 Horas de Le Mans celebran la resistencia y la excelencia del automovilismo. A medida que cae la noche en el icónico Circuit de la Sarthe, la carrera va más allá de la habilidad y la resiliencia de cada piloto. Inaugurada en 1923, en su primera edición participaron 33 equipos de dos pilotos. En la actualidad, más de 60 coches con tres pilotos se esfuerzan por alcanzar el ascenso, mientras los grandes fabricantes y equipos privados muestran su pericia tecnológica. Desde 2001, Rolex es el ilustre Patrocinador Exclusivo y Reloj Oficial de este impresionante reto, que celebra los esfuerzos de los pilotos en su búsqueda del logro supremo que es terminar primero.</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/resistencia/rolex-endurance-lemans24-lemans20-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/resistencia/rolex-endurance-lemans24-lemans20-landscape.webp" loading="lazy" alt="Le Mans" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div className="pb-90-60">
                                    <h2 className="headline50 c-brown-text pb-20">Rolex 24 At DAYTONA, circuito legendario, carrera épica</h2>
                                    <p className="body-20-light">En el Daytona International Speedway de 5,73 kilómetros en Florida, los mejores pilotos y equipos de resistencia compiten durante 24 horas. Solo los temperamentos más fuertes y las mejores prestaciones mecánicas y técnicas pueden prevalecer. Las clasificaciones se basan en la distancia recorrida dentro del tiempo asignado. Rolex es Sponsor Oficial y Reloj Oficial del evento desde 1992.</p>
                                </div>
                                <div className="pb-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/resistencia/rolex-endurance-dayt25zs-00542-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/resistencia/rolex-endurance-dayt25zs-00542-landscape.webp" loading="lazy" alt="Rolex 24 at Daytona" />
                                    </picture>
                                </div>
                                <div>
                                    <h2 className="headline50 c-brown-text pb-20">Las 12 Horas de Sebring, rendimiento bajo presión</h2>
                                    <p className="body-20-light pb-30">Creada en Estados Unidos en 1952, las 12 Horas de Sebring tiene la reputación de ser una de las carreras de resistencia más desafiantes del mundo. Con su superficie irregular, Sebring International Raceway es una verdadera prueba de fiabilidad de los coches. Es aquí, en marzo, donde muchos competidores de las 24 Horas de Le Mans vienen a probar la resistencia mecánica de sus coches. Rolex es Reloj Oficial de la competición.</p>
                                    <p className="body-20-light">La marca entrega un Cosmograph Daytona a los ganadores de cada uno de estos tres eventos emblemáticos, que constituyen la triple corona de las carreras de resistencia.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/resistencia/rolex-endurance-lemans17-portrait.webp" />
                                    <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/resistencia/rolex-endurance-lemans17-landscape.webp" loading="lazy" alt="Línea de salida de le Mans" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content pt-90-60">
                        <div className="row-grid-fullw cuerpotexto pb-90-60">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">La fiabilidad a lo largo del tiempo</p>
                                <p className="body-20-light">Rolex mantiene colaboraciones con las organizaciones más importantes de las carreras de resistencia. Desde 2001, la marca apoya al Automobile Club de l'Ouest (ACO), que organiza las 24 Horas de Le Mans y supervisa el Campeonato Mundial de Resistencia de la FIA (WEC), la mayor serie de competiciones internacionales de coches deportivos.</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">Los mecanismos del progreso</p>
                                <p className="body-20-light">Hacerlo mejor con menos. Este es el doble desafío deportivo y medioambiental al que los equipos de carreras y los fabricantes se enfrentan hoy en día: lograr rendimiento energético superando aún más los límites del rendimiento. Rolex siempre se ha comprometido con la dinámica del progreso y apoya al automovilismo en esta profunda transformación.</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/resistencia/rolex-endurance-tkristensen-lemans14-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/resistencia/rolex-endurance-tkristensen-lemans14-landscape.webp" loading="lazy" alt="Tom Kristensen" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div className="pb-90-60">
                                    <h2 className="headline50 c-brown-text pb-20">Tom Kristensen, «Monsieur Le Mans»</h2>
                                    <p className="body-20-light">Con nueve victorias en las 24 Horas de Le Mans, Tom Kristensen, Testimonial Rolex desde 2010, es el piloto con más éxito de la historia de la carrera. Triunfó en su primera aparición en 1997 y reinó de 2000 a 2005. El danés añadió dos victorias más, en 2008 y 2013. En 18 participaciones, Kristensen logró subirse al podio 15 veces. Su trayectoria también incluye un título del Campeonato Mundial de Resistencia de la FIA (WEC) en 2013 y seis victorias en las 12 Horas de Sebring.</p>
                                </div>
                                <div className="pb-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/resistencia/rolex-endurance-jchadwick-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/resistencia/rolex-endurance-jchadwick-landscape.webp" loading="lazy" alt="Jamie Chadwick" />
                                    </picture>
                                </div>
                                <div>
                                    <h2 className="headline50 c-brown-text pb-20">Jamie Chadwick, piloto del futuro</h2>
                                    <p className="body-20-light">Jamie Chadwick no había cumplido aún los 16 años cuando se proclamó vencedora de las 24 Horas de Silverstone en 2015. Primera campeona del British GT Championship y tres veces campeona de la W Series para mujeres (Formula 3), Chadwick representa el futuro del automovilismo. Testimonial Rolex desde 2022, alcanzó sus victorias en la carrera en su primera temporada compitiendo en la European Le Mans Series de 2025.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw component-video">
                            <div className="col-6-12">
                                <a href="/rolex/watches/cosmograph-daytona/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source media="(max-width: 767px)" srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-cosmograph-daytona-m126508-0008-portrait.webp" />
                                        <img src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-cosmograph-daytona-m126508-0008-landscape.webp" loading="lazy" alt="Colección Rolex Cosmograph Daytona" />
                                    </picture>
                                </a>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-2-col">
                            <div className="col-lg-2-6">
                                <div className="pt-10">
                                    <p className="fixed-16 c-brown-text">Rolex Cosmograph Daytona</p>
                                    <p className="headline36 c-brown-text">El triunfo de la resistencia</p>
                                    <a
                                        className="btn-label-icon-rlx"
                                        href="/rolex/watches/cosmograph-daytona/">
                                        Más información
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
                        </div>
                    </div>
                </section>
                <RlxExploreMasNModels />
                <Footer />
            </main>
        </>
    );
}

export default Resistencia;