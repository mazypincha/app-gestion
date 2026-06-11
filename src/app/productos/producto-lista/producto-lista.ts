import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from '../productos.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-producto-lista',
  imports: [CommonModule, RouterLink],
  templateUrl: './producto-lista.html',
  styleUrl: './producto-lista.css',
})
export class ProductoLista implements OnInit {

  lista: Producto[] = [];

  constructor(private prodService: ProductosService) {}

  ngOnInit() { 
    this.lista = this.prodService.getProductos(); 
  }

  borrar(id: number) { 
    this.prodService.deleteProducto(id); 
    this.lista = this.prodService.getProductos();
  }

}
