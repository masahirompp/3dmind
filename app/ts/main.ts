/// <reference path="d3.d.ts" />

var width: number = document.documentElement.clientWidth;
var height: number = document.documentElement.clientHeight;

d3.select('.container-fluid')
  .append('svg');

class Ellipse {
  private x: number;
  private y: number;
  private text: string;

  constructor(text: string, x: number, y: number) {
    this.x = x;
    this.y = y;
    this.text = text;
  }

  public draw(): void {

    var $svg: any = d3.select('svg');

    $svg.selectAll('ellipse')
      .data([this.text])
      .enter()
      .append('ellipse')
      .attr({
        cx: this.x,
        cy: this.y,
        rx: 100,
        ry: 50,
        fill: 'red'
      });

    $svg.selectAll('text')
      .data([this.text])
      .enter()
      .append('text')
      .text('text')
      .attr({
        'x': this.x,
        'y': this.y
      });

  }
}

var test = new Ellipse('aaaaaaa', width / 2, height / 2);
test.draw();
