class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    background(bgimg);
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    bike1 = createSprite(displayWidth/2,50);
    bike1.addImage(bike1img);
    bike2 = createSprite(displayWidth/2,130);
    bike2.addImage(bike2img);
    bgimg = createSprite(displayWidth,displayHeight);
    bikes = [bike1,bike2];

    }

  play(){
    form.hide();
Player.getPlayerInfo();
 player.getCarsRank();
    
    if(allPlayers !== undefined){
      //var display_position = 100;
      
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        bikes[index-1].x = x;
        bikes[index-1].y = y;

        if (index === player.index){
        fill ("red")
        ellipse(x,y,60,80);
          camera.position.x = displayWidth/2;
          camera.position.y = bikes[index-1].y
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.X +=10
      player.update();
    }
    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.X -=10
      player.update();
    }
if (player.distance>4250){
  gameState = 2;
  player.rank+=1;
  Player.updateCarsRank(player.rank)
}
    drawSprites();
  }
  end(){
    alert("Game Ended" + " " + "Score=>" + " " + player.rank);

  }
}
