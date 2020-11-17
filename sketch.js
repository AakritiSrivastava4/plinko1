const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies
var engine, world

var ground;
var particles =[];
var plinkos=[];
var division=[];
var divisionheight=300;

function setup(){
createCanvas(800,800);
engine=Engine.create();
world=engine.world;

ground = new Ground( width/2,height,width,20 )

// for loops for divisions

for (var k = 0;k<=width;k+=80){
    division.push(new Divisions(k, height-divisionheight/2,10,divisionheight))
}

//for plinko

for (var j=75;j<=width;j+=50){
    plinkos.push(new Plinko(j,75));
}

for (var j=100;j<=width;j+=50){
    plinkos.push(new Plinko(j,170));
}

for (var j=75;j<=width;j+=50){
    plinkos.push(new Plinko(j,275));
}

for (var j=100;j<=width;j+=50){
    plinkos.push(new Plinko(j,375));
}


}
function draw(){
    Engine.update(engine)
background("pink");
if (frameCount % 80 ===0){

    particles.push(new Particles(random(width/2-30,width/2+30),10,10) )

}

for (var k=0;k<division.length;k++){
    division[k].display();
}

for (var m=0;m<plinkos.length;m++){
    plinkos[m].display();
}

for (var l=0;l<particles.length;l++){
    particles[l].display();
}
ground.display();
drawSprites();
}