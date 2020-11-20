var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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

var pin1 = createSprite(200, 300,20,20);
var pin2 = createSprite(180, 320,20,20);
var pin3 = createSprite(220, 320,20,20);
var pin4 = createSprite(160, 340,20,20);
var pin5 = createSprite(200, 340,20,20);
var pin6 = createSprite(240, 340,20,20);
var squariad = createSprite(200,60,20,20);
//pin7.x=199;
//pin7.y=49;
//pin1.x=78;
//pin2.y=54;

squariad.velocityX=3;
squariad.velocityY=9;

pin1.shapeColor="blue";
pin2.shapeColor="grey";
pin3.shapeColor="red";
pin4.shapeColor="purple";
pin5.shapeColor="yellow";
pin6.shapeColor="green";
squariad.shapeColor="black";


function draw() {
  
background("white");


createEdgeSprites();
squariad.bounceOff(edges);

pin1.bounceOff(edges);
pin2.bounceOff(edges);
pin3.bounceOff(edges);
pin4.bounceOff(edges);
pin5.bounceOff(edges);
pin6.bounceOff(edges);

squariad.bounce(pin1);
squariad.bounce(pin2);
squariad.bounce(pin3);
squariad.bounce(pin4);
squariad.bounce(pin5);
squariad.bounce(pin6);

pin1.bounce(pin2);
pin1.bounce(pin3);
pin1.bounce(pin4);
pin1.bounce(pin5);
pin1.bounce(pin6);

pin2.bounce(pin3);
pin2.bounce(pin4);
pin2.bounce(pin5);
pin2.bounce(pin6);

pin3.bounce(pin4);
pin3.bounce(pin5);
pin3.bounce(pin6);

pin4.bounce(pin5);
pin4.bounce(pin6);

pin5.bounce(pin6);
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
