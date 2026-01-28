import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Breadcrumb } from "../pages/breadcrumbs/breadcrumbs";

@Component({
  // El nombre de la etiqueta para usar este layout.
  selector: 'app-layout',
  // standalone: true significa que este componente se manda solo, no necesita un módulo padre.
  // Analogía: Es un trabajador autónomo, trae sus propias herramientas.
  standalone: true,
  // Necesitamos importar RouterModule aquí para que funcionen los enlaces en el HTML del layout.
  imports: [RouterModule, Breadcrumb],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css'] // Nota: Puede ser 'styleUrl' (singular) o 'styleUrls' (plural/array).
})
export class Layout { }