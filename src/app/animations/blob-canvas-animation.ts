import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CanvasBlob {
  private ctx: CanvasRenderingContext2D;
  canvas;

  constructor() {
    // this.renderer = rendererFactory.createRenderer(null, null);
  }

  createBlob(
    canvasContainer,
    fill: string,
    elementClass: string,
    circleX,
    circleY,
    radius
  ) {
    this.canvas = document.createElement("canvas");

    document.createElement("canvas");
    canvasContainer.appendChild(this.canvas);
    this.canvas.classList.add(elementClass);

    this.ctx = this.canvas.getContext("2d");
    var width = (this.canvas.width = 300),
      height = (this.canvas.height = 300);

    // window.addEventListener("resize", function () {
    //   width = this.canvas.nativeElement.width = window.innerWidth;
    //   height = this.canvas.nativeElement.height = window.innerHeight;
    // });

    var circ = (4 * (Math.sqrt(2) - 1)) / 3;
    var c = circ;

    var count = Math.PI;

    let drawBezierCircle = (cx, cy, r) => {
      var c;
      var offsetX = 20 * Math.sin(count);
      var offsetY = 15 * Math.cos(count * 2);
      r = r / 2;

      count += 0.01;

      this.ctx.translate(cx, cy); // translate to centerpoint

      this.ctx.beginPath();

      // top right
      c = circ + 0.2 * Math.sin(count);
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
      c = circ + 0.2 * Math.cos(count);
      this.ctx.bezierCurveTo(
        offsetX + r,
        offsetY + c * r,
        offsetX + c * r,
        offsetY + r,
        offsetX + 0,
        offsetY + r
      );

      // bottom left
      c = circ + 0.2 * Math.sin(count * 2);
      this.ctx.bezierCurveTo(
        offsetX + -c * r,
        offsetY + r,
        offsetX + -r,
        offsetY + c * r,
        offsetX + -r,
        offsetY + 0
      );

      // top left
      c = circ + 0.2 * Math.cos(count + 1);
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
      //requestAnimationFrame(render);
      // console.log(this.canvas);

      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.ctx.clearRect(0, 0, width, height);
      this.ctx.fillStyle = `${fill}`;

      drawBezierCircle(circleX, circleY, radius);
    };

    render();
  }
}
