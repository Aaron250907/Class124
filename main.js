function setup(){
    video=createCapture(VIDEO)
    video.size(500,500);

    canvas = createCanvas(500,500);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
        background('#E8E9ED');
}

function modelLoaded(){
    console.log('Posenet is Initialized');
}

function gotPoses(results){
    if(results.length = 0)
    {
        console.log(results);
    }
}