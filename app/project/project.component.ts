import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { PROJECTS } from "../project-list/projects";

export interface Project {
    name: String;
    description: String;
    paragraphs: String[];
    disclaimer?: String;
    url?: String;
    github?: String;
    slug: String;
};

@Component({
    selector: 'project',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: './app/project/project.component.html',
    styleUrls: [
        './app/project/project.component.css',
        './app/app.component.css'
        ]
})

export class ProjectComponent implements OnInit, OnDestroy {

    private sub: any;
    private projects = PROJECTS;

    public project: Project;

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.project = this.projects.filter(project => project.slug === params['slug'])[0];
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
 }