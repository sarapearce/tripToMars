export function drawEarth() {
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

export function drawMars() {
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
  context.stroke();Î
}
