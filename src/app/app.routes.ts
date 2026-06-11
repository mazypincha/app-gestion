import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { UsuarioFormulario } from './usuarios/usuario-formulario/usuario-formulario';

export const routes: Routes = [
  { path: '', component: Inicio }, 
  { path: 'crear', component: UsuarioFormulario },   
  { 
    path: 'usuarios', 
    loadChildren: () => import('./usuarios/usuarios.routes').then(m => m.USUARIOS_ROUTES) 
  },
  { 
    path: 'productos', 
    loadChildren: () => import('./productos/productos.routes').then(m => m.PRODUCTOS_ROUTES) 
  },
  { path: '**', redirectTo: '' }
];