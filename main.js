song=""
leftWristX=""
leftWristY=""
rightWristX=""
rightWristY=""
scoreLeftWrist= 0
function preload(){
song= loadSound("music.mp3")
}
function setup(){
    canvas= createCanvas(500,420)
    video= createCapture(VIDEO)
    video.hide()
    posenet= ml5.poseNet(video,modelLoaded)
    posenet.on('pose', gotPoses)
}
function draw(){
image(video,0,0,500,420)

fill("#000000")
stroke("#FFFFFF")
if(scoreLeftWrist>0.2){
circle(leftWristX,leftWristY,20)
InNumberLeftY= Number(leftWristY)
remove_decimels= floor(InNumberLeftY)
volume= remove_decimels/500
song.setVolume(volume)
document.getElementById("volume").innerHTML= "Volume= "+volume 
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
        console.log(results)

        leftWristX= results[0].pose.leftWrist.x
        leftWristY= results[0].pose.leftWrist.y

        rightWristX= results[0].pose.rightWrist.x
        rightWristY= results[0].pose.rightWrist.y
    }
}
