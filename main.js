function preload()
{
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	video = createCapture(VIDEO);
    video.hide();
  
  poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded()
{
  console.log("model loaded!");
}

function draw() {
	game()
}