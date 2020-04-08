var yt=[300];
var doggo=0;
var letters=[];
var bg1, bg2, bg3;
var bg=0;
function preload(){
	bg1=loadImage('bg1.png');
	bg2=loadImage('bg2.png');
	bg3=loadImage('bg3.png');
	img1 = loadImage('1.png');
	img2 = loadImage('2.png');
}

function setup() {
 createCanvas(1280, 720);

	var y=1;
	var yspeed=0.1;
  for(var i=0;i<300;i++){
	  y+=yspeed;
	  yspeed+=0.01;
	  yt[i]=y;
  }
  for(var i=0;i<8;i++){
	  letters[i]=new letter(i*37.5,Math.floor(Math.random() * 10)+1,Math.floor(Math.random() * 5)+20);
  }
 
}

function draw() {
  background(255);
	bg++;
	if(bg<10)
		image(bg1,0,0);
	else if(bg<20)
		image(bg2,0,0);
	else
		image(bg3,0,0);	
	if(bg>30) bg=0;

  for(var i=0;i<8;i++){
	letters[i].draw();
  }
  
	doggo++;
	if(doggo<60)
	image(img1,0,0);
	else
	image(img2,0,0);
	if(doggo>120) doggo=0;
}


function letter(yy,dev,size){
	this.deviation=dev;
	this.y=yy;
	this.x=(Math.sin((yy/20)/Math.PI)*100+200-yy*0.1,this.height-yt[yy]);
	this.size=size;
	
	this.draw=function(){
		textFont('Georgia');
		textSize(this.size+this.y/10);
		text('Z',Math.sin((this.y/(20+this.deviation))/Math.PI)*100+893-this.y*0.1,300-yt[this.y]);
		this.y++;
		if(this.y>=300){
			this.y=1;
			this.deviation=Math.floor(Math.random() * 10)+1;
			this.size=Math.floor(Math.random() * 5)+20;
		}
	}

}
