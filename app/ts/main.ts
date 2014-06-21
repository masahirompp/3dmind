/// <reference path="d3.d.ts" />

var dataset : any = ['aaa','bbb','ccc'];

d3.select('.container').selectAll('p')
.data(dataset)
.enter()
.append('p')
.text(function(d){return d;});

