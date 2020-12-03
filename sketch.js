//Create variables here
var dog, database, foodS , foodStock ;
function preload()
{
  dog = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  database = firebase.database;
   dog = createSprite (250,250,10,10);
  

   foodStock = database.ref('Food');
   foodStock.on("value", readStock);
  
  
  
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
  drawSprites();
  //add styltes here
  textSize(24);
  fill(2);
  stroke(2);
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x = 0;
  }else{
    x = x-1;
  }
  

  database.ref('/').update({
    Food:x
  })
}



