
var canvas = document.getElementById('myCanvas');
 
var line = canvas.getContext('2d');

// the triangle

line.beginPath();
line.moveTo(100,100);
line.lineTo(150,30);
line.lineTo(200,100);
line.closePath();

// the outline
line.lineWidth = 2;
line.strokeStyle = '#808080'
line.stroke();

// the fill color
line.fillStyle = "#FFCC00";
line.fill();



