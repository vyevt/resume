import { NgModule } from '@angular/core';
import { RouterModule, Routes, TitleStrategy } from '@angular/router';
 import { ResumeLayout1Component } from './layouts/resume-layout1/resume-layout1.component';
import { SiteNamePageTitleStrategy } from './site-name-page-title-strategy';

const routes: Routes = [{
  path: '',
  component: ResumeLayout1Component,
   children: [
    

 
  ]
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
