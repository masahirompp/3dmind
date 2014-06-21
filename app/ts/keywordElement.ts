/// <reference path="d3.d.ts" />

class KeywordElement {

  public static draw(theme: string, keywords: Keyword[], width: number, height: number): void {

    var svg: any = d3.select('svg');

    this.drawTheme(svg, [{keyword: theme, x: 0.5, y: 0.5}], width, height);
    this.drawKeywords(svg, keywords, width, height);

  }

  private static drawTheme(svg: any, keywords: Keyword[], width: number, height: number): void {
    this.drawEllipse(".theme", svg, keywords, width, height);
    this.drawText(".theme", svg, keywords, width, height);
  }

  private static drawKeywords(svg: any, keywords: Keyword[], width: number, height: number): void {
    this.drawEllipse(".keyword", svg, keywords, width, height);
    this.drawText(".keyword", svg, keywords, width, height);
  }

  private static drawEllipse(class_name: string, svg: any, keywords: Keyword[], width: number, height: number): void {
    svg.selectAll('ellipse' + class_name)
      .data(keywords)
      .enter()
      .append('ellipse')
      .attr({
        'class': class_name,
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

  }

  private static drawText(class_name: string, svg: any, keywords: Keyword[], width: number, height: number): void {
    svg.selectAll('text' + class_name)
      .data(keywords)
      .enter()
      .append('text')
      .text(function(d, i) {
        return d.keyword;
      })
      .attr({
        'class': class_name,
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

