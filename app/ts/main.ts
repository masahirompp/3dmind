/// <reference path="d3.d.ts" />

var dataset : any = [10,20,30,40];

var $svg : any = d3.select('.container-fluid').append('svg');

$svg.selectAll('circle')
.data(dataset)
.enter()
.append('circle')
.attr({
  cx: function(d, i){
    return i * 100 + 50;
  },
  cy: 100,
  r: function(d){
    return d;
  },
  fill: 'red'
})
