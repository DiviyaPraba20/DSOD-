import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DSODComingSoonComponent } from './shared/components/coming soon/coming-soon.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'education',
        loadChildren: './pages/education/education.module#EducationModule'
      },
      {
        path: 'careers',
        loadChildren: './pages/career/career.module#CareerModule'
      },
      {
        path: 'sponsors',
        loadChildren: './pages/sponsors/sponsors.module#SponsorsModule'
      },
      {
        path: 'development',
        loadChildren: './pages/development/development.module#DevelopmentModule'
      },
      {
        path: 'community',
        loadChildren: './pages/community/community.module#CommunityModule'
      },
      {
        path: 'practice',
        loadChildren: './pages/dso-practice/dso-practice.module#DSOPracticeModule'
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'privacy-policy',
        component: PrivacyComponent
      },
      {
        path: '',
        loadChildren: './pages/home/home.module#HomeModule'
      }
    ]
  },
  {
    path: '**',
    component: DSODComingSoonComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
