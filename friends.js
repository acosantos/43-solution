class Friends {
  constructor() {
   this.name="",
   this.message=" ",
   this.index = 0;

  }
  getCount(){

    database.ref("friendCount").on("value",(data)=>{
      playerCount = data.val();
      console.log(playerCount);
    })

  }

  updateCount(count){

    database.ref("/").update({
      friendCount : count
    })

  }



  addFriends() {
    
    function readHeight(data){
height = data.val()
console.log(height)
ballon.x = height.x
ballon.y = height.y
    }
    }
  

}
