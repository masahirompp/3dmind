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

$(document)
  .ready(function() {
    $('#inputbox')
      .on('keydown', function(e) {
        if (e.keyCode === 13) {
          if (this.value != "") {
            ctrl.addKeyword(this.value);
            this.value = '';
          }
          return false;
        } else {
          return true;
        }
      }).focus();
  });
