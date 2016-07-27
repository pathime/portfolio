import { provideRouter, RouterConfig } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project/project.component';
import { AboutMeComponent } from './aboutme/aboutme.component';

const routes: RouterConfig = [
  { path: '', component: ProjectListComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: 'project/:slug', component: ProjectComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];