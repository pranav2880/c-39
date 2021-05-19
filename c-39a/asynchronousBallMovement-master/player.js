class Player{
    constructor(){
    this.Index = null;
    this.name = null;
    this.distance = 0; 
    }
    getCount(){
        var playerCountref = database.ref("playerCount");
        playerCountref.on("value",function(data){
            playerCount = data.val()
        })  
    }

    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }

    update(){
        var playerIndex = "players/player"+this.Index;
        database.ref(playerIndex).set({
            name : this.name,
            distance : this.distance

        })
    }

static getplayerinfo(){
    var playerinforef = database.ref("players")
    playerinforef.on("value",(data)=>{
        allplayers = data.val()
    })
}
}