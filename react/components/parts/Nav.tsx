import React from 'react';
import { useRuntime } from 'vtex.render-runtime';
import { useCssHandles } from 'vtex.css-handles';
import '../../main-style.css';

const CSS_HANDLES = [
    //HEADER "rlx-sm btn-toggle"//
    'rlx_header_menu_top', 'rlx_lg', 'menu_list_rolex', 'rlx_sm', 'btn_toggle', 'nav_link', 'active'
] as const

interface MenuItem {
    text: string;
    href: string;
}

const Nav: React.FC = () => {
    const handles = useCssHandles(CSS_HANDLES)
    const runtime = useRuntime();
    const currentPath = runtime.route.path;

    const menuItems: MenuItem[] = [
        { text: 'Descubra Rolex', href: '/rolex/' },
        { text: 'Relojes Rolex', href: '/rolex/coleccion-rolex/' },
        { text: 'Nuevos Modelos 2025', href: '/rolex/nuevos-modelos-2025/' },
        { text: '«Savoir-faire» relojero', href: '/rolex/watchmaking/' },
        { text: 'Mantenimiento', href: '/rolex/asistencia-rolex/' },
        { text: 'El mundo de Rolex', href: '/rolex/mundo-rolex/' },
        { text: 'Contáctenos', href: '/rolex/contactenos/' },
    ];

    return (
        <>
            <nav className={`${handles.rlx_header_menu_top} ${handles.rlx_lg}`} role="navigation">
                <ul id="rlx-menu-toggle" className={`${handles.menu_list_rolex}`}>
                    {menuItems.map((item: MenuItem, index: number) => (
                        <li key={index}>
                            <a
                                className={`${handles.nav_link} button-label ${currentPath === item.href ? `${handles.active}` : ''
                                    }`}
                                href={item.href}
                            >
                                {item.text}
                            </a>
                        </li>
                    ))}
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