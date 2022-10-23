class Game {
  constructor() { }

  //Read the gamestate from the database
  getState() {
    var gameStateRef = database.ref('gameState')
    gameStateRef.on("value", function (data) {
      gameState = data.val()
    })

  }

  //Write the gamestate into the database
  update(state) {
    database.ref("/").update({
      gameState: state
    })
  }


  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount = player.getCount()

    car1 = createSprite(width / 2 - 50, height - 100)
    car2 = createSprite(width / 2 + 100, height - 100)
    car1.addImage("car1", car1_Img)
    car2.addImage("car2", car2_Img)

    cars = [car1, car2]
  }

  play() {
    Player.getPlayersInfo()
    if (allPlayers !== undefined) {
      image(trackImg, 0, -height * 5, width, height * 6)
      drawSprites()
    }
  }
}
