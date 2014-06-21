/// <reference path="d3.d.ts" />

class KeywordElement {

  public static draw(theme: string, keywords: Keyword[], width: number, height: number): void {

    var svg: any = d3.select('svg');

    this.drawTheme(svg, [{
      keyword: theme,
      x: 0.5,
      y: 0.5
    }], width, height);
    this.drawKeywords(svg, keywords, width, height);

  }

  private static drawTheme(svg: any, keywords: Keyword[], width: number, height: number): void {
    this.drawEllipse("theme", svg, keywords, width, height);
    this.drawText("theme", svg, keywords, width, height);
  }

  private static drawKeywords(svg: any, keywords: Keyword[], width: number, height: number): void {
    this.drawEllipse("keyword", svg, keywords, width, height);
    this.drawText("keyword", svg, keywords, width, height);
  }

  private static drawEllipse(class_name: string, svg: any, keywords: Keyword[], width: number, height: number): void {

    var ramp = d3.scale.linear()
      .domain([0, 20])
      .range(["red", "#FFCCCC"]);

    svg.selectAll('ellipse.' + class_name)
      .data(keywords)
      .enter()
      .append('ellipse')
      .on('dblclick', function(d) {
        KeywordElement.onClear(d, d3.select(this));
//        KeywordElement.onDrillDown(d)
      })
      .attr({
        'class': class_name,
        cx: function(d, i) {
          return d.x * (width - 100) + 50;
        },
        cy: function(d, i) {
          return d.y * (height - 50) + 25;
        },
        rx: 0,
        ry: 0,
        fill: function(d, i) {
          return ramp(i);
        }
      })
      .transition()
      .duration(600)
      .attr({
        rx: 100,
        ry: 50
      });
      jQuery.each(keywords, function(i:number, kw: Keyword) {
        var data = [1,2,3,4,5];

        svg.selectAll('circle.' + i)
          .data(data)
          .enter()
          .append('circle')
          .attr({
            'class': "" + i,
            cx: function(d, j) {
              return d.x * (width - 100) + 50 + (100 * Math.sin(j * 10 * (Math.PI / 180)));
            },
            cy: function(d, j) {
              return d.x * (width - 100) + 50 + (50 * Math.cos(j * 10 * (Math.PI / 180)));
            },
            r: 5,
            fill: "red"
          });
      });

  }

  public static onClear: {
    (keywords: Keyword, $self: any): void;
  };

  public static onDrillDown: {
    (keywords: Keyword): void;
  };

  private static drawText(class_name: string, svg: any, keywords: Keyword[], width: number, height: number): void {
    svg.selectAll('text.' + class_name)
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
        'font-size': 0,
      })
      .transition()
      .duration(700)
      .attr({
        'font-size': 20,
      });
  }
}
