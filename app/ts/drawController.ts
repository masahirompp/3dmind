interface Keyword {
  keyword: string;
  x: number;
  y: number;
}

class DrawController {

  private height: number;
  private width: number;

  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
  }

  public onDraw: {
    (theme: string, keywords: Keyword[]): void;
  };

  private themes: {
    [key: string]: Keyword[]
  } = {};

  private currentTheme: string;

  public setTheme(theme: string): void {
    this.currentTheme = theme
    if (this.themes[theme]) {
      this.onDraw(theme, this.themes[theme])
    } else {
      this.themes[theme] = [];
      this.onDraw(theme, [])
    }
  }

  public addKeyword(keywordString: string): void {
    var keyword = {
      keyword: keywordString,
      x: Math.random(), // * this.width,
      y: Math.random() // * this.height
    };
    this.themes[this.currentTheme].push(keyword);
    this.onDraw(this.currentTheme, this.themes[this.currentTheme]);
  }
}
