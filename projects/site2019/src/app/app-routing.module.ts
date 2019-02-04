import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceholderPageComponent } from './placeholder-page/placeholder-page.component';
import { environment } from '../environments/environment';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeEarlyPageComponent } from './home-early-page/home-early-page.component';
import { CodeOfConductPageComponent } from './code-of-conduct-page/code-of-conduct-page.component';
import { SpeakersPageComponent } from './speakers-page/speakers-page.component';
import { SchedulePageComponent } from './schedule-page/schedule-page.component';
import { LogoPageComponent } from './logo-page/logo-page.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { FormPageComponent } from './form-page/form-page.component';

const getHomePageComponent = (id) => {
  switch (id) {
    case 0:
      return PlaceholderPageComponent;
    case 1:
      return HomeEarlyPageComponent;
    case 2: 
      return HomePageComponent;
  }
}

const routes: Routes = [
  {
    path: 'coc',
    component: CodeOfConductPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'logo',
    component: LogoPageComponent
  },
  {
    path: 'speakers',
    component: SpeakersPageComponent
  },
  {
    path: 'speakers/:id',
    component: SpeakersPageComponent
  },
  {
    path: 'form/:name',
    component: FormPageComponent
  },
  {
    path: 'schedule',
    component: SchedulePageComponent
  },
  {
    path: 'team',
    component: TeamPageComponent
  },
  {
    path: '',
    component: getHomePageComponent(environment.featureFlag.homePageStage),
    pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
