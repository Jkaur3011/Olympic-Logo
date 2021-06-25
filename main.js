mycanvas = document.getElementById("ocanvas");
ctx = mycanvas.getContext("2d");

var color1 = "blue";

ctx.beginPath(); //telling computer that we are going to start drawing
ctx.strokeStyle = color1; //asigning color to outline of object
ctx.lineWidth = 5;

ctx.arc(250, 300, 50, 0, 2 * Math.PI); //x,y,radius,start angle, end angle, value of Math.PI = 180
ctx.stroke(); //creates oultine of object

var color2 = "yellow";

ctx.beginPath(); 
ctx.strokeStyle = color2; 
ctx.lineWidth = 5;

ctx.arc(310, 355, 50, 0, 2 * Math.PI); 
ctx.stroke(); 

var color3 = "black";

ctx.beginPath(); 
ctx.strokeStyle = color3; 
ctx.lineWidth = 5;

ctx.arc(365, 300, 50, 0, 2 * Math.PI); 
ctx.stroke();

var color4 = "green";

ctx.beginPath(); 
ctx.strokeStyle = color4; 
ctx.lineWidth = 5;

ctx.arc(430, 355, 50, 0, 2 * Math.PI); 
ctx.stroke(); 

var color5 = "red";

ctx.beginPath(); 
ctx.strokeStyle = color5; 
ctx.lineWidth = 5;

ctx.arc(480, 300, 50, 0, 2 * Math.PI); 
ctx.stroke(); 