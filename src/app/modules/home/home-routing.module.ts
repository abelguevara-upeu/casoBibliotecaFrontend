import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
{
  path:'',
  component: HomeComponent,
  children: [
    {
        path: 'welcome',
        loadChildren: () => import('../welcome/welcome.module').then(m => m.WelcomeModule)
      },
      {
        path: 'libros',
        loadChildren: () => import('../libros/libros.module').then(m => m.LibrosModule),
      },
      {
        path:'**',
        redirectTo:'welcome'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
