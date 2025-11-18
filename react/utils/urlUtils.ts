// Utility functions for URL management
export const getBaseUrl = (): string => {
    // Always use the development workspace URL
    return 'https://glauser--glauser.myvtex.com';
};

export const getCurrentUrl = (path?: string): string => {
    const base = getBaseUrl();
    if (typeof window !== 'undefined' && window.location) {
        return window.location.href;
    }
    return path ? `${base}${path}` : base;
};

export const buildUrl = (path: string): string => {
    const base = getBaseUrl();
    return `${base}${path.startsWith('/') ? path : `/${path}`}`;
};

export const getStylesUrl = (): string => {
    const base = getBaseUrl();
    return `${base}/files/style.min.css`;
}; 