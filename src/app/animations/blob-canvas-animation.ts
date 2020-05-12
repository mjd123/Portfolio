import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CanvasBlob {
    private ctx: CanvasRenderingContext2D;
    canvas;

    constructor() {}

    createBlob(
        canvasContainer,
        fill: string,
        elementClass: string,
        circleX,
        circleY,
        radius,
        moveToX = 20,
        moveToY = 15,
        modifier = 0.2
    ) {
        this.canvas = document.createElement('canvas');

        document.createElement('canvas');
        canvasContainer.appendChild(this.canvas);
        this.canvas.classList.add(elementClass);

        this.ctx = this.canvas.getContext('2d');
        var width = (this.canvas.width = 300),
            height = (this.canvas.height = 300);

        var circ = (4 * (Math.sqrt(2) - 1)) / 3;
        var c = circ;

        var count = Math.PI * 2;

        let drawBezierCircle = (circleX, circleY, radius, modifier) => {
            var c;
            var offsetX = moveToX * Math.sin(count); //20 * Math.sin(count);
            var offsetY = moveToY * Math.cos(count * 2); //15 * Math.cos(count * 2);
            var r = radius / 2;

            //speed
            count += 0.01;

            this.ctx.translate(circleX, circleY); // translate to centerpoint

            this.ctx.beginPath();

            // top right
            c = circ + modifier * Math.sin(count);
            this.ctx.moveTo(offsetX + 0, offsetY + -r);
            this.ctx.bezierCurveTo(
                offsetX + c * r,
                offsetY + -r,
                offsetX + r,
                offsetY + -c * r,
                offsetX + r,
                offsetY + 0
            );

            // bottom right
            c = circ + modifier * Math.cos(count);
            this.ctx.bezierCurveTo(
                offsetX + r,
                offsetY + c * r,
                offsetX + c * r,
                offsetY + r,
                offsetX + 0,
                offsetY + r
            );

            // bottom left
            c = circ + modifier * Math.sin(count * 2);
            this.ctx.bezierCurveTo(
                offsetX + -c * r,
                offsetY + r,
                offsetX + -r,
                offsetY + c * r,
                offsetX + -r,
                offsetY + 0
            );

            // top left
            c = circ + modifier * Math.cos(count + 1);
            this.ctx.bezierCurveTo(
                offsetX + -r,
                offsetY + -c * r,
                offsetX + -c * r,
                offsetY + -r,
                offsetX + 0,
                offsetY + -r
            );

            this.ctx.fill();
        };

        let render = () => {
            requestAnimationFrame(render);

            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            this.ctx.clearRect(0, 0, width, height);
            this.ctx.fillStyle = `${fill}`;

            drawBezierCircle(circleX, circleY, radius, modifier);
        };

        render();
    }
}
