import { Component, OnInit, ElementRef } from '@angular/core';
import { Project } from "../project/project.component";
import { PROJECTS } from "./projects";
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'project-list',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: './app/project-list/project-list.component.html',
    styleUrls: [
        './app/project-list/project-list.component.css',
        './app/app.component.css'
        ]
})

export class ProjectListComponent implements OnInit {

    public projects = PROJECTS;

    constructor() { }


    ngOnInit() {

    }

 }