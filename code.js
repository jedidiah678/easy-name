var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a81ded74-1306-4cb7-86db-01fcef36c4a3","1c8c6a30-378d-49fa-ac63-c11219884057","ce8fe792-0bd9-4ba0-aa44-8f82bcbee25e","b180c9dc-fc2d-4f66-a9f5-f801e9a421bc"],"propsByKey":{"a81ded74-1306-4cb7-86db-01fcef36c4a3":{"name":"alien_07_1","sourceUrl":"assets/api/v1/animation-library/gamelab/H68UnAuzfpkcmpvQUCSvEU5GnRrjpEmd/category_fantasy/alien_07.png","frameSize":{"x":319,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"H68UnAuzfpkcmpvQUCSvEU5GnRrjpEmd","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":319,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/H68UnAuzfpkcmpvQUCSvEU5GnRrjpEmd/category_fantasy/alien_07.png"},"1c8c6a30-378d-49fa-ac63-c11219884057":{"name":"avocado_1","sourceUrl":"assets/api/v1/animation-library/gamelab/n8fJsHnvUoqBkvrfZO8e3NoCGekl_Fmn/category_food/avocado.png","frameSize":{"x":386,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"n8fJsHnvUoqBkvrfZO8e3NoCGekl_Fmn","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/n8fJsHnvUoqBkvrfZO8e3NoCGekl_Fmn/category_food/avocado.png"},"ce8fe792-0bd9-4ba0-aa44-8f82bcbee25e":{"name":"gameplaywacky_13_1","sourceUrl":"assets/api/v1/animation-library/gamelab/NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN/category_germs/gameplaywacky_13.png","frameSize":{"x":400,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN/category_germs/gameplaywacky_13.png"},"b180c9dc-fc2d-4f66-a9f5-f801e9a421bc":{"name":"animalhead_antelope_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ov1YomFnnP0mG8b3bOiOzHUyEI53aqp./category_animals/animalhead_antelope.png","frameSize":{"x":302,"y":384},"frameCount":1,"looping":true,"frameDelay":2,"version":"ov1YomFnnP0mG8b3bOiOzHUyEI53aqp.","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":302,"y":384},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ov1YomFnnP0mG8b3bOiOzHUyEI53aqp./category_animals/animalhead_antelope.png"}}};
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

var lives = 0;
var boundry1 = createSprite(200, 50, 400, 10);
var boundry2 = createSprite(200, 250, 400, 10);
var sam = createSprite(18, 140, 15, 15);
sam.shapeColor = "green";
var car1 = createSprite(80, 70, 10, 10);
var car2 = createSprite(160, 220, 10, 10);
var car3 = createSprite(220, 70, 10, 10);
var car4 = createSprite(290, 220, 10, 10);
car1.shapeColor = "red";
car2.shapeColor = "red";
car3.shapeColor = "red";
car4.shapeColor = "red";
car1.velocityY = +8;
car2.velocityY = -8;
car3.velocityY = +8;
car4.velocityY = -8;







function draw() {
  background("white");
  text("lives ="+lives, 198, 17);
  text("please help sam reach optical store with minimum lives", 80, 290);
  fill("lightblue");
  noStroke();
  rect(1, 50, 50, 200);
  fill("yellow");
  rect(350, 50, 50, 200);
  if (keyDown("right")) {
    sam.x = sam.x+4;
  }
  if (keyDown("up")) {
    sam.y = sam.y-4;
  }
  if (keyDown("down")) {
    sam.y = sam.y+4;
  }
  car1.bounceOff(boundry1);
  car1.bounceOff(boundry2);
  car2.bounceOff(boundry1);
  car2.bounceOff(boundry2);
  car3.bounceOff(boundry1);
  car3.bounceOff(boundry2);
  car4.bounceOff(boundry1);
  car4.bounceOff(boundry2);
  if (sam.isTouching(car1) || sam.isTouching(car2) || sam.isTouching(car3) ||
  sam.isTouching(car4)){
    sam.x = 18;
    sam.y = 140;
    lives = lives+1;
  }
  if (sam.x>350) {
    sam.x = 18;
    sam.y = 140;
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
