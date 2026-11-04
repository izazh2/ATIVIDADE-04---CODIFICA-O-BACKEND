
import { Routes } from '@angular/router';

import { HomeComponent } from './home-component/home-component';

import { ProdutosComponent } from './produtos/produtos';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path:'produtos',
    component : ProdutosComponent
  }
];
