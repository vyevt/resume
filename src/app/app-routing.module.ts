import { NgModule } from '@angular/core';
import { RouterModule, Routes, TitleStrategy } from '@angular/router';
import { SiteNamePageTitleStrategy } from './site-name-page-title-strategy';
import { AppComponent } from './app.component';

const routes: Routes = [{
  path: '',
  component: AppComponent,
},
{
  path: 'about',
  loadChildren: () => import('./feature/about/about-routing.module').then(m => m.AboutRoutingModule)
  , title: "About",

},
{
  path: 'FAQ',
  loadChildren: () => import('./feature/FAQ/FAQ-routing.module').then(m => m.FAQRoutingModule)
  , title: "FAQ",

},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    {
      provide: TitleStrategy,
      useClass: SiteNamePageTitleStrategy
    }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
