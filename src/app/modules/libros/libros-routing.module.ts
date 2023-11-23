import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrosComponent } from './libros.component';

const routes: Routes = [
  { path: 'gestionar', component: LibrosComponent,
    loadChildren: () => import('./vista/vista.module').then(module => module.VistaModule)
  },
  {
    path: '**',
    redirectTo:'  ' //fixed
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class LibrosRoutingModule {}
