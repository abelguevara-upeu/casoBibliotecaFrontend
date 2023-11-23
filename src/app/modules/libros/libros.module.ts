import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { FormsModule } from '@angular/forms';
import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';



@NgModule({
  declarations: [
    LibrosComponent,
  ],
  imports: [
    CommonModule,
    LibrosRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ]
})
export class LibrosModule { }
