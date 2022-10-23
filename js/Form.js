class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  setElementsPosition() {
    this.input.position(width / 2, height / 2)
    this.playButton.position(width / 2, height / 2 + 100)
    this.titleImg.position(100, 50)
    this.greeting.position(width / 2 - 200, height / 2 - 100)
  }

  setElementStyle() {
    this.titleImg.class("gameTitle")
    this.input.class("customInput")
    this.playButton.class("customButton")
    this.greeting.class("greeting")
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide()
      this.playButton.hide()
      var message = "Hello " + this.input.value()
      this.greeting.html(message)
      playerCount=playerCount+1
      player.name=this.input.value()
      player.index=playerCount
      player.addPlayer()
      player.update(playerCount)
    })
  }

  display() {
    this.setElementsPosition()
    this.setElementStyle()
    this.handleMousePressed()
  }

}
