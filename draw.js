function drawPlanets() {
  const canvas = document.getElementById("flightPath");
  const context = canvas.getContext("2d");
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 40;
  context.lineWidth = 2;
  context.strokeStyle = "#003300";

  //draw Earth
  context.beginPath();
  context.arc(50, centerY, radius, 0, 2 * Math.PI, false);
  context.fillStyle = "blue";
  context.fill();
  context.stroke();

  //draw Mars
  context.beginPath();
  context.arc(canvas.width-50, centerY, radius, 0, 2 * Math.PI, false);
  context.fillStyle = "red";
  context.fill();

  context.stroke();

  //draw flightpath
  context.beginPath();
  context.moveTo(0, centerY);
  context.lineTo(canvas.width, centerY);
  context.stroke();

  //draw rocket
  const rocket_radius = 10;

  context.beginPath();
  context.arc(centerX, centerY, rocket_radius, 0, 2 * Math.PI, false);
  context.fillStyle = "purple";
  context.fill();
  context.stroke();
}
