/// <reference path="drawController.ts" />
/// <reference path="jquery.d.ts" />

$(document)
  .ready(function() {

    var width: number = document.documentElement.clientWidth;
    var height: number = document.documentElement.clientHeight;
    var themeStack: string[] = [];

    d3.select('.container-fluid')
      .append('svg');

    var ctrl = new DrawController(width, height);
    ctrl.onDraw = function(theme: string, keywords: Keyword[]) {
      KeywordElement.draw(theme, keywords, width, height);
    }

    KeywordElement.onClear = function(keyword: Keyword, $self: any) {
      console.dir(keyword);
      console.dir($self);
      $self.transition()
        .duration(300)
        .ease('in')
        .attr({
          rx: width,
          ry: height
        })
        .remove();
      d3.selectAll('text')
        .data([])
        .exit()
        .remove();
      d3.selectAll('ellipse')
        .data([])
        .exit()
        .transition()
        .delay(300)
        .remove();
    }

    KeywordElement.onDrillDown = function(keyword: Keyword) {
      console.dir(themeStack);
      if (ctrl.isCurrentTheme(keyword.keyword)) {
        ctrl.setTheme(themeStack.pop());
      }else{
        themeStack.push(keyword.keyword);
        ctrl.setTheme(keyword.keyword);
      }
    }

    $('#inputbox')
      .on('keydown', function(e) {
        if (e.keyCode === 13) {
          if (this.value != "") {
            if (ctrl.validWord(this.value)) {
              ctrl.addKeyword(this.value);
              this.value = '';
            } else {
              alert("追加できません。既に入力済みです");
            }
          }
          return false;
        } else {
          return true;
        }
      })
      .focus();

  });
