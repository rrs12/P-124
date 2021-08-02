song=""
leftWristX=""
leftWristY=""
rightWristX=""
rightWristY=""
scoreLeftWrist= 0.3
scoreRightWrist= 0.3
function preload(){
song= loadSound("music.mp3")
}
function setup(){
    canvas= createCanvas(600,500)
    video= createCapture(VIDEO)
    video.hide()
    posenet= ml5.poseNet(video,modelLoaded)
    posenet.on('pose', gotPoses)
}
function draw(){
image(video,0,0,600,500)

fill("#00FFFF")
stroke("#FFFFFF")
circle(leftWristX,leftWristY,20)
if(scoreLeftWrist>0.2){
circle(leftWristX,leftWristY,20)
InNumberLeftY= Number(leftWristY)
remove_decimels= floor(InNumberLeftY)
volume= remove_decimels/500
song.setVolume(volume)
document.getElementById("volume").innerHTML= "Volume= "+volume 
}

if (scoreRightWrist > 0.2){
circle(rightWristX, rightWristY, 20) ;
if(rightWristY >8 && rightWristY <= 100){
document. getElementById("speed"). innerHTML = "Speed = 0.5x";
song.rate (0.5);}
else if (rightWristY >100 && rightWristY <= 200){
document. getElementById("speed") . innerHTML = "Speed = 1x";
song. rate(1) ;}
else if(rightWristY >200 && rightWristY <= 300){
document. getElementById("speed") . innerHTML = "Speed = 1.5x";
song. rate (1.5);}
else if (rightWristY >300 && rightWristY <= 400){
document . getElementById("speed"). innerHTML = "Speed = 2x";
song. rate(2) ;}
else if (rightWristY >400 & rightWristY <= 500){
document. getElementById("speed") . innerHTML = "Speed = 2.5x";
song. rate(2.5); }
}
}



function play(){
    song.play()
    song.setVolume(1)
    song.rate(1)
}
function modelLoaded(){
    console.log("PoseNet chal rha hain")
}
function gotPoses(results){
    if(results.length>0){
        scoreLeftWrist= results[0].pose.keypoints[9].score
        scoreLeftWrist= results[0].pose.keypoints[10].score


        leftWristX= results[0].pose.leftWrist.x
        leftWristY= results[0].pose.leftWrist.y
        console.log(leftWristX,leftWristY)

        rightWristX= results[0].pose.rightWrist.x
        rightWristY= results[0].pose.rightWrist.y
    }
}
