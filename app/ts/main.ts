/// <reference path="d3.d.ts" />

var dataset : any = {
  theme: 'hello'
};

d3.select('.container').selectAll('p')
.data(dataset)
.enter()
.append('p')
.text("aaa");

