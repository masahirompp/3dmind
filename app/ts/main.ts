/// <reference path="d3.d.ts" />

var width : number = document.documentElement.clientWidth;
var height : number = document.documentElement.clientHeight;

var dataset : any = [10];

var $svg : any = d3.select('.container-fluid').append('svg');

$svg.selectAll('ellipse')
.data(dataset)
.enter()
.append('ellipse')
.attr({
  cx: width / 2,
  cy: height / 2,
  rx: 200,
  ry: 100,
  stroke: 'red',
  'stroke-width': 5,
  fill: 'red'
});

$svg.selectAll('text')
.data(dataset)
.enter()
.append('text')
.text('aaa')
.attr({
  x: width / 2,
  y: height / 2
});
