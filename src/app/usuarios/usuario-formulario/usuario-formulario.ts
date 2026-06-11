import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuario-formulario',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './usuario-formulario.html',
  styleUrl: './usuario-formulario.css',
})
export class UsuarioFormulario {

  form: FormGroup;
  
  constructor(private fb: FormBuilder, private userService: UsuariosService, private router: Router) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      rol: ['Visualizador', Validators.required]
    });
  }

  guardar() {
    if (this.form.valid) {
      this.userService.addUsuario({ ...this.form.value, activo: true });
      this.router.navigate(['/usuarios']);
    }
  }

}
