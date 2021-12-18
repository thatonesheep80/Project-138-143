scoreRightWrist = 0;
rightWristX = 0;
rightWristY = 0;

function preload()
{
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	video = createCapture(VIDEO);
    video.hide();
  
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
  console.log("model loaded!");
}

function gotPoses(results)
{
    
    if (results.length > 0)
    {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        console.log("scoreRightWrist = " + scoreRightWrist);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + ", rightWristY = " + rightWristY);
    }
}

function draw() 
{
	image(video, 0, 0, 600, 500);

 	if(scoreRightWrist > 0.2)
	{
	 fill("#FF0000");
     stroke("#FF0000");
     circle(rightWristX, rightWristY, 20);
	}
}