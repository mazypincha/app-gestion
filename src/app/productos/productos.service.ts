import { Injectable } from '@angular/core';

export interface Producto {
  id: number;
  titulo: string;
  precio: number;
  descripcion: string;
  descuento?: number;
}

@Injectable({ providedIn: 'root' })
export class ProductosService {

  private productos: Producto[] = [
    { id: 1, titulo: 'Monitor 24"', precio: 320000, descripcion: 'Monitor IPS curvo.', descuento: 10 },
    { id: 2, titulo: 'Teclado Mecánico Bluetooth', precio: 54000, descripcion: 'Switches intermitentes silenciosos y distribución ISO.' },
    { id: 3, titulo: 'Hub USB-C 8 en 1', precio: 29000, descripcion: 'Soporte HDMI 4K, lector SD y carga Power Delivery.' }
  ];

  getProductos() { return this.productos; }

  getProductoById(id: number) { return this.productos.find(p => p.id === id); }

  deleteProducto(id: number) {
    this.productos = this.productos.filter(p => p.id !== id);
  }
}