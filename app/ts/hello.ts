module Greeting {
  export class Hello {
    constructor(private text:string) {
    }
      say() : void{
      console.log(this.text + " and you!");
    }
  }
}
var hello:Greeting.Hello = new Greeting.Hello("Hello, World!!!!!");
hello.say();


