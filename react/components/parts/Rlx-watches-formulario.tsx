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
    'headline36', 'component_2_col', 'fixed_16', 'btn_label_icon_rlx', 'component_3_col', 'col_span_2_1', 'col_6_2', 'body_24_bold',
    'legend_16_light', 'col_span_2_2', 'col_6_6', 'col_6_10', 'col_lg_2_6', 'component_3_col_2', 'col_text_center', 'text_center',
    'pb_30', 'body_20_blod', 'accordion_header', 'accordion_content', 'contacto_rolex', 'py_20_30', 'dispmodel', 'formulario_rolex',
    'col_formrlx', 'px_20', 'w_100', 'form_inputs', 'mensaje', 'p_30_40', 'continuarBtn', 'mb_100', 'flex', 'flex_col', 'text_13px',
    // Missing handles
    'cuerpotexto', 'pt_90_60', 'cuerpotextobg', 'datosperson', 'mb_10'
] as const

declare const $: any;

interface FormData {
    Dirigirse: string;
    NombreCliente: string;
    ApellidoCliente: string;
    email: string;
    Telefono: string;
    MensajeRolex: string;
}

const handles = useCssHandles(CSS_HANDLES)

const WatchesForm: React.FC = () => {
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

        $.ajax({
            dataType: "JSON",
            url: "/api/ds/pub/documents/FR",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(data),
            beforeSend: function () {
            },
            success: function (response: any) {
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
            },
            error: function () {
                setSubmitMessage(<div className="alert alert-danger">Ocurrió un error, intentar más tarde.</div>);
            },
            complete: function () {
                setIsSubmitting(false);
            },
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

        const accordionHeaders = $(".glauser-storerlx-0-x-accordion_header");
        accordionHeaders.on("click", function () {
            $(this).next(".accordion_content").slideToggle();
            const icon = $(this).find(".glauser-storerlx-0-x-icon_acordion");
            if (icon.text() === "+") {
                icon.text("–");
            } else {
                icon.text("+");
            }
        });

        // Cleanup function for useEffect
        return () => {
            accordionHeaders.off("click");
        };
    }, [terminosAceptados]); // Re-run effect if terminosAceptados changes for button state

    return (
        <>
            <section className={`c-lightbeige-bg ${handles.pt_90_60} ${handles.contacto_rolex}`} id="contacto-rolex">
                <div className="rlx-container-content">
                    <div className={`${handles.row_grid_fullw} ${handles.component_video}`}>
                        <div className={`${handles.col_6_12}`}>
                            <p className={`${handles.headline36} ${handles.c_brown_text} ${handles.pb_20}`}>Contáctenos</p>
                            <p
                                className={`${handles.fixed_16} ${handles.c_brown_text} ${handles.py_20_30}`}
                                style={{
                                    borderTop: "1px solid rgba(69, 44, 30, 0.2)",
                                }}>
                                Envíenos un mensaje
                            </p>
                        </div>
                    </div>
                    <div className={`${handles.row_grid_fullw}`}>
                        <div className="grid-column-full">
                            <picture className={`${handles.rlx_pbanner_top} ${handles.p_relative}`}>
                                <source
                                    media="(max-width: 767px)"
                                    srcSet="https://galileo.tsqsa.com/FTPImagenes/rolex-img/contacto/rolex-contact-message-portrait.webp"
                                />
                                <img
                                    alt="contacto"
                                    loading="lazy"
                                    src="https://galileo.tsqsa.com/FTPImagenes/rolex-img/contacto/rolex-contact-message-landscape.webp"
                                />
                            </picture>
                        </div>
                    </div>
                    <div className={`${handles.row_grid_fullw} ${handles.cuerpotexto} ${handles.dispmodel}`}>
                        <div className={`${handles.row_grid_fullw} ${handles.cuerpotextobg}`}>
                            <div className={`${handles.col_text_center}`}>
                                <div className={`${handles.py_90_60} ${handles.formulario_rolex}`} id="rowformtop">
                                    <div className={`${handles.col_formrlx} ${handles.px_20}`}>
                                        <p className={`${handles.body_24_bold} ${handles.c_brown_text} ${handles.pb_20} ${handles.text_center}`}>
                                            Enviar un mensaje
                                        </p>
                                        <p
                                            className={`${handles.headline50} ${handles.c_brown_text} ${handles.pb_20} ${handles.pb_30} ${handles.text_center}`}
                                            id="tituloPrincipal">
                                            Introduzca su mensaje
                                        </p>
                                        <p
                                            className={`${handles.body_20_light} ${handles.pb_30} ${handles.text_center}`}
                                            id="subtituloPrincipal">
                                            Le agradecemos su interés por los relojes Rolex. Introduzca su
                                            mensaje, pronto le responderemos.
                                        </p>
                                        <form className={`${handles.w_100}`} onSubmit={handleSubmit}>
                                            {/* Mensaje Section */}
                                            <div id="mensajeSection" style={{ display: showPersonalData ? "none" : "block" }}>
                                                <textarea
                                                    className={`${handles.form_inputs} ${handles.mensaje} ${handles.legend_16_light} ${handles.p_30_40}`}
                                                    id="mensajerlx"
                                                    name="mensaje"
                                                    placeholder="Introduzca su mensaje"
                                                    value={mensaje}
                                                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                                                        setMensaje(e.target.value);
                                                        setErrors(prev => ({ ...prev, mensaje: "" })); // Clear error on change
                                                    }}
                                                    required // Add required for HTML5 validation
                                                />
                                                {errors.mensaje && <span className="error text-red-500 text-sm">{errors.mensaje}</span>}
                                                <div className={`${handles.text_center}`}>
                                                    <a className={`btn-primary-icon-rlx  ${handles.continuarBtn}`} id="continuarBtn" onClick={handleContinuar}>
                                                        Siguiente
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

                                            {/* Datos Personales Section */}
                                            <div className={`${handles.datosperson}  ${showPersonalData ? "" : "hidden"}`} id="datosPersonalesSection">
                                                <div className="grid grid-cols-[calc(var(--grid-col-unit)*2),1fr] md:grid-cols-[calc(var(--grid-col-unit)*2),1fr,1fr] grid-flow-col gap-x-4 items-end">
                                                    <div className={`${handles.mb_10} ${handles.flex} ${handles.flex_col} relative`}>
                                                        <label className={`${handles.text_13px} ${handles.c_brown_text} `}>
                                                            Tratamiento
                                                        </label>
                                                        <select
                                                            aria-label="Default select example"
                                                            className="nocero1"
                                                            id="atencion"
                                                            name="atencion"
                                                            value={atencion}
                                                            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                                                                setAtencion(e.target.value);
                                                                setErrors(prev => ({ ...prev, atencion: "" })); // Clear error on change
                                                            }}
                                                            required // Add required for HTML5 validation
                                                        >
                                                            <option disabled value="0">
                                                                ----
                                                            </option>
                                                            <option value="Sr.">Sr.</option>
                                                            <option value="Sra.">Sra.</option>
                                                        </select>
                                                        {errors.atencion && <span className="error text-red-500 text-sm">{errors.atencion}</span>}
                                                    </div>
                                                    <div className={`${handles.mb_10} ${handles.flex} ${handles.flex_col} relative`}>
                                                        <label className={`${handles.text_13px} ${handles.c_brown_text} `}>Nombre:</label>
                                                        <input
                                                            id="nombre"
                                                            name="nombre"
                                                            placeholder=""
                                                            type="text"
                                                            value={nombre}
                                                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                                                setNombre(e.target.value);
                                                                setErrors(prev => ({ ...prev, nombre: "" })); // Clear error on change
                                                            }}
                                                            required // Add required for HTML5 validation
                                                        />
                                                        {errors.nombre && <span className="error text-red-500 text-sm">{errors.nombre}</span>}
                                                    </div>
                                                    <div className="mb-10 relative flex flex-col max-md:row-start-2 max-md:col-start-1 max-md:col-span-2 ">
                                                        <label className={`${handles.text_13px} ${handles.c_brown_text} `}>
                                                            Apellido(s)
                                                        </label>
                                                        <input
                                                            id="apellido"
                                                            name="apellido"
                                                            placeholder="Apellido(s)"
                                                            type="text"
                                                            value={apellido}
                                                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                                                setApellido(e.target.value);
                                                                setErrors(prev => ({ ...prev, apellido: "" })); // Clear error on change
                                                            }}
                                                            required // Add required for HTML5 validation
                                                        />
                                                        {errors.apellido && <span className="error text-red-500 text-sm">{errors.apellido}</span>}
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-[calc(var(--grid-col-unit)*2),1fr] md:grid-cols-[calc(var(--grid-col-unit)*2),1fr,1fr] grid-flow-col gap-x-4 items-end">
                                                    <div className={`${handles.mb_10} ${handles.flex} ${handles.flex_col} relative`}>
                                                        <label className={`${handles.text_13px} ${handles.c_brown_text} `}>
                                                            Dirección de correo electrónico *
                                                        </label>
                                                        <input
                                                            id="email"
                                                            name="email"
                                                            placeholder="Dirección de correo electrónico *"
                                                            type="email"
                                                            value={email}
                                                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                                                setEmail(e.target.value);
                                                                setErrors(prev => ({ ...prev, email: "" })); // Clear error on change
                                                            }}
                                                            required // Add required for HTML5 validation
                                                        />
                                                        {errors.email && <span className="error text-red-500 text-sm">{errors.email}</span>}
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-[calc(var(--grid-col-unit)*2),1fr] md:grid-cols-[calc(var(--grid-col-unit)*2),1fr,1fr] grid-flow-col gap-x-4 items-end">
                                                    <div className={`${handles.mb_10} ${handles.flex} ${handles.flex_col} relative`}>
                                                        <label className={`${handles.text_13px} ${handles.c_brown_text} `}>
                                                            Teléfono *
                                                        </label>
                                                        <input
                                                            id="telefono"
                                                            name="telefono"
                                                            maxLength={10}
                                                            placeholder="Teléfono *"
                                                            type="tel"
                                                            value={telefono}
                                                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                                                setTelefono(e.target.value);
                                                                setErrors(prev => ({ ...prev, telefono: "" })); // Clear error on change
                                                            }}
                                                            required // Add required for HTML5 validation
                                                        />
                                                        {errors.telefono && <span className="error text-red-500 text-sm">{errors.telefono}</span>}
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-[calc(var(--grid-col-unit)*2),1fr] md:grid-cols-[calc(var(--grid-col-unit)*2),1fr,1fr] grid-flow-col gap-x-4 items-end">
                                                    <div className={`${handles.mb_10} ${handles.flex} ${handles.flex_col} relative`}>
                                                        <p className="text-13px ">*Obligatorio</p>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-[calc(var(--grid-col-unit)*2),1fr] md:grid-cols-[calc(var(--grid-col-unit)*2),1fr,1fr] grid-flow-col gap-x-4 items-end">
                                                    <div className={`${handles.mb_10} ${handles.flex} ${handles.flex_col} relative`}>
                                                        <div className="checkbox-wrapper-24">
                                                            <input
                                                                id="terminos"
                                                                name="terminos"
                                                                type="checkbox"
                                                                checked={terminosAceptados}
                                                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                                                    setTerminosAceptados(e.target.checked);
                                                                    setErrors(prev => ({ ...prev, terminos: "" })); // Clear error on change
                                                                }}
                                                                required // Add required for HTML5 validation
                                                            />
                                                            <label htmlFor="terminos">
                                                                <span />
                                                                *He leído y acepto los{" "}
                                                                <a
                                                                    className="link-form"
                                                                    href={buildUrl('/nosotros/terminos-y-condiciones/')}
                                                                    style={{
                                                                        display: "contents",
                                                                        position: "relative",
                                                                    }}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer" // Added for security
                                                                >
                                                                    Términos y Condiciones y la Política de Privacidad *
                                                                </a>
                                                            </label>
                                                            {errors.terminos && <span className="error text-red-500 text-sm">{errors.terminos}</span>}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <button
                                                        className="btn-primary-rlx"
                                                        id="btnEnviar"
                                                        type="submit"
                                                        disabled={isSubmitting || !terminosAceptados}>
                                                        {isSubmitting ? "ENVIANDO..." : "ENVIAR MENSAJE"}
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
                    <div id="respuesta"></div>
                </div>
            </section>
            {/*<FooterRlxContacto />*/}
        </>
    );
};

export default WatchesForm;