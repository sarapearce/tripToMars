export function timeInLockdown() {
  return new Date() - Date('March 14th, 2020');
}

export function rateToMars() {
  return 100;
}

export function timeToMars() {
  const rate = rateToMars();
  const distance = distanceToMars();
  return rate/distance;
}

export function distanceToMars() {
  return 5000;
}
