import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
    selector: 'about-me',
    templateUrl: './app/aboutme/aboutme.component.html',
    styleUrls: [
        './app/app.component.css'
        ],
    styles: [`
        a {
            font-weight: 700;
        }
    `]
})

export class AboutMeComponent implements OnInit {

    constructor() { }


    ngOnInit() {

    }

 }