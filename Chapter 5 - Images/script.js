window.onload = function()
{
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	var img = document.getElementById("scream");
	ctx.drawImage(img,10,10);
}