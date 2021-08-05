var gameState = "start";
var gameState2 = "1";
var gameState3 = "1";
var gameState4 = "1";
var lifeCount = 3;
var background_img;
var buttons;
var form;
var database;
var playerIndex;
var game,player;
var playerCount;
var life,lifeImg;
var cardboard1,cardboard2,cardboard3,cardboard4,cardboard5,cardboard6,cardboard7,cardboard8,cardboard9,cardboard10,cardboard11,cardboard12,cardboard13,cardboard14,cardboard15,cardboard16,cardboard17,cardboard18,cardboard19,cardboard20,cardboard21,cardboard22,cardboard23,cardboard24,cardboard25,cardboard26,cardboard27,cardboard28,cardboard29,cardboard30,cardboard31,cardboard32,cardboard33,cardboard34,cardboard35,cardboard36;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var doorImg,door;
var boyImg,boyImg2,boyImg3,boy;
var bg_img2,bgImg3;
var wall_img,wall_img2,wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8;
var invisibleGround,invisibleGround2,invisibleGround3,invisibleGround4,invisibleGround5;
var fire,fire_img,fireGroup;
var monster,monsterImg; 
var arrow,arrowImg,arrowGroup;
var keyImg,key1,key2,key3;
var count = 0;
var ground;
var obstacle,obstacle_Img,obstacleGroup;
var treasure,treasureImg;
var spine,spine2,spine3,spine4,spine5,spine_img,spine_img2,spine_img3,spine_img4,spine_img5,spineGroup;
var resetButton;
var smile,smileImg;
var winBgImg;
var x=0,y=0;
var keyCount = 0,keyCount2 = 0;
var timeRemainingMinutes = 2;
var timeRemainingSeconds = 59; 

function preload() {
  background_img = loadImage("Background img.png");
  lifeImg = loadImage("LifeImg.png")
  treasureImg = loadImage("Treasure.png");
  winBgImg = loadImage("Win background.jpeg");
  arrowImg = loadImage("arrow1.png");
  doorImg = loadImage("Door Img.png");
  boyImg = loadAnimation("download.png","download2.png","download3.png","download4.png","download5.png","download6.png");
  boyImg2 = loadAnimation("download7.png","download8.png","download9.png","download10.png","download11.png","download12.png");
  boyImg3 = loadAnimation("download3.png");
  bg_img2 = loadImage("Mario game bg.png");
  wall_img = loadImage("Brick.gif");
  wall_img2 = loadImage("Brick2.jpeg");
  fire_img = loadImage("fire.png");
  monsterImg = loadImage("Monster.png");
  bgImg3 = loadImage("download (1).png");
  keyImg = loadImage("key.png");
  obstacle_Img = loadImage("Stone1.png");
  spine_img = loadImage("cactus.png");
  spine_img2 = loadImage("cactus2.png");
  spine_img3 = loadImage("cactus3.png");
  spine_img4 = loadImage("cactus4.png");
  spine_img5 = loadImage("Spine.png");
}

