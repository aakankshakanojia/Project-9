var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7d6f5b9b-35d6-4301-ab83-23308b6f46a4","1ba15ecd-b30b-4f3f-8880-7f659eb7ec1b","73432ab3-99e7-48b9-9f07-cebf1b82ed93","fda68b7c-9301-4d8d-b873-10a9a1340bc8","ff09bdfb-7f73-4205-87d9-5f704b21f3e4"],"propsByKey":{"7d6f5b9b-35d6-4301-ab83-23308b6f46a4":{"name":"bg_underwater_07_1","sourceUrl":"assets/api/v1/animation-library/gamelab/nlKh.1TrqEu2U_N6Zm2Vx5XUmRfunazM/category_backgrounds/bg_underwater_07.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"nlKh.1TrqEu2U_N6Zm2Vx5XUmRfunazM","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/nlKh.1TrqEu2U_N6Zm2Vx5XUmRfunazM/category_backgrounds/bg_underwater_07.png"},"1ba15ecd-b30b-4f3f-8880-7f659eb7ec1b":{"name":"cave.png_1","sourceUrl":"assets/v3/animations/r0Mso8f7u6m4QVGjK6eppEVIhWM64EFLzzldk9UqPTs/1ba15ecd-b30b-4f3f-8880-7f659eb7ec1b.png","frameSize":{"x":1920,"y":1067},"frameCount":1,"looping":true,"frameDelay":4,"version":"dQnc2tfwXGzXgWQUNA1L9iCexaqp.JcC","loadedFromSource":true,"saved":true,"sourceSize":{"x":1920,"y":1067},"rootRelativePath":"assets/v3/animations/r0Mso8f7u6m4QVGjK6eppEVIhWM64EFLzzldk9UqPTs/1ba15ecd-b30b-4f3f-8880-7f659eb7ec1b.png"},"73432ab3-99e7-48b9-9f07-cebf1b82ed93":{"name":"creature_05_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Eid4juFajMQCx0dItpnaJIQtX2Q1._7d/category_animals/creature_05.png","frameSize":{"x":392,"y":374},"frameCount":1,"looping":true,"frameDelay":2,"version":"Eid4juFajMQCx0dItpnaJIQtX2Q1._7d","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":392,"y":374},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Eid4juFajMQCx0dItpnaJIQtX2Q1._7d/category_animals/creature_05.png"},"fda68b7c-9301-4d8d-b873-10a9a1340bc8":{"name":"melon_1","sourceUrl":null,"frameSize":{"x":347,"y":381},"frameCount":1,"looping":true,"frameDelay":12,"version":"sgP8jcPx.HjD.YZg9ANDhvVpBzjgeBqd","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":347,"y":381},"rootRelativePath":"assets/fda68b7c-9301-4d8d-b873-10a9a1340bc8.png"},"ff09bdfb-7f73-4205-87d9-5f704b21f3e4":{"name":"crab_1","sourceUrl":"assets/api/v1/animation-library/gamelab/kTmRQ1_RRECOF2u.0RFbMaEMXAWisxyS/category_animals/crab.png","frameSize":{"x":288,"y":191},"frameCount":1,"looping":true,"frameDelay":2,"version":"kTmRQ1_RRECOF2u.0RFbMaEMXAWisxyS","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":288,"y":191},"rootRelativePath":"assets/api/v1/animation-library/gamelab/kTmRQ1_RRECOF2u.0RFbMaEMXAWisxyS/category_animals/crab.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var score = 0;
var gameState = "serve";


//underwater background
  var display = createSprite(200,225,400,400);
  display.setAnimation("bg_underwater_07_1");

var wall = createSprite(200,30,400,10);
wall.shapeColor ="lightblue";

//creating starfish's home
 var cave = createSprite(370,360,30,30);
 cave.setAnimation("cave.png_1");
 cave.scale= 0.08;

//creating starfish player
  var starfish = createSprite(30,60,20,20 );
  starfish.setAnimation("creature_05_1");
  starfish.scale=0.13;

//food of fish
  var food1 = createSprite(50,350, 15,15);
  food1.setAnimation("melon_1");
  food1.scale=0.05;

  var food2 = createSprite(150,305, 15,15);
  food2.setAnimation("melon_1");
  food2.scale=0.05;

  var food3 = createSprite(270,260,15,15);
  food3.setAnimation("melon_1");
  food3.scale=0.05;

  var food4 = createSprite(350,250,15,15);
  food4.setAnimation("melon_1");
  food4.scale=0.05;

  var food5 = createSprite(200,200,15,15);
  food5.setAnimation("melon_1");
  food5.scale=0.05;

  var food6 = createSprite(100,170,15,15);
  food6.setAnimation("melon_1");
  food6.scale=0.05;

  var food7 = createSprite(323,75,15,15);
  food7.setAnimation("melon_1");
  food7.scale=0.05;

  var food8 = createSprite(163,64,15,15);
  food8.setAnimation("melon_1");
  food8.scale=0.05;

  var food9 = createSprite(307,156,15,15);
  food9.setAnimation("melon_1");
  food9.scale=0.05;

  var food10 = createSprite(6,208);
  food10.setAnimation("melon_1");
  food10.scale=0.05;


