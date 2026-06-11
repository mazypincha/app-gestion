import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductosService, Producto } from '../productos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-detalle',
  imports: [CommonModule, RouterLink],
  templateUrl: './producto-detalle.html',
  styleUrl: './producto-detalle.css',
})
export class ProductoDetalle {
  
  prod: Producto | undefined;
  
  constructor(private route: ActivatedRoute, private prodService: ProductosService) {}
  
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.prod = this.prodService.getProductoById(id);
  }

}
