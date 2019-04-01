var canvas = document.getElementById("myCanvas1");
var ctx = canvas.getContext("2d");
// Create linear gradient
var gradient = ctx.createLinearGradient(0,0,200,0);
gradient.addColorStop(0, "red");
gradient.addColorStop(1, "white");
// Fill with gradient
ctx.fillStyle = gradient;
ctx.fillRect(10,10,150,80);

var canvas1 = document.getElementById("myCanvas2");
var ctx1 = canvas1.getContext("2d");
var gradient1 = ctx1.createRadialGradient(75,50,5,90,60,100);
gradient1.addColorStop(0, "red");
gradient1.addColorStop(1, "white");
ctx1.fillStyle = gradient1;
ctx1.fillRect(10,10,150,80);

