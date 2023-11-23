import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarLibroComponent } from './pages/editar-libro/editar-libro.component';
import { InsertarLibroComponent } from './pages/insertar-libro/insertar-libro.component';
import { ListaLibroComponent } from './pages/lista-libro/lista-libro.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'listarLibro', component: ListaLibroComponent},
      { path: 'insertarLibro', component: InsertarLibroComponent},
      { path: 'editarLibro/:id', component: EditarLibroComponent}, // Agregué ':id' para indicar que la ruta espera un parámetro
      { path: '', redirectTo: 'listarLibro', pathMatch: 'full'},
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class VistaRoutingModule { }

