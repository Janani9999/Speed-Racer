class Player {
  constructor() {
    this.name = null
    this.positionX = 0
    this.positionY = 0
    this.index = null
  }

  //Read the playerCount from the database
  getCount() {
    var playerCountRef = database.ref('playerCount')
    playerCountRef.on("value", function (data) {
      playerCount = data.val()
    })

  }

  //Write the playerCount into the database
  update(count) {
    database.ref("/").update({
      playerCount: count
    })
  }


  //Add the player into the database
  addPlayer() {
    var playerIndex = "players/player" + this.index
    if (this.index == 1) {
      this.positionX = width / 2 - 100
    }
    else{
      this.positionX=width/2+100
    }

    database.ref(playerIndex).set({
      name:this.name,
      positionX:this.positionX,
      positionY:this.positionY
    })
  }

  static getPlayersInfo(){
    var playerInfoRef=database.ref('players')
    playerInfoRef.on("value",data=>{
      allPlayers=data.val()
    })
  }
}
