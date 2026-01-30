import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Inicio } from './pages/inicio/inicio';
import { ElementosSitio } from './pages/elementos-sitio/elementos-sitio';
import { BreadcrumbsPage } from './pages/breadcrumbs/breadcrumbs';
import { Menu } from './pages/menu/menu';
import { MapaSitio } from './pages/mapa-sitio/mapa-sitio';
import { Error404 } from './pages/error-404/error-404';
import { BusquedaComponent } from './pages/busqueda/busqueda';

export const routes: Routes = [

    {
        path: '',
        component: Inicio,
        pathMatch: 'full'
    },
    {
        path: 'elementos',
        component: ElementosSitio
    },
    {
        path: 'menu',
        component: Menu
    },
    {
        path: 'breadcrumbs',
        component: BreadcrumbsPage
    },
    {
        path: 'mapa-sitio',
        component: MapaSitio
    },
    {
        path: 'busqueda',
        component: BusquedaComponent
    },
    {
        path: '**',
        component: Error404
    }

];
