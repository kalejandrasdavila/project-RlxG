import React, { useState, useEffect } from 'react';
import { useCssHandles } from 'vtex.css-handles';

const CSS_HANDLES = [
    'rlx_header_menu_top', 'rlx_lg', 'menu_list_rolex', 'rlx_sm', 'btn_toggle', 'nav_link', 'active'
] as const

interface MenuItem {
    text: string;
    href: string;
}

const Nav: React.FC = () => {
    const handles = useCssHandles(CSS_HANDLES)
    const [activeLink, setActiveLink] = useState<string>("");

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setActiveLink(window.location.pathname);
        }
    }, []);

    const menuItems: MenuItem[] = [
        { text: 'Descubra Rolex', href: 'https://glauser.myvtex.com/rolex/' },
        { text: 'Relojes Rolex', href: 'https://glauser.myvtex.com/rolex/coleccion-rolex/' },
        { text: 'Nuevos Modelos 2025', href: 'https://glauser.myvtex.com/rolex/nuevos-modelos-2025/' },
        { text: '«Savoir-faire» relojero', href: 'https://glauser.myvtex.com/rolex/watchmaking/' },
        { text: 'Mantenimiento', href: 'https://glauser.myvtex.com/rolex/asistencia-rolex/' },
        { text: 'El mundo de Rolex', href: 'https://glauser.myvtex.com/rolex/mundo-rolex/' },
        { text: 'Contáctenos', href: 'https://glauser.myvtex.com/rolex/contactenos/' },
    ];

    return (
        <>
            <nav className={`${handles.rlx_header_menu_top} ${handles.rlx_lg}`} role="navigation">
                <ul id="rlx-menu-toggle" className={`${handles.menu_list_rolex}`}>
                    {menuItems.map((item: MenuItem, index: number) => {
                        // Determinar si el enlace está activo
                        const isActive = activeLink === item.href ||
                            (index === 0 && activeLink === '/rolex/') ||
                            (index === 0 && activeLink.includes('/rolex') && activeLink.split('/').length === 3);

                        return (
                            <li key={index}>
                                <a
                                    className={`${handles.nav_link} button-label ${isActive ? `${handles.active}` : ""}`}
                                    href={item.href}
                                    onClick={() => setActiveLink(item.href)}
                                >
                                    {item.text}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <a id="rlx-menu-top" className={`${handles.rlx_sm} ${handles.btn_toggle}`}>
                Menú
                <i>
                    <svg
                        className="pointer-events-none group-hover:fill-ocean-green fill-white"
                        height="13"
                        width="13"
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-hidden="true"
                        fill="white"
                    >
                        <path d="M15,3.5l-7.5,8.1L0,3.5" />
                    </svg>
                </i>
            </a>
        </>
    );
};

export default Nav;