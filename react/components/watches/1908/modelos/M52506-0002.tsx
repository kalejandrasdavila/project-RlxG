import React, { useEffect, useState } from "react";
import { useCssHandles } from 'vtex.css-handles';
import { Helmet } from "react-helmet-async";
import useInitScripts from '../../../../components/hooks/useInitScripts';
import RlxExploreMasNModels from "../../../../components/parts/RlxExploreMasNModels";
import NavM from "../../../../components/parts/NavModels";
import WatchesForm from "../../../../components/parts/Rlx-watches-formulario";
import Footer from '../../../../components/parts/Footer';
import '../../../../main-style.css';

const CSS_HANDLES = ['container', 'wrapper', 'content', 'model_container', 'section', 'hero_section'] as const;

const M525060002: React.FC = () => {
    const handles = useCssHandles(CSS_HANDLES);
    useInitScripts();

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
            console.error("No se encontró el elemento con el ID 'mensajerlx'");
        }
    }, []);

    return (
        <>
            <Helmet>
                <title>Rolex 1908 de 39 mm, platino, acabado pulido, M52506-0002 - Distribuidor Oficial Rolex Colombia - GLAUSER</title>
                <meta
                    name="description"
                    content="Descubra el reloj Rolex 1908 de 39 mm, platino, acabado pulido modelo M52506-0002 en GLAUSER, Distribuidor Oficial Rolex autorizado para vender y realizar el mantenimiento de los relojes Rolex en Colombia."
                />
                <link rel="canonical" href="https://devjhernandez--glauser.myvtex.com/rolex/watches/1908/M52506-0002" />
                <meta property="og:title" content="Rolex 1908 M52506-0002 - GLAUSER Colombia" />
                <meta property="og:description" content="Descubra el reloj Rolex 1908 de 39 mm, platino, acabado pulido modelo M52506-0002 en GLAUSER." />
                <meta property="og:url" content="https://devjhernandez--glauser.myvtex.com/rolex/watches/1908/M52506-0002" />
                <meta property="og:type" content="product" />
                <meta property="og:image" content="https://devjhernandez--glauser.myvtex.com/arquivos/rolex-1908-M52506-0002.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Rolex 1908 M52506-0002 - GLAUSER Colombia" />
                <meta name="twitter:description" content="Descubra el reloj Rolex 1908 de 39 mm, platino, acabado pulido modelo M52506-0002." />
                <meta name="twitter:image" content="https://devjhernandez--glauser.myvtex.com/arquivos/rolex-1908-M52506-0002.jpg" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://devjhernandez--glauser.myvtex.com/files/style.min.css"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
                    rel="stylesheet"
                />
            </Helmet>

            <NavM />

            <div className="rolex-generic-container">

                <main>

                    <div className="rolex-generic-container">
                        <div className="rolex-generic-banner">
                            <img src="https://content.rolex.com/dam/watches/watches-rolex-com/1908/m52506-0002/watch-rolex-1908-m52506-0002-001.jpg" alt="Rolex 1908" width="320" height="320" />
                        </div>
                        <div className="rolex-generic-banner-copy">
                            <div className="rolex-generic-banner-headline">
                                <h1>Rolex 1908</h1>
                                <h2>Oro amarillo de 18 quilates</h2>
                            </div>
                            <div className="rolex-generic-banner-headline-sub">
                                <h3>Reloj de 39 mm, platino, acabado pulido</h3>
                            </div>
                            <div className="rolex-generic-banner-reference">
                                <h4>M52506-0002</h4>
                            </div>
                            <div className="rolex-generic-banner-cta">
                                <a className="rolex-generic-banner-btn-gray" href="#get-in-touch-contact-section" onClick={() => window._satellite?.track?.('rlx-precio-modelo-click')}>Solicitar precio</a>
                            </div>
                        </div>
                    </div>


                    <div className="section-rlx-model-info-section-v2">
                        <div className="section-rlx-model-info-section-copy">
                            <p>Fruto de la pasión de Rolex por la relojería fina, el 1908 constituye el primer reloj de vestir de la marca. Su nombre representa el año en que Rolex se registró como marca comercial y plasma la herencia excepcional de la marca. El 1908 presenta un nuevo movimiento perpetuo, Calibre 7140, totalmente desarrollado y manufacturado por Rolex. Este nuevo calibre de cuerda automática es equipado con la nueva rueda de escape Chronergy, fabricada en aleación de níquel-fósforo. Su arquitectura, optimizada por los ingenieros de Rolex, y la naturaleza antimagnética de los componentes de su sistema de escape le confieren una elevada eficiencia energética. El reloj dispone de una reserva de marcha de aproximadamente 66 horas.</p>
                        </div>
                        <div className="section-rlx-model-info-section-visual">
                            <img src="https://content.rolex.com/dam/watches/watches-rolex-com/1908/m52506-0002/watch-rolex-1908-m52506-0002-003.jpg" alt="Rolex 1908" />
                        </div>
                    </div>

                    <div className="section-rlx-model-info-section-v2 section-rlx-model-info-section-v2-reverse">
                        <div className="section-rlx-model-info-section-copy">
                            <h3>Un nuevo capítulo</h3>
                            <p>El 1908 perpetúa la tradición de la relojería fina con materiales excepcionales, una artesanía meticulosa y una elegancia atemporal que trasciende las modas pasajeras. Este reloj presenta un estuche fino y elegante de 39 mm de diámetro en oro amarillo de 18 quilates que alberga una nueva complicación. Su esfera de color champán lacado, con un acabado radial que crea un elegante efecto solar, presenta índices aplicados en oro amarillo de 18 quilates. Las agujas también son de oro amarillo de 18 quilates.</p>
                        </div>
                        <div className="section-rlx-model-info-section-visual">
                            <img src="https://content.rolex.com/dam/watches/watches-rolex-com/1908/m52506-0002/watch-rolex-1908-m52506-0002-007.jpg" alt="Rolex 1908" />
                        </div>
                    </div>

                    <div className="section-rlx-model-info-section-v2">
                        <div className="section-rlx-model-info-section-copy">
                            <h3>El detalle que marca la diferencia</h3>
                            <p>El 1908 presenta una complicación única: un indicador dual día/noche a las 12 h. Esta innovación, desarrollada y patentada por Rolex, constituye una función práctica para viajeros que desean conocer la hora local en el lugar de destino. El indicador combina un sol en relieve dorado y una luna en relieve plateada sobre un disco de color azul noche o champán lacado en función del modelo. Durante el día (de 6 h a 18 h), se ve el sol, y durante la noche (de 18 h a 6 h), aparece la luna.</p>
                        </div>
                        <div className="section-rlx-model-info-section-visual">
                            <img src="https://content.rolex.com/dam/watches/watches-rolex-com/1908/m52506-0002/watch-rolex-1908-m52506-0002-002.jpg" alt="Rolex 1908" />
                        </div>
                    </div>

                    <div className="section-rlx-model-info-section-v2 section-rlx-model-info-section-v2-reverse">
                        <div className="section-rlx-model-info-section-copy">
                            <h3>Brazalete Presidente</h3>
                            <p>El brazalete Presidente, símbolo del prestigio y del refinamiento, fue creado especialmente para el lanzamiento del Day-Date en 1956. Propone tres hileras de eslabones de forma semicircular, conferiendo al reloj una flexibilidad y un confort excepcionales, así como una estética inconfundible. Como todos los brazaletes Rolex, el brazalete Presidente se fabrica de acuerdo con los más elevados estándares de calidad. Su cierre desplegable con hebilla oculta, también desarrollado especialmente por Rolex para este brazalete, presenta una forma redondeada que se funde perfectamente con los eslabones del brazalete.</p>
                        </div>
                        <div className="section-rlx-model-info-section-visual">
                            <img src="https://content.rolex.com/dam/watches/watches-rolex-com/1908/m52506-0002/watch-rolex-1908-m52506-0002-006.jpg" alt="Rolex 1908" />
                        </div>
                    </div>

                    <div className="section-rlx-model-info-section-v2">
                        <div className="section-rlx-model-info-section-copy">
                            <h3>Calibre 7140</h3>
                            <p>El 1908 está animado por el calibre 7140, un movimiento mecánico de cuerda automática totalmente desarrollado y manufacturado por Rolex que constituye el corazón tecnológico de este nuevo reloj de vestir. Está equipado con la nueva rueda de escape Chronergy, fabricada en aleación de níquel-fósforo. Su arquitectura, optimizada por los ingenieros de Rolex, y la naturaleza antimagnética de los componentes de su sistema de escape le confieren una elevada eficiencia energética. El movimiento incorpora igualmente el sistema antichoque Paraflex desarrollado y patentado por Rolex, que aumenta hasta en un 50 % la resistencia a los choques. Dispone de una reserva de marcha de aproximadamente 66 horas.</p>
                        </div>
                        <div className="section-rlx-model-info-section-visual">
                            <img src="https://content.rolex.com/dam/watches/watches-rolex-com/1908/m52506-0002/watch-rolex-1908-m52506-0002-008.jpg" alt="Rolex 1908" />
                        </div>
                    </div>

                    <div className="section-rlx-model-info-section-v2 section-rlx-model-info-section-v2-reverse">
                        <div className="section-rlx-model-info-section-copy">
                            <h3>Cronómetro Superlativo</h3>
                            <p>Como todos los relojes Rolex, el 1908 cuenta con la certificación de Cronómetro Superlativo, que garantiza un excelente rendimiento en la muñeca. El título de Cronómetro Superlativo testifica que cada reloj ha superado con éxito las pruebas llevadas a cabo por Rolex en sus propios laboratorios según sus propios criterios, que sobrepasan las normas de la relojería en materia de precisión, impermeabilidad, cuerda automática y fiabilidad. Se efectúan una serie de pruebas después del engastado del movimiento en la caja para garantizar una precisión de ‑2/+2 segundos por día, una vez que el reloj está completamente montado. Este nivel de precisión es dos veces superior al requerido para un cronómetro certificado por el COSC (Contrôle Officiel Suisse des Chronomètres).</p>
                        </div>
                        <div className="section-rlx-model-info-section-visual">
                            <img src="https://content.rolex.com/dam/watches/watches-rolex-com/1908/m52506-0002/watch-rolex-1908-m52506-0002-004.jpg" alt="Rolex 1908" />
                        </div>
                    </div>

                    <section className="accordion-section" id="specifications">
                        <div className="accordion-container">
                            <h2>Especificaciones</h2>
                            <div className="accordion-item">
                                <button className="accordion-header" onClick={() => {
                                    const content = document.querySelector('.accordion-content') as HTMLElement | null;
                                    const header = document.querySelector('.accordion-header') as HTMLElement | null;
                                    if (content && header) {
                                        content.style.display = content.style.display === 'block' ? 'none' : 'block';
                                        header.classList.toggle('active');
                                    }
                                }}>
                                    <span>Características del modelo</span>
                                    <span className="accordion-icon">+</span>
                                </button>
                                <div className="accordion-content">
                                    <div className="specs-grid">
                                        <div className="spec-item">
                                            <span className="spec-label">Referencia:</span>
                                            <span className="spec-value">M52506-0002</span>
                                        </div>
                                        <div className="spec-item">
                                            <span className="spec-label">Modelo:</span>
                                            <span className="spec-value">1908</span>
                                        </div>
                                        <div className="spec-item">
                                            <span className="spec-label">Diámetro de la caja:</span>
                                            <span className="spec-value">39 mm</span>
                                        </div>
                                        <div className="spec-item">
                                            <span className="spec-label">Material de la caja:</span>
                                            <span className="spec-value">Platino</span>
                                        </div>
                                        <div className="spec-item">
                                            <span className="spec-label">Bisel:</span>
                                            <span className="spec-value">Liso</span>
                                        </div>
                                        <div className="spec-item">
                                            <span className="spec-label">Corona de cuerda:</span>
                                            <span className="spec-value">Roscada, sistema Twinlock de doble estanqueidad</span>
                                        </div>
                                        <div className="spec-item">
                                            <span className="spec-label">Cristal:</span>
                                            <span className="spec-value">Zafiro resistente a los arañazos</span>
                                        </div>
                                        <div className="spec-item">
                                            <span className="spec-label">Esfera:</span>
                                            <span className="spec-value">Champán lacado</span>
                                        </div>
                                        <div className="spec-item">
                                            <span className="spec-label">Brazalete:</span>
                                            <span className="spec-value">Presidente</span>
                                        </div>
                                        <div className="spec-item">
                                            <span className="spec-label">Movimiento:</span>
                                            <span className="spec-value">Perpetuo, mecánico de cuerda automática</span>
                                        </div>
                                        <div className="spec-item">
                                            <span className="spec-label">Calibre:</span>
                                            <span className="spec-value">7140, fabricación Rolex</span>
                                        </div>
                                        <div className="spec-item">
                                            <span className="spec-label">Reserva de marcha:</span>
                                            <span className="spec-value">Aproximadamente 66 horas</span>
                                        </div>
                                        <div className="spec-item">
                                            <span className="spec-label">Impermeabilidad:</span>
                                            <span className="spec-value">Impermeable hasta 50 metros</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <WatchesForm />

                </main>

            </div>

            <RlxExploreMasNModels />

            <Footer />

        </>
    );
};

export default M525060002; 
