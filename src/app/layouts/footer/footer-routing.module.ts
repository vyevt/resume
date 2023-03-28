import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer.component';

const routes: Routes = [{ path: '', component: FooterComponent }

    /*{
      path: '',
      loadChildren: () => import('./layouts/footer/footer.module').then(m => m.FooterModule),
      outlet: 'footer'
    },*/

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooterRoutingModule { }
