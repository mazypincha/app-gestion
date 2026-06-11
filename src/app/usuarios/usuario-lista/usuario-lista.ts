import { Component, OnInit } from '@angular/core';
import { UsuariosService, Usuario } from '../usuarios.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-usuario-lista',
  imports: [CommonModule, RouterLink],
  templateUrl: './usuario-lista.html',
  styleUrl: './usuario-lista.css',
})
export class UsuarioLista {

  lista: Usuario[] = [];

  constructor(private userService: UsuariosService) {}

  ngOnInit() { 
    this.lista = this.userService.getUsuarios(); 
  }

  borrar(id: number) { 
    this.userService.deleteUsuario(id); 
    this.lista = this.userService.getUsuarios(); 
  }

  cambiarEstado(id: number) { 
    this.userService.toggleEstado(id); 
    this.lista = this.userService.getUsuarios(); 
  }

}
