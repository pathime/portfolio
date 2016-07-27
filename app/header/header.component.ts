import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { WallpaperService } from '../wallpaper/wallpaper.service';


@Component({
    selector: 'page-header',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: './app/header/header.component.html',
    styleUrls: [
        './app/header/header.component.css',
        './app/app.component.css']
})

export class PageHeaderComponent implements OnInit {

    constructor(private wallpaperService: WallpaperService) { }

    ngOnInit() {

    }

    public updateWallpaper() {
        this.wallpaperService.updateInitialData();
    }


 }