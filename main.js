song=""
function preload(){
song= loadSound("music.mp3")
}
function setup(){
    canvas= createCanvas(500,420)
    video= createCapture(VIDEO)
    video.hide()
}
function draw(){
image(video,0,0,500,420)
}
function play(){
    song.play()
}