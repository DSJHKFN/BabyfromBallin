function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	marioCoin = loadSound("coin.wav");
	marioGameover = loadSound("gameover.wav");
	marioKick = loadSound("kick.wav");
	marioDead = loadSound("mariodie.wav");

	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent('canvas');
	video = createCapture(VIDEO);
	video.size(800,400);
	poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
	video.parent('game_console');
	poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
	console.log('Model Loaded');
}
function gotPoses(results)
{
	console.log(results);
	if (results.length > 0)
	{
	noseX = results[0].pose.nose.x;
	noseY = results[0].pose.nose.y;
	}
}

function draw() {
	game();
}






