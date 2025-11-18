import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
//import FooterRlxContacto from "../js/Footer-rlx-Contacto";
import { useCssHandles } from 'vtex.css-handles';
import { buildUrl } from '../../utils/urlUtils';


const CSS_HANDLES = [
    //HEADER//
    'headercomponent', 'rlx_html', 'home_rlx', 'rlx_menu', 'rlx_container', 'row_grid', 'rlx_logo', 'placa_rolex_logo',
    'breadcrum_page', 'breadcrum_column', 'breadcrum_menu_list', 'description', 'fixed_14', 'active',
    ///c-lightbeige-bg//
    'row_grid_fullw', 'grid_column_full', 'rlx_pbanner_top', 'p_relative', 'rlx_container_content', 'py_90_60', 'text_introduccion',
    'pb_90_60', 'col_lg_8_5', 'col_lg_2_5', 'headline50', 'c_brown_text', 'pb_20', 'body_20_light', 'component_video', 'col_6_12',
    'headline36', 'component_2_col', 'fixed_16', 'btn_label_icon_rlx', 'btn_primary_icon_rlx', 'btn_primary_rlx', 'component_3_col', 'col_span_2_1', 'col_6_2', 'body_24_bold',
    'legend_16_light', 'col_span_2_2', 'col_6_6', 'col_6_10', 'col_lg_2_6', 'component_3_col_2', 'col_text_center', 'text_center',
    'pb_30', 'body_20_blod', 'accordion_header', 'accordion_content', 'contacto_rolex', 'py_20_30', 'dispmodel', 'formulario_rolex',
    'col_formrlx', 'px_20', 'w_100', 'form_inputs', 'mensaje', 'p_30_40', 'continuarBtn', 'mb_100', 'flex', 'flex_col', 'text_13px',
    // Missing handles
    'cuerpotexto', 'pt_90_60', 'cuerpotextobg', 'datosperson', 'mb_10'
] as const

// jQuery ya no se usa, se reemplazó con JavaScript vanilla y fetch API

interface FormData {
    Dirigirse: string;
    NombreCliente: string;
    ApellidoCliente: string;
    email: string;
    Telefono: string;
    MensajeRolex: string;
}

