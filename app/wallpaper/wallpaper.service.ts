import { Injectable } from '@angular/core';

export interface Box {
    shapes: Shape[];
    animate: boolean;
    pulse: number;
    jitter: boolean;
};

export interface Shape {
    width: number;
    height: number;
    offsetX: number;
    offsetY: number;
    colour: string;
    left?: boolean;
    top?: boolean;
};

enum BoxSize {
    Small,
    Medium,
    Large
};

export class WallpaperService {

    private colours = ["#C2C7B1", "#A0A493", "#878685", "#322B42", '#6e6b75', '#6e6b75'];
    public boxWidth = 20;
    public initialData: Box[][] = [];

    constructor() { }

    public generateInitialData(screenWidth: number, screenHeight: number) {

        let currentOffsetX = 0,
            currentOffsetY = 0;

        // Generate boxes until we run out of vertical screen space
        while (currentOffsetY < screenHeight) {

            this.initialData.push(this.generateBoxArrayData(currentOffsetX, currentOffsetY));

            // Adjust global offset variables for next cycle
            currentOffsetX += this.boxWidth * 4;
            if (currentOffsetX > screenWidth) {
                currentOffsetX = 0;
                currentOffsetY += this.boxWidth * 4;
            } 
        }
    }

    public updateInitialData() {

        let count = 4,
            jitter = setInterval(() => {

            for (let boxArray of this.initialData)
                for (let box of boxArray) 
                    if (box.jitter) this.createShapes(0,0,0, box.shapes);
            
            count--;
            if (!count) clearInterval(jitter);

        }, 100);
    }

    private generateBoxArrayData(offsetX: number, offsetY: number) {

        let boxArray: Box[] = [];
        if (Math.random() > 0.9) 
            boxArray.push(this.generateBoxData(this.boxWidth * 4, offsetX, offsetY, BoxSize.Large));
        else
            for (let i = 0; i < 4; i++) {
                let _offsetX = offsetX + (i % 2) * (this.boxWidth * 2);
                let _offsetY = offsetY + Math.floor(i / 2) * (this.boxWidth * 2);
                if (Math.random() > 0.1)
                    boxArray.push(this.generateBoxData(this.boxWidth * 2, _offsetX, _offsetY, BoxSize.Medium));
                else 
                    for (let i = 0; i < 4; i++) {
                        let __offsetX = _offsetX + (i % 2) * (this.boxWidth);
                        let __offsetY = _offsetY + Math.floor(i / 2) * (this.boxWidth);
                        boxArray.push(this.generateBoxData(this.boxWidth, __offsetX, __offsetY, BoxSize.Small));
                    }
            }

        return boxArray;
    }

    private generateBoxData(boxWidth: number, offsetX:number, offsetY:number, size: BoxSize): Box {

        let shapes = this.createShapes(boxWidth, offsetX, offsetY);
        
        return {
            animate: false,
            pulse: 0,
            shapes,
            jitter: size === BoxSize.Large || Math.random() > 0.5 && size !== BoxSize.Small
        };
    }

    private createShapes(boxWidth:number, offsetX:number, offsetY:number, shapes: any[] = []): Shape[] {

        shapes[0] = shapes[0] || {};
        shapes[1] = shapes[1] || {left: true};
        shapes[2] = shapes[2] || {left: true, top: true};
        shapes[3] = shapes[3] || {top: true};

        let overallWidth = shapes[0].width || Math.floor(Math.random() * (boxWidth * 0.2)) + (boxWidth * 0.8),
            overallOffsetX = shapes[0].offsetX || offsetX + (Math.random() < 0.5 ? boxWidth - overallWidth : 0),
            overallOffsetY = shapes[0].offsetY || offsetY + (Math.random() < 0.5 ? boxWidth - overallWidth : 0),
            leftWidth = Math.min(overallWidth - 10, Math.max(10, Math.floor(Math.random() * overallWidth))),
            topHeight = Math.min(overallWidth - 10, Math.max(10, Math.floor(Math.random() * overallWidth)));

        for (let shape of shapes) {
            shape.width = shape.left ? leftWidth : shape.top ? overallWidth - leftWidth : overallWidth;
            shape.height = shape.top ? topHeight : overallWidth;
            shape.offsetX = shape.left || !shape.top ? overallOffsetX : overallOffsetX + leftWidth;
            shape.offsetY = overallOffsetY;
            shape.colour = shape.colour || this.colours[Math.floor(Math.random() * this.colours.length)];
        }
  
        return shapes;
    }

 }