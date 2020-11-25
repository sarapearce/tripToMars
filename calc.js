function timeInLockdown() {
  const d1 = Date.now();
  const d2 = Date.parse("March 14, 2020");
  const time_in_sec = d1 - d2;
  return time_in_sec;
}

function rateToMars() {
  // Rate is in km/s
  return 7.9;
}

function timeToMars() {
  const rate = rateToMars();
  const distance = distanceToMars();
  const time_to_mars = distance / rate;
  console.log('time to mars', time_to_mars);
  return time_to_mars;
}

function distanceToMars() {
  // Distance is in km
  return 54600000;
}

function userDistanceToMars() {
  // Find the users percent of travel achieved so far
  const lockdown_time = timeInLockdown();
  const mars_time = timeToMars();
  const days_travelled = ((mars_time - lockdown_time)*(1/60)*(1/60)*(1/24)).toFixed(1);
  const input = document.getElementById("result");
  input.value = days_travelled;
}