const WatchesForm: React.FC = () => {
    const handles = useCssHandles(CSS_HANDLES)
    const [atencion, setAtencion] = useState<string>("0");
    const [nombre, setNombre] = useState<string>("");
    const [apellido, setApellido] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [telefono, setTelefono] = useState<string>("");
    const [mensaje, setMensaje] = useState<string>("");
    const [terminosAceptados, setTerminosAceptados] = useState<boolean>(false);

    const [showPersonalData, setShowPersonalData] = useState<boolean>(false);
    const [submitMessage, setSubmitMessage] = useState<string | JSX.Element>("");
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleContinuar = (): void => {
        if (!mensaje.trim()) {
            setErrors(prev => ({ ...prev, mensaje: "Este campo no puede estar vacío." }));
            return;
        }
        setErrors(prev => ({ ...prev, mensaje: "" }));
        setShowPersonalData(true);
    };

    const validateForm = (): boolean => {
        const newErrors: { [key: string]: string } = {};
        if (atencion === "0") newErrors.atencion = "Seleccione una opción.";
        if (!nombre.trim()) newErrors.nombre = "Este campo no puede estar vacío.";
        if (!apellido.trim()) newErrors.apellido = "Este campo no puede estar vacío.";
        if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Ingrese un correo electrónico válido.";
        if (!telefono.trim() || !/^\d{10}$/.test(telefono)) newErrors.telefono = "Este campo no puede estar vacío y debe tener 10 dígitos.";
        if (!terminosAceptados) newErrors.terminos = "Debe aceptar los Términos y Condiciones.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setErrors({});

        if (!validateForm()) {
            return;
        }

        const data: FormData = {
            Dirigirse: atencion,
            NombreCliente: nombre,
            ApellidoCliente: apellido,
            email: email,
            Telefono: telefono,
            MensajeRolex: mensaje,
        };

        setIsSubmitting(true);
        setSubmitMessage("");

        // Usar fetch API en lugar de jQuery.ajax
        fetch("/api/ds/pub/documents/FR", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((response: any) => {
                if (response?.Id) {
                    setSubmitMessage(
                        <div className={`${handles.row_grid_fullw} ${handles.cuerpotexto}`}>
                            <div className={`${handles.col_text_center} ${handles.text_center}`}>
                                <p className={`${handles.headline50} ${handles.c_brown_text} ${handles.pb_20}`}>¡Gracias por contactarnos!</p>
                                <p className={`${handles.body_20_blod} ${handles.pb_30}`}>Su mensaje se ha enviado correctamente al equipo Rolex en GLAUSER</p>
                                <p className={`${handles.body_20_light} ${handles.pb_30}`}>Uno de nuestros asesores de ventas Rolex revisará su solicitud y le responderá lo antes posible.</p>
                                <a href="https://glauser.myvtex.com/rolex/" className="btn-primary-rlx">Terminar</a>
                            </div>
                        </div>
                    );
                    // Reset form fields
                    setAtencion("0");
                    setNombre("");
                    setApellido("");
                    setEmail("");
                    setTelefono("");
                    setMensaje("");
                    setTerminosAceptados(false);
                    setShowPersonalData(false); // Hide personal data section
                } else {
                    setSubmitMessage(<div className="alert alert-danger">{response.msg || "Ocurrió un error al enviar el formulario."}</div>);
                }
            })
            .catch((error) => {
                console.error("Error submitting form:", error);
                setSubmitMessage(<div className="alert alert-danger">Ocurrió un error, intentar más tarde.</div>);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    useEffect(() => {
        const pageTitle = document.title;
        const formattedTitle = pageTitle.includes("- GLAUSER")
            ? pageTitle.replace("- GLAUSER", "").trim()
            : pageTitle;
        setMensaje(`Me interesa ${formattedTitle}`);

        const btnEnviar = document.getElementById("btnEnviar") as HTMLButtonElement | null;
        if (btnEnviar) {
            btnEnviar.disabled = !terminosAceptados;
        }

        // Reemplazar jQuery con JavaScript vanilla para el acordeón
        // Usar clases CSS como se define en main-style.css
        const accordionHeaders = document.querySelectorAll(".glauser-storerlx-0-x-accordion_header");

        const handleAccordionClick = function (this: Element, event: Event) {
            const header = this as HTMLElement;
            const content = header.nextElementSibling as HTMLElement | null;
            const icon = header.querySelector(".glauser-storerlx-0-x-icon_acordion") as HTMLElement | null;

            if (content) {
                // Toggle usando clases CSS (glauser-storerlx-0-x-active)
                const isActive = content.classList.contains("glauser-storerlx-0-x-active");
                if (isActive) {
                    content.classList.remove("glauser-storerlx-0-x-active");
                    if (icon) icon.textContent = "+";
                } else {
                    content.classList.add("glauser-storerlx-0-x-active");
                    if (icon) icon.textContent = "–";
                }
            }
        };

        accordionHeaders.forEach((header) => {
            header.addEventListener("click", handleAccordionClick);
        });

        // Cleanup function for useEffect
        return () => {
            accordionHeaders.forEach((header) => {
                header.removeEventListener("click", handleAccordionClick);
            });
        };
    }, [terminosAceptados]); // Re-run effect if terminosAceptados changes for button state

    return (
        <>
            <section className="c-lightbeige-bg pt-90-60" id="contacto-rolex">
                <div className="rlx-container-content">
                    <div className="row-grid-fullw component-video">
                        <div className="col-6-12">
                            <p className="headline36 c-brown-text pb-20">Contáctenos</p>
                            <p className="fixed-16 c-brown-text py-20-30" style={{ borderTop: "1px solid rgba(69, 44, 30, 0.2)" }}>Envíenos un mensaje</p>
                        </div>
                    </div>
                    <div className="row-grid-fullw">
                        <div className="grid-column-full">
                            <picture className="rlx-pbanner-top p-relative">
                                <source
                                    media="(max-width: 767px)"
                                    srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/contacto/rolex-contact-message-portrait.webp"
                                />
                                <img
                                    src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/contacto/rolex-contact-message-landscape.webp"
                                    loading="lazy"
                                    alt="contacto"
                                />
                            </picture>
                        </div>
                    </div>
                    <div className="row-grid-fullw cuerpotexto dispmodel">
                        <div className="row-grid-fullw cuerpotextobg">
                            <div className="col-text-center">
                                <div className="py-90-60 formulario-rolex" id="rowformtop">
                                    <div className="col-formrlx px-20">
                                        <p className="body-24-bold c-brown-text pb-20 text-center">Enviar un mensaje</p>
                                        <p
                                            id="tituloPrincipal"
                                            className="headline50 c-brown-text pb-30 text-center">
                                            {showPersonalData ? "Introduzca su información de contacto" : "Introduzca su mensaje"}
                                        </p>
                                        <p
                                            id="subtituloPrincipal"
                                            className="body-20-light pb-30 text-center">
                                            {showPersonalData
                                                ? "Utilizamos esta información para mandarle una respuesta."
                                                : "Le agradecemos su interés por los relojes Rolex. Introduzca su mensaje, pronto le responderemos."}
                                        </p>
                                        <form id="formulario-rolex" className="w-100" onSubmit={handleSubmit}>
                                            {/* Mensaje Section */}
                                            <div id="mensajeSection" style={{ display: showPersonalData ? "none" : "block" }}>
                                                <textarea
                                                    id="mensajerlx"
                                                    className="form-inputs mensaje legend-16-light p-30-40"
                                                    name="mensaje"
                                                    placeholder="Introduzca su mensaje"
                                                    value={mensaje}
                                                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                                                        setMensaje(e.target.value);
                                                        setErrors(prev => ({ ...prev, mensaje: "" })); // Clear error on change
                                                    }}
                                                    required
                                                />
                                                {errors.mensaje && <span className="error">{errors.mensaje}</span>}
                                                <div className="text-center">
                                                    <a
                                                        className="btn-primary-icon-rlx"
                                                        id="continuarBtn"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleContinuar();
                                                        }}
                                                        style={{ cursor: 'pointer' }}>
                                                        Siguiente
                                                        <svg
                                                            height="12"
                                                            width="12"
                                                            viewBox="0 0 15 15"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            role="img"
                                                            aria-hidden="true"
                                                            fill="white">
                                                            <path d="M11.7,7.5l-1.4,1.4l-5.7,5.7l-1.4-1.4l5.7-5.7L3.3,1.9l1.4-1.4l5.7,5.7l0,0L11.7,7.5z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>

                                            {/* Datos Personales Section */}
                                            <div className={showPersonalData ? "datosperson" : "hidden datosperson"} id="datosPersonalesSection">
                                                <div className="grid grid-cols-[calc(var(--grid-col-unit)*2),1fr] md:grid-cols-[calc(var(--grid-col-unit)*2),1fr,1fr] grid-flow-col gap-x-4 items-end">
                                                    <div className="mb-10 relative flex flex-col">
                                                        <label className="text-13px c-brown-text">Tratamiento</label>
                                                        <select
                                                            className="nocero1"
                                                            id="atencion"
                                                            name="atencion"
                                                            value={atencion}
                                                            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                                                                setAtencion(e.target.value);
                                                                setErrors(prev => ({ ...prev, atencion: "" }));
                                                            }}
                                                            required>
                                                            <option value="0" disabled>----</option>
                                                            <option value="Sr.">Sr.</option>
                                                            <option value="Sra.">Sra.</option>
                                                        </select>
                                                        {errors.atencion && <span className="error">{errors.atencion}</span>}
                                                    </div>
                                                    <div className="mb-10 relative flex flex-col">
                                                        <label className="text-13px c-brown-text">Nombre:</label>
                                                        <input
                                                            type="text"
                                                            id="nombre"
                                                            placeholder=""
                                                            name="nombre"
                                                            value={nombre}
                                                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                                                setNombre(e.target.value);
                                                                setErrors(prev => ({ ...prev, nombre: "" }));
                                                            }}
                                                            required
                                                        />
                                                        {errors.nombre && <span className="error">{errors.nombre}</span>}
                                                    </div>
                                                    <div className="mb-10 relative flex flex-col max-md:row-start-2 max-md:col-start-1 max-md:col-span-2">
                                                        <label className="text-13px c-brown-text">Apellido(s)</label>
                                                        <input
                                                            type="text"
                                                            id="apellido"
                                                            placeholder="Apellido(s)"
                                                            name="apellido"
                                                            value={apellido}
                                                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                                                setApellido(e.target.value);
                                                                setErrors(prev => ({ ...prev, apellido: "" }));
                                                            }}
                                                            required
                                                        />
                                                        {errors.apellido && <span className="error">{errors.apellido}</span>}
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-[calc(var(--grid-col-unit)*2),1fr] md:grid-cols-[calc(var(--grid-col-unit)*2),1fr,1fr] grid-flow-col gap-x-4 items-end">
                                                    <div className="mb-10 relative flex flex-col">
                                                        <label className="text-13px c-brown-text">Dirección de correo electrónico *</label>
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            placeholder="Dirección de correo electrónico *"
                                                            name="email"
                                                            value={email}
                                                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                                                setEmail(e.target.value);
                                                                setErrors(prev => ({ ...prev, email: "" }));
                                                            }}
                                                            required
                                                        />
                                                        {errors.email && <span className="error">{errors.email}</span>}
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-[calc(var(--grid-col-unit)*2),1fr] md:grid-cols-[calc(var(--grid-col-unit)*2),1fr,1fr] grid-flow-col gap-x-4 items-end">
                                                    <div className="mb-10 relative flex flex-col">
                                                        <label className="text-13px c-brown-text">Teléfono *</label>
                                                        <input
                                                            type="tel"
                                                            id="telefono"
                                                            placeholder="Teléfono *"
                                                            name="telefono"
                                                            maxLength={10}
                                                            value={telefono}
                                                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                                                setTelefono(e.target.value);
                                                                setErrors(prev => ({ ...prev, telefono: "" }));
                                                            }}
                                                            required
                                                        />
                                                        {errors.telefono && <span className="error">{errors.telefono}</span>}
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-[calc(var(--grid-col-unit)*2),1fr] md:grid-cols-[calc(var(--grid-col-unit)*2),1fr,1fr] grid-flow-col gap-x-4 items-end">
                                                    <div className="mb-10 relative flex flex-col">
                                                        <p className="text-13px">*Obligatorio</p>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-[calc(var(--grid-col-unit)*2),1fr] md:grid-cols-[calc(var(--grid-col-unit)*2),1fr,1fr] grid-flow-col gap-x-4 items-end">
                                                    <div className="mb-10 relative flex flex-col">
                                                        <div className="checkbox-wrapper-24">
                                                            <input
                                                                type="checkbox"
                                                                id="terminos"
                                                                name="terminos"
                                                                checked={terminosAceptados}
                                                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                                                    setTerminosAceptados(e.target.checked);
                                                                    setErrors(prev => ({ ...prev, terminos: "" }));
                                                                }}
                                                                required
                                                            />
                                                            <label htmlFor="terminos">
                                                                <span />
                                                                *He leído y acepto los{" "}
                                                                <a
                                                                    href={buildUrl('/nosotros/terminos-y-condiciones/')}
                                                                    style={{ position: "relative", display: "contents" }}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="link-form">
                                                                    Términos y Condiciones y la Política de Privacidad *
                                                                </a>
                                                            </label>
                                                            {errors.terminos && <span className="error">{errors.terminos}</span>}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <button
                                                        type="submit"
                                                        id="btnEnviar"
                                                        className="btn-primary-rlx"
                                                        disabled={isSubmitting || !terminosAceptados}>
                                                        {isSubmitting ? "ENVIANDO..." : "Enviar"}
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-formrlx">
                        <div id="msg">{submitMessage}</div>
                    </div>
                    <div id="respuesta">
                    </div>
                </div>
            </section>
            {/*<FooterRlxContacto />*/}
        </>
    );
};

export default WatchesForm;