function setup() { 
  createCanvas(800,600); 

  database = firebase.database();

  engine = Engine.create(); 
  world = engine.world; 

  obstacleGroup = new Group();
  fireGroup = new Group();
  spineGroup = new Group();
  arrowGroup = new Group();

  boy = createSprite(380,30); 
  boy.addAnimation("boy",boyImg);
  boy.addAnimation("boy2",boyImg2); 
  boy.addAnimation("boy3",boyImg3);
  boy.scale = 0.3;

  life = createSprite(190,35);
  life.addImage("life",lifeImg);
  life.scale = 0.05;

  ground = createSprite(5000,580,100000,40);
  
  game = new Game(); 
  
  door = createSprite(410,565);
  door.addImage("door",doorImg);
  door.scale = 0.175;
  door.setCollider("rectangle",0,0,230,290);
  
  invisibleGround = createSprite(240,220,30,70);
  invisibleGround.visible = false;

  invisibleGround2 = createSprite(530,220,30,70);
  invisibleGround2.visible = false;

  invisibleGround3 = createSprite(400,520,16000000,20);
  invisibleGround3.visible = false;

  invisibleGround4 = createSprite(700,200,30,70);
  invisibleGround4.visible = false;

  invisibleGround5 = createSprite(1040,200,30,70);
  invisibleGround5.visible = false;

  wall1 = createSprite(150,380);
  wall1.addImage(wall_img);
  wall1.scale = 0.7;

  wall2 = createSprite(450,220);
  wall2.addImage(wall_img);
  wall2.scale = 0.7;
  wall2.velocityX = -5;

  treasure = createSprite(7000,490);
  treasure.addImage("treasures",treasureImg);
  treasure.scale = 0.5

  wall3 = createSprite(520,440);
  wall3.addImage(wall_img2);
  wall3.scale = 0.7;

  wall4 = createSprite(630,440);
  wall4.addImage(wall_img2);
  wall4.scale = 0.7;

  resetButton = createButton("RESTART");
  resetButton.style('width', '80px');
  resetButton.style('height', '40px');
  resetButton.style('background', 'orange');

  wall5 = createSprite(960,200);
  wall5.addImage(wall_img);
  wall5.scale = 0.7;
  wall5.velocityX = -5;

  wall6 = createSprite(1080,360);
  wall6.addImage(wall_img);
  wall6.scale = 0.7;

  wall7 = createSprite(1240,430);
  wall7.addImage(wall_img2);
  wall7.scale = 0.8;

  key1 = createSprite(575,470);
  key1.addImage("key",keyImg);
  key1.scale = 0.4;

  key2 = createSprite(450,90);
  key2.addImage("key2",keyImg);
  key2.scale = 0.3;

  key3 = createSprite(1200,470);
  key3.addImage("key3",keyImg);
  key3.scale = 0.3;

  buttons = new Buttons();

  form = new Form();

  cardboard1 = createSprite(790,300,20,600);
  cardboard2 = createSprite(10,300,20,600);
  cardboard3 = createSprite(170,590,340,20);
  cardboard4 = createSprite(630,590,340,20);
  cardboard5 = createSprite(330,560,20,80);
  cardboard6 = createSprite(305,530,150,20);
  cardboard7 = createSprite(240,420,20,200);
  cardboard8 = createSprite(245,310,310,20);
  cardboard9 = createSprite(100,350,20,100);
  cardboard10 = createSprite(170,10,340,20);
  cardboard11 = createSprite(630,10,340,20);
  cardboard12 = createSprite(470,40,20,80);
  cardboard13 = createSprite(220,40,20,80);
  cardboard14 = createSprite(100,160,20,160);
  cardboard15 = createSprite(215,230,250,20);
  cardboard16 = createSprite(330,155,20,150);
  cardboard17 = createSprite(400,90,160,20);
  cardboard18 = createSprite(175,160,150,20);
  cardboard19 = createSprite(570,125,20,90);
  cardboard20 = createSprite(495,230,170,20);
  cardboard21 = createSprite(495,170,170,20);
  cardboard22 = createSprite(420,200,20,80);
  cardboard23 = createSprite(390,340,20,80);
  cardboard24 = createSprite(430,370,100,20);
  cardboard25 = createSprite(490,300,20,160);
  cardboard26 = createSprite(325,410,20,60);
  cardboard27 = createSprite(397.5,450,165,20);
  cardboard28 = createSprite(470,515,20,150);
  cardboard29 = createSprite(85,470,170,20);
  cardboard30 = createSprite(160,510,20,60);
  cardboard31 = createSprite(715,135,130,20);
  cardboard32 = createSprite(660,170,20,200);
  cardboard33 = createSprite(590,415,20,210);
  cardboard34 = createSprite(630,400,100,20);
  cardboard35 = createSprite(670,455,20,130);
  cardboard36 = createSprite(720,510,120,20);  

  monster = createSprite(2500,490);
  monster.addAnimation("monster",monsterImg);
  monster.addAnimation("monster2",keyImg);
  monster.scale = 0.4;

  monster2 = createSprite(4500,490);
  monster2.addAnimation("monster",monsterImg);
  monster2.addAnimation("monster2",keyImg);
  monster2.scale = 0.4;

  monster3 = createSprite(6500,490);
  monster3.addAnimation("monster",monsterImg);
  monster3.addAnimation("monster2",keyImg);
  monster3.scale = 0.4;

  spine = createSprite(1280,390);
  spine.addImage("spine",spine_img3);
  spine.scale = 0.15;

  spine2 = createSprite(wall1.x,wall1.y+40);
  spine2.addImage("spine2",spine_img);
  spine2.scale = 0.15;

  spine3 = createSprite(520,340);
  spine3.addImage("spine3",spine_img2);
  spine3.scale = 0.15;
    
  spine4 = createSprite(wall5.x,470);
  spine4.addImage("spine4",spine_img2);
  spine4.scale = 0.15;

  spine5 = createSprite(1000,ground.y-35);
  spine5.addImage("spine5",spine_img5);
} 

