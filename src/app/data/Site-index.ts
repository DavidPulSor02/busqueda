export type SiteItemType = 'pagina' | 'seccion';

export interface SiteItem {
    id: string;
    title: string;
    description: string;
    path: string;          // ruta Angular, ej: '/menu'
    type: SiteItemType;    // tipo para filtros
    section: string;       // categoría o sección
    keywords: string[];    // búsqueda
    otro?: string;         // opcional
}

export const SITE_INDEX: SiteItem[] = [
    {
        id: 'inicio',
        title: 'Inicio',
        description: 'Página principal del sitio de práctica.',
        path: '/',
        type: 'pagina',
        section: 'Estructura del sitio',
        keywords: ['inicio', 'home', 'principal', 'estructura'],
        otro: 'asdasd',
    },
    {
        id: 'elementos',
        title: 'Elementos del sitio',
        description: 'Identifica los elementos que componen un sitio web.',
        path: '/elementos',
        type: 'pagina',
        section: 'Estructura del sitio',
        keywords: ['elementos', 'sitio', 'header', 'footer', 'main', 'layout'],
    },
    {
        id: 'menu',
        title: 'Menú',
        description: 'Elementos principales del menú web y su utilidad.',
        path: '/menu',
        type: 'pagina',
        section: 'Navegación',
        keywords: ['menu', 'navegación', 'navbar', 'links'],
    },
    {
        id: 'breadcrumbs',
        title: 'Breadcrumbs',
        description: 'Funcionamiento y utilidad de los breadcrumbs.',
        path: '/breadcrumbs',
        type: 'pagina',
        section: 'Navegación',
        keywords: ['breadcrumbs', 'migas', 'ruta', 'ux'],
    },
    {
        id: 'mapa',
        title: 'Mapa del sitio',
        description: 'Diseño del mapa del sitio y relación con la navegación.',
        path: '/mapa-sitio',
        type: 'pagina',
        section: 'Estructura del sitio',
        keywords: ['mapa', 'sitemap', 'estructura'],
    },
    {
        id: 'error404',
        title: 'Error 404',
        description: 'Página para rutas no existentes.',
        path: '/no-existe',
        type: 'seccion',
        section: 'Errores',
        keywords: ['404', 'error', 'no encontrado'],
    },
];
