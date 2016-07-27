import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { PageHeaderComponent } from './header/header.component';
import { WallpaperComponent } from './wallpaper/wallpaper.component';
import { WallpaperService } from './wallpaper/wallpaper.service';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project/project.component';
import { AboutMeComponent } from './aboutme/aboutme.component';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives: [ROUTER_DIRECTIVES, WallpaperComponent, PageHeaderComponent],
    styleUrls: ['./app/app.component.css'],
    providers: [WallpaperService]
})
export class AppComponent { }
