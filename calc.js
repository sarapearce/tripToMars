function timeInLockdown() {
  const d1 = new Date();
  const d2 = new Date("03/14/2020");
  const time_diff = d1.getTime() - d2.getTime();
  const day_diff = (time_diff / (10 * 3600 * 24)).toFixed(1);
  return day_diff;
}

function userDistanceToMars() {
  const lockdown_time = timeInLockdown();
  const months_travelled = lockdown_time / 30;
  console.log('months travelled', months_travelled);
  // Internet research says approximately 7 months to get to Mars from Earth, depending
  // on the time of year. For MVP, this is hardcoded as 7. Later we can do Google maps api call and
  // use that with time of year to get more precise/accurate answer.
  const percent_travelled = (months_travelled/7).toFixed(1);
  const input = document.getElementById("result");
  input.value = percent_travelled;
}

