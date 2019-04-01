var canvas = document.getElementById("myCanvas1");
var ctx = canvas.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();

var canvas1 = document.getElementById("myCanvas2");
var ctx1 = canvas1.getContext("2d");
ctx1.beginPath();
ctx1.arc(95,50,40,0,2*Math.PI);
ctx1.stroke();