/// <reference path="">

var data = {
  theme: 'hello'
};

d3.select('.container').selectAll('p').data(data).enter().append('p').text(function(d){
  return d;
});

