class Buttons {
    constructor() {
      this.play = createButton("PLAY");
      this.rules = createButton("RULES");   
    }

    hide() {
      this.play.hide();
      this.rules.hide();
    }

    display() {
        this.play.style('width', '80px');
        this.play.style('height', '40px');
        this.play.style('background', 'orange');
        this.play.position(300,300);
        this.rules.style('width', '80px');
        this.rules.style('height', '40px');
        this.rules.style('background', 'orange');
        this.rules.position(100,300);

        this.play.mousePressed(()=> {
          this.play.hide();
          this.rules.hide();
          gameState = "level3";
        });
    }
}