/// <reference path="drawController.ts" />
/// <reference path="jquery.d.ts" />

var width: number = document.documentElement.clientWidth;
var height: number = document.documentElement.clientHeight;

d3.select('.container-fluid')
  .append('svg');

var ctrl = new DrawController(width, height);
ctrl.onDraw = function(theme: string, keywords: Keyword[]) {
  KeywordElement.draw(theme, keywords, width, height);
}

ctrl.setTheme('aaaa');
ctrl.addKeyword('bbbbb');
ctrl.addKeyword('あんこう');
ctrl.addKeyword('まままｍ');
ctrl.addKeyword('さんま');

$(document)
  .ready(function() {
    $('#inputbox')
      .on('keydown', function(e) {
        if (e.keyCode === 13) {
          ctrl.addKeyword(this.value);
          this.value = '';
          return false;
        } else {
          return true;
        }
      })
  });
