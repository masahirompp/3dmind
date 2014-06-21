/// <reference path="d3.d.ts" />

class KeywordElement {

  public static draw(theme: string, keywords: Keyword[], width: number, height: number): void {

    var $svg: any = d3.select('svg');

    $svg.selectAll('ellipse')
      .data(keywords)
      .enter()
      .append('ellipse')
      .attr({
        cx: function(d, i) {
          return d.x * (width - 100) + 50;
        },
        cy: function(d, i) {
          return d.y * (height - 50) + 25;
        },
        rx: 100,
        ry: 50,
        fill: 'red'
      });

    // $svg.selectAll('ellipse')
    //   .data([this.text])
    //   .update()
    //   .attr({
    //     cx: this.x,
    //     cy: this.y,
    //     rx: 100,
    //     ry: 50,
    //     fill: 'red'
    //   });

    $svg.selectAll('text')
      .data(keywords)
      .enter()
      .append('text')
      .text(function(d, i) {
        return d.keyword;
      })
      .attr({
        x: function(d, i) {
          return d.x * (width - 100) + 50;
        },
        y: function(d, i) {
          return d.y * (height - 50) + 25 + 10;
        },
        'text-anchor': 'middle',
        'font-size': 20,
      });

  }
}
