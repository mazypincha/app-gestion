import { Routes } from '@angular/router';
import { UsuarioLista } from './usuario-lista/usuario-lista';
import { UsuarioDetalle } from './usuario-detalle/usuario-detalle';

export const USUARIOS_ROUTES: Routes = [
  { path: '', component: UsuarioLista },
  { path: ':id', component: UsuarioDetalle } 
];