function draw() { 
  background(background_img);
  Engine.update(engine);

  life.x = camera.x-210;

  if(lifeCount===0) {
    gameState = "end";
  }

  console.log(camera.x,100,100);

  resetButton.position(x,y);

  wall2.bounceOff(invisibleGround);
  wall2.bounceOff(invisibleGround2);
  wall5.bounceOff(invisibleGround4);
  wall5.bounceOff(invisibleGround5);

  cardboard1.shapeColor = rgb(0,50,0);
  cardboard2.shapeColor = rgb(0,50,0);
  cardboard3.shapeColor = rgb(0,50,0);
  cardboard4.shapeColor = rgb(0,50,0);
  cardboard5.shapeColor = rgb(0,50,0);
  cardboard6.shapeColor = rgb(0,50,0);
  cardboard7.shapeColor = rgb(0,50,0);
  cardboard8.shapeColor = rgb(0,50,0);
  cardboard9.shapeColor = rgb(0,50,0);
  cardboard10.shapeColor = rgb(0,50,0);
  cardboard11.shapeColor = rgb(0,50,0);
  cardboard12.shapeColor = rgb(0,50,0);
  cardboard13.shapeColor = rgb(0,50,0);
  cardboard14.shapeColor = rgb(0,50,0);
  cardboard15.shapeColor = rgb(0,50,0);
  cardboard16.shapeColor = rgb(0,50,0);
  cardboard17.shapeColor = rgb(0,50,0);
  cardboard18.shapeColor = rgb(0,50,0);
  cardboard19.shapeColor = rgb(0,50,0);
  cardboard20.shapeColor = rgb(0,50,0);
  cardboard21.shapeColor = rgb(0,50,0);
  cardboard22.shapeColor = rgb(0,50,0);
  cardboard23.shapeColor = rgb(0,50,0);
  cardboard24.shapeColor = rgb(0,50,0);
  cardboard25.shapeColor = rgb(0,50,0);
  cardboard26.shapeColor = rgb(0,50,0);
  cardboard27.shapeColor = rgb(0,50,0);
  cardboard28.shapeColor = rgb(0,50,0);
  cardboard29.shapeColor = rgb(0,50,0);
  cardboard30.shapeColor = rgb(0,50,0);
  cardboard31.shapeColor = rgb(0,50,0);
  cardboard32.shapeColor = rgb(0,50,0);
  cardboard33.shapeColor = rgb(0,50,0);
  cardboard34.shapeColor = rgb(0,50,0);
  cardboard35.shapeColor = rgb(0,50,0);
  cardboard36.shapeColor = rgb(0,50,0);

  if(gameState==="start") { 
    game.start(); 
    buttons.display();
  } 
  
  if(gameState==="form") { 
    form.display();
    game.form();
  } 

  if(gameState==="countdown") {
    game.countdown();

    countdown("level1");
  }
  
  if(gameState==="level1") { 
    game.play1(); 

    if(keyDown("left")) {
      boy.x-=10;
      boy.changeAnimation("boy2",boyImg2);
    }
    
    if(keyDown("up")) {
      boy.y-=10;
    }
    
    if(keyDown("down")) {
      boy.y+=10;
    }
    
    if(keyDown("right")) {
      boy.x+=10;
      boy.changeAnimation("boy",boyImg);
    }

    boy.setCollider("rectangle",0,0,boy.width+50,boy.height+80);

    boy.collide(cardboard1);
    boy.collide(cardboard2);
    boy.collide(cardboard3);
    boy.collide(cardboard4);
    boy.collide(cardboard5);
    boy.collide(cardboard6);
    boy.collide(cardboard7);
    boy.collide(cardboard8);
    boy.collide(cardboard9);
    boy.collide(cardboard10);
    boy.collide(cardboard11);
    boy.collide(cardboard12);
    boy.collide(cardboard13);
    boy.collide(cardboard14);
    boy.collide(cardboard15);
    boy.collide(cardboard16);
    boy.collide(cardboard17);
    boy.collide(cardboard18);
    boy.collide(cardboard19);
    boy.collide(cardboard20);
    boy.collide(cardboard21);
    boy.collide(cardboard22);
    boy.collide(cardboard23);
    boy.collide(cardboard24);
    boy.collide(cardboard25);
    boy.collide(cardboard26);
    boy.collide(cardboard27);
    boy.collide(cardboard28);
    boy.collide(cardboard29);
    boy.collide(cardboard30);
    boy.collide(cardboard31);
    boy.collide(cardboard32);
    boy.collide(cardboard33);
    boy.collide(cardboard34);
    boy.collide(cardboard35);
    boy.collide(cardboard36);

    if(boy.isTouching(door)) {
      boy.x = 50;
      boy.y = 470;
      gameState = "countdown2";
    }
  }

  if(gameState==="countdown2") {
    game.countdown2();
 
    countdown("level2");
  }

   if(gameState==="level2") {
    game.play2();

    spine.debug = true;

    camera.x = boy.x +300;

    boy.changeAnimation("boy3",boyImg3);

    if(keyDown("left")) {
      boy.x-=20;
      boy.changeAnimation("boy2",boyImg2);
    }
  
    if(keyDown("up")) {
      boy.y-=20;
    }
  
    if(keyDown("down")) {
      boy.y+=20;
    }
  
    if(keyDown("right")) {
      boy.x+=20;
      boy.changeAnimation("boy",boyImg);
    } 

    boy.velocityY = 8;

    boy.collide(wall1);

    if(boy.isTouching(wall2)) {
      boy.collide(wall2);
    }else {
      boy.velocityX = 0;
    }

    if(boy.isTouching(wall5)) {
      boy.collide(wall5);
    }else {
      boy.velocityX = 0;
    }

    if(boy.isTouching(spine) || boy.isTouching(spine2) || boy.isTouching(spine3) || boy.isTouching(spine4) || boy.isTouching(spine5)) {
        lifeCount-=1;
        boy.x = 50;
        boy.y = 470;
    }    
    
    spine.setCollider("rectangle",0,0,300,300);
    
    boy.collide(wall3);
    boy.collide(wall4);

    boy.collide(wall6);
    boy.collide(wall7);
    boy.collide(invisibleGround3);

    boy.scale = 0.5;
    door.x = 1270;
    door.y = 480;

    boy.setCollider("rectangle",0,0,boy.width+30,boy.height+80);

    if(boy.isTouching(key1)) {
      key1.destroy();
      keyCount+=1;
    }

    if(boy.isTouching(key2)) {
      key2.destroy();
      keyCount+=1;
    }

    if(boy.isTouching(key3)) {
      key3.destroy();
      keyCount+=1;
    }

    if(boy.isTouching(door) && keyCount===3) {
      boy.x = 10;
      boy.y = 510;
      gameState = "level3";
    }

    if(boy.isTouching(door) && keyCount<3) {
      push()
       fill("red");
       noStroke();
       textSize(20);
       text("!! All Keys Should be collected first !!",camera.x-125,280);
       text("_____________________________",camera.x-125,290);
      pop();
    }
  }

  if(gameState==="countdown3") {
      game.countdown3();

      countdown("gameState3");
  }
  
  if(gameState==="level3") {
    game.play3();

    if(keyDown("space")) {
      spawnArrow();
    }else{
      count = 0;
    }

    if(boy.isTouching(spine5)) { 
       lifeCount-=1;
       boy.x = 10;
       boy.y = 510;
    }

    spawnStones();

    if(gameState2==="1") {
      spawnFires(monster);
    }
    
    if(gameState3==="1") {
      spawnFires(monster2);
    }

    if(gameState4==="1") {
      spawnFires(monster3);
    }

    boy.setCollider("rectangle",-15,0,120,150);

    if(obstacleGroup.isTouching(ground)) {
      obstacleGroup.destroyEach();
    }

    if(fireGroup.isTouching(ground)) {
      fireGroup.destroyEach();
    }

    boy.changeAnimation("boy3",boyImg3);

    if(keyDown("left")) {
      boy.x-=20;
      boy.changeAnimation("boy2",boyImg2);
    }
  
    if(keyDown("up")) {
      boy.y-=20;
    }
  
    if(keyDown("down")) {
      boy.y+=20;
    }
  
    if(keyDown("right")) {
      boy.x+=20;
      boy.changeAnimation("boy",boyImg);
    }

    camera.x = boy.x +200;

    boy.collide(ground);

    boy.velocityY = 12;

    if(boy.isTouching(monster) && gameState2==="1") { 
      lifeCount-=1;
      boy.x = 10;
      boy.y = 510;
    }

    if(boy.isTouching(monster2) && gameState3==="1") { 
      lifeCount-=1;
      boy.x = 10;
      boy.y = 510;
    }

    if(boy.isTouching(monster3) && gameState4==="1") { 
      lifeCount-=1;
      boy.x = 10;
      boy.y = 510;
    }

    if(boy.isTouching(obstacleGroup)) { 
      lifeCount-=1;
      boy.x = 10;
      boy.y = 510;
    }


    if(boy.isTouching(fireGroup)) { 
      lifeCount-=1;
      boy.x = 10;
      boy.y = 510;
    }
    
    if(arrowGroup.isTouching(monster) && gameState2==="1") { 
       monster.changeAnimation("monster2",keyImg);
       monster.scale = 0.5;
       arrowGroup.destroyEach();
       gameState2 = "2";
    }

    if(arrowGroup.isTouching(monster2) && gameState3==="1") { 
      monster2.changeAnimation("monster2",keyImg);
      monster2.scale = 0.5;
      arrowGroup.destroyEach();
      gameState3 = "2";
    }

    if(arrowGroup.isTouching(monster3) && gameState4==="1") { 
      monster3.changeAnimation("monster2",keyImg);
      monster3.scale = 0.5;
      arrowGroup.destroyEach();
      gameState4 = "2";
    }

    if(gameState2==="2") {
       if(boy.isTouching(monster)) {
         monster.destroy();
         keyCount2+=1;
       }
    }

    if(gameState3==="2") {
      if(boy.isTouching(monster2)) {
        monster2.destroy();
        keyCount2+=1;
      }
    }
      
    if(gameState4==="2") {
      if(boy.isTouching(monster3)) {
        monster3.destroy();
        keyCount2+=1
      }
    }

    boy.scale = 0.7;

    if(boy.isTouching(treasure)) {
      gameState = "won"
    }
  }

  if(gameState==="end") {
    background(0);

    game.end();

    obstacleGroup.destroyEach();
    fireGroup.destroyEach();
    arrowGroup.destroyEach();

    text("Time Remaining:- 00:00",20,150);

    boy.velocityY = 0;

    key1.visible = false;
    key2.visible = false;
    key3.visible = false;

    strokeWeight(5);
    stroke(0,0,255);
    fill(255,255,0);
    textSize(100);
    text("GAME OVER",camera.x-300,camera.y+40);
  }
  
  if(gameState!=="end") {
    //textSize(10);
    //text(mouseX + "," + mouseY + "," + camera.x,camera.x-400,camera.y);

    if(timeRemainingSeconds===0) {
      timeRemainingSeconds = 59;
      timeRemainingMinutes = timeRemainingMinutes - 1;
    }
  
    if(timeRemainingMinutes===0 && timeRemainingSeconds < 1.1) {
       gameState = "end";
    }
  }

  if(gameState!=="start" && gameState!=="end" && gameState!=="form" && gameState!=="countdown" && gameState!=="countdown2" && gameState!=="countdown3") {
    if(frameCount%30===0) {
      timeRemainingSeconds = timeRemainingSeconds - 1;
    }

    fill(0);
    noStroke();
    textSize(17);
    text("Lifes Remaining :- " + lifeCount,camera.x-375,40);
    
    if(timeRemainingSeconds>9) {
      fill(0);
      noStroke();
      textSize(20);
      text("Time Remaining:- " + timeRemainingMinutes + ":" + timeRemainingSeconds,camera.x+100,50);
    }

    if(timeRemainingSeconds<=9) {
      fill(0);
      noStroke();
      textSize(20);
      text("Time Remaining:- " + timeRemainingMinutes + ":" + "0" + timeRemainingSeconds,camera.x+100,50);
    }

    if(timeRemainingMinutes===0 && timeRemainingSeconds===0) {
        gameState = "end";
    }
  }

  if(gameState==="won") {
    game.won();
  }
  
  drawSprites(); 
}

