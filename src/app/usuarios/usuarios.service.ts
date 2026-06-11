import { Injectable } from '@angular/core';

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: string;
  activo: boolean;
}

@Injectable({ providedIn: 'root' })
export class UsuariosService {
  private usuarios: Usuario[] = [
    { id: 1, nombre: 'Maximiliano Cruz', email: 'maxi@cruz.com', rol: 'Administrador', activo: true },
    { id: 2, nombre: 'Ana Lovelace', email: 'ana@tech.com', rol: 'Desarrollador', activo: true },
    { id: 3, nombre: 'Lucas Skywalker', email: 'lucas@force.com', rol: 'Visualizador', activo: false }
  ];

  getUsuarios() { return this.usuarios; }
  
  getUsuarioById(id: number) { return this.usuarios.find(u => u.id === id); }

  addUsuario(usuario: Omit<Usuario, 'id'>) {
    const nuevoId = this.usuarios.length > 0 ? Math.max(...this.usuarios.map(u => u.id)) + 1 : 1;
    this.usuarios.push({ id: nuevoId, ...usuario });
  }

  deleteUsuario(id: number) {
    this.usuarios = this.usuarios.filter(u => u.id !== id);
  }

  toggleEstado(id: number) {
    const user = this.usuarios.find(u => u.id === id);
    if (user) user.activo = !user.activo;
  }
}