import { Component, OnInit, ElementRef } from '@angular/core';
import { WallpaperService } from './wallpaper.service';
import { Shape } from './wallpaper.service';
import { Box } from './wallpaper.service';

@Component({
    selector: 'wallpaper',
    template: `
        <canvas id="canvas" 
        (mousemove)="animate($event)" 
        (click)="handleClick()" 
        [width]="screenWidth" 
        [height]="screenHeight"></canvas>`,
    styles: [`
        canvas {
            position: fixed;
            overflow: hidden;
        }
    `]
})

export class WallpaperComponent implements OnInit {

    constructor(private elementRef: ElementRef, private wallpaperService: WallpaperService ) { }

    private canvas: any;
    private ctx: any;
    private boxesX: number;
    private initialData = this.wallpaperService.initialData;
    private boxWidth = this.wallpaperService.boxWidth;

    public screenWidth: number;
    public screenHeight: number;

    ngOnInit() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.screenWidth = window.innerWidth - 16;
        this.screenHeight = window.innerHeight - 16;
        this.boxesX = Math.ceil(this.screenWidth / (this.boxWidth * 4));
        this.wallpaperService.generateInitialData(this.screenWidth, this.screenHeight);
        this.draw();
    }

    public animate(e: MouseEvent) {
        let boxX = Math.floor(e.clientX / (this.boxWidth * 4));
        let boxY = Math.floor(e.clientY / (this.boxWidth * 4));
        let boxArray = this.initialData[boxY * this.boxesX + boxX];
        for (let box of boxArray) {
            let shape = box.shapes[0];
            if (e.clientX > shape.offsetX && e.clientX < shape.offsetX + shape.width && e.clientY > shape.offsetY && e.clientY < shape.offsetY + shape.width)
                box.animate = true;
        }
    }

    public handleClick() {
        this.wallpaperService.updateInitialData();
    }

    private draw() {

        let requestAnimationFrame = window.requestAnimationFrame || 
                                    window.msRequestAnimationFrame;             
        let render = () => {

            this.ctx.clearRect(0, 0, this.screenWidth, this.screenHeight);

            for (let boxArray of this.initialData) {

                for (let box of boxArray) {

                    if (box.animate) {
                        if (box.pulse > Math.PI * 2) {
                            box.pulse = 0;
                            box.animate = false;
                        } else {
                            box.pulse += Math.PI / 16;
                        }
                    }

                    for (let shape of box.shapes) {

                        let height = shape.height;

                        if (box.animate && shape.top) {
                            let y = Math.abs(Math.cos(box.pulse) - 1) * 2;
                            height = shape.left ? height - y : height + y;
                        }

                        this.ctx.fillStyle = shape.colour;
                        this.ctx.fillRect(shape.offsetX, shape.offsetY, shape.width, height);
                    }
                }
            };

            requestAnimationFrame(render);
        }
        
        render();
    }

 }