function spawnStones() {
  if(frameCount%200===0) {
   obstacle = createSprite(Math.round(random(camera.x-400,camera.x+400)),0);
   obstacle.addImage("obstacle",obstacle_Img);
   obstacle.velocityY = 10;
   obstacle.scale = 0.5;
   obstacle.lifetime = 200;
   obstacleGroup.add(obstacle);
  }
}

function spawnFires(monster) {
  if(frameCount%250===0) {
   fire = createSprite(monster.x-40,monster.y-10);
   fire.addImage("fire",fire_img);
   fire.velocityX = -13;
   fire.velocityY = 1;
   fire.scale = 0.9;
   fire.lifetime = 125;
   fireGroup.add(fire);
  }
}

function countdown(state) {
   background(0,0,255);

   if(keyDown("space")) {
      gameState = state;
   }

   fill(255,105,180);
   textSize(30);
   text("PRESS SPACE KEY TO START THE NEXT LEVEL",camera.x-350,camera.y);
   text("___________________________________________",camera.x-360,camera.y+10);
}

function spawnArrow() {
  count++;

  if(count===2) {
    var arrow = createSprite(100,100,60,10);
    arrow.addImage(arrowImg);
    arrow.x = boy.x;
    arrow.y = boy.y;
    arrow.lifetime = 500;
    arrow.velocityX = 13;
    arrow.velocityY = -1;
    arrow.scale = 0.5;
    arrow.setCollider("rectangle",0,0,300,50);
    arrowGroup.add(arrow);
  }
}