//creating enemy creatures
  var enemy1 = createSprite(0, 130,25,25);
  enemy1.setAnimation("crab_1");
  enemy1.scale=0.2;

  var enemy2 = createSprite(400,270,25,25);
  enemy2.setAnimation("crab_1");
  enemy2.scale=0.2;

  var enemy3 = createSprite(200,50,25,25);
  enemy3.setAnimation("crab_1");
  enemy3.scale=0.2;


 


function draw() {
  background("pink");
  
  //display score
  textSize(16);
  stroke("black");
  text("Score :  "+score,320,20);
  
  if(gameState == "serve")
  {
    //display welcome text
    textSize(16);
    text("Press Enter to start.Hold enter,read direction",2,20);
  }
    //Moving the ball on pressing enter key
  if(keyDown("enter")){
    //add velocity to enemy
  enemy1.velocityX = 7;
  enemy2.velocityX = -7;
  enemy3.velocityY = 7;
    
    gameState = "play";
  }
  
  if (gameState == "play")
  {
    //game instruction
    textSize(14);
    text("Eat all food.Use Right,Left,Up,Down Key to Play ", 2,20);
    gameState = "end";
  }
  if(gameState=="end"){
    if (starfish.isTouching(cave)  &&      score==10 )
      {
        playSound("assets/category_achievements/vibrant_game_positive_sweep_bling.mp3",false);
        enemy1.x = 0;
        enemy1.y = 130;
        enemy1.velocityX = 0;
        
        
        enemy2.x = 400;
        enemy2.y = 270;
        enemy2.velocityX = 0;
        
        
        enemy3.x = 200;
        enemy3.y = 50;
        enemy3.velocityY = 0;
        
        fill("maroon");
        textSize(18);
        text("Game Over!",10,20);
      }
  }

 
 
  
  
  createEdgeSprites();
   enemy1.bounceOff(leftEdge);
   enemy1.bounceOff(rightEdge);
   enemy2.bounceOff(leftEdge);
   enemy2.bounceOff(rightEdge);
   enemy3.bounceOff(bottomEdge);
   enemy3.bounceOff(wall);
   starfish.bounce(wall);
   starfish.bounce(bottomEdge);
   starfish.bounce(rightEdge);
   starfish.bounce(leftEdge);
   
//to move starfish
if(keyDown(LEFT_ARROW))
{
  starfish.x = starfish.x -5;
}
  
  if(keyDown(RIGHT_ARROW))
{
  starfish.x = starfish.x +5;
}
  
  if(keyDown(DOWN_ARROW))
{
  starfish.y = starfish.y +5;
}

if(keyDown(UP_ARROW))
{
  starfish.y = starfish.y -5;
}


if (starfish.isTouching(enemy1) || starfish.isTouching(enemy2) || starfish.isTouching(enemy3))
{
  playSound("assets/category_alerts/cartoon_negative_bling.mp3");
  starfish.x = 30;
  starfish.y = 60;
}

// to make fish eat the food
if(starfish.isTouching(food1))
  {
    score=score+1;
    food1.destroy();
    playSound("assets/category_pop/bamboo_pop_v2_notification4.mp3");
  }

if(starfish.isTouching(food2))
  {
    score=score+1;
    food2.destroy();
     playSound("assets/category_pop/bamboo_pop_v2_notification4.mp3");
  }

if(starfish.isTouching(food3))
  {
    score=score+1;
    food3.destroy();
     playSound("assets/category_pop/bamboo_pop_v2_notification4.mp3");
  }

if(starfish.isTouching(food4))
  {
    score=score+1;
    food4.destroy();
     playSound("assets/category_pop/bamboo_pop_v2_notification4.mp3");
  }

if(starfish.isTouching(food5))
  {
    score=score+1;
    food5.destroy();
     playSound("assets/category_pop/bamboo_pop_v2_notification4.mp3");
  }

if(starfish.isTouching(food6))
  {
    score=score+1;
    food6.destroy();
     playSound("assets/category_pop/bamboo_pop_v2_notification4.mp3");
  }
  
  if(starfish.isTouching(food7))
  {
    score=score+1;
    food7.destroy();
     playSound("assets/category_pop/bamboo_pop_v2_notification4.mp3");
  }
  
  if(starfish.isTouching(food8))
  {
    score=score+1;
    food8.destroy();
     playSound("assets/category_pop/bamboo_pop_v2_notification4.mp3");
  }
  
  if(starfish.isTouching(food9))
  {
    score=score+1;
    food9.destroy();
     playSound("assets/category_pop/bamboo_pop_v2_notification4.mp3");
  }
  
  if(starfish.isTouching(food10))
  {
    score=score+1;
    food10.destroy();
     playSound("assets/category_pop/bamboo_pop_v2_notification4.mp3");
  }


  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
