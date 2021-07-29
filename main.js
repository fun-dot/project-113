function preload() {
}

function setup(){
canvas = createCanvas(640, 480);
canvas.position(110, 250);
video = createCapture(VIDEO);
video.hide();
circle(60, 60, 60);
circle(60, 420, 60);
circle(590, 60, 60);
circle(590, 420, 60);
rect(86, 30, 475, 55);
rect(86, 390, 475, 55);
rect(30, 90, 55, 300);
rect(560, 90, 55, 300);
}
function take_snapshot(){
save('student_name.png');
}