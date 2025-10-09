import React from "react";
import { Helmet } from "react-helmet-async";
import useInitScripts from '../../hooks/useInitScripts';
import RlxExploreMasNModels from "../../parts/RlxExploreMas";
import NavM from "../../parts/NavModels";
import Footer from '../../parts/Footer';
import "../../../main-style.css";

const ViajeCorazon: React.FC = () => {
    useInitScripts();

    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://glauser.myvtex.com/rolex/mundo-rolex/viaje-al-corazon-del-universo-rolex/';
    const baseUrl = 'https://glauser.myvtex.com'; // La URL base 

    return (
        <>
            <Helmet>
                <title>Viaje al corazón del universo Rolex - GLAUSER</title>
                <meta
                    name="description"
                    content="Desde sus orígenes, la historia de Rolex ha estado marcada por el anhelo de perfección y el deseo de ir siempre más allá"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://glauser.myvtex.com/files/style.min.css"
                />
                <link rel="stylesheet" type="text/css" href="https://glauser.vteximg.com.br/arquivos/style-rolex-general-glauser.css" />
                <link rel="stylesheet preload" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

                <link rel="canonical" href={currentUrl} />

                {/* Facebook Meta Tags */}
                <meta property="og:url" content={currentUrl} />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Viaje al corazón del universo Rolex - GLAUSER"
                />
                <meta
                    property="og:description"
                    content="Desde sus orígenes, la historia de Rolex ha estado marcada por el anhelo de perfección y el deseo de ir siempre más allá"
                />
                <meta
                    property="og:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/viaje-mundo-rolex/rolex-history-wmfinalassembly-landscape.webp" // URL de imagen para OG
                />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={currentUrl} />
                <meta
                    name="twitter:title"
                    content="Viaje al corazón del universo Rolex - GLAUSER"
                />
                <meta
                    name="twitter:description"
                    content="Desde sus orígenes, la historia de Rolex ha estado marcada por el anhelo de perfección y el deseo de ir siempre más allá"
                />
                <meta
                    name="twitter:image"
                    content="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/viaje-mundo-rolex/rolex-history-wmfinalassembly-landscape.webp" // URL de imagen para Twitter
                />

                {/* Scripts JSON-LD y DataLayer*/}
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
                                "name": "Viaje al corazón del universo Rolex - GLAUSER",
                                "isPartOf": { "@id": `${baseUrl}/#website` },
                                "datePublished": "2025-04-01T05:23:53+00:00",
                                "dateModified": "2025-04-01T05:23:53+00:00",
                                "description": "Desde sus orígenes, la historia de Rolex ha estado marcada por el anhelo de perfección y el deseo de ir siempre más allá",
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
                            "name": "Viaje al corazón del universo Rolex"
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
                        "headline": "Viaje al corazón del universo Rolex - GLAUSER",
                        "image": {
                            "@type": "ImageObject",
                            "url": "https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/viaje-mundo-rolex/rolex-history-wmfinalassembly-landscape.webp",
                            "height": "1920",
                            "width": "1080"
                        },
                        "datePublished": "2025-04-01T05:23:53+00:00",
                        "dateModified": "2025-04-01T05:23:53+00:00",
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
                        "description": "Desde sus orígenes, la historia de Rolex ha estado marcada por el anhelo de perfección y el deseo de ir siempre más allá"
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
                                        <a className="active" href="/rolex/mundo-rolex/viaje-al-corazon-del-universo-rolex/">Viaje al corazón del universo Rolex</a>
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
                                <h1 className="headline50 c-brown-text pb-20">
                                    Viaje al corazón del universo Rolex
                                </h1>
                                <p className="body-24-bold pb-30">
                                    Hans Wilsdorf estaba íntimamente convencido de la capacidad del ser
                                    humano para innovar con la excelencia como objetivo.
                                </p>
                                <p className="body-20-light">Publicado el 10 de abril de 2024</p>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-video py-90-60">
                            <div className="col-6-12">
                                <div className="banner-10 rlx-banner-100">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/viaje-mundo-rolex/rolex-history-wmfinalassembly-portrait.webp"
                                        />
                                        <img
                                            alt="Ensamblado del Submariner"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/viaje-mundo-rolex/rolex-history-wmfinalassembly-landscape.webp"
                                        />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="body-20-light">
                                    Casi 120 años después de la creación de la marca, el espíritu del
                                    fundador está más presente que nunca, tanto en lo que afecta a la
                                    fabricación de relojes como a los compromisos de Rolex en todo el
                                    mundo.
                                </p>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto py-90-60">
                            <div className="col-text-center">
                                <div className="quote">
                                    <p className="quote50 c-black-text pb-20">
                                        «En una primera impresión las dificultades parecían insalvables».
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">
                                    Compromiso con la excelencia
                                </p>
                                <p className="body-20-light">
                                    Desde sus orígenes, la historia de Rolex ha estado marcada por el
                                    anhelo de perfección y el deseo de ir siempre más allá.
                                </p>
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/viaje-mundo-rolex/rolex-history-superlative-certified-portrait.webp"
                                        />
                                        <img
                                            alt="Certificación Superlativa"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/viaje-mundo-rolex/rolex-history-superlative-certified-landscape.webp"
                                        />
                                    </picture>
                                </div>
                                <p className="body-20-light">
                                    A principios del siglo pasado, un emprendedor visionario, entonces
                                    radicado en Londres, está a punto de triunfar con tan solo su
                                    voluntad por bandera. ¿Cuál es su empeño? Dar a conocer al mundo
                                    relojero de la época una firma todavía ignorada: Rolex. Un nombre
                                    inédito, inventado en 1908, que en pocos decenios acabaría por
                                    convertirse en una de las marcas más famosas del mundo. «En una
                                    primera impresión las dificultades parecían insalvables»: con estas
                                    palabras recordaba Hans Wilsdorf en sus memorias los orígenes de su
                                    empresa.
                                </p>
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/viaje-mundo-rolex/rolex-history-hans-wilsdorf-portrait.webp"
                                        />
                                        <img
                                            alt="Hans Wilsdorf"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/viaje-mundo-rolex/rolex-history-hans-wilsdorf-landscape.webp"
                                        />
                                    </picture>
                                </div>
                                <p className="body-20-light">
                                    En aquellos momentos, como empresario no poseía demasiados bienes,
                                    pero como hombre poseía algunas cualidades inestimables: visión,
                                    perseverancia y una capacidad de trabajo fuera de lo común. Huérfano
                                    desde los 12 años, sin nada de lo que echar mano que no fuera su
                                    determinación para superar todos los obstáculos, Hans Wilsdorf
                                    inventará el primer reloj de pulsera hermético de cuerda automática
                                    por rotor Perpetual del mundo. Un reloj que, a día de hoy, es una
                                    referencia en materia de Colombiadad y de prestigio.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/viaje-mundo-rolex/rolex-history-1910-portrait.webp"
                                    />
                                    <img
                                        alt="Viaje al universo Rolex"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/viaje-mundo-rolex/rolex-history-1910-landscape.webp"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="body-20-light">
                                    «Demasiado complicado, demasiado frágil, demasiado fuera de lugar»,
                                    le habían repetido hasta la saciedad. Gracias a sus profundas
                                    convicciones, Hans Wilsdorf logró, con su audacia y pese a todo,
                                    imponer el reloj Rolex —el Oyster Perpetual— como el arquetipo del
                                    reloj de pulsera hermético de cuerda automática, preciso y robusto,
                                    capaz de resistir a cualquier situación. Pero él no fue tan solo el
                                    visionario que dio a los relojes Rolex sus características técnicas
                                    y estéticas fundamentales. A su constante búsqueda de la perfección
                                    se sumaban una gran generosidad y una fe inquebrantable en el
                                    potencial del ser humano.
                                </p>
                                <div className="pb-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/viaje-mundo-rolex/rolex-history-datejust-m126231-0016-portrait.webp"
                                        />
                                        <img
                                            alt="Datejust"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/viaje-mundo-rolex/rolex-history-datejust-m126231-0016-landscape.webp"
                                        />
                                    </picture>
                                </div>
                                <p className="headline50 c-brown-text pb-20">
                                    La suma de múltiples savoir-faire
                                </p>
                                <p className="body-20-light pb-30">
                                    Como manufactura independiente y vertical, Rolex dispone de un
                                    aparato industrial que agrupa un savoir‑faire incuantificable.
                                    Relojeros, ingenieros, diseñadores y otros especialistas colaboran
                                    estrechamente para concebir y, posteriormente, fabricar los relojes.
                                    La cultura de la empresa se basa, ante todo, en los valores humanos
                                    que ponen el savoir‑faire y las relaciones sociales en el centro de
                                    las diferentes actividades.
                                </p>
                                <p className="body-20-light">
                                    Rolex representa numerosos oficios distintos, encarnados por hombres
                                    y mujeres especialistas en sus respectivos ámbitos. La marca diseña
                                    y fabrica la mayoría de sus componentes esenciales, desde la
                                    fundición de las aleaciones de oro al ensamblaje del movimiento, la
                                    caja, la esfera y el brazalete, pasando por el mecanizado, el
                                    acabado y el engaste. Además, pone a disposición del mundo entero
                                    sus diferentes savoir-faire gracias a una red y a un servicio
                                    posventa excepcionales.
                                </p>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/viaje-mundo-rolex/rolex-history-18ra-rolex-sav-retailers-controle-final-portrait.webp"
                                        />
                                        <img
                                            alt="La suma de múltiples savoir-faire"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/viaje-mundo-rolex/rolex-history-18ra-rolex-sav-retailers-controle-final-landscape.webp"
                                        />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="body-20-light">
                                    Y para garantizar que ese savoir-faire no desaparezca nunca, Rolex
                                    dispone de su propio Centro de Formación, único en su género. Este
                                    centro, radicado en Ginebra y dedicado a potenciar nuevos talentos y
                                    a la capacitación de sus empleados, ofrece formación continua a
                                    todos sus colaboradores y a los directivos de la empresa y garantiza
                                    la formación de los aprendices. Espacio donde se comparten
                                    conocimientos y experiencias, tiene como misión asegurar el relevo
                                    para el día de mañana conforme a los valores de la marca.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="single-imagen-componet">
                    <div className="rlx-container-content">
                        <div className="row-grid-fullw">
                            <div className="grid-column-full">
                                <picture className="rlx-pbanner-top p-relative">
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/viaje-mundo-rolex/rolex-history-training-centre-portrait.webp"
                                    />
                                    <img
                                        alt="Centro de Formación"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/viaje-mundo-rolex/rolex-history-training-centre-landscape.webp"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content py-90-60">
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <p className="headline50 c-brown-text pb-20">
                                    Un reloj que no se parece a los demás
                                </p>
                                <p className="body-20-light">
                                    La colección Oyster Perpetual se construyó a partir del éxito del
                                    Oyster original, presentado en 1926. El Oyster, el primer reloj de
                                    pulsera hermético del mundo —con una arquitectura de caja
                                    patentada—, desempeñó un papel pionero en la evolución del reloj de
                                    pulsera moderno. En el transcurso de los años, fue incorporando
                                    otras muchas innovaciones —por ejemplo, la cuerda automática por
                                    rotor Perpetual (1931)— que han definido la identidad de los modelos
                                    de la colección y han forjado la reputación de excelencia de Rolex
                                    que, entre otras cosas, se fundamenta en la precisión cronométrica
                                    de sus relojes y en su fiabilidad.
                                </p>
                            </div>
                        </div>
                        <div className="row-grid-fullw image-center">
                            <div className="col-6-10">
                                <div className="py-90-60">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/viaje-mundo-rolex/rolex-history-oyster-pertetual-original-portrait.webp"
                                        />
                                        <img
                                            alt="El Oyster original, 1926"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/viaje-mundo-rolex/rolex-history-oyster-pertetual-original-landscape.webp"
                                        />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row-grid-fullw cuerpotexto">
                            <div className="col-text-center">
                                <div className="pb-90-60">
                                    <p className="body-20-light">
                                        El Oyster ha ido incorporando gradualmente a su colección nuevas
                                        funcionalidades y tecnologías innovadoras. Los fundamentos de este
                                        arquetipo relojero se encuentran en todos los modelos, que
                                        comparten una identidad visual. La colección cuenta con doce gamas
                                        repartidas en dos categorías: relojes Clásicos como el Datejust y
                                        el Day‑Date, y relojes Profesionales como el Explorer y el
                                        GMT‑Master II.
                                    </p>
                                    <p className="body-20-light">
                                        En tanto que marca pionera del reloj de pulsera moderno, Rolex se
                                        encuentra en el origen de múltiples e importantes adelantos en el
                                        sector de la relojería y ha registrado más de 600 patentes en el
                                        transcurso de su historia.
                                    </p>
                                </div>
                                <picture className="rlx-pbanner-top p-relative">
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/viaje-mundo-rolex/rolex-history-explorer-m226570-0001-portrait.webp"
                                    />
                                    <img
                                        alt="Explorer"
                                        loading="lazy"
                                        src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/articulos/viaje-mundo-rolex/rolex-history-explorer-m226570-0001-landscape.webp"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="c-lightbeige-bg">
                    <div className="rlx-container-content pb-90-60">
                        <div className="row-grid-fullw component-video">
                            <div className="col-6-12">
                                <a href="http://localhost:3000/rolex/watches/datejust/">
                                    <picture className="rlx-pbanner-top p-relative">
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-datejust-m126234-0051-portrait.webp"
                                        />
                                        <img
                                            alt="Colección Rolex Datejust"
                                            loading="lazy"
                                            src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/watches-banners/rolex-collection-banner-datejust-m126234-0051-landscape.webp"
                                        />
                                    </picture>
                                </a>
                            </div>
                        </div>
                        <div className="row-grid-fullw component-2-col">
                            <div className="col-lg-2-6">
                                <div className="pt-10">
                                    <p className="fixed-16 c-brown-text">Rolex Datejust</p>
                                    <p className="headline36 c-brown-text">Una fecha para recordar</p>
                                    <a
                                        className="btn-label-icon-rlx"
                                        href="https://glauser.myvtex.com/rolex/watches/datejust/">
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

export default ViajeCorazon;