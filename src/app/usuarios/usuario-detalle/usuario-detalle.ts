import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsuariosService, Usuario } from '../usuarios.service';

@Component({
  selector: 'app-usuario-detalle',
  imports: [CommonModule, RouterLink],
  templateUrl: './usuario-detalle.html',
  styleUrl: './usuario-detalle.css',
})
export class UsuarioDetalle {

  user: Usuario | undefined;

  constructor(private route: ActivatedRoute, private userService: UsuariosService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.user = this.userService.getUsuarioById(id);
  }

}
