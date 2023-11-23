import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VistaRoutingModule } from './vista-routing.module';

import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { EditarLibroComponent } from './pages/editar-libro/editar-libro.component';
import { InsertarLibroComponent } from './pages/insertar-libro/insertar-libro.component';
import { ListaLibroComponent } from './pages/lista-libro/lista-libro.component';



@NgModule({
  declarations: [
    ListaLibroComponent,
    InsertarLibroComponent,
    EditarLibroComponent
  ],
  imports: [
    CommonModule,
    VistaRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
  ]
})
export class VistaModule { }
