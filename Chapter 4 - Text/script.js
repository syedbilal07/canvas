var canvas = document.getElementById("myCanvas1");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello Bilal",10,50);

var canvas1 = document.getElementById("myCanvas2");
var ctx1 = canvas1.getContext("2d");
ctx1.font = "30px Arial";
ctx1.strokeText("Hello Bilal",10,50);

var canvas2 = document.getElementById("myCanvas3");
var ctx2 = canvas2.getContext("2d");
ctx2.font = "30px Comic Sans MS";
ctx2.fillStyle = "red";
ctx2.textAlign = "center";
ctx2.fillText("Hello Bilal", canvas2.height/2, canvas2.width/2);

