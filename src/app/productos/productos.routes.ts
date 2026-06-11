import { Routes } from '@angular/router';
import { ProductoLista } from './producto-lista/producto-lista';
import { ProductoDetalle } from './producto-detalle/producto-detalle';

export const PRODUCTOS_ROUTES: Routes = [
  { path: '', component: ProductoLista },
  { path: ':id', component: ProductoDetalle }
];