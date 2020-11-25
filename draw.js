function drawEarth() {
  var canvas = document.getElementById("earth");
  var context = canvas.getContext("2d");
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var radius = 40;

  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  context.fillStyle = "blue";
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = "#003300";
  context.stroke();
}

function drawMars() {
  var canvas = document.getElementById("mars");
  var context = canvas.getContext("2d");
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var radius = 40;

  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  context.fillStyle = "red";
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = "#003300";
  context.stroke();
}

function drawFlightPath() {
  var canvas = document.getElementById("flightPath");
  var context = canvas.getContext("2d");
  var centerY = canvas.height / 2;

  context.beginPath();
  context.moveTo(0, centerY);
  context.lineTo(canvas.width, centerY);
  context.stroke();
}
