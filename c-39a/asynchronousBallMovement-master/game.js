class Game{
    constructor(){

    }
    
geState(){
    var gameStateref = database.ref("gameState");
    gameStateref.on("value",function(data){
        gameState = data.val()
    })
}

update(state){
    database.ref('/').update({
        gameState:state
    })
}

async start(){
    if(gameState===0){
    player = new Player();
    var playerCountref = await database.ref("playerCount").once("value");
    if(playerCountref.exists()){
        playerCount = playerCountref.val();
        player.getCount(); 
    }
     
    form = new Form();
    form.display();
}
car1 = createSprite(100,200)
car1.addImage(car1img)
car2 = createSprite(300,200)
car2.addImage(car2img)
car3 = createSprite(500,200)
car3.addImage(car3img)
car4 = createSprite(700,200)
car4.addImage(car4img)
carA=[car1,car2,car3,car4]
}

play(){
   // textSize(30)
   form.hide();
    //text("Game Start",120,100)
    Player.getplayerinfo()
    if(allplayers!==undefined){
        background(groundimg)
        image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5)
        var Index = 0
        var x = 0
        var y 
        //var dp = 130
        for(var plr in allplayers){
            Index = Index+1
            x = x+200
            y = displayHeight-allplayers[plr].distance
            carA[Index-1].x=x
            carA[Index-1].y=y
            if(Index===player.Index){
                carA[Index-1].shapeColor="red"
                camera.position.x = displayWidth/2
                camera.position.y = carA[Index-1].y
            }
           
        }
      
    }
     if(keyDown(UP_ARROW)&&player.Index!==null){
         player.distance = player.distance+50
         player.update()
     }
     drawSprites();
